function get_contobox_data(){
  var val = $("#add-id").val();
  $.ajax({
        type: 'GET',
        url: "http://localhost:3000/getresults/" + val,
        dataType: "JSON",
        success: function(response){
            alert("HI");
        //    output = response;
        //    if (output != ""){
        //    $("#tshow").css("display", "block")}
        //    console.log(output);
        }})
};

$(document).ready(function(){
    $(document).ajaxStart(function(){
        $("#wait").css("display", "block");
    });
    $(document).ajaxComplete(function(){
        $("#wait").css("display", "none");
    });
    $("button").click(function(){
        $("#txt").load("demo_ajax_load.asp");
    });
});
