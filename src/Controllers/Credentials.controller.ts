import 'dotenv/config';
import { Request, Response } from 'express';

export const getSpotifyCredentials = async (_req: Request, res: Response) => {
    try {
        const clientId = process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
        const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
        const spotifyCredentials = { clientId, clientSecret, redirectUri };
        res.json(spotifyCredentials);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const getFirebaseCredentials = async (_req: Request, res: Response) => {
    try {
        const firebaseCredentials = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        };
        res.json(firebaseCredentials);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
