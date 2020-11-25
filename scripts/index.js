var slider = tns({
    container: '.slider-track',
    items: 2,
    slideBy: 1,
    controls: true,
    arrowKeys: true,
    rewind: true,
    touch: true,
    nav: false,
    edgePadding: 150,
    controlsContainer: '.slider-arrows'
});

if (window.innerWidth < 1200) {
    var slider = tns({
        container: '.slider-track',
        items: 2,
        slideBy: 1,
        controls: true,
        arrowKeys: true,
        rewind: true,
        touch: true,
        nav: false,
        controlsContainer: '.slider-arrows'
    });
}
if (window.innerWidth < 710) {
    var slider = tns({
        container: '.slider-track',
        items: 1,
        slideBy: 1,
        controls: true,
        arrowKeys: true,
        rewind: true,
        touch: true,
        nav: false,
        controlsContainer: '.slider-arrows',
        edgePadding: 50,


    });
}
if (window.innerWidth < 650) {
    var slider = tns({
        container: '.slider-track',
        items: 1,
        slideBy: 1,
        center: true,
        controls: true,
        arrowKeys: true,
        // rewind: true,
        touch: true,
        nav: false,
        controlsContainer: '.slider-arrows',
        // autoWidth: true,
        fixedWidth: 350
        // mode: 'gallery'
    });
}
if (window.innerWidth < 450) {
    var slider = tns({
        container: '.slider-track',
        items: 1,
        slideBy: 1,
        center: true,
        controls: true,
        arrowKeys: true,
        // rewind: true,
        touch: true,
        nav: false,
        controlsContainer: '.slider-arrows',
        // autoWidth: true,
        fixedWidth: 360
        // mode: 'gallery'
    });
}

document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('animated');
    document.querySelector('.nav-toggle').classList.toggle('toglled');
});