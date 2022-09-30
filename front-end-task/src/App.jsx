import "./App.css";
import EditParticipant from "./editParticipant/EditParticipant";
import ParticipantList from "./participantList/ParticipantList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ParticipantList />} />
        <Route path="/participants/:id" exact element={<EditParticipant />} />
      </Routes>
    </div>
  );
}

export default App;
