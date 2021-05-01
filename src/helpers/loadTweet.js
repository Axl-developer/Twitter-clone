import { db } from "../firebase/firebaseConfig";

export const loadTweets = async() => {
    const notesSnap = await db.collection('Twitter/data/Tweets').get();
    const  notes = [];

    notesSnap.forEach(
        snap => {
            notes.push({
                id: snap.id,
                ...snap.data()
            })
        }
    )

    //console.log(notes)

    return notes
}
