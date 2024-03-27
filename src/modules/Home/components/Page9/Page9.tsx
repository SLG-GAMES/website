import classNames from 'classnames';
import { usePage9Style } from './usePage9Style';
import icon1 from 'assets/img/page9/icon1.png';
import icon2 from 'assets/img/page9/icon2.png';
import icon3 from 'assets/img/page9/icon3.png';

export const Page9 = () => {
  const classes = usePage9Style();

  return (
    <div id="page9" className={classNames(classes.root, 'flex-col5')}>
      <div className='title titleGasp'>Monetizing Data</div>
      <div className='scroll-box flex-col5'>
        <div className='subtitle'>Empower your future gaming landscape with player data.</div>
        <div className={classNames(classes.itemBox, 'row-in col-out')}>
          <div className={classNames(classes.item, 'fit-rel')}>
            <svg className='hvrBg fit-abs5' xmlns="http://www.w3.org/2000/svg" width="485" height="296" viewBox="0 0 485 296" fill="none">
              <g filter="url(#filter0_b_4207_2127)">
                <path d="M1 19C1 9.05888 9.05888 1 19 1H466C475.941 1 484 9.05888 484 19V277C484 286.941 475.941 295 466 295H19C9.05888 295 1 286.941 1 277V19Z" stroke="#0B1650" strokeWidth="2" />
              </g>
              <defs>
                <filter id="filter0_b_4207_2127" x="-1.43478" y="-1.43478" width="487.87" height="298.87" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.717391" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4207_2127" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4207_2127" result="shape" />
                </filter>
              </defs>
            </svg>
            <div className='box wh-all'>
              <div className='wh-all'>
                <div className='col-in'>
                  <img className='icon' src={icon1} alt="" />
                  <div className='name'>Showcase</div>
                </div>
                <div className='line'></div>
                <div className='doc'>
                  Immortalize gamers' achievements on-chain, integrating them seamlessly into decentralized identities (DIDs). Every gaming milestone becomes a permanent, on-chain record.
                </div>
              </div>
            </div>
          </div>

          <div className={classNames(classes.item, 'fit-rel')}>
            <svg className='hvrBg fit-abs5' xmlns="http://www.w3.org/2000/svg" width="485" height="296" viewBox="0 0 485 296" fill="none">
              <g filter="url(#filter0_b_4207_2127)">
                <path d="M1 19C1 9.05888 9.05888 1 19 1H466C475.941 1 484 9.05888 484 19V277C484 286.941 475.941 295 466 295H19C9.05888 295 1 286.941 1 277V19Z" stroke="#0B1650" strokeWidth="2" />
              </g>
              <defs>
                <filter id="filter0_b_4207_2127" x="-1.43478" y="-1.43478" width="487.87" height="298.87" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.717391" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4207_2127" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4207_2127" result="shape" />
                </filter>
              </defs>
            </svg>
            <div className='box wh-all'>
              <div className='wh-all'>
                <div className='col-in'>
                  <img className='icon' src={icon2} alt="" />
                  <div className='name'>Rewards</div>
                </div>
                <div className='line'></div>
                <div className='doc'>
                  Gaming records become criteria for airdrops and closed beta testing selection. Accumulate valuable data while playing, turning your gaming journey into a treasure trove waiting to be uncovered.
                </div>
              </div>
            </div>
          </div>

          <div className={classNames(classes.item, 'fit-rel')}>
            <svg className='hvrBg fit-abs5' xmlns="http://www.w3.org/2000/svg" width="485" height="296" viewBox="0 0 485 296" fill="none">
              <g filter="url(#filter0_b_4207_2127)">
                <path d="M1 19C1 9.05888 9.05888 1 19 1H466C475.941 1 484 9.05888 484 19V277C484 286.941 475.941 295 466 295H19C9.05888 295 1 286.941 1 277V19Z" stroke="#0B1650" strokeWidth="2" />
              </g>
              <defs>
                <filter id="filter0_b_4207_2127" x="-1.43478" y="-1.43478" width="487.87" height="298.87" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.717391" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4207_2127" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4207_2127" result="shape" />
                </filter>
              </defs>
            </svg>
            <div className='box wh-all'>
              <div className='wh-all'>
                <div className='col-in'>
                  <img className='icon' src={icon3} alt="" />
                  <div className='name'>Social</div>
                </div>
                <div className='line'></div>
                <div className='doc'>
                  Data is the new profile picture. Web3 players enter social platforms adorned with on-chain badges, proudly displaying their gaming achievements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};