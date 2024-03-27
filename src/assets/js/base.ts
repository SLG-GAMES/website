import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { touchUtil } from './touchUtil';
import { isPc, throttleTool } from './tool';
import { fitInit } from './rem';
import $ from 'jquery';
// import imagesloaded from 'imagesloaded';
// import './jquery.textillate';


gsap.registerPlugin(ScrollTrigger);

let idx_page = 0, scroll_stop = false, idx_page5 = 0, z = 0;

let tl = gsap.timeline({
  defaults: { duration: .8, ease: 'ease' }, onComplete() {
    scroll_stop = false;
  },
});

const page2init = () => {
  // console.clear();

  const buttons = {
    prev: document.querySelector('.btn--left'),
    next: document.querySelector('.btn--right'),
  };

  const cardBox = $('#page2 .cards__wrapper');
  const max = cardBox.find('.card').length - 1;
  let idx = 1;

  buttons.next && buttons.next.addEventListener('click', () => swapCards('right'));

  buttons.prev && buttons.prev.addEventListener('click', () => swapCards('left'));

  function idxInit(i: number) {
    return i < 0 ? max : (i > max ? 0 : i);

    // return i < 0 ? 0 : (i > max ? max : i);
  }

  function swapCards(direction: any) {

    removeCardEvents(cardBox.find('.card').eq(idx)[0]);

    if (direction === 'left') {
      idx = idxInit(idx + 1);
    } else if (direction === 'right') {
      idx = idxInit(idx - 1);
    }

    const prev = idxInit(idx - 1);
    const next = idxInit(idx + 1);


    const currentCardEl = cardBox.find('.card').eq(idx);
    // const previousCardEl = currentCardEl.prev();
    // const nextCardEl = currentCardEl.next();
    const previousCardEl = cardBox.find('.card').eq(prev);
    const nextCardEl = cardBox.find('.card').eq(next);

    changeInfo();
    swapCardsClass();

    function swapCardsClass() {
      $('#page2_iconBox .icon').removeClass('active');
      $('#page2_iconBox .icon').eq(idx).addClass('active');
      cardBox.find('.card').removeClass('current--card');

      cardBox.find('.card').removeClass('next--card');
      cardBox.find('.card').removeClass('previous--card');

      // currentCardEl.removeClass("next--card");
      // currentCardEl.removeClass("previous--card");
      // nextCardEl.removeClass("next--card");
      // nextCardEl.removeClass("previous--card");
      // previousCardEl.removeClass("next--card");
      // previousCardEl.removeClass("previous--card");

      previousCardEl.addClass('previous--card');
      currentCardEl.addClass('current--card');
      nextCardEl.addClass('next--card');

      z++;

      if (direction === 'right') {
        $(previousCardEl).css('z-index', z + 1);
        $(nextCardEl).css('z-index', z + 2);

      } else if (direction === 'left') {
        $(previousCardEl).css('z-index', z + 2);
        $(nextCardEl).css('z-index', z + 1);
      }

      $(currentCardEl).css('z-index', z + 3);
    }
  }


  function changeInfo() {
    gsap.timeline()
      .to([buttons.prev, buttons.next], {
        duration: 0.2,
        opacity: 0.5,
        pointerEvents: 'none',
      })
      .call(() => {
      })
      .call(() => {
        initCardEvents();
        cardBox.find('.card').removeClass('notransition');
      })
      .to([buttons.prev, buttons.next], {
        duration: 0.2,
        opacity: 1,
        pointerEvents: 'all',
      });
  }

  function updateCard(e: any) {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const centerPosition = {
      x: box.left + box.width / 2,
      y: box.top + box.height / 2,
    };
    let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
    gsap.set(card, {
      '--current-card-rotation-offset': `${angle}deg`,
    });
  }

  function resetCardTransforms(e: any) {
    const card = e.currentTarget;
    gsap.set(card, {
      '--current-card-rotation-offset': 0,
    });
  }

  function initCardEvents() {
    const currentCardEl = cardBox && cardBox.find('.current--card')[0];
    currentCardEl && currentCardEl.addEventListener('pointermove', updateCard);
    currentCardEl && currentCardEl.addEventListener('pointerout', (e) => {
      resetCardTransforms(e);
    });
  }

  function removeCardEvents(card: any) {
    card.removeEventListener('pointermove', updateCard);
  }

  initCardEvents();

  // function changeCard(i: number) {
  //     if (i != idx) {
  //         if (i < idx) {
  //             (buttons.next as HTMLElement).click();
  //         } else if (i > idx) {
  //             (buttons.prev as HTMLElement).click();
  //         }
  //         setTimeout((i) => {
  //             changeCard(i)
  //         }, 1, i);
  //     }
  // }


  $('#page2_iconBox .icon').on('click', function() {

    idx = $(this).index();

    removeCardEvents(cardBox.find('.card').eq(idx)[0]);

    const prev = idxInit(idx - 1);
    const next = idxInit(idx + 1);

    const currentCardEl = cardBox.find('.card').eq(idx);
    const previousCardEl = cardBox.find('.card').eq(prev);
    const nextCardEl = cardBox.find('.card').eq(next);

    changeInfo();
    swapCardsClass();

    function swapCardsClass() {

      $('#page2_iconBox .icon').removeClass('active');
      $('#page2_iconBox .icon').eq(idx).addClass('active');

      cardBox.find('.card').addClass('notransition');
      cardBox.find('.card').removeClass('next--card');
      cardBox.find('.card').removeClass('current--card');
      cardBox.find('.card').removeClass('previous--card');

      previousCardEl.addClass('previous--card');
      currentCardEl.addClass('current--card');
      nextCardEl.addClass('next--card');
    }

    return;
  });
};

const upEvent = () => {
  // console.log('top')

  let scrollNode = $('.page').eq(idx_page).find('.scroll-box');
  let judge = true;
  if (!isPc && scrollNode.length) {
    let sh = scrollNode[0].scrollHeight;
    let h = scrollNode[0].clientHeight;
    let t = scrollNode[0].scrollTop;
    judge = Math.ceil(t + h) >= sh;
  }


  if (!scroll_stop && idx_page < $('.page').length - 1 && judge) {
    if (isPc && idx_page === 5 && idx_page5 < 3) {
      sideGsap(idx_page5 + 1, idx_page5);
    } else {
      let dif = 1;

      if (!isPc) {
        dif = idx_page + dif === 2 || idx_page + dif === 4 || idx_page + dif === 6 ? 2 : dif;
      }

      fadeGsap(idx_page + dif, idx_page);
    }
  }
};

const downEvent = () => {
  // console.log('bottom')

  let t = $('.page').eq(idx_page).find('.scroll-box').scrollTop();
  let judge = t ? t <= 0 : true;


  if (!scroll_stop && idx_page > 0 && judge) {
    if (isPc && idx_page === 5 && idx_page5 > 0) {
      sideGsap(idx_page5 - 1, idx_page5);
    } else {
      let dif = 1;

      if (!isPc) {
        dif = idx_page - dif === 2 || idx_page - dif === 4 || idx_page - dif === 6 ? 2 : dif;
      }

      fadeGsap(idx_page - dif, idx_page);
    }
  }
};

const sideGsap = (in_idx: number, out_idx: number) => {
  idx_page5 = Number(in_idx);

  $('#page5 .dot').removeClass('active');
  $('#page5 .dot').eq(in_idx).addClass('active');
  $('#page5 .boxL .side').eq(in_idx).fadeIn();
  $('#page5 .boxL .side').eq(out_idx).fadeOut();
  $('#page5 .boxR .side').eq(in_idx).fadeIn();
  $('#page5 .boxR .side').eq(out_idx).fadeOut();
};

const rightEvent = () => {
  // console.log('right');

  if (idx_page === 5) {
    let in_idx = idx_page5 <= 0 ? 3 : idx_page5 - 1;
    // if (idx_page === 5 && idx_page5 > 0) {
    sideGsap(in_idx, idx_page5);
  }
};

const leftEvent = () => {
  // console.log('left');

  if (idx_page === 5) {
    let in_idx = idx_page5 >= 3 ? 0 : idx_page5 + 1;
    // if (idx_page === 5 && idx_page5 < 3) {
    sideGsap(in_idx, idx_page5);
  }
};

const fadeGsap = (in_idx: number, out_idx: number) => {
  scroll_stop = true;

  idx_page = Number(in_idx);


  $('.navBox .nav').removeClass('active');
  $('.navBox .dot').removeClass('active');
  if (isPc) {
    switch (idx_page) {
      // case 10:
      //   $('.navBox .nav[data-idx=9]').addClass('active');
      //   break;
      case 7:
        $('.navBox .nav[data-idx=6]').addClass('active');
        break;
      case 5:
        $('.navBox .nav[data-idx=4]').addClass('active');
        break;
      case 3:
        $('.navBox .nav[data-idx=2]').addClass('active');
        break;
      default:
        $(`.navBox .nav[data-idx=${idx_page}]`).addClass('active');
    }

    $(`.navBox .dot[data-idx=${idx_page}]`).addClass('active');
  } else {
    $(`.navBox .nav[data-idx=${idx_page}]`).addClass('active');
    if (Number(idx_page)===9){
      $('.navBox .nav[data-idx=10]').addClass('active');
    }
    if (Number(in_idx) >= 4) {
      $('.navBox').scrollLeft($('.navBox')[0].scrollWidth)
    }else {
      $('.navBox').scrollLeft(0)
    }
  }

  if (idx_page) {
    $('.appBtn').show();
  } else {
    // $('.appBtn').hide();
  }

  $('.page').eq(idx_page).addClass('show');
  $('.page').eq(out_idx).addClass('show');
  $('.main').removeClass('bgWrite');
  $('.main').removeClass('bgBlack');
  $('.main').addClass($('.page').eq(idx_page).attr('data-bg') || '');

  tl
    .fromTo($('.page').eq(idx_page), { opacity: 0 }, { opacity: 1, zIndex: 1 })
    .fromTo($('.page').eq(out_idx), { opacity: 1 }, { opacity: 0, zIndex: 0 }, '<');

  animateInit(in_idx, out_idx);
};

const animateInit = (in_idx: number, out_idx: number) => {

  $('.page').eq(in_idx).find('.animate__animated').map((i, n) => {
    let name = $(n).attr('data-animate');
    $(n).addClass(name || '');
    return name;
  });

  $('.page').eq(out_idx).find('.animate__animated').map((i, n) => {
    let name = $(n).attr('data-animate');
    $(n).removeClass(name || '');
    return name;
  });
};

const titleGasp = () => {
  $('.titleGasp').map((i, n: any) => {
    let box = $('<div></div>');
    $(n).html().split('<br>').map(str => {
      let n = $('<div></div>');
      let sub = $('<div></div>');
      sub.text(str);
      sub.addClass('animate__animated');
      sub.attr('data-animate', 'animate__fadeIn');
      n.append(sub);
      n.css({
        overflow: 'hidden',
      });
      box.append(n);
      return str;
    });
    $(n).html(box.html());
    return n;
  });
};

export const init = () => {
  let search=window.location.search;
  if (search && search.includes('n=tokenomics')){
    idx_page=9;
  }
  fitInit();
  titleGasp();
  // $('.appBtn').hide();
  $('.page').removeClass('show');
  $('.page').eq(idx_page).addClass('show');
  $('.main').removeClass('bgWrite');
  $('.main').removeClass('bgBlack');
  $('.main').addClass($('.page').eq(idx_page).attr('data-bg') || '');

  $('.navBox .nav').removeClass('active');
  $(`.navBox [data-idx=${idx_page}]`).addClass('active');

  $('.navBox .nav').on('click', function() {
    let idx = Number($(this).attr('data-idx'));
    fadeGsap(idx, idx_page);
  });

  animateInit(idx_page, -1);
  touchUtil.listenMouseDirection(document, throttleTool(upEvent, 1000), throttleTool(downEvent, 1000));
  touchUtil.listenTouchDirection(document, true, throttleTool(upEvent, 1000), () => {
  }, throttleTool(downEvent, 1000), () => {
  });
  $('#page5 .prev').on('click', function() {
    rightEvent();
  });

  $('#page5 .next').on('click', function() {
    leftEvent();
  });

  $('#page5 .dot').on('click', function() {
    sideGsap($(this).index(), idx_page5);
  });

  $('#arrow').on('click', function() {
    upEvent();
  });

  $('.navBox .dot').on('click', function() {
    let idx = Number($(this).attr('data-idx'));
    fadeGsap(idx, idx_page);
  });

  page2init();
};
