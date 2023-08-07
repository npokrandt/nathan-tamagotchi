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
    const actions = tamagotchi.actions

    if (willAct){
        const action = actions[Math.floor(Math.random() * actions.length)]
        console.log(`${tamagotchi.name} is ${action}!`)
    }
}

const getHungry = () => {
    tamagotchi.getHungry()
}

const getThirsty = () => {
    tamagotchi.getThirsty()
}

const init = () => {
    //prompt user for name
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What would you like to name your tamagotchi?",
            default: 'Sparrow'
        }
    ]).then((answers) => {
        // console.log(answers)
        
        //create t with name
        tamagotchi = new Tamagotchi(answers.name)
        let actionInterval = setInterval(doAction, 10000)
        let hungerInterval = setInterval(getHungry, 30000)
        let thirstInterval = setInterval(getThirsty, 30000)
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