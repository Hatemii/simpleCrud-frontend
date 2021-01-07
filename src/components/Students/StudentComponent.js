import React from "react";
import UserService from "../../service/StudentService"
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
        UserService.getAllStudents().then(response => {
            this.setState({
                students: response.data
            })
        });
    }

    deleteById = (id) => {
        UserService.deleteById(id).then(response => {
            this.setState({
                students: this.state.students.filter(student => student.id !== id)
            });
        });
    }

    viewStudent(id) {
        this.props.history.push(`/view-student/${id}`)
    }

    addStundent() {
        this.props.history.push("/add-student/_add")
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Students List</h1>
                <hr />

                {/* ADD NEW STUDENT BUTTON*/}
                <button
                    style={{
                        float: "right",
                        marginBottom: "20px",
                        fontWeight: "bold"
                    }}
                    onClick={() => this.addStundent()}
                    className="btn btn-success">Add new <MdCreateNewFolder size={18} /></button>


                <table className="table table-hover table-striped table-dark ">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>SURNAME</th>
                            <th>FIELD</th>
                            <th>SEMESTER</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>


                    <tbody style={{ textAlign: "center" }}>
                        {
                            this.state.students.map(
                                student =>
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.surname}</td>
                                        <td>{student.field}</td>
                                        <td>{student.semester}</td>


                                        <td>
                                            {/* VIEW STUDENT */}
                                            <button
                                                style={{
                                                    marginLeft: "10px",
                                                    fontWeight: "bold"
                                                }}
                                                onClick={() => this.viewStudent(student.id)}
                                                className="btn btn-info">Details</button>


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
                                                className="btn btn-danger"><FaTrashAlt size={15} /></button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default StudentComponent;