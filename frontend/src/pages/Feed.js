import React, { Component } from 'react'

import './Feed.css'

import more from '../assets/more.svg'
//import like from '../assets/like'
//import comment from '../assets/comment'
//import send from '../assets/send'

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Marcio Lisboa</span>
                            <span className="place">Blumenau</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/OmniStack.jpg" alt=""/>

                    <footer>
                        <div className="actions">
                        
                        </div>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed