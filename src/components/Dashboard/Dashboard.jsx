import React from 'react'

const Dashboard = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  return (
    <div>
      welcome to {data.firstName} {data.lastName}
    </div>
  )
}

export default Dashboard
