import React, { Component } from "react"
import BachelorService from "../../service/BachelorService"

class CreateBachelorStudyField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // id: this.props.match.params.semester,
            technology: "",
            industrial: "",
            business: "",
            political: ""
        }

    }

    // componentDidMount() {
    //     if (this.state.id === "_addBachelor") {
    //         return
    //     } else {
    //         BachelorService.getStudyFieldById(this.state.id).then(res => {
    //             let field = res.data;
    //             this.setState({
    //                 technology: field.technology,
    //                 industrial: field.industrial,
    //                 business: field.business,
    //                 political: field.political
    //             });
    //         });
    //     }
    // }

    createTechnologyField = (e) => {
        this.setState({ technology: e.target.value })
    }

    createIndustrialField = (e) => {
        this.setState({ industrial: e.target.value })
    }

    createBusinessField = (e) => {
        this.setState({ business: e.target.value })
    }

    createPoliticalField = (e) => {
        this.setState({ political: e.target.value })
    }


    createFields = (e) => {
        e.preventDefault();
        let field = {
            technology: this.state.technology,
            industrial: this.state.industrial,
            business: this.state.business,
            political: this.state.political
        }
        if (this.state.id === '_addBachelor') {
            BachelorService.insertStudyField(field).then(res => {
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
                            <h3 className="text-center">Add New Study Field</h3>
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


                                    <button className="btn btn-success" onClick={this.createStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancelButton.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CreateBachelorStudyField