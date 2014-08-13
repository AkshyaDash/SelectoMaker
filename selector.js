
$.fn.extend({
	getPath: function( path ) {
		// The first time this function is called
		if ( typeof path == 'undefined' ) path = '';

		// If this element is <html> we've reached the end of the path.
		if ( this.is('html') )
			return 'html' + path;

		// Add the element name.
		var cur = this.get(0).nodeName.toLowerCase();

		// Get the IDs and path.
		var id    = this.attr('id'),clss = this.attr('class');


		// Add the #id if there is one.
		if ( typeof id != 'undefined' )
			cur += '#' + id;

		// Add any classes.
		if ( typeof clss != 'undefined' )
		 {
		clss = clss.trim();
		    cur += '.' + clss.split(/[\s\n]+/).join('.');
         }
	
		return this.parent().getPath( ' > ' + cur + path );
	}
});
 // attach the DUMPYARD BUTTON
                var divAdd = '<div id="divContent" style="display: none;vertical-align: bottom;"></div>';
                $("body").append(divAdd);
             
                 
                    $('#divContent').display = 'block';
                    $('#divContent').animate({
                        width: 'toggle'}, "slow");
						 
						
 function showHide()
 {
   $('#divContent').animate({
                        width: 'toggle'}, "slow");
 
 }
 function CreatSelectors(path) {
        var val = '';
        var selectorArray = [];
        var tempArray = [];
        var input = path;
        var inputArray = input.split('>');
        var i = inputArray.length - 1;
		var isMultiple = false;
        for (; i >= 0; i--) {
		
		if(!isMultiple){
		
            tempArray.push(inputArray[i]);
          
            if (($.inArray('#', $.trim(inputArray[i])) > -1) || ($.inArray('.', $.trim(inputArray[i])) > -1) && (selectorArray.length < 5 ))
            {
                var j = tempArray.length-1;
                for (; j >= 0; j--) {
                    val = val + tempArray[j];
                    val = val.trim();
                    val = val.replace(' ', '>');
                }
				
				
				var checkIfMultiple = $(val);
				if(checkIfMultiple.length > 1)
				{
         $(checkIfMultiple).each(function () {
            
           if ($(this).text().trim().toLowerCase() == event.target.textContent.trim().toLowerCase()) {
                  selectorArray.push(val + ":contains('" + event.target.textContent.trim() + "')");
				  return isMultiple = true;
             }
         });
		
                  }
				  else
				  {
				  
				    selectorArray.push(val);
				  }
				
				
				
				
              

                val = ''; // clear the last value
            }
			}
        }
      
	    var content = "<table>"
        jQuery.each(selectorArray, function (index, value) {		
	
		
            content += '<tr style = height:30px><td>' + (index + 1) + '.  $("' + value + '")</td></tr>';
        });
        content += "</table>"

      
      return content;
    }

                
          
   $(document).on("dblclick", function () {
       var selectors = CreatSelectors( $(event.target).getPath());
       $('#divContent').html(selectors);
                
            });
			
