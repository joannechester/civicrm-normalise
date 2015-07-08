cj(function($){
  var fieldsUpperCaseFirst=["#first_name","#last_name","#middle_name","#nick_name"];
  function normalise (dom) {
     var v=$(dom).val();
     if (v == v.toLowerCase()) {
       $(dom).val(v[0].toUpperCase() + v.slice(1));   
     }
     if (v == v.toUpperCase()) {
       $(dom).val(v[0] + v.slice(1).toLowerCase()); 
     }

     var v=$(dom).val();
     idx = v.toLowerCase().indexOf(" and ") ;
     if( idx > -1){       
        tmp = v.substring(0, idx );
        $(dom).val(tmp); 
      }

     var v=$(dom).val();
      idx = v.toLowerCase().indexOf(" & ") ;
     if( idx > -1){       
        tmp = v.substring(0, idx );
        $(dom).val(tmp); 
      }

      var v=$(dom).val();
      idx = v.toLowerCase().indexOf(" family") ;
     if( idx > -1){       
        tmp = v.substring(0, idx );
        $(dom).val(tmp); 
      }

       var v=$(dom).val();
      idx = v.toLowerCase().indexOf(" household") ;
     if( idx > -1){       
        tmp = v.substring(0, idx );
        $(dom).val(tmp); 
      }
  }

    $.each(fieldsUpperCaseFirst,function(i,field){
    $(field).blur(function(){
      normalise(this);
     }).keyup(function(event) {
       var v=$(this).val();
       if (v.length == 1 && v == v.toLowerCase())
         $(this).val(v.toUpperCase());
    });
  });

  var fieldsUpperCaseAll=["#city-6","#billing_city-6"];
  function capitalise (gad) {
     var v=$(gad).val();
     $(gad).val(v.toUpperCase());   
     }

  $.each(fieldsUpperCaseAll,function(i,field){
    $(field).blur(function(){
      capitalise(this);
     }).keyup(function(event) {
       var v=$(this).val();
       if (v.length == 1 && v == v.toLowerCase())
         $(this).val(v.toUpperCase());
    });
  });

  var fieldsStartCase=["#street_address-6","#billing_street_address-6"];
    function upperfirst (jad) {
     var v=$(jad).val();
       if (v == v.toLowerCase() || v == v.toUpperCase()) {
     $(jad).val(v.split(" ").map(function(i){return i[0].toUpperCase() + i.substring(1).toLowerCase()})
     .join(" ").replace(/(\d+)([a-z]+)/, function(a) { return a.toUpperCase(); })); 
       }
     }

  $.each(fieldsStartCase,function(i,field){
    $(field).blur(function(){
      upperfirst(this);
     }).keyup(function(event) {
       var v=$(this).val();
       if (v.length == 1 && v == v.toLowerCase())
         $(this).val(v.toUpperCase());
    });
  });
});
