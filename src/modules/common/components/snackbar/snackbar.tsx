import { useSnackbarStyle } from './useSnackbarStyle';
import { Box } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Error from 'assets/img/status/error.svg';
import Success from 'assets/img/status/success.svg';
import Info from 'assets/img/status/info.svg';
import Warning from 'assets/img/status/info.svg';
import CloseAlert from 'assets/img/public/closeAlert.png';
import openBlock from 'assets/img/public/openBlock.png';
import openPrice from 'assets/img/public/openPrice.png';
import openHash from 'assets/img/public/openHash.png';
import classNames from 'classnames';
import { Button } from '../../../uiKit/Button';
import React from 'react';
import {getBlockChainExplorerAddress} from '../../conts';
import { formatUnitNumber } from '../../utils/number';
import {t} from 'modules/i18n/utils/intl';
export type Color = 'success' | 'info' | 'warning' | 'error';

export const SnackbarDialog = ({
                                 isOpen,
                                 setOpen,
                                 msg,
                                 severity,
                                 duration,
                                 resubmit,
                                 loading,
                                 tradeInfo
                               }: {
  isOpen: boolean;
  msg: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  severity?: Color;//'success' | 'info' | 'warning' | 'error'
  duration?: number;
  resubmit?:()=>void;
  loading?:boolean;
  tradeInfo?:any;
}) => {
  const classes = useSnackbarStyle();

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} classes={
      {
        root: classes.muiAlertRoot,
        message: classes.muiAlertMessage,
      }
    } />;
  }

  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Snackbar
        open={isOpen}
        autoHideDuration={duration || 3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }
        }
        classes={{
          root: classes.snackbarRoot,
        }
        }
      >
        <Alert severity={severity || 'info'}>
          <Box className={classes.msg}>
            <img onClick={handleCloseSnackbar} className={classes.closeAlert} src={CloseAlert} alt='' />
            <Box className={classes.alertBody}>
              <Box className={classes.statusBox}>
                <img className={classes.statueImg} src={
                  severity === 'success' ? Success :
                    severity === 'error' ? Error :
                      severity === 'warning' ? Warning : Info
                } alt='' />
                <Box className={classes.messageText}>{msg}</Box>
                {
                  tradeInfo?.isResubmit && <Button
                    onClick={resubmit}
                    className={classNames('default', classes.btn)}
                    loading={loading}>
                    {t('button.resubmit')}
                  </Button>
                }

              </Box>
              {
                tradeInfo?.tradeAlert && <>
                  <Box className={classes.statusBox}>
                    <Box className={classes.label}>
                      {t('trade.purchase')}
                    </Box>
                    <Box className={classes.value}>
                      {tradeInfo?.tradeAmountEth} ETH
                    </Box>
                    <Box className={classes.label}>
                      MC
                    </Box>
                    <Box className={classes.value}>
                      {formatUnitNumber(tradeInfo?.supply*tradeInfo?.tokenPriceUsd)}
                    </Box>
                  </Box>
                  <Box className={classes.statusBox}>
                    <Box className={classes.dexxTitle}>XXXX - Etherscan</Box>
                  </Box>
                </>
              }

            </Box>
            {
              tradeInfo?.tradeAlert && <Box className={classes.footer}>
                <Box className={classes.open}>
                  <Box className={classes.left}>
                    <img src={openBlock} alt='' onClick={()=>{
                      window.open(`${getBlockChainExplorerAddress()}address/${tradeInfo?.tokenContract}`)
                    }}/>
                    <img src={openPrice} alt='' />
                  </Box>
                  <Box className={classes.right} onClick={()=>{
                    tradeInfo?.buyTxHash && window.open(tradeInfo?.buyTxHash);
                  }}>
                    TX<img src={openHash} alt='' />
                  </Box>
                </Box>
              </Box>
            }

          </Box>
        </Alert>
      </Snackbar>
    </Box>
  );
};
