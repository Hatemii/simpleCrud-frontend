import React from "react";
import StudentService from "../../service/StudentService"
import MasterService from "../../service/MasterService"
import { FaTrashAlt } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";

class StudentComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }


    componentDidMount() {
        StudentService.getAllStudents().then(response => {
            this.setState({
                students: response.data
            })
        });
    }

    deleteById = (id) => {
        StudentService.deleteById(id).then(response => {
            this.setState({
                students: this.state.students.filter(student => student.id !== id)
            });
        });
    }

    viewStudent(id) {
        this.props.history.push(`/view-student/${id}`)
    }

    addStudent() {
        this.props.history.push("/add-student/_add")
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Student Lists 2020/2021</h3>
                <hr />
                <br></br>
                <br></br>


                {/* ADD NEW STUDENT BUTTON -> Admin Permision */}
                <button
                    style={{
                        float: "right",
                        marginBottom: "20px",
                        fontWeight: "bold"
                    }}
                    onClick={() => this.addStudent()}
                    className="btn btn-success">Add new <MdCreateNewFolder size={18} /></button>
                <br></br>


                {/* Bachelor Students */}
                <div>
                    <h5>Bachelor Students | Semester 1 - 6 </h5>
                    <table className="table table-hover table-striped table-dark ">
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>STUDENT ID</th>
                                <th>NAME</th>
                                <th>SURNAME</th>
                                <th>FIELD</th>
                                <th>SEMESTER</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>


                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.students
                                    .filter(x => x.semester >= 1 && x.semester <= 6)
                                    .map(
                                        student =>
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.surname}</td>
                                                <td>{student.field}</td>
                                                <td>{student.semester}</td>


                                                <td>
                                                    <button
                                                        style={{ fontWeight: "bold" }}
                                                        onClick={() => this.viewStudent(student.id)}
                                                        className="btn btn-primary">View</button>


                                                    {/* DELETE BY ID*/}
                                                    <button
                                                        style={{
                                                            marginLeft: "10px",
                                                            fontWeight: "bold"
                                                        }}
                                                        onClick={() => {
                                                            if (window.confirm('Are you sure that you want to delete this?'))
                                                                this.deleteById(student.id)
                                                        }}
                                                        className="btn btn-danger"><FaTrashAlt size={16} /></button>
                                                </td>
                                            </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>



                {/* Master Students */}
                <div style={{ marginTop: "100px" }}>
                    <h5>Master Students | Semester 7 - 10 </h5>
                    <table className="table table-hover table-striped table-dark ">
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>STUDENT ID</th>
                                <th>NAME</th>
                                <th>SURNAME</th>
                                <th>FIELD</th>
                                <th>SEMESTER</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>


                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.students
                                    .filter(x => x.semester >= 7 && x.semester <= 10)
                                    .map(
                                        student =>
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.surname}</td>
                                                <td>{student.field}</td>
                                                <td>{student.semester}</td>


                                                <td>
                                                    <button
                                                        style={{ fontWeight: "bold" }}
                                                        onClick={() => this.viewStudent(student.id)}
                                                        className="btn btn-primary">View</button>


                                                    {/* DELETE BY ID*/}
                                                    <button
                                                        style={{
                                                            marginLeft: "10px",
                                                            fontWeight: "bold"
                                                        }}
                                                        onClick={() => {
                                                            if (window.confirm('Are you sure that you want to delete this?'))
                                                                this.deleteById(student.id)
                                                        }}
                                                        className="btn btn-danger"><FaTrashAlt size={16} /></button>
                                                </td>
                                            </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>



            </div >
        )
    }

}

export default StudentComponent;