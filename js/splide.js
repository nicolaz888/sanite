document.addEventListener('DOMContentLoaded', function () {

    let perPage = 4;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        perPage = 1;
    }

    new Splide('.splide',
        {
            perPage: perPage,
            rewind: true,
            gap: 20,
            cover: true,
            height: 120,
            pagination: false,
        }).mount();
});
