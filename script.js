const computerChoice = document.getElementById('computer-choice')
const userchoice = document.getElementById('user-choice')
const result = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')

let u_choice
let c_choice
let res

possiblechoices.forEach(posschoice => posschoice.addEventListener('click', (e) =>{
    u_choice = e.target.id          // This will give us the id of the thing we choose
    userchoice.innerHTML = u_choice     // This will print the id of the thing we choose in the html document
    generateComputerchoice()
    getresult()
}))


// Generating a number to make the computer choose it's option
function generateComputerchoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if(randomNumber == 1)
    {
        c_choice = 'Rock'
    }
    if(randomNumber == 2)
    {
        c_choice = 'Paper'
    }
    if(randomNumber == 3)
    {
        c_choice = 'Scissors'
    }
    computerChoice.innerHTML = c_choice
}

// Making the result
function getresult()
{
    if (c_choice == u_choice){
        res = 'Its a Tie!'
    }
    if(c_choice == 'Rock' && u_choice == "Scissors"){
        res = 'You Lost!'
    }
    if(c_choice == 'Paper' && u_choice == "Rock"){
        res = 'You Lost!'
    }
    if(c_choice == 'Scissors' && u_choice == "Paper"){
        res = 'You Lost!'
    }
    if(c_choice == 'Rock' && u_choice == "Paper"){
        res = 'You Won!'
    }
    if(c_choice == 'Paper' && u_choice == "Scissors"){
        res = 'You Won!'
    }
    if(c_choice == 'Scissors' && u_choice == "Rock"){
        res = 'You Won!'
    }
    result.innerHTML = res
}
