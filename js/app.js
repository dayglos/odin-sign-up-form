var check = function() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').innerHTML = '';
    } else {
        document.getElementById('message').style.color = 'black';
        document.getElementById('message').innerHTML = 'Passwords do not match.'
    }
}