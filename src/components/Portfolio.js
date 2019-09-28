import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import '../css/portfolio.css'

export default class Portfolio extends Component {
    render() {
        const projects = [
            { id: 1, before: '1.jpg', after: '1-2.jpg' },

            { id: 2, before: '2.jpg', after: '2-1.jpg' },

            { id: 3, before: '3.jpg', after: '3-1.jpg' },

            { id: 4, before: '4.jpg', after: '4-1.jpg' },

            { id: 5, before: '5.jpg', after: '5-1.jpg' },

            { id: 6, before: '6.jpg', after: '6-1.jpg' },

            { id: 7, before: '7.jpg', after: '7-1.jpg' },

            { id: 8, before: '8.jpg', after: '8-1.jpg' },

            { id: 9, before: '9.jpg', after: '9-1.jpg' },

            { id: 10, before: '10.jpg', after: '10-1.jpg' },

            { id: 11, before: '11.jpg', after: '11-1.jpg' },

            { id: 12, before: '12.jpg', after: '12-1.jpg' },

            { id: 13, before: '13.jpg', after: '13-1.jpg' },

            { id: 14, before: '14.jpg', after: '14-1.jpg' },

            { id: 15, before: '15.jpg', after: '15-1.jpg' },

            { id: 16, before: '16.jpg', after: '16-1.jpg' },

            { id: 17, before: '17.jpg', after: '17-1.jpg' },

            { id: 18, before: '18.jpg', after: '18-1.jpg' },
        ]

        const projectsList = projects.map(project => {
            return (
                <div className="col s12 m4" key={project.id}>
                    <Card className="project-card">
                        <div class="ba-slider">
                            <img src={process.env.PUBLIC_URL + '/assets/portfolio/' + project.after} alt="" />
                            <div class="resize">
                                <img src={process.env.PUBLIC_URL + '/assets/portfolio/' + project.before} alt="" />
                            </div>
                            <span class="handle"></span>
                        </div>
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
