import React from 'react'


function ResCard() {
   
   
  return (
    <>
    <div id="res" class="bg-green-100 border-2 border-black rounded-xl w-1/2 p-2 flex justify-between">
        <div class="col1 flex flex-col justify-center w-3/4">
            <div class="flex items-center">
                <div class="name font-bold text-lg mr-4">Sagar Gaire</div>
                <div class="border-2 border-gray-500 bg-black text-white rounded w-12 text-sm text-center flex items-center justify-center px-2">
                    <i class="ri-star-smile-fill text-yellow-400 pr-1"></i> 4.7
                </div>
            </div>
            <div class="amt text-lg font-semibold mb-2">Rs. 199</div>
            <div class="desc text-sm">A hot, crispy crust topped with melted cheese, tangy tomato sauce and your favorite savory toppings.</div>
        </div>
        <div class="col2 flex flex-col items-center w-1/4">
            <img class="w-32 h-28 shadow-2xl mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeo_JMT1ZvwUNMHneItLQcNgYbwRsSs2mqYA&s" alt="food image"/>
            <button id='btn' class="bg-green-500 text-white px-3 py-1 rounded ">ADD</button>
        </div>
    </div>
    </>
  )
}

export default ResCard
