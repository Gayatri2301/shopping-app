import React from 'react'
import ProductList from '../Products/ProductList';

const Dashboard = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  return (
    <div>
      <div className='bg-red'>
      welcome to {data.firstName} {data.lastName}
      </div>
      <ProductList />
    </div>
  )
}

export default Dashboard
