$(function () {
  //버튼 클릭시 해당 이미지로 이동
$('.banner_btn li').on('click', function () {
  let num = $(this).index();

  $('.swiper-wrapper').stop().animate({
    marginLeft: -100 * num + '%'
  }, 1000);

  $('.banner_btn li').removeClass('active');
  $(this).addClass('active');
});

//자동 슬라이드
let num = 0;
function slide() {
  num = (num + 1) % 3;//1,2,3,0,1..
  $('.swiper-wrapper').stop().animate({
    marginLeft: -100 * num + '%'
  },1000);
  $('.swiper-slide').eq(num).addClass('active').siblings().removeClass('active');
}

let auto = setInterval(slide, 2000);

$('.banner_btn').hover(function () {
  clearInterval(auto);
}, function () {
  auto = setInterval(slide, 2000);
});


// 모바일 화면에서 햄버거 메뉴 클릭 시 내비게이션이 나타나는 애니메이션
var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function () {
    const style = $('header').hasClass('active');

    if (style == 0) {
        wrapperMenu.classList.add('open');
        $('header').addClass('active');
        $('header h1').addClass('active');
        $('nav').animate({ right: '0%' }, 1000, 'easeOutCubic').addClass('show');
    } else {
        wrapperMenu.classList.remove('open');
        $('nav').animate({ right: '-100%' }, 1000, 'easeOutCubic').removeClass('show');
        $('header').removeClass('active');
        $('header h1').removeClass('active');
        
    }
})
});
