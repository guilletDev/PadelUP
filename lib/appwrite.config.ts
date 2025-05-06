import * as sdk from 'node-appwrite'

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  CLIENT_COLLECTION_ID,
  COURT_COLLECTION_ID,
  RESERVATION_COLLECTION_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client()

client
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);    

