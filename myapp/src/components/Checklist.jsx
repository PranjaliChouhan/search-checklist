import React from "react";
import { useState } from "react"
function Checklist(){
    const [checkedValues,setValue]=useState([])
    function handleChange(event){
        const {value,checked}=event.target
        if(checked){
            setValue(pre=>[...pre,value])
        }else(
            setValue(pre=>{
                return[]
            })
        )
    }
    console.log(checkedValues)


    return(
        <div className="checklist">
            <h1>People who got selected at Inboundsys </h1>
            <div className="check">
                <input type="checkbox" value='Prachi' onChange={handleChange}/>Prachi
                <br/>
                <input type="checkbox" value='Lakshy' onChange={handleChange}/>Lakshy
                <br/>
                <input type="checkbox" value='Mandar' onChange={handleChange}/>Mandar
                <br/>
                <input type="checkbox" value='Pranjali' onChange={handleChange}/>Pranjali
                <br/>
                <input type="checkbox" value='Apoorva' onChange={handleChange}/>Apoorva
                <br/>
                <input type="checkbox" value='Rajat' onChange={handleChange}/>Rajat
                <br/>
                
            </div>
        </div>
    );



}
export default Checklist;