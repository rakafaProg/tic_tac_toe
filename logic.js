var current = 'o';

var winnersArray = [];

for (let i = 0; i < 3; i++) {
    winnersArray[i] = [];
}

$('#xotable td').click(function(){
    if($(this).text() || current == '')
        return;

    debug ($(this));

    switch(current) {
        case 'x' : current = 'o'; break;
        case 'o' : current = 'x'; break;
    }
    $(this).text(current).css('color', current == 'o' ? 'blue' : 'red');
    
    let row = $(this).parent().index();
    let col = $(this).index();
    
    winnersArray[row][col] = current;
    debug (winnersArray);
    if (checkRow(row) || checkCol(col) || checkDiagonaly()){
        $('#res').text('Congrates ' + current + ' Winn!!!!')
        .css('color', current == 'o' ? 'blue' : 'red');
        current = '';
    }
    
});


function debug(todebug) {
    console.log(todebug);
    
}

function checkRow(row) {
    let res = true;
    for (let i = 0; i < 3; i++) {
        res = res && winnersArray[row][i] && 
            winnersArray[row][i] == current;    
        
    }

    return res;
}

function checkCol(col) {
    let res = true;
    for (let i = 0; i < 3; i++) {
        res = res && winnersArray[i][col] && 
            winnersArray[i][col] == current;    
    }

    return res;
}

function checkDiagonaly () {
    let res = true;
    for (let i = 0; i < 3; i++) {
        res = res &&  winnersArray[i][i] && 
        winnersArray[i][i] == current;  
    }

    if (res) return res;

    res =  winnersArray[0][2] && winnersArray[1][1] && winnersArray[2][0];

    res = res && winnersArray[0][2] == current && 
            winnersArray[1][1] == current && 
            winnersArray[2][0] == current;

    return res;

}