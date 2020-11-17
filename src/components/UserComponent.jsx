import React from "react";
import UserService from "../service/UserService";


class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        }

        this.deleteById = this.deleteById.bind(this);
        this.addStundent = this.addStundent.bind(this);
        this.editStudent = this.editStudent.bind(this);
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

    editStudent(id) {
        this.props.history.push(`/add-student/${id}`)
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Students List</h1>

                {/* ADD NEW STUDENT BUTTON*/}
                <button
                    style={{
                        float: "right",
                        marginBottom: "20px",
                        fontWeight: "bold"
                    }}
                    onClick={() => this.addStundent()}
                    className="btn btn-success">Add New Student</button>


                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Course</th>

                        </tr>
                    </thead>


                    <tbody>
                        {
                            this.state.students.map(
                                student =>
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.course}</td>

                                        <td>
                                            {/* DELETE BY ID*/}
                                            <button
                                                style={{
                                                    marginLeft: "10px",
                                                    fontWeight: "bold"
                                                }}
                                                onClick={() => {
                                                    if (window.confirm('Are you sure you wish to delete this item?'))
                                                        this.deleteById(student.id)
                                                }}
                                                className="btn btn-danger">Delete</button>


                                            {/* UPDATE STUDENT */}
                                            <button
                                                style={{
                                                    marginLeft: "10px",
                                                    fontWeight: "bold"
                                                }}
                                                onClick={() => this.editStudent(student.id)}
                                                className="btn btn-info">Update</button>


                                            {/* VIEW STUDENT */}
                                            <button
                                                style={{
                                                    marginLeft: "10px",
                                                    fontWeight: "bold"
                                                }}
                                                onClick={() => this.viewStudent(student.id)}
                                                className="btn btn-info">View</button>
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

export default UserComponent;