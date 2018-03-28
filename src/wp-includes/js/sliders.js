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
});