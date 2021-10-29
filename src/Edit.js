import React, { Component } from 'react'
import { data } from './data'

export default function Edit(props) {
    

    return (
        <div className="content">
                {data
                .filter(item => item.id === props.cardNumber)
                .map(item => 
                    <div>
                        <form 
                        className="firstNameInput"
                        onSubmit={(e) => {
                            e.preventDefault()
                            props.setEditing(false)}
                        }
                        >
                            <label> First Name <input type="text" placeholder={item.name.first} onChange={(e) => data[item.id - 1].name.first = e.target.value} /></label>
                            
                            <label> Last Name <input type="text" placeholder={item.name.last} onChange={(e) => data[item.id - 1].name.last = e.target.value } /></label>
                            
                            <label> Location <input type='text' placeholder={item.location} onChange={(e) => data[item.id - 1].location = e.target.value } /></label>
            
                            <label> Job Title <input type='text' placeholder={item.title} onChange={(e) => data[item.id - 1].title = e.target.value } /></label>
                            
                            <label> Employeer <input type='text' placeholder={item.employer} onChange={(e) => data[item.id - 1].employer = e.target.value } /></label>

                            <label> Add Favorites Movies </label>

                            <ol>

                            <input type="text" placeholder={item.favoriteMovies[0]} 
                                onChange={(e) => data[item.id - 1].favoriteMovies[0] = e.target.value }
                            />
                            
                            <input type="text" placeholder={item.favoriteMovies[1]}
                                onChange={(e) => data[item.id - 1].favoriteMovies[1] = e.target.value }
                             />
                            
                            <input type="text" placeholder={item.favoriteMovies[2]} 
                                onChange={(e) => data[item.id - 1].favoriteMovies[2] = e.target.value }
                            />
                            
                            </ol>

                        <button type="submit">Save</button>
                    </form>
                </div>,
                )}      
        </div>
    )
}

