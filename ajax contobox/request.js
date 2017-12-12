function get_contobox_data(){
  $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:5000/test",
        data: {param: 18965}, //passing some input here
        dataType: "JSON",
        success: function(response){
           output = response;
           alert(output);
        }})
};
