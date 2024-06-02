import React from 'react';
import './TicketCard.scss';
import ImgLogo from './../../assets/airline.png'

interface Ticket {
  id: number;
  price: number;
  origin: string;
  destination: string;
  duration: string;
  transfers: number;
}

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-card__price">
        <p>{ticket.price} $</p>
        <img src={ImgLogo} alt="logo" />
      </div>
      <div className="ticket-card__info">
        <div className='ticket-card__info_line'>
          <div>{ticket.origin}</div>
          <div>{ticket.duration}</div>
          <div className="transfer">{ticket.transfers === 0 ? '':ticket.transfers} 
          {ticket.transfers === 0 ? 'без пересадок' : ticket.transfers === 1 ? 'пересадка' : 'пересадки'}</div>
        </div>
        <div className='ticket-card__info_line'>
          <div>{ticket.origin}</div>
          <div>{ticket.duration}</div>
          <div className="transfer">{ticket.transfers === 0 ? '':ticket.transfers} 
          {ticket.transfers === 0 ? 'без пересадок' : ticket.transfers === 1 ? 'пересадка' : 'пересадки'}</div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
