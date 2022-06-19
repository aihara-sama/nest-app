// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: "AIzaSyDfY1GblObGsiQHsIzQaHO76H6TQcT6AW4",
	authDomain: "pushdemo-18b5c.firebaseapp.com",
	projectId: "pushdemo-18b5c",
	storageBucket: "pushdemo-18b5c.appspot.com",
	messagingSenderId: "807981497702",
	appId: "1:807981497702:web:85ba1279fdcb3235805ca7",
	measurementId: "G-2T483RXJWS",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message”””””””””””””””””””””” ", payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: payload.notification.image,
	};

	// eslint-disable-next-line no-restricted-globals
	// return self.registration.showNotification(
	// 	notificationTitle,
	// 	notificationOptions
	// );
});
