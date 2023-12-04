const my_button = document.getElementById("calculation-button");

my_button.addEventListener('click', function() {
    let name_and_surname = document.getElementById("name");
    let name_and_surname_value = name_and_surname.value;

    let kilometres_input = document.getElementById("kilometres");
    let kilometres_input_value = parseInt(kilometres_input.value);

    let age_range = document.getElementById("range");
    let age_range_value = age_range.value;

    price = kilometres_input_value * 0.21;

    if (age_range_value == "underage") {
        price = price * 0.8;
    }

    else if (age_range_value == 'adult-over-65') {
        price = price * 0.6;
    }

    carriage_number = Math.round(Math.random() * 13);

    function generate_random_int(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    cp_code_number = generate_random_int(10000, 100000);
 
    document.getElementById("passenger-name").innerHTML += name_and_surname_value;
    document.getElementById("carriage").innerHTML += carriage_number;
    document.getElementById("cp-code").innerHTML += cp_code_number;
    document.getElementById("ticket-price").innerHTML += price.toFixed(2) + "€";
})