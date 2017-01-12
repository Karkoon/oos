  $(function () {
  	$(".draggable").draggable().resizable({handles: 'all'});
	$(".title").text($("iframe").attr("src"));
  });