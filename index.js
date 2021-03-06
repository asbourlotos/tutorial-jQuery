//styling with jQuery
$("h1").addClass("big-title margin-50");

//manipulating text with jQuery
$("h1").text("Bye");
$("button").html("<em>Click Me Now!</em>")

//manipulating attributes with jQuery
$("a").attr("href", "https://www.yahoo.com/");

//event listeners with jQuery
$("h1").click(function() {
    $("h1").css("color", "purple");
});

//detecting keystrokes with jQuery inside an input.
$("input").keydown(function() {
    console.log(event.key);
});
//challenge: change h1 to key.
$("input").keydown(function() {
    $("h1").text(event.key);
});

//more flexible event listeners .on(getter, setter)
$("h1").on("mouseover",function() {
    $("h1").css("color", "green");
});

//adding and removing elements jQuery
$("h1").before("<button>New</button>");
//$("button").remove(); removes all the buttons.

//web animation with jQuery
$("button").on("click", function() {
    //$("h1").fadeIn();
    //$("h1").fadeOut();
    //$("h1").fadeToggle();
    //$("h1").slideIn();
    //$("h1").slideOut();
    //$("h1").slideToggle();
    // animate method. Can only use css properties that have numerical values.
    //$("h1").animate({opacity: 0.5});
    // animation chaining
    $("h1").slideUp().slideDown().animate({opacity: 0.2});
});