// 當網頁載入完
  $(window).load(function(){
    var $win = $(window),
      $ad = $('#adfloat').css('opacity', 0).show(),  // 讓廣告區塊變透明且顯示出來
      _width = $ad.width(),
      _height = $ad.height(),
      _diffY = 300, _diffX = 0, // 距離右及上方邊距
      _moveSpeed = 1000; // 移動的速度
    
    // 先把 #adfloat 移動到定點
    $ad.css({
      top: _diffY,  // 往上
      right:0,
      //left: $win.width() - _width - _diffX,
      opacity: 1
    });
    
    // 幫網頁加上 scroll 及 resize 事件
    $win.bind('scroll resize', function(){
      var $this = $(this);
      
      // 控制 #adfloat 的移動
      $ad.stop().animate({
        top: $this.scrollTop() + _diffY,  // 往上
        right:0,
        //left: $this.scrollLeft() + $this.width() - _width - _diffX
      }, _moveSpeed);
    }).scroll();  // 觸發一次 scroll()



    $("#adfloat_open").click(function(){   
     $("#adfloat_open").hide();  
     $("#adfloat_close").show();
     return false;
    });

    $("#adfloat_close").click(function(){   
     $("#adfloat_open").show();  
     $("#adfloat_close").hide();
          return false;

    });
    
  });