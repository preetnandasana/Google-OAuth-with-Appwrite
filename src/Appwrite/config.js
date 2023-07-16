import {Client,Account} from 'appwrite'

const client = new Client();

client.setEndpoint("Your Project Endpoint").setProject("Your Project Id");

export const account = new Account(client)
