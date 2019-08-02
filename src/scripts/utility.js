import highlight from 'highlight.js'
/*
 * Only execute function fun once after a delay
 * @params fun        function to execute
 * @params delay      seconds to delay before execution
 * @return function   the function to be executed
 */
function Debounce(fun, delay) {
  let timer;

  return function() {
    let context = this;
    let args = arguments;

    clearTimeout(timer);

    timer = setTimeout(function () {
      fun.apply(context, args);
    }, delay)
  }
}

export default Debounce;