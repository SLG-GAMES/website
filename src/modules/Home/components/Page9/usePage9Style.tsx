import { makeStyles, Theme } from '@material-ui/core';

export const usePage9Style = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    paddingBottom: '11rem',
    '& .title': {
      marginBottom: '2.1rem',
      textAlign: 'center',
      color: '#0B1338',
      textShadow: '1.304px 0px 0px #B4FB56, 0px 1.304px 0px #51A7CF, 0px -1.304px 0px #AEC541, 2.609px 0px 0px rgba(73, 247, 49, 0.48)',
      fontFamily: "TT Interphases Pro Mono Trl",
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
      },
    },
    '& .subtitle': {
      textAlign: 'center',
      width: '110.1rem',
      color: '#32323A',
      textShadow: '1px 0px 1px #B0FFA4',
      fontFamily: "PARADOS",
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
    marginTop: '9.5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '2rem',
      marginTop: '3.5rem',
    },
  },
  item: {
    width: '46.7rem',
    minHeight: '27.9rem',
    border: '1.3px solid #008FE5',
    borderRadius: '1.5rem',
    boxShadow: '-2px 2px 0 0 #0B1650, 2px -2px 0 0 #0B1650, 2px 2px 0 0 #0B1650, -2px -2px 0 0 #0B1650',
    '& svg': {
      display: 'none',
    },
    '& .box': {
      cursor: 'pointer',
      padding: '2.8rem',
      overflow: 'hidden',
      borderRadius: '1.5rem',
    },
    '& .hvrBg': {
      width: '48.5rem',
      height: '29.6rem',
    },
    '&:hover': {
      '& svg': {
        display: 'block',
      },
      '& .box': {
        backgroundColor: '#BFF1F6',
        boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.40) inset',
        filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.69))',
        backdropFilter: 'blur(10px)',
      },
    },
    '& .icon': {
      flexShrink: 0,
      width: '7rem',
      height: '7rem',
      marginRight: '2rem',
    },
    '& .name': {
      color: '#0B1338',
      textShadow: '1.304px 0px 0px rgba(180, 251, 86, 0.74), 0px 1.304px 0px #51A7CF, 0px -1.304px 0px rgba(174, 197, 65, 0.58), 1px 0px 0px rgba(73, 247, 49, 0.48)',
      fontFamily: "TT Interphases Pro Mono Trl",
      fontSize: '3rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    '& .doc': {
      color: '#32323A',
      textShadow: '0.5px 0px 0px rgba(176, 255, 164, 0.54)',
      fontFamily: "PARADOS",
      fontSize: '1.6rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
        fontWeight: 400,
        lineHeight: '2.54rem',
        letterSpacing: '-0.28px',
      },
    },
    '& .line': {
      width: '100%',
      height: '2px',
      background: 'rgba(11, 19, 56, .5)',
      margin: '2rem 0',
    },
    [theme.breakpoints.down('sm')]: {
      width: '60.7rem',
      height: '28.3rem',

      '& svg': {
        display: 'none !important',
      },
      '& .box': {
        padding: '2rem',
        backgroundColor: 'transparent !important',
        boxShadow: 'none !important',
        filter: 'none !important',
        backdropFilter: 'none !important',
      },
    },
  },
}));
