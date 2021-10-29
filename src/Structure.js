import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Functionality from './Functionality';
import {data} from './data'
import Edit from './Edit';

const Structure = () => {

    //variables 
    let [cardNumber, setCardNumber] = useState(0);
    const [editing, setEditing] = useState(false)


    //stop counter going below 1 and above 25
    if(cardNumber < data.length - data.length + 1) {
        cardNumber = 1;
    } else if(cardNumber > data.length) {
        cardNumber = data.length;
    }

    

    //DELETE CARD
    function handleDelete() {
        let currentIndex = cardNumber - 1;
        
        // console.log(data.splice(cardNumber, 1));
        alert(`why do you hate ${data[currentIndex].name.first} ?`)
        data.splice(currentIndex, 1)
        console.log(currentIndex)
        
    }

    //EDIT CARD


    return (
      <div className="App">
        <header>
            <h3 className="brand"> Home </h3>
        </header>
        <div className='container'>
            <div className="powder">

                {editing ? <Edit cardNumber={cardNumber} setEditing={setEditing} />  : <Functionality className="display" cardNumber={cardNumber} /> }


                
                <div className="controls">
                    <h3
                    className='previous'
                    onClick={() => setCardNumber(cardNumber-1)}
                    > <MdArrowBackIosNew /> Previous </h3>
                    <div className='control-btns'>
                        <button
                        className='edit-btn'
                        onClick={() => setEditing(true)}
                        >Edit</button>
                        <button
                        className="delete-btn"
                        onClick={handleDelete}
                        >Delete</button>
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
  