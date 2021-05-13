$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<img src='./img/arrow-left.png'>",
    "<img src='./img/arrow-right.png'>",
  ],
  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
});
const viewmanage = function () {
  window.location.assign(`manage`);
};
