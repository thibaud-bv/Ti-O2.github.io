function pad() {
    const themain = document.querySelector('.main');
    const navHeigth = document.querySelector('nav').offsetHeight;
    const navWidth = document.querySelector('nav').offsetWidth;
    if (window.innerWidth < 900) {
        themain.style.cssText += 'padding-top:' + navHeigth.toString() + "px";
        themain.style.cssText += 'padding-left: 7px;'
        console.log(navHeigth);
    } else {
        themain.style.cssText += 'padding-top:0px';
        themain.style.cssText += 'padding-left:' + navWidth.toString() + "px";
    }

}