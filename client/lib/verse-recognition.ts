// Sample Bible verses database for demo purposes
const verseDatabase = [
  {
    reference: "John 3:16",
    text: {
      NIV: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      ESV: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
      KJV: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      NASB: "For God so loved the world, that He gave His only begotten Son, that whoever believes in Him shall not perish, but have eternal life.",
      NLT: "For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.",
    },
    context:
      "This verse is part of Jesus's conversation with Nicodemus about being born again and God's love for humanity.",
    keywords: [
      "god",
      "loved",
      "world",
      "son",
      "believes",
      "perish",
      "eternal",
      "life",
    ],
  },
  {
    reference: "Romans 8:28",
    text: {
      NIV: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      ESV: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
      KJV: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      NASB: "And we know that God causes all things to work together for good to those who love God, to those who are called according to His purpose.",
      NLT: "And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.",
    },
    context:
      "Paul assures believers that God works all circumstances for the good of those who love Him.",
    keywords: [
      "all",
      "things",
      "work",
      "together",
      "good",
      "love",
      "god",
      "called",
      "purpose",
    ],
  },
  {
    reference: "Philippians 4:13",
    text: {
      NIV: "I can do all this through him who gives me strength.",
      ESV: "I can do all things through him who strengthens me.",
      KJV: "I can do all things through Christ which strengtheneth me.",
      NASB: "I can do all things through Him who strengthens me.",
      NLT: "For I can do everything through Christ, who gives me strength.",
    },
    context:
      "Paul expresses contentment and confidence in Christ's strength regardless of circumstances.",
    keywords: [
      "can",
      "do",
      "all",
      "things",
      "through",
      "christ",
      "strength",
      "strengthens",
    ],
  },
  {
    reference: "Jeremiah 29:11",
    text: {
      NIV: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
      ESV: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
      KJV: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.",
      NASB: "For I know the plans that I have for you, declares the Lord, plans for welfare and not for calamity to give you a future and a hope.",
      NLT: "For I know the plans I have for you, says the Lord. They are plans for good and not for disaster, to give you a future and a hope.",
    },
    context:
      "God's promise to the exiled Israelites about His good plans for their future.",
    keywords: [
      "know",
      "plans",
      "lord",
      "prosper",
      "harm",
      "hope",
      "future",
      "welfare",
    ],
  },
  {
    reference: "Psalm 23:1",
    text: {
      NIV: "The Lord is my shepherd, I lack nothing.",
      ESV: "The Lord is my shepherd; I shall not want.",
      KJV: "The Lord is my shepherd; I shall not want.",
      NASB: "The Lord is my shepherd, I shall not want.",
      NLT: "The Lord is my shepherd; I have all that I need.",
    },
    context:
      "David's famous psalm expressing trust in God's provision and care.",
    keywords: [
      "lord",
      "shepherd",
      "shall",
      "not",
      "want",
      "lack",
      "nothing",
      "need",
    ],
  },
  {
    reference: "Isaiah 40:31",
    text: {
      NIV: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      ESV: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
      KJV: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
      NASB: "Yet those who wait for the Lord will gain new strength; they will mount up with wings like eagles, they will run and not get tired, they will walk and not become weary.",
      NLT: "But those who trust in the Lord will find new strength. They will soar high on wings like eagles. They will run and not grow weary. They will walk and not faint.",
    },
    context:
      "Isaiah's prophecy about the strength that comes from waiting on and trusting in the Lord.",
    keywords: [
      "wait",
      "hope",
      "lord",
      "renew",
      "strength",
      "wings",
      "eagles",
      "run",
      "weary",
      "walk",
      "faint",
    ],
  },
  {
    reference: "Matthew 28:19-20",
    text: {
      NIV: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.",
      ESV: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.",
      KJV: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world.",
      NASB: "Go therefore and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit, teaching them to observe all that I commanded you; and lo, I am with you always, even to the end of the age.",
      NLT: "Therefore, go and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit. Teach these new disciples to obey all the commands I have given you. And be sure of this: I am with you always, even to the end of the age.",
    },
    context: "Jesus's Great Commission to His disciples before His ascension.",
    keywords: [
      "go",
      "make",
      "disciples",
      "nations",
      "baptizing",
      "father",
      "son",
      "holy",
      "spirit",
      "teaching",
      "commanded",
      "with",
      "you",
      "always",
    ],
  },
  {
    reference: "1 Corinthians 13:4-7",
    text: {
      NIV: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.",
      ESV: "Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.",
      KJV: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things.",
      NASB: "Love is patient, love is kind and is not jealous; love does not brag and is not arrogant, does not act unbecomingly; it does not seek its own, is not provoked, does not take into account a wrong suffered, does not rejoice in unrighteousness, but rejoices with the truth; bears all things, believes all things, hopes all things, endures all things.",
      NLT: "Love is patient and kind. Love is not jealous or boastful or proud or rude. It does not demand its own way. It is not irritable, and it keeps no record of being wronged. It does not rejoice about injustice but rejoices whenever the truth wins out. Love never gives up, never loses faith, is always hopeful, and endures through every circumstance.",
    },
    context:
      "Paul's famous description of love in his letter to the Corinthians.",
    keywords: [
      "love",
      "patient",
      "kind",
      "envy",
      "boast",
      "proud",
      "protects",
      "trusts",
      "hopes",
      "perseveres",
    ],
  },
];

// Search optimization: Pre-computed indices and caching
interface SearchIndex {
  wordToVerses: Map<string, number[]>; // word -> array of verse indices
  keywordToVerses: Map<string, number[]>; // keyword -> array of verse indices
  verseTexts: string[][]; // [verseIndex][translationIndex] -> processed text
  translations: string[]; // translation names in order
}

let searchIndex: SearchIndex | null = null;
const searchCache = new Map<string, VerseMatch | null>();

// Build search index for faster lookups
function buildSearchIndex(): SearchIndex {
  if (searchIndex) return searchIndex;

  console.log("Building search index...");

  const wordToVerses = new Map<string, number[]>();
  const keywordToVerses = new Map<string, number[]>();
  const verseTexts: string[][] = [];
  const translations = ["NIV", "ESV", "KJV", "NASB", "NLT"];

  verseDatabase.forEach((verse, verseIndex) => {
    const verseTranslations: string[] = [];

    // Index all translations for this verse
    translations.forEach((translation) => {
      const text =
        verse.text[translation as keyof typeof verse.text] || verse.text.NIV;
      const processedText = preprocessText(text);
      verseTranslations.push(processedText);

      // Index individual words
      const words = processedText
        .split(/\s+/)
        .filter((word) => word.length > 2);
      words.forEach((word) => {
        if (!wordToVerses.has(word)) {
          wordToVerses.set(word, []);
        }
        const indices = wordToVerses.get(word)!;
        if (!indices.includes(verseIndex)) {
          indices.push(verseIndex);
        }
      });
    });

    verseTexts.push(verseTranslations);

    // Index keywords
    verse.keywords.forEach((keyword) => {
      if (!keywordToVerses.has(keyword)) {
        keywordToVerses.set(keyword, []);
      }
      const indices = keywordToVerses.get(keyword)!;
      if (!indices.includes(verseIndex)) {
        indices.push(verseIndex);
      }
    });
  });

  searchIndex = {
    wordToVerses,
    keywordToVerses,
    verseTexts,
    translations,
  };

  console.log(
    `Search index built: ${wordToVerses.size} unique words, ${keywordToVerses.size} keywords`,
  );
  return searchIndex;
}

// Get candidate verses based on word overlap (much faster than checking all verses)
function getCandidateVerses(text: string): number[] {
  const index = buildSearchIndex();
  const words = preprocessText(text)
    .split(/\s+/)
    .filter((word) => word.length > 2);
  const candidateScores = new Map<number, number>();

  // Find verses that contain the input words
  words.forEach((word) => {
    // Exact word matches
    if (index.wordToVerses.has(word)) {
      index.wordToVerses.get(word)!.forEach((verseIndex) => {
        candidateScores.set(
          verseIndex,
          (candidateScores.get(verseIndex) || 0) + 2,
        );
      });
    }

    // Partial word matches (for words > 3 characters)
    if (word.length > 3) {
      for (const [indexWord, verseIndices] of index.wordToVerses) {
        if (
          indexWord.includes(word) ||
          word.includes(indexWord) ||
          (indexWord.length > 3 &&
            indexWord.substring(0, 3) === word.substring(0, 3))
        ) {
          verseIndices.forEach((verseIndex) => {
            candidateScores.set(
              verseIndex,
              (candidateScores.get(verseIndex) || 0) + 1,
            );
          });
        }
      }
    }
  });

  // Sort candidates by score and return top candidates
  const sortedCandidates = Array.from(candidateScores.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, Math.min(5, candidateScores.size)) // Only check top 5 candidates
    .map(([verseIndex]) => verseIndex);

  // If no good candidates, fall back to checking all verses
  return sortedCandidates.length > 0
    ? sortedCandidates
    : Array.from({ length: verseDatabase.length }, (_, i) => i);
}

// More conservative text preprocessing for Bible verses
function preprocessText(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      // Only remove filler words that don't add meaning to Bible verses
      .replace(/\b(um|uh|like|you know|so|well)\b/g, "")
      .trim()
  );
}

// Simple word overlap matching for speech recognition
function calculateSimpleMatch(text1: string, text2: string): number {
  const words1 = text1
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 2);
  const words2 = text2
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 2);

  if (words1.length === 0 || words2.length === 0) return 0;

  let matches = 0;
  for (const word1 of words1) {
    for (const word2 of words2) {
      if (
        word1 === word2 ||
        word1.includes(word2) ||
        word2.includes(word1) ||
        (word1.length > 4 &&
          word2.length > 4 &&
          (word1.substring(0, 4) === word2.substring(0, 4) ||
            (Math.abs(word1.length - word2.length) <= 2 &&
              levenshteinDistance(word1, word2) <= 2)))
      ) {
        matches++;
        break;
      }
    }
  }

  return (matches / Math.max(words1.length, words2.length)) * 100;
}

// Advanced text similarity using multiple algorithms
function calculateSimilarity(text1: string, text2: string): number {
  const processed1 = preprocessText(text1);
  const processed2 = preprocessText(text2);

  const words1 = processed1.split(/\s+/).filter((word) => word.length > 2);
  const words2 = processed2.split(/\s+/).filter((word) => word.length > 2);

  if (words1.length === 0 || words2.length === 0) return 0;

  // Exact word matches
  const exactMatches = words1.filter((word) => words2.includes(word));
  const exactScore =
    (exactMatches.length / Math.max(words1.length, words2.length)) * 100;

  // Fuzzy matches (similar words)
  let fuzzyMatches = 0;
  for (const word1 of words1) {
    for (const word2 of words2) {
      if (word1.length > 3 && word2.length > 3) {
        if (
          word1.includes(word2) ||
          word2.includes(word1) ||
          levenshteinDistance(word1, word2) <= 2
        ) {
          fuzzyMatches++;
          break;
        }
      }
    }
  }
  const fuzzyScore =
    (fuzzyMatches / Math.max(words1.length, words2.length)) * 100;

  // Sequence matching (order matters)
  const sequenceScore = calculateSequenceMatch(words1, words2);

  // Weighted combination
  return exactScore * 0.5 + fuzzyScore * 0.3 + sequenceScore * 0.2;
}

// Calculate Levenshtein distance for fuzzy matching
function levenshteinDistance(str1: string, str2: string): number {
  const matrix = [];
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }
  return matrix[str2.length][str1.length];
}

// Calculate sequence matching score
function calculateSequenceMatch(words1: string[], words2: string[]): number {
  let matches = 0;
  const minLength = Math.min(words1.length, words2.length);

  for (let i = 0; i < minLength; i++) {
    if (words1[i] === words2[i]) {
      matches++;
    }
  }

  return minLength > 0 ? (matches / minLength) * 100 : 0;
}

// Simplified keyword matching for speech recognition
function calculateKeywordMatch(
  recognizedText: string,
  verse: (typeof verseDatabase)[0],
): number {
  const textLower = recognizedText.toLowerCase();
  const words = textLower.split(/\s+/).filter((word) => word.length > 2);

  let matchedKeywords = 0;

  for (const keyword of verse.keywords) {
    let found = false;

    // Check if keyword appears anywhere in the text
    if (textLower.includes(keyword)) {
      found = true;
    } else {
      // Check for partial matches in individual words
      for (const word of words) {
        if (
          word.includes(keyword) ||
          keyword.includes(word) ||
          (word.length > 3 &&
            keyword.length > 3 &&
            word.substring(0, 3) === keyword.substring(0, 3))
        ) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      matchedKeywords++;
    }
  }

  // More generous scoring
  return (matchedKeywords / verse.keywords.length) * 100;
}

// Speech recognition using Web Speech API
function speechToText(audioFile: File): Promise<string> {
  return new Promise((resolve, reject) => {
    // Check if Web Speech API is supported
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      reject(new Error("Speech recognition not supported in this browser"));
      return;
    }

    // Create audio element to play the recorded file
    const audio = document.createElement("audio");
    const url = URL.createObjectURL(audioFile);
    audio.src = url;

    // For now, we'll use a simplified approach
    // In a real app, you'd need to process the audio buffer with the Speech Recognition API
    // or send it to a cloud service like Google Speech-to-Text

    // For demo purposes, let's use a more realistic approach:
    // We'll simulate that the recording was successful and return a placeholder
    setTimeout(() => {
      URL.revokeObjectURL(url);
      // In a real implementation, this would be the actual transcription
      resolve(
        "Demo: Please use the text input below for testing verse recognition",
      );
    }, 1500);
  });
}

export interface VerseMatch {
  reference: string;
  text: string;
  translation: string;
  context: string;
  confidence: number;
}

export async function recognizeVerse(
  audioFile: File,
  preferredTranslation: string = "NIV",
): Promise<VerseMatch | null> {
  try {
    // Step 1: Convert speech to text
    const recognizedText = await speechToText(audioFile);

    // Step 2: Find best matching verse
    let bestMatch: {
      verse: (typeof verseDatabase)[0];
      confidence: number;
    } | null = null;

    for (const verse of verseDatabase) {
      // Calculate similarity with the preferred translation
      const textSimilarity = calculateSimilarity(
        recognizedText,
        verse.text[preferredTranslation as keyof typeof verse.text] ||
          verse.text.NIV,
      );

      // Calculate keyword match
      const keywordMatch = calculateKeywordMatch(recognizedText, verse);

      // Combined confidence score (weighted average)
      const confidence = textSimilarity * 0.7 + keywordMatch * 0.3;

      if (!bestMatch || confidence > bestMatch.confidence) {
        bestMatch = { verse, confidence };
      }
    }

    // Only return results with reasonable confidence
    if (bestMatch && bestMatch.confidence > 15) {
      return {
        reference: bestMatch.verse.reference,
        text:
          bestMatch.verse.text[
            preferredTranslation as keyof typeof bestMatch.verse.text
          ] || bestMatch.verse.text.NIV,
        translation: preferredTranslation,
        context: bestMatch.verse.context,
        confidence: Math.round(bestMatch.confidence),
      };
    }

    return null;
  } catch (error) {
    console.error("Error recognizing verse:", error);
    return null;
  }
}

// For testing purposes - simulate text input
export function recognizeVerseFromText(
  text: string,
  preferredTranslation: string = "NIV",
): VerseMatch | null {
  if (!text || text.trim().length < 2) return null;

  const matches: Array<{
    verse: (typeof verseDatabase)[0];
    confidence: number;
    details: {
      simpleMatch: number;
      advancedMatch: number;
      keywordMatch: number;
    };
  }> = [];

  console.log("Searching for:", text);

  // Try matching against all translations with multiple algorithms
  for (const verse of verseDatabase) {
    let bestSimpleMatch = 0;
    let bestAdvancedMatch = 0;

    // Test against all available translations
    for (const [translation, verseText] of Object.entries(verse.text)) {
      const simpleMatch = calculateSimpleMatch(text, verseText);
      const advancedMatch = calculateSimilarity(text, verseText);

      bestSimpleMatch = Math.max(bestSimpleMatch, simpleMatch);
      bestAdvancedMatch = Math.max(bestAdvancedMatch, advancedMatch);
    }

    const keywordMatch = calculateKeywordMatch(text, verse);

    // More lenient confidence calculation
    const confidence = Math.max(
      bestSimpleMatch * 0.6 + keywordMatch * 0.4,
      bestAdvancedMatch * 0.4 + keywordMatch * 0.6,
      bestSimpleMatch * 0.8 + bestAdvancedMatch * 0.2,
    );

    matches.push({
      verse,
      confidence,
      details: {
        simpleMatch: bestSimpleMatch,
        advancedMatch: bestAdvancedMatch,
        keywordMatch,
      },
    });

    console.log(
      `${verse.reference}: simple=${bestSimpleMatch.toFixed(1)}, advanced=${bestAdvancedMatch.toFixed(1)}, keyword=${keywordMatch.toFixed(1)}, final=${confidence.toFixed(1)}`,
    );
  }

  // Sort by confidence
  matches.sort((a, b) => b.confidence - a.confidence);

  const bestMatch = matches[0];

  // Much more lenient thresholds for speech recognition
  const minConfidence = 8; // Lowered from 25

  if (bestMatch && bestMatch.confidence > minConfidence) {
    console.log(
      `Match found: ${bestMatch.verse.reference} with confidence ${bestMatch.confidence.toFixed(1)}`,
    );

    return {
      reference: bestMatch.verse.reference,
      text:
        bestMatch.verse.text[
          preferredTranslation as keyof typeof bestMatch.verse.text
        ] || bestMatch.verse.text.NIV,
      translation: preferredTranslation,
      context: bestMatch.verse.context,
      confidence: Math.min(95, Math.round(bestMatch.confidence)),
    };
  }

  console.log(
    "No match found. Best confidence was:",
    bestMatch?.confidence?.toFixed(1) || "N/A",
  );
  return null;
}
