import * as sdk from 'node-appwrite';

export const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    BUCKET_ID,
    ENDPOINT,
} = process.env;


const client = new sdk.Client()

client.setEndpoint('https://fra.cloud.appwrite.io/v1').setProject('682c47e20004f0a8f540').setKey('standard_e8f8d9d13389bcc348aa7c1a76fb9cefa9a58068687dd70f1172154772d36e7aff9c9ffa3b6495ff2d690546a37e637a7d2d85f93317ba94df2bd952a132a9e7557eb3ccf6c736899651658e0e67a12ee98ccfeb119fef07e604e8d6d48b64508f05b01570bfc346faf9c9f439e2c545c46de107a3dd8567f921f69a8ca0aada');


export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client); 
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);    