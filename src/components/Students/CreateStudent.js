import React, { Component } from "react"
import UserService from "../../service/StudentService"
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


class CreateStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: "",
            surname: "",
            field: "",
            semester: ""
        }

    }

    componentDidMount() {
        if (this.state.id === "_add") {
            return
        } else {
            UserService.getStudentById(this.state.id).then(res => {
                let student = res.data;
                this.setState({
                    name: student.name,
                    surname: student.surname,
                    field: student.field,
                    semester: student.semester
                });
            });
        }
    }

    changeNameHolder = (e) => {
        this.setState({ name: e.target.value })
    }

    changeSurnameHandler = (e) => {
        this.setState({ surname: e.target.value })
    }

    changeFieldHandler = (e) => {
        this.setState({ field: e.target.value })
    }

    changeSemesterHandler = (e) => {
        this.setState({ semester: e.target.value })
    }


    createStudent = (e) => {
        e.preventDefault();
        let student = {
            name: this.state.name,
            surname: this.state.surname,
            field: this.state.field,
            semester: this.state.semester
        }
        if (this.state.id === '_add') {
            UserService.createStudent(student).then(res => {
                this.props.history.push("/");
            });
        }
    }

    cancelButton() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="conainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Student</h3>
                            <div className="card-body">
                                <form>
                                    {/* INPUT NAME */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInpuName">Name</label>
                                        <input placeholder="First Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHolder} />
                                    </div>

                                    {/* INPUT SURNAME */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputSurname">Surname</label>
                                        <input placeholder="Surname" name="surname" className="form-control"
                                            value={this.state.surname} onChange={this.changeSurnameHandler} />
                                    </div>

                                    {/* INPUT FIELD */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputField">Field</label>
                                        <input placeholder="Field of study" name="field" className="form-control"
                                            value={this.state.field} onChange={this.changeFieldHandler} />
                                    </div>

                                    {/* INPUT SEMESTER */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputSemester">Semester</label>
                                        <input placeholder="Semester" name="semester" className="form-control"
                                            value={this.state.semester} onChange={this.changeSemesterHandler} />
                                    </div>


                                    <button className="btn btn-success" onClick={this.createStudent}>Save <FaSave size={15} /> </button>
                                    <button className="btn btn-danger" onClick={this.cancelButton.bind(this)} style={{ marginLeft: "10px" }}>Cancel <MdCancel size={15} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CreateStudent