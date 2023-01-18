import React, { useEffect, useState } from "react";
import axios from 'axios'


export default function App () {
    const [bountyData, setBountyData] = useState([])

    useEffect(() => {
        axios.get("/bounty")
        .then(res => setBountyData(() => res.data))
        .catch(err => console.error(err))
    }, [])

    const mappedBountyData = bountyData.map(bountyItem => {
        return(
            <div>
                <p>First Name: {bountyItem.fName}</p>
                <p>Last Name: {bountyItem.lName}</p>
                <p>{bountyItem.living? 
                `The ${bountyItem.type} is still alive`:
                `The ${bountyItem.type} is dead`}</p>
                <p>The reward is: {bountyItem.bountyAmount}</p>
                <p>The type is {bountyItem.type}</p>
                <br></br>
            </div>
        )
    })

    return(
        <div>
            {mappedBountyData}
        </div>
    )
}