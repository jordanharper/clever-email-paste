(function ( $ ) {

    $.fn.clever_email_paste = function( options ) {

		var s = $.extend({
			// Default values.
			name_selector: ".form_name",
			email_selector: ".form_email",
			common_parent_selector: "fieldset"
		}, options );

		$(s.name_selector+','+s.email_selector).on('paste', function() {
			$field = $(this);
			$name = $(this).parents(s.common_parent_selector).find(s.name_selector);
			$email = $(this).parents(s.common_parent_selector).find(s.email_selector);
			setTimeout(function(){
				var raw = $field.val();
				var raw_split = raw.split('<');
				if (raw_split[1] === undefined) {
					return false;
				}
				var name_str = raw_split[0].trim();
				var email_str = raw_split[1].replace(/\>$/, "");
				if ($.validate_email(email_str) === true) {
					$name.val(name_str);
					$email.val(email_str);					
				}
			}, 
			200);
		});

    };

    $.validate_email = function( str ) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(str);
    };

}( jQuery ));