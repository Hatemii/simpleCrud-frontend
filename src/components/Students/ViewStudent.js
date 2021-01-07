import React, { Component } from 'react'
import UserService from "../../service/StudentService"

class ViewStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }

        this.editStudent = this.editStudent.bind(this);
    }

    componentDidMount() {
        UserService.getStudentById(this.state.id).then(res => {
            this.setState({ student: res.data });
        })
    }

    editStudent(id) {
        this.props.history.push(`/update-student/${id}`)
    }

    render() {
        return (
            <div>
                <br></br>
                <h3 className="text-center"> View Student Details</h3>

                <div className="card col-md-6 offset-md-3">
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
                            <label> Student Surname: </label>
                            <div> {this.state.student.surname}</div>
                        </div>
                        <div className="row">
                            <label> Student Field: </label>
                            <div> {this.state.student.field}</div>
                        </div>
                        <div className="row">
                            <label> Student Semester: </label>
                            <div> {this.state.student.semester}</div>
                        </div>
                        {/* UPDATE STUDENT */}
                        <button
                            style={{ float: "right", fontWeight: "bold" }}
                            onClick={() => this.editStudent(this.state.id)}
                            className="btn btn-primary">Update</button>
                    </div>
                </div>



            </div>
        )
    }


}

export default ViewStudent