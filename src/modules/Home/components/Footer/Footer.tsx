import { useFooterStyle } from './useFooterStyle';

import classNames from 'classnames';
import { Nav } from '../Nav';

import logo from 'assets/img/footer/logo.png';
import { isPc } from 'assets/js/tool';
import { IconLink } from '../../../../assets/js/const';

export const Footer = () => {

  const classes = useFooterStyle();
  return (
    <div className={classNames(classes.root, 'footerU fit-abs5')}>
      <div className={classNames(classes.boxL, 'col-in')}>
        <img className='logo' src={logo} alt='' />
        {/* <a className='launch' href="https://ui-buttons.web.app/slide-reveal/" target="_blank" rel="noopener noreferrer">{'Launch App >>'}</a> */}
      </div>

      {
        isPc && <Nav />
      }

      <div className={classNames(classes.boxR, 'col-in')}>

        <a className={classNames('tg')} href={IconLink.tg} target='_blank' rel='noopener noreferrer'>
          <i className='wh-all tg' />
        </a>
        <a href={IconLink.x} target='_blank' rel='noopener noreferrer'>
          <i className='wh-all icon1' />
        </a>
        <a href={IconLink.github} target='_blank' rel='noopener noreferrer'>
          <i className='wh-all icon2' />
        </a>
        <a href={IconLink.m}  target='_blank' rel='noopener noreferrer'>
          <i className='wh-all icon3' />
        </a>
        <a className={classNames('discordBox')} href={IconLink.discord}
           target='_blank' rel='noopener noreferrer'>
          <i className='wh-all discord' />
        </a>
        <a className={classNames('')} href={IconLink.sdkApi}
           target='_blank' rel='noopener noreferrer'>
          <i className='wh-all api' />
        </a>
      </div>
    </div>
  );
};
