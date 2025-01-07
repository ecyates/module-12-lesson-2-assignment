import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Table } from 'react-bootstrap';
import DeleteExercise from './DeleteExercise';
import EditExercise from './EditExercise';

const ViewExercises = () => {
    const exercises = useSelector(state=> state.exercises.exercises);
    const navigate = useNavigate();

    return (
        <Container className='mt-5 p-5 bg-light rounded text-center'>
            <h1 className='mb-3'>Recent Fitness Sessions</h1>
            {exercises.length===0?
                <p>Currently no fitness sessions to track...</p>:
                <Table striped bordered hover variant='primary' className='text-start align-middle'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Duration (mins)</th>
                        <th>Calories (kcals)</th>
                        <th className='text-center'>Edit</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map(exercise=>(
                        <tr key={exercise.id}> 
                            <td>{new Intl.DateTimeFormat('en-US', { 
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric' 
                                }).format(exercise.id)}</td>  
                            <td>{exercise.type}</td>
                            <td>{exercise.duration}</td>
                            <td>{exercise.calories}</td>
                            {/* Buttons to Update or Delete the exercise */}
                            <td className='text-center'><EditExercise id={exercise.id}/></td>
                            <td className='text-center'><DeleteExercise id={exercise.id}/></td>
                        </tr>
                    ))}
            </tbody>
            </Table>}
            <Button onClick={()=>navigate('/add-exercise/')}>Add New Session</Button>
        </Container>
        
    )
};

export default ViewExercises;