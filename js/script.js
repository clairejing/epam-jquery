// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
	$("#before p").before("Hi");
});

$("#css1 button").click(function() {
  $("#css1 p").css("font-size","20px");
});

$("#css2 button").click(function() {
  $("#css2 p").css({"color":"red","font-size":"20px"});
});

$("#attr1 button").click(function() {
  alert($("#attr1 p a").attr("href"));
});

$("#attr2 button").click(function() {

  $("#attr2 p a").attr("href","http://www.baidu.com");
});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {
  alert($("class2 p").hasClass("lead"));
});

$("#form1 button").click(function() {
  console.log($("#form1 #exampleInputEmail1").val());
});

$("#form2 button").click(function() {
    debugger
  $("#exampleInputName2").val("Claire");

});

// handle the mouseover event here
$("#mouse img").mousemove(function(){
    $(this).css("width","40%");
});
// handle the form events here

$("#formEvents form").submit(function(event) {
  event.preventDefault();
  console.log($("#inputEmail3").val());
  console.log($("#inputPassword3").val());
  console.log($("#formEvents input[type=checkbox]").prop("checked"));
});


$("#animate1 img").one("mousemove",function(){
    $("#animate1 img").animate({
    "width":"70%"},3000);
  });

var dir = "left";
$("#animate2 img").dblclick(function(){
  $(this).css("position","static");
  if(dir === "left"){
    $(this).animate({"margin-left":"+=250px"},"slow");
    dir = "right";
  }else{
    $(this).animate({"margin-left":"-=250px"},"slow");
    dir = "left";
  }
});

$("#animate3 img").click(function(){
  $(this).fadeOut("slow",function(){
    $("#animate3 img").attr("src","images/cat.jpg");
    $(this).fadeIn("slow",function(){});
  });
});