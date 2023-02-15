import * as functions from "firebase-functions";
import axios from "axios";
import {getFirestore} from "firebase-admin/firestore";
import {initializeApp} from "firebase-admin/app";
import {createClient} from "pexels";
exports.newsFetcher = functions.pubsub.schedule("*/30 * * * *")
  .onRun( async (context) => {
    console.log("newsFetcher");
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
exports.imageFetcher = functions.pubsub.schedule("*/30 * * * *")
  .onRun( async (context) => {
    console.log("imageFetcher");
    initializeApp();
    const db = getFirestore();
    const newsKeyRef = db.collection("keys").doc("assets");
    const doc = await newsKeyRef.get();
    const client = createClient(doc.get("pexels_key"));
    const query = "Nature";
    return client.photos.search({query, per_page: 1})
      .then(async (photos) => await db.collection("photos").doc("items")
        .set(JSON.parse(JSON.stringify(photos))));
  });


