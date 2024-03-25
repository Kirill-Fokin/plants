$('.header__burger-btn').click(()=>{ 
    $('.header').toggleClass('open'),
    $('.body').toggleClass('open')});

$(".menu__list").click(() =>{
    $('.header').removeClass('open');
    $('.body').toggleClass('open');
  }
);

