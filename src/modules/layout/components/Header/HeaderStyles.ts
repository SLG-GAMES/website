import { makeStyles, Theme } from '@material-ui/core';
// import ButtonBG from 'assets/img/header/button-bg.png';


export const useHeaderStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: '90px',
    position: 'sticky',
    top: 0,
    zIndex: 9999,
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition:'all 1s',
    '&.bg':{
      backgroundColor:'#9B97EF'
    }
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '226px',
    justifyContent: 'flex-end',
  },

  dialog: {},
  link: {
    color: '#222',
    fontFamily: 'OTF-Pixer-Regular-otf',
    fontSize: '26px !important',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    '&:hover': {
      // color: `${theme.palette.grey[50]}`,
    },
    '&.active': {

      // color: `${theme.palette.grey[50]}`,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px !important',
    }
  },
  activeLink: {
    // background: `${theme.palette.grey['A400']}`,
    // color: `${theme.palette.grey[50]}`,
  },
  button: {
    width: '256px',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundSize: '100% 100%',
    // backgroundImage: `url(${ButtonBG1})`,
    // backgroundRepeat: 'no-repeat',
    color: '#010101',
    fontSize: 18,
    fontFamily: 'TTF-Pixer-Regular-ttf',
    fontWeight: 900,
    lineHeight: 20,
    wordWrap: 'break-word',
    '& img':{
      width:'37px',
      height:'37px',
      marginLeft:'11px'
    }
  },
}));
