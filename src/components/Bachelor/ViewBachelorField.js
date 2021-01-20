import React, { Component } from 'react'
import BachelorService from "../../service/BachelorService"

class ViewBachelorField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            field: {}
        }

        this.editStudent = this.editStudent.bind(this);
    }

    componentDidMount() {
        BachelorService.getStudyFieldById(this.state.id).then(res => {
            this.setState({ field: res.data });
        })
    }

    editStudent(id) {
        this.props.history.push(`/update-study-field/${id}`)
    }

    render() {
        return (
            <div>
                <br></br>
                <h3 className="text-center"> View Bachelor Fields</h3>

                <button
                    onClick={() => this.editStudent(this.state.id)}
                    className="btn btn-primary">Update</button>
            </div>
        )
    }
}

export default ViewBachelorField