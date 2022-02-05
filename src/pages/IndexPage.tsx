import DeleteIcon from '@mui/icons-material/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Coffee } from 'mdi-material-ui'
import Button from '@mui/material/Button';

function IndexPage() {
  return (
    <div>
        <h1>Index Page</h1>
        <Button variant="contained">Hello Material UI!</Button>
        <DeleteIcon />
        <FontAwesomeIcon icon={faCoffee} />
        <Coffee />
    </div>
  );
}

export default IndexPage;
