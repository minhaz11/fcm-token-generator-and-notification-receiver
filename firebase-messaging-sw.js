importScripts(
    "https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js"
);

firebase.initializeApp({
    apiKey: "x-xxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
});

const messaging = firebase.messaging();


messaging.onBackgroundMessage(({ notification }) => {
    console.log("[firebase-messaging-sw.js] Received background message ");
    console.log(notification);
    // Customize notification here
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
    };

    if (notification.icon) {
        notificationOptions.icon = notification.icon;
    }

    self.registration.showNotification(notificationTitle, notificationOptions);
});

