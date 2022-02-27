import * as React from 'react';
import { FC, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from '../utils/hooks';
import { getTheme } from '../assets/themes/theme';

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

export default ThemeSupplier;
