export let isPc: boolean = window.innerWidth >= 768;

// @typescript-eslint/no-unused-vars
export const throttleTool = (fn: any, delay: number) => {
    var prev = Date.now();
    let that = this;
    return function () {
        var context = that;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            fn.apply(context, args);
            prev = Date.now();
        }
    }
}

// @typescript-eslint/no-unused-vars
// const debounceTool = (fn: any, wait: number) => {
//     var timeout: any = null;
//     return function () {
//         if (timeout !== null)
//             clearTimeout(timeout);
//         timeout = setTimeout(fn, wait);
//     }
// }

export const setIsPc = () => {
    isPc = window.innerWidth >= 768;
}

export const heightToTop = (ele: any) => {
    let root = document.body;
    let height = 0;
    do {
        height += ele.offsetTop;
        ele = ele.offsetParent;
    } while (ele !== root)
    return height;
};

export const stopScroll = () => {
    const mo = (e: any) => { e.preventDefault(); };
    document.body.style.overflow = 'hidden';
    document.addEventListener("touchmove", mo, false);
}

export const moveScroll = () => {
    const mo = (e: any) => { e.preventDefault(); };
    document.body.style.overflow = '';
    document.addEventListener("touchmove", mo, false);
}

export const scrollEvt = (event: any) => {
    let t = event.target.scrollTop;
    let h = event.target.clientHeight;
    let sh = event.target.scrollHeight;
    if (parseInt(t + h) === sh) {
        $(event.target).parents('.swiper-slide').removeClass('noSwiper');
    } else {
        $(event.target).parents('.swiper-slide').addClass('noSwiper');
    }
};

