/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
	"use strict";
	$(".draggable").draggable().resizable({
		handles: 'all'
	});
	$(".draggable").mousedown(function () {
		var biggestZIndex = 0;
		$(this).siblings('.draggable').each(function () {
			var z_index = $(this).css('zIndex');
			if (biggestZIndex < z_index) {
				biggestZIndex = z_index;
			}
			$(".title").text($("iframe").attr("src") + " " + $(".title").parent().css('zIndex'));
		});
		$(this).css('z-index', parseInt(biggestZIndex) + 1);
	});
	$(".title").text($("iframe").attr("src") + " " + $(".title").parent().css('zIndex'));
});