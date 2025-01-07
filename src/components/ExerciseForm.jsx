import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { updateExercise } from "../features/exercisesSlice";
import { Button, Form, Container, Row, Col, Modal, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const ExerciseForm = () => {
    const [exercise, setExercise] = useState({type:'', duration:'', calories:''});
    const { id } = useParams();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const exercises = useSelector(state=>state.exercises.exercises);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch exercise data when id is available
    useEffect(() => {
        try{
            if(id){
                let exercise = exercises.filter(e=>e.id==id)[0];
                setExercise({type:exercise.type, duration:exercise.duration, calories:exercise.calories});
            }
        }catch(error){
            console.log('Error fetching exercise: ', error);
            setError('Error fetching exercise: ', error);
        }
        
    }, [id]);

    // Handle changes to the form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setExercise(prevExercise => ({
            ...prevExercise,
            [name]:value
        }));
    };

    // Function to handle submit. 
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try{
            // If this is a new session, create ID
            let exerciseId = Date.now();
            // Otherwise use the given ID
            if(id){
                exerciseId = id;
            }
            // Add/update the exercise
            let thisExercise = {id:exerciseId, type:exercise.type, duration:exercise.duration, calories:exercise.calories};
            dispatch(updateExercise(thisExercise));
            // Show Success Modal
            setShowSuccessModal(true);
        }catch(error){
            console.log('Error submitting exercise: ', error);
            setError('Error submitting exercise: ', error);
        }finally{
            setIsSubmitting(false);
        }
    };

    // Function to close the success modal and reset the exercise
    const closeModal = () => {
        setShowSuccessModal(false);
        setExercise({type:'', duration:'', calories:''});
        setError(null);
        navigate('/exercises/');
    };

    return(
        <Container className='mt-5 p-5 bg-light rounded text-center'>
            {isSubmitting && <Alert variant="info">Submitting exercise session...</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Row className='justify-content-md-center'>
                <Col md={6}>
                    <h2>{id?'Edit':'Add New'} Exercise</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Exercise Type</Form.Label>
                            <Form.Control
                                type='text'
                                name='type'
                                placeholder='Enter exercise type'
                                value={exercise.type}
                                onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Duration</Form.Label>
                            <Form.Control
                                type='number'
                                name='duration'
                                min={0}
                                step={1}
                                placeholder='Enter duration (mins)'
                                value={exercise.duration}
                                onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Calories Burned</Form.Label>
                            <Form.Control
                                type='number'
                                name='calories'
                                min={0}
                                step={1}
                                placeholder='Enter calories burned'
                                value={exercise.calories}
                                onChange={handleChange}/>
                        </Form.Group>
                        <Button variant='primary' type='submit'>Add Exercises</Button>
                    </Form>
                </Col>
            </Row>
            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    Your exercise session was successfully {id?'updated':'added'}.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );

};

export default ExerciseForm;