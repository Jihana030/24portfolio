import { initializeApp } from "../node_modules/firebase/app";
import { getDatabase, push, ref, set } from "../node_modules/firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const guestTitle = document.querySelector('#title');
const guestName = document.querySelector('#name');
const guestDetail = document.querySelector('#detail');
const submit = document.querySelector('button[type="submit"]');

// 방명록 입력 후 저장하는 함수
function guestBookWrite(title, name, detail) {
  const db = database;
  const guestBookRef = ref(db, "guestBook");
  const newGuestBook = push(guestBookRef);
  set(newGuestBook, {
    title: guestTitle.value,
    name: guestName.value,
    detail: guestDetail.value,
    timestamp: Date.now(),
  });
}

submit.addEventListener('click', e => {
  e.preventDefault();
  guestBookWrite();
})