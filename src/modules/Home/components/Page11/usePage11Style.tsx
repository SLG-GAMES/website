import { makeStyles, Theme } from '@material-ui/core';

export const usePage11Style = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    paddingBottom: '11rem',
    '& .title': {
      marginTop: '6rem',
      marginBottom: '0rem',
      textAlign: 'center',
      color: '#0B1338',
      textShadow: '1.304px 0px 0px #B4FB56, 0px 1.304px 0px #51A7CF, 0px -1.304px 0px #AEC541, 2.609px 0px 0px rgba(73, 247, 49, 0.48)',
      fontFamily: 'TT Interphases Pro Mono Trl',
      fontSize: '4rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '4.8rem',
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        fontSize: '4.6rem',
        lineHeight: '5.8rem',
        textTransform: 'capitalize',
        marginBottom: '1.5rem',
        flexDirection: 'column',
      },
    },
    '& .subtitle': {
      position:'absolute',
      textAlign: 'center',
      width: '110.1rem',
      color: '#32323A',
      textShadow: '1px 0px 1px #B0FFA4',
      fontFamily: 'PARADOS',
      fontSize: '2.2rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.4rem',
        width: '55.6rem',
      },
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
    gap: '5.2rem',
    marginTop: '1rem',
    position: 'relative',
    '& img': {
      width: '120.4rem',
      height: '59rem',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '2rem',
      marginTop: '2.5rem',
      '& img': {
        width: '64.5rem',
        height: '58.6rem',
      },
    },
  },

}));
