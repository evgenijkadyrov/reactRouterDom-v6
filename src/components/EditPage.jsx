import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const EditPage = () => {
   const  {id}=useParams()
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <button onClick={goBack}>Go back</button>
         <p>Edit page {id}</p>
        </div>
    );
};

export default EditPage;