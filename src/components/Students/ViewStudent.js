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
                <h3 className="text-center"> View Student Details</h3>
                <hr />
                <br></br>
                <br></br>


                <h4>Personal Information</h4>
                <div>
                    <table className="table table-hover table-striped table-white ">
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>SURNAME</th>
                                <th>FIELD OF STUDY</th>
                                <th>SEMESTER</th>
                            </tr>
                        </thead>

                        <tbody style={{ textAlign: "center" }}>
                            <tr>
                                <td>{this.state.student.id}</td>
                                <td>{this.state.student.name}</td>
                                <td>{this.state.student.surname}</td>
                                <td>{this.state.student.field}</td>
                                <td>{this.state.student.semester}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* UPDATE STUDENT */}
                <button style={{ float: "right", fontWeight: "bold" }}
                    onClick={() => this.editStudent(this.state.id)}
                    className="btn btn-primary">Update</button>


                <div style={{ marginTop: "80px" }}>
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

                <Link to="/" className="btn btn-secondary" style={{ float: "left" }}>Back</Link>
            </div >
        )
    }
}

export default ViewStudent