const travelItem = document.querySelectorAll('.travel__item');
const travelItemTitle = document.querySelectorAll('.travel__item-title');
const travelItemTextWrapper = document.querySelectorAll('.travel__item-text-wrapper');

let heightWrapper = 0;

travelItemTextWrapper.forEach(elem => {
    if (heightWrapper < elem.scrollHeight)
        heightWrapper = elem.scrollHeight;
});

 travelItemTextWrapper[0].style.height = `${heightWrapper}px`;

travelItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < travelItem.length; i++) {
            if (index === i) {
                travelItemTextWrapper[i].style.height = `${heightWrapper}px`;
                if (!travelItem[i].classList.contains('travel__item_active')) {
                    travelItem[i].classList.add('travel__item_active');    
                }                
            }
            else {
                travelItem[i].classList.remove('travel__item_active');
                travelItemTextWrapper[i].style.height = '';
            }
        }
    });
});