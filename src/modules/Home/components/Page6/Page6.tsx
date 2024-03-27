import classNames from 'classnames';
import { usePage6Style } from './usePage6Style';

// import logo from 'assets/img/Page6/logo1.png'

export const Page6 = () => {
  const classes = usePage6Style();

  return (
    <div id="page6" className={classNames(classes.root, 'flex-col5')}>
      <div className='title flex-in'>
        <span className='titleIdx'>03</span>
        <div className='titleGasp'>Visualized Game Management Dashboard</div>
      </div>
      <div className='subtitle'>Optimize your game decisions with data-driven insights, aggregating on-chain and off-chain data</div>
      {/* <img className='logo' src={logo} alt="" /> */}
      <div className='logo'></div>
    </div>
  );
};

