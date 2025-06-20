"use server";

import { ID } from "node-appwrite";
import {
  CONTACT_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../appwrite.config";

export const createContactQuery = async (contactQuery: ContactFormParams) => {
  try {
    const newContactQuery = await databases.createDocument(
      DATABASE_ID!,
      CONTACT_COLLECTION_ID!,
      ID.unique(),
      contactQuery
    );
    return newContactQuery;
  } catch (error) {
    console.error("Error creating contact query:", error);
  }
};
