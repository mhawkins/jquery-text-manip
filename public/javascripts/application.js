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
  

  for( var key in oses) {
    $(".processed").append( "<h3>" + key + "</h3>");
    $(".processed").append( "<div class='" + key + " os'><ul>" +  oses[key] + "</ul></div>" );
    $( ".processed ." + key ).hide();
  }

  $("h3").live("click", function(){
    $( ".processed ." + $(this).text() ).toggle(300);
  });
  
});