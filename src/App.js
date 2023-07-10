import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.delete('https://reqres.in/api/users/2'
        )
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h2>Axios library in React Js</h2>
            {/* {
                data.map((d, i) => {
                    return <p key={i}>{d.email}</p>
                })
            } */}
        </div>
    )
}

export default App