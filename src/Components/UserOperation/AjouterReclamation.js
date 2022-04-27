import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import ReclamationService from '../../services/AdminService/ReclamationService';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
const AjouterReclamation = () => {

    const [numDec, setNumDec] = useState('')
    const [message, setMessage] = useState('')
    const [objet, setObjet] = useState('')
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateReclamation = (e) => {
        e.preventDefault();

       


        const reclamation = { numDec, message, objet }
        const username=sessionStorage.getItem("UserName");
        if (id) {
            ReclamationService.updateReclamation(id, reclamation).then((response) => {
                console.log(response.data)
                history.push('/reclamations')
            }).catch(error => {
                console.log(error)
            })

        } else {
            ReclamationService.createReclamation(username,reclamation).then((response) => {
                console.log(response.data)
                history.push('/pageConfirmation');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        ReclamationService.getReclamationById(id).then((response) => {
            setNumDec(response.data.numDec)
            setMessage(response.data.message)
            setObjet(response.data.objet)
          

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center" color='red'>Update Reclamation</h2>
        } else {
            return <h2 className="text-center" color='red'>Déclarer Votre Reclamation</h2>
        }
    }
   // const notify = () => {
       // toast("Votre Déclaration envoyer avec success");
    

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
                                    <label className="form-label"> Numéro De Reclamation : </label>
                                    <input
                                        type="number"
                                        name="numDec"
                                        className="form-control"
                                        value={numDec}
                                        onChange={(e) => setNumDec(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Message De Réclamation : </label>
       
                                     <textarea
                                      className='form-control'
                                      value={message} 
                                      onChange={(e) => setMessage(e.target.value)} />
                                </div>

                          
                                <div className="form-group mb-2">
                                    <label className="form-label"> L'objet De Réclamation : </label>
                                    <select value={objet} onChange={(e) => setObjet(e.target.value)} className='form-control'>
                                        <option value="---Sélectionner---" disabled>---Sélectionner---</option>
                                        <option value="Agence">Agence</option>
                                        <option value="Service">Service</option>
                                        <option value="Panne Technique">Panne Technique</option>
                                    </select>  

                                </div>

                                <button className="btn btn-primary" onClick={(e) => saveOrUpdateReclamation(e)}>Envoyer </button>
                                <Link to="/user" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AjouterReclamation;