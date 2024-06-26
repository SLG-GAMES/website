import { makeStyles, Theme } from '@material-ui/core';

export const useGoBackStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.background.default,
    transition: 'color 0.2s',

    '&:hover': {
      color: theme.palette.background.default,
    },
  },

  icon: {
    padding: 0,
    width: 36,
    height: 36,
    marginRight: theme.spacing(1.5),
    color: theme.palette.background.default,
    transition: 'color 0.2s',

    '$root:hover &': {
      color: theme.palette.background.default,
    },
  },
}));
