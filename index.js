import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV_H5NTvvjlGy8PyWhYo-rPBPossp1cd0",
  authDomain: "fir-9-dojo-38f35.firebaseapp.com",
  projectId: "fir-9-dojo-38f35",
  storageBucket: "fir-9-dojo-38f35.appspot.com",
  messagingSenderId: "930141573544",
  appId: "1:930141573544:web:8bf4e2b99f66eea77fcd9d",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    // console.log(snapshot.docs)
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });
