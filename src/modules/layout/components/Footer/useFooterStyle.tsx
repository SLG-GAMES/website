import { makeStyles, Theme } from '@material-ui/core';

import line from "assets/img/footer/line.png";
import btnBg from "assets/img/footer/btnBg.png";
import launchBg from "assets/img/footer/launchBg.png";

export const useFooterStyle = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 2,
    top: '79%',
    width: '100%',
    maxWidth: '192rem',
    padding: '0 20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
    },
  },
  boxL: {
    gap: '4.4rem',
    '& .logo': {
      width: '10.1rem',
      height: '6.1rem',
      flexShrink: 0,
    },
    '& .launch': {
      color: '#0B1338',
      fontSize: '2rem',
      fontFamily: 'TT Interphases Pro Mono Trl',
      fontWeight: 700,
      wordWrap: 'break-word',
      textShadow: '1.304px 0px 0px rgba(180, 251, 86, 0.74)',
      background: `url(${line}) no-repeat bottom`,
      backgroundSize: '100% auto',
    },
  },
  boxC: {
    gap: '4rem',
    '& a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '10rem',
      height: '2.9rem',
      flexShrink: 0,
      color: '#0C1C68',
      textShadow: '1px 0px 1px #A4EFFF, 1px 1px 1.7px rgba(109, 161, 40, 0.48)',
      fontFamily: 'Poppins',
      fontSize: '1.6rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      border: '1px solid rgba(17, 40, 116, .5)',
      boxShadow: '0px 0px 0.8px 0px rgba(0, 0, 0, 0.25)',
      '&.active': {
        color: '#8DD2DE',
        textShadow: '1px 0px 0px rgba(222, 60, 128, 0.47)',
        background: `url(${btnBg}) no-repeat`,
        backgroundSize: '100% 100%',
      }
    }
  },
  boxR: {
    gap: '5rem',
    '& a': {
      width: '5.4rem',
      height: '5.4rem',
      flexShrink: 0,
    },
    '& .launch': {
      width: '7.6rem',
      height: '7.6rem',
      flexShrink: 0,
      color: '#8DD2DE',
      textAlign: 'center',
      textShadow: '1px 0px 1px #D63CDE, 0px 1px 0px rgba(0, 0, 0, 0.25)',
      fontFamily: 'VT323',
      fontSize: '2.2rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '2.5rem',
      letterSpacing: '-0.022rem',
      background: `url(${launchBg}) no-repeat`,
      backgroundSize: '100% 100%',
    }
  }
}));
