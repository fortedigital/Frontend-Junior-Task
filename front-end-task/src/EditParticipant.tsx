import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export const EditParticipant: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    //TODO: get participant from REST api http://localhost:3001/participants/:id
    console.log(`I want to get participant with id: ${id}!`);
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
