document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide',
        {
            perPage: 4,
            rewind: true,
            gap: 20,
            cover: true,
            height: 120,
            pagination: false,
        }).mount();
});
