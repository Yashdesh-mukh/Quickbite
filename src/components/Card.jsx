import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Card() {
  return (
      <>
    <div>
      <div className="card bg-white w-64 shadow-xl ">
  <div className="px-2 pt-2 object-cover">
<img
      src="https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Biryani"
      className="rounded-xl" />
  </div>


  <div className="card-body w-full items-center text-center">
    <h2 className="card-title font-bold text-black ">Badastoor</h2>

   <div className="container p-1 flex text-center items-end font-bold text-black">
   <div className="flex items-center justify-center">
   <FontAwesomeIcon icon={faStar} style={{ color: '#03a00e', fontSize: '15px' }} />
    <p>4.5</p>
    </div>
    <p>15-20 mins</p>
   </div>
   <p>biryani,chicken,tanfoori chicken</p>
    <div className="card-actions">
      <button className="btn btn-primary btn-xs font-bold text-white">Order Now</button>
    </div>
  </div>
</div>
    </div>
      </>
  )
}

export default Card
