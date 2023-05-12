import React, { useState } from "react";
import Sresult from "./Sresult";
const Search=()=>{
    const[img,setImg]=useState("");
    const inputEvent=(event)=>{
    const data= event.target.value;
    console.log(data);
    setImg(data);
     };
      return(
        <>
        <div className="searchbar">
        <input type="text" 
        placeholder="search anything" 
        value={img}
        onChange={inputEvent}
        />
        <Sresult name={img}/>
        </div>
        </>
    );
};
export default Search;