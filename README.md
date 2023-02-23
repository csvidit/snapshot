# snapshot

[<img src="https://firebasestorage.googleapis.com/v0/b/vk-snapshot.appspot.com/o/snapshot-alpha-banner.png?alt=media&token=db6d6c39-56b3-4975-8c9e-e096b819ddcd">](https://snapshot.viditkhandelwal.com)

An under-development NextJS web application that gives the user a snapshot of the day, personalized to their preferences.
Authentication through Auth0.

This app is not available for public sign-ups (mostly due to very limited free API calls available) and is mostly supposed to be a proof of concept at the moment. If you would like to see it in action, please use these test credentials to log in and play around a bit. The user preferences section of the website is under development at the moment. 

Twitter is in the process of deprecating its current API and its endpoint for getting Trends data is not available yet, so the 'Trending on Socials' feature's development will take longer.

## Tech Stack

### Frontend

* Next.js
* TailwindCSS
* Framer Motion

### Backend

* Node.js

### Database

* Firebase Firestore 

### Authentication

* Auth0


## Inner Workings

### Today's Image
A Pub/Sub Firebase Cloud Function fetches news from the News API every 15 minutes and stores the data in a Firestore database collection. The app fetches the items document from the photos collection of that Firestore database whenever the logged-in user goes to the ```/``` route of the app. The JSON is parsed, and then the image is fetched through its URL via axios. 

### News 
A Pub/Sub Firebase Cloud Function fetches news from the News API every 15 minutes and stores the data in a Firestore database collection. The app fetches the items document from the news collection of that Firestore database whenever the logged-in user goes to the ```/``` route of the app.

### Test Credentials

Coming Soon

