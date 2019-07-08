var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://frontend.camp.dev.unit6.ru/get-slides', true);

xhr.send();

xhr.onreadystatechange = function() {
	if (this.readyState != 4) return;
	if (this.status != 200) {
	alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
	return;
	}

	var banners = JSON.parse(xhr.responseText);
// function timeConverter(UNIX_timestamp){
//   var a = new Date(UNIX_timestamp * 1000);
//   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//   var year = a.getFullYear();
//   var month = months[a.getMonth()];
//   var date = a.getDate();
//   var hour = a.getHours();
//   var min = a.getMinutes();
//   var sec = a.getSeconds();
//   var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//   return time;
// };

function today(){
	return parseInt(new Date().getTime()/1000)
};

function compareOrder(banner1, banner2) {
  return banner1.order - banner2.order;
};

var dots = document.querySelector('.b-slider__dots');
dotsChild = document.querySelector('.b-slider__dot');
while (dots.firstChild) {
    dots.removeChild(dots.firstChild);
}

banners.sort(compareOrder).forEach(function(banner, i) {
	var active = banner.active;
	var startDate = banner.startDate;
	var endDate = banner.endDate;


	// if (startDate < today() && endDate > today() ) {
	// }	

  	if (active && startDate < today()) {
	var title = banner.title;
	var text = banner.text;
	var img = banner.image;


  		var indexBanner = i;
		var dots = document.querySelector('.b-slider__dots');
		var dot = document.createElement('div');
		dot.className = "b-slider__dot";
		var dots = dots.appendChild(dot);
		dot.parentNode.firstElementChild.className = "b-slider__dot b-slider__dot--selected";

		$(".b-slide__title").html(title);
		$(".b-slide__text").html(text);


		$('body').on('click','.b-slider__dot', function(){
			var $this = $(this);
			var indexDot = $this.index();  

		if (indexBanner === indexDot+1) {
			$(".b-slide__title").html(title);
			$(".b-slide__text").html(text);
			$('.b-slide__image').css('background-image','url(css/' + img +')');
		}
		});

	};
});

}


