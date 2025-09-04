To help users easily install the JIRA autofill userscript via Tampermonkey, you can create a Markdown file with an installation button and clear instructions. Below is a template you can use:

---

# JIRA Autofill Userscript Installation

This guide will help you install the Tampermonkey userscript for auto-filling fields in JIRA.

## Step 1: Install Tampermonkey
Tampermonkey is a browser extension that allows you to manage userscripts. You need to install it before adding the JIRA autofill script.
- **Download Tampermonkey**: Visit the [official Tampermonkey website](https://www.tampermonkey.net/) and install the extension for your browser (Chrome, Firefox, Edge, or Safari) .

## Step 2: Install the JIRA Autofill Userscript
Click the button below to install the userscript. Tampermonkey will automatically detect and prompt you to install it.

[![Install Script](https://img.shields.io/badge/Install_Script-Tampermonkey-orange?style=for-the-badge)](https://gist.github.com/sergiikliepikov-sainsburys/087bc4794261d529046c4d93e825b4cc/raw/62ffb0c99ef519a42b1b4038b50e7e4d9d8b797c/jira-autofill.user.js)

### Manual Installation
If the button does not work, follow these steps:
1. Open Tampermonkey's **Dashboard** from your browser's extension toolbar.
2. Go to the **Utilities** tab.
3. Under **Import from URL**, paste the following URL:
   ```
   https://gist.github.com/sergiikliepikov-sainsburys/087bc4794261d529046c4d93e825b4cc/raw/62ffb0c99ef519a42b1b4038b50e7e4d9d8b797c/jira-autofill.user.js
   ```
4. Click **Install** and confirm the installation .

## Step 3: Configure the Script
After installation, ensure the script is enabled in Tampermonkey's **Installed Userscripts** tab. Refresh your JIRA page for the changes to take effect.

## Notes
- This script is designed to automate field population in JIRA issues, such as assigning Sprints, Fix Versions, or Epic Links .
- For troubleshooting, check Tampermonkey's documentation or contact the script's maintainer.

---

### Key Features of This Markdown File:
1. **Button Design**: Uses a shield.io badge-style button for visual appeal and clarity .
2. **Direct Installation Link**: The button links directly to the raw userscript URL, which Tampermonkey can intercept and install .
3. **Fallback Instructions**: Provides manual steps in case the button does not work .
4. **Contextual Notes**: Explains the script's purpose and directs users to additional resources .

This Markdown file can be rendered on GitHub or any platform supporting HTML-like buttons in Markdown. Users can click the button to initiate the installation process seamlessly.



## Disclaimer

Use this database responsibly and only for educational purposes. The creator disclaims any liability for actions and consequences resulting from the use of this data.

## Contribution

If you have suggestions or improvements, feel free to contribute. Follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the License 2.0 apache github - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

For questions or concerns, you can contact the project creator at Website www.alikparanyan.com or Email mail@alikparanyan.com or personal gmail alikparanyan@gmail.com.
