//Hàm validator
function Validator (options) {
    // console.log(options.form);

    var formElement = document.querySelector(options.form)
    if(formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');
            
            if (inputElement) {
                inputElement.onblur = function (){
                    var errorMessage = rule.test(inputElement.value);
                    if (errorMessage){
                        errorElement.innerText = errorMessage;
                    }else {
                        errorElement.innerText = '';

                    }

                }
            }
        });
    }
}


// Định nghĩa rules
// Nguyeen tac cua cac rule
// Khi có nối thì trả ra mesage lỗi
// Khi hợp lệ thì không trả ra cái gì (UNDEFINEED)
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    };
}

Validator.isPass = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    };
}