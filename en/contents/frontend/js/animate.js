

//進入頁面移動
function pageMoving(ID,offsets) {
    var _body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    _body.stop(false).animate({
        scrollTop: $(ID).offset().top + offsets
    }, 800,'');
    return false;
}

//議員開關
function memeberOption(){
  $('.membersLink div h5').click(function(){
  	$(this).parent().addClass('active').siblings('div').removeClass('active');
  	$(this).parent().find('ul>li:eq(0)').addClass('active');
  
  });

  $('.membersLink div ul li a').click(function(){
		$(this).parent().addClass('active').siblings('li').removeClass('active');
  });

}

//facyBox
function fancyboxVideo(){
    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
}


//手機singlePhoto
function singlephotoSwiper(){
    var CT='.swiper-video ';
    var swiper = new Swiper(CT+'.swiper-container', {

      pagination: {
        el: CT+'.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: CT+'.swiper-button-next',
        prevEl: CT+'.swiper-button-prev',
      },

      //paginationClickable: true,  
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      loop: true

    });
}

//headerFix
function indexheader(){

  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    var offset=30;
    //alert(scrollVal);
    if(scrollVal>offset){
      $('header').addClass('header_page');
      }
    else{
      $('header').removeClass('header_page');
      }
  });
}

//lightBox
function lightbox(BTN){
	//$('.memberArea dl ul li').click(function(){
	$(BTN).on('click',function(){
		$('.lightbox').addClass('active');
		//alert('!!');
		return false;
	});

   $('.btnClose').click(function(){
      $('.lightbox').removeClass('active');
      return false;
   });

   $('.lightbox>div').next().click(function(){
      $('.lightbox').removeClass('active');
      return false;
   });

}

/*
function lightbox2(){
  
    $('.reportlist2 li a').click(function(){
        $('.box_candidate').addClass('active');
            return false;
    });
  
      $('.btnClose').click(function(){
        $('.box_candidate').removeClass('active');
         return false;
   });
  
}
*/

function navbarNav(){
  
    $('.header_page .menu').click(function(){
        $('.navbar-nav2').addClass('active');
            return false;
    });
  
      $('.menuClose').click(function(){
        $('.navbar-nav2').removeClass('active');
         return false;
   });
  
}

//議員開關

function memeberOption2(){
    $('.candidate_b li a').click(function(){
        $(this).parent().toggleClass('active');
            //return false;
    });
    $('.reportlist li a').click(function(e){
       $(this).parent().addClass('active').siblings().removeClass('active');
      e.preventDefault();
    });
}




//動畫開始
$(function(){
  navbarNav();
});

