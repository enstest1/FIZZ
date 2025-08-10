/**
 * FIZZ Meme Coin Website - Main JavaScript
 * 
 * This file handles all interactive functionality including:
 * - Dynamic footer year updates
 * - Animated bubble background system
 * - Swap modal functionality
 * - DexScreener integration
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

// Modal system elements
const swapModal = document.getElementById('swapModal');
const swapOpenBtn = document.getElementById('swapOpen');
const swapCloseBtn = document.getElementById('swapClose');
const contractInput = document.getElementById('ca');
const dexscreenerBtn = document.getElementById('openDexscreener');

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

/**
 * Validates Ethereum contract address format
 * @param {string} address - Contract address to validate
 * @returns {boolean} - True if valid format
 */
function isValidContractAddress(address) {
  const contractRegex = /^0x[a-fA-F0-9]{40}$/;
  return contractRegex.test(address);
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
// Modal System
// ============================================================================

/**
 * Opens the swap modal
 */
function openSwapModal() {
  try {
    if (swapModal) {
      swapModal.classList.add('open');
      
      // Focus on contract input for better UX
      if (contractInput) {
        setTimeout(() => contractInput.focus(), 100);
      }
      
      log('info', 'Swap modal opened');
    } else {
      log('warn', 'Swap modal element not found');
    }
  } catch (error) {
    log('error', 'Failed to open swap modal', error);
  }
}

/**
 * Closes the swap modal
 */
function closeSwapModal() {
  try {
    if (swapModal) {
      swapModal.classList.remove('open');
      log('info', 'Swap modal closed');
    } else {
      log('warn', 'Swap modal element not found');
    }
  } catch (error) {
    log('error', 'Failed to close swap modal', error);
  }
}

/**
 * Handles opening DexScreener with contract address
 */
function openDexScreener() {
  try {
    const contractAddress = (contractInput?.value || '').trim();
    
    // Validate contract address format
    if (!isValidContractAddress(contractAddress)) {
      alert('Please paste a valid contract address first.');
      log('warn', 'Invalid contract address provided', { address: contractAddress });
      return;
    }
    
    // Construct DexScreener URL with contract pre-selected
    const dexscreenerUrl = `https://dexscreener.com/abstract?trade=true&outputCurrency=${contractAddress}`;
    
    // Open in new tab
    window.open(dexscreenerUrl, '_blank', 'noopener,noreferrer');
    
    log('info', 'DexScreener opened', { 
      contract: contractAddress, 
      url: dexscreenerUrl 
    });
    
    // Close modal after successful action
    closeSwapModal();
    
  } catch (error) {
    log('error', 'Failed to open DexScreener', error);
    alert('Failed to open DexScreener. Please try again.');
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
    // Modal open/close events
    if (swapOpenBtn) {
      swapOpenBtn.addEventListener('click', openSwapModal);
      log('debug', 'Swap open button event listener added');
    }
    
    if (swapCloseBtn) {
      swapCloseBtn.addEventListener('click', closeSwapModal);
      log('debug', 'Swap close button event listener added');
    }
    
    // Modal backdrop click to close
    if (swapModal) {
      swapModal.addEventListener('click', (event) => {
        if (event.target === swapModal) {
          closeSwapModal();
        }
      });
      log('debug', 'Modal backdrop click listener added');
    }
    
    // DexScreener button
    if (dexscreenerBtn) {
      dexscreenerBtn.addEventListener('click', openDexScreener);
      log('debug', 'DexScreener button event listener added');
    }
    
    // Contract input enter key support
    if (contractInput) {
      contractInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          openDexScreener();
        }
      });
      log('debug', 'Contract input enter key listener added');
    }
    
    log('info', 'All event listeners configured successfully');
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
