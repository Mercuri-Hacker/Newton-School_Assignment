function ageChange(e) {
    let age = document.getElementById('q_age').value;
    let checkbox = document.getElementById('q_owns_phone').checked;

    if (age < 5) {
        document.getElementById('errors-holder').innerHTML = "You need to be atleast 5 years old to participate";
        document.getElementsByTagName('button')[0].disabled = true;
    } else {
        document.getElementById('errors-holder').innerHTML = " ";
    }
    if (age == 0) {
        document.getElementById('errors-holder').innerHTML = "Please choose age";
        document.getElementsByTagName('button')[0].disabled = true;
    }

    if (checkbox == true && age > 5 && age < 13) {
        document.getElementById('result-holder').innerHTML = "You are too young to have a phone";
        document.getElementsByTagName('button')[0].disabled = false;

    }
    if (checkbox == true && age > 5 && age > 13) {
        document.getElementById('result-holder').innerHTML = "Use your phone in moderation";
        document.getElementsByTagName('button')[0].disabled = false;

    }
    if (checkbox == false && age > 5 && age < 13) {
        document.getElementById('result-holder').innerHTML = "You will get a phone soon";
        document.getElementsByTagName('button')[0].disabled = false;

    }
    if (checkbox == false && age > 5 && age > 13) {
        document.getElementById('result-holder').innerHTML = "You should get a phone";
        document.getElementsByTagName('button')[0].disabled = false;

    }
}

function handleSubmit(e) {
    e.preventDefault();
    ageChange(e);
}