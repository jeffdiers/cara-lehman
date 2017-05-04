import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            render: "projects"
        }
    }

    render () {
        return (
            <div>
                <nav>
                    <div className="nav-container">
                        <a className="nav-link">Contact</a>
                        <a className="nav-link">Projects</a>
                        <a className="nav-link">Resume</a>
                    </div>
                </nav>

                <main>
                    <div className="main-container">
                        <div className="splash-container">
                            <section className="hero">
                                <h1 className="hero-headline">
                                    Jeff Diers
                                </h1>
                                <div className="hero-copy">
                                    <p>
                                        Full Stack Developer.
                                    </p>
                                    <p>
                                        I believe in changing the world one component at a time. I am passionate about developing elegant design with elegant code.
                                    </p>
                                    <p>
                                        phone: 720-987-3868 <br />
                                        email: jeff.diers@gmail.com <br />
                                    </p>
                                </div>
                            </section>
                            <section className="bang">
                                <img src="img/iconcode.svg" />
                            </section>
                        </div>
                    </div>
                </main>
                
            </div>
        )
    }
}
