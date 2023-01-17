import React, { Fragment } from 'react'
import ListeVoyages from '../View/ListeVoyages';
import VoyageListeViewModel from '../viewModel/VoyageListeViewModel';


const VoyageListeModel = () => {

    /**
     * Injection de la logique via notre ViewModel
     */
    const ViewModel = VoyageListeViewModel();

    /**
     * Methode pour ajouter un voyage à la liste des voyages
     * @param {*} voyage 
     */
    const rajouterVoyage = (voyage) => {
        voyage.preventDefault();
        ViewModel.ajouterVoyage(voyage.target.titre.value);
        voyage.target.titre.value = "";
    }

    return (
        <Fragment>
            <h3>Ajouter un nouveau voyage</h3>
            <ListeVoyages
                ListeVoyages={ViewModel.voyages}
                retirerVoyage={ViewModel.supprimerVoyage}
                ajouterVoyage={rajouterVoyage}/>
        </Fragment>
    )
}

export default VoyageListeModel