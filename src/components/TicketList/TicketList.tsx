import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import TicketCard from '../TicketsCard/TicketCard';
import { setSort } from './ticketSlice';
import './TicketList.scss';

const TicketList: React.FC = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.items);
  const filter = useSelector((state: RootState) => state.tickets.filter);
  const sort = useSelector((state: RootState) => state.tickets.sort);
  const [visibleTickets, setVisibleTickets] = useState(5);

  const handleSortChange = (sortType: 'cheapest' | 'fastest' | 'optimal') => {
    dispatch(setSort(sortType));
  };

  const filteredTickets = tickets.filter(ticket => {
    if (filter.all) return true;
    if (filter.noTransfers && ticket.transfers === 0) return true;
    if (filter.oneTransfer && ticket.transfers === 1) return true;
    if (filter.twoTransfers && ticket.transfers === 2) return true;
    if (filter.threeTransfers && ticket.transfers === 3) return true;
    return false;
  });

  filteredTickets.sort((a, b) => {
    if (sort === 'cheapest') {
      return a.price - b.price;
    } else if (sort === 'fastest') {
      const wayA = parseInt(a.way.split('h')[0]) * 60 + parseInt(a.way.split(' ')[1].replace('m', ''));
      const wayB = parseInt(b.way.split('h')[0]) * 60 + parseInt(b.way.split(' ')[1].replace('m', ''));
      return wayA - wayB;
    } else if (sort === 'optimal') {
      const wayA = parseInt(a.way.split('h')[0]) * 60 + parseInt(a.way.split(' ')[1].replace('m', ''));
      const wayB = parseInt(b.way.split('h')[0]) * 60 + parseInt(b.way.split(' ')[1].replace('m', ''));
      if (wayA !== wayB) {
        return wayA - wayB;
      } else if (a.transfers !== b.transfers) {
        return a.transfers - b.transfers;
      } else {
        return a.price - b.price;
      }
    }
    return 0;
  });

  const showMoreTickets = () => {
    setVisibleTickets(prev => prev + 5); // Показати ще 5 квитків при кожному кліку
  };

  return (
    <div className="ticket-list">
      <div className="ticket-list__tabs">
        <button
          className={`ticket-list__tab ${sort === 'cheapest' ? 'active' : ''}`}
          onClick={() => handleSortChange('cheapest')}
        >
          Найдешевший
        </button>
        <button
          className={`ticket-list__tab ${sort === 'fastest' ? 'active' : ''}`}
          onClick={() => handleSortChange('fastest')}
        >
          Найшвидший
        </button>
        <button
          className={`ticket-list__tab ${sort === 'optimal' ? 'active' : ''}`}
          onClick={() => handleSortChange('optimal')}
        >
          Оптимальний
        </button>
      </div>
      {filteredTickets.slice(0, visibleTickets).map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
      {filteredTickets.length >= visibleTickets && (
        <button className="show-more-button" onClick={showMoreTickets}>
          Показати ще 5 квитків
        </button>
      )}
    </div>
  );
};

export default TicketList;
