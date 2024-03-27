import $ from 'jquery';


const touchGap = 30; //window.innerHeight / 3;

export class touchUtil {
    static addHandler(element: any, type: string, handler: any) {
        $(element).on(type, handler);
    }
    static removeHandler(element: any, type: string, handler: any) {
        if (element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if (element.detachEvent)
            element.detachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    }
    static listenTouchDirection(
        target: any,
        isPreventDefault: boolean = false,
        upCallback?: (...args: any[]) => void,
        rightCallback?: (...args: any[]) => void,
        downCallback?: (...args: any[]) => void,
        leftCallback?: (...args: any[]) => void
    ) {
        this.addHandler(target, "touchstart", handleTouchEvent);
        this.addHandler(target, "touchend", handleTouchEvent);
        this.addHandler(target, "touchmove", handleTouchEvent);
        let startX: any;
        let startY: any;
        function handleTouchEvent(event: any) {
            switch (event.type) {
                case "touchstart":
                    startX = event.originalEvent.touches[0].pageX;
                    startY = event.originalEvent.touches[0].pageY;
                    break;
                case "touchend":
                    const spanX = event.originalEvent.changedTouches[0].pageX - startX;
                    const spanY = event.originalEvent.changedTouches[0].pageY - startY;

                    if (Math.abs(spanX) > Math.abs(spanY)) {

                        if (spanX > 30) {

                            if (rightCallback)
                                rightCallback();
                        } else if (spanX < -30) {

                            if (leftCallback)
                                leftCallback();
                        }
                    } else {

                        if (spanY > touchGap) {

                            if (downCallback)
                                downCallback();
                        } else if (spanY < -touchGap) {

                            if (upCallback)
                                upCallback();
                        }
                    }

                    break;
                case "touchmove":

                    if (isPreventDefault)
                        // event.preventDefault();
                        break;
            }
        }
    }
    static listenMouseDirection(target: any, upCallback?: (...args: any[]) => void, downCallback?: (...args: any[]) => void) {
        this.addHandler(target, "mousewheel DOMMouseScroll", handleTouchEvent);
        function handleTouchEvent(event: any) {
            const spanY = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            if (spanY > touchGap) {

                if (downCallback)
                    downCallback();
            } else if (spanY < -touchGap) {

                if (upCallback)
                    upCallback();
            }
        }
    }
}
