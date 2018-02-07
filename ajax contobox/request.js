function get_contobox_data(){
  var val = $("#add-id").val();
  $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:5000/test",
        data: {'ad_id': val}, //passing some input here
        dataType: "JSON",
        success: function(response){
           output = response;
           if (output != ""){
           $("#tshow").css("display", "block")}
           console.log(output);
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
