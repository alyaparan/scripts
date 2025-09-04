# Tanki Online Mods & Cheats Collection

A collection of Tampermonkey scripts designed to enhance the Tanki Online gaming experience with various modifications, quality-of-life improvements, and gameplay enhancements.

## 📋 Project Description

This repository contains a series of userscripts developed for **Tanki Online** (https://tankionline.com/), a popular multiplayer tank battle game. These scripts are designed to be used with the Tampermonkey browser extension, which allows users to customize and enhance web page functionality . The scripts range from visual enhancements and quality-of-life improvements to advanced gameplay modifications.

## 🗂️ Scripts Overview

### 1. Player Health Highlighter
**File:** `player-health-highlighter.js`  
**Description:** Enhances player visibility and provides crucial combat information at a glance:
- Identifies player elements in the DOM
- Applies visual highlighting with bright red border and glow effect
- Displays health information as percentage
- Overrides player name format to "Player: [Name]"
- Color-codes health bar (orange <50%, red <20%)

### 2. Custom GUI Menu
**File:** `alyaparan-custom-gui-menu.js`  
**Description:** Adds a customizable, draggable menu GUI activated by pressing the Insert key:
- Main menu with submenus ("Physics", "Other")
- Buttons to toggle various game functions
- UI framework for potential feature implementation
- Placeholder console logs simulating in-game events

### 3. Server Changer & Latency Optimizer
**File:** `server-changer-and-latency-optimizer.js`  
**Description:** Tool for manual server selection based on real-time ping:
- Fetches latest server list from official Tanki Online API
- Measures latency via WebSocket connections
- Intercepts and reroutes game connections to preferred servers
- Provides draggable UI with color-cycling menu

### 4. Tanki Online Mods and Hacks
**File:** `tanki-online-mods-and-hacks.js`  
**Description:** Comprehensive client-side modification suite:
- Automation features (auto-fire, auto-respawn, auto-upgrade)
- Specialized gameplay modes (drone repel for farming/defense)
- UI controls (HUD element hiding, mouse freeze toggle)
- Quality-of-life improvements (cooldown timer, new tab button)
- Cosmetic changes (text alterations, tank renaming)
- Visual overlay (mouse coordinates, status indicators)

### 5. Player History Tracker (WIP)
**File:** `trackit-player-history.js`  
**Description:** Early development stage tool for player statistics:
- Intended to fetch and display match history of other players
- Currently non-functional with placeholder implementation

## 📥 Installation

### Prerequisites
- Install [Tampermonkey](https://www.tampermonkey.net/) for your browser (Chrome, Firefox, Edge, Safari, or Opera) 
- Ensure Tampermonkey has access to required permissions 

### Automatic Installation (Recommended)
1. Click on any script link below to automatically install:
   - [Player Health Highlighter](https://github.com/alyaparan/scripts/raw/refs/heads/main/player-health-highlighter.js)
   - [Custom GUI Menu](https://github.com/alyaparan/scripts/raw/refs/heads/main/alyaparan-custom-gui-menu.js)
   - [Server Changer & Latency Optimizer](https://github.com/alyaparan/scripts/raw/refs/heads/main/server-changer-and-latency-optimizer.js)
   - [Tanki Online Mods and Hacks](https://github.com/alyaparan/scripts/raw/refs/heads/main/tanki-online-mods-and-hacks.js)
   - [Player History Tracker](https://github.com/alyaparan/scripts/raw/refs/heads/main/trackit-player-history.js)
2. Confirm installation when prompted by Tampermonkey 
3. The script will now run automatically on Tanki Online pages

### Manual Installation
1. Open Tampermonkey dashboard (click Tampermonkey icon → Dashboard) 
2. Go to "Utilities" tab 
3. Under "Import from URL", paste the raw script URL
4. Click "Install" and confirm
5. Alternatively, create a new script and paste the contents manually 

*Table: Browser Compatibility*
| **Browser** | **Tampermonkey Support** | **Installation Guide** |
|-------------|--------------------------|------------------------|
| Chrome | ✅ Full support | [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) |
| Firefox | ✅ Full support | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  |
| Edge | ✅ Full support | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) |
| Safari | ✅ Full support | [Tampermonkey.net](https://www.tampermonkey.net/) |
| Opera | ✅ Full support | [Opera Add-ons](https://addons.opera.com/en/extensions/details/tampermonkey-beta/) |

## ⚙️ Configure the Script

Most scripts include configuration options:

### Player Health Highlighter
- Works automatically with no user configuration needed
- Visual settings can be modified by editing the script variables

### Custom GUI Menu
- Press **Insert key** to open/close menu
- Drag menu by clicking and holding the title bar
- Buttons can be customized in the script code

### Server Changer & Latency Optimizer
- Menu appears automatically showing server ping times
- Click on preferred server to select
- Reload game to apply changes

### Tanki Online Mods and Hacks
- Extensive in-game UI with toggleable options
- Press **X key** to toggle mouse freeze
- Auto-features can be configured in script variables

### Advanced Configuration
For advanced users, edit script variables directly in Tampermonkey editor:
1. Open Tampermonkey Dashboard
2. Find the script and click on its name
3. Modify variables in the editor window
4. Save changes (Ctrl+S) 

## ⚠️ Disclaimer

These scripts are provided for **educational and experimental purposes only**. Use at your own risk.

### Important Considerations
- 🚫 The developer is not responsible for any consequences resulting from the use of these scripts
- 🎮 Always comply with Tanki Online's Terms of Service
- ⚖️ Some scripts may violate game rules and could result in account restrictions
- 🔒 Use responsibly and consider potential impacts on game balance and other players
- 📛 Scripts are provided "as-is" without warranty of any kind

### Recommended Usage
- Test scripts in controlled environments first
- Be aware of potential detection methods
- Understand that online games frequently update and scripts may break
- Regularly update scripts for compatibility

## 🤝 Contribution

We welcome contributions to improve these scripts! Please follow these guidelines:

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Ensure code follows existing style conventions
- Include appropriate comments for complex logic
- Test changes thoroughly before submitting
- Update documentation if adding new features
- Be responsive to feedback and review comments

### Reporting Issues
When reporting bugs, please include:
- Browser and Tampermonkey version
- Script version
- Detailed description of the issue
- Steps to reproduce the problem
- Screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### License Summary
```
MIT License

Copyright (c) 2023 Alik Paranyan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

For script support, collaboration inquiries, or questions:

- **Social Networks**: [@alyaparan](https://github.com/alyaparan)
- **Personal Website**: [www.alikparanyan.com](https://www.alikparanyan.com)
- **Work Email**: [mail@alikparanyan.com](mailto:mail@alikparanyan.com)
- **Personal Email**: [alikparanyan@gmail.com](mailto:alikparanyan@gmail.com)

### Response Time
- Typically respond within 24-48 hours
- Priority given to bug reports and collaboration offers
- Please be specific in your inquiries for faster resolution

### Follow for Updates
- Star the repository on GitHub for updates
- Check Tampermonkey script pages for version changes
- Follow social channels for announcements

### Updates and Tests
*Last Updated: 2025-09-05*  
*Tampermonkey Version Tested: 5.3.3*   
*All scripts designed for Tanki Online version: Current as of 2025*
