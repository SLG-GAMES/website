import { makeStyles, Theme } from '@material-ui/core';

import arrow from 'assets/img/page2/arrow.png';
import iconBg from 'assets/img/page2/iconBg.png';
import retrocraftLogo from 'assets/img/page2/retrocraft-logo.png';
export const usePage2Style = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    paddingBottom: '3rem',
    '& .title': {
      marginBottom: '5rem',
      width: '55.2rem',
      color: '#8BDAE7',
      textShadow: '0px -1px 0.9px rgba(135, 34, 40, 0.89), 0px 3px 0.2px #090913',
      fontFamily: 'TT Interphases Pro Mono Trl',
      fontSize: '4rem',
      fontStyle: 'normal',
      fontWeight: 700,
      textAlign: 'center',
      textTransform: 'uppercase',
      lineHeight: '4.8rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '4.6rem',
        lineHeight: '5.8rem',
        marginBottom: '6.8rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3rem',
      paddingBottom: '0rem',
    },
  },
  line: {
    pointerEvents: 'none',
    marginTop: '8.3rem',
    marginBottom: '3.5rem',
    width: '77.24%',
    height: '.2rem',
    opacity: .3,
    background: 'linear-gradient(270deg, rgba(148, 223, 235, 0.00) 0%, rgba(148, 222, 235, 0.70) 49%, rgba(148, 222, 235, 0.00) 100%)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '15.1rem',
      marginBottom: '8rem',
      width: '80%',
    },
  },
  iconBox: {
    // pointerEvents: 'none',
    gap: '1.6rem',
    height: '7.8rem',

    '& .icon': {
      width: '7.8rem',
      height: '7.8rem',
      position: 'relative',
      cursor: 'pointer',

      '& i': {
        borderRadius: '50%',
        width: '5rem',
        height: '5rem',
        display: 'block',
        backgroundColor: 'rgba(0,0,0,.67)',
        zIndex: '2',
      },
      '& img': {
        width: '5rem',
        height: '5rem',
      },
      '&:hover,&.active': {
        background: `url(${iconBg}) no-repeat`,
        backgroundSize: '100% 100%',
        '& img': {
          width: '6.6rem',
          height: '6.6rem',
        },
        '& i': {
          opacity: '0',
        },
      },
    },
    [theme.breakpoints.down('sm')]: {
      gap: '2rem',
      '& .icon': {
        width: '4.8rem',
        height: '4.8rem',
        '& i': {
          width: '3rem',
          height: '3rem',
        },
        '& img': {
          width: '3rem',
          height: '3rem',
        },
        '&:hover,&.active': {
          '& img': {
            width: '3.6rem',
            height: '3.6rem',
          },
        },
      },
    },
  },
  arrowBox: {
    // top: '42%',
    // width: '144.6rem',
    // maxWidth: '99%',
    // zIndex: 2,
    // pointerEvents: 'none',
    '& .prev': {
      pointerEvents: 'auto',
      cursor: 'pointer',
      width: '4.4rem',
      height: '8rem',
      background: `url(${arrow}) no-repeat`,
      backgroundSize: '100% 100%',
      transform: 'rotate(180deg)',
    },
    '& .next': {
      pointerEvents: 'auto',
      cursor: 'pointer',
      width: '4.4rem',
      height: '8rem',
      background: `url(${arrow}) no-repeat`,
      backgroundSize: '100% 100%',
    },
  },
  pointer: {},
  retrocraftLogo: {
    position: 'absolute',
    width: '25.1rem',
    height: '25.1rem',
    background: `url(${retrocraftLogo}) no-repeat`,
    backgroundSize: '100% 100%',
    top:0,
    left: 0,
    right: 0,
    bottom: 0,
    margin:'auto'
  },
}));
