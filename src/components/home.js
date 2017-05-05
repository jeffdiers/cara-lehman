import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            view: ""
        }
        this._handleChange = this._handleChange.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ view: "About" });
        }, 1000);
    }

    _handleChange(event) {
        this.setState({
            view: event.target.innerHTML
        })
        console.log(event.target.innerHTML)
    }

    _renderBody = () => {
        if(this.state.view === "About")

            return (
                    <div className="splash-container">
                        <section className="hero">
                            <h1 className="hero-headline">
                                Jeff Diers
                            </h1>
                            <div className="hero-copy">
                                <p>
                                    Full Stack Developer. Denver, CO.
                                </p>
                                <p>
                                    Currently looking for full-time employment. <br />
                                    I am a developer who combines an aesthetic sensibility with a deep understanding of the code to create elegant applications.  
                                </p>
                                <p>
                                    Drop me a line <br />
                                    720-987-3868 <br />
                                    jeff.diers@gmail.com <br />
                                </p>
                            </div>
                        </section>
                        <section className="bang">
                            <img className="my-logo" src="img/iconcode.svg" />
                        </section>
                    </div>
            )

            else if(this.state.view === "Projects" || this.state.view === "Resume")

                return (
                    <div className="projects-container">
                        <h1>Comming soon :)</h1>
                    </div>
                )
    }

    render () {

            return (
                <div>
                    <nav>
                        <div className="nav-container">
                            <a className={this.state.view === "About" ? "nav-link active" : "nav-link"} onClick={this._handleChange}>About</a>
                            <a className={this.state.view === "Projects" ? "nav-link active" : "nav-link"} onClick={this._handleChange}>Projects</a>
                            <a className={this.state.view === "Resume" ? "nav-link active" : "nav-link"} onClick={this._handleChange}>Resume</a>
                        </div>
                    </nav>

                    <main>
                        <div className="main-container">

                            {this._renderBody()}



                        </div>
                    </main>
                    <footer>
                        <div className="social">
                            <section className="social-icons-row">
                                <a href="https://github.com/jeffdiers"><img className="social-icon" src="img/git.svg" /></a>
                                <a href="https://www.instagram.com/jeffdiers/"><img className="social-icon" src="img/ig.svg" /></a>
                                <a href="https://www.linkedin.com/in/jeff-diers/"><img className="social-icon" src="img/in.svg" /></a>
                            </section>
                        </div>
                    </footer>
                </div>
            )

    }
}
