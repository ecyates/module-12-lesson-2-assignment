# FE Module 12 - Lesson 2 - Redux Toolkit

## 1. Advanced State Management in Fitness Tracker App

**Objective**: The aim of this assignment is to create a fitness tracking application with robust state management solutions to handle user activities efficiently. 

**Problem Statement**: Our fitness tracking application needs a robust state management solution to handle user activities efficiently. Users should be able to add, view, and delete their daily exercises. Each exercise entry includes the type of exercise, duration (in minutes), and calories burned. Implement this feature using Redux Toolkit. 

### Task 1: Create New App

- Create a new react application named `fitness_tracker_app`.
- Install `npm install @reduxjs/toolkit react-redux react-bootstrap bootstrap react-router-dom`.
- Create new components called `Exercises`, `Home`, and a simple `NavBar`.
- In your App component setup the necessary paths for Home page and Exercises page using `react-router-dom`.

**Expected Outcome**: A created store slice that allows users to add exercises to their logs and delete exercises they no longer need. 

### Task 2: Setup Redux Store

- Initialize a Redux store using Redux Toolkit's `configureStore` method.
- Create a slice for exercise logs.
- In the slice, define the `initialState`, and reducers for adding and deleting exercises.
- Export the actions and reducers. 
- Provide the Redux store to your application using the `Provider` component in your `App.jsx` file.

**Expected Outcome**: A created store slice that allows users to add exercises to their logs and delete exercises they no longer need. 

### Task 3: Create An Exercise Component

- Create an `Exercise` component that utilizes the `useSelector` hook to access the state of the exercises and map to display each exercise 
- Add a form to the page that allows users to add exercises. Use the `useDispatch` hook to dispatch the `addExercise` action to your store.
- Add a button to each displayed exercise that allows users to delete the exercise from the store. 

**Expected Outcome**: The app displays information about all exercises and allows users to add & delete exercises. 

### BONUS TASK: Implement an Exercise Update Feature

- Introduce a new action in the exercises slice to update an exercise record.
- Create an `UpdateExercise` component where users can select an exercise and submit updated details.

**Expected Outcome**: Users can update their exercise records. The app reflects changes immediately after submission.
