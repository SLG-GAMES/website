import classNames from 'classnames';
import { usePage3Style } from './usePage3Style';
// import { LaunchApp } from '../LaunchApp';
import { useState } from 'react';

import icon1 from 'assets/img/page3/icon1.png';
import icon2 from 'assets/img/page3/icon2.png';
import icon3 from 'assets/img/page3/icon3.png';
import icon4 from 'assets/img/page3/icon4.png';
import close from 'assets/img/page3/close.png';
import { isPc } from 'assets/js/tool';

export const Page3 = () => {
  const classes = usePage3Style();
  const [idxActive, setActive] = useState(-1);

  return (
    <div id="page3" className={classNames(classes.root, 'flex-col5')}>
      <div className='title flex-in'>
        <span className='titleIdx'>01</span>
        <div className='titleGasp'>'Plug and Play' Modular SDKs</div>
      </div>
      <div className='flex-col5 scroll-box'>
        <div className='subtitle'>Fast, Safe, Stable. Rather than saying it's building your game on web3, it's more accurate to say that this is one of the fastest ways to migrate your game to web3.</div>
        <div className='fit-h5 gif'></div>
        <div className='animate__fade flex-col5 animate__animated' data-animate={isPc && 'animate__fadeInUp'}>
          <div className={classNames(classes.itemBox, 'fit-rel flex-in flex-wrap')}>
            <div
              onClick={() => !isPc && setActive(0)}
              onMouseEnter={() => isPc && setActive(0)}
              onMouseLeave={() => isPc && setActive(-1)}
              className={classNames(classes.item, 'col-in')}>
              <img className='icon' src={icon1} alt="" />
              <div className={classNames(classes.hvrBox, 'hvrBox')}>
                <span className='name wh-all flex-in'>Security</span>
                {/* <div className='popBox popBox1 wh-all'>
                  <div className={classNames(classes.pop, 'pop flex-in wh-all')}>
                    Implementing multi-party computation (MPC) and a trusted execution environment (TEE),
                    SLG.GAMES ensures robust private key management through sharding and authority separation. Supporting both hot and cold wallet systems, along with multi-sig transactions, it guarantees security at the system’s core.
                  </div>
                </div> */}
              </div>
            </div>
            <div
              onClick={() => !isPc && setActive(1)}
              onMouseEnter={() => isPc && setActive(1)}
              onMouseLeave={() => isPc && setActive(-1)}
              className={classNames(classes.item, 'col-in')}>
              <img className='icon' src={icon2} alt="" />
              <div className={classNames(classes.hvrBox, 'hvrBox')}>
                <span className='name wh-all flex-in'>Accessibility</span>
                {/* <div className='popBox popBox2 wh-all'>
                  <div className={classNames(classes.pop, 'pop flex-in wh-all')}>
                    Streamlined with easy-to-use APls, our SDK offers standardized interfaces. Developers caneffortlessly deploy a token-based game economic system, facilitating seamless asset circulation between in-game and blockchain systems by following our documentation.
                  </div>
                </div> */}
              </div>
            </div>
            <div
              onClick={() => !isPc && setActive(2)}
              onMouseEnter={() => isPc && setActive(2)}
              onMouseLeave={() => isPc && setActive(-1)}
              className={classNames(classes.item, 'itemB col-in')}>
              <img className='icon' src={icon3} alt="" />
              <div className={classNames(classes.hvrBox, 'hvrBox')}>
                <span className='name wh-all flex-in'>Cross-platform</span>
                {/* <div className='popBox popBox3 wh-all'>
                  <div className={classNames(classes.pop, 'pop flex-in wh-all')}>
                    Our SDK is compatible with web, Android, and i0s platforms, providing a versatile solution foryour game across various client devices.
                  </div>
                </div> */}
              </div>
            </div>
            <div
              onClick={() => !isPc && setActive(3)}
              onMouseEnter={() => isPc && setActive(3)}
              onMouseLeave={() => isPc && setActive(-1)}
              className={classNames(classes.item, 'itemB col-in')}>
              <img className='icon' src={icon4} alt="" />
              <div className={classNames(classes.hvrBox, 'hvrBox')}>
                <span className='name wh-all flex-in'>Multi-chain</span>
                {/* <div className='popBox popBox4 wh-all'>
                  <div className={classNames(classes.pop, 'pop flex-in wh-all')}>
                    SLG.GAMES extends its support to ETH Mainnet, BNB Chain, Solana, and other multichainassets, ensuring compatibility and flexibility for your game's blockchain
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/*<LaunchApp />*/}
        </div>
      </div>

      <div className={classNames(classes.pop, 'pop flex-in wh-all', idxActive === 0 && 'active')}>
        <div className='logo1 logo'></div>
        <div>
          Implementing multi-party computation (MPC) and a trusted execution environment (TEE),
          <br />
          SLG.GAMES ensures robust private key management through sharding and authority separation. Supporting both hot and cold wallet systems, along with multi-sig transactions, it guarantees security at the system’s core.
        </div>
        <img onClick={() => { setActive(-1) }} className={classNames(classes.close, 'fit-abs3')} src={close} alt="" />
      </div>
      <div className={classNames(classes.pop, 'pop flex-in wh-all', idxActive === 1 && 'active')}>
        <div className='logo2 logo'></div>
        <div>
          Streamlined with easy-to-use APls, our SDK offers standardized interfaces. Developers caneffortlessly deploy a token-based game economic system, facilitating seamless asset circulation between in-game and blockchain systems by following our documentation.
        </div>
        <img onClick={() => { setActive(-1) }} className={classNames(classes.close, 'fit-abs3')} src={close} alt="" />
      </div>
      <div className={classNames(classes.pop, 'pop flex-in wh-all', idxActive === 2 && 'active')}>
        <div className='logo3 logo'></div>
        <div>
          Our SDK is compatible with web, Android, and i0s platforms, providing a versatile solution foryour game across various client devices.
        </div>
        <img onClick={() => { setActive(-1) }} className={classNames(classes.close, 'fit-abs3')} src={close} alt="" />
      </div>
      <div className={classNames(classes.pop, 'pop flex-in wh-all', idxActive === 3 && 'active')}>
        <div className='logo4 logo'></div>
        <div>
          SLG.GAMES extends its support to ETH Mainnet, BNB Chain, Solana, and other multichainassets, ensuring compatibility and flexibility for your game's blockchain
        </div>
        <img onClick={() => { setActive(-1) }} className={classNames(classes.close, 'fit-abs3')} src={close} alt="" />
      </div>
    </div>
  );
};

