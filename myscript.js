$(document).ready(function(){
    $('#btn').on("click", function(){
        $.get("Server.php", {name:$("#namevalue").val()},function(data){
            $("#result").text(data);
        });
    });
});
