import { addDoc, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { todoRef } from "../lib/db";
// FUnction to get Data
const getTodos = async () => {
    const querySnapshot = await getDocs(todoRef);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
};

// Function to add Data
const addTodo = async (todo) => {
    await addDoc(todoRef, todo);
};

// Function to update Data
const updateTodo = async (id, todo) => {
    await updateDoc(doc(todoRef, id), todo);
};

// Function to delete Data
const deleteTodo = async (id) => {
    await deleteDoc(doc(todoRef, id));
};

const toggleCheck = async (id, checked) => {
    await updateDoc(doc(todoRef, id), {
        checked: !checked,
    });
}

const getTodo = async (id) => {
    const docSnap = await getDoc(doc(todoRef, id));
    return docSnap.data();
};

export { addTodo, deleteTodo, getTodo, getTodos, toggleCheck, updateTodo };

