import React, { Component } from 'react'
import StudentService from "../../service/StudentService"
import BachelorService from "../../service/BachelorService"
import MasterService from "../../service/MasterService"
import { Link } from "react-router-dom"

class ViewStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {},
            bachelorFields: [],
            masterFields: [],
            allFields: []
        }
    }

    componentDidMount() {
        StudentService.getStudentById(this.state.id).then(res => {
            this.setState({ student: res.data });
        });

        BachelorService.getAllStudyFields().then(res => {
            this.setState({ bachelorFields: res.data });
        });

        MasterService.getAllStudyFields().then(res => {
            this.setState({ masterFields: res.data })
        });
    }


    editStudent(id) {
        this.props.history.push(`/update-student/${id}`)
    }

    render() {

        var arr1 = this.state.bachelorFields
        var arr2 = this.state.masterFields
        const allFieldsTogether = arr1.concat(arr2)

        return (
            <div>
                <h3 className="text-center"> {this.state.student.name} {this.state.student.surname} - Profile</h3>
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



                {/* on View Student get student semester study fields */}
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
                            {allFieldsTogether
                                .filter(student => student.semester === this.state.student.semester)
                                .map(
                                    field =>
                                        <tr key={field.id}>
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

                <Link to="/students" className="btn btn-secondary" style={{ float: "left" }}>Back</Link>
            </div >
        )
    }
}

export default ViewStudent
