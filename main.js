//Current day display 
$("#currentDay").text(moment().format('MMMM Do YYYY '));

//TextArea Displays color coordination
$(".row").each(function(index){
    //get times 
    var time = parseInt(moment().format('H'));
    var calTime=$("#hour-value-" +index).data("military");

    //compare times 
    if (time===calTime){
        //set correct color 
       var textArea=$(".textarea").get(index);
       $(textArea).addClass("present");
       $(textArea).removeClass("future");  
    }else if(time<calTime){

    }else{
        var textArea=$(".textarea").get(index);
        $(textArea).addClass("past");
        $(textArea).removeClass("future"); 
    };
});

//saving text to local storage
//.localStorage.setItem("9am","hello World");
var Text9= localStorage.getItem("9am");
var Text9= localStorage.getItem("9am");
var Text10= localStorage.getItem("10am");
var Text11= localStorage.getItem("11am");
var Text12= localStorage.getItem("12pm");
var Text1= localStorage.getItem("1pm");
var Text2= localStorage.getItem("2pm");
var Text3= localStorage.getItem("3pm");
var Text4= localStorage.getItem("4pm");
var Text5= localStorage.getItem("5pm");

//click listeners
$("#save9").on("click",function(){
   var text= $(this).prev().val();  
    localStorage.setItem("9am",text);
});
$("#save10").on("click",function(){
    var text= $(this).prev().val();
    console.log(text);
    localStorage.setItem("10am",text);
 });
    
    $("#save11").on("click",function(){
       var text= $(this).prev().val();
        console.log(text);
    localStorage.setItem("11am",text);
    });
    
    $("#save12").on("click",function(){
       var text= $(this).prev().val();
        console.log(text);
    localStorage.setItem("12pm",text);
    });
    
    $("#save1").on("click",function(){
       var text= $(this).prev().val();
        console.log(text);
    localStorage.setItem("1pm",text);
    });
    
    $("#save2").on("click",function(){
       var text= $(this).prev().val();
        console.log(text);
    localStorage.setItem("2pm",text);
    });
    
    $("#save3").on("click",function(){
       var text= $(this).prev().val();
        console.log(text);
    localStorage.setItem("3pm",text);
    });
    
    $("#save4").on("click",function(){
       var text= $(this).prev().val();
        console.log(text);
    localStorage.setItem("4pm",text);
    });
    
    $("#save5").on("click",function(){
       var text= $(this).prev().val();
        console.log(text);
    localStorage.setItem("5pm",text);
    });


//stores info
window.onload = function() {
    if (Text9 !== null) $('#9am-text-area').val(Text9);
    if (Text10 !== null) $('#10am-text-area').val(Text10);
    if (Text11 !== null) $('#11am-text-area').val(Text11);
    if (Text12 !== null) $('#12am-text-area').val(Text12);
    if (Text1 !== null) $('#1am-text-area').val(Text1);
    if (Text2 !== null) $('#2am-text-area').val(Text2);
    if (Text3 !== null) $('#3am-text-area').val(Text3);
    if (Text4 !== null) $('#4am-text-area').val(Text4);
    if (Text5 !== null) $('#5am-text-area').val(Text5);
};