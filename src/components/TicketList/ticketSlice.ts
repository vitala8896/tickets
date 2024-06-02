import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Ticket {
  price: string;
  from: string;
  to: string;
  duration: string;
  stops: string;
}

interface TicketsState {
  tickets: Ticket[];
  filteredTickets: Ticket[];
  filter: string;
}

const initialState: TicketsState = {
  tickets: [],
  filteredTickets: [],
  filter: 'all'
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<Ticket[]>) {
      state.tickets = action.payload;
      state.filteredTickets = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
      switch (action.payload) {
        case 'none':
          state.filteredTickets = state.tickets.filter(ticket => ticket.stops === 'без пересадок');
          break;
        case 'one':
          state.filteredTickets = state.tickets.filter(ticket => ticket.stops === '1 пересадка');
          break;
        case 'two':
          state.filteredTickets = state.tickets.filter(ticket => ticket.stops === '2 пересадки');
          break;
        default:
          state.filteredTickets = state.tickets;
      }
    }
  }
});

export const { setTickets, setFilter } = ticketSlice.actions;
export default ticketSlice.reducer;
