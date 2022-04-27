
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home';
import HomeAdmin from './Components/pages/HomeAdmin';
import Login from './Components/PageAccueil/Login';
import SignUp from './Components/PageAccueil/SignUp';
import RezetPassword1 from './Components/PageAccueil/RezetPassword1'
import RezetPassword2 from './Components/PageAccueil/RezetPassword2'
import ActivePage from './Components/PageAccueil/ActivePage'
import Profile from './Components/PageAccueil/Profile'
import UserPage from './Components/PageAccueil/UserPage';
import ProjectManagerPage from './Components/PageAccueil/ProjectManagerPage';
import ListProduitAdmin from './Components/PageAdmin/Produit/ListProduitAdmin';
import AddProduitAdmin from './Components/PageAdmin/Produit/AddProduitAdmin';
import AddContratAdmin from './Components/PageAdmin/Contrat/AddContratAdmin';
import ListContratAdmin from './Components/PageAdmin/Contrat/ListContratAdmin';
import ListUserAdmin from './Components/PageAdmin/User/ListUserAdmin';
import AddUserAdmin from './Components/PageAdmin/User/AddUserAdmin';
import ListeSinistreAdmin from './Components/PageAdmin/Sinistre/ListeSinistreAdmin';
import AddSinistreAdmin from './Components/PageAdmin/Sinistre/AddSinistreAdmin';
import ChatRoom from './Components/PageChat/ChatRoom';
import AddReclamationAdmin from './Components/PageAdmin/Reclamation/AddReclamationAdmin';
import ListReclamationAdmin from './Components/PageAdmin/Reclamation/ListReclamationAdmin';
import listeSujet from './Components/UserOperation/Sujets/ListeSujet';
import AddSujet from './Components/UserOperation/Sujets/AddSujet';
import LesAgence from './Components/UserOperation/LesAgence';
import AjouterReclamation from './Components/UserOperation/AjouterReclamation';
import AjouterSinistre from './Components/UserOperation/AjouterSinistre';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/home' exact={true} component={Home} />
          <Route path="/Admin" component={HomeAdmin} />      
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path ="/rezetPasswordSendEamil" exact={true} component = {RezetPassword1}></Route>
          <Route path ="/rezetPasswordSendCode" exact={true} component = {RezetPassword2}></Route>
          <Route path ="/active" exact={true} component = {ActivePage}></Route>
          <Route path='/profile' exact={true} component={Profile}/>
          <Route path='/user' exact={true} component={UserPage}/>
          <Route path='/pm' exact={true} component={ProjectManagerPage}/>

          <Route path='/chat' exact={true} component={ChatRoom}/>

          ////////////////////////////////////////////////////////
          <Route path='/Listusers' exact={true} component={ListUserAdmin}/>
          <Route path='/add-user' exact={true} component={AddUserAdmin}/>
          <Route path="/edit-user/:id" component={AddUserAdmin}/>
          ////////////////////////////////////////////////////////////
          <Route path="/contrats" component={ListContratAdmin} />
          <Route path="/add-contrat" component={AddContratAdmin}/>
          <Route path="/edit-contrat/:id" component={AddContratAdmin}/>
          ////////////////////////////////////////////////////////////////
          <Route path="/produits" component={ListProduitAdmin}/>
          <Route path="/add-produit" component={AddProduitAdmin}/>
          <Route path="/edit-produit/:id" component={AddProduitAdmin} />
          //////////////////////////////////////////////////////////////
          <Route path="/sinistres" component={ListeSinistreAdmin}/>
          <Route path="/add-sinistre" component={AddSinistreAdmin}/>
          <Route path="/edit-sinistre/:id" component={AddSinistreAdmin}/>
          <Route path="/add-sinistre-user" component={AjouterSinistre}/>
          //////////////////////////////////////////////////////////////
          <Route path="/reclamations" component={ListReclamationAdmin}/>
          <Route path="/add-reclamation" component={AddReclamationAdmin}/>
          <Route path="/add-reclamation-user" component={AjouterReclamation}/>
          <Route path="/edit-reclamation/:id" component={AddReclamationAdmin}/>
          //////////////////////////////////////////////////////////////////
          <Route path="/ListeSujet" component={listeSujet}/>
          <Route path="/add-sujet" component={AddSujet}/>
          <Route path="/edit-sujet/:id" component={AddSujet} />
          <Route path="/LesAgence" component={LesAgence} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
