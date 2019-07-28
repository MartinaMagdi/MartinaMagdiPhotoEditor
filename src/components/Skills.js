import React, { Component } from 'react'
import '../css/skills.css'

export default class Skills extends Component {
    render() {
        const skills = [
            { id: 1, name: 'HTML 5', img: 'html5.png' },
            { id: 2, name: 'CSS 3', img: 'css3.png' },
            { id: 3, name: 'JavaScript', img: 'js.jpg' },
            { id: 4, name: 'ES6', img: 'es6.png' },
            { id: 5, name: 'React JS', img: 'reactjs.png' },
            { id: 6, name: 'Vue JS', img: 'vuejs.png' },
            { id: 7, name: 'Axios', img: 'axios.png' },
            { id: 8, name: 'Github', img: 'github.png' },
            { id: 9, name: 'Bootstrap', img: 'bootstrap.png' },
            { id: 10, name: 'Responsive Design', img: 'responsive_web_design.png' },

            { id: 11, name: 'C', img: 'c.jpg' },
            { id: 12, name: 'C++', img: 'c++.jpg' },
            { id: 13, name: 'C#', img: 'csharp.jpg' },
            { id: 14, name: 'PHP', img: 'php.jpg' },
            { id: 15, name: 'Java', img: 'java.jpg' },
            { id: 16, name: 'Android', img: 'android.png' },

            { id: 17, name: 'Microsoft SQL Server', img: 'microsoft-sql.jpg' },
            { id: 18, name: 'Object Oriented Programming', img: 'oop.png' },

            { id: 19, name: 'Adobe Photoshop', img: 'ps.png' },
            { id: 20, name: 'Unity', img: 'unity.jpg' },
        ]

        const skillsList = skills.map(skill => {
            return (
                <div className="col s6 m3 center" key={skill.id}>
                    <img title={skill.name} alt={skill.name} src={process.env.PUBLIC_URL + '/assets/skillsimg/' + skill.img} />
                </div>
            )
        })
        return (
            <div className="skills container">
                <div className="row">
                    {skillsList}
                </div>
            </div>
        )
    }
}
