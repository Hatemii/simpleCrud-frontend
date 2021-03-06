import React, { Component } from 'react'
import MasterService from '../../service/MasterService';
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default class CreateMasterField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            technology: "",
            industrial: "",
            business: "",
            political: "",
            semester: ""
        }
    }

    componentDidMount() {
        if (this.state.id === "_add") {
            return
        } else {
            MasterService.getStudyFieldById(this.state.id).then(res => {
                let field = res.data;
                this.setState({
                    technology: field.technology,
                    industrial: field.industrial,
                    business: field.business,
                    political: field.political,
                    semester: field.semester
                });
            });
        }
    }

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

    createSemesterField = (e) => {
        this.setState({ semester: e.target.value })
    }

    createFields = (e) => {
        e.preventDefault();
        let field = {
            technology: this.state.technology,
            industrial: this.state.industrial,
            business: this.state.business,
            political: this.state.political,
            semester: this.state.semester
        }
        if (this.state.id === '_add') {
            MasterService.insertStudyField(field).then(res => {
                this.props.history.push("/master");
            });
        }
    }

    cancelButton() {
        this.props.history.push("/master");
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="conainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{ marginTop: "30px" }}>Add New Study Field</h3>
                            <div className="card-body">
                                <form>

                                    {/* INPUT TECHNOLOGY */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputTechnology">Technology</label>
                                        <input placeholder="Technology Field" name="technology" className="form-control"
                                            value={this.state.technology} onChange={this.createTechnologyField} />
                                    </div>

                                    {/* INPUT INDUSTRIAL */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputIndustrial">Industrial</label>
                                        <input placeholder="Industrial Field" name="industrial" className="form-control"
                                            value={this.state.industrial} onChange={this.createIndustrialField} />
                                    </div>

                                    {/* INPUT BUSINESS */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputBuissines">Business</label>
                                        <input placeholder="Business Field" name="business" className="form-control"
                                            value={this.state.business} onChange={this.createBusinessField} />
                                    </div>

                                    {/* INPUT POLITICAL */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPolitical">Political</label>
                                        <input placeholder="Political Field" name="political" className="form-control"
                                            value={this.state.political} onChange={this.createPoliticalField} />
                                    </div>



                                    {/* INPUT SEMESTER */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputSemester">Semester</label>
                                        <input placeholder="Semester Field" name="semester" className="form-control"
                                            value={this.state.semester} onChange={this.createSemesterField} />
                                    </div>


                                    <button className="btn btn-success" onClick={this.createFields}>Save <FaSave /> </button>
                                    <button className="btn btn-danger" onClick={this.cancelButton.bind(this)} style={{ marginLeft: "10px" }}>Cancel <MdCancel /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
