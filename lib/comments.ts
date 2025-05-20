import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase"

export async function sendComment(name: string, message: string) {
  try {
    await addDoc(collection(db, "comments"), {
      name,
      message,
      timestamp: serverTimestamp()
    })
  } catch (err) {
    console.error("Gửi bình luận thất bại: ", err)
  }
}
