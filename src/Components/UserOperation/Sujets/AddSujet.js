import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import SujetService from '../../../services/AdminService/SujetService';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddSujet = () => {

    const [titreSujet, setTitreSujet] = useState('')
    
    const history = useHistory();
    const { id } = useParams();
    const username =  sessionStorage.getItem("UserName");
    const saveOrUpdateSujet = (e) => {
        e.preventDefault();
       
        const sujet = { titreSujet}
       
        if (id) {
            SujetService.updateSujet(id, sujet
                ).then((response) => {
                history.push('/ListeSujet')
            }).catch(error => {
                console.log(error)
            })

        } else {
            SujetService.createSujet(username,sujet).then((response) => {

                console.log(response.data)

                history.push('/ListeSujet');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        SujetService.getSujetById(id).then((response) => {
            setTitreSujet(response.data.titreSujet)
           
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center" color='red'>Update Sujet</h2>
        } else {
            return <h2 className="text-center" color='red'>Ajouter Sujet</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                            <div className="form-group mb-2">
                                        <label className="form-label"> Titre de sujet </label>
                                        <input
                                            type="text"
                                            name="sujet"
                                            className="form-control"
                                            value={titreSujet}
                                            onChange={(e) => setTitreSujet(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                
                                
                               
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateSujet(e)} >Envoyer </button>
                                <Link to="/ListeSujet" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddSujet;