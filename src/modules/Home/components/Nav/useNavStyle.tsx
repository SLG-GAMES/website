import { makeStyles, Theme } from '@material-ui/core';

import btnBg from "assets/img/footer/btnBg.png";

export const useNavStyle = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 19,
    gap: '2rem',
    position: 'absolute',
    transform: 'translateX(-50%)',
    left: '50%',
    '& .dot': {
      cursor: 'pointer'
    },
    '& .nav': {
      padding: '2px',
      cursor: 'pointer',
      width: '9.2rem',
      height: '3.4rem',
      flexShrink: 0,
      color: '#0C1C68',
      '& span': {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #172441',
        borderRadius: '.6rem',
        textShadow: '1px 1px 1.7px rgba(109, 161, 40, 0.48)',
        fontFamily: 'VT323',
        fontSize: '2.2rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        letterSpacing: '-0.88px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2.4rem',
          padding: '0 3rem',
        },
      },
      '&.active': {
        border: 'none',
        color: '#8DD2DE',
        textShadow: '1px 0px 1px #D63CDE, 0px 1px 0px rgba(0, 0, 0, 0.25)',
        background: `url(${btnBg}) no-repeat`,
        backgroundSize: '100% 100%',
      },
      [theme.breakpoints.down('sm')]: {
        width: 'max-content',
        height: '4rem',
      },
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      gap: '4rem',
      width: 'calc(100% - 5.7rem)',
      overflowX: 'scroll',
      paddingLeft: '9.5%',
    },
  },
}));
