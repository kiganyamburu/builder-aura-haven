# 📖 VerseFinder

> **Shazam for Bible verses** - Identify any spoken Bible verse instantly with AI-powered speech recognition

VerseFinder is a modern web application that uses advanced speech recognition to identify Bible verses from audio input. Simply record yourself or someone else speaking a Bible verse, and VerseFinder will instantly identify the reference, show the full text, and provide helpful context.

![VerseFinder Demo](https://img.shields.io/badge/Status-Live%20Demo-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎤 **Audio Recognition**

- **Real-time Speech Recognition** - Live transcription using Web Speech API
- **Audio File Upload** - Support for MP3/WAV files
- **Live Transcript Preview** - See what's being heard in real-time
- **High Accuracy Matching** - Advanced fuzzy matching algorithms

### 📚 **Bible Verse Database**

- **Multiple Translations** - NIV, ESV, KJV, NASB, NLT support
- **Contextual Information** - Chapter summaries and verse context
- **Confidence Scoring** - Accuracy indicators for matches
- **Demo Verses** - Pre-loaded popular verses for testing

### 🎨 **Modern UI/UX**

- **Light/Dark Mode** - System preference detection with manual toggle
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Beautiful Gradients** - Spiritual yet modern aesthetic
- **Accessibility** - WCAG compliant with screen reader support

### 🔧 **Developer Experience**

- **TypeScript** - Full type safety throughout
- **Hot Reload** - Instant development feedback
- **Production Ready** - Optimized builds and deployment
- **Modern Tooling** - Vite, React Router 6, TailwindCSS

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- **Modern browser** with microphone access

### Installation

```bash
# Clone the repository
git clone https://github.com/kiganyamburu/builder-aura-haven.git
cd versefinder

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🎯 How to Use

### 1. **Record Audio**

- Click and hold the large microphone button
- Speak or play a Bible verse clearly
- Watch the live transcript appear below
- Release the button when done

### 2. **Upload Audio File**

- Click "Choose Audio File"
- Select an MP3 or WAV file containing a Bible verse
- Click "Find Verse" to process

### 3. **Test with Text**

- Click "Test with Text Input"
- Type part of a Bible verse
- Click "Find Verse from Text"

### 4. **View Results**

- See the verse reference (e.g., John 3:16)
- Read the full verse text in your preferred translation
- Explore the contextual information
- Save or share the verse

## 📋 Available Demo Verses

VerseFinder currently recognizes these popular Bible verses:

- **John 3:16** - "For God so loved the world..."
- **Philippians 4:13** - "I can do all things through Christ..."
- **Psalm 23:1** - "The Lord is my shepherd..."
- **Romans 8:28** - "All things work together for good..."
- **Jeremiah 29:11** - "I know the plans I have for you..."
- **Isaiah 40:31** - "Those who hope in the Lord..."
- **Matthew 28:19-20** - "Go and make disciples..."
- **1 Corinthians 13:4-7** - "Love is patient, love is kind..."

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **TypeScript** - Full type safety
- **Vite** - Fast build tool and dev server
- **TailwindCSS 3** - Utility-first styling
- **React Router 6** - SPA routing
- **Radix UI** - Accessible component primitives

### Backend

- **Express.js** - RESTful API server
- **Node.js** - Runtime environment
- **Zod** - Runtime type validation

### Development Tools

- **Vitest** - Fast unit testing
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **TypeScript** - Static type checking

### Speech Recognition

- **Web Speech API** - Browser-native speech recognition
- **Custom Fuzzy Matching** - Intelligent verse identification
- **Multiple Translation Support** - Cross-reference capabilities

## 📁 Project Structure

```
versefinder/
├── client/                    # React frontend
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Radix UI component library
│   │   └── theme-toggle.tsx # Light/dark mode toggle
│   ├── contexts/            # React contexts
│   │   └── theme-context.tsx # Theme management
│   ├── lib/                 # Utility libraries
│   │   ├── utils.ts         # Common utilities
│   │   └── verse-recognition.ts # Bible verse matching logic
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Homepage with recording interface
│   │   ├── History.tsx      # Search history (placeholder)
│   │   ├── Saved.tsx        # Saved verses (placeholder)
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # App entry point and routing
│   └── global.css           # Global styles and theme variables
├── server/                   # Express backend
│   ├── routes/              # API route handlers
│   └── index.ts             # Server configuration
├── shared/                   # Shared types between client/server
│   └── api.ts               # API interface definitions
└── public/                   # Static assets
```

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run typecheck    # Run TypeScript type checking
npm test            # Run test suite

# Production
npm run build       # Build for production
npm start          # Start production server

# Code Quality
npm run format.fix  # Format code with Prettier
```

## 🌙 Theme Support

VerseFinder includes a beautiful light/dark mode system:

- **Automatic Detection** - Respects system preferences
- **Manual Toggle** - Click the sun/moon icon to switch
- **Persistent Settings** - Remembers your choice
- **Smooth Transitions** - Elegant color transitions

## 🔍 Browser Compatibility

### Speech Recognition Support

- ✅ **Chrome/Chromium** - Full real-time speech recognition
- ✅ **Microsoft Edge** - Full real-time speech recognition
- ⚠️ **Firefox/Safari** - Audio recording only (no live transcription)

### General Compatibility

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Desktop and mobile responsive design

## 🚧 Roadmap

### Phase 1 (Current)

- [x] Basic speech recognition
- [x] Demo verse database
- [x] Light/dark mode
- [x] Responsive design

### Phase 2 (Planned)

- [ ] Complete Bible verse database
- [ ] User authentication
- [ ] Save and organize verses
- [ ] Search history
- [ ] Offline support

### Phase 3 (Future)

- [ ] Cloud speech recognition (Google/Azure)
- [ ] Multiple language support
- [ ] Audio sermon processing
- [ ] Social sharing features
- [ ] Mobile app (React Native)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the test suite: `npm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Standards

- **TypeScript** - All new code must be TypeScript
- **Testing** - Include tests for new features
- **Accessibility** - Ensure WCAG compliance
- **Documentation** - Update docs for new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Web Speech API** - Browser-native speech recognition
- **Radix UI** - Accessible component primitives
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **Bible Gateway** - Inspiration for verse formatting

## 📧 Contact

- **Project Maintainer** - [Your Name](mburukiganya@gmail.com)
- **Issues** - [GitHub Issues](https://github.com/your-username/versefinder/issues)
- **Issues** - [GitHub Issues](https://github.com/your-username/versefinder/issues)
- **Discussions** - [GitHub Discussions](https://github.com/your-username/versefinder/discussions)

---

<div align="center">

**[⭐ Star this project](https://github.com/kiganyamburu/builder-aura-haven)** if you find it helpful!

Made by Peter mburu  for the faith community

</div>
