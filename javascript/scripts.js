const my_button = document.getElementById("calculation-button");

my_button.addEventListener('click', function() {
    const kilometres_input = document.getElementById("kilometres");
    const kilometres_input_value = parseInt(kilometres_input.value);

    const age_input = document.getElementById("age");
    const age_input_value = parseInt(age_input.value);

    console.log(kilometres_input_value);
    console.log(age_input_value);
})