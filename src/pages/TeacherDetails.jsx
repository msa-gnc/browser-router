import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const TeacherDetails = () => {

//!kısayol
// const{state:{kisi}}=useLocation()

//! uzunyol
const {id}=useParams()
const [kisi,setKisi] = useState({})

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res)=>res.json())
.then((veri)=>setKisi(veri))
})



  return (
    <div className="container text-center mt-4">
      <div>
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${kisi.id}`}
          alt=""
          width="300px"
        />
        <h4>{kisi.username} </h4>
        <h5>{kisi.name} </h5>
        <h5>{kisi.phone} </h5>
        <h5>{kisi.website} </h5>
        <h5>{kisi.email} </h5>
      </div>
      <div>
        <button className="btn btn-warning">GO BACK</button>
        <button className="btn btn-primary">GO HOME</button>
      </div>
    </div>
  );
}

export default TeacherDetails