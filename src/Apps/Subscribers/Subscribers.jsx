import React, {useState} from 'react'

const Subscribers = () => {

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


    return (
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
    )
}

export default Subscribers
