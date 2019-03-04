'use strict';

var xhr = new XMLHttpRequest();

submitButton.onclick = function(element) {
    var otp = document.getElementById('passField').value;
    var full = "https://api.yubico.com/wsapi/2.0/verify?id=1&otp=" + otp + "&nonce=aef3a7835277a28da831005c2ae3b919e2076a62";
    document.getElementsByTagName("iframe")[0].setAttribute("src", full);
}

