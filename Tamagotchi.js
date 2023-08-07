/* 4 main facets:

t gets hungry

t gets thirsty

t gets bored

t sometimes will perform an action (with possible side effects to the above categories */
import inquirer from 'inquirer'

export default class Tamagotchi { 

    actions = ['doing a little dance', 'playing', 'taking a nap', 'plotting how to take over the world', 'being obnoxious']

    emotion = 'happy' // can be hungry, thirsty, bored, or angry, maybe sad too
    hunger = 12
    thirst = 18
    bored = false
    constructor (name){
        this.name = name
    }

    //a bunch of files and intervals to decrease things or bore the t. Also one for him to do a random thing

    //getHungry (lose 3-7 hunger every 2 minutes)
    getHungry = () => {
        var hungerAmount = Math.floor(Math.random() * 5) + 3
        this.hunger -= hungerAmount
        console.log(`${hungerAmount} hunger lost. ${this.hunger} remaining`)

        if (this.hunger < 10){

            this.feed()
        }
    }

    //getThirsty (lose 3-7 thirst every 2 minutes)
    getThirsty = () => {
        var thirstAmount = Math.floor(Math.random() * 5) + 3
        this.thirst -= thirstAmount
        console.log(`${thirstAmount} thirst lost. ${this.thirst} remaining`)

        if (this.thirst < 10){

            this.drink()
        }
    }

    //getBored (flip boolean to true. Inquirer will provide some options to entertain, but not all will work...)

    //doSomething (there will be a list of actions. One might occur every 30 seconds. These might decrease hunger and thirst)

    //feed (give t 25-50 more hunger)
    feed = () => {
        //prompt the user to feed the tamagotchi
        inquirer.prompt([
            {
                type: 'list',
                name: 'isFed',
                message: "Will you please feed me?",
                choices: ['yes', 'no'],
                default: 'yes'
            }
        ]).then((answers) => {
            // console.log(answers)

            if (answers.isFed === 'yes'){
                var feedAmount = Math.floor(Math.random() * 25) + 25
                this.hunger += feedAmount
                console.log('thanks for feeding me!')
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    //drink (give t 20-35 more thirst)
    drink = () => {
        //prompt the user to give the tamagotchi a drink
        if (this.thirst < 10){
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'isQuenched',
                    message: "Will you please give me a drink?",
                    choices: ['yes', 'no'],
                    default: 'yes'
                }
            ]).then((answers) => {
                // console.log(answers)
                
                if (answers.isQuenched === 'yes'){
                    var drinkAmount = Math.floor(Math.random() * 15) + 20
                    this.thirst += drinkAmount
                    console.log('thanks for giving me a drink!')
                }

            }).catch((err) => {
                console.log(err)
            })
        }
    }
    //entertain (try to ecxite t. If it fails, he might get mad...)

}