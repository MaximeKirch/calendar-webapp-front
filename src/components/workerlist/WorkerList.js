import React from 'react'
import './WorkerList.css'
import { FakeWorker } from '../../data/WorkerDoe'
import WorkerThumb from './WorkerThumb'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function WorkerList() {

  const workers = useSelector(state => state.allWorkers)
  return (
    <div className="listContainer">
    { workers !== undefined  &&
        workers.map((worker, idx) => {
            return (
                <div key={idx}>
                <Link to={`${worker._id}`}>
                <WorkerThumb worker={worker} />
                </Link>
                </div>
            )
        })
    }
    </div>
  )
}
