const my_button = document.getElementById("calculation-button");

my_button.addEventListener('click', function() {
    let kilometres_input = document.getElementById("kilometres");
    let kilometres_input_value = parseInt(kilometres_input.value);

    let age_input = document.getElementById("age");
    let age_input_value = parseInt(age_input.value);

    price = kilometres_input_value * 0.21;

    if (age_input_value < 18) {
        price = price * 0.8;
    }

    else if (age_input_value > 65) {
        price = price * 0.6;
    }

    console.log(price.toFixed(2) + "€");
})