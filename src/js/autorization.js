import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import { doc, getDoc } from "firebase/firestore";

import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: "AIzaSyD606fLTGqofK4cSdWdTzIn8ZRRAFlLyLU",
  authDomain: "testfilmotekaautorization.firebaseapp.com",
  databaseURL: "https://testfilmotekaautorization-default-rtdb.firebaseio.com",
  projectId: "testfilmotekaautorization",
  storageBucket: "testfilmotekaautorization.appspot.com",
  messagingSenderId: "1095764227428",
  appId: "1:1095764227428:web:221bd773a83340321e3671"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let userId = "";
let userEmail = "";

const searchForm = document.querySelector('.search-form');
const enterBtn = document.querySelector('.enterBtn');
const registrationBtn = document.querySelector('.registrationBtn');
const inputEmail = document.querySelector('.inputEmail');
const inputPassword = document.querySelector('.inputPassword');
const autorizationBackdrop = document.querySelector('.autorization-backdrop');
const signInButton = document.querySelector('.header__sign-in-btn');
const userEmailFill = document.querySelector('#user-email');
const iconContainer = document.querySelector('.sign-in--icon-container');

const STORAGE_KEYS = {
  watched: 'watchedAll',
  queue: 'queueAll',
};

registrationBtn.addEventListener('click', onRegistrationUser);
enterBtn.addEventListener('click', onLoginUser);

onCheckingUser();

async function onReadWatchedCollection() {
    const docRef = doc(db, `${userEmail}, WATCHED: ${userId}`, "WATCHED");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    if (docSnap.exists()) {
        localStorage.setItem(STORAGE_KEYS.watched, JSON.stringify(docSnap.data().movieWatched));
    } else {
        console.log("No such document!")
    }
}

async function onReadQueueCollection() {
    const docRef = doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data().movieQueue);
    if (docSnap.exists()) {
        localStorage.setItem(STORAGE_KEYS.queue, JSON.stringify(docSnap.data().movieQueue));
    } else {
        console.log("No such document!")
    }
}

export async function onCheckingUser() {
    const auth = getAuth(app);
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        userId = uid;
          userEmail = user.email;
          
        signInButton.textContent = "Logged";
        userEmailFill.textContent = `${userEmail}`;
        iconContainer.classList.add('if-user-entered')
        iconContainer.innerHTML = "";
        iconContainer.insertAdjacentHTML('beforeend', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.84 14.31c-.295.522-.517 1.09-.659 1.69h-9.181v-.417c-.004-1.112.044-1.747 1.324-2.043 1.402-.324 2.787-.613 2.121-1.841-1.972-3.637-.562-5.699 1.555-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841.672.155 1 .407 1.163.77zm-.815 3.69h-11.025v-14h20v7.5c.749.312 1.424.763 2 1.316v-10.816h-24v18h13.5c-.26-.623-.421-1.296-.475-2zm6.975-9h-4v2h4v-2zm-4-1h4v-2h-4v2zm3.5 5c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.695-.697.992.94 2.115-2.169.697.696-2.811 2.867z"/></svg>`);
      } else {
      }
    });
}


async function onRegistrationUser() {
    let email = inputEmail.value;
    let password = inputPassword.value;

    if (email === "" && password === "") {
        Notiflix.Notify.failure('Fulfill your email and password!');
    } else if (email !== "" && password === "") {
        Notiflix.Notify.failure('Fulfill Password field!');
    } else if (email === "" && password !== "") {
        Notiflix.Notify.failure('Fulfill Email field!');
    }
    
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
            userId = user.uid;
            userEmail = user.email;
            autorizationBackdrop.classList.add('is-hidden');
            setDoc(doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE"), {});
            setDoc(doc(db, `${userEmail}, WATCHED: ${userId}`, "WATCHED"), {});

            Notiflix.Notify.success('Registration successful! Welcome to Filmoteka!');
            searchForm.reset();
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
            Notiflix.Notify.warning('User already exists, please sing in!');
        }
    });
}


async function onLoginUser() {
    let email = inputEmail.value;
    let password = inputPassword.value;

    if (email === "" && password === "") {
        Notiflix.Notify.failure('Fulfill your email and password!');
    } else if (email !== "" && password === "") {
        Notiflix.Notify.failure('Fulfill Password field!');
    } else if (email === "" && password !== "") {
        Notiflix.Notify.failure('Fulfill Email field!');
    }
    
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
            userId = user.uid;
            userEmail = user.email;

            Notiflix.Notify.info('Welcome to Filmoteka!');
            searchForm.reset();
            autorizationBackdrop.classList.add('is-hidden');
            userEmailFill.textContent = `${userEmail}`;
            
            onReadQueueCollection();
            onReadWatchedCollection();
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === 'auth/user-not-found') {
            Notiflix.Notify.failure('User not found, register or check your Email!');
        } else if (errorCode === 'auth/wrong-password') {
            Notiflix.Notify.failure('Wrong Password, try again!');
        }
    });
}

export function onLogoutUser() {
    const auth = getAuth(app);
    signOut(auth).then(() => {
        const movieQueue = JSON.parse(localStorage.getItem(STORAGE_KEYS.queue));
        const movieWatched = JSON.parse(localStorage.getItem(STORAGE_KEYS.watched));
        setDoc(doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE"), {movieQueue});
        setDoc(doc(db, `${userEmail}, WATCHED: ${userId}`, "WATCHED"), { movieWatched });
        localStorage.removeItem(STORAGE_KEYS.queue);
        localStorage.removeItem(STORAGE_KEYS.watched);

    }).catch((error) => {
        console.log(error);
    });
}