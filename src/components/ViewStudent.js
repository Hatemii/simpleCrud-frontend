import React, { Component } from 'react'
import UserService from "../service/UserService"

class ViewStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount() {
        UserService.getStudentById(this.state.id).then(res => {
            this.setState({ student: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Student Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Student Id: </label>
                            <div> {this.state.student.id}</div>
                        </div>
                        <div className="row">
                            <label> Student Name: </label>
                            <div>  {this.state.student.name}</div>
                        </div>
                        <div className="row">
                            <label> Student Course: </label>
                            <div> {this.state.student.course}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


}

export default ViewStudent