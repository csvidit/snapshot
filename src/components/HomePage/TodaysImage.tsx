import React, { useState, useEffect } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  query,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

const TodaysImage = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "photos"));
    const fetchQuerySnapshot = async () =>
    {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setItems(doc.data());
      });
    }
    fetchQuerySnapshot();
  }, []);

  const url = items?.photos[0]?.src?.landscape;

  if (url) {
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
          <Link href={items?.photos[0].url} className="w-max h-max">
            Photo by {items.photos[0].photographer}
          </Link>
        </motion.div>
      </div>
    );
  }
};

export default TodaysImage;
