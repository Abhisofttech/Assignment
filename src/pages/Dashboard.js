import React from 'react'
import '../index.css'
import { Link ,Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
   <div className="page">
 <div className="sidenav">
    <ul>
        <li>
            <Link className="fs-4 " to="/dashboard/home">Dashboard</Link>
        </li>
        <li>
            <Link className="fs-4 "  to="/dashboard/updateDetail">Profile </Link>
        </li>
    </ul>
 </div>
 <div className="dashboard-content">
 <Outlet/>
 </div>
   </div>
    </>
  )
}

export default Dashboard
