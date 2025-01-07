import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEdit } from '@fortawesome/free-solid-svg-icons'; // Free Edit Icon
import { useNavigate } from 'react-router-dom';

const EditExercise = ({ id }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-exercise/${id}`);
    };

    return(
        <Button variant='secondary' onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit}/>
        </Button>
    );
};

export default EditExercise;