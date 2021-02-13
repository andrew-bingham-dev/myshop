import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyA3570IjVV407JEa3VbBUvnZ43cl1Eahmk',
	authDomain: 'myshop-f88ad.firebaseapp.com',
	projectId: 'myshop-f88ad',
	storageBucket: 'myshop-f88ad.appspot.com',
	messagingSenderId: '370593554005',
	appId: '1:370593554005:web:b88301dcc14213f7d83edc',
	measurementId: 'G-EX05N59K81',
};

var fb = firebase.initializeApp(firebaseConfig);
var auth = fb.auth();
var db = fb.database();

export { auth, db };
