const docEl = document.documentElement;
const fly = document.createElement('div');
let wheel = 0;
let scroll = scrollY;
let transform = '';

fly.style.cssText = `
  position:fixed;
  width: 50px;
  height: 50px;
  right:0;
  bottom: 0;
  pointer-events: none;
  background: url('img/airplane.svg') center/contain no-repeat;
  `;


window.addEventListener('scroll', (e) =>{ 
if ((scroll - scrollY  <= 0) && (wheel !== 1))
{
  console.log('вниз'); 
  transform = '';
  wheel = 1;
}
else if ((scroll - scrollY > 0) && (wheel !== -1))
{
  console.log('вверх'); 
  transform = 'rotate(180deg)';
  wheel = -1;
}
scroll = scrollY;
});



document.body.append(fly);

const calcPositionFly = () => {
const maxHeight = docEl.clientHeight - fly.clientHeight;
const maxScroll = docEl.scrollHeight - docEl.clientHeight;
const percentScroll = (window.scrollY * 100) / maxScroll;
const height = maxHeight * (percentScroll / 100);
fly.style.transform = `translateY(${-height}px)${transform}`;
console.log(fly.style.transform);
};

window.addEventListener('scroll', calcPositionFly);

calcPositionFly();
