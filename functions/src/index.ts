import * as functions from "firebase-functions";
import axios from "axios";
import {getFirestore} from "firebase-admin/firestore";
import {initializeApp} from "firebase-admin/app";
import {createClient} from "pexels";
exports.newsFetcherBBC = functions.pubsub.schedule("*/30 * * * *")
  .onRun( async (context) => {
    console.log("newsFetcher");
    initializeApp();
    const db = getFirestore();
    const newsKeyRef = db.collection("keys").doc("news");
    const doc = await newsKeyRef.get();
    const apiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" + doc.get("news_api");
    return axios.get(apiUrl).then((response) => response)
      .then(async (response) =>
        await db.collection("news").doc("bbc")
          .set(JSON.parse(JSON.stringify(response.data))));
  });
exports.newsFetcherReuters = functions.pubsub.schedule("*/30 * * * *")
  .onRun( async (context) => {
    console.log("newsFetcher");
    initializeApp();
    const db = getFirestore();
    const newsKeyRef = db.collection("keys").doc("news");
    const doc = await newsKeyRef.get();
    const apiUrl = "https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=" + doc.get("news_api");
    return axios.get(apiUrl).then((response) => response)
      .then(async (response) =>
        await db.collection("news").doc("reuters")
          .set(JSON.parse(JSON.stringify(response.data))));
  });
exports.imageFetcher = functions.pubsub.schedule("0 * * * *")
  .onRun( async (context) => {
    console.log("imageFetcher");
    initializeApp();
    const db = getFirestore();
    const newsKeyRef = db.collection("keys").doc("assets");
    const doc = await newsKeyRef.get();
    const client = createClient(doc.get("pexels_key"));
    return client.photos.curated({per_page: 1})
      .then(async (photos) => await db.collection("photos").doc("items")
        .set(JSON.parse(JSON.stringify(photos))));
  });
