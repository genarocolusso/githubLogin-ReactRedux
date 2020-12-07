 
import './App.css';
import {EventTicket} from "./components/eventticket"
import {RegisterEvent} from "./components/registerevent"

function App() {
  return (
    <div className="mainWrapper">
      <RegisterEvent/>
      <EventTicket/>
    </div>
  );
}

export default App;
