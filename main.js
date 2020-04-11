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
