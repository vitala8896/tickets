import React from 'react';
import './TicketCard.scss';

interface TicketProps {
  price: string;
  from: string;
  to: string;
  duration: string;
  stops: string;
}

const TicketCard: React.FC<TicketProps> = ({ price, from, to, duration, stops }) => {
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
