$(function () {
	let menu = $("#menu");
	let introH = $("#header").innerHeight();
	let scrollOffset = $(window).scrollTop();


	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);


	})
	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			menu.addClass("fixed");
		} else {
			menu.removeClass("fixed");
		}
	}

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();
		let offset = $("#menu").innerHeight();
		console.log(offset);

		let $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top - offset;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});

	$("#header__toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});
	// $('#form').validate({
	// 	rules: {
	// 		Username: {
	// 			email: true,
	// 			required: true
	// 		},
	// 		mail: {

	// 			required: true
	// 		}
	// 	}, massagas: {

	// 		name: {
	// 			required: 'ssdc',
	// 			minlength: 'Имя должно быть больше 5 символов',
	// 		},

	// 		Codefilt: {
	// 			required: 'Введите код товара ',
	// 			minlength: 'Код должен быть больше 5 символов',


	// 		},

	// 		tel: {
	// 			required: "Ведите телефон!",
	// 			digits: "Только цифры",
	// 			minlength: "Должно быть больше 10 цифр",
	// 		},



	// 	}
	// });





})