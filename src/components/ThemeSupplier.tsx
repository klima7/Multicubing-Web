import * as React from 'react';
import { FC, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Theme as MaterialTheme } from '@mui/material';
import { useAppSelector } from '../utils/hooks';
import { Theme } from '../types/types';
import { standardTheme, darkTheme } from '../assets/themes/theme';

interface Props {
  children: React.ReactNode;
}

const ThemeSupplier: FC<Props> = ({children}) => {
  const theme = useAppSelector(state => state.general.theme);
  const themeObject = useMemo(() => getTheme(theme), [theme]);

  return (
    <ThemeProvider theme={themeObject}>
      {children}
    </ThemeProvider>
  );
};

function getTheme(theme: Theme): MaterialTheme {
  switch(theme) {
    case Theme.Standard:
      return standardTheme;
    default:
      return darkTheme;
  }
}

export default ThemeSupplier;
