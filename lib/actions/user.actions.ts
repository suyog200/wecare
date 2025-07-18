"use server";

import { account } from "../appwriteClient";

type resetPasswordParams = {
    email: string;
}

// Function to reset password
export const resetPassword = async (email: resetPasswordParams) => {
  try {
    await account.createRecovery(email.email, "https://wecare-tan.vercel.app/new-password");
  } catch (error) {
    console.log("Error in resetting password:", error);
  }
};

//function to update password
export const updateNewPassword = async (userId: string, secret: string, newPassword: string) => {
  try {
    await account.updateRecovery(userId, secret, newPassword);
  } catch (error) {
    console.log("Error in updating password:", error);
  }
};
