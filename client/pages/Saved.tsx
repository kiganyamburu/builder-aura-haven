import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft, Heart, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export default function Saved() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-verse-50 via-background to-verse-100">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="bg-verse-500 text-white p-2 rounded-xl">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-verse-500">
                  VerseFinder
                </h1>
                <p className="text-sm text-muted-foreground">Saved Verses</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-verse-500 mb-4">
              Your Saved Verses
            </h2>
            <p className="text-muted-foreground">
              Your personal collection of meaningful Bible verses
            </p>
          </div>

          <Card className="shadow-lg border-verse-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bookmark className="h-5 w-5 mr-2" />
                Favorites Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16">
                <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No saved verses yet
                </h3>
                <p className="text-muted-foreground mb-6">
                  Find and save your favorite Bible verses to build your
                  personal collection
                </p>
                <Link to="/">
                  <Button className="bg-verse-500 hover:bg-verse-600">
                    Discover Verses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
