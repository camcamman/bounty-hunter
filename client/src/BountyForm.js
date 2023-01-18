import React, { useState } from "react";

export default function BountyForm (props) {
    const initInputs = {
        fName:"",
        lName:"", 
        living:true, 
        bountyAmount:0, 
        type:""
    }

    const [BountyFormState, setBountyFormState] = useState({
    fName:"",
    lName:"", 
    living:true, 
    bountyAmount:0, 
    type:""
    })

    function handleChange (e) {
        const {name, value, checked, type} = e.target
        setBountyFormState(prevBounty => {
            return{
                ...prevBounty,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSumbit (e) {
        e.preventDefault()
        props.addBounty(BountyFormState)
        setBountyFormState(initInputs)
    }

    return(
        <div>
            <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    placeholder="First name"
                    name="fName"
                    value={BountyFormState.fName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Last name"
                    name="lName"
                    onChange={handleChange}
                    value={BountyFormState.lName}
                />

                <input
                    type="checkbox"
                    name="living"
                    onChange={handleChange}
                    checked={BountyFormState.living}
                />

                <input
                    type="number"
                    placeholder="First name"
                    name="bountyAmount"
                    onChange={handleChange}
                    value={BountyFormState.bountyAmount}
                />

                <input
                    type="text"
                    placeholder="type"
                    name="type"
                    onChange={handleChange}
                    value={BountyFormState.type}
                />
                <input 
                type="submit"/>
            </form>
        </div>
    )
}