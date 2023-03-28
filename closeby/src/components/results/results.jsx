import React, { useState, useEffect } from 'react';
import firebase from "../../firebase";
import 'firebase/firestore';

const results = () => {
  const collectionName = 'Publisher App/PublisherAccountList/EventListAllPublishers';

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const firebaseDb = db.firestore();
        const unsubscribe = db.collection(collectionName).onSnapshot((snapshot) => {
            const newEvents = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setEvents(newEvents);
        })
        return () => unsubscribe();
    }, [])

  return (
    <div>
        {events.map((event) => (
            <div key={event.id}>{event.name}</div>
        ))}
    </div>
  )
}

export default results;