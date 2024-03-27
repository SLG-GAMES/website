import classNames from 'classnames';
import { usePage11Style } from './usePage11Style';
import token1 from 'assets/img/page10/token2.svg';
import h5Token1 from 'assets/img/page10/h5-token.svg';
import { useIsSMDown } from '../../../themes/useTheme';

export const Page11 = () => {
  const classes = usePage11Style();
  const mobile = useIsSMDown();

  return (
    <div id='page11' className={classNames(classes.root, 'flex-col5')}>

      <div className='title flex-in'>
        <span className='titleIdx'>02</span>
        <div className='titleGasp'>SLG Tokenomics</div>
      </div>
      <div className='scroll-box flex-col5'>

        <div className={classNames(classes.itemBox, 'row-in col-out')}>
          <div className='subtitle'>SLG Circulating Supply</div>
          <img src={!mobile ? token1 : h5Token1} alt='' />
        </div>
      </div>
    </div>
  );
};
