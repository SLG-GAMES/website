import { makeStyles, Theme } from '@material-ui/core/styles';

export const useMainLayoutStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '&>div': {
      width: '100%',
      height: '100%',
    }
  },
}));
