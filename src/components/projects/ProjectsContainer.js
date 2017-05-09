import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ProjectDex from './ProjectDex'
// import { Grid } from 'semantic-ui-react'


export class ProjectsContainer extends React.Component {

    static propTypes = {
        data: React.PropTypes.shape({
            loading: React.PropTypes.bool,
            error: React.PropTypes.object,
            Tags: React.PropTypes.object,
        }).isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            hashtag: "#Javascript"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            hashtag: event.target.innerHTML
        })
        console.log(event.target.innerHTML)
    }

    render () {
        if (this.props.data.loading) {
            return (<div>wut</div>)
        }

        if (this.props.data.error) {
            console.log(this.props.data.error)
            return (<div>An unexpected error occurred</div>)
        }

        return (
            <div>
                <h1>Projects filtered by {this.state.hashtag}</h1>
                <br/>
                        <h3 onClick={this.handleChange}>#React</h3>
                        <h3 onClick={this.handleChange}>#AngularJS</h3>
                        <h3 onClick={this.handleChange}>#Javascript</h3>
                        <h3 onClick={this.handleChange}>#Node.js</h3>
                        <h3 onClick={this.handleChange}>#Heroku</h3>
                        <h3 onClick={this.handleChange}>#ReactNative</h3>
                        <h3 onClick={this.handleChange}>#jQuery</h3>
                <ProjectDex hashtag={this.state.hashtag} />
            </div>
        )
    }
}

const TagQuery = gql`
    query TagsQuery{
	allTags {
        id
        techTags
      }
    }`

const ProjectsContainerWithData = graphql(TagQuery)(ProjectsContainer)

export default ProjectsContainerWithData