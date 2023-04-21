import React from 'react'
import {useState} from 'react'
export default function Form() {
    const[firstName,setfirstName]=useState("")
    const[lastName,setlastName]=useState("")
    const[error,setError]=useState(false)
    
    const handleError=(e)=>{
        e.preventDefault();
        if(firstName.length ===0 || lastName.length ===0){
            setError(true)
        }
        if(firstName && lastName){
            console.log("First Name => " +firstName);
            console.log("Last Name => " +lastName);
        }
    }
  return (
    <div id="first">
        <form onSubmit={handleError}>
            ENTER  CUSTOMER NAME: <input  id ="text"onChange ={(e)=>setfirstName(e.target.value)}></input><br></br><br></br>
            {error && firstName.length===0 ? <label id="error">Please enter the first name</label>:" "}<br></br>
            ENTER ID: <input type="text" onChange ={(e)=>setlastName(e.target.value)}></input><br></br><br></br>
            {error && lastName.length===0 ? <label id="error">Please enter the last name</label>:" "}<br></br>
            ENTER PRODUCTS:
            <select>
                <option value="Discipline">STUDENT</option>
                <option value="Discipline">PROFESSOR</option>
                <option value="Discipline">WORK</option>
            </select>
            <br></br>
            <br></br>
            <button  id="but" type="submit" >SUBMIT</button>
            <br></br>
        </form>
    </div>
  )
}