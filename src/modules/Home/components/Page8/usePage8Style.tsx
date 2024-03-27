import { makeStyles, Theme } from '@material-ui/core';

import logo from 'assets/img/page8/logo1.gif'
import h5_logo from 'assets/img/page8/h5-logo1.png'

export const usePage8Style = makeStyles((theme: Theme) => ({
  root: {
		width: '100%',
		height: '100%',
    paddingBottom: '3.7rem',
    '& .title': {
      color: '#0B1338',
      textAlign: 'center',
      textShadow: '1.304px 0px 0px #B4FB56, 0px 1.304px 0px #51A7CF, 0px -1.304px 0px #AEC541, 2.609px 0px 0px rgba(73, 247, 49, 0.48)',
      fontFamily: "TT Interphases Pro Mono Trl",
      fontSize: '4rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '4.8rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '4.6rem',
        lineHeight: '5.8rem',
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
      marginTop: '2.1rem',
      [theme.breakpoints.down('sm')]: {
        width: '55.6rem',
        fontSize: '2.4rem',
      },
    },
    '& .logo': {
      borderRadius: '2rem',
      width: '67.6991rem',
      height: '39.6552rem',
      flexShrink: 0,
      marginTop: '2.5rem',
      background: `url(${logo}) no-repeat center`,
      backgroundSize: '110% 110%',
      [theme.breakpoints.down('sm')]: {
        width: '51.8696rem',
        height: '65.6645rem',
        marginTop: '2.9rem',
        background: `url(${h5_logo}) no-repeat center`,
        backgroundSize: '100% 100%',
      },
    },
  },
}));
