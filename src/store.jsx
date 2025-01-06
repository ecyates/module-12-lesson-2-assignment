import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exercisesSlice';

const store = configureStore({
    reducer: {
        exercises:exercisesReducer
    }
});

export default store;
