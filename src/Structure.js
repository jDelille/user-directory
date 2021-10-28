import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Functionality from './Functionality';


const Structure = () => {

    let [cardNumber, setCardNumber] = useState(1)

    

    return (
      <div className="App">
        <header>
            <h3 className="brand"> Home </h3>
        </header>
        <div className='container'>
            <div className="powder">
                <Functionality className="display" cardNumber= {cardNumber} />
                <div className="controls">
                    <h3
                    className='previous'
                    onClick={() => setCardNumber(cardNumber-1)}
                    > <MdArrowBackIosNew /> Previous </h3>
                    <div className='control-btns'>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>New</button>
                    </div>
                    <h3 
                    className='next'
                    onClick={() => setCardNumber(cardNumber+1) }
                    > Next <MdArrowForwardIos className="arrow"/></h3>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Structure;
  