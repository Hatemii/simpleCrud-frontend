import React from "react";
import UserService from "../service/UserService";


class UserComponent extends React.Component {

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
        this.props.history.push(`/view-student/${id}`);
    }

    addStundent() {
        this.props.history.push("/add-student/_add")
    }


    render() {
        return (
            <div>
                <h1 className="text-center">Students List</h1>

                {/* ADD NEW STUDENT BUTTON*/}
                <button
                    style={{
                        float: "right",
                        marginBottom: "20px"
                    }}
                    onClick={() => this.addStundent()}
                    className="btn btn-success">Add New Student</button>


                <table class="table table-hover table-dark">
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
                                                style={{ marginLeft: "10px" }}
                                                onClick={() => {
                                                    if (window.confirm('Are you sure you wish to delete this item?'))
                                                        this.deleteById(student.id)
                                                }}
                                                className="btn btn-danger">Delete</button>

                                            {/* VIEW STUDENT */}
                                            <button
                                                style={{ marginLeft: "10px" }}
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