import { makeStyles, Theme } from '@material-ui/core';

import line from 'assets/img/footer/line.png';

import tg from 'assets/img/footer/telegram.png';
import discord from 'assets/img/footer/discords.png';
import icon1 from 'assets/img/footer/twitter.png';
import icon2 from 'assets/img/footer/github.png';
import icon3 from 'assets/img/footer/medium.png';
import api from 'assets/img/footer/api.png';
import hvrtg from 'assets/img/footer/hvrtg.png';
import hvrIcon1 from 'assets/img/footer/hvrIcon1.png';
import hvrIcon2 from 'assets/img/footer/hvrIcon2.png';
import hvrIcon3 from 'assets/img/footer/hvrIcon3.png';
import hvrdiscord from 'assets/img/footer/hvrdiscord.png';
import hrvapi from 'assets/img/footer/hrvapi.png';

export const useFooterStyle = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 2,
    top: '88%',
    width: '100%',
    maxWidth: '192rem',
    padding: '0 20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      top: '94%',
      padding: '0 8.5rem',
      alignItems: 'flex-end',
    },
  },
  boxL: {
    gap: '4.4rem',
    '& .logo': {
      width: '10.753rem',
      height: '6.2rem',
      flexShrink: 0,
      [theme.breakpoints.down('sm')]: {
        width: '11.6719rem',
        height: '6.7297rem',
      },
    },
    '& .launch': {
      display: 'none',
      color: '#0B1338',
      fontSize: '2rem',
      fontFamily: 'TT Interphases Pro Mono Trl',
      fontWeight: 700,
      wordWrap: 'break-word',
      textShadow: '1.304px 0px 0px rgba(180, 251, 86, 0.74)',
      background: `url(${line}) no-repeat bottom`,
      backgroundSize: '100% auto',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        fontSize: '2.4rem',
        textShadow: '1.416px 0px 0px rgba(180, 251, 86, 0.74)',
        background: `url(${line}) no-repeat bottom`,
        backgroundSize: '100% 0.35rem',
        paddingBottom: '.47rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      gap: '3.83rem',
    },
  },
  boxR: {
    gap: '1.6rem',
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid transparent',
      width: '4.6rem',
      height: '4.6rem',
      flexShrink: 0,
      borderRadius: '50%',
      padding: '.15rem .1rem .2rem .2rem',
      '& i': {
        display: 'block',
      },
      '& .icon1': {
        background: `url(${icon1}) no-repeat`,
        backgroundSize: '100% 100%',
      },
      '& .tg': {
        background: `url(${tg}) no-repeat`,
        backgroundSize: '100% 100%',
      },
      '& .icon2': {
        background: `url(${icon2}) no-repeat`,
        backgroundSize: '100% 100%',
      },
      '& .icon3': {
        background: `url(${icon3}) no-repeat`,
        backgroundSize: '100% 100%',
      },
      '& .discord': {
        background: `url(${discord}) no-repeat`,
        backgroundSize: '100% 100%',
      },
      '& .api': {
        background: `url(${api}) no-repeat`,
        backgroundSize: '100% 100%',
      },

      '&:hover': {
        border: '1px solid #172441',
        '& .icon1': {
          background: `url(${hvrIcon1}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .tg': {
          background: `url(${hvrtg}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .icon2': {
          background: `url(${hvrIcon2}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .icon3': {
          background: `url(${hvrIcon3}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .discord': {
          background: `url(${hvrdiscord}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .api': {
          background: `url(${hrvapi}) no-repeat`,
          backgroundSize: '100% 100%',
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '5.4rem',
        height: '5.4rem',
        '& .tg': {
          background: `url(${hvrtg}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .icon1': {
          background: `url(${hvrIcon1}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .icon2': {
          background: `url(${hvrIcon2}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .icon3': {
          background: `url(${hvrIcon3}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .discord': {
          background: `url(${hvrdiscord}) no-repeat`,
          backgroundSize: '100% 100%',
        },
        '& .api': {
          background: `url(${hrvapi}) no-repeat`,
          backgroundSize: '100% 100%',
        },
      },
    },
    [theme.breakpoints.down('sm')]: {
      gap: '4rem',
    },
  },
}));
