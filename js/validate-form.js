window.addEventListener('DOMContentLoaded', function() {
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) 999-99-99");

    im.mask(selector);

    new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },

    messages: {
        name: {
            required: 'Недопустимый формат',
            minLength: 'Имя должно содержать не меньше 2 символов',
            maxLength: 'Имя должно содержать не больше 30 символов'
        },
        tel: {
            required: 'Недопустимый формат',
            function: 'В номере телефона должно быть 10 символов'
        }
    },

    colorWrong: '#d11616'
    });
})