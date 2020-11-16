import axios from 'axios';

const Students_Rest_Api = "http://localhost:8080/students";

class UserService {

    getAllStudents() {
        return axios.get(Students_Rest_Api);
    }

    deleteById(id) {
        return axios.get(Students_Rest_Api + '/' + id);
    }
}

export default new UserService();