// @ts-nocheck

import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyDfY1GblObGsiQHsIzQaHO76H6TQcT6AW4",
	authDomain: "pushdemo-18b5c.firebaseapp.com",
	projectId: "pushdemo-18b5c",
	storageBucket: "pushdemo-18b5c.appspot.com",
	messagingSenderId: "807981497702",
	appId: "1:807981497702:web:85ba1279fdcb3235805ca7",
	measurementId: "G-2T483RXJWS",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app(); // if already initialized, use that one
}

const getMessaging = () => {
	if (typeof window === "undefined") {
		return {};
	}
	return firebase.messaging();
};

export const messaging = getMessaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey =
	"BKRSjCYvR1cmyqiPvs22uadnWAgDmiqjW8UVTZUEVLb-m-rkbU-4PFOsX47poUssYBD7ZRJCG6Y1OUWvU12HdVg";

export const getToken = async (setTokenFound: (val: boolean) => void) => {
	let currentToken = "";

	try {
		currentToken = await messaging.getToken({ vapidKey: publicKey });
		if (currentToken) {
			setTokenFound(true);
		} else {
			setTokenFound(false);
		}
	} catch (error) {
		console.log("An error occurred while retrieving token. ", error);
	}

	return currentToken;
};

export const onMessageListener = () => {
	return new Promise((resolve) => {
		messaging.onMessage((payload) => {
			console.log("onMessage", { payload });

			resolve(payload);
		});
	});
};
