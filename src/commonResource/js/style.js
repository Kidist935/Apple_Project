import $ from "jquery";
export const initializeFooterLinks = () => {
  $(document).ready(function () {
    $(".footer-links-wrapper .col h3").on("click", function () {
      if ($(window).width() < 768) {
        let footerLinks = $(this).next("ul");

        if (footerLinks.is(":visible")) {
          footerLinks.slideUp();
        } else {
          footerLinks.slideDown();
        }
        $(this).toggleClass("expanded");
      }
    });
  });
};
