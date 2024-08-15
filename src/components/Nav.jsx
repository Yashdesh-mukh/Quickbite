import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUser,faCartShopping,faTag} from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    
      <div className="nav fixed bg-gray-200 p-2 h-27 w-[100%] flex justify-between items-center ">
        <div className="left">
          logo
          <input className='bg-transparent'
          type="text" placeholder='location '/>
        </div>


        <div className="right  ">
          <div className="menu flex flex-row space-x-24">
            <div className="flex flex-row items-center">
              <button
                type="submit"
                className="search-button p-1"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <p>offer</p>
            </div>

            <div className="offer flex flex-row space-x-2 items-center justify-center">
            <FontAwesomeIcon icon={faTag} />
            <p>offer</p>
            </div>


            <div className="cart flex flex-row space-x-2 items-center justify-center">
            <FontAwesomeIcon icon= {faCartShopping}/>
            <p>cart</p>
            </div>
            
            <div className=' signup flex flex-row space-x-2 items-center justify-center'><FontAwesomeIcon icon={faUser} />
            <a href="/login">Login</a>
            </div>
           
          </div>
        </div>
      </div>
    
  );
}

export default Nav;
