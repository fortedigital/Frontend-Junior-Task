import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const EditParticipant = () => {
    const { id } = useParams();

    useEffect(() => {
        //TODO: get intern from REST api http://localhost:3001/participants/:id
        console.log(`I want to get participant with id: ${id}!`)
    }, [id]);

    return (
        <div>
            <NavLink to="/">Back to list </NavLink>
            <form>
                <label>Name</label>
                <input type="text" name="name" />              
                <label>Email</label>
                <input type="text" name="email" />
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EditParticipant;