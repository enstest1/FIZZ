/**
 * FIZZ Website Configuration
 * 
 * This file contains configurable values for easy customization
 * without modifying the core HTML/CSS/JS files.
 */

// ============================================================================
// Brand Configuration
// ============================================================================

window.FIZZ_CONFIG = {
  // Brand Information
  brand: {
    name: "FIZZ",
    tagline: "Abstract Toys",
    description: "Matcha can mascot",
    hero: {
      subtitle: "Abstract Launch",
      title: "Crack the can · Wake the chain.",
      highlight: "Crack the can",
      description: "A halo-tabbed troublemaker with a grin wired for breakouts. FIZZ doesn't \"launch\" — it pops. When the foam rises, timelines wake up."
    }
  },

  // Contract Information
  contract: {
    // Set this to your actual contract address
    address: null, // "0x...",
    explorer: "https://explorer.abstract.money/address/",
    dexscreener: "https://dexscreener.com/abstract?trade=true&outputCurrency="
  },

  // Social Links
  social: {
    twitter: "#", // Replace with actual Twitter URL
    docs: "#",    // Replace with actual docs URL
    telegram: "#" // Optional: Add Telegram link
  },

  // Animation Settings
  animations: {
    bubbles: {
      initialCount: 35,
      spawnInterval: 900, // milliseconds
      maxSize: 22,        // pixels
      minSize: 6,         // pixels
      maxDuration: 16,    // seconds
      minDuration: 6      // seconds
    },
    modal: {
      transitionDuration: 300, // milliseconds
      backdropBlur: 6          // pixels
    }
  },

  // Content Configuration
  content: {
         about: {
       genesis: "One can left in the Abstract fridge — sealed, over-carbonated, rumored to pump charts on contact. Someone cracked it during a dead market. The hiss echoed through the chain. Candles foamed green. A mascot woke up. The can's contents weren't just fizzy — they were the essence of something bigger. Every bubble held a promise, every pop released potential. When the seal broke, it wasn't just a drink that escaped. It was the beginning of a collection, a universe waiting to be unlocked."
     },
    faq: [
      {
        question: "What is FIZZ?",
        answer: "A character IP born on Abstract — part mascot, part collectible, part ongoing story. Built to live online first, everywhere later."
      },

      {
        question: "Why Abstract?",
        answer: "Consumer-grade UX, gas-abstracted flows, and a culture that loves character IP. Perfect ground for a fizzy brand."
      },
      {
        question: "Financial advice?",
        answer: "No. FIZZ is a community character and art project. Nothing here is investment advice. Please DYOR."
      }
    ]
  },

  // Theme Colors (CSS variables)
  theme: {
    primary: "#B7FF00",      // Lime green
    background: "#0B0E10",   // Deep black
    accent: "#00FFD9",       // Cyan
    text: {
      primary: "rgba(255,255,255,0.8)",
      secondary: "rgba(255,255,255,0.6)",
      muted: "rgba(255,255,255,0.5)"
    }
  }
};

// ============================================================================
// Auto-Configuration
// ============================================================================

// Automatically set contract address if available
if (window.FIZZ_CONFIG.contract.address) {
  window.FIZZ_CA = window.FIZZ_CONFIG.contract.address;
}

// Apply theme colors to CSS custom properties
document.addEventListener('DOMContentLoaded', function() {
  const root = document.documentElement;
  const theme = window.FIZZ_CONFIG.theme;
  
  root.style.setProperty('--lime', theme.primary);
  root.style.setProperty('--ink', theme.background);
  root.style.setProperty('--accent', theme.accent);
  
  // Log configuration loaded
  console.log('[FIZZ] Configuration loaded:', window.FIZZ_CONFIG);
});

// ============================================================================
// Usage Examples
// ============================================================================

/*
To customize the website:

1. Edit the values in this config file
2. Replace social media URLs with actual links
3. Set your contract address when ready
4. Adjust animation settings as needed
5. Modify content text to match your vision

Example:
window.FIZZ_CONFIG.social.twitter = "https://twitter.com/fizzcoin";
window.FIZZ_CONFIG.contract.address = "0x1234...";
*/
