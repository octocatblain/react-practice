import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [name, setName] = useState("");

  const [subscribers, setSubscribers] = useState(["james", "stone", "adam"])


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubscribers(currentSubs => [...currentSubs, name]);
    setName("");
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
      <Navbar />
      <div className='wrapper'>
        <div className='subs'>
          <form onSubmit={handleSubmit} className='subscription_form'>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button type='submit'>Subscribe</button>
          </form>
          <ul>
            {
              subscribers.map((sub, index) => (
                <li key={index}>{sub}</li>
              ))
            }
          </ul>

        </div>
        <div className='others'>
          <p className='text' style={{ color: "var(--tertiary-clr)", fontSize: "2rem" }}>
            {intro}
          </p>
          <button onClick={sayHi} type="button">Say Hi</button>

          <button onClick={() => sayMyName("Blain")} type="button">Say My Name</button>
        </div>
      </div>
    </div>
  );
}

export default App;
