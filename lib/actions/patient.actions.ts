"use server";

import { ID, Query } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { account } from "../appwriteClient";
import { parseStringify } from "../utils";
import { InputFile } from "node-appwrite/file";

//signup
export const createUser = async (user: CreateUserParams) => {
  try {
    const existingUser = await users.list([Query.equal("email", [user.email])]);

    if (existingUser.total > 0) {
      return {
        user: parseStringify(existingUser.users[0]),
        message: "User with this email already exists.",
        isNew: false,
      }
    } else {
      //creating new user
      const newUser = await users.create(
        ID.unique(),
        user.email,
        user.phone,
        user.password,
        user.name
      );
      return {
        user: parseStringify(newUser),
        message: "User created successfully.",
        isNew: true,
      }
    }
  } catch (error: any) {
    console.log("Error in creating new user:",error);
  }
};

//login
export const loginUser = async (user : loginUserParams) => {
  try {
    const session = await account.createEmailPasswordSession(user.email, user.password);
    return parseStringify(session);
  } catch (error) {
    console.log("Error in logging in user:", error);
  }
}


export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify(user);
  } catch (error) {
    console.log(error);
  }
};

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;
    if (identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        identificationDocument?.get("blobFile") as Blob,
        identificationDocument?.get("fileName") as string
      );
      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.log(error);
  }
};

export const getPatient = async (userid: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userid])]
    );
    return parseStringify(patients?.documents[0]);
  } catch (error) {
    console.log(error);
  }
};
