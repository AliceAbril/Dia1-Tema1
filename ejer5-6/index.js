
$(document).ready(function(){
    
           /* 5.Attach an event to the created button which calls a function that 
             * post the following params to api/dispatcher.php: 
             * service: welcome.hello, params: {“name”: “[input alias on textbox]”}*/
           
           $("[type = 'button']").on('click',function(){

                    var param = $("#alias").val();

                    var url = "api/dispatcher.php";

                    $.post(url,{service: "welcome.hello", params: {name:param}},
                            function(data){

                                // 6.Write the response to a div element

                                $("#rta").html(data);
                            })
            });
});




