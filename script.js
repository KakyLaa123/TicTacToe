const buttons = document.querySelectorAll('.square');
const scoreX = document.querySelector('.x-score');
const scoreO = document.querySelector('.o-score');
let scoreXValue = 0;
let scoreOValue = 0;
let num = 0;
let winner = '';

for(let i = 0; i < buttons.length; i++){
    click(i);
}

function clearAll(){
    for(let g = 0; g < buttons.length; g++){
        buttons[g].textContent = '';
        buttons[g].disabled = false;
    }
}

function click(i){
    buttons[i].addEventListener('click', () => {
        buttons[i].disabled = true;
        num += 1;
        if(num % 2 == 0){
            buttons[i].textContent = 'O';
        }
        else{
            buttons[i].textContent = 'X';
        }
        // if(num == 9){
        //     setTimeout(() => {
        //         alert(`Победил ${winner}`);
        //     }, 500);
        // }
        if(buttons[0].textContent == 'X' && buttons[1].textContent == 'X' && buttons[2].textContent == 'X' ||
           buttons[0].textContent == 'X' && buttons[4].textContent == 'X' && buttons[8].textContent == 'X' ||
           buttons[2].textContent == 'X' && buttons[4].textContent == 'X' && buttons[6].textContent == 'X' ||
           buttons[6].textContent == 'X' && buttons[7].textContent == 'X' && buttons[8].textContent == 'X' ||
           buttons[0].textContent == 'X' && buttons[3].textContent == 'X' && buttons[6].textContent == 'X' ||
           buttons[2].textContent == 'X' && buttons[5].textContent == 'X' && buttons[8].textContent == 'X' ||
           buttons[3].textContent == 'X' && buttons[4].textContent == 'X' && buttons[5].textContent == 'X' ||
           buttons[1].textContent == 'X' && buttons[4].textContent == 'X' && buttons[7].textContent == 'X'){
            winner = 'Крестик';
            setTimeout(() => {
                alert(`Победил ${winner}`);
                clearAll();
                scoreXValue += 1;
                scoreX.textContent = scoreXValue;
            }, 500);
        }
        if(buttons[0].textContent == 'O' && buttons[1].textContent == 'O' && buttons[2].textContent == 'O' ||
           buttons[0].textContent == 'O' && buttons[4].textContent == 'O' && buttons[8].textContent == 'O' ||
           buttons[2].textContent == 'O' && buttons[4].textContent == 'O' && buttons[6].textContent == 'O' ||
           buttons[6].textContent == 'O' && buttons[7].textContent == 'O' && buttons[8].textContent == 'O' ||
           buttons[0].textContent == 'O' && buttons[3].textContent == 'O' && buttons[6].textContent == 'O' ||
           buttons[2].textContent == 'O' && buttons[5].textContent == 'O' && buttons[8].textContent == 'O' ||
           buttons[3].textContent == 'O' && buttons[4].textContent == 'O' && buttons[5].textContent == 'O' ||
           buttons[1].textContent == 'O' && buttons[4].textContent == 'O' && buttons[7].textContent == 'O'){
            winner = 'Нолик';
            setTimeout(() => {
                alert(`Победил ${winner}`);
                clearAll();
                scoreOValue += 1;
                scoreO.textContent = scoreOValue;
            }, 500);
        }
    });
}