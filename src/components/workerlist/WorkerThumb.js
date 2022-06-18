import React from 'react'
import "./WorkerList.css"

export default function WorkerThumb({worker}) {
  return (
    <div className="workerThumbContainer">
        <img className="thumbImg" src={worker.picture} alt="thumb" />
        <div className="thumbDescription">
            <h3>{worker.firstname} {worker.lastname}</h3>
            <h4>{worker.activity ? worker.activity : "Activité non renseignée"}</h4> 
            <h4>{worker.location ? worker.location : "Non renseigné"}</h4>
        </div>
    </div>
  )
}
