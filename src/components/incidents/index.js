import React, { useState, useEffect } from 'react';

import { FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

export default function Incidents({ ongId }) {

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (error) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    return (
        <ul>
            {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>Caso:</strong>
                    <p>{incident.title}</p>

                    <strong>Descrição:</strong>
                    <p>{incident.description}</p>

                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                    <button onClick={() => handleDeleteIncident(incident.id)} type="button"> <FiTrash2 size={20} color="#a8a8b3" /></button>
                </li>
            ))
            }
        </ul>
    );

}
