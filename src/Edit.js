import React, { Component } from 'react'
import {data} from './data'
import './Edit.css'


export default function Edit({setEditing, card}) {
    

    return (
        <div className="content">
                    <div className="form-content">
                        <form 
                        className="firstNameInput"
                        onSubmit={(e) => {
                            e.preventDefault()
                            setEditing(false)}
                        }
                        >

                            <label> First Name </label><input type="text" placeholder={card.name.first} onChange={(e) => data[card.id - 1].name.first = e.target.value} />
                            <label> Last Name </label><input type="text" placeholder={card.name.last} onChange={(e) => data[card.id - 1].name.last = e.target.value } />
                            <label> Location </label> <input type='text' placeholder={card.location} onChange={(e) => data[card.id - 1].location = e.target.value } />
                            <label> Job Title </label><input type='text' placeholder={card.title} onChange={(e) => data[card.id - 1].title = e.target.value } />
                            <label> Employeer </label><input type='text' placeholder={card.employer} onChange={(e) => data[card.id - 1].employer = e.target.value } />

                            <label> Add Favorites Movies </label>
                            <ol className='edit-ol'>
                                <input type="text" placeholder={card.favoriteMovies[0]} 
                                onChange={(e) => data[card.id - 1].favoriteMovies[0] = e.target.value }
                                />
                                <input type="text" placeholder={card.favoriteMovies[1]}
                                onChange={(e) => data[card.id - 1].favoriteMovies[1] = e.target.value }
                                />
                                <input type="text" placeholder={card.favoriteMovies[2]} 
                                onChange={(e) => data[card.id - 1].favoriteMovies[2] = e.target.value }
                                />
                            </ol>

                        <button className="submit-edit-btn"type="submit">Save</button>
                    </form>
                </div>
        </div>
    )
}

