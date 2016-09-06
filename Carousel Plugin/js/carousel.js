(function($) {
    
    $.fn.carousel = function(options) {
        
        var defaults = {
            speedAnimation: 400,
            carouselWidth: 960,
            quantityItem: 1,
            itemWidth: 350,
        };
        var settings = $.extend(defaults, options);
        
        
        var $leftButton = $('.carousel__arrow--left');
        var $rightButton = $('.carousel__arrow--right');
        var $elementsList = $('.carousel__list');
        var $carouselWidth = $('.carousel__hider').css({
            'width': settings.carouselWidth
        });
        var $itemWidth = $('.carousel__item').css({
            'width': settings.itemWidth
        });
        var carouselHeight = $('.carousel__hider').height();
        $leftButton.css({
            'margin-top': (carouselHeight/2 - 15) + 'px',
        });
        $rightButton.css({
            'margin-top': (carouselHeight/2 - 15) + 'px',
        });
        
        var marginLeft = (settings.carouselWidth - settings.itemWidth * settings.quantityItem) / 2;
        var marginRight = marginLeft;

        
            if (settings.quantityItem == 2) {
                $('.carousel__item').css({
                    'margin-left': marginLeft  / 2,
                    'margin-right': marginRight / 2,
                });
            }
            else if (settings.quantityItem == 3) {
                $('.carousel__item').css({
                    'margin-left': marginLeft / 3,
                    'margin-right': marginRight / 3
                });
            }
            else {
                $('.carousel__item').css({
                    'margin-left': marginLeft,
                    'margin-right': marginRight,
                });
            }  

        
        var currentLeftValue = 0;
        var $pixelsOffset = settings.itemWidth + (marginLeft * 2 / settings.quantityItem);
        var $speedAnimation = settings.speedAnimation;
        
        var $elementsCount = $elementsList.find('li').length ;
        var $minimumOffset = - (($elementsCount - settings.quantityItem) * $pixelsOffset);
        var maximumOffset = 0;
        
        var firstElem = $('ul.carousel__list:first-child');
        
           
        $leftButton.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += $pixelsOffset;
                $elementsList.animate({ left : currentLeftValue + "px"}, $speedAnimation);
            } 
        });
        $rightButton.click(function() {
            if (currentLeftValue != $minimumOffset) {
                currentLeftValue -= $pixelsOffset;
                $elementsList.animate({ left : currentLeftValue + "px"}, $speedAnimation);
            } 
        });
        
    };
     
})(jQuery);