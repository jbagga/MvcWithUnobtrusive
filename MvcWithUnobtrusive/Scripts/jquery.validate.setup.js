$(function () {
    $.validator.setDefaults({
        errorElement: "span",
        errorClass: "help-block",
        highlight: function (element, errorClass, validClass) {
            console.log('highlight function was called');
            console.log('Also, the param errorClass returns input-validation-error instead of help-block', errorClass, validClass, element);
            var elm = $(element);
            var group = elm.closest('.form-group');

            if (group.length == 0) {
                group = elm.closest('.form-group-custom');
            }

            if (group.length) {
                group.addClass('has-error');
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            console.log('unhighlight function was called');
            console.log('Also, the param errorClass returns input-validation-error instead of help-block', errorClass, validClass, element);

            var elm = $(element);
            var group = elm.closest('.form-group');

            if (group.length == 0) {
                group = elm.closest('.form-group-custom');
            }

            if (group.length) {
                group.removeClass('has-error');
            }
        },
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
    });
});