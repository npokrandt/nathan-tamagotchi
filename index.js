//make tamagotchi
import inquirer from 'inquirer'
import Tamagotchi from './Tamagotchi.js'

let tamagotchi

// console.log(newT)
const doAction = () => {
    let willAct = false
    const random = Math.floor(Math.random() * 2)
    if (random === 1){       
        willAct = true
    }

    chooseAction(willAct)

    //console.log(willAct)
    // return willAct
}

const chooseAction = (willAct) => {
    const actions = ['doing a little dance', 'playing', 'taking a nap', 'plotting how to take over the world', 'being obnoxious']

    if (willAct){
        const action = actions[Math.floor(Math.random() * actions.length)]
        console.log(`${tamagotchi.name} is ${action}!`)
    }
}

const init = () => {
    //prompt user for name
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What would you like to name your tamagotchi?",
            default: 'Stan'
        }
    ]).then((answers) => {
        // console.log(answers)
        
        //create t with name
        tamagotchi = new Tamagotchi(answers.name)
        let actionInterval = setInterval(doAction, 10000)
    }).catch((err) => {
        console.log(err)
    })
    
}

init()

/* 4 main facets:

t gets hungry

t gets thirsty

t gets bored

t sometimes will perform an action (with possible side effects to the above categories */