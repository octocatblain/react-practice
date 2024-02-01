import React from 'react'
import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    const [name, setName] = useState("");

    const [subscribers, setSubscribers] = useState(["james", "stone", "adam"])


    const handleSubmit = (event) => {
        event.preventDefault();
        setSubscribers(currentSubs => [...currentSubs, name]);
        setName("");
    }

    const handleDelete = (deletedSub) => {
        const newSubs = subscribers.filter((subscribers) => subscribers !== deletedSub)
        setSubscribers(newSubs);
    }

    const [notification, setNotification] = useState(false);

    const handleNotification = () => {
        setNotification(!notification);
    }


    function sayHi() {
        alert("hi doofus")
    };

    const sayMyName = (name) => {
        alert("hi " + name)
    }

    const intro = "lorem ipsum and other things"
    return (
        <div className="app">
         <Navbar/>
            <div className='wrapper'>
                <div className='subs'>
                    <form onSubmit={handleSubmit} className='subscription_form'>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        <button type='submit'>Subscribe</button>
                    </form>
                    <h5 className='title'>All Subscribers</h5>
                    <ul className='sub_list'>
                        {
                            subscribers.map((sub, index) => (
                                <li key={index}>{sub} <button onClick={() => handleDelete(sub)} className='delete_btn' type='submit'>Delete</button></li>
                            ))
                        }
                    </ul>

                </div>
                <div className='others'>
                    {notification ? <div className='notification_bar'>Success :)</div> : ""}

                    <p className='text' style={{ color: "var(--tertiary-clr)", fontSize: "2rem" }}>
                        {intro}
                    </p>
                    <button onClick={sayHi} type="button">Say Hi</button>

                    <button onClick={() => sayMyName("Blain")} type="button">Say My Name</button>



                    <button onClick={() => handleNotification()} className='notif_toggle'>Toggle Notification</button>
                </div>
            </div>
        </div>
    )
}

export default Home
