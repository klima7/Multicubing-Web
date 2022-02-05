import DeleteIcon from '@mui/icons-material/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function IndexPage() {
  return (
    <div>
        <h1>Index Page</h1>
        <DeleteIcon />
        <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default IndexPage;
