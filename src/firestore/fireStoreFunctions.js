import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./fireStoreConfig"; 

// Recuperamos todos los cursos
export const getAllCourses = async () => {
  try {
    const coursesCollection = collection(db, "cursos");
    const snapshot = await getDocs(coursesCollection);
    const courses = snapshot.docs.map((doc) => ({
      id: doc.id, 
      ...doc.data() 
    }));
    return courses;
  } catch (error) {
    console.error("Error al recuperar todos los cursos:", error);
    throw error;
  }
};

// Recuperamos los cursos filtrados por categoría
export const getCoursesByCategory = async (category) => {
  try {
    const coursesCollection = collection(db, "cursos"); 
    const q = query(coursesCollection, where("category", "==", category));
    const snapshot = await getDocs(q);
    const courses = snapshot.docs.map((doc) => ({
      id: doc.id, 
      ...doc.data() 
    }));
    return courses;
  } catch (error) {
    console.error(`Error al recuperar cursos de (${category}):`, error);
    throw error;
  }
};
