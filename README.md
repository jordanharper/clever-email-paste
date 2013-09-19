Clever e-mail paste
==================

A simple JQuery library that can be used to enhance any form that includes a name and email field (or fields).

Copying an e-mail contact from most e-mail clients will copy a string of the following format to the clipboard:

```
Firstname Surname <email@server.com>
```

This simple library/function will enhance a form so that users pasting a string of this format into either the e-mail or name field(s) will result in it being split and filled into the correct form fields.

**Usage**

Targetting the form (or any other wrapper), instantiate the function, passing a selector pattern for the name field (or fields), e-mail field(s) and a common parent of each pair of name/email fields.

A form structured like so:

```
<form>
	<fieldset>
		<label>
			Name
			<input class="name" name="name" size="20">
		</label>
		<label>
			Email
			<input class="email" name="email" size="40">
		</label>
	</fieldset>
</form>
```

Could be activated with:

``` js
$('form').clever_email_paste({
    name_selector:'.name',
    email_selector:'.email',
    common_parent_selector:'fieldset'
});
```

**Browser compatibility**

This plugin relies on the 'onpaste' event firing. [Quirksmode](http://www.quirksmode.org/dom/events/cutcopypaste.html) claims wide compatibility, so should be very compatible, requires further testing to be sure.

- Chrome
- Safari
- FF 6.1 (Mac), 7 (Win) [tested on Mac v18]
- IE 5.5+ [theory]
- Opera [theory]
