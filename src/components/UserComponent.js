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
        UserService.getAllStudents().then((response) => {
            this.setState({
                students: response.data
            })
        });
    }


    render() {
        return (
            <div>
                <h1 className="text-center">Students List</h1>
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