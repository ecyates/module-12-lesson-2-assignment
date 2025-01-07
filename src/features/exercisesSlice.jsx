import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exercises:[]
}

export const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        // Function to add or update an exercise session
        updateExercise: (state, action) => {
            const {id, type, duration, calories} = action.payload;
            let index = state.exercises.findIndex(e=>e.id==id);
            if (index>-1) {
                state.exercises[index].type = type;
                state.exercises[index].duration = duration;
                state.exercises[index].calories = calories;
            }else{
                state.exercises.push(action.payload);
            }
        },
        // Function to delete an exercise based on the id
        deleteExercise: (state, action) => {
            state.exercises = state.exercises.filter(exercise=> exercise.id!==action.payload);
        },
    },
});

export const { deleteExercise, updateExercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;