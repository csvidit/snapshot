import * as functions from "firebase-functions";
import axios from "axios";
import {getFirestore} from "firebase-admin/firestore";
import {initializeApp} from "firebase-admin/app";
exports.newsFetcher = functions.pubsub.schedule("*/30 * * * *")
  .onRun( async (context) => {
    initializeApp();
    const db = getFirestore();
    const newsKeyRef = db.collection("keys").doc("news");
    const doc = await newsKeyRef.get();
    const apiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" + doc.get("news_api");
    return axios.get(apiUrl).then((response) => response)
      .then(async (response) =>
        await db.collection("news").doc("items")
          .set(JSON.parse(JSON.stringify(response.data))));
  });
