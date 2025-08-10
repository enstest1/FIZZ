# FIZZ Meme Coin Website

A vibrant, animated website for the FIZZ meme coin project on Abstract chain. Features a hyper-real matcha can mascot with interactive elements and smooth animations.

## 🎯 Project Overview

**FIZZ** is a character IP born on Abstract — part mascot, part collectible, part ongoing story. Built to live online first, everywhere later. The website embodies the "Crack the can · Wake the chain" philosophy with a playful, energetic design.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animated Background**: Floating bubble animation system
- **Interactive Modal**: Contract input for DexScreener integration
- **Modern UI**: Glass-morphism effects and neon text highlights
- **Accessibility**: Keyboard navigation and reduced motion support
- **Performance**: Optimized animations and smooth interactions

## 🏗️ Project Structure

```
fizz-site/
│
├── index.html              # Main HTML document
├── css/
│   └── style.css          # Custom styles and animations
├── js/
│   └── main.js            # Interactive functionality
├── assets/                 # Image assets (PNG files)
│   ├── fizz-hero.png      # Main mascot image
│   ├── fizz-closeup.png   # Close-up detail shot
│   ├── fizz-action.png    # Action/dynamic shot
│   ├── fizz-style.png     # Style showcase
│   └── fizz-carbonation.png # Macro bubble detail
└── README.md              # This documentation
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser with ES6+ support
- Local web server (for development)

### Installation

1. Clone or download the project files
2. Navigate to the `fizz-site` directory
3. Open `index.html` in your browser or serve via local server

### Development Server

For the best development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors & Theme

The website uses CSS custom properties for easy theming:

```css
:root { 
  --lime: #B7FF00;      /* Primary brand color */
  --ink: #0B0E10;       /* Background color */
  --white-60: rgba(255,255,255,0.6);    /* Secondary text */
  --white-80: rgba(255,255,255,0.8);    /* Primary text */
}
```

### Contract Integration

To enable the contract link functionality, set the global variable:

```javascript
window.FIZZ_CA = "0x..."; // Your contract address
```

### Image Assets

Replace the placeholder images in the `assets/` folder:

- **fizz-hero.png**: Main mascot image (required)
- **fizz-closeup.png**: Close-up detail (optional)
- **fizz-action.png**: Action shot (optional)
- **fizz-style.png**: Style showcase (optional)
- **fizz-carbonation.png**: Macro detail (optional)

## 🔧 Technical Details

### Dependencies

- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No external JS libraries
- **CSS3**: Modern CSS features and animations

### Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance Features

- Optimized bubble animations with cleanup
- Smooth modal transitions
- Reduced motion support for accessibility
- Performance monitoring and logging

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Single-column layout, optimized touch targets
- **Tablet**: Responsive grid adjustments
- **Desktop**: Full two-column hero layout

## ♿ Accessibility

- Keyboard navigation support
- Focus indicators with lime outline
- Reduced motion preferences respected
- Semantic HTML structure
- Alt text for all images

## 🎭 Animation System

### Bubble Background

The floating bubble system creates a dynamic, fizzy atmosphere:

- 35 initial bubbles with staggered timing
- Continuous generation every 900ms
- Random sizes (6-22px) and durations (6-16s)
- Automatic cleanup to prevent memory leaks

### Modal Transitions

Smooth modal interactions with:

- Backdrop blur effects
- Scale animations
- Focus management
- Click-outside-to-close functionality

## 🔍 SEO & Meta

- Semantic HTML structure
- Meta description and theme color
- Open Graph ready
- Structured content hierarchy

## 🚀 Deployment

### Static Hosting

The website is ready for static hosting services:

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Repository-based hosting
- **AWS S3**: Static website hosting

### Build Process

No build step required - the website is ready to deploy as-is.

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Ensure all PNG files are in the `assets/` folder
2. **Modal not working**: Check browser console for JavaScript errors
3. **Animations not smooth**: Verify hardware acceleration is enabled

### Debug Mode

The website includes comprehensive logging. Open browser console to see:

- Application initialization status
- Animation system performance
- User interaction tracking
- Error reporting

## 📄 License

This project is part of the FIZZ meme coin ecosystem. Please refer to the project's licensing terms.

## 🤝 Contributing

For contributions to the FIZZ project, please contact the development team.

## 📞 Support

For technical support or questions about the FIZZ project:

- Check the FAQ section on the website
- Review browser console logs for errors
- Contact the FIZZ development team

---

**FIZZ** — The matcha can that pops. 🥤✨
