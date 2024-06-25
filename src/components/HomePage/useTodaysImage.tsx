import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "@firebase/firestore";

export default function useTodaysImage() {
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

  return useTodaysImage;
}
