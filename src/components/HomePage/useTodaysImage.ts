import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "@firebase/firestore";

export default function useTodaysImage() {
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

  return useTodaysImage;
}
