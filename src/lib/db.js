import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app)

const todoRef = collection(db, "todo");

export { db, todoRef };
