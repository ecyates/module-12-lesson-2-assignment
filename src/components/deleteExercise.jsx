import { useDispatch } from 'react-redux'
import { deleteExercise } from "../features/exercisesSlice";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Free Trash Icon

const DeleteExercise = ({ id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteExercise(id));
    };

    return(
        <Button variant='danger' onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash}/>
        </Button>
    );
};

export default DeleteExercise;