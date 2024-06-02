import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setFilter } from '../TicketList/ticketSlice';
import './TicketFilter.scss';

const TicketFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.tickets.filter);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    dispatch(setFilter({ ...filter, [name]: checked }));
  };

  return (
    <div className="ticket-filter">
      <h2>КІЛЬКІСТЬ ПЕРЕСАДОК</h2>
      <div className="filter-option">      
        <label>
          <input
            type="checkbox"
            name="all"
            checked={filter.all}
            onChange={handleCheckboxChange}
          />
          Всі
        </label>
      </div>
      <div className="filter-option">
        <label>
          <input
            type="checkbox"
            name="noTransfers"
            checked={filter.noTransfers}
            onChange={handleCheckboxChange}
          />
          Без пересадок
        </label>
      </div>
      <div className="filter-option">
        <label>
          <input
            type="checkbox"
            name="oneTransfer"
            checked={filter.oneTransfer}
            onChange={handleCheckboxChange}
          />
          1 пересадка
        </label>
      </div>
      <div className="filter-option">
        <label>
          <input
            type="checkbox"
            name="twoTransfers"
            checked={filter.twoTransfers}
            onChange={handleCheckboxChange}
          />
          2 пересадки
        </label>
      </div>
      <div className="filter-option">
        <label>
          <input
            type="checkbox"
            name="threeTransfers"
            checked={filter.threeTransfers}
            onChange={handleCheckboxChange}
          />
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default TicketFilter;
