import React, { Component } from 'react'
import BachelorComponent from '../Bachelor/BachelorComponent'
import StudentComponent from '../Students/StudentComponent'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center" style={{ fontWeight: "bold" }}>Welcome to UMS</h2>
                <br></br>
                <br></br>
                <br></br>

                <StudentComponent />

                <div style={{
                    marginBottom: "100px"
                }}></div>

                <BachelorComponent />

                <div style={{
                    marginBottom: "100px"
                }}></div>

                <h3>Master ...</h3>
            </div>
        )
    }
}
