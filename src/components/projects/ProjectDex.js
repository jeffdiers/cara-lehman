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
        if (this.props.data.loading) {
            return (
                <div>
                </div>
            )
        }

        if (this.props.data.error) {
            console.log(this.props.data.error)
            return (<div>An unexpected error occurred</div>)
        }

        const porjectItems = this.props.data.allProjects.map((project) => 
                    <div>
                        <article className="project-list" key={project.id}>
                            <section className="project-image-container">
                                <img className="project-img" src={project.imgUrl} />
                            </section>
                            <section className="description-container">
                                <h1 className="description-title hero-headline">
                                    {project.title}
                                </h1>
                                <div className="description-copy">
                                    <p>
                                        {project.description}
                                    </p>
                                    <div className="project-buttons-container">
                                        <a className="project-button" href={project.gitHubUrl} target="_blank"><i className="fa fa-github fa-fw"></i>View Github</a>
                                        {project.projectUrl === null ? null : <a className="project-button" href={project.projectUrl} target="_blank"><i className="fa fa-link fa-fw"></i>View Live</a>}
                                    </div>
                                </div>
                            </section>
                        </article>
                        <hr className="project-divider"/>
                    </div>

                    )

        return (
            <div className="projects-height">
                <div className="projects-container">
                    {porjectItems}
                </div>
            </div>
        )
    }

}

const ProjectQuery = gql`
    query ProjectQuery($hashtag: String!) {
        allProjects(filter: {
            tags_some: {
                techTags: $hashtag
            }
        }, orderBy: createdAt_DESC) {
            title
            id
            imgUrl
            projectUrl
            gitHubUrl
            description
            tags {
                id
                techTags
          }
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


// border img div
// {/*<div className="border img-container">
//     <div className="project-img" style={{backgroundImage: "url(" + project.imgUrl + ")"}}></div>
// </div>*/}