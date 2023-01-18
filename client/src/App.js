import React, { useEffect, useState } from "react";
import axios from 'axios'
import BountyForm from "./BountyForm";
import BountyList from "./BountyList";


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

    function editBounty (updates, bountyId) {
        axios.put(`/bounty/${bountyId}`, updates)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getBounty()
    }, [])

    // const mappedBountyData = bountyData.map(bountyItem => {
    //     // const [toggleEdit, setToggleEdit] = useState(false)

    //     return(
    //         <div key={bountyItem._id}>
    //             <p>First Name: {bountyItem.fName}</p>
    //             <p>Last Name: {bountyItem.lName}</p>
    //             <p>{bountyItem.living? 
    //             `The ${bountyItem.type} is still alive`:
    //             `The ${bountyItem.type} is dead`}</p>
    //             <p>The reward is: {bountyItem.bountyAmount}</p>
    //             <p>The type is {bountyItem.type}</p>
    //             <BountyForm
    //                 fName = {bountyItem.fName}
    //                 lName = {bountyItem.lName}
    //                 living = {bountyItem.living}
    //                 bountyAmount = {bountyItem.bountyAmount}
    //                 type = {bountyItem.type}
    //             />
    //             <br></br>
    //         </div>
    //     )
    // })
    const mappedBountyData = bountyData.map(bountyItem =>{
      return(
          <BountyList 
          {...bountyItem} 
          key={bountyItem._id}
          editBounty={editBounty}
          />
        )  
    })
                
                
    return(
        <div>
            <BountyForm
                addBounty={addBounty}
            />
            {/* {mappedBountyData} */}
            {/* {bountyData.map(bountyItem => {<BountyList 
            {...bountyItem} 
            key={bountyItem._id}
            editBounty={editBounty}
            />})} */}
            {/* <BountyList /> */}
            {mappedBountyData}
        </div>
    )
}