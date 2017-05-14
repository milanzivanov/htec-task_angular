(function() {
  console.log('This is a library. It should be the first file');
    $('.header-top .switch').click(function(){
      $(this).toggleClass('is-transitioned');
      $(".grid").toggleClass('is-transitioned');
      $(".list").toggleClass('is-transitioned');
  }); 
})();