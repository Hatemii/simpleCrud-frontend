import React, { Component } from 'react'
import "./Navbar.css"

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="navbar navbar-dark bg-dark">
                <span><h5>
                    <a href="/">University Managemnet System</a>
                </h5></span>
                <div>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/students">STUDENTS</a></li>
                        <li><a href="/bachelor">BACHELOR</a></li>
                        <li><a href="/master">MASTER</a></li>
                    </ul>
                </div>
            </div >
        )
    }
}

export default HeaderComponent
