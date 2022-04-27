import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import SinistreService from "../../../services/AdminService/SinistreService"
import './listSinistre.css'


const AddSinistre = () => {

    const [numSinistre, setNumSinistre] = useState('')
    const [dateSurvenance, setDateSurvenance] = useState('')
    const [etat, setEtat] = useState('')
    const [lieu, setLieu] = useState('')
    const [dateDeclaration, setDateDeclaration] = useState('')
    const [type, setType] = useState('')
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateSinistre = (e) => {
        e.preventDefault();

        const sinistre = { numSinistre, dateSurvenance, etat, lieu, dateDeclaration, type }
        const TypeContrat=sessionStorage.getItem("TypeContrat")
        if (id) {
            SinistreService.updateSinistre(id, sinistre).then((response) => {
                history.push('/sinistres')
            }).catch(error => {
                console.log(error)
            })

        } else {
            SinistreService.createSinistre(TypeContrat,sinistre).then((response) => {

                console.log(response.data)

                history.push('/sinistres');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        SinistreService.getSinistreById(id).then((response) => {
            setNumSinistre(response.data.numSinistre)
            setDateSurvenance(response.data.dateSurvenance)
            setEtat(response.data.etat)
            setLieu(response.data.lieu)
            setDateDeclaration(response.data.dateDeclaration)
            setType(response.data.type)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Sinistre</h2>
        } else {
            return <h2 className="text-center">Ajouter Sinistre</h2>
        }
    }

    return (
        
           
            <div className="wrapper">
                <div className="title">
                  
                        {
                            title()
                        }
                        <div className="form">
                           
                                <div className="inputfield">
                                    <label> Numéro De Sinistre</label>
                                    <input
                                        type="number"
                                        name="num_sinistre"
                                        className="input"
                                        value={numSinistre}
                                        onChange={(e) => setNumSinistre(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                    <label> Date De Survenance</label>
                                    <input
                                        type="date"
                                        name="date_survenance"
                                        className="input"
                                        value={dateSurvenance}
                                        onChange={(e) => setDateSurvenance(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                        <label> Etat de Sinistre </label>
                                        <input
                                            type="text"

                                            name="etat"
                                            className="input"
                                            value={etat}
                                            onChange={(e) => setEtat(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="inputfield">
                                        <label> Lieu de Survenance </label>
                                        <input
                                            type="text"

                                            name="lieu"
                                            className="input"
                                            value={lieu}
                                            onChange={(e) => setLieu(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                <div className="inputfield">
                                    <label> Date De Déclaration</label>
                                    <input
                                        type="date"

                                        name="date_declaration"
                                        className="input"
                                        value={dateDeclaration}
                                        onChange={(e) => setDateDeclaration(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="inputfield">
                                    <label> Type De Contrat </label>
                                    <div className='custom-selec'>
                                    <select value={type} onChange={(e) => setType(e.target.value)}>
                                        <option value="Maison" className="form-control col-4">Maison</option>
                                        <option value="Voiture">Voiture</option>
                                        <option value="Ecole">Ecole</option>
                                        <option value="Voyage">Voyage</option>
                                        <option value="Prevoyance">Prevoyance</option>
                                        <option value="Accident">Individuel Accident</option>
                                        <option value="Santé">Santé</option>
                                    </select>
                                    </div>

                                    

                                </div>
                                <div className='inputfield'>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateSinistre(e)} >Envoyer </button>
                                <Link to="/sinistres" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                            </div>

                        </div>
                    </div>
                </div>

           

        
    )
}

export default AddSinistre;