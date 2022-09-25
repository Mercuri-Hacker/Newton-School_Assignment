function swapTheme() {
    if (document.getElementById('app').className == 'night') {
        document.getElementById('app').className = 'day'
        document.getElementById('swap').className = 'button_day'
    } else {
        document.getElementById('app').className = 'night'
        document.getElementById('swap').className = 'button_night'
    }
}