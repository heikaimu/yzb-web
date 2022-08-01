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
