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
A Pub/Sub Firebase Cloud Function fetches news from the Pexels API every 30 minutes and stores the data in a Firestore database collection. The app fetches the items document from the photos collection of that Firestore database whenever the logged-in user goes to the ```/``` route of the app. The JSON is parsed, and then the image is fetched through its URL. 

### News 
A Pub/Sub Firebase Cloud Function fetches news from the News API every 30 minutes and stores the data in a Firestore database collection. The app fetches the items document from the news collection of that Firestore database whenever the logged-in user goes to the ```/``` route of the app.

### Why use scheduled cloud functions and not just client or server-side API calls? 
Because of the limits of free APIs/free tiers of those APIs. When we consider testing (both in localhost and in production builds) and a number of separate users, those API calls are going to add up, whenever any user reloads to the index route. One possible workaround is storing a bunch of data in the user's browser with their session, but I did not want to do that. Using a scheduled function means that calls to external APIs are done only so long as they are absolutely required (in this case, every 30 minutes for updating of data). Read calls to Firestore are much cheaper than calls to the API themselves, at least in my experience. Obviously, this does not matter if the app is only used as a hobby sometimes. But developing it from the intention of it going to public use and production means that such decisions should be made.


### Test Credentials

Coming Soon

