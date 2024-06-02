import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './components/TicketList/ticketSlice';

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
