//hold the functions (buttons, edit, delete, new)
import React, {useState} from 'react'
import {data} from './data'

// console.log(data)


export default function Functionality({ cardNumber, card, cards}) {

    

    console.log(card)
    return (
        <div>          
                <div key={card.id}>
                    <div className="user-id-number">
                        <h2 className="user-number">{cardNumber + 1}/{cards.length}</h2>
                    </div>
                    <div className="content">
                        <h1 className="name">{card.name.first} {card.name.last}</h1>
                        <h3 className="location">From: <span>{card.city}, {card.country}</span> </h3>
                        <h3 className="job">Job Title: <span>{card.title}</span> </h3>
                        <h3 className="employeer">Employer: <span>{card.employer}</span> </h3>
                        <br/>
                        <h3>Favorite Movies:</h3>
                        <ol className="card-ol">
                            <li> {card.favoriteMovies[0]}</li>
                            <li> {card.favoriteMovies[1]}</li>
                            <li> {card.favoriteMovies[2]}</li>
                        </ol>
                    </div>
                </div>
        </div>
    )
}


