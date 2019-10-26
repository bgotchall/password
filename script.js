//alert("hi");


var generate_buttonEl = document.querySelector("#generate_button");
var copy_to_clipboard_buttonEl = document.querySelector("#copy_to_clipboard");
var output_boxEl = document.querySelector("#output_box");


var lengthEl = document.querySelector("#formControlRange");
var SpecialEl = document.querySelector("#special_char_Check");  // SpecialEl.checked is the value here.
var NumericEl = document.querySelector("#num_char_Check");
var LowerEl = document.querySelector("#lower_Check");
var UpperEl = document.querySelector("#upper_Check");
var spanEL = document.querySelector("#span");
var password_out_El = document.querySelector("#password_here");
var hidden_box_El = document.querySelector("#hidden_box");


generate_buttonEl.addEventListener("click", generate_function);
copy_to_clipboard_buttonEl.addEventListener("click", copy_function);
lengthEl.addEventListener("change", range_function);


lengthEl.min = 8;
lengthEl.max = 128;
lengthEl.value = 15;

spanEL.textContent = lengthEl.value;

var this_password = "";

var special_char_array = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numeric_array = "0123456789";
var lower_case_array = "abcdefghijklmnopqrstuvwxyz";
var upper_case_array = "ABCDEFGHIJKLMNOPQRSTYUVWXYZ";
var all_chars = "";
var index = 0;

function generate_function() {


    console.log("lenght is: " + lengthEl.value);
    if (input_is_valid()) {
        // Make the list of potential characters:
        all_chars = "";
        if (SpecialEl.checked) {
            all_chars = all_chars + special_char_array;
        }
        if (NumericEl.checked) {
            all_chars = all_chars + numeric_array;
        }
        if (LowerEl.checked) {
            all_chars = all_chars + lower_case_array;
        }
        if (UpperEl.checked) {
            all_chars = all_chars + upper_case_array;
        }
        console.log(all_chars);

        this_password = "";
        for (var i = 0; i < lengthEl.value; i++) {
            //const element = array[i];
            index = Math.floor(Math.random() * all_chars.length);
            console.log("index is : " + index);
            this_password = this_password + all_chars[index];

        }

        password_out_El.textContent = this_password;
       
    } else {
        alert("please select at least one checkbox");
    }

}

function copy_function() {
    hidden_box_El.className="show_me";
    hidden_box_El.value=this_password;
    hidden_box_El.select();
    document.execCommand("copy");
    hidden_box_El.className="hide_me";
    
    alert ("password copied to clipboard: "+ this_password);
}



function input_is_valid() {
    console.log("verifying now");
    var temp = false;
    temp = SpecialEl.checked || NumericEl.checked || LowerEl.checked || UpperEl.checked;
    return temp;
}

function range_function() {

    //alert("changed");
    spanEL.textContent = lengthEl.value;
}


