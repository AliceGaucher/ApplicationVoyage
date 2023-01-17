import React from 'react'
import { useState } from 'react'


/**
 * Composant fonction de type ViewModel
 * Gestion de la liste de voyages
 * @returns 
 */
const VoyageListeViewModel = () => {

    /**
     * Liste de voyage
     */
    const [voyages, setVoyages] = useState([]);

    const ajouterVoyage = (voyage) => {
        setVoyages([...voyages, voyage]);
    };

    /**
     * Méthode pour supprimer un voyage de la liste des voyages
     * @param {*} voyage à supprimer 
     */
    const supprimerVoyage = (voyage) => {
        setVoyages(voyages.filter(v => v !== voyage));
    };

    return { voyages, ajouterVoyage, supprimerVoyage }
}

export default VoyageListeViewModel;