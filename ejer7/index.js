
$(document).ready(function(){
           
           $("[type = 'button']").on('click',function(){

                    var param = $("text.alias").val();

                    var url = "url error";//"api/dispatcher.php";

                    $.post(url,{service: "welcome.hello", params: {name:param}},
                            function(data){
                                $("div.res").html(data);
                            })
            });
});

// 7.Show div content in red when a server error occurs

$("div.res").ajaxError(function(event, request, settings){
                            $(this).html(" Sorry! A server error occurs ");
                            var properties = {
                                    "color" : "red"
                                }
                            $(this).css(properties);
});


