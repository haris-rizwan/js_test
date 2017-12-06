function get_contobox_data(){
  $.ajax({
        type: 'POST',
        url: "/Users/harisrizwan/SeleniumSpace/Contoboxtest/main_method.py",
        data: {param: 18965}, //passing some input here
        dataType: "text",
        success: function(response){
           output = response;
           alert(output);
        }})
};
