# Highlight Players Names and Health Bar Userscript

This userscript enhances gaming interfaces by highlighting player names and health bars for better visibility and gameplay experience.

## Features
- Highlights all player names in the game interface.
- Enhances health bars for easier tracking during gameplay.
- Easy to install and use with Tampermonkey.

## Installation

### Method 1: Direct Install (Recommended)
Click the button below to install the userscript:

<button onclick="installUserscript()" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">Install Script</button>

### Method 2: Manual Installation
1. Ensure [Tampermonkey](https://www.tampermonkey.net/) is installed in your browser.
2. Click the following link: [Highlight all players names and health bar.js](https://github.com/alyaparan/scripts/raw/main/Highlight%20all%20playars%20names%20and%20health%20bar.js)
3. Tampermonkey will open and prompt you to install the script.

## How to Use
After installation, the script will automatically run on the specified websites. No additional configuration is needed.

## Support
For issues or feature requests, please open an issue on [GitHub](https://github.com/alyaparan/scripts).

## License
This project is licensed under the MIT License. See the LICENSE file for details.

<script>
function installUserscript() {
  // Create a direct install link that works with modern Tampermonkey
  const scriptUrl = 'https://github.com/alyaparan/scripts/raw/main/Highlight%20all%20playars%20names%20and%20health%20bar.js';
  
  // Different methods for different browsers
  if (navigator.userAgent.includes('Firefox')) {
    // For Firefox
    window.open('https://addons.mozilla.org/firefox/downloads/file/4001371/tampermonkey-4.18.1.xpi');
    setTimeout(() => {
      window.location.href = scriptUrl;
    }, 1000);
  } else {
    // For Chrome and other browsers
    window.location.href = 'tampermonkey:///?url=' + encodeURIComponent(scriptUrl);
    
    // Fallback for if the protocol handler doesn't work
    setTimeout(() => {
      window.location.href = scriptUrl;
    }, 500);
  }
}
</script>
