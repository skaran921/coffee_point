$(document).ready(function () {
  $(".modal").modal();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".slider").slider();
  $(".ourReviews").carousel({
    numVisible: 7,
    shift: 55,
    padding: 45,
  });
});

function toggleModal() {
  let instance = M.Modal.getInstance($("#modal3 "));
  instance.open();
}
