import { useFooterStyle } from './useFooterStyle';

import classNames from 'classnames';

import logo from 'assets/img/footer/logo.png';
import icon1 from 'assets/img/footer/icon1.png';
import icon2 from 'assets/img/footer/icon2.png';
import icon3 from 'assets/img/footer/icon3.png';

export const Footer = () => {

  const classes = useFooterStyle();
  return (
    <div className={classNames(classes.root, 'footerU fit-abs5')}>
      <div className={classNames(classes.boxL, 'col-in')}>
        <img className='logo' src={logo} alt="" />
        <a className='launch' href="https://ui-buttons.web.app/slide-reveal/" target="_blank" rel="noopener noreferrer">{'Launch App >>'}</a>
      </div>
      <div className={classNames(classes.boxC, 'col-in')}>
        <a className='active' href="http://" target="_blank" rel="noopener noreferrer">Learn</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Build</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Explore</a>
      </div>
      <div className={classNames(classes.boxR, 'col-in')}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className='wh-all' src={icon1} alt="" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className='wh-all' src={icon2} alt="" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className='wh-all' src={icon3} alt="" />
        </a>
        <a className='launch flex-in' href="http://" target="_blank" rel="noopener noreferrer">Launch App</a>
      </div>
    </div>
  );
};
