import classNames from 'classnames';
import { usePage2Style } from './usePage2Style';
import { isPc } from 'assets/js/tool';
import 'assets/css/page2.css';
import { useIsSMDown } from '../../../themes/useTheme';
import metaCraftIcon from 'assets/img/page2/metaCraft-icon.png';
import cityTycoonGamesIcon from 'assets/img/page2/cityTycoonGames-icon.png';
import clashOfLilliputIcon from 'assets/img/page2/clashOfLilliput-icon.png';
import shatteredLegionIcon from 'assets/img/page2/shatteredLegion-icon.png';
import dangGoIcon from 'assets/img/page2/dangGo-icon.png';
import tapfantasyIcon from 'assets/img/page2/tapfantasy-icon.png';
import catparadiseIcon from 'assets/img/page2/catparadise-icon.png';
import pixelIcon from 'assets/img/page2/pixel-icon.png';
import retrocraftIcon from 'assets/img/page2/retrocraft-icon.png';
import cryptosamuraiIcon from 'assets/img/page2/cryptosamurai-icon.png';
import cryptogladiatorIcon from 'assets/img/page2/cryptogladiator-icon.png';
import thelandlordIcon from 'assets/img/page2/thelandlord-icon.png';
import genuniverseIcon from 'assets/img/page2/genuniverse-icon.png';
import puffverseIcon from 'assets/img/page2/puffverse-icon.png';
import anotherworldIcon from 'assets/img/page2/anotherworld-icon.png';


import metaCraft from 'assets/img/page2/metaCraft.png';
import cityTycoonGames from 'assets/img/page2/cityTycoonGames.png';
import clashOfLilliput from 'assets/img/page2/clashOfLilliput.png';
import shatteredLegion from 'assets/img/page2/slgWeb.png';
import dangGo from 'assets/img/page2/dangWeb.png';
import tapfantasy from 'assets/img/page2/tapfantasy.png';
import catparadise from 'assets/img/page2/catparadise.png';
import pixel from 'assets/img/page2/pixel.png';
import retrocraft from 'assets/img/page2/retrocraft.png';
import cryptosamurai from 'assets/img/page2/cryptosamurai.png';
import cryptogladiator from 'assets/img/page2/cryptogladiator.png';
import thelandlord from 'assets/img/page2/thelandlord.png';
import genuniverse from 'assets/img/page2/genuniverse.png';
import puffverse from 'assets/img/page2/puffverse.png';
import anotherworld from 'assets/img/page2/anotherworld.png';


import h5_metaCraft from 'assets/img/page2/h5_metaCraft.png';
import h5_cityTycoonGames from 'assets/img/page2/h5_cityTycoonGames.png';
import h5_clashOfLilliput from 'assets/img/page2/h5_clashOfLilliput.png';
import h5_shatteredLegion from 'assets/img/page2/slgH5.png';
import h5_dangGo from 'assets/img/page2/dangH5.png';
import h5_tapfantasy from 'assets/img/page2/h5_tapfantasy.png';
import h5_catparadise from 'assets/img/page2/h5_catparadise.png';
import h5_pixel from 'assets/img/page2/h5_pixel.png';
import h5_retrocraft from 'assets/img/page2/h5_retrocraft.png';
import h5_cryptosamurai from 'assets/img/page2/h5_cryptosamurai.png';
import h5_cryptogladiator from 'assets/img/page2/h5_cryptogladiator.png';
import h5_thelandlord from 'assets/img/page2/h5_thelandlord.png';
import h5_genuniverse from 'assets/img/page2/h5_genuniverse.png';
import h5_puffverse from 'assets/img/page2/h5_puffverse.png';
import h5_anotherworld from 'assets/img/page2/h5_anotherworld.png';


export const Page2 = () => {
  const classes = usePage2Style();
  const mobile = useIsSMDown();
  const dataLink = {
    metaCraft: 'https://www.metacraft.game/',
    cityTycoonGames: 'https://www.citytycoon.games/',
    clashOfLilliput: 'https://www.lilliput.games/#/',
    shatteredLegion: 'https://shattered.slg.games/#/home',
    dangGo: 'https://dango3.io/ja/#Home',
    tapfantasy: 'https://www.tapfantasy.io/#/',
    catparadise: 'https://www.catparadise.io/',
    pixelisland: 'https://pixelisland.xyz/',
    retrocraft: 'https://retrocraft.io/',
    cryptogladiator: 'https://www.cryptogladiator.biz/',
    thelandlord: 'https://thelandlord.games/#/',
    cryptosamurai: 'https://cryptosamurai.biz/#/home',
    genuniverse: 'https://www.genuniverse.io/',
    puffverse: 'https://puffverse.pro/',
    anotherworld:'https://www.anotherworld.game/'
  };

  return (
    <div id='page2' className={classNames(classes.root, 'flex-col5')}>
      <div className='title titleGasp'>GAMES</div>

      <div className={classNames(classes.arrowBox, 'cardList')}>
        <button className='cardList__btn btn btn--left'>
          <div className='icon'>
            <div className='prev'></div>
          </div>
        </button>

        <div className='cards__wrapper'>
          <a href={dataLink.metaCraft} target='_blank' rel='noopener noreferrer'>
            <div className='card previous--card'>
              <div className='card__image' card-idx='1'>
                <img className={classes.pointer} src={isPc ? metaCraft : h5_metaCraft} alt='' />
                <div className='name'>Metacraft</div>
              </div>
            </div>
          </a>
          <a href={dataLink.cityTycoonGames} target='_blank' rel='noopener noreferrer'>
            <div className='card current--card'>
              <div className='card__image' card-idx='2'>
                <img className={classes.pointer} src={isPc ? cityTycoonGames : h5_cityTycoonGames} alt='' />
                <div className='name'>City Tycoon Games</div>
              </div>
            </div>
          </a>

          <a href={dataLink.clashOfLilliput} target='_blank' rel='noopener noreferrer'>
            <div className='card next--card'>
              <div className='card__image' card-idx='3'>
                <img className={classes.pointer} src={isPc ? clashOfLilliput : h5_clashOfLilliput} alt='' />
                <div className='name'>Clash of lilliput</div>
              </div>
            </div>
          </a>

          <a href={dataLink.shatteredLegion} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='4'>
                <img className={classes.pointer} src={isPc ? shatteredLegion : h5_shatteredLegion} alt='' />
                <div className='name'>Shattered Legion</div>
              </div>
            </div>
          </a>

          <a href={dataLink.dangGo} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='5'>
                <img className={classes.pointer} src={isPc ? dangGo : h5_dangGo} alt='' />
                <div className='name'>Dango</div>
              </div>
            </div>
          </a>


          <a href={dataLink.tapfantasy} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='6'>
                <img className={classes.pointer} src={isPc ? tapfantasy : h5_tapfantasy} alt='' />
                <div className='name'>Tap Fantasy</div>
              </div>
            </div>
          </a>


          <a href={dataLink.catparadise} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='7'>
                <img className={classes.pointer} src={isPc ? catparadise : h5_catparadise} alt='' />
                <div className='name'>Cat Paradise</div>
              </div>
            </div>
          </a>


          <a href={dataLink.pixelisland} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='8'>
                <img className={classes.pointer} src={isPc ? pixel : h5_pixel} alt='' />
                <div className='name'>Pixel Island</div>
              </div>
            </div>
          </a>

          <a href={dataLink.retrocraft} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='9'>
                <img className={classes.pointer} src={isPc ? retrocraft : h5_retrocraft} alt='' />
                {mobile && <div className={classes.retrocraftLogo} />}
                <div className='name'>Retro Craft</div>
              </div>
            </div>
          </a>


          <a href={dataLink.cryptosamurai} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='10'>
                <img className={classes.pointer} src={isPc ? cryptosamurai : h5_cryptosamurai} alt='' />
                <div className='name'>Gameplay</div>
              </div>
            </div>
          </a>


          <a href={dataLink.cryptogladiator} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='11'>
                <img className={classes.pointer} src={isPc ? cryptogladiator : h5_cryptogladiator} alt='' />
                <div className='name'>Crypto Gladiator</div>
              </div>
            </div>
          </a>

          {
            false && <a href={dataLink.thelandlord} target='_blank' rel='noopener noreferrer'>
              <div className='card'>
                <div className='card__image' card-idx='12'>
                  <img className={classes.pointer} src={isPc ? thelandlord : h5_thelandlord} alt='' />
                  <div className='name'>Landlord</div>
                </div>
              </div>
            </a>
          }

          <a href={dataLink.genuniverse} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='13'>
                <img className={classes.pointer} src={isPc ? genuniverse : h5_genuniverse} alt='' />
                <div className='name'>Genesis Universe</div>
              </div>
            </div>
          </a>
          <a href={dataLink.puffverse} target='_blank' rel='noopener noreferrer'>
            <div className='card'>
              <div className='card__image' card-idx='14'>
                <img className={classes.pointer} src={isPc ? puffverse : h5_puffverse} alt='' />
                <div className='name'>PUFF</div>
              </div>
            </div>
          </a>


           <a href={dataLink.anotherworld} target='_blank' rel='noopener noreferrer'>
              <div className='card'>
                <div className='card__image' card-idx='15'>
                  <img className={classes.pointer} src={isPc ? anotherworld : h5_anotherworld} alt='' />
                  <div className='name'>Another World</div>
                </div>
              </div>
            </a>



        </div>

        <button className='cardList__btn btn btn--right'>
          <div className='icon'>
            <div className='next'></div>
          </div>
        </button>
      </div>

      <div className={classNames(classes.line)}></div>
      <div id='page2_iconBox' className={classNames(classes.iconBox, 'flex-in')}>
        <div className='icon' card-idx='0'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={metaCraftIcon} alt='' />
        </div>
        <div className='icon active' card-idx='1'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={cityTycoonGamesIcon} alt='' />
        </div>
        <div className='icon' card-idx='2'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={clashOfLilliputIcon} alt='' />
        </div>
        <div className='icon' card-idx='3'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={shatteredLegionIcon} alt='' />
        </div>
        <div className='icon' card-idx='4'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={dangGoIcon} alt='' />
        </div>
        <div className='icon' card-idx='5'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={tapfantasyIcon} alt='' />
        </div>
        <div className='icon' card-idx='6'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={catparadiseIcon} alt='' />
        </div>

        <div className='icon' card-idx='7'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={pixelIcon} alt='' />
        </div>
        <div className='icon' card-idx='8'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={retrocraftIcon} alt='' />
        </div>

        <div className='icon' card-idx='9'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={cryptosamuraiIcon} alt='' />
        </div>


        <div className='icon' card-idx='10'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={cryptogladiatorIcon} alt='' />
        </div>

        {
          false && <div className='icon' card-idx='11'>
            <i className='wh-all fit-abs5'></i>
            <img className='fit-abs5' src={thelandlordIcon} alt='' />
          </div>
        }


        <div className='icon' card-idx='12'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={genuniverseIcon} alt='' />
        </div>
        <div className='icon' card-idx='13'>
          <i className='wh-all fit-abs5'></i>
          <img className='fit-abs5' src={puffverseIcon} alt='' />
        </div>

          <div className='icon' card-idx='14'>
            <i className='wh-all fit-abs5'></i>
            <img className='fit-abs5' src={anotherworldIcon} alt='' />
          </div>

      </div>
    </div>
  );
};

