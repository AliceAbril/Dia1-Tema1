<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <title> JavaScript Page </title>
        
        <script type="text/javascript" src="jquery-1.7.1.js"></script>
        
        <script>
            
            /* 5.Attach an event to the created button which calls a function that 
             * post the following params to api/dispatcher.php: 
             * service: welcome.hello, params: {“name”: “[input alias on textbox]”}*/
            
            function sendIt() {
                
                var param = $("#alias").val();
            
                var url = "api/dispatcher.php";
                
                $.post(url,{service: "welcome.hello", params: {name:param}},
                        function(data){
                            
                            // 6.Write the response to a div element
                            
                            $("#rta").html(data);
                        })
            }
            
        </script>
    </head>
    <body>
        
        Button: <input type="button" value="Send" onclick ="sendIt();"/> 
        <br/><br/>
        
        Text: <input type="text" value=" " id="alias"/>
        <br/><br/>
        
        <div id="rta" class="res"> Respuesta </div>
        
    </body>
</html>
