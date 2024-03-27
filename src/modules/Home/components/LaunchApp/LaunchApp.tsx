import React, { useState, useEffect, useImperativeHandle, MutableRefObject } from 'react';
import { useLaunchAppStyle } from './useLaunchAppStyle';
import { Box } from '@material-ui/core';
import classNames from 'classnames';
import icon from 'assets/img/bg/app-icon.png';
import { IconLink } from 'assets/js/const';

export type methods = {
  onClose: () => void
};

interface LaunchAppProps {
  methods?: MutableRefObject<methods>,
}

export const LaunchApp = ({ methods }: LaunchAppProps) => {
  const classes = useLaunchAppStyle();
  let [visibility, setVisibility] = useState<boolean>(false);

  const handleEsc = (event: any) => {
    if (event.key === 'Escape') {
      setVisibility(false);
    }
  };
  useImperativeHandle(methods, () => ({
    onClose: () => {
      setVisibility(false);
    },
  }));
  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);
  return (
    <>
      <div className={classNames(classes.root, 'LaunchAppU fit-rel')}
           onClick={() => {
             setVisibility(true);
           }}
      >
      <span className='left fit-abs5 col-in'>
        {'More Details'}
        <img className='icon' src={icon} alt='' />
      </span>
        <span className='right fit-abs5 col-in'>
        {'More Details'}
          <img className='icon' src={icon} alt='' />
      </span>
      </div>

      <div className={classNames(classes.videoBox, visibility ? 'show' : 'none')} onClick={() => {
        setVisibility(false);
      }}>
        <Box className={classes.dialogBody}>
          {visibility && <iframe width='100%' height='100%'
                                 className={classNames('')}
                                 src={IconLink.youtube}
                                 title='YouTube video player'
                                 frameBorder='0'
                                 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                 allowFullScreen>
          </iframe>}
        </Box>

      </div>
      {/*<DialogWarp*/}
      {/*  visibility={visibility}*/}
      {/*  setVisibility={setVisibility}*/}
      {/*  title={''}*/}
      {/*>*/}
      {/*  <Box className={classes.dialogBody}>*/}


      {/*  </Box>*/}
      {/*</DialogWarp>*/}
    </>

  );
};
