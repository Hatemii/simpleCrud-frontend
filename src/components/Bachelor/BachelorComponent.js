import React from "react";
import BachelorService from "../../service/BachelorService"
import { FaTrashAlt } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";

class StudentComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bachelorFields: []
        }
    }


    componentDidMount() {
        BachelorService.getAllStudyFields().then(response => {
            this.setState({
                bachelorFields: response.data
            })
        });
    }

    deletetStudyFieldById = (id) => {
        BachelorService.deletetStudyFieldById(id).then(response => {
            this.setState({
                bachelorFields: this.state.bachelorFields.filter(field => field.id !== id)
            });
        });
    }

    getStudyFieldById(id) {
        this.props.history.push(`/view-bachelorField/${id}`)
    }

    insertStudyField() {
        this.props.history.push("/add-bachelorField/_add")
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Bachelor Study Fields 2020/2021</h1>
                <hr />

                {/* ADD NEW STUDY FIELD BUTTON*/}
                <button
                    style={{
                        float: "right",
                        marginBottom: "20px",
                        fontWeight: "bold"
                    }}
                    onClick={() => this.insertStudyField()}
                    className="btn btn-success">Add new <MdCreateNewFolder size={18} /></button>


                <table className="table table-hover table-striped table-dark ">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>SEMESTER</th>
                            <th>TECHNOLOGY</th>
                            <th>INDUSTRIAL</th>
                            <th>BUSINESS</th>
                            <th>POLITICAL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>


                    <tbody style={{ textAlign: "center" }}>
                        {
                            this.state.bachelorFields.map(
                                item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.technology}</td>
                                        <td>{item.industrial}</td>
                                        <td>{item.business}</td>
                                        <td>{item.political}</td>


                                        <td>
                                            {/* VIEW FIELD */}
                                            <button
                                                style={{
                                                    marginLeft: "10px",
                                                    fontWeight: "bold"
                                                }}
                                                onClick={() => this.getStudyFieldById(item.id)}
                                                className="btn btn-info">Details</button>


                                            {/* DELETE BY ID*/}
                                            <button
                                                style={{
                                                    marginLeft: "10px",
                                                    fontWeight: "bold"
                                                }}
                                                onClick={() => {
                                                    if (window.confirm('Are you sure that you want to delete this?'))
                                                        this.deletetStudyFieldById(item.id)
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