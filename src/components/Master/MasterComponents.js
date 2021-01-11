import React, { Component } from 'react'
import MasterService from '../../service/MasterService'
import { FaTrashAlt } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

export default class MasterComponents extends Component {
    constructor() {
        super()
        this.state = {
            masterFields: []
        }
    }

    componentDidMount() {
        MasterService.getAllStudyFields().then(res => {
            this.setState({
                masterFields: res.data
            })
        })
    }

    insertMasterField() {
        this.props.history.push("master/add-masterField/_add")
    }


    deleteFieldById = (id) => {
        MasterService.deletetStudyFieldById(id).then(res => {
            this.setState({
                masterFields: this.state.masterFields.filter(field => field.id !== id)
            })
        })
    }

    editStudyField(id) {
        this.props.history.push(`master/update-master-field/${id}`)
    }

    render() {
        return (
            <div>
                <h3>Master Study Fields 2020/2021</h3>
                <hr />

                {/* ADD NEW STUDY FIELD BUTTON*/}
                <button
                    style={{
                        float: "right",
                        marginBottom: "20px",
                        fontWeight: "bold"
                    }}
                    onClick={() => this.insertMasterField()}
                    className="btn btn-success">Add new <MdCreateNewFolder size={18} /></button>


                <table className="table table-hover table-striped table-dark ">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>TECHNOLOGY</th>
                            <th>INDUSTRIAL</th>
                            <th>BUSINESS</th>
                            <th>POLITICAL</th>
                            <th>SEMESTER</th>
                            <th>ACTION</th>

                        </tr>
                    </thead>


                    <tbody style={{ textAlign: "center" }}>
                        {
                            this.state.masterFields.map(
                                field =>
                                    <tr key={field.id}>
                                        <td>{field.technology}</td>
                                        <td>{field.industrial}</td>
                                        <td>{field.business}</td>
                                        <td>{field.political}</td>
                                        <td>{field.semester}</td>



                                        <td>

                                            {/* UPDATE FIELD */}
                                            <button
                                                onClick={() => this.editStudyField(field.id)}
                                                className="btn btn-primary"><RiEdit2Fill size={16} /></button>


                                            {/* DELETE BY ID*/}
                                            <button
                                                style={{ marginLeft: "10px" }}
                                                onClick={() => {
                                                    if (window.confirm('Are you sure that you want to delete this?'))
                                                        this.deleteFieldById(field.id)
                                                }}
                                                className="btn btn-danger"><FaTrashAlt size={16} /></button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div >
        )
    }
}
