import { makeStyles, Theme } from '@material-ui/core';

export const useSnackbarStyle = makeStyles<Theme>((theme: any) => ({
  root: {},
  msg: {
    padding:'15px 15px 8px 15px',
    minHeight:'70px',
    position:'relative'
  },
  snackbarRoot: {
    right: '20px',
    top: '100px',
    [theme.breakpoints.down('sm')]: {
      width: '80% !important',
    },
  },
  muiAlertRoot: {
    padding: 0,
    background: '#1A1A1A',
    border: '1px solid #2E2E2E',
    width: '400px',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',
  },
  muiAlertMessage: {
    textAlign: 'left',
    padding: 0,
  },
  closeAlert: {
    position: 'absolute',
    top: '15px',
    right: '11px',
    width: '8px',
    height: '8px',
    cursor:'pointer'
  },
  alertBody: {
    // padding: '20px 20px 0 20px',
  },
  footer: {},
  messageText: {
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular, PingFang SC',
    fontWeight: 400,
    color: '#EAEAEA',
  },
  statusBox: {
    position: 'relative',
    paddingLeft: '30px',
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  statueImg: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  label: {
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular, PingFang SC',
    fontWeight: 400,
    color: '#EAEAEA',
    paddingRight: '4px',
  },
  value: {
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular, PingFang SC',
    fontWeight: 400,
    color: '#FFC904',
    paddingRight: '12px',
  },
  dexxTitle: {
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular, PingFang SC',
    fontWeight: 400,
    color: '#EAEAEA',
  },
  open: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    '& img': {
      width: '12px',
      height: '12px',
      marginRight: '5px',
      cursor: 'pointer',
    },
  },
  right: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: '20px',
    background: 'rgba(255,201,4,0.1)',
    borderRadius: '4px',
    padding: '0 8px',
    fontSize: '10px',
    fontFamily: 'PingFangSC-Regular, PingFang SC',
    fontWeight: 400,
    color: '#FFC904',
    cursor: 'pointer',
    '& img': {
      width: '10px',
      height: '10px',
      marginLeft: '5px',
    },
  },
  btn: {
    height: '26px',
    fontSize: '12px',
    zoom:.8,
    color: '#1A1A1A',
    background: '#11AD7A !important',
    borderRadius: '2px',
    padding:'0 10px !important',
    marginLeft:'8px'
  },
}));
