import React from "react";



const Sresult=(props)=>{
    const img="'https://source.unsplash.com/featured/?nature/?${props.name}";
    return (
        <>
        <div>
            <img src={img} alt="picture"/>
        </div>
        </>
    );
};
export default Sresult;