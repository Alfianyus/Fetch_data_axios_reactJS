import React, { useEffect } from 'react'
import axios from 'axios'

function App() {

        useEffect(()=>{
            axios.get('https://reqres.in/api/users?page=2')
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        },[])

  return (
    <div>
      <h2>Axios library in React Js</h2>
    </div>
  )
}

export default App
