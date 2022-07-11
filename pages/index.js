const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result');
const overlay = document.getElementById('overlay');
const button = document.getElementById('button');

area.addEventListener('click', evt => {
    if(evt.target.className === 'area__box') {
        move % 2 === 0 ? evt.target.innerHTML = 'X' : evt.target.innerHTML = 'O';
        move++;
        check();
    }
});

const check = () => {
    const boxes = document.getElementsByClassName('area__box');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0; i < arr.length; i++) {
        if(
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'Победили крестики';
            prepareResult(result);
        } else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O')
        {
            result = 'Победили нолики';
            prepareResult(result);
        }
    }
}

const prepareResult = winner => {
    contentWrapper.innerHTML = `${winner}!`;
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
button.addEventListener('click', closeModal);