import React from 'react';
import './TicketCard.scss';
import { TicketsProps } from './TicketsType';
 
const TicketCard: React.FC<TicketsProps> = ({ price, from, to, duration, stops }) => {
  return (
    <div className="ticket-card">
      <p className="ticket-card__price">Price: {price}</p>
      <p>From: {from}</p>
      <p>To: {to}</p>
      <p>Duration: {duration}</p>
      <p>Stops: {stops}</p>
    </div>
  );
};

export default TicketCard;
