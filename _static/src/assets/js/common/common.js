/* ブレイクポイント
---------------------------------------------------------------------------- */
var is_pc = '(min-width:768px)';
var is_sp = '(max-width:767px)';

$('.openbtn').click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
  $('#g-nav').toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
  $('.circle-bg').toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
});

$('#g-nav a').click(function () {
  //ナビゲーションのリンクがクリックされたら
  $('.openbtn').removeClass('active'); //ボタンの activeクラスを除去し
  $('#g-nav').removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
  $('.circle-bg').removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
});

/* .is-imghover ホバーした時の処理
---------------------------------------------------------------------------- */
$('.is-imghover').on('mouseenter', function () {
  if (window.matchMedia(is_pc).matches) {
    $(this).not(':animated').animate({ opacity: '0.7' }, 200);
  }
});
$('.is-imghover').on('mouseleave', function () {
  if (window.matchMedia(is_pc).matches) {
    $(this).animate({ opacity: '1' }, 200);
  }
});

/* PC・SPで画像切り替え (IE)
---------------------------------------------------------------------------- */
var $set_elem = $('.is-imgswitch'),
  pc_name = '_pc',
  sp_name = '_sp';

var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
  $set_elem.each(function () {
    var $this = $(this);
    function img_size() {
      if (window.matchMedia(is_pc).matches) {
        $this.attr('src', $this.attr('src').replace(sp_name, pc_name));
      } else {
        $this.attr('src', $this.attr('src').replace(pc_name, sp_name));
      }
    }
    $(window).resize(function () {
      img_size();
    });
    img_size();
  });
}
