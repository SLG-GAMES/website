import { useRef, useImperativeHandle, MutableRefObject } from 'react';
import classNames from 'classnames';
import { usePage1Style } from './usePage1Style';
import { LaunchApp, methods } from '../LaunchApp';

interface Page1Props {
  events?: MutableRefObject<methods>
}

export const Page1 = ({ events }: Page1Props) => {
  const classes = usePage1Style();
  const ref = useRef({} as methods);
  useImperativeHandle(events, () => ({
    onClose: () => {
      ref.current.onClose();
    },
  }));
  return (
    <div id='page1' className={classNames(classes.root, 'flex-col4 fit-rel')}>
      <div className={classNames(classes.bgBox, 'bgU fit-abs5 fit-pc events-none')}>
        <svg className='line1' xmlns='http://www.w3.org/2000/svg' width='1845' height='490' viewBox='0 0 1845 490'
             fill='none'>
          <path d='M1 357.525C133.108 394.931 1429.49 786.525 1843 1' stroke='#0B1338' strokeWidth='3.22187' />
        </svg>
        <svg className='line2' xmlns='http://www.w3.org/2000/svg' width='1049' height='518' viewBox='0 0 1049 518'
             fill='none'>
          <path fillRule='evenodd' clipRule='evenodd'
                d='M747.006 18.3334C685.034 1.63945 622.44 -2.03668 562.094 2.61936C411.785 14.2165 281.919 100.568 184.416 205.041C86.9197 309.506 21.5882 432.293 0.432617 517.152L3.55881 517.931C24.5586 433.697 89.5758 311.382 186.771 207.239C283.959 103.104 413.126 17.3445 562.342 5.83169C622.217 1.21203 684.299 4.83159 745.771 21.3359L747.006 18.3334ZM866.755 72.7121C930.609 111.071 991.596 167.878 1046.22 248.901L1048.89 247.1C993.865 165.481 932.381 108.286 867.995 69.6973L866.755 72.7121Z'
                fill='#0B1338' />
        </svg>
        <svg className='line3' xmlns='http://www.w3.org/2000/svg' width='364' height='689' viewBox='0 0 364 689'
             fill='none'>
          <path d='M363 2C129.991 66.8757 -53.3236 360.017 17.352 688' stroke='#0B1338' strokeWidth='3.22187' />
        </svg>
        <svg className='line4' xmlns='http://www.w3.org/2000/svg' width='441' height='681' viewBox='0 0 441 681'
             fill='none'>
          <path d='M439 0C439 171.258 405.818 476.385 1 679' stroke='#0B1338' strokeWidth='3.22187' />
        </svg>
        <svg className='circle1' xmlns='http://www.w3.org/2000/svg' width='57' height='57' viewBox='0 0 57 57'
             fill='none'>
          <circle cx='28.1124' cy='28.6553' r='27.3859' stroke='#0B1338' strokeWidth='1.07396' />
          <circle cx='28.1127' cy='28.6552' r='20.4052' stroke='#0B1338' strokeWidth='4.29583' />
        </svg>
        <svg className='circle2' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'
             fill='none'>
          <g opacity='0.8'>
            <circle cx='9.84049' cy='10.2384' r='4.29583' stroke='#0B1338' strokeWidth='2.14792' />
            <circle cx='9.84043' cy='10.2384' r='9.12865' stroke='#0B1338' strokeWidth='1.07396' />
          </g>
        </svg>
        <svg className='circle3' xmlns='http://www.w3.org/2000/svg' width='22' height='23' viewBox='0 0 22 23'
             fill='none'>
          <circle cx='10.848' cy='11.6844' r='10.2026' stroke='#0B1338' strokeWidth='1.07396' />
          <circle cx='10.848' cy='11.6844' r='5.36971' stroke='#0B1338' strokeWidth='2.14792' />
        </svg>
        <svg className='circle4' xmlns='http://www.w3.org/2000/svg' width='57' height='57' viewBox='0 0 57 57'
             fill='none'>
          <circle cx='28.1314' cy='28.8521' r='27.3859' stroke='#0B1338' strokeWidth='1.07396' />
          <circle cx='28.1313' cy='28.852' r='20.4052' stroke='#0B1338' strokeWidth='4.29583' />
        </svg>
        <svg className='dot1' xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 0 5 5' fill='none'>
          <circle cx='2.84176' cy='2.84274' r='2.14792' fill='#0B1338' />
        </svg>
        <svg className='dot2' xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 9 9' fill='none'>
          <circle cx='4.47223' cy='4.29645' r='3.75885' fill='#0B1338' />
        </svg>
        <svg className='dot3' xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
          <circle cx='3.8819' cy='3.93171' r='3.75885' fill='#0B1338' />
        </svg>
        <svg className='dot4' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
          <circle cx='6.00407' cy='6.02311' r='5.36979' fill='#0B1338' />
        </svg>
        <svg className='dot5' xmlns='http://www.w3.org/2000/svg' width='11' height='10' viewBox='0 0 11 10' fill='none'>
          <circle cx='5.80547' cy='4.82988' r='4.83281' fill='#0B1338' />
        </svg>
        <svg className='dot6' xmlns='http://www.w3.org/2000/svg' width='5' height='6' viewBox='0 0 5 6' fill='none'>
          <circle cx='2.71237' cy='2.88424' r='2.14792' fill='#0B1338' />
        </svg>
        <svg className='dot7' xmlns='http://www.w3.org/2000/svg' width='5' height='6' viewBox='0 0 5 6' fill='none'>
          <circle cx='2.59079' cy='3.13766' r='2.14792' fill='#0B1338' />
        </svg>
        <svg className='dot7' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
          <circle cx='5.75846' cy='5.75846' r='5.36979' fill='#0B1338' />
        </svg>
        <svg className='triangle' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
             fill='none'>
          <path d='M0.980006 10.0413L23.8341 0.351854L21.2676 23.3428L0.980006 10.0413Z' fill='#0B1338' />
        </svg>

        <div className='mark1'>
          <svg className='wh-all' xmlns='http://www.w3.org/2000/svg' width='119' height='119' viewBox='0 0 119 119'
               fill='none'>
            <circle cx='59.807' cy='59.1351' r='52.624' stroke='#0B1338' strokeWidth='12.8875' />
          </svg>
          <span className='flex-in wh-all fit-abs5'>Visualized</span>
        </div>
        <div className='mark2 fit-rel'>
          <svg className='wh-all animate__animated' data-animate='animate__fadeOut' xmlns='http://www.w3.org/2000/svg'
               width='138' height='139' viewBox='0 0 138 139' fill='none'>
            <circle cx='68.9081' cy='69.4238' r='68.0621' stroke='#0B1338' strokeWidth='1.34245' />
            <circle cx='68.9085' cy='69.4241' r='57.9937' stroke='#0B1338' strokeWidth='10.7396' />
          </svg>
          <span className='flex-in wh-all fit-abs5'>compossible</span>
        </div>
        <div className='mark3 fit-rel'>
          <svg className='wh-all animate__animated' data-animate='animate__fadeOut' xmlns='http://www.w3.org/2000/svg'
               width='192' height='192' viewBox='0 0 192 192' fill='none'>
            <circle cx='95.6848' cy='96.3733' r='94.9111' stroke='#0B1338' strokeWidth='1.34245' />
            <circle cx='95.6847' cy='96.3732' r='82.6948' stroke='#0B1338' strokeWidth='10.7396' />
          </svg>
          <span className='flex-in wh-all fit-abs5'>Modular</span>
        </div>
      </div>
      <div className={classNames(classes.bgBox, 'bgU fit-abs5 fit-h5')}>
        <div className='mark1'>
          <svg className='wh-all' xmlns='http://www.w3.org/2000/svg' width='119' height='119' viewBox='0 0 119 119'
               fill='none'>
            <circle cx='59.807' cy='59.1351' r='52.624' stroke='#0B1338' strokeWidth='12.8875' />
          </svg>
          <span className='flex-in wh-all fit-abs5'>Visualized</span>
        </div>
        <div className='mark2 fit-rel'>
          <svg className='wh-all animate__animated' data-animate='animate__fadeOut' xmlns='http://www.w3.org/2000/svg'
               width='138' height='139' viewBox='0 0 138 139' fill='none'>
            <circle cx='68.9081' cy='69.4238' r='68.0621' stroke='#0B1338' strokeWidth='1.34245' />
            <circle cx='68.9085' cy='69.4241' r='57.9937' stroke='#0B1338' strokeWidth='10.7396' />
          </svg>
          <span className='flex-in wh-all fit-abs5'>compossible</span>
        </div>
        <div className='mark3 fit-rel'>
          <svg className='wh-all animate__animated' data-animate='animate__fadeOut' xmlns='http://www.w3.org/2000/svg'
               width='192' height='192' viewBox='0 0 192 192' fill='none'>
            <circle cx='95.6848' cy='96.3733' r='94.9111' stroke='#0B1338' strokeWidth='1.34245' />
            <circle cx='95.6847' cy='96.3732' r='82.6948' stroke='#0B1338' strokeWidth='10.7396' />
          </svg>
          <span className='flex-in wh-all fit-abs5'>Modular</span>
        </div>
        <svg className='line1' xmlns='http://www.w3.org/2000/svg' width='573' height='47' viewBox='0 0 573 47'
             fill='none'>
          <path fillRule='evenodd' clipRule='evenodd'
                d='M272.031 42.154C271.855 43.1553 271.656 44.1485 271.434 45.1332C366.906 48.5493 471.934 44.1846 572.026 23.1994L571.41 20.2633C471.754 41.1573 367.165 45.5313 272.031 42.154ZM145.034 33.1006C45.907 22.6556 -30.0332 7.06235 -58.2705 1.26423L-58.2706 1.26421C-60.5063 0.805133 -62.443 0.407462 -64.0685 0.0786133L-64.6633 3.01904C-63.0351 3.34844 -61.0929 3.74732 -58.8489 4.20817C-30.5612 10.0176 45.6778 25.6748 145.203 36.1354C145.123 35.1302 145.067 34.1184 145.034 33.1006Z'
                fill='#0B1338' />
        </svg>
        <svg className='line2' xmlns='http://www.w3.org/2000/svg' width='621' height='392' viewBox='0 0 621 392'
             fill='none'>
          <path fillRule='evenodd' clipRule='evenodd'
                d='M393.336 22.7881C393.425 23.8114 393.531 24.8298 393.654 25.8429C307.503 54.3168 231.756 106.546 170.133 166.499C169.173 166.028 168.199 165.581 167.212 165.157C229.361 104.498 306.002 51.5209 393.336 22.7881ZM87.266 257.187C43.0642 317.367 13.111 377.337 0.551514 423.607L3.44675 424.393C15.8314 378.767 45.3629 319.503 89.0032 259.891C88.4023 259.005 87.8229 258.104 87.266 257.187ZM744.743 43.685C687.544 17.6917 628.36 5.66476 570.205 3.05493C570.069 2.0417 569.916 1.03387 569.747 0.0317383C628.414 2.60071 688.19 14.6897 745.984 40.9538C826.016 77.3236 902.161 140.835 966.272 243.707L963.726 245.294C899.901 142.881 824.193 79.7901 744.743 43.685Z'
                fill='#0B1338' />
        </svg>
        <svg className='line3' xmlns='http://www.w3.org/2000/svg' width='241' height='466' viewBox='0 0 241 466'
             fill='none'>
          <path fillRule='evenodd' clipRule='evenodd'
                d='M57.7451 164.433C56.8958 163.899 56.0561 163.352 55.2264 162.792C-0.757078 260.554 -19.1592 387.156 25.6566 514.867L28.4874 513.874C-16.0153 387.055 2.25168 261.429 57.7451 164.433ZM176.731 36.3061C196.996 23.0254 218.491 12.0335 240.907 3.66147L239.858 0.851074C217.16 9.32792 195.406 20.4609 174.907 33.9126C175.528 34.6998 176.137 35.4977 176.731 36.3061Z'
                fill='#0B1338' />
        </svg>
        <svg className='line4' xmlns='http://www.w3.org/2000/svg' width='172' height='408' viewBox='0 0 172 408'
             fill='none'>
          <path d='M311.332 0C311.332 110.925 287.822 308.56 1 439.795' stroke='#0B1338' strokeWidth='3' />
        </svg>
        <svg className='circle1' xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'
             fill='none'>
          <circle cx='14.7502' cy='14.7502' r='14.2502' stroke='#0B1338' />
          <circle cx='14.7497' cy='14.7499' r='7.85' stroke='#0B1338' strokeWidth='2' />
        </svg>
        <svg className='circle2' xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'
             fill='none'>
          <circle cx='14.7502' cy='14.7502' r='14.2502' stroke='#0B1338' />
          <circle cx='14.7497' cy='14.7499' r='7.85' stroke='#0B1338' strokeWidth='2' />
        </svg>
        <svg className='dot1' xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'>
          <circle cx='5' cy='5' r='5' fill='#0B1338' />
        </svg>
        <svg className='dot2' xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'>
          <circle cx='5' cy='5' r='5' fill='#0B1338' />
        </svg>
        <svg className='dot3' xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'>
          <circle cx='5' cy='5' r='5' fill='#0B1338' />
        </svg>
      </div>
      <div className='title titleGasp'>
        Powering web3 gaming
        <br />
        with the all-in-one SLG.Games
      </div>
      <div className='subtitle'>Empower your game development journey, whether you're an indie coder or part of a major
        studio. SLG offers cutting-edge tools and resources tailored for success in the booming Web3 industry. Elevate
        your game ‒ join us now!
      </div>
      <LaunchApp methods={ref} />
    </div>
  );
};
