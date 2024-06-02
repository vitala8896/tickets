import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTickets } from './components/TicketList/ticketSlice';
import TicketFilter from './components/TicketFilter/TicketFilter';
import TicketList from './components/TicketList/TicketList';
import Logo from './components/Logo/Logo';
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

