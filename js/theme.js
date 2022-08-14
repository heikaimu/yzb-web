/*
 * @Date: 2022-04-08 17:12:42
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-06-22 10:51:22
 * @FilePath: /school-gitlab/t-smart/js/theme.js
 */

$(function () {
  backTop();
  new WOW().init();

  customSelector();
  toggleWrapper({
    open: '[data-nav-open]',
    close: '[data-nav-close]',
    wrapper: '[data-nav-wrapper]',
    content: '[data-nav-content]'
  });
  toggleWrapper({
    open: '[data-menus-open]',
    close: '[data-menus-close]',
    wrapper: '[data-menus-wrapper]',
    content: '[data-menus-content]'
  });
  sideBarNav();
  mobileSearch();
  mainNavToggle();
});

// select
function customSelector() {
  $(".custom-selector").each(function () {
    const selector = $(this);
    const placeholder = $(this).find(".placeholder");
    const options = $(this).find(".options");
    placeholder.click(function () {
      $(".custom-selector .options").hide();
      options.show();
    });
  });

  $("body").bind("click", function (e) {
    if (["placeholder"].includes(e.target.className)) {
      return;
    }

    $(".custom-selector .options").hide();
  });
}

function mobileSearch() {
  $("[data-search-open]").on("click", function () {
    $("[data-search]").slideDown();
  });

  $("[data-search-close]").on("click", function () {
    $("[data-search]").slideUp();
  });
}

// 侧边导航
function sideBarNav() {
  $("[data-sidebar]")
    .find("[data-sidebar-item]")
    .each(function () {
      if ($(this).hasClass("active")) {
        $(this).find("[data-sidebar-sub]").show();
      }

      $(this).on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find("[data-sidebar-sub]").slideUp();
        } else {
          $(this).addClass("active").find("[data-sidebar-sub]").slideDown();
          $(this)
            .siblings()
            .removeClass("active")
            .find("[data-sidebar-sub]")
            .slideUp();
        }
      });
    });
}

// 主导航栏目
function mainNavToggle() {
  // 判断当前分辨率
  const wWidth = $("body").width();
  // PC效果
  if (wWidth > 990) {
    $("[data-nav]")
      .find("[data-nav-lv1]")
      .each(function () {
        const navOne = $(this);
        const navTwoBox = $(this).find("[data-nav-lv2-wrapper]");
        if (navTwoBox.length) {
          navOne.hover(
            function () {
              navTwoBox.show();
              navOne.find("[data-nav-lv1-text]").addClass("active");
            },
            function () {
              navTwoBox.hide();
              navOne.find("[data-nav-lv1-text]").removeClass("active");
            }
          );

          navTwoBox.find("[data-nav-lv2]").each(function () {
            const navTwo = $(this);
            const navThree = $(this).find("[data-nav-lv3-wrapper]");

            if (navThree.length) {
              navTwo.hover(
                function () {
                  navThree.show();
                },
                function () {
                  navThree.hide();
                }
              );
            }
          });
        }
      });
  } else {
    // 移动端效果
    $("[data-nav]")
      .find("[data-nav-lv1]")
      .each(function () {
        const navTwoOpenButton = $(this).find("[data-nav-lv2-open]");
        const navTwoBox = $(this).find("[data-nav-lv2-wrapper]");
        if (navTwoBox.length) {
          navTwoOpenButton.click(function () {
            if (navTwoBox.css("display") === "none") {
              navTwoBox.slideDown();
              navTwoOpenButton
                .removeClass("icon-plus")
                .addClass("icon-reduce1");
            } else {
              navTwoBox.slideUp();
              navTwoOpenButton
                .addClass("icon-plus")
                .removeClass("icon-reduce1");
            }
          });

          navTwoBox.find("[data-nav-lv2]").each(function () {
            const navTwoOpenButton = $(this).find("[data-nav-lv3-open]");
            const navThree = $(this).find("[data-nav-lv3-wrapper]");

            if (navThree.length) {
              navTwoOpenButton.click(function () {
                if (navThree.css("display") === "none") {
                  navThree.slideDown();
                  navTwoOpenButton
                    .removeClass("icon-plus")
                    .addClass("icon-reduce1");
                } else {
                  navThree.slideUp();
                  navTwoOpenButton
                    .addClass("icon-plus")
                    .removeClass("icon-reduce1");
                }
              });
            }
          });
        }
      });
  }
}

if ($(".web-header").hasClass("active")) {
  window.addEventListener("scroll", function () {
    const st = $(document).scrollTop();
    if (st > 300) {
      $(".web-header").addClass("scroll");
    } else {
      $(".web-header").removeClass("scroll");
    }
  });
}

$(".custom-selector").popover({
  title: '.custom-selector__input',
  content: '.custom-selector__options'
})

$('.popover').popover({
  title: '.popover__title',
  content: '.popover__content'
});

function toggleWrapper(options) {
  const open = $(options.open);
  const close = $(options.close);
  const wrapper = $(options.wrapper);
  const content = $(options.content);
  const html = $("html");

  open.click(function () {
    wrapper.addClass("active");
    html.css({ "overflow-y": "hidden" });
  });
  close.click(function () {
    wrapper.removeClass("active");
    html.css({ "overflow-y": "auto" });
  });
  wrapper.on("click", function () {
    wrapper.removeClass("active");
    html.css({ "overflow-y": "auto" });
  });
  content.on("click", function (e) {
    e.stopPropagation();
  });
}


// banner
$(function () {


  const bannerSwiper = new Swiper('#bannerSwiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 700,
    allowTouchMove: true,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: '#bannerPagination',
      clickable: true
    },
    navigation: {
      nextEl: '#bannerNext',
      prevEl: '#bannerPrev',
    },
  });


  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: "#thumNext",
      prevEl: "#thumPrev",
    },
  });


  const classSwiper = new Swiper('#classSwiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    grid: {
      fill: "row",
      rows: 3,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        grid: {
          fill: "row",
          rows: 2,
        },
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 45,
        grid: {
          fill: "row",
          rows: 1,
        },
      },
    },
    pagination: {
      el: '#classPagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#classNext',
      prevEl: '#classPrev',
    },
  });

  const researchSwiper = new Swiper('#researchSwiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 45,
      },
    },
    pagination: {
      el: '#researchPagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#researchNext',
      prevEl: '#researchPrev',
    },
  });

  const noticeSwiper = new Swiper('#noticeSwiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    grid: {
      fill: "row",
      rows: 4,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        grid: {
          fill: "row",
          rows: 3,
        },
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 45,
        grid: {
          fill: "row",
          rows: 2,
        },
      },
    },
    pagination: {
      el: '#noticePagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#noticeNext',
      prevEl: '#noticePrev',
    },
  });

  const websitSwiper = new Swiper('#websitSwiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    pagination: {
      el: '#websitPagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#websitNext',
      prevEl: '#websitPrev',
    },
  });

  const innerBannerSwiper = new Swiper('#innerBannerSwiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 700,
    allowTouchMove: true,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: '#innerBannerPagination',
      clickable: true
    },
  });

})
