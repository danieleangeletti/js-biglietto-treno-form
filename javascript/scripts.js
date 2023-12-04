const my_button = document.getElementById("calculation-button");

my_button.addEventListener('click', function() {
    let name_and_surname = document.getElementById("name");
    let name_and_surname_value = name_and_surname.value;

    let kilometres_input = document.getElementById("kilometres");
    let kilometres_input_value = parseInt(kilometres_input.value);

    let age_range = document.getElementById("range");
    let age_range_value = age_range.value;

    price = kilometres_input_value * 0.21;

    if (age_range_value = "minorenne") {
        price = price * 0.8;
    }

    document.getElementById("passenger-name").innerHTML += name_and_surname_value;
    document.getElementById("ticket-price").innerHTML += price + "€";
})