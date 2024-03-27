import classNames from 'classnames';
import { ThemeProvider } from '@material-ui/core';
import { useHomeStyle } from './useHomeStyle';
import { getTheme } from 'modules/common/utils/getTheme';
import { CurrentTheme } from 'modules/themes/types';

import { Footer } from 'modules/Home/components/Footer';
import { Page1 } from 'modules/Home/components/Page1';
import { Page2 } from 'modules/Home/components/Page2';
import { Page3 } from 'modules/Home/components/Page3';
import { Page4 } from 'modules/Home/components/Page4';
import { Page5 } from 'modules/Home/components/Page5';
import { Page6 } from 'modules/Home/components/Page6';
import { Page7 } from 'modules/Home/components/Page7';
import { Page8 } from 'modules/Home/components/Page8';
import { Page9 } from 'modules/Home/components/Page9';
import {Page10} from 'modules/Home/components/Page10';
import {Page11} from 'modules/Home/components/Page11';
import arrow from 'assets/img/bg/arrow.png';

import { isPc } from 'assets/js/tool';
import { init } from 'assets/js/base';
import { useEffect, useRef } from 'react';
import { Nav } from 'modules/Home/components/Nav';
import { methods } from '../components/LaunchApp';
import { IconLink } from '../../../assets/js/const';

export const Home = () => {
  const page1Ref = useRef({} as methods);
  useEffect(() => {
    init();

    return () => {

    };
  }, []);

  const classes = useHomeStyle();
  const handleMouseWheel = () => {
    page1Ref.current.onClose();
  };

  return (
    <ThemeProvider theme={getTheme(CurrentTheme)}>
      <div className={classNames(classes.root)} onWheel={handleMouseWheel}>
        <div className={classNames(classes.page1Box, 'page')} data-bg='bgWrite'>
          <Page1 events={page1Ref} />
        </div>
        <div className='page' data-bg='bgBlack'>
          <Page2 />
        </div>
        <div className='page' data-bg='bgWrite'>
          <Page8 />
        </div>
        <div className='page' data-bg='bgWrite'>
          <Page3 />
        </div>
        <div className='page' data-bg='bgWrite'>
          <Page4 />
        </div>
        <div className='page' data-bg='bgBlack'>
          <Page5 />
        </div>
        <div className='page' data-bg='bgWrite'>
          <Page6 />
        </div>
        <div className='page' data-bg='bgWrite'>
          <Page7 />
        </div>
        <div className='page' data-bg='bgWrite'>
          <Page9 />
        </div>
        <div className='page' data-bg='bgWrite'>
          <Page10 />
        </div>
        <div className='page' data-bg='bgWrite'>
          <Page11 />
        </div>
        <div className='appBtn flex-in' onClick={() => {
          window.open(IconLink.sdkApi);
        }}>
          <span className='fit-rel'>API</span>
        </div>
        {
          !isPc && <Nav />
        }
        <Footer />
        <div id='arrow' className={classNames(classes.arrow, 'fit-abs8')}>
          <img className='wh-all animate__animated animate__infinite animate__slow animate__fadeOutUp' src={arrow}
               alt='' />
        </div>
      </div>
    </ThemeProvider>
  );
};
