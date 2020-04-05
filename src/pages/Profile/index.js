import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Incidents from '../../components/incidents';

import './styles.css';

export default function Profile() {

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    function handleLogout(){
        localStorage.removeItem('ongName');
        localStorage.removeItem('ongId');
        history.push('/');

    }


    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <Incidents ongId={ongId} />
        </div>
    );
}
