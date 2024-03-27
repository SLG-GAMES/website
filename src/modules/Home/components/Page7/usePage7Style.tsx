import { makeStyles, Theme } from '@material-ui/core';

import logo from 'assets/img/page6/logo1.gif'
import logo1 from 'assets/img/page7/logo1.gif';
import logo2 from 'assets/img/page7/logo2.gif';
import logo3 from 'assets/img/page7/logo3.gif';

export const usePage7Style = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    paddingBottom: '6rem',
    [theme.breakpoints.down('sm')]: {
      height: '83%',
      position: 'absolute',
      top: '48.5%',
      transform: 'translateY(-50%)',
      justifyContent: 'flex-start',
      paddingTop: '14.6rem',
      paddingBottom: '0',
    },
    '& .title': {
      color: '#0B1338',
      textAlign: 'center',
      textShadow: '1.304px 0px 0px #B4FB56, 0px 1.304px 0px #51A7CF, 0px -1.304px 0px #AEC541, 2.609px 0px 0px rgba(73, 247, 49, 0.48)',
      fontFamily: "TT Interphases Pro Mono Trl",
      fontSize: '4rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '4.8rem',
      marginBottom: '2.1rem',
      [theme.breakpoints.down('sm')]: {
        width: '63.1rem',
        fontSize: '4.6rem',
        lineHeight: '5.8rem',
        flexDirection: 'column',
      },
    },
    '& .subtitle': {
      marginBottom: '6.5rem',
      textAlign: 'center',
      width: '114rem',
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
        marginBottom: '4rem',
      },
    },
    '& .gif': {
      borderRadius: '2rem',
      width: '60.7rem',
      height: '32.8rem',
      flexShrink: 0,
      marginBottom: '5rem',
      background: `url(${logo}) no-repeat center`,
      backgroundSize: '110% 110%',
    }
  },
  box: {
    marginBottom: '3.7rem',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    },
  },
  logo: {
    borderRadius: '2rem',
    width: '42rem',
    height: '26rem',
    marginLeft: '3rem',
    '&.logo1': {
      background: `url(${logo1}) no-repeat center`,
      backgroundSize: '110% 110%',
    },
    '&.logo2': {
      background: `url(${logo2}) no-repeat center`,
      backgroundSize: '110% 110%',
    },
    '&.logo3': {
      background: `url(${logo3}) no-repeat center`,
      backgroundSize: '110% 110%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '35.4652rem',
      marginLeft: '0',
      marginTop: '3.6rem',
      display: 'none !important',
      '&.active': {
        display: 'block !important',
        marginTop: '0.5rem',
        marginBottom: '2.8rem',
      }
    },
  },
  itemBox: {
    width: '107.3rem',
    '& .line': {
      display: 'block',
      width: '100%',
      height: '0.2rem',
      color: 'rgba(11, 19, 56, .5)',
      background: 'rgba(11, 19, 56, .5)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '63.1rem',
      flexWrap: 'wrap',
    },
  },
  item: {
    position: 'relative',
    cursor: 'pointer',
    padding: '2rem 0',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    },
    '& .icon': {
      width: '3.6rem',
      height: '3.6rem',
      marginRight: '2rem',
    },
    '& .name': {
      color: '#0B1338',
      textShadow: '1.304px 0px 0px rgba(180, 251, 86, 0.74), 0px 1.304px 0px #51A7CF, 0px -1.304px 0px rgba(174, 197, 65, 0.58), 1px 0px 0px rgba(73, 247, 49, 0.48)',
      fontFamily: "TT Interphases Pro Mono Trl",
      fontSize: '2.6rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      marginRight: 'auto',
    },
    '& .doc': {
      width: '69.1rem',
      color: '#32323A',
      textShadow: '0.5px 0px 0px rgba(176, 255, 164, 0.54)',
      fontFamily: "PARADOS",
      fontSize: '1.6rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      display: 'none',
      marginRight: '4.6rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
        marginTop: '2rem',
        marginRight: '0rem',
      },
    },
    '& .arrow': {
      position: 'absolute',
      right: 0,
      width: '1.6rem',
      height: '2.1rem',
    },
    '&.active': {
      '& .doc': {
        display: 'block',
      },
      '& .arrow': {
        width: '2.1rem',
        transformOrigin: 'center',
        transform: 'rotate(-180deg)',
      },
    },
  }
}));
