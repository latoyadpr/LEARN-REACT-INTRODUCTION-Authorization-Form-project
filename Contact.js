import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  return (
      <div id="authorization">
        <h1>Contact</h1>
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      </div>
  );

  // Move the following return statement inside the Contact() function
  // to fix the SyntaxError
  return (
    <div id="authorization">
      <h1>{authorized ? "Contact" : "Enter the Password"}</h1>
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;

const login = (
  <form action="#" onSubmit={handleSubmit}>
    <input type="password" placeholder="Password" />
    <input type="submit" />
  </form>
);





