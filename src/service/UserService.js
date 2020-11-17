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
        return axios.get(Students_Rest_Api + '/' + id);
    }

    createStudent(student) {
        return axios.post(Students_Rest_Api, student);
    }
}

export default new UserService();