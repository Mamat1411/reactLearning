/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header';

function App() {
  const developers = ['Sandhika Galih', 'Fuadit Muhammad', 'Muhammad Mujahid'];

  //likes variable is state, setLikes() is state updater function, useState() function is hooks
  const [likes, setLikes] = useState(0);

  //onClick props function
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header />
      <ul>
        {
          developers.map((developer) => (
            <li key={developer}>
              {developer}
            </li>
          ))
        }
      </ul>

      {/*State and Hooks Implementation*/}
      <button onClick={handleClick}>
        Like ({likes})
      </button>
    </div>
  );
}

export default App
