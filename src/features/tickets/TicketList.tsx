import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TicketCard from '../../components/TicketCard';
import './TicketList.scss';
import { RootState } from '../../store';

const TicketList: React.FC = () => {
  const tickets = useSelector((state: RootState) => state.tickets.filteredTickets);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="ticket-list">
      {tickets.slice(0, visibleCount).map((ticket, index) => (
        <TicketCard
          key={index}
          price={ticket.price}
          from={ticket.from}
          to={ticket.to}
          duration={ticket.duration}
          stops={ticket.stops}
        />
      ))}
      {visibleCount < tickets.length && (
        <button className="ticket-list__load-more" onClick={handleLoadMore}>
          Завантажити ще 5 квитків
        </button>
      )}
    </div>
  );
};

export default TicketList;
