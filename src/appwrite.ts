import { Account, Client } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("mk-auth-record");

export const account = new Account(client);

export default client;
