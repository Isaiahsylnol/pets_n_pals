
import admin from "firebase-admin";

const serviceAccount = import("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;