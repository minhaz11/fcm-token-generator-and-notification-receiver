# Firebase Cloud Messaging (FCM) Token Generator Application

## Overview

This application is a simple web-based tool designed to generate Firebase Cloud Messaging (FCM) tokens and handle push notifications within a web browser. The application allows users to:

- Register a service worker to manage push notifications.
- Generate an FCM token that can be used to send notifications to the device.
- Display and copy the generated FCM token.
- Receive and display incoming push notifications directly in the browser.

## Technology Stack

- **Firebase**: Utilizes Firebase Cloud Messaging (FCM) for push notifications.
- **Tailwind CSS**: Provides a modern, responsive UI design.
- **JavaScript**: Handles FCM token generation, service worker registration, and notification display.

## Features

- **Service Worker Registration**: Registers a service worker for handling push notifications.
- **FCM Token Generation**: Generates a unique FCM token for the user's device.
- **Copy to Clipboard**: Allows users to easily copy the generated token to their clipboard.
- **Push Notification Handling**: Displays incoming notifications directly on the web page.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/fcm-token-generator.git
    cd fcm-token-generator
    ```

2. Open `index.html` in your browser.
3. Make sure you have the firebase messaging service worker js file `firebase-messaging-sw.js` in your root directory.

## Usage

1. **Generate FCM Token**: Click on the "Generate FCM Token" button to register the service worker and generate an FCM token.
   
2. **Copy FCM Token**: Click the "Copy" button next to the displayed token to copy it to your clipboard.

3. **Receive Notifications**: When a push notification is sent to the FCM token, it will be displayed on the webpage.

## Firebase Setup

Ensure that your Firebase project is correctly configured and replace the Firebase configuration in the JavaScript file with your project's details.
also collect your vapidKey from firbase console.

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
