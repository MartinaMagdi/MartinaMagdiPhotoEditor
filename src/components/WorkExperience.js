
import React, { Component } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../css/workExperience.css'

export default class WorkExperience extends Component {
    render() {
        const companies = [
            {
                id: 1,
                title: 'Front End Developer',
                name: 'Propertz CRM',
                from: 'Oct 2018',
                to: 'Jun 2019',
                location: 'Heliopolis',
                responsibilities: [
                    { id: 1, title: 'Design, develop and launch responsive websites.' },
                    { id: 2, title: 'Modify and Develop websites with Vue JS Framework.' }
                ],
                projects: [
                    { id: 1, name: 'Makanak', url: 'https://makanak.com.eg/' },
                    { id: 2, name: 'Eden House', url: 'https://www.edenhouse-eg.com/' },
                    { id: 3, name: 'Pick Community', url: 'https://www.pickcommunity.com/' },
                    { id: 4, name: 'Doja Developments', url: 'http://www.dojadevelopments.com/' },
                ]
            },
        ]

        const companiesList = companies.map(company => {
            return (
                <ExpansionPanel key={company.id} className="company-row">
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{company.name} <span className="duration"><span className="from">From</span>{company.from} <span className="to">To</span> {company.to}</span></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <span className="responsibilities">Responsibilities:</span>
                            {company.responsibilities.map(responsibility => {
                                return (
                                    <ul className="responsibilities-list" key={responsibility.id}>
                                        <li>{responsibility.title}</li>
                                    </ul>
                                )
                            })}

                            <span className="projects">Projects:</span>
                            {company.projects.map(project => {
                                return (
                                    <ul className="projects-list" key={project.id}>
                                        <li><a target="_blank" rel="noopener noreferrer" href={project.url}>{project.name}</a></li>
                                    </ul>
                                )
                            })}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        })
        return (
            <div className="work-experience container">
                {companiesList}
            </div>
        )
    }
}
