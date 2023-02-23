import React, { useState, useEffect } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import useTodaysImage from "./useTodaysImage";
import Link from "next/link";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  query,
} from "firebase/firestore";
// import { Firestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
// import { getFirestore } from "firebase-admin/firestore";

// import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { initializeApp } from "firebase/app";
import { db } from "@/firebaseConfig";

const TodaysImage = () => {

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);

  // const [url, setUrl] = useState([]);

  // useEffect(() => {
  //   fetchTodaysImage(db);
  // }, []);

  // async function fetchTodaysImage(db: any) {
  //   // const photosCol = collection(db, "photos");
  //   // const photosSnapshot = await getDocs(photosCol);
  //   // const photosList = photosSnapshot.docs.map((doc) => doc.data());
  //   // setUrl(photosList[0]?.items?.photos[0]?.src?.url);

  //   //     const photosRef = db.collection("photos").doc("items");
  //   //     const doc = await photosRef.get();
  //   //     if (!doc.exists) {
  //   //       console.log("No such document!");
  //   //       setUrl(doc.data());
  //   //     } else {
  //   //       console.log("Document data:", doc.data());
  //   //     }
  //   //   }

  //   getDocs(db).then((data) => {
  //     console.log(data);
  //   });
  // }

  //   const photosCol = collection(db, "photos");
  //   const photosSnapshot = await getDocs(photosCol);
  //   const photosList = photosSnapshot.docs.map((doc) => doc.data());

  //   const todaysImage = await getTodaysImage(db);
  //   console.log(photosList[0].json);
 
  // const items = useTodaysImage();


  const [items, setItems] = useState(null);

  useEffect(() => {
    // const itemsDocRef = db.collection('photos').doc('items');
    // itemsDocRef.get().then((doc) => {
    //   if (doc.exists) {
    //     setItems(doc.data());
    //   }
    // });
    const q = query(collection(db, "photos"));
    const fetchQuerySnapshot = async () =>
    {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        setItems(doc.data());
      });
    }
    fetchQuerySnapshot();
  }, []);

  const url = items?.photos[0]?.src?.landscape;
  // console.log(url);
  // return (
  //   <div>
  //     {items ? (
  //       <pre>{JSON.stringify(items, null, 2)}</pre>
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //   </div>
  // );

  if (url) {
    console.log(url);
    return (
      <div className="col-span-2 flex flex-col">
        <Image
          width={512}
          height={512}
          src={url}
          alt="Picture of ice"
          className="rounded-xl"
        ></Image>
        <motion.div
          className="border-b border-slate-700 text-slate-700 text-xs w-[256px] pt-2 pb-2"
          whileHover={{ color: "#64748b", transition: { duration: 0.25 } }}
        >
          <Link href="https://unsplash.com" className="w-max h-max">
            &copy; 2022 Unsplash
          </Link>
        </motion.div>
      </div>
    );
  }
};

export default TodaysImage;

//   const auth = getAuth();
//   signInAnonymously(auth)
//     .then(() => {
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ...
//     });
