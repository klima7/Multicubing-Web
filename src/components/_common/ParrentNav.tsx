import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const ParrentNav = () => {
  const parentUrl = useAppSelector(state => state.general.parentUrl);
  const history = useHistory();

  if(parentUrl === null) {
    return null;
  }

  function handleClick() {
    if(parentUrl != null) {
      history.push(parentUrl);
    }
  }

  return (
    <ArrowBackRoundedIcon 
    fontSize="large" 
    onClick={handleClick} 
    style={{cursor: 'pointer'}}
    />
  );
};

export default ParrentNav;
