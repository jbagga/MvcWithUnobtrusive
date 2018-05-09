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
        }
    });
});
