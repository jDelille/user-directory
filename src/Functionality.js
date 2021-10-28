//hold the functions (buttons, edit, delete, new)
import React, {useState} from 'react'
import {data} from './data'

console.log(data)


export default function Functionality(props) {

    return (
        <div>
            {
                data
                .filter(item => item.id === props.cardNumber)
                .map(item => 
                <div key={item.id}>
                    <div className="user-id-number">
                        <h2 className="user-number">{item.id}/{data.length}</h2>
                    </div>
                    <div className="content">
                        <h1 className="name">{item.name.first} {item.name.last}</h1>
                        <h3 className="location">From: <span>{item.city}, {item.country}</span> </h3>
                        <h3 className="job">Job Title: <span>{item.title}</span> </h3>
                        <h3 className="employeer">Employer: <span>{item.employer}</span> </h3>
                        <br/>
                        <h3>Favorite Movies:</h3>
                        <ol>
                            <li> {item.favoriteMovies[0]}</li>
                            <li> {item.favoriteMovies[1]}</li>
                            <li> {item.favoriteMovies[2]}</li>
                        </ol>
                    </div>
                </div>,
                
                )
            }
        </div>
    )
}


