function RollRock() {
    var max = 3;
    var min = 1;
    var random = Math.floor((Math.random() * ((max + 1) - min)) + min);
    console.log(random);

    switch (random) {
        case 1:
            document.getElementById('pc-choose').innerText = 'Rock';
            document.getElementById('status-indicator').innerText = 'Tied';
            document.getElementById('status-indicator').style.color = 'blue';

            break;
        case 2:
            document.getElementById('pc-choose').innerText = 'Paper';
            document.getElementById('status-indicator').innerText = 'Loose';
            document.getElementById('status-indicator').style.color = 'red';
            break;
        case 3:
            document.getElementById('pc-choose').innerText = 'Scissors';
            document.getElementById('status-indicator').innerText = 'Win';
            document.getElementById('status-indicator').style.color = 'green';
            break;
    }
}

function RollPaper() {
    var max = 3;
    var min = 1;
    var random = Math.floor((Math.random() * ((max + 1) - min)) + min);
    console.log(random);

    switch (random) {
        case 1:
            document.getElementById('pc-choose').innerText = 'Rock';
            document.getElementById('status-indicator').innerText = 'Win';
            document.getElementById('status-indicator').style.color = 'green';
            break;
        case 2:
            document.getElementById('pc-choose').innerText = 'Paper';
            document.getElementById('status-indicator').innerText = 'Tied';
            document.getElementById('status-indicator').style.color = 'blue';
            break;
        case 3:
            document.getElementById('pc-choose').innerText = 'Scissors';
            document.getElementById('status-indicator').innerText = 'Loose';
            document.getElementById('status-indicator').style.color = 'red';
            break;
    }
}

function RollScissors() {
    var max = 3;
    var min = 1;
    var random = Math.floor((Math.random() * ((max + 1) - min)) + min);
    console.log(random);

    switch (random) {
        case 1:
            document.getElementById('pc-choose').innerText = 'Rock';
            document.getElementById('status-indicator').innerText = 'Loose';
            document.getElementById('status-indicator').style.color = 'red';
            break;
        case 2:
            document.getElementById('pc-choose').innerText = 'Paper';
            document.getElementById('status-indicator').innerText = 'Win';
            document.getElementById('status-indicator').style.color = 'green';
            break;
        case 3:
            document.getElementById('pc-choose').innerText = 'Scissors';
            document.getElementById('status-indicator').innerText = 'Tied';
            document.getElementById('status-indicator').style.color = 'blue';
            break;
    }
}

function Roll(pick) {
    var max = 3;
    var min = 1;
    var random = Math.floor((Math.random() * ((max + 1) - min)) + min);
    console.log(random);

    switch (random) {
        case 1:
            
            break;
        case 2:
            
            break;
        case 3:
            
            break;
    }
}