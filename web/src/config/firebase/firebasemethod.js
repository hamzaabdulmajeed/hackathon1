import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.js";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
  } from "firebase/auth";
  import { getFirestore,  collection, addDoc, getDocs, getDoc, doc  } from "firebase/firestore"; 
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase);
const db = getFirestore(Firebase);
export const Providers = { google: new GoogleAuthProvider() };
const storage = getStorage(Firebase);


export async function Lwep(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  export async function Rwep(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  
   export async function addPost(post) {

        const {name, image} = post
        const storageRef = ref(storage, 'post/' + image.name);
        await uploadBytes(storageRef, image)
        const url = await getDownloadURL(storageRef)
      
        return addDoc(collection(db, "post"), {
          name, image: url
          });
      }

    
    export async function getPost() {
      const querySnapshot = await getDocs(collection(db, "post"));
      const post = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        post.push(data);
        console.log("data", data);
      });
      // console.log("Fetched posts:", posts); // Add this line for debugging
      return post;
    }
    export {  onAuthStateChanged };
    // export async function sendFriendRequest(fromUID, toUID) {
    //   try {
    //     await addDoc(collection(db, "friendRequests"), {
    //       fromUID: fromUID,
    //       toUID: toUID,
    //       status: "pending", // You can track request status if needed
    //       createdAt: new Date(),
    //     });
    //     alert("Friend request sent!");
    //   } catch (error) {
    //     console.error("Error sending friend request: ", error);
    //   }
    // }