import React from 'react';
import LightCloseImg from 'assets/img/header/light-close.png';
import DarkCloseImg from 'assets/img/header/darkClose.png';
import { Box } from '@material-ui/core';
import { styles } from './useDraweCloseStyle';
import { withStyles } from '@material-ui/core';
import { CurrentTheme, Themes } from 'modules/themes/types';

interface DraweCloseInterface {
  classes: any;
  toggleDrawer: (e: any) => void
}

const DraweClose = (
  {
    classes = {},
    toggleDrawer,
  }: DraweCloseInterface) => {

  return (
    <Box className={classes.headerClose}>
      <img src={CurrentTheme === Themes.dark ? DarkCloseImg : LightCloseImg} onClick={toggleDrawer} alt=''
           className={classes.closeImg} />
    </Box>
  );
};
export const DraweCloseComp = withStyles(styles)(DraweClose);
