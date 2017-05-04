import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export class ProjectDex extends React.Component {

    static propTypes = {
        data: React.PropTypes.shape({
            loading: React.PropTypes.bool,
            error: React.PropTypes.object,
            Projects: React.PropTypes.object,
        }).isRequired,
    }

    render() {

        if (this.props.data.error) {
            console.log(this.props.data.error)
            return (<div>An unexpected error occurred</div>)
        }

        const porjectItems = this.props.data.allProjects.map((project) => 
            <div key={project.id}>
                <h3>{project.title}</h3>
                <Image src={project.imgUrl} alt={project.title} />
            </div>
        )

        return (
            <div container columns={5}>{porjectItems}</div>
        )
    }

}

const ProjectQuery = gql`
    query ProjectQuery($hashtag: String!) {
        allProjects(filter: {
            tags_some: {
                techTags: $hashtag
            }
        }) {
            title
            id
            imgUrl
        }
    }`

 const ProjectDexWithData = graphql(ProjectQuery, {
    options: (ownProps) => ({
        variables: {
            hashtag: ownProps.hashtag
        }
    })
})(ProjectDex)

export default ProjectDexWithData