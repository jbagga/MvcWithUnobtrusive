var settings = {
    errorElement: "span",
    errorClass: "help-block",
    errorPlacement: function (error, element) {
        console.log('errorPlacement function was called');
        console.log('errorPlacement... this never gets called :(', error, element);
        var elm = $(element);

        if (elm.parent('.input-group').length || elm.parent('.input-group-custom').length) {
            error.insertAfter(elm.parent());
        }
        else if (elm.prop('type') === 'checkbox' || elm.prop('type') === 'radio') {
            error.appendTo(elm.closest(':not(input, label, .checkbox, .radio)').first());
        } else {
            error.insertAfter(elm);
        }
    },
    submitHandler: function (form) {
        showLoading();
        form.submit();
    }
}
$.validator.unobtrusive.options = settings;