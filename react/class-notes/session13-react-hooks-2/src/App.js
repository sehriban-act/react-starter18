// import UseRefComponent from './components/UseRefComponent';
import fs from './assets/fs.png';
import aws from './assets/aws.png';

import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import axios from 'axios';
import UserContainer from './components/UserContainer';

function App() {
  const [count, setCount] = useState(0);
  // const [img, setImg] = useState(null);
  const [users, setUsers] = useState([]);
  // console.log({ users });
  const [text, setText] = useState('');
  console.log('text', text);
  const [search, setSearch] = useState('');
  console.log('search', search);
  // const inputRef = useRef(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data));
  }, []);

  const handleSearch = () => {
    setSearch(text);
    // setSearch(inputRef.current.value);
  };

  // const increase = () => {
  //   setCount(count + 1);
  // };
  return (
    <div className="App">
      {/* <UseRefComponent /> */}
      {/* <Header img={img} />
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button> */}
      {/* <input ref={inputRef} /> */}
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSearch}>Search User</button>
      <UserContainer users={users} />
    </div>
  );
}

export default App;
