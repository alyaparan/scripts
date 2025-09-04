# Tanki Online Mods & Cheats Collection

A collection of Tampermonkey scripts designed to enhance the Tanki Online gaming experience with various modifications, quality-of-life improvements, and gameplay enhancements.

## Scripts Overview

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

## Installation

### Automatic Installation (Recommended)
1. Install [Tampermonkey](https://www.tampermonkey.net/) extension for your browser
2. Click on any script link below to automatically install:
   - [Player Health Highlighter](https://github.com/alyaparan/scripts/raw/refs/heads/main/player-health-highlighter.js)
   - [Custom GUI Menu](https://github.com/alyaparan/scripts/raw/refs/heads/main/alyaparan-custom-gui-menu.js)
   - [Server Changer & Latency Optimizer](https://github.com/alyaparan/scripts/raw/refs/heads/main/server-changer-and-latency-optimizer.js)
   - [Tanki Online Mods and Hacks](https://github.com/alyaparan/scripts/raw/refs/heads/main/tanki-online-mods-and-hacks.js)
   - [Player History Tracker](https://github.com/alyaparan/scripts/raw/refs/heads/main/trackit-player-history.js)
3. Confirm installation when prompted by Tampermonkey

### Manual Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/) extension
2. Create a new script in Tampermonkey
3. Copy the raw code from any script below and paste into the editor:
   - [Player Health Highlighter Raw Code](https://github.com/alyaparan/scripts/raw/refs/heads/main/player-health-highlighter.js)
   - [Custom GUI Menu Raw Code](https://github.com/alyaparan/scripts/raw/refs/heads/main/alyaparan-custom-gui-menu.js)
   - [Server Changer Raw Code](https://github.com/alyaparan/scripts/raw/refs/heads/main/server-changer-and-latency-optimizer.js)
   - [Mods and Hacks Raw Code](https://github.com/alyaparan/scripts/raw/refs/heads/main/tanki-online-mods-and-hacks.js)
   - [Player History Raw Code](https://github.com/alyaparan/scripts/raw/refs/heads/main/trackit-player-history.js)
4. Save the script (Ctrl+S)
5. Refresh Tanki Online page

## Configure the Script

Most scripts include configuration options:
- **Custom GUI Menu**: Press Insert key to open/close menu
- **Server Changer**: Menu appears automatically showing server ping times
- **Mods and Hacks**: Extensive in-game UI with toggleable options
- **Health Highlighter**: Works automatically with no user configuration needed

For advanced configuration, edit the script variables directly in Tampermonkey editor.

## Disclaimer

These scripts are provided for educational and experimental purposes only. Use at your own risk. The developer is not responsible for any consequences resulting from the use of these scripts, including but not limited to account restrictions or bans. Always comply with Tanki Online's Terms of Service.

## Contribution

We welcome contributions to improve these scripts! Please read our [Contribution Guidelines](CONTRIBUTING.md) before submitting pull requests or issues.

### CONTRIBUTING.md
```markdown
# Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows existing style conventions and includes appropriate comments.
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### LICENSE.md
```markdown
MIT License

Copyright (c) 2023 Alik Paranyan

Permission is hereby granted... [Standard MIT License text]
```

## Contact

- **Social Networks**: [@alyaparan](https://github.com/alyaparan)
- **Personal Website**: [www.alikparanyan.com](https://www.alikparanyan.com)
- **Work Email**: [mail@alikparanyan.com](mailto:mail@alikparanyan.com)
- **Personal Email**: [alikparanyan@gmail.com](mailto:alikparanyan@gmail.com)

For script support or collaboration inquiries, please use the contact information above.
