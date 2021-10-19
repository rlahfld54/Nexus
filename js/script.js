$(document).ready(function () {
  //안내창
  let modal = $(".modal");
  let modal_con = $(".modal-con");
  let modal_close = $(".madal-close");

  modal.click(function () {
    $(this).fadeOut();
  });

  modal_close.click(function () {
    $(this).hide();
    console.log("닫기버튼");
  });
});

// 리소스 로딩 후 진행
window.onload = function () {
  // 목록(blullet)을 저장한다.
  var bullets = $(".sw-visual-pg .swiper-pagination-bullet");

  // scroll
  $(window).scroll(function () {
    // 웹 브라우저 오른쪽의 스크롤 바의 위치를 파악
    var scY = $(window).scrollTop();
    if (scY >= 80) {
      // css 를 추가하겠다.
      $(".header").addClass("header-focus");
    } else {
      // css 를 제거하겠다.
      $(".header").removeClass("header-focus");
    }
  });

  // visual
  var sw_visual = new Swiper(".sw-visual", {
    loop: true,
    effect: "fade",
    crossEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1500,
    pagination: {
      el: ".sw-visual-pg",
      clickable: true,
    },
    on: {
      slideChange: function () {
        // 마치 클릭이 되었을 때의 index 처럼
        // 순서 값이 넘어온다.
        changePg(this.realIndex);
      },
    },
  });

  // sw-visual-pg 를 위한 코드

  // 현재 선택된 순서에 해당하는 것을 저장한다.
  var bulletsIndex = 0;
  // 선택된 것이 바뀌어지는 감시한다.
  $.each(bullets, function (index, item) {
    $(this).click(function () {
      changePg(index);
    });
  });

  // 전달된 번호를 참조해서
  // 이전 번호와 비교하는 기능(함수)
  // changePg(_번호)

  function changePg(_num) {
    // 기존에 보여지고 있던 슬라이드는
    // 글자 이미지가 opacity 가 0 으로 간다.

    // 새로운 슬라이드 가 fadeIn 이 된다.
    // 글자 이미지가 왼쪽에서 오른쪽으로
    // left: 10.0208vw; ==> left: 13.0208vw; 가 변하면서,
    // opacity: 0 ==>  opacity가 1 로 간다.

    // 동일한 포커스 시
    if (_num == bulletsIndex) {
      // 아래로 가지마라.
      return;
    }

    $(".sw-visual-pg .swiper-pagination-bullet").removeClass(
      "sw-visual-pg-active"
    );
    $(".sw-visual-pg .swiper-pagination-bullet")
      .eq(bulletsIndex)
      .addClass("sw-visual-pg-active");
    bulletsIndex = _num;
  }

  // mb-gnb 메뉴 코드
  var mb_menu = $(".mb-menu");
  var mb_gnb = $(".mb-gnb");
  mb_menu.click(function () {
    mb_gnb.toggleClass("mb-gnb-open");
  });

  var mb_gnb_close = $(".mb-gnb-close");
  mb_gnb_close.click(function (e) {
    // a태그의 href 를 막는다.
    // 웹 브라우저 갱신 되면 안되니까.
    e.preventDefault();
    // 메뉴닫기
    mb_gnb.removeClass("mb-gnb-open");
  });

  // 화면 리사이징 관련
  $(window).resize(function () {
    // 화면의 너비
    var winW = $(window).width();
    if (winW > 1024) {
      // 메뉴닫기
      mb_gnb.removeClass("mb-gnb-open");
    }
  });
};
