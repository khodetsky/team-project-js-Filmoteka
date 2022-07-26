import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
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
// const auth = getAuth(app);

let userId = "";
let userEmail = "";

const searchForm = document.querySelector('.search-form');
const vhodBtn = document.querySelector('.voiti');
const registrBtn = document.querySelector('.registr');
const inputEmail = document.querySelector('.inputEmail');
const inputPassword = document.querySelector('.inputPassword');
const enterBtn = document.querySelector('.enterBtn');
const closeModal = document.querySelector('.autorization-backdrop');

// const vihodBtn = document.querySelector('.vihod');
// const glavnaPage = document.querySelector('.glavna');
// const readWatchedBtn = document.querySelector('#watched');
// const readQueueBtn = document.querySelector('#queue');

// const addWatchedBtn = document.querySelector('#addToWatched');
// const addQueueBtn = document.querySelector('#addToQueue');


// readWatchedBtn.addEventListener('click', onReadWatchedCollection);
// readQueueBtn.addEventListener('click', onReadQueueCollection);

// addWatchedBtn.addEventListener('click', onAddWatchedCollection);
// addQueueBtn.addEventListener('click', onAddQueueCollection);

registrBtn.addEventListener('click', onRegistrationUser);
vhodBtn.addEventListener('click', onLoginUser);
enterBtn.addEventListener('click', onLogoutUser);
// enterBtn.addEventListener('click', )
// vihodBtn.addEventListener('click', onLogoutUser);

onCheckingUser();

// import { doc, setDoc } from "firebase/firestore"; 

// // Add a new document in collection "cities"
// await setDoc(doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE"), {movie});



//  export function onAddQueueCollection(movie) {
//     addDoc(collection(db, `${userEmail}, QUEUE: ${userId}`), movie);
// }

function onAddWatchedCollection(movie) {
    addDoc(collection(db, `${userEmail}, WATCHED: ${userId}`), movie);
}






export async function onReadQueueCollection() {
    const docRef = doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE");
    const docSnap = await getDoc(docRef);
    console.log("Document data:", docSnap);
    // const querySnapshot = await getDocs(collection(db, `${userEmail}, QUEUE: ${userId}`));
    // docSnap.forEach((doc) => {
    //     if (doc) {
    //         console.log(doc.data());
    //         // const movieQueue = localStorage.setItem(STORAGE_KEYS.queue, doc.data());
    //         // const movieWatched = JSON.parse(localStorage.getItem(STORAGE_KEYS.watched));
    //         // setDoc(doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE"), {movieQueue});
    //         // setDoc(doc(db, `${userEmail}, WATCHED: ${userId}`, "WATCHED"), { movieWatched });
    //     } else {
    //         console.log("БАЗА ДАННЫХ ПУСТАЯ!");
    //     }
    // });
//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
}



export async function onCheckingUser() {
    const auth = getAuth(app);
await onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    userId = uid;
    userEmail = user.email;
            closeModal.classList.add('is-hidden');
      
    // glavnaPage.style.display = "block";
    // searchForm.style.display = "none";
  } else {
    // glavnaPage.style.display = "none";
    // searchForm.style.display = "flex";
  }
});
}


async function onRegistrationUser() {
    let email = inputEmail.value;
    let password = inputPassword.value;

    if (email === "" && password === "") {
        Notiflix.Notify.failure('Введите Email и Password!');
    } else if (email !== "" && password === "") {
        Notiflix.Notify.failure('Введите Password!');
    } else if (email === "" && password !== "") {
        Notiflix.Notify.failure('Введите Email!');
    }
    
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
            console.log(user);
            userId = user.uid;
            userEmail = user.email;
            console.log(userId);
            console.log(userEmail);
            setDoc(doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE"), {});
            setDoc(doc(db, `${userEmail}, WATCHED: ${userId}`, "WATCHED"), {});
            // addDoc(collection(db, `${userEmail}, WATCHED: ${userId}`), {});
            // addDoc(collection(db, `${userEmail}, QUEUE: ${userId}`), {});

            Notiflix.Notify.success('Регистрация прошла успешно! Добро пожаловать на сайт');
            searchForm.reset();
            closeModal.classList.add('is-hidden');
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
            Notiflix.Notify.warning('Пользователь уже зарегестрирован, войдите на сайт!');
        }
    });
}


async function onLoginUser() {
    let email = inputEmail.value;
    let password = inputPassword.value;

    if (email === "" && password === "") {
        Notiflix.Notify.failure('Введите Email и Password!');
    } else if (email !== "" && password === "") {
        Notiflix.Notify.failure('Введите Password!');
    } else if (email === "" && password !== "") {
        Notiflix.Notify.failure('Введите Email!');
    }
    
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
            console.log(user);
            userId = user.uid;
            userEmail = user.email;
            console.log(userId);
            console.log(userEmail);

            glavnaPage.style.display = "block";
            searchForm.style.display = "none";
            Notiflix.Notify.info('Добро пожаловать на сайт');
            searchForm.reset();
            closeModal.classList.add('is-hidden');
            

            const movieQueue = JSON.parse(localStorage.getItem(STORAGE_KEYS.queue).results);
            const movieWatched = JSON.parse(localStorage.getItem(STORAGE_KEYS.watched));
            setDoc(doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE"), {movieQueue});
            setDoc(doc(db, `${userEmail}, WATCHED: ${userId}`, "WATCHED"), { movieWatched });
            onReadQueueCollection();


            async function onReadWatchedCollection() {
                const querySnapshot = await getDocs(collection(db, `${userEmail}, WATCHED: ${userId}`));
                querySnapshot.forEach((doc) => {
                if (doc) {
                    function watchedFromBase() {
                    localStorage.setItem('watched',  doc.data())
                }
                    // console.log(doc.data());
                } else {
                    console.log("БАЗА ДАННЫХ ПУСТАЯ!");
                }
                });
            }
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === 'auth/user-not-found') {
            Notiflix.Notify.failure('Пользователь не найден, загерестрируйтесь или проверьте Email!');
        } else if (errorCode === 'auth/wrong-password') {
            Notiflix.Notify.failure('Неверный пароль, попробуйте ещё раз');
        }
    });
}


const STORAGE_KEYS = {
  watched: 'watchedAll',
  queue: 'queueAll',
};

function onLogoutUser() {
    const auth = getAuth(app);
    signOut(auth).then(() => {
        // glavnaPage.style.display = "none";
        // searchForm.style.display = "flex";
        const movieQueue = JSON.parse(localStorage.getItem(STORAGE_KEYS.queue));
        const movieWatched = JSON.parse(localStorage.getItem(STORAGE_KEYS.watched));
        setDoc(doc(db, `${userEmail}, QUEUE: ${userId}`, "QUEUE"), {movieQueue});
        setDoc(doc(db, `${userEmail}, WATCHED: ${userId}`, "WATCHED"), { movieWatched });
        // closeModal.classList.add('is-hidden');

    }).catch((error) => {
        console.log(error);
    });
}


const films = {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912,
}




// Функция которая создает и колекцию и документ в ней.
// const film = {
//     name: "Maloy",
//     state: "CA",
//     country: "USAA",
// }

// setDoc(doc(db, "films", "Maloy"), film);

// Функция чтобы записать объект в колекцию фильмов + Cloud Firestore автоматически сгенерировать идентификатор для вас
// addDoc(collection(db, "prosmotr"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });


// Асинхронная функциия для чтения (доступа) к колекции фильмов
// async function proba() {
//     const querySnapshot = await getDocs(collection(db, "films"));
//     querySnapshot.forEach((doc) => {
//     console.log(`Ключ к документу в колекции: ${doc.id}`, doc.data());
// });
// }