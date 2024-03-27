import classNames from 'classnames';
import { usePage5Style } from './usePage5Style';
import { useState, useEffect } from 'react';
import { } from 'assets/js/base';
import logo1 from 'assets/img/page5/logo1.gif';
import logo2 from 'assets/img/page5/logo2.gif';
import logo3 from 'assets/img/page5/logo3.gif';
import logo4 from 'assets/img/page5/logo4.gif';
import { isPc } from 'assets/js/tool';

export const Page5 = () => {
  const classes = usePage5Style();
  const [idxActive, setActive] = useState(1);
  useEffect(() => {
    setActive(1);
  }, []);
  return (
    <div id="page5" className={classNames(classes.root, 'flex-col5')}>

      <div className='title flex-in'>
        <span className='titleIdx'>02</span>
        <div className='titleGasp'>Composable GameFi Tools</div>
      </div>

      <div className='animate__fade flex-col5 scroll-box fit-rel w-all animate__animated' data-animate={isPc && 'animate__fadeInUp'}>
        <div className='subtitle'>SLG.GAMES offers a user-friendly Web3 interface for easy asset management and transactions.</div>
        <div className='fit-h5 gif'></div>
        <div className={classNames(classes.itemBox, 'flex-row2')}>
          <div className={classNames(classes.boxL, 'boxL')}>
            <div className='fit-rel fit-pc'>
              <div className={classNames(classes.side, 'side1 side fit-abs2', idxActive === 1 && 'active')}>
                <div className='tagL'>FT/NFT Launch</div>
                <div className='doc'>
                  Streamline digital asset offerings with INO and lDO
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;on SLG.GAMES for a successful game launch.
                </div>
                <div className='icon'>------</div>
              </div>
              <div className={classNames(classes.side, 'side2 side fit-abs2', idxActive === 2 && 'active')}>
                <div className='tagL'>Trade</div>
                <div className='doc'>
                  Access NFT Market and DEX AMM solutions on
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;SLG.GAMES, ensuring seamless liquidity.
                </div>
                <div className='icon'>------</div>
              </div>
              <div className={classNames(classes.side, 'side3 side fit-abs2', idxActive === 3 && 'active')}>
                <div className='tagL'>DeFi</div>
                <div className='doc'>
                  Explore DeFi possibilities with standardized smart
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;contract tools.
                </div>
                <div className='icon'>------</div>
              </div>
              <div className={classNames(classes.side, 'side4 side fit-abs2', idxActive === 4 && 'active')}>
                <div className='tagL'>Community Governance</div>
                <div className='doc'>
                  Initiate direct and proxy voting with SLG.GAMES's
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;smart contracts, actively shaping game development.
                </div>
                <div className='icon'>------</div>
              </div>
            </div>
          </div>
          <div className={classNames(classes.logoBox, 'boxR flex-col2 fit-rel')}>
            <div className={classNames(classes.side, 'side1 side fit-abs2', idxActive === 1 && 'active')}>
              <div className='logo'>
                <div className='wh-all fit-rel scroll-h'>
                  <img className='fit-abs5' src={logo1} alt="" />
                </div>
              </div>
              <div className='tagBox fit-abs2'>
                <div className='tag'>FT/NFT Launch</div>
                <div className='subtag'>
                  Streamline digital asset offerings with INO and lDO
                  on SLG.GAMES for a successful game launch.
                </div>
              </div>
            </div>
            <div className={classNames(classes.side, 'side2 side fit-abs2', idxActive === 2 && 'active')}>
              <div className='logo'>
                <div className='wh-all fit-rel scroll-h'>
                  <img className='fit-abs5' src={logo2} alt="" />
                </div>
              </div>
              <div className='tagBox fit-abs2'>
                <div className='tag'>Trade</div>
                <div className='subtag'>
                  Access NFT Market and DEX AMM solutions on
                  SLG.GAMES, ensuring seamless liquidity.
                </div>
              </div>
            </div>
            <div className={classNames(classes.side, 'side3 side fit-abs2', idxActive === 3 && 'active')}>
              <div className='logo'>
                <div className='wh-all fit-rel scroll-h'>
                  <img className='fit-abs5' src={logo3} alt="" />
                </div>
              </div>
              <div className='tagBox fit-abs2'>
                <div className='tag'>DeFi</div>
                <div className='subtag'>
                  Explore DeFi possibilities with standardized smart
                  contract tools.
                </div>
              </div>
            </div>
            <div className={classNames(classes.side, 'side4 side fit-abs2', idxActive === 4 && 'active')}>
              <div className='logo'>
                <div className='wh-all fit-rel scroll-h'>
                  <img className='fit-abs5' src={logo4} alt="" />
                </div>
              </div>
              <div className='tagBox fit-abs2'>
                <div className='tag'>Community Governance</div>
                <div className='subtag'>
                  Initiate direct and proxy voting with SLG.GAMES's
                  smart contracts, actively shaping game development.
                </div>
              </div>
            </div>

            <div className={classNames(classes.arrowBox, 'row-out fit-abs5')}>
              <div className='prev'></div>
              <div className='next'></div>
            </div>
          </div>
        </div>

        <div className={classNames(classes.dotBox, 'fit-abs5 flex-col5')}>
          <div className={classNames('dot', idxActive === 1 && 'active')}>
            <div className={classNames(classes.idx, 'fit-abs5', 'idx')}>01</div>
          </div>
          <div className={classNames('dot', idxActive === 2 && 'active')}>
            <div className={classNames(classes.idx, 'fit-abs5', 'idx')}>02</div>
          </div>
          <div className={classNames('dot', idxActive === 3 && 'active')}>
            <div className={classNames(classes.idx, 'fit-abs5', 'idx')}>03</div>
          </div>
          <div className={classNames('dot', idxActive === 4 && 'active')}>
            <div className={classNames(classes.idx, 'fit-abs5', 'idx')}>04</div>
          </div>
        </div>
      </div>
    </div>
  );
};

