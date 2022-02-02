import Button from "./Button";
import Card from "../UI/Card";
import { useState } from "react";
import "./Addusers.css"
import "./Button.css"

const Addusers=(props)=>{
const[enteredUser,setEnteredUser]=useState('');
const[enteredAge,setEnteredAge]=useState('');

    const addDataHandler=(event)=>{
        event.preventDefault();
        if(enteredUser.trim().length===0||enteredAge.trim().length===0){
            alert("Enter a VALID username/Age!!!")
            return;
        }
        if(+enteredAge<0){
            alert("Dont you know your age,Enter a VALID Age then please!!!")
            return;
        }

        props.onAddUser(enteredUser,enteredAge);
        setEnteredUser('');
        setEnteredAge('');
    }

    const userChangedHandler=(event)=>{
        setEnteredUser(event.target.value); 
    }
    const ageChangedHandler=(event)=>{
        setEnteredAge(event.target.value); 
    }

    return(
       <Card>
           <div className="sidebyside">
        <form onSubmit={addDataHandler}>
            <div> <label htmlFor="Username" className="txt">UserName:</label>
            <input id="Username" type="text" onChange={userChangedHandler} value={enteredUser}></input></div>
           <div> <label htmlFor="Age" className="txt">Age:</label>
            <input id="Age" type="number" onChange={ageChangedHandler} value={enteredAge}></input></div>
            <Button type="submit">Submit</Button>
        </form>
        </div>
        </Card>
    )
}

export default Addusers;