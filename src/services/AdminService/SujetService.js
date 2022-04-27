import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
const SUJET_BASE_REST_API_URL = 'http://localhost:8080/api/v1/sujets';

class SujetService{

    getAllSujets(){
        return axios.get(SUJET_BASE_REST_API_URL)
    }

    createSujet(username,sujet){
        return axios.post(SUJET_BASE_REST_API_URL + "/" + username, sujet)
    }

    getSujetById(sujetId){
        return axios.get(SUJET_BASE_REST_API_URL + '/' + sujetId);
    }

    updateSujet(sujetId, sujet){
        return axios.put(SUJET_BASE_REST_API_URL + '/' +sujetId, sujet);
    }

    deleteSujet(sujetId){
        return axios.delete(SUJET_BASE_REST_API_URL + '/' + sujetId);
    }
}

export default new SujetService();