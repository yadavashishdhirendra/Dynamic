import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState();
  const [fullname, setFullName] = useState();

  const inputEvent = () => {
    setName(event.target.value);
  }

  const onsubmit = () => {
    setFullName(name + "🤭" );
  }
  return (
    <>
      <div className="title">
        <h1>Dynamic Greeting Website</h1>
      </div>
      <div className="help">
        <h4><a href="">Need Help?</a></h4><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam commodi
        at iusto consectetur quisquam, quia harum fugiat? Explicabo nisi
        quisquam molestias excepturi veritatis voluptatem dolorem ad,
            distinctio numquam delectus sapiente sint! Earum.</p>
      </div>
      <div className="help">
        <h4><a href="">Follow instructions!</a></h4><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam commodi
        at iusto consectetur quisquam, quia harum fugiat? Explicabo nisi
        quisquam molestias excepturi veritatis voluptatem dolorem ad,
        distinctio numquam delectus sapiente sint! Earum. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quas saepe quis dignissimos enim obcaec
             ati quaerat? Cumque blanditiis voluptates facere excepturi asperiores debitis.</p>
      </div>
      <div className="heading">
        <h1>Hello, {fullname}</h1>
      </div>
      <div className="input">
        <input type="text" id="inp" value={name} placeholder="Enter Your Name"
          onChange={inputEvent}
        />
      </div>
      <div className="btns">
        <button className="btn" type="button" onClick={onsubmit}>Submit 🔓</button>
      </div>
      <div className="instructions">
        <h4><a href="">Guidelines!</a></h4><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam commodi
        at iusto consectetur quisquam, quia harum fugiat? Explicabo nisi
        quisquam molestias excepturi veritatis voluptatem dolorem ad,
        distinctio numquam delectus sapiente sint! Earum. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quas saepe quis dignissimos enim obcaec
             ati quaerat? Cumque blanditiis voluptates facere excepturi asperiores debitis.</p>
      </div>
        <div className="footer_items">
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy & Policy</li>
            <li>Copyright &copy; 2021-2022 <a href=""> >> Designed By Ashish Yadav</a> </li>
            <li>Contact</li>
          </ul>
        </div>
    </>
  );
}

export default App;
