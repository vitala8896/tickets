import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../TicketList/ticketSlice';
import './TicketFilter.scss';

const TicketFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="ticket-filter">
      <label htmlFor="filter">Filter by stops: </label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">Всі</option>
        <option value="none">Без пересадок</option>
        <option value="one">1 пересадка</option>
        <option value="two">2 пересадки</option>
      </select>
    </div>
  );
};

export default TicketFilter;
