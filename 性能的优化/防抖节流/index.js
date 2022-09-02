const fangdou = document.querySelector(".fd");
const jieliu = document.querySelector(".jl");

function debounce(fn, time) {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this,...arguments);
    }, time);
  };
}

function Throttle(fn,time) {
    let previous = 0;
    return function (...args) {
        let now = Date.now();
        if(now - previous > time){
            previous = now;
            fn.apply(this,args)
        }
    }
}


function fdclick() {
  console.log("防抖点击");
}
function jlclick() {
  console.log("节流点击");
}

fangdou.addEventListener("click",debounce(fdclick, 1000));
jieliu.addEventListener("click", Throttle(jlclick,10000));
