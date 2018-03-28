jQuery(document).ready(function() {
	var slider1 = jQuery('#sld1_w').bxSlider({
        infiniteLoop: true,
        nextSelector:'#sld1_r',
        prevSelector:'#sld1_l',
        controls: true,
        pager:false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
    onSlideNext:function($slideElement, oldIndex, newIndex){
          
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
          
      },
      onSliderLoad:function(){
        
      }
    });


  var slider2 = jQuery('#sld2_w').bxSlider({
        infiniteLoop: true,
        nextSelector:'#sld2_r',
        prevSelector:'#sld2_l',
        controls: true,
        pager:false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
    onSlideNext:function($slideElement, oldIndex, newIndex){
          
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
          
      },
      onSliderLoad:function(){
        
      }
    });
  var slider3 = jQuery('#sld3_w').bxSlider({
        infiniteLoop: true,
        nextSelector:'#sld3_r',
        prevSelector:'#sld3_l',
        controls: true,
        pager:false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
    onSlideNext:function($slideElement, oldIndex, newIndex){
          
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
          
      },
      onSliderLoad:function(){
        
      }
    });
  var slider4 = jQuery('#sld4_w').bxSlider({
        infiniteLoop: true,
        nextSelector:'#sld4_r',
        prevSelector:'#sld4_l',
        controls: true,
        pager:false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
    onSlideNext:function($slideElement, oldIndex, newIndex){
          
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
          
      },
      onSliderLoad:function(){
        
      }
    });
  var slider5 = jQuery('#sld5_w').bxSlider({
        infiniteLoop: true,
        nextSelector:'#sld5_r',
        prevSelector:'#sld5_l',
        controls: true,
        pager:false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
    onSlideNext:function($slideElement, oldIndex, newIndex){
          
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
          
      },
      onSliderLoad:function(){
        
      }
    });

  //$('.main-navigation ul li').unbind('click');
  // jQuery('.main-navigation ul li').click(function(e){
  // 	alert('WTF');
  // 		e.preventDefault();jQuery("html, body").animate({ scrollTop: jQuery(jQuery(this).attr('href')).offset().top}, 500);});
});
