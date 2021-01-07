import axios from 'axios';

const Bachelor_Rest_Api = "http://localhost:8080/bachelorFields";

class BachelorService {

    getAllStudyFields() {
        return axios.get(Bachelor_Rest_Api);
    }

    getStudyFieldById(id) {
        return axios.get(Bachelor_Rest_Api + "/" + id);
    }

    deletetStudyFieldById(id) {
        return axios.delete(Bachelor_Rest_Api + `/delete/${id}`);
    }

    insertStudyField(bachelor) {
        return axios.post(Bachelor_Rest_Api + "/insert", bachelor);
    }

    updateStudyField(id, bachelor) {
        return axios.put(Bachelor_Rest_Api + `/update/${id}`, bachelor);
    }
}

export default new BachelorService();