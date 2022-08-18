/*
 * @Date: 2022-04-08 17:12:42
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-08-18 16:26:53
 * @FilePath: /haidi/js/theme.js
 */

$(function () {
  backTop();
  new WOW().init();

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
