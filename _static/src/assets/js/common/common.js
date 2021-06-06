/* ブレイクポイント
---------------------------------------------------------------------------- */
var is_pc = '(min-width:768px)';
var is_sp = '(max-width:767px)';


/* .is-pagelink ページ内リンクの処理
---------------------------------------------------------------------------- */
var $header = $('.l-header'); // ヘッダー

var hash = location.hash;
if (hash) {
	setTimeout(function () {
		var position = $(hash).offset().top - $header.height() - 20;
		$("html, body").scrollTop(position);
	}, 200);
}

$('.is-pagelink').click(function () {
	var href = $(this).attr('href');
	var target = $(href == '#' || href == '' ? 'html' : href);
	var position = target.offset().top;
	$('body, html').animate({
		scrollTop: position - $header.height() - 20
	}, 400, 'swing');
	return false;
});


/* .is-imghover ホバーした時の処理
---------------------------------------------------------------------------- */
$('.is-imghover').on('mouseenter', function () {
	if (window.matchMedia(is_pc).matches) {
		$(this).not(':animated').animate({ 'opacity': '0.7' }, 200);
	}
});
$('.is-imghover').on('mouseleave', function () {
	if (window.matchMedia(is_pc).matches) {
		$(this).animate({ 'opacity': '1' }, 200);
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
		$(window).resize(function () { img_size(); });
		img_size();
	});
}


/* 「is-tel」を指定したaタグをPCだけ削除する
---------------------------------------------------------------------------- */
var ua = navigator.userAgent;
if (ua.indexOf('iPhone') < 0 && ua.indexOf('Android') < 0) {
	$('.is-tel').each(function () {
		$(this).unwrap();
	});
}


/* pagetopボタンの挙動
---------------------------------------------------------------------------- */
var $pagetop = $('.l-pagetop');
$pagetop.hide();

$(window).scroll(function () {
	if ($(this).scrollTop() > $(window).height() / 2) {
		$pagetop.fadeIn();
	} else {
		$pagetop.fadeOut();
	}
});

// フッターに固定
$(window).scroll(function (e) {
	var bottomY = 80, //スクロール時の下からの位置
		$window = $(e.currentTarget),
		height = $window.height(), //ウィンドウ(ブラウザ)の高さ
		scroll_top = $window.scrollTop(), //スクロール量
		document_height = $(document).height(), //ページ全体の高さ
		footer_height = $('.l-footer').outerHeight(); //フッタの高さ
	bottom_height = footer_height + height + scroll_top + bottomY - document_height;
	if (scroll_top >= document_height - height - footer_height + bottomY) {
		$pagetop.addClass('is-fix');
	} else {
		$pagetop.removeClass('is-fix');
	}
});


const test = () => {
	console.log('hey');
}
