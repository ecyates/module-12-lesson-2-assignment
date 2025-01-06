import { useSelector } from 'react-redux';
import DeleteExercise from './deleteExercise';

const ViewExercises = () => {
    const exercises = useSelector(state=> state.exercises.exercises);

    return (
        <ul>
            {exercises.map(exercise=>(
                <li className='mb-3' key={exercise.id}> {exercise.type} | {exercise.duration} mins | {exercise.calories} kcals &nbsp;
                <DeleteExercise id={exercise.id}/></li>
            ))}
        </ul>
    )
};

export default ViewExercises;