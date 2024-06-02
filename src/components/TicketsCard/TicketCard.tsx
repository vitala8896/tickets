import React from 'react';
import './TicketCard.scss';
import ImgLogo from './../../assets/airline.png'

interface Ticket {
  id: number;
  price: number;
  start: string;
  end: string;
  way: string;
  inway: string;
  transfers: number;
  country: string;
}

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-card__price">
        <p>{ticket.price.toLocaleString()} $</p>
        <img src={ImgLogo} alt="logo" />
      </div>
      <div className="ticket-card__info">

        <div className={"ticket-card__info_line"}>
          <div>
            <div className='graytext'>LHR – DXB</div>
            <div>{ticket.start}</div>
          </div>
          <div>
            <div className='graytext'>В ДОРОЗІ</div>
            <div>{ticket.way}</div>
          </div> 
          <div>
            <div className="transfer">{ticket.transfers === 0 ? '':ticket.transfers} 
                      {ticket.transfers === 0 ? 'без пересадок' : ticket.transfers === 1 ? ' пересадка' : ' пересадки'}
            </div>
            <div>{ticket.country}</div>
          </div>         
          
        </div> 

        <div className={"ticket-card__info_line"}>
          <div>
            <div className='graytext'>DXB – LHR</div>
            <div>{ticket.end}</div>
          </div>
          <div>
            <div className='graytext'>В ДОРОЗІ</div>
            <div>{ticket.inway}</div>
          </div>          
          <div>
            <div className="transfer">{ticket.transfers === 0 ? '':ticket.transfers} 
                      {ticket.transfers === 0 ? 'без пересадок' : ticket.transfers === 1 ? 'пересадка' : 'пересадки'}
            </div>
            <div>{ticket.country}</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketCard;
