import classNames from 'classnames';
import { usePage10Style } from './usePage10Style';
import token from 'assets/img/page10/token.png';
import h5Token from '../../../../assets/img/page10/h5-token.png';
import tokenRight from 'assets/img/page10/token-right.png';
import h5TokenRight from 'assets/img/page10/h5-tokenRight.png';
import { useIsSMDown } from '../../../themes/useTheme';

export const Page10 = () => {
  const classes = usePage10Style();
  const mobile = useIsSMDown();
  return (
    <div id='page10' className={classNames(classes.root, 'flex-col5')}>

      <div className='title flex-in'>
        <span className='titleIdx'>01</span>
        <div className='titleGasp'>SLG Tokenomics</div>
      </div>
      <div className='scroll-box flex-col5'>
        <div className='subtitle'>Token Supply Allocation</div>
        <div className={classNames(classes.itemBox, 'row-in col-out')}>
          <img className={classes.tokenImg} src={!mobile ? token : h5Token} alt='' />
          <img className={classes.tokenRight} src={!mobile ? tokenRight : h5TokenRight} alt='' />
        </div>
      </div>
    </div>
  );
};
