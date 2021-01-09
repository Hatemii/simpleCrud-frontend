import React, { Component } from "react"
import BachelorService from "../../service/BachelorService"
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


class UpdateFields extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            technology: "",
            industrial: "",
            business: "",
            political: ""
        }
    }

    componentDidMount() {
        BachelorService.getStudyFieldById(this.state.id).then(res => {
            let field = res.data;
            this.setState({
                technology: field.technology,
                industrial: field.industrial,
                business: field.business,
                political: field.political
            });
        });
    }

    changeTechnologyField = (e) => {
        this.setState({ technology: e.target.value })
    }

    changeIndustrialField = (e) => {
        this.setState({ industrial: e.target.value })
    }

    changeBusinessField = (e) => {
        this.setState({ business: e.target.value })
    }

    changePoliticalField = (e) => {
        this.setState({ political: e.target.value })
    }


    updateStudents = (e) => {
        e.preventDefault();
        let field = {
            technology: this.state.technology,
            industrial: this.state.industrial,
            business: this.state.business,
            political: this.state.political
        }
        BachelorService.updateStudyField(this.state.id, field).then(res => {
            this.props.history.push("/bachelor");
        })
    }


    cancelButton() {
        this.props.history.push("/bachelor");
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 style={{ marginTop: "20px" }} className="text-center">Update Study Field</h3>
                        <div className="card-body">
                            <form>

                                {/* INPUT TECHNOLOGY */}
                                <div className="form-group">
                                    <label htmlFor="exampleInputTechnology">Technology</label>
                                    <input placeholder="Technology Field" name="technology" className="form-control"
                                        value={this.state.technology} onChange={this.changeTechnologyField} />
                                </div>

                                {/* INPUT INDUSTRIAL */}
                                <div className="form-group">
                                    <label htmlFor="exampleInputIndustrial">Industrial</label>
                                    <input placeholder="Industrial Field" name="industrial" className="form-control"
                                        value={this.state.industrial} onChange={this.changeIndustrialField} />
                                </div>

                                {/* INPUT BUSINESS */}
                                <div className="form-group">
                                    <label htmlFor="exampleInputBuissines">Business</label>
                                    <input placeholder="Business Field" name="business" className="form-control"
                                        value={this.state.business} onChange={this.changeBusinessField} />
                                </div>

                                {/* INPUT POLITICAL */}
                                <div className="form-group">
                                    <label htmlFor="exampleInputPolitical">Political</label>
                                    <input placeholder="Political Field" name="political" className="form-control"
                                        value={this.state.political} onChange={this.changePoliticalField} />
                                </div>


                                <button className="btn btn-success" onClick={this.updateStudents}>Save <FaSave size={15} /> </button>
                                <button className="btn btn-danger" onClick={this.cancelButton.bind(this)} style={{ marginLeft: "10px" }}>Cancel <MdCancel size={15} /> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}


export default UpdateFields