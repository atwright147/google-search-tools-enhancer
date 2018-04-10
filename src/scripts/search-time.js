// const selected = document.querySelector('#top_nav').querySelector('.hdtbU.hdtb-mn-o')
// console.info(document.querySelector(selected));

// $(document).ready(() => {
//     console.info($('.hdtbU.hdtb-mn-o'));
// });

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.info(mutation);
    });
});
observer.observe(document, { childList: true });
