import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { useHeaderStyles } from './HeaderStyles';
import classNames from 'classnames';
import { Logo } from '../Logo';
import { Button } from 'modules/uiKit/Button';
import { NavLink } from 'react-router-dom';

import { useIsMDDown } from 'modules/themes/useTheme';

export const routers = [
  {
    link: '',
    title: 'About',
  },
  {
    link: '',
    title: 'Token',
  },
  {
    link: '',
    title: 'Order',
  },
  {
    link: '',
    title: 'Swap',
  },
  {
    link: '',
    title: 'Pools',
  },
];
export const Header = () => {
  const classes = useHeaderStyles();
  const mobile = useIsMDDown();
  const [scrollShow, setScrollShow] = useState<boolean>(false);
  useEffect(() => {
    async function scroll() {
      function scrollFn() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setScrollShow(scrollTop > 15);
      }

      scrollFn();
      window.addEventListener('scroll', scrollFn);
    }

    scroll();
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <header className={classNames(classes.root, scrollShow && 'bg')}>
      <Box className={classNames(classes.left)}>
        <Logo />
        {
          routers.map(d => {
            return (
              <Button
                key={d.title}
                component={NavLink}
                variant='text'
                className={classNames(classes.link)}
                activeclassname={classNames(classes.activeLink)}
                to={d.link}
              >
                {d.title}
              </Button>
            );
          })
        }
      </Box>
      <Box className={classNames(classes.right)}>
        {
          !mobile && <Box
            className={classNames(classes.button, 'app')}

          >
            Launch dApp

          </Box>
        }
      </Box>
    </header>
  );
};
