$(document).ready(function(){
  
  var oses = {};
  
  $(".values ul li").each(function() {
    
    var os = $(this).text();
    var major = os.split(' ', 2)[0];
   
    if( oses[major] == undefined ) {
      oses[major] = "";
    }
   
    oses[major] += "<li>" + os + "</li>";
  });
  
  // alert(oses["Windows"]);
  
  alert( oses.keys() );

});