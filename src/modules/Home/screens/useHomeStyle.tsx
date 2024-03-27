import { makeStyles, Theme } from '@material-ui/core';

export const useHomeStyle = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      '& .navBox': {
        top: '11%',
      }
    },
  },
  arrow: {
    width: '9.4rem',
    height: '11.2rem',
    flexShrink: 0,
    bottom: '12%',
    zIndex: 9,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  page1Box: {
    '& .launch': {
      display: 'flex !important',
    },
    '& .btn': {
      display: 'flex !important',
      [theme.breakpoints.down('sm')]: {
        display: 'none !important',
      },
    },
  },
}));
