import { FC } from 'react';
import { useAppSelector } from "../../hooks";
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logo-white.svg';

interface Props {
  [key: string]: any;
};

const Logo: FC<Props> = (props) => {
  const theme = useAppSelector(state => state.general.theme);

  return (
    <>
    { theme === "dark" ?
      (<img src={logoWhite} alt="logo" {...props} />)
      :
      (<img src={logo} alt="logo" {...props} />)
    }
    </>
  );
};

export default Logo;
