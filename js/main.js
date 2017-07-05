$(document).ready(function () {
	var banner = $('#main-slider' );
	var carousel = $('#carousel');
	
	banner.on('init', function() {
		setTimeout(function() {
			$('.img-scale').imageScale({
				rescaleOnResize: true,
				align: 'center'
			});
		}, 500);
	});

	banner.slick({
		autoplay: true,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
        adaptiveWidth: true,
        fade: true,
        cssEase: 'linear'
	});
	carousel.slick ({
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
        adaptiveWidth: true,
        fade: true,
        cssEase: 'linear',
		dots: true,
		responsive: [
                {
                breakpoint: 1024,
                settings: {
                    autoplay: true,
                    autoplaySpeed:3100,
                }
            }
        ]
	});
	$('#form-1').validate();
	$('#form-2').validate({
		rules: {
		    email: {
				required: true,
				email: true
			}
		}
	});
});

function initMap() {
	"user strice";
	var myOptions = {
		zoom:10,
		center: new google.maps.LatLng(50.013355300748316,36.22715011239052),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapElem = document.getElementById('map');

	if(mapElem == null) { return; }
	map = new google.maps.Map(mapElem, myOptions);

};