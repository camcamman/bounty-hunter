import React, { useState } from "react";
import BountyForm from "./BountyForm";

export default function BountyList (props) {
    const {fName, lName, living, bountyAmount, type, editBounty, _id} = props
    const [toggleEdit, setToggleEdit] = useState(true)
    function toggle () {setToggleEdit(prevToggle => !prevToggle)}
    return(
        <div>
            <div>{toggleEdit? 
                <>
                    <p>First Name: {fName}</p>
                    <p>Last Name: {lName}</p>
                    <p>{living? 
                    `The ${type} is still alive`:
                    `The ${type} is dead`}</p>
                    <p>The reward is: {bountyAmount}</p>
                    <p>The type is {type}</p>
                    <button onClick={toggle}>Edit {type}</button>
                </>:
                <>
                    <BountyForm
                        fName = {fName}
                        lName = {lName}
                        living = {living}
                        bountyAmount = {bountyAmount}
                        type = {type}
                        addBounty={editBounty}
                        _id ={_id}
                        toggleEdit ={toggleEdit}
                        toggle ={toggle}
                    />
                    <button onClick={toggle}>Exit</button>
                </>
            }
                <br></br>
            </div>
        
        </div>
    )
}