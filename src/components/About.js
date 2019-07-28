import React from 'react'

const About = () => {
    return (
        <div className="about container">
            <h2 className="hello-txt">Hello, I'M Martina Magdi</h2>
            <h4 className="title-txt">Photo Editor</h4>
            <p>I graduated from Computers and Information system, Helwan University class of 2018. I strive to be a professional photo editor. I'm always stiving to develop my skills.</p>
            <div className="links">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=martinamagdi6@gmail.com" rel="noopener noreferrer" title="martinamagdi6@gmail.com" target="_blank"><i className="fas fa-at"></i></a>
                <a href="tel:01283255691" title="01283255691"><i className="fas fa-phone" style={{ transform: 'rotate(90deg)' }}></i></a>
            </div>
        </div>
    )
}

export default About
