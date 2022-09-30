import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ParticipantList = () => {

    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchParticipants = async () => {
            const response = await fetch('http://localhost:3001/participants');
            const _participants = await response.json();
            setParticipants(_participants);
        }
        fetchParticipants();
    }, []);

    return (
        <div>
            {participants.map(u => (<div key={u.id}>{u.name} <NavLink to={`/participants/${u.id}`}>Edit</NavLink></div>))}
        </div>
    );
};

export default ParticipantList;