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
                        <article className="project-list">
                            <section className="project-image-container">
                                <div className="border img-container">
                                    <div className="project-img" style={{backgroundImage: "url(" + project.imgUrl + ")"}}></div>
                                </div>
                            </section>
                            <section className="description-container">
                                <h1 className="description-title hero-headline">
                                    {project.title}
                                </h1>
                                <div className="description-copy">
                                    <p>
                                        Description. Lorem ipsum dolor sit amet, wisi dicunt ancillae his eu, eam vidit possit ut. Te diam mnesarchum scribentur vel, tation putant ad per. In officiis intellegat reformidans est. Mel no quas harum, mentitum laboramus mediocritatem vel ea, vim eu vulputate definitionem.
                                    </p>
                                    <div className="project-buttons-container">
                                        <a className="project-button" href={project.gitHubUrl} target="_blank">Github</a>
                                        {project.projectUrl === null ? null : <a className="project-button" href={project.projectUrl} target="_blank">Website</a>}
                                    </div>
                                </div>
                            </section>
                        </article>
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
        }) {
            title
            id
            imgUrl
            projectUrl
            gitHubUrl
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