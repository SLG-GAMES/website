import classNames from 'classnames';
import { usePage7Style } from './usePage7Style';
// import { LaunchApp } from '../LaunchApp';
import { useState } from 'react';
import arrow from 'assets/img/page7/arrow.png';
import icon1 from 'assets/img/page7/icon1.png';
import icon2 from 'assets/img/page7/icon2.png';
import icon3 from 'assets/img/page7/icon3.png';
import { isPc } from 'assets/js/tool';

export const Page7 = () => {
  const classes = usePage7Style();
  const [idxActive, setActive] = useState(0);

  return (
    <div id="page7" className={classNames(classes.root, 'flex-col5')}>
      <div className='title flex-in'>
        <span className='titleIdx'>03</span>
        <div className='titleGasp'>Visualized Game Management Dashboard</div>
      </div>
      <div className='flex-col5 scroll-box'>
        <div className='subtitle'>Optimize your game decisions with data-driven insights, aggregating on-chain and off-chain data</div>
        <div className='fit-h5 gif'></div>
        <div className='animate__fade animate__animated flex-col2' data-animate={isPc && 'animate__fadeInUp'}>
          <div className={classNames(classes.box, 'row-in')}>
            <div className={classNames(classes.itemBox)}>
              <i className='line'></i>
              <div className={classNames(classes.item, 'row-out', idxActive === 0 && 'active')} onMouseEnter={() => { setActive(0); }} onClick={() => { setActive(0); }}>
                <img className='icon' src={icon1} alt="" />
                <div className='name'>Data Management</div>
                <div className='doc'>Access real-time in-game data, including user retention, online hours, asset generation, consumption, and transactions. Evaluate your game's progress comprehensively, with proven on-chain analysis templates.</div>
                <img className='arrow' src={arrow} alt="" />
              </div>
              <div className={classNames(classes.logo, 'fit-h5 logo' + (idxActive + 1), idxActive === 0 && 'active')}></div>
              <i className='line'></i>
              <div className={classNames(classes.item, 'row-out', idxActive === 1 && 'active')} onMouseEnter={() => { setActive(1); }} onClick={() => { setActive(1); }}>
                <img className='icon' src={icon2} alt="" />
                <div className='name'>Risk Management</div>
                <div className='doc'>Set up risk control rules for each asset class, ensuring flexible and efficient risk managementFor instance, trigger transaction reviews for a continuous high volume of withdrawals in ashort period.</div>
                <img className='arrow' src={arrow} alt="" />
              </div>
              <div className={classNames(classes.logo, 'fit-h5 logo' + (idxActive + 1), idxActive === 1 && 'active')}></div>
              <i className='line'></i>
              <div className={classNames(classes.item, 'row-out', idxActive === 2 && 'active')} onMouseEnter={() => { setActive(2); }} onClick={() => { setActive(2); }}>
                <img className='icon' src={icon3} alt="" />
                <div className='name'>Users Monitoring</div>
                <div className='doc'>Understand user segments, from grinders and traders to GameFi players and hardcoregamers. Define economic goals and operational strategies more accurately.</div>
                <img className='arrow' src={arrow} alt="" />
              </div>
              <div className={classNames(classes.logo, 'fit-h5 logo' + (idxActive + 1), idxActive === 2 && 'active')}></div>
              <i className='line'></i>
            </div>
            <div className={classNames(classes.logo, 'fit-pc logo' + (idxActive + 1))}></div>
          </div>
          {/*<LaunchApp />*/}
        </div>
      </div>
    </div>
  );
};
