let slider = document.querySelector(".slider");
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');
let progressBar = document.querySelector('.progress__bar')
let sliderItem = document.querySelector('.slider__item')


slider.addEventListener("wheel", (e) => {
  slider.style.scrollBehavior = "auto";
  e.preventDefault();
  slider.scrollLeft += e.deltaY;
  moveProgress();
});

rightButton.addEventListener("click", (e) => {
  e.preventDefault();
  slider.scrollLeft += sliderItem.offsetWidth;
  moveProgress();
  
});
leftButton.addEventListener("click", (e) => {
  e.preventDefault();
  slider.scrollLeft -= sliderItem.offsetWidth;
  moveProgress();
  
});


function moveProgress() {
    const totalScroll = slider.scrollWidth - slider.clientWidth;
    const curscroll = slider.scrollLeft;
    procent = (curscroll / totalScroll) * 100
    if (procent != 0) {
      progressBar.style.width = (curscroll / totalScroll) * 100 + '%';
      if (procent >= 99) {
        document.querySelector('.right--button').style.display = 'block';
        document.querySelector('.right--button_active').style.display = 'none'
      } else {
        document.querySelector('.left--button').style.display = 'none';
        document.querySelector('.left--button_active').style.display = 'block'
        document.querySelector('.right--button').style.display = 'none';
        document.querySelector('.right--button_active').style.display = 'block'
      }
      document.querySelector('.left--button').style.display = 'none';
      document.querySelector('.left--button_active').style.display = 'block'
      
    } else {
      progressBar.style.width = '20%'
      document.querySelector('.left--button').style.display = 'block';
      document.querySelector('.left--button_active').style.display = 'none'
      document.querySelector('.right--button').style.display = 'none';
      document.querySelector('.right--button_active').style.display = 'block'
    }
   
}