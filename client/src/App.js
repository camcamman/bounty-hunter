import React, { useEffect, useState } from "react";
import axios from 'axios'


export default function App () {
    // const [person, setPerson] = useState([])

    useEffect(() => {
        axios.get("/bounty")
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }, [])

    return(
        <div>
            <p>Hello World </p>
        </div>
    )
}