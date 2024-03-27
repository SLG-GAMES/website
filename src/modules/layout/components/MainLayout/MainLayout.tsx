import { ThemeProvider } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import { getTheme } from 'modules/common/utils/getTheme';
import { Themes, CurrentTheme } from 'modules/themes/types';
// import { Header } from '../Header';
import { useMainLayoutStyles } from './MainLayoutStyles';
import { Box } from '@material-ui/core';
// import { Footer } from '../Footer';


export interface ILayoutProps {
  children?: React.ReactNode;
  headerTheme?: Themes;
}
export const MainLayout = ({
  children,
  headerTheme = CurrentTheme,
}: ILayoutProps) => {
  const classes = useMainLayoutStyles();
  const isDarkBg = headerTheme === Themes.dark;

  return (
    <ThemeProvider theme={getTheme(CurrentTheme)}>
      <Box className={
        classNames(
          classes.root,
          isDarkBg && 'dark',
        )}>
        {/* <Header /> */}
        <main className={classNames(classes.content, 'main bgWrite')}>
          {children}
        </main>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
};
