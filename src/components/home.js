import React from 'react'
import ProjectsContainer from './projects/ProjectsContainer.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ProjectDex from './projects/ProjectDex'

 const divStyle = {
                backgroundImage: 'url(img/face.JPG)',
};


export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            view: "",
            hashtag: "#Javascript"
        }
        
        this._handleChange_nav = this._handleChange_nav.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ view: "About" });
        }, 1000);
        // this.setState({ view: "Projects" });
        console.log(this.props.data)
    }

    _handleChange_nav(event) {
        this.setState({
            view: event.target.innerHTML
        })
                console.log(this.props)

        console.log(event.target.innerHTML)
    }

    // _handleChange_projects(event) {
    //     this.setState({
    //         hashtag: event.target.innerHTML
    //     })
    //     console.log(this.state)
    // }

    _renderNav = () => {
        if(this.state.view === "Projects") 
            return (
                <a className="projects-nav">Projects filtered by Javascript</a>
            )
        else 
            return (
                <div></div>
            )
    }

    

    _renderBody = () => {
        if(this.state.view === "About")

            return (
                <div className="splash-height">
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
                                    I am a Full Stack Developer who combines an aesthetic sensibility with a deep understanding of the code to create applications that look as well as they work.  
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
                    <section className="social-icons-row">
                        <a href="https://github.com/jeffdiers" target="_blank"><img className="social-icon float" src="img/git.svg" /></a>
                        <a href="https://www.instagram.com/jeffdiers/" target="_blank"><img className="social-icon float" src="img/ig.svg" /></a>
                        <a href="https://www.linkedin.com/in/jeff-diers/" target="_blank"><img className="social-icon float" src="img/in.svg" /></a>
                    </section>

                </div>
            )

            else if(this.state.view === "Projects")
                
                return (
                            <ProjectDex hashtag={this.state.hashtag} />
                )

            else if(this.state.view === "Resume")

                return (
                   <div className="splash-height">
                        <div className="projects-container">
                            <h1 className="hero-headline">Coming soon :)</h1>
                        </div>
                    </div>  
                )
    }

    render () {

            return (
                <div>
                    <nav>
                        <div className="nav-container">
                            <a className={this.state.view === "About" ? "nav-link active" : "nav-link"} onClick={this._handleChange_nav}>About</a>
                            <a className={this.state.view === "Projects" ? "nav-link active" : "nav-link"} onClick={this._handleChange_nav}>Projects</a>
                            <a className={this.state.view === "Resume" ? "nav-link active" : "nav-link"} onClick={this._handleChange_nav}>Resume</a>
                        </div>
                    </nav>

                    <main>
                        <div className="main-container">

                            {this._renderBody()}

                        </div>
                    </main>
                    <footer>

                    </footer>
                </div>
            )

    }
}
