import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface FilterState {
  all: boolean;
  noTransfers: boolean;
  oneTransfer: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
}

interface TicketsState {
  items: Ticket[];
  filter: FilterState;
  sort: 'cheapest' | 'fastest' | 'optimal';
}

const initialState: TicketsState = {
  items: [],
  filter: {
    all: true,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  sort: 'cheapest',
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<Ticket[]>) {
      state.items = action.payload;
    },
    setFilter(state, action: PayloadAction<Partial<FilterState>>) {
      state.filter = { ...state.filter, ...action.payload };
    },
    setSort(state, action: PayloadAction<'cheapest' | 'fastest' | 'optimal'>) {
      state.sort = action.payload;
    },
  },
});

export const { setTickets, setFilter, setSort } = ticketsSlice.actions;
export default ticketsSlice.reducer;