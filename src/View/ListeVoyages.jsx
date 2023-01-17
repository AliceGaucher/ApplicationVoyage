import React, { Fragment } from 'react';

const ListeVoyages = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.retirerVoyage(e.target.parentNode.firstChild.textContent);
    };
    return (
        <Fragment>
            <h3> Formulaire de nouveau voyage</h3>
            <form onSubmit={props.ajouterVoyage}>
                <div>
                <h4>Titre de votre voyage</h4>
                    <label htmlFor='titre'></label>
                    <input id="titre"
                        type="text"
                        name="titre"
                        placeholder='Entrer titre au voyage' />
                </div>
                <button type="submit">Ajouter</button>
            </form>

            <h3> Liste des voyages</h3>
            {props.ListeVoyages && props.ListeVoyages.map((voyage, index) => {
                return <li key={index}>
                    <div>
                        <span>{voyage}</span>
                        <span>{voyage.lieu}</span>
                        <button onClick={handleDelete}>Supprimer</button>
                    </div>

                </li>
            })}
        </Fragment>
    )
}

export default ListeVoyages