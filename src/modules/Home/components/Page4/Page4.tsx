import classNames from 'classnames';
import { usePage4Style } from './usePage4Style';

// import logo from 'assets/img/page4/logo1.png'

export const Page4 = () => {
  const classes = usePage4Style();

  return (
    <div id="page4" className={classNames(classes.root, 'flex-col5')}>
      <div className='title flex-in'>
        <span className='titleIdx'>02</span>
        <div className='titleGasp'>Composable GameFi Tools</div>
      </div>
      <div className='subtitle'>SLG.GAMES offers a user-friendly Web3 interface for easy asset management and transactions.</div>
        
      {/* <img className='logo' src={logo} alt="" /> */}
      <div className='logo'></div>
    </div>
  );
};

