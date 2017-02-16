$('#toggle-btn').click(function () {
	$('.toggleable-menu').toggleClass('toggleable-menu-active');
});

$('#close-button').click(function () {
	$('.toggleable-menu-active').removeClass('toggleable-menu-active').addClass('toggleable-menu');
});