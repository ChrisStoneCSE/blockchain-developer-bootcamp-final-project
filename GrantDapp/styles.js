// Added input value check on postback/load, removed floatLabel class from select input. Modified the scss, added color map.

(function($){
    function floatLabel(inputType){
      $(inputType).each(function(){
        var $this = $(this);
        var text_value = $(this).val();
  
        // on focus add class "active" to label
        $this.focus(function(){
          $this.next().addClass("active");
        });
  
        // on blur check field and remove class if needed
        $this.blur(function(){
          if($this.val() === '' || $this.val() === 'blank'){
            $this.next().removeClass();
            }
        });
            
        // Check input values on postback and add class "active" if value exists
        if(text_value!=''){
          $this.next().addClass("active");
          }
        });
      
        // Automatically remove floatLabel class from select input on load
        $( "select" ).next().removeClass();
    }
    // Add a class of "floatLabel" to the input field
    floatLabel(".floatLabel");
  })(jQuery);