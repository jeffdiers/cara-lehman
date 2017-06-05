import React, { Component } from 'react'
import ProjectsContainer from './projects/ProjectsContainer.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ProjectDex from './projects/ProjectDex'

 const divStyle = {
                backgroundImage: 'url(img/face.JPG)',
};


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            view: "",
            hashtag: "#JavaScript",
            showDropdown: false
        }
        
        this._handleChange_nav = this._handleChange_nav.bind(this)
        this._handleClickLogo = this._handleClickLogo.bind(this)
        this._dropdown = this._dropdown.bind(this)
        this._filterProjects = this._filterProjects.bind(this)
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ view: "About" });
        // }, 1000);
        this.setState({ view: "About" });
        console.log(this.props.data)
    }

    _handleChange_nav(event) {
        this.setState({
            view: event.target.innerHTML
        })
    }

    _handleClickLogo(event) {
        this.setState ({
            view: "About"
        })
    }

    _filterProjects(event) {
        this.setState({
            hashtag: event.target.innerHTML,
            showDropdown: false
        })
        console.log(this.state)
    }

    _dropdown(event) {
        this.setState({
            showDropdown: true
        })
    }

    _renderProjectsFilter = () => {
        let toggleDropdown = this.state.showDropdown ? "dropdown-content show" : "dropdown-content"
        if(this.state.view === "Projects") 
            return (
                <div>
                    <span className="projects-filter-nav">Filter projects by <div className="dropdown">
                            <a onClick={this._dropdown} className="dropbtn"> {this.state.hashtag} <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                            <div id="myDropdown" className={toggleDropdown}>
                                <a onClick={this._filterProjects}>#JavaScript</a>
                                <a onClick={this._filterProjects}>#React</a>
                                <a onClick={this._filterProjects}>#Node.JS</a>
                                <a onClick={this._filterProjects}>#Express</a>
                                <a onClick={this._filterProjects}>#PostgreSQL</a>
                                <a onClick={this._filterProjects}>#AngularJS</a>
                                <a onClick={this._filterProjects}>#jQuery</a>
                            </div>
                        </div> 
                    </span>

                </div>
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
                                    <a className="contactlink" href="tel:720-987-3868">720-987-3868</a> <br />
                                    <a className="contactlink" href="mailto:jeff.diers@gmail.com?Subject=Hello%20friend" target="_top">jeff.diers@gmail.com</a> <br />
                                </p>
                            </div>
                        </section>
                        <section className="bang">
                            <img className="logo" src="img/iconcode.svg" />
                        </section>
                    </div>
                    <section className="social-icons-row-main">
                        <a href="https://github.com/jeffdiers" target="_blank"><img className="social-icon float" src="img/git.svg" /></a>
                        <a href="https://www.instagram.com/jeffdiers/" target="_blank"><img className="social-icon float" src="img/ig.svg" /></a>
                        <a href="https://www.linkedin.com/in/jeff-diers/" target="_blank"><img className="social-icon float" src="img/in.svg" /></a>
                    </section>

                </div>
            )

            else if(this.state.view === "Projects")
                
                return ( <ProjectDex hashtag={this.state.hashtag} /> )

            else if(this.state.view === "Resume")

                return (
                   <div className="splash-height">
                        <div className="resume-container">
                            <iframe src="https://indd.adobe.com/view/f0a5f958-58b7-4320-825c-ae3b8b030e71" width="100%" height="90%" />
                        </div>
                    </div>  
                )
    }

    render () {
        let container_style = this.state.view === "About" ? "main-container main" : "main"
        let globalnav_class = this.state.view === "About" ? "onhome" : ""

            return (
                <div>

                    <nav className={globalnav_class}>

                        <div className="globalnav-container">
                            <span className="globalnav-home">
                                <a className="globalnav-home-link" onClick={ this._handleClickLogo }>
                                    <img alt="logo" className="logonav" src="img/iconcode.svg" />
                                </a>
                            </span>
                            <div className="globalnav-slideout">

                                <a className={this.state.view === "About" ? "globalnav-item active" : "globalnav-item"} onClick={this._handleChange_nav}>About</a>
                                <a className={this.state.view === "Projects" ? "globalnav-item active" : "globalnav-item"} onClick={this._handleChange_nav}>Projects</a>
                                <a className={this.state.view === "Resume" ? "globalnav-item active" : "globalnav-item"} onClick={this._handleChange_nav}>Resume</a>
                                
                            </div>
                            {this._renderProjectsFilter()}
                        </div>
                    </nav>

                    <main>
                        <div className={container_style}>

                            {this._renderBody()}

                        </div>
                    </main>
                    <footer>

                    </footer>
                </div>
            )

    }
}
