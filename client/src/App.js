import React, { useEffect, useState } from "react";
import axios from 'axios'
import BountyForm from "./BountyForm";


export default function App () {
    const [bountyData, setBountyData] = useState([])

    function getBounty () {
        axios.get("/bounty")
        .then(res => setBountyData(() => res.data))
        .catch(err => console.error(err))
    }

    function addBounty (newBounty) {
        axios.post("/bounty", newBounty)
        .then(res => {
            setBountyData(prevBounty => [...prevBounty, newBounty])
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getBounty()
    }, [])

    const mappedBountyData = bountyData.map(bountyItem => {
        return(
            <div key={bountyItem._id}>
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
            <BountyForm
                addBounty={addBounty}
            />
            {mappedBountyData}
        </div>
    )
}