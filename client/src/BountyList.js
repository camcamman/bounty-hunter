import React, { useState } from "react";
import BountyForm from "./BountyForm";

export default function BountyList (props) {
    const {fName, lName, living, bountyAmount, type, editBounty, _id, deleteBounty} = props
    const [toggleEdit, setToggleEdit] = useState(true)
    function toggle () {setToggleEdit(prevToggle => !prevToggle)}

    function deleteBountyItem () {
        deleteBounty(_id)
        // console.log("clicked")
    }

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
                        toggleEdit ={toggleEdit}
                        deleteBounty = {deleteBounty}


                        _id ={_id}
                        toggle ={toggle}
                    />
                    <button onClick={toggle}>Exit</button>
                </>
            }
            <button onClick={deleteBountyItem}>Delete</button>
                <br></br>
                <br></br>
                <br></br>
            </div>
        
        </div>
    )
}