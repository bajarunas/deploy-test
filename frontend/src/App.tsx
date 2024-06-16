import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
// });

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.bajarunas.online/api/type/').then((response) => {
      setLoading(false);
      const { status, data } = response;

      if (status === 200) {
        setData(data);
      } else {
        setData([]);
      }
    });
  }, []);

  return <div className='App'>{loading ? '...loading' : 'data got'}</div>;
}

export default App;
