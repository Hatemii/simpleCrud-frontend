import React, { Component } from 'react'
import UserService from "../../service/StudentService"
import BachelorService from "../../service/BachelorService"
import { Link } from "react-router-dom"

class ViewStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {},
            fields: []
        }
    }

    componentDidMount() {
        UserService.getStudentById(this.state.id).then(res => {
            this.setState({ student: res.data });
        });

        BachelorService.getAllStudyFields().then(res => {
            this.setState({ fields: res.data });
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
                <hr />

                <h4>Personal Information</h4>
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

                <div style={{ marginTop: "50px" }}>
                    <h4>Subjects For This Semester</h4>
                    <table className="table table-hover table-striped table-white ">
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>TECHNOLOGY</th>
                                <th>INDUSTRIAL</th>
                                <th>BUSINESS</th>
                                <th>POLITICAL</th>
                            </tr>
                        </thead>


                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.fields
                                    .filter(x => x.id === this.state.student.semester)
                                    .map(
                                        field =>
                                            <tr>
                                                <td>{field.technology}</td>
                                                <td>{field.industrial}</td>
                                                <td>{field.business}</td>
                                                <td>{field.political}</td>
                                            </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
                <br />

                <Link to="/" className="btn btn-secondary">Back</Link>
            </div>
        )
    }
}

export default ViewStudent