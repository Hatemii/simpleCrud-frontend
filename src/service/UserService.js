import axios from 'axios';

const Students_Rest_Api = "http://localhost:8080/students";




class UserService {

    getAllStudents() {
        return axios.get(Students_Rest_Api);
    }

    getStudentById(id) {
        return axios.get(Students_Rest_Api + "/" + id);
    }

    deleteById(id) {
        return axios.delete(Students_Rest_Api + `/delete/${id}`);
    }

    createStudent(student) {
        return axios.post(Students_Rest_Api + "/insert", student);
    }

    updateStudent(id, student) {
        return axios.put(Students_Rest_Api + `/update/${id}`, student);
    }
}

export default new UserService();