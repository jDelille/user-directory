import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Functionality from './Functionality';
import {data} from './data'
import Edit from './Edit';

const Structure = () => {

    // card number
    let [cardNumber, setCardNumber] = useState(0);
    // show editing form
    const [editing, setEditing] = useState(false)
    // copy data array
    const [cards, setCards] = useState(data)


    //stop counter going below 1 and above 25
    if(cardNumber < data.length - data.length + 1) {
        cardNumber = 1;
    } else if(cardNumber > data.length) {
        cardNumber = data.length;
    }

    

    
    //DELETE CARD
    const deleteCard = () => {        
        let cardsCopy = [...cards];
        console.log(cardsCopy.splice(cardNumber, 1));
        setCards(cardsCopy)
        console.log(cardsCopy)
    }


    return (
      <div className="App">
        <header>
            <h3 className="brand"> Home </h3>
        </header>
        <div className='container'>
            <div className="powder">

                {/* toggle editing or card content  */}
                {editing ? <Edit cardNumber={cardNumber} setEditing={setEditing} />  : <Functionality className="display" cardNumber={cardNumber} card={cards[cardNumber]}  /> }

                <div className="controls">
                    <h3
                    className='previous'
                    onClick={() => setCardNumber(cardNumber-1)}
                    > <MdArrowBackIosNew /> Previous </h3>
                    <div className='control-btns'>
                        {/* edit button */}
                        <button
                        className='edit-btn'
                        onClick={() => setEditing(true)}
                        >Edit</button>
                        {/* delete button */}
                        <button
                        className="delete-btn"
                        onClick={deleteCard}
                        >Delete</button>
                        {/* new button */}
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
  