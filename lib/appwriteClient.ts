import * as sdk from 'node-appwrite';
import { ENDPOINT, PROJECT_ID } from './appwrite.config';

const client = new sdk.Client()

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!)

export const account = new sdk.Account(client);    