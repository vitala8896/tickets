import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTickets } from './features/tickets/ticketSlice';
import TicketFilter from './features/tickets/TicketFilter';
import TicketList from './features/tickets/TicketList';
import Logo from './components/Logo';
import ticketsData from './tickets.json';
import './styles/main.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTickets(ticketsData));
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app__header">
        <Logo />
      </header>
      <main className="app__main">
        <TicketFilter />
        <TicketList />
      </main>
    </div>
  );
};

export default App;

