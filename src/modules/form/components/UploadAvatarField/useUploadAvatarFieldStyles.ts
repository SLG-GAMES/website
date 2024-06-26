import { makeStyles, Theme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';

const BORDER_SIZE = 1;

export const useUploadAvatarFieldStyles = makeStyles<Theme>(theme => ({
  root: {
    height: '100%',
    cursor: 'pointer'
  },
  container: {
    height: '100%',
  },
  input: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: 100,
    '&:hover': {
      cursor: 'pointer',
    },
  },

  innerBlock: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  avatarWrap: {
    position: 'relative',
    width: '100%',
    '&:after': {
      content: `''`,
      position: 'absolute',
      background: fade(theme.palette.text.primary, 0.2),
      opacity: 0,
      borderRadius: 'inherit',

      transition: 'all 0.2s',
    },

    '&:hover:after': {
      opacity: 1,
    },
  },
  avatar: {
    width:'80px',
    height:'80px',
    borderRadius:'50%',
    // width: '100%',
    // height: '100%',
    // borderRadius: '14px',
    border: `${BORDER_SIZE}px solid ${fade(theme.palette.text.primary, 0.1)}`,
    display: 'block'
  },
  editButton: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 50,
    height: 50,
    margin: 'auto',

    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    opacity: 0,
    transition: 'all 0.2s',

    // '&:hover': {
    //   background: theme.palette.background.default,
    //   color: theme.palette.text.primary,
    // },

    // '$innerBlock:hover &': {
    //   opacity: 1,
    // },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1, 2, 1, 3),
  },
  text: {
    fontSize: 14,
    color: fade(theme.palette.common.black, 0.5),
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    height: 50,
    minWidth: 160,
    marginTop: theme.spacing(2),
  },
  initialBlockText: {
    color: '#8787A2',
    fontSize: '14px',
    lineHeight: '22px',
    maxWidth: '204px',
    '& strong': {
      color: '#8468FF',
    },
  },
  initialBlockPic: {
    marginBottom: theme.spacing(2),
  },
  initialBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));
