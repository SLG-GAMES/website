import { makeStyles, Theme, fade } from '@material-ui/core';

import btnBg from 'assets/img/page3/btnBg.png';

export const useLaunchAppStyle = makeStyles((theme: Theme) => ({
  root: {
    flexShrink: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '25.7rem',
    height: '6.5511rem',
    background: `url(${btnBg}) no-repeat`,
    backgroundSize: '100% 100%',

    color: '#8DD2DE',
    textAlign: 'center',
    textShadow: '1px 0px 1px #D63CDE, 0px 1px 0px rgba(0, 0, 0, 0.25)',
    fontFamily: 'VT323',
    fontSize: '3.2rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.032rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '& .icon': {
      width: '2.4rem',
      height: '1.8rem',
      marginLeft: '1.7rem',
    },
    '& .left': {
      transition: '1s all',
      left: '-50%',
    },
    '& .right': {
      left: '50%',
      transition: '1s all',
    },
    '&:hover': {
      '& .left': {
        left: '50%',
      },
      '& .right': {
        left: '150%',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '22.8rem',
      height: '6.1rem',
      fontSize: '3rem',
    },
  },
  videoBox: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: '-100%',
    top: 0,
    backgroundColor: fade('#000000', .1),
    transition: 'all 2s',
    zIndex: 999999999,
    display: 'flex',
    opacity: 0,
    '&.show': {
      left: 0,
      opacity: 1,
      backgroundColor: fade('#000000', .5),
    },
  },
  dialogBody: {
    width: '100rem',
    height: '90rem',
    margin: 'auto',
    backgroundColor: fade('#000000', .1),
    '& iframe': {
      display: 'block',
    },
    [theme.breakpoints.down('sm')]:{
      width: '60rem',
      height: '40rem',
    }
  },
}));
