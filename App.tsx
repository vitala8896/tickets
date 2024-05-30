import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTickets } from './src/features/tickets/ticketSlice';
import TicketFilter from './src/features/tickets/TicketFilter';
import TicketList from './src/features/tickets/TicketList';
import Logo from './src/components/Logo';
import ticketsData from './src/tickets.json';
import './src/styles/main.scss';

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

