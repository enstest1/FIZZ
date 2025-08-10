/**
 * FIZZ Meme Coin Website - Main JavaScript
 * 
 * This file handles all interactive functionality including:
 * - Dynamic footer year updates
 * - Animated bubble background system
 * - Direct DexScreener integration
 * - Contract link population
 * 
 * @author FIZZ Team
 * @version 1.0.0
 */

// ============================================================================
// DOM Element References
// ============================================================================

// Footer year element
const yearElement = document.getElementById('y');

// Bubble animation system elements
const bubbleField = document.getElementById('bubbleField');

// Contract link element
const contractLink = document.getElementById('contractLink');

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Logs messages with consistent formatting
 * @param {string} level - Log level (info, warn, error, debug)
 * @param {string} message - Message to log
 * @param {any} data - Optional data to include
 */
function log(level, message, data = null) {
  const timestamp = new Date().toISOString();
  const prefix = `[FIZZ] [${timestamp}] [${level.toUpperCase()}]`;
  
  if (data) {
    console[level](`${prefix} ${message}`, data);
  } else {
    console[level](`${prefix} ${message}`);
  }
}



// ============================================================================
// Footer Year Update
// ============================================================================

/**
 * Updates footer copyright year dynamically
 */
function updateFooterYear() {
  try {
    if (yearElement) {
      const currentYear = new Date().getFullYear();
      yearElement.textContent = currentYear;
      log('info', 'Footer year updated', { year: currentYear });
    } else {
      log('warn', 'Footer year element not found');
    }
  } catch (error) {
    log('error', 'Failed to update footer year', error);
  }
}

// Initialize footer year on page load
updateFooterYear();

// ============================================================================
// Bubble Animation System
// ============================================================================

/**
 * Creates a single animated bubble element
 * @returns {HTMLElement} - The created bubble element
 */
function createBubble() {
  try {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random positioning across the width
    bubble.style.left = Math.random() * 100 + '%';
    
    // Random size between 6px and 22px
    const size = 6 + Math.random() * 16;
    bubble.style.width = bubble.style.height = size + 'px';
    
    // Random animation duration between 6-16 seconds
    const duration = 6 + Math.random() * 10;
    bubble.style.animationDuration = duration + 's';
    
    // Random opacity and color variation
    const opacity = 0.15 + Math.random() * 0.25;
    bubble.style.background = `rgba(183,255,0,${opacity})`;
    
    log('debug', 'Bubble created', { 
      size, 
      duration, 
      opacity, 
      left: bubble.style.left 
    });
    
    return bubble;
  } catch (error) {
    log('error', 'Failed to create bubble', error);
    return null;
  }
}

/**
 * Adds a bubble to the animation field
 */
function addBubble() {
  try {
    if (!bubbleField) {
      log('warn', 'Bubble field element not found');
      return;
    }
    
    const bubble = createBubble();
    if (bubble) {
      bubbleField.appendChild(bubble);
      
      // Remove bubble after animation completes (16 seconds max)
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.remove();
          log('debug', 'Bubble removed from DOM');
        }
      }, 16000);
      
      log('debug', 'Bubble added to field');
    }
  } catch (error) {
    log('error', 'Failed to add bubble to field', error);
  }
}

/**
 * Initializes the bubble animation system
 */
function initializeBubbleSystem() {
  try {
    if (!bubbleField) {
      log('warn', 'Bubble field not found, skipping initialization');
      return;
    }
    
    // Create initial batch of bubbles with staggered timing
    for (let i = 0; i < 35; i++) {
      setTimeout(addBubble, i * 180);
    }
    
    // Continue adding bubbles at regular intervals
    setInterval(addBubble, 900);
    
    log('info', 'Bubble animation system initialized', { 
      initialBubbles: 35, 
      interval: '900ms' 
    });
  } catch (error) {
    log('error', 'Failed to initialize bubble system', error);
  }
}



// ============================================================================
// Contract Link Population
// ============================================================================

/**
 * Populates contract link if contract address is available
 */
function populateContractLink() {
  try {
    // Check if contract address is defined globally
    if (window.FIZZ_CA && contractLink) {
      const contractAddress = window.FIZZ_CA;
      const explorerUrl = `https://explorer.abstract.money/address/${contractAddress}`;
      
      contractLink.href = explorerUrl;
      contractLink.textContent = 'Contract';
      
      log('info', 'Contract link populated', { 
        contract: contractAddress, 
        url: explorerUrl 
      });
    } else if (contractLink) {
      // Set default state if no contract
      contractLink.href = '#';
      contractLink.textContent = 'Contract';
      log('info', 'Contract link set to default state');
    } else {
      log('warn', 'Contract link element not found');
    }
  } catch (error) {
    log('error', 'Failed to populate contract link', error);
  }
}

// ============================================================================
// Event Listeners
// ============================================================================

/**
 * Sets up all event listeners for the application
 */
function setupEventListeners() {
  try {
    // No modal event listeners needed - direct link to DexScreener
    
    log('info', 'Event listeners configured successfully');
  } catch (error) {
    log('error', 'Failed to setup event listeners', error);
  }
}

// ============================================================================
// Application Initialization
// ============================================================================

/**
 * Main initialization function
 */
function initializeApp() {
  try {
    log('info', 'FIZZ website initializing...');
    
    // Initialize core systems
    initializeBubbleSystem();
    populateContractLink();
    setupEventListeners();
    
    log('info', 'FIZZ website initialization complete');
  } catch (error) {
    log('error', 'Application initialization failed', error);
  }
}

// ============================================================================
// Page Load Event
// ============================================================================

// Initialize application when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM already loaded, initialize immediately
  initializeApp();
}

// ============================================================================
// Global Error Handling
// ============================================================================

// Catch and log any unhandled errors
window.addEventListener('error', (event) => {
  log('error', 'Unhandled error occurred', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

// Catch and log unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  log('error', 'Unhandled promise rejection', {
    reason: event.reason
  });
});

// ============================================================================
// Performance Monitoring
// ============================================================================

// Log page load performance metrics
window.addEventListener('load', () => {
  try {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        log('info', 'Page load performance', {
          loadTime: perfData.loadEventEnd - perfData.loadEventStart,
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          totalTime: perfData.loadEventEnd - perfData.fetchStart
        });
      }
    }
  } catch (error) {
    log('warn', 'Failed to capture performance metrics', error);
  }
});
