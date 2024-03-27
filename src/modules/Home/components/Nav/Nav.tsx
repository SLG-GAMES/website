import { isPc } from 'assets/js/tool';
import { useNavStyle } from './useNavStyle';

import classNames from 'classnames';

export const Nav = () => {

  const classes = useNavStyle();
  return (
    <div className={classNames(classes.root, 'navBox col-in')}>
      <div className='fit-rel'>
        <div className='nav active' data-idx='0'>
          <span>Home</span>
        </div>
      </div>
      <div className='fit-rel'>
        <div className='nav' data-idx='1'>
          <span>Use-case</span>
        </div>
      </div>
      <div className='fit-rel'>
        <div className='nav' data-idx={isPc ? '2' : '3'}>
          <span>SDK</span>
        </div>
        <div className='dotBox flex-in'>
          <i className='dot' data-idx='2'></i>
          <i className='dot' data-idx='3'></i>
        </div>
      </div>
      <div className='fit-rel'>
        <div className='nav' data-idx={isPc ? '4' : '5'}>
          <span>Tools</span>
        </div>
        <div className='dotBox flex-in'>
          <i className='dot' data-idx='4'></i>
          <i className='dot' data-idx='5'></i>
        </div>
      </div>
      <div className='fit-rel'>
        <div className='nav' data-idx={isPc ? '6' : '7'}>
          <span>Dashboard</span>
        </div>
        <div className='dotBox flex-in'>
          <i className='dot' data-idx='6'></i>
          <i className='dot' data-idx='7'></i>
        </div>
      </div>
      <div className='fit-rel'>
        <div className='nav' data-idx='8'>
          <span>Data</span>
        </div>
      </div>

      <div className='fit-rel'>
        <div className='nav' data-idx={isPc ? '9' : '10'}>
          <span>Tokenomics</span>
        </div>
        <div className='dotBox flex-in'>
          <i className='dot' data-idx='9'></i>
          <i className='dot' data-idx='10'></i>
        </div>
      </div>
    </div>
  );
};
