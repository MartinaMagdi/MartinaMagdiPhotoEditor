import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import '../css/portfolio.css'

export default class Portfolio extends Component {
    render() {
        const projects = [
            {
                id: 1, name: 'Posts App', description: 'Creating, updating and deleting posts.', before: '1.jpg', after: '1-2.jpg'
            },

            { id: 2, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '2.jpg', after: '2-1.jpg' },

            { id: 3, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '3.jpg', after: '3-1.jpg' },

            { id: 4, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '4.jpg', after: '4-1.jpg' },

            { id: 5, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '5.jpg', after: '5-1.jpg' },

            { id: 6, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '6.jpg', after: '6-1.jpg' },

            { id: 7, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '7.jpg', after: '7-1.jpg' },

            { id: 8, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '8.jpg', after: '8-1.jpg' },

            { id: 9, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '9.jpg', after: '9-1.jpg' },

            { id: 10, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '10.jpg', after: '10-1.jpg' },

            { id: 11, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '11.jpg', after: '11-1.jpg' },

            { id: 12, name: 'Posts App', description: 'Creating, updating and deleting posts using axios.', before: '12.jpg', after: '12-1.jpg' },
        ]

        const projectsList = projects.map(project => {
            return (
                <div className="col s12 m4" key={project.id}>
                    <Card className="project-card">
                        {/* <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe">
                                    {project.avatar}
                                </Avatar>
                            }
                            title={project.name}
                            subheader={project.framework + ' Framework'}
                        /> */}
                        {/* <img alt={project.name} src={process.env.PUBLIC_URL + '/assets/portfolio/' + project.img} /> */}

                        <div class="ba-slider">
                            <img src={process.env.PUBLIC_URL + '/assets/portfolio/' + project.after} alt="" />
                            <div class="resize">
                                <img src={process.env.PUBLIC_URL + '/assets/portfolio/' + project.before} alt="" />
                            </div>
                            <span class="handle"></span>
                        </div>
                        {/* <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.description}
                            </Typography>
                        </CardContent> */}
                        {/* <CardActions disableSpacing>
                            <IconButton className="footer-btn" aria-label="Add to favorites">
                                <a className="portfolio-link" href={project.liveURL} rel="noopener noreferrer" target="_blank" title="Live demo">
                                    <i className="fas fa-eye"></i>
                                </a>
                            </IconButton>
                            <IconButton className="footer-btn" aria-label="Share">
                                <a className="portfolio-link" href={project.githubURL} rel="noopener noreferrer" target="_blank" title="Code in github">
                                    <i className="fas fa-code"></i>
                                </a>
                            </IconButton>
                        </CardActions> */}
                    </Card>
                </div>
            )
        })

        return (
            <div className="portfolio container">
                <div className="row">
                    {projectsList}
                </div>
            </div>
        )
    }
}
