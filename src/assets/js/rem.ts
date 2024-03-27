import { isPc, setIsPc } from './tool';
import $ from 'jquery';

export const remInit = () => {
  setIsPc();
  let sizeW: number = (window.innerWidth / (isPc ? 1920 : 750)) * 10;
  let sizeH: number = (window.innerHeight / (isPc ? 1080 : 1336)) * 10;
  document.documentElement.style.fontSize = Math.min(sizeW, sizeH).toFixed(2) + 'px';
};

export const zoomInit = () => {
  const w = document.body.clientWidth;
  const h = document.body.clientHeight;

  $(".bgU").map((i, n) => {
    const wU = $(n).innerWidth();
    const hU = $(n).innerHeight();

    const wP = wU && w / wU;
    const hP = hU && h / hU;

    $(n).css({
      transform: `translate(-50%, -50%) scaleX(${wP}) scaleY(${hP})`
    });
    return n;
  });
}

export const fitInit = () => {
  remInit();
  zoomInit();
}

fitInit();
window.addEventListener('resize', fitInit);
window.addEventListener('pageshow', fitInit);