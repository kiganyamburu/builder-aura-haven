import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Mic,
  Upload,
  BookOpen,
  Play,
  Pause,
  Volume2,
  Save,
  Share,
  History,
  Search,
  AlertCircle,
  Type,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  recognizeVerse,
  recognizeVerseFromText,
  VerseMatch,
  getSearchStats,
  clearSearchCache,
} from "@/lib/verse-recognition";

export default function Index() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<VerseMatch | null>(null);
  const [selectedTranslation, setSelectedTranslation] = useState("NIV");
  const [recordingTime, setRecordingTime] = useState(0);
  const [testText, setTestText] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [finalTranscript, setFinalTranscript] = useState("");
  const [speechSupported, setSpeechSupported] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check for speech recognition support
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    setSpeechSupported(!!SpeechRecognition);

    if (isRecording && intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else if (!isRecording && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRecordingTime(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRecording]);

  const startRecording = async () => {
    try {
      setError(null);
      setLiveTranscript("");

      // Start audio recording
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioFile = new File([audioBlob], "recording.wav", {
          type: "audio/wav",
        });
        setAudioFile(audioFile);
        stream.getTracks().forEach((track) => track.stop());
      };

      // Start speech recognition if supported
      if (speechSupported) {
        const SpeechRecognition =
          (window as any).SpeechRecognition ||
          (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        // Optimized configuration for accuracy
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";
        recognition.maxAlternatives = 3; // Get multiple alternatives
        // Don't set grammars - use default for better general recognition

        let finalTranscript = "";
        let interimTranscript = "";

        recognition.onresult = (event) => {
          interimTranscript = "";
          finalTranscript = "";

          for (let i = 0; i < event.results.length; i++) {
            const result = event.results[i];
            const transcript = result[0].transcript;

            if (result.isFinal) {
              finalTranscript += transcript + " ";
            } else {
              interimTranscript += transcript;
            }
          }

          // Combine final and interim results
          const fullTranscript = (finalTranscript + interimTranscript).trim();
          setLiveTranscript(fullTranscript);
        };

        recognition.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          if (event.error === "no-speech") {
            setError(
              "No speech detected. Please speak louder or closer to the microphone.",
            );
          } else if (event.error === "audio-capture") {
            setError(
              "Microphone access denied. Please check your browser permissions.",
            );
          } else if (event.error === "not-allowed") {
            setError(
              "Microphone permission denied. Please allow microphone access and try again.",
            );
          } else {
            setError(
              `Speech recognition error: ${event.error}. Please try again.`,
            );
          }
        };

        recognition.onend = () => {
          // Auto-restart if still recording (for continuous recognition)
          if (isRecording) {
            try {
              recognition.start();
            } catch (e) {
              console.log("Recognition restart failed:", e);
            }
          }
        };

        recognition.start();
      }

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      setError("Could not access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    // Save the current transcript as final when recording stops
    if (liveTranscript.trim()) {
      setFinalTranscript(liveTranscript.trim());
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      file &&
      (file.type === "audio/wav" ||
        file.type === "audio/mp3" ||
        file.type === "audio/mpeg")
    ) {
      setAudioFile(file);
    }
  };

  const processAudio = async () => {
    const transcriptToUse = finalTranscript.trim() || liveTranscript.trim();

    if (!audioFile && !transcriptToUse) {
      setError("No audio or transcript available to process.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      let verseResult: VerseMatch | null = null;

      // Prioritize final transcript, then live transcript, then audio file
      if (transcriptToUse) {
        console.log("Processing transcript:", transcriptToUse);
        verseResult = recognizeVerseFromText(
          transcriptToUse,
          selectedTranslation,
        );

        // If confidence is low, try with just the live transcript
        if (
          !verseResult &&
          finalTranscript &&
          liveTranscript !== finalTranscript
        ) {
          verseResult = recognizeVerseFromText(
            liveTranscript,
            selectedTranslation,
          );
        }
      } else if (audioFile) {
        // Fallback to audio file processing
        verseResult = await recognizeVerse(audioFile, selectedTranslation);
      }

      if (verseResult) {
        setResult(verseResult);
        // Store successful transcript for future reference
        if (transcriptToUse) {
          setFinalTranscript(transcriptToUse);
        }
      } else {
        const suggestions = [
          "Try speaking more slowly and clearly",
          "Ensure good microphone quality",
          "Speak one verse at a time",
          "Check if the verse is in our demo list below",
        ];
        setError(
          `No matching verse found. ${suggestions[Math.floor(Math.random() * suggestions.length)]}.`,
        );
      }
    } catch (err) {
      setError("Error processing audio. Please try again.");
      console.error("Audio processing error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const processTextInput = () => {
    if (!testText.trim()) return;

    setIsProcessing(true);
    setError(null);

    try {
      const verseResult = recognizeVerseFromText(testText, selectedTranslation);

      if (verseResult) {
        setResult(verseResult);
      } else {
        setError(
          "No matching verse found. Try different words or check if the verse is in our database.",
        );
      }
    } catch (err) {
      setError("Error processing text. Please try again.");
      console.error("Text processing error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-verse-50 via-background to-verse-100 dark:from-verse-900 dark:via-background dark:to-verse-800">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-verse-500 text-white p-2 rounded-xl">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-verse-500">
                  VerseFinder
                </h1>
                <p className="text-sm text-muted-foreground">
                  Shazam for Bible verses
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="/history">
                <Button variant="ghost" size="sm">
                  <History className="h-4 w-4 mr-2" />
                  History
                </Button>
              </Link>
              <Link to="/saved">
                <Button variant="ghost" size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Saved
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-verse-100 text-verse-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mic className="h-4 w-4 mr-2" />
            Powered by AI Speech Recognition
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-verse-500 mb-6">
            Identify Any
            <span className="block text-gold-500">Bible Verse</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Record or upload audio of someone speaking a Bible verse, and we'll
            instantly identify the reference, show you the full text, and
            provide context.
          </p>
        </div>

        {/* Recording Interface */}
        <Card className="max-w-2xl mx-auto mb-8 shadow-lg border-verse-200">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              {/* Recording Button */}
              <div className="relative">
                <Button
                  size="lg"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`
                    w-32 h-32 rounded-full transition-all duration-300 
                    ${
                      isRecording
                        ? "bg-red-500 hover:bg-red-600 animate-pulse shadow-red-200 shadow-2xl"
                        : "bg-verse-500 hover:bg-verse-600 shadow-verse-200 shadow-lg"
                    }
                  `}
                  disabled={isProcessing}
                >
                  {isRecording ? (
                    <Pause className="h-12 w-12" />
                  ) : (
                    <Mic className="h-12 w-12" />
                  )}
                </Button>
                {isRecording && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-700"
                    >
                      {formatTime(recordingTime)}
                    </Badge>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-lg font-medium">
                  {isRecording ? "Recording..." : "Tap to Record"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isRecording
                    ? speechSupported
                      ? "Speak a Bible verse - I'm listening and transcribing"
                      : "Recording audio... (Speech recognition not supported in this browser)"
                    : speechSupported
                      ? "Hold the button and speak a Bible verse"
                      : "Audio recording only (Speech recognition not supported)"}
                </p>

                {/* Live Transcript Display */}
                {(isRecording || finalTranscript) &&
                  (liveTranscript || finalTranscript) && (
                    <div className="mt-4 space-y-2">
                      {liveTranscript && (
                        <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border border-verse-200 dark:border-verse-700">
                          <p className="text-xs text-verse-600 dark:text-verse-400 mb-1 flex items-center">
                            <span
                              className={`w-2 h-2 rounded-full mr-2 ${isRecording ? "bg-red-400 animate-pulse" : "bg-green-400"}`}
                            ></span>
                            {isRecording
                              ? "Live transcript:"
                              : "Recorded transcript:"}
                          </p>
                          <p className="text-sm text-verse-700 dark:text-verse-300 italic">
                            "{liveTranscript}"
                          </p>
                          {liveTranscript.length > 10 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Quality:{" "}
                              {liveTranscript.length > 30 ? "Good" : "Fair"} •{" "}
                              {liveTranscript.split(" ").length} words
                            </p>
                          )}
                        </div>
                      )}
                      {finalTranscript &&
                        finalTranscript !== liveTranscript && (
                          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                            <p className="text-xs text-green-600 dark:text-green-400 mb-1">
                              Best transcript:
                            </p>
                            <p className="text-sm text-green-700 dark:text-green-300 italic">
                              "{finalTranscript}"
                            </p>
                          </div>
                        )}
                    </div>
                  )}
              </div>

              <Separator className="my-6" />

              {/* File Upload */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Or upload an audio file
                </p>
                <div className="relative">
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isProcessing}
                  />
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled={isProcessing}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {audioFile ? audioFile.name : "Choose Audio File"}
                  </Button>
                </div>
              </div>

              {/* Translation Selector */}
              <div className="flex items-center justify-center space-x-4">
                <label className="text-sm font-medium">Translation:</label>
                <Select
                  value={selectedTranslation}
                  onValueChange={setSelectedTranslation}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NIV">NIV</SelectItem>
                    <SelectItem value="ESV">ESV</SelectItem>
                    <SelectItem value="KJV">KJV</SelectItem>
                    <SelectItem value="NASB">NASB</SelectItem>
                    <SelectItem value="NLT">NLT</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Text Input for Testing */}
              <div className="space-y-4">
                <Button
                  variant="outline"
                  onClick={() => setShowTextInput(!showTextInput)}
                  className="w-full"
                >
                  <Type className="h-4 w-4 mr-2" />
                  {showTextInput ? "Hide" : "Test with"} Text Input
                </Button>

                {showTextInput && (
                  <div className="space-y-3">
                    <Input
                      placeholder="Type part of a Bible verse to test recognition..."
                      value={testText}
                      onChange={(e) => setTestText(e.target.value)}
                      className="w-full"
                    />
                    <Button
                      onClick={processTextInput}
                      disabled={isProcessing || !testText.trim()}
                      className="w-full bg-gold-500 hover:bg-gold-600"
                      size="sm"
                    >
                      {isProcessing ? (
                        <>
                          <Search className="h-4 w-4 mr-2 animate-spin" />
                          Searching...
                        </>
                      ) : (
                        <>
                          <Search className="h-4 w-4 mr-2" />
                          Find Verse from Text
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>

              {/* Process Button */}
              {(audioFile || liveTranscript) && (
                <Button
                  onClick={processAudio}
                  disabled={isProcessing}
                  className="w-full bg-verse-500 hover:bg-verse-600"
                  size="lg"
                >
                  {isProcessing ? (
                    <>
                      <Search className="h-4 w-4 mr-2 animate-spin" />
                      Identifying Verse...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      {liveTranscript
                        ? "Find Verse from Speech"
                        : "Find Verse from Audio"}
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Error Message */}
        {error && (
          <Card className="max-w-2xl mx-auto mb-4 shadow-lg border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-700">No Verse Found</h4>
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                  <p className="text-red-500 text-xs mt-2">
                    Try verses like: "For God so loved the world", "I can do all
                    things through Christ", "The Lord is my shepherd"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {result && (
          <Card className="max-w-2xl mx-auto shadow-lg border-verse-200">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-verse-500">
                    Verse Found!
                  </h3>
                  <Badge
                    variant="secondary"
                    className={`${result.confidence > 70 ? "bg-green-100 text-green-700" : result.confidence > 40 ? "bg-yellow-100 text-yellow-700" : "bg-orange-100 text-orange-700"}`}
                  >
                    {result.confidence}% confident
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-verse-600 mb-2">
                      {result.reference}
                    </h4>
                    <p className="text-foreground text-lg leading-relaxed italic">
                      "{result.text}"
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      — {result.translation}
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h5 className="font-medium text-verse-600 mb-2">Context</h5>
                    <p className="text-muted-foreground">{result.context}</p>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" size="sm">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Listen
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Demo Verses Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-lg border-verse-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-verse-500 mb-2">
                  Demo Verses Available
                </h3>
                <p className="text-muted-foreground">
                  Try typing or saying part of these verses to test the
                  recognition
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border dark:border-verse-700">
                    <strong className="text-verse-700 dark:text-verse-300">
                      John 3:16
                    </strong>{" "}
                    -{" "}
                    <span className="text-verse-600 dark:text-verse-400">
                      "For God so loved the world..."
                    </span>
                  </div>
                  <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border dark:border-verse-700">
                    <strong className="text-verse-700 dark:text-verse-300">
                      Philippians 4:13
                    </strong>{" "}
                    -{" "}
                    <span className="text-verse-600 dark:text-verse-400">
                      "I can do all things through..."
                    </span>
                  </div>
                  <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border dark:border-verse-700">
                    <strong className="text-verse-700 dark:text-verse-300">
                      Psalm 23:1
                    </strong>{" "}
                    -{" "}
                    <span className="text-verse-600 dark:text-verse-400">
                      "The Lord is my shepherd..."
                    </span>
                  </div>
                  <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border dark:border-verse-700">
                    <strong className="text-verse-700 dark:text-verse-300">
                      Romans 8:28
                    </strong>{" "}
                    -{" "}
                    <span className="text-verse-600 dark:text-verse-400">
                      "All things work together..."
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border dark:border-verse-700">
                    <strong className="text-verse-700 dark:text-verse-300">
                      Jeremiah 29:11
                    </strong>{" "}
                    -{" "}
                    <span className="text-verse-600 dark:text-verse-400">
                      "I know the plans I have..."
                    </span>
                  </div>
                  <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border dark:border-verse-700">
                    <strong className="text-verse-700 dark:text-verse-300">
                      Isaiah 40:31
                    </strong>{" "}
                    -{" "}
                    <span className="text-verse-600 dark:text-verse-400">
                      "Those who hope in the Lord..."
                    </span>
                  </div>
                  <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border dark:border-verse-700">
                    <strong className="text-verse-700 dark:text-verse-300">
                      Matthew 28:19-20
                    </strong>{" "}
                    -{" "}
                    <span className="text-verse-600 dark:text-verse-400">
                      "Go and make disciples..."
                    </span>
                  </div>
                  <div className="p-3 bg-verse-50 dark:bg-verse-800 rounded-lg border dark:border-verse-700">
                    <strong className="text-verse-700 dark:text-verse-300">
                      1 Corinthians 13:4-7
                    </strong>{" "}
                    -{" "}
                    <span className="text-verse-600 dark:text-verse-400">
                      "Love is patient, love is kind..."
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="bg-verse-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <Mic className="h-8 w-8 text-verse-500" />
            </div>
            <h3 className="text-lg font-semibold">Real-time Recognition</h3>
            <p className="text-muted-foreground text-sm">
              Record live audio or upload files for instant verse identification
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="bg-gold-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <BookOpen className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-lg font-semibold">Multiple Translations</h3>
            <p className="text-muted-foreground text-sm">
              Support for NIV, ESV, KJV, NASB, NLT and more Bible translations
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="bg-verse-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <Save className="h-8 w-8 text-verse-500" />
            </div>
            <h3 className="text-lg font-semibold">Save & Share</h3>
            <p className="text-muted-foreground text-sm">
              Build your collection of verses and share them with others
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
