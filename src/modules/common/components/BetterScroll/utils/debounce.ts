export default function debounce(fn:any, wait:any) {
  let callback = fn;
  let timerId:any = null;

  function debounced() {

    // @ts-ignore
    let context = this;

    let args = arguments;

    clearTimeout(timerId);
    timerId = setTimeout(function() {
      callback.apply(context, args);
    }, wait);
  }


  return debounced;
}
