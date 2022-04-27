import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import ProduitsService from '../../../services/AdminService/ProduitsService';

import './listProduit.css';
import UploadFilesProduit from './UploadFilesProduit';

const ListProduit = () => {

    const [produits, setProduits] = useState([])

    useEffect(() => {

        getAllProduits();
    }, [])

    const getAllProduits = () => {
        ProduitsService.getAllProduits().then((response) => {
            setProduits(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    
    const deleteProduit = (produitId) =>{
        ProduitsService.deleteProduit(produitId).then( res => {
            this.setState({produits: this.state.produits.filter(produit => produit.produitId!== produitId)});
        });
    }

    return (
        <div>
            <produit >

            
             <div className='main__container' >
              <h2 className = "main__title"> Tous Les Produits </h2>
              <UploadFilesProduit/>
              <Link to = "/add-produit" className = "btn btn-primary mb-2" > Ajouter Produit </Link>
              <table>
                <thead>
                    <th className='th1'> Produit Id </th>
                    <th className='th2'> Numéro De Produit</th>
                    <th className='th3'> Nom De Produit </th>
                    <th className='th4'> Categorie </th>
                    <th className='th5'> Titre</th>
                    <th className='th6'> Description Courte</th>
                    <th className='th7'> Description Longue </th>
                    <th className='th8'> Date De L'ajout</th>
                    <th className='th8'> mise a jour</th>
                    <th className='th9'> Actions </th>
                </thead>
                <tbody>
                    {
                        produits.map(
                            produit =>
                            <tr key = {produit.idPrd}> 
                                <td> {produit.idPrd} </td>
                                <td> {produit.numPrd} </td>
                                <td>{produit.nomPrd}</td>
                                <td>{produit.categorie}</td>
                                <td>{produit.titre}</td>
                                <td>{produit.descCourte}</td>
                                <td>{produit.descLong}</td>
                                <td>{produit.createdAt}</td>
                                <td>{produit.updatedAt}</td>
                               
                                <td>
                                    <Link className="btn btn-info" to={`/edit-produit/${produit.idPrd}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteProduit(produit.idPrd)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </produit>
        </div>
   
    )
}

export default ListProduit;