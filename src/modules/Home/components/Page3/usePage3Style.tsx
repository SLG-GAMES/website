import { makeStyles, Theme } from '@material-ui/core';

import popBg from "assets/img/page3/popBg.png";
import logo from 'assets/img/page8/logo1.gif'
import logo1 from 'assets/img/page3/logo1.gif';
import logo2 from 'assets/img/page3/logo2.gif';
import logo3 from 'assets/img/page3/logo3.gif';
import logo4 from 'assets/img/page3/logo4.gif';

export const usePage3Style = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    paddingBottom: '6rem',
    '& .title': {
      textAlign: 'center',
      color: '#0B1338',
      textShadow: '1.304px 0px 0px #B4FB56, 0px 1.304px 0px #51A7CF, 0px -1.304px 0px #AEC541, 2.609px 0px 0px rgba(73, 247, 49, 0.48)',
      fontFamily: "TT Interphases Pro Mono Trl",
      fontSize: '4rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '4.8rem',
      marginBottom: '2.1rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '4.6rem',
        lineHeight: '5.8rem',
        width: '55.7rem',
        flexDirection: 'column',
      },
    },
    '& .subtitle': {
      textAlign: 'center',
      width: '110.2rem',
      color: '#32323A',
      textShadow: '1px 0px 1px #B0FFA4',
      fontFamily: "PARADOS",
      fontSize: '2.2rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      [theme.breakpoints.down('sm')]: {
        width: '55.6rem',
        fontSize: '2.4rem',
      },
    },
    '& .popBox': {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0,
    },
    '& .gif': {
      borderRadius: '2rem',
      width: '60.7rem',
      height: '32.8rem',
      flexShrink: 0,
      marginTop: '2rem',
      background: `url(${logo}) no-repeat center`,
      backgroundSize: '110% 110%',
    },
    [theme.breakpoints.down('sm')]: {
      height: '83%',
      position: 'absolute',
      top: '48.5%',
      transform: 'translateY(-50%)',
      justifyContent: 'flex-start',
      paddingTop: '14.6rem',
      paddingBottom: '0',
    },
  },
  itemBox: {
    marginBottom: '5.2rem',
    marginTop: '4.2rem',
    maxWidth: '110rem',
    rowGap: '4rem',
    columnGap: '9rem',
    [theme.breakpoints.down('sm')]: {
      width: '61rem',
      rowGap: '6rem',
      columnGap: '2rem',
      marginTop: '7.4rem',
    },
  },
  item: {
    position: 'relative',
    height: '10rem',
    '& .icon': {
      borderRadius: '50%',
      zIndex: 2,
      flexShrink: 0,
      width: '6rem',
      height: '6rem',
      marginRight: '4.2rem',
      backgroundColor: 'rgba(133,207,220,1)',
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    '& .name': {
      flexShrink: 0,
      color: '#0B1338',
      textAlign: 'center',
      textShadow: '1.304px 0px 0px rgba(180, 251, 86, 0.74), 0px 1.304px 0px #51A7CF, 0px -1.304px 0px rgba(174, 197, 65, 0.58), 1px 0px 0px rgba(73, 247, 49, 0.48)',
      fontFamily: "TT Interphases Pro Mono Trl",
      fontSize: '3rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '3.8rem',
    },
    '&.itemB .hvrBox': {
      alignSelf: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'max-content',
      '& .popBox': {
        display: 'none',
      },
      '&:nth-child(even) .popBox': {
        transform: 'translateX(-51vw)',
        left: 0,
      },
      '&:nth-child(odd) .popBox': {
        transform: 'translateX(51vw)',
        right: 0,
      },
    },
  },
  hvrBox: {
    alignSelf: 'flex-start',
    width: '35.6rem',
    height: '10rem',
    border: '1.3px solid #008FE5',
    borderRadius: '1.5rem',
    boxShadow: '-2px 2px 0 0 #0B1650, 2px -2px 0 0 #0B1650, 2px 2px 0 0 #0B1650, -2px -2px 0 0 #0B1650',
    transition: '300ms all',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    // '&:hover': {
    //   border: 'none',
    //   height: '22.4rem',
    //   '& .name': {
    //     display: 'none'
    //   },
    //   '& .pop': {
    //     display: 'flex'
    //   }
    // },
    [theme.breakpoints.down('sm')]: {
      width: '29.3998rem',
      height: '11.4rem',
      '&:hover': {
        height: '11.4rem',
        '& .name': {
          display: 'flex !important',
        },
      },
    },
  },
  pop: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    pointerEvents: 'none',
    width: '91rem',
    height: '30rem',
    padding: '2rem 1.7rem',
    background: `url(${popBg}) no-repeat`,
    backgroundSize: '100% 100%',
    marginLeft: '5.1rem',
    zIndex: 5,
    color: '#8DD2DE',
    textShadow: '1px 0px 0px rgba(176, 255, 164, 0.45)',
    fontFamily: "PARADOS",
    fontSize: '1.6rem',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    display: 'none',
    '&.active': {
      display: 'flex',
    },
    '& .logo': {
      borderRadius: '1.385rem',
    },
    '& .logo1': {
      marginRight: '1.9rem',
      flexShrink: 0,
      width: '37.7rem',
      height: '20.4rem',
      background: `url(${logo1}) no-repeat center`,
      backgroundSize: '110% auto',
    },
    '& .logo2': {
      marginRight: '1.9rem',
      flexShrink: 0,
      width: '37.7rem',
      height: '20.4rem',
      background: `url(${logo2}) no-repeat center`,
      backgroundSize: '110% auto',
    },
    '& .logo3': {
      marginRight: '1.9rem',
      flexShrink: 0,
      width: '37.7rem',
      height: '20.4rem',
      background: `url(${logo3}) no-repeat center`,
      backgroundSize: '110% auto',
    },
    '& .logo4': {
      marginRight: '1.9rem',
      flexShrink: 0,
      width: '37.7rem',
      height: '20.4rem',
      background: `url(${logo4}) no-repeat center`,
      backgroundSize: '110% auto',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      top: 'calc(50% + 3rem)',
      pointerEvents: 'all',
      width: '60.8rem',
      height: '72.4rem',
      padding: '5rem 4rem',
      fontSize: '2.6rem',
      borderRadius: '2rem',
      margin: 'auto',
      justifyContent: 'space-between',
      boxShadow: '-2px 2px 0 0 #0B1650, 2px -2px 0 0 #0B1650, 2px 2px 0 0 #0B1650, -2px -2px 0 0 #0B1650',
      '& .logo': {
        width: '52.2rem',
        height: '28.2rem',
        margin: '2.5rem auto 0',
      },
    },
  },
  close: {
    width: '6rem',
    height: '6rem',
    flexShrink: 0,
    transform: 'translate(50%,-50%)',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }
}));
