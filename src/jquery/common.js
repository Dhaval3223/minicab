/* global $ */

const myFunction = () => {

   //Toggle Nav//
   $(document).ready(function () {
      $('.toggleNav').click(function () {
         $('.menu').toggleClass('menu_open');
         $('.bar_line').toggleClass('bar_line_open');
         $('.nav_bg').toggleClass('nav_bg_open');
         $('body').toggleClass('no_scroll');
      });
   });
   //Toggle Nav Ends//

   /////****Upload Image****/////
   $(document).ready(function () {
      $(".uploadImg").prepend('<img src="" class="showImg" id="showMainImg"><div class="upload_message"><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24"><path d="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20H13Q12.18 20 11.59 19.41 11 18.83 11 18V12.85L9.4 14.4L8 13L12 9L16 13L14.6 14.4L13 12.85V18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 8.93 15.54 7.46 14.08 6 12 6 9.93 6 8.46 7.46 7 8.93 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18H9V20M12 13Z" /></svg><p class="mb-3 fs_14">Drag your file here .jpeg .png or browse</p></div><button type="button" class="remove_upload">Remove</button>');
   })
   $(document).on("click", ".uploadImg input[type='file'].dropFile", function (e) {
      document.getElementById('showMainImg').src = "";
      $(this).closest(".upload_img").find(".upload_message").fadeOut();
   });
   $(document).on("click", ".uploadImg .remove_upload", function (e) {
      document.getElementById('showMainImg').src = "";
   });
   $(document).on("change", ".uploadImg input[type='file'].dropFile", function (e) {
      var preview = document.getElementById('showMainImg');
      preview.src = URL.createObjectURL(e.target.files[0]);
      preview.onload = () => URL.revokeObjectURL(preview.src);
      $(this).closest(".upload_img").find(".upload_message").fadeIn();
   });

   function openFilter() {
      $('.filter_sec').toggleClass('filter_slide');
   }

   //New Modal Open Close//
   function open_modal(self) {
      $(self).addClass("modal_open");
      $("body").addClass("no_scroll");
   }
   function close_modal(self) {
      $(self).closest(".modal_open").removeClass("modal_open");
      $("body").removeClass("no_scroll");
   }
};

export default myFunction;
