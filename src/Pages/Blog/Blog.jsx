import React, { useState } from 'react'

const Blog = () => {

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
    <div>
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
  )
}

export default Blog
