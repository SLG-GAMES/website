import classNames from 'classnames';
import { usePage8Style } from './usePage8Style';

// import logo from 'assets/img/Page8/logo1.png'

export const Page8 = () => {
  const classes = usePage8Style();

  return (
    <div id="page8" className={classNames(classes.root, 'flex-col5')}>
      <div className='title flex-in'>
        <span className='titleIdx'>01</span>
        <div className='titleGasp'>'Plug and Play' Modular SDKs</div>
      </div>
      <div className='subtitle'>Fast, Safe, Stable. Rather than saying it's building your game on web3, it's more accurate to say that this is one of the fastest ways to migrate your game to web3.</div>

      {/* <img className='logo' src={logo} alt="" /> */}
      <div className='logo'></div>
    </div>
  );
};

