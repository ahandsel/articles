# Quick Start: VS Code Setup for Kintone Customization Development

Want to develop Kintone customizations quickly?

If so, let's set up your [Visual Studio Code (VS Code)](https://code.visualstudio.com/) so your code is seamlessly synced with your Kintone App.

No more manually uploading customization files to the Kintone App each time! 🙌


## Outline

{%- # TOC start (generated with <https://github.com/derlin/bitdowntoc>) -%}

* [Setup Overview](#setup-overview)
* [Prep](#prep)
* [5 Steps to Setup the Development Environment](#5-steps-to-setup-the-development-environment)
* [Step 1. Generate a Certificate and Private Key Using the mkcert Tool](#step-1-generate-a-certificate-and-private-key-using-the-mkcert-tool)
* [Step 2. Enable HTTPS on the Live Server Extension](#step-2-enable-https-on-the-live-server-extension)
* [Step 3. Launch a Local Development Server Using the Live Server Extension](#step-3-launch-a-local-development-server-using-the-live-server-extension)
* [Step 4. Set the localhost URLs with HTTPS in the Kintone App's Settings](#step-4-set-the-localhost-urls-with-https-in-the-kintone-apps-settings)
* [Step 5. Refresh the Kintone App to Reflect the Changes](#step-5-refresh-the-kintone-app-to-reflect-the-changes)
* [Conclusion](#conclusion)

{%- # TOC end -%}


## Setup Overview

![Image: Setup Overview, displays the steps below in a graphic](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8tpm65s8mjbclbemlsn6.png)

1. Open the Kintone customization project in VS Code
1. Live Server extension will host the files locally
1. mkcert command-line tool enables HTTPS on the local development server
1. Set the localhost URLs with HTTPS in the Kintone App's settings
1. Kintone actively fetches the JavaScript and CSS files from the localhost


## Prep

Tools we will use:

* [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
* [mkcert](https://github.com/FiloSottile/mkcert) command-line tool that generates locally-trusted development certificates

Install VS Code and the Live Server extension on your laptop.


## 5 Steps to Setup the Development Environment

1. Generate a certificate and private key using the mkcert tool
1. Enable HTTPS on the Live Server extension
1. Launch a local development server using the Live Server extension
1. Set the localhost URLs with HTTPS in the Kintone App's settings
1. Refresh the Kintone App to reflect the changes


## Step 1. Generate a Certificate and Private Key Using the mkcert Tool

To install `mkcert`:
* For macOS, use [Homebrew](https://brew.sh/) → `brew install mkcert`
* For Windows, use [Chocolatey](https://chocolatey.org/) → `choco install mkcert`

Initialize mkcert to install a local [certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority).
* `mkcert -install`
* When prompted for a password, input the device password.  
* Click **Yes** when a security warning appears.

Generate a certificate and private key for localhost.
* `mkcert localhost 127.0.0.1 ::1`

When you see `The certificate is at "./localhost+2.pem" and the key at "./localhost+2-key.pem" ✅`, everything went well!
* `localhost+2-key.pem` is the private key
* `localhost+2.pem` is the certificate

For more information, refer to the [mkcert's Installation](https://github.com/FiloSottile/mkcert#installation) documentation.

⚠️ Do not share the certificate and private key with others.


## Step 2. Enable HTTPS on the Live Server Extension

Open your Kintone customization project in VS Code as a [VS Code Workspace](https://code.visualstudio.com/docs/editor/workspaces).
* To create a VS Code Workspace: Open the folder in VS Code, then go to `File` and click the `Save Workspace As` option.

Add a VS Code Workspace Setting file named `.vscode/settings.json` to the project folder.

Finally, add the following code to the `.vscode/settings.json` file.

```json
{
  "settings": {
    "liveServer.settings.https": {
      "enable": true,
      "cert": "/INSERT_PATH_TO_CERT/localhost+2.pem",
      "key": "/INSERT_PATH_TO_CERT/localhost+2-key.pem",
      "passphrase": ""
    }
  }
}
```

⚡ Be sure to swap `INSERT_PATH_TO_CERT` with the paths to the certificate and private key generated in the previous step.

⚡ You can also configure the Live Server extension settings via the VS Code Settings UI.
1. Open the [VS Code Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Type and select `Preferences: Open Settings (UI)`
1. In the settings search bar, type `liveServer.settings.https`
1. Set the `enable`, `cert`, `key`, and `passphrase` values as shown below
    * ![live-server-extension-settings-updated.png](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tn75z0wpukn2j27dqbtp.png)


## Step 3. Launch a Local Development Server Using the Live Server Extension

1. Open the [VS Code Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Type and select `Live Server: Open With Live Server`
1. Navigate to `https://localhost:5500` on the web browser to access the server

Navigate to the JavaScript and CSS files.


## Step 4. Set the localhost URLs with HTTPS in the Kintone App's Settings

To get the localhost URL with HTTPS for a file:

1. Navigate to the file hosted on the local development server via the browser
1. Copy the URL from the browser's address bar
1. Navigate to the Kintone App's [JavaScript and CSS Customization settings](https://get.kintone.help/k/en/id/040556.html)
1. Set the localhost URL with HTTPS to the desired option
    * ![kintone-settings-urls.png](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3ljhl7mqflv5bj30pq4f.png)
1. Click on **Save** and then the **Update App** buttons

The JavaScript and CSS files will be accessed and used by the Kintone App.

The setup for the optimized Kintone customization development environment is now complete.


## Step 5. Refresh the Kintone App to Reflect the Changes

Modify a Kintone customization file and refresh the Kintone App.

The changes should be reflected in the Kintone App immediately. 👏

⚠️ This is only a development environment setup.  
⚠️ The changes are only implemented on other devices once the code is uploaded to the Kintone App.


## Conclusion

With this setup, you can verify the changes without manually uploading customization files to the Kintone App each time! 💪

Got Questions? 🤔  
Post them on the [Kintone Developer Forum](https://forum.kintone.dev/).

