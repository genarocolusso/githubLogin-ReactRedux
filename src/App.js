 
import './App.css';
import  EventTicket  from "./components/eventticket"
import RegisterEvent from "./components/registerevent"

import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="mainWrapper">
      <RegisterEvent/>
      <EventTicket/>
    </div>
    
  </Provider>
  );
}

export default App;
