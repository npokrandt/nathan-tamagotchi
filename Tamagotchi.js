/* 4 main facets:

t gets hungry

t gets thirsty

t gets bored

t sometimes will perform an action (with possible side effects to the above categories */

export default class Tamagotchi { 
    emotion = 'happy' // can be hungry, thirsty, bored, or angry, maybe sad too
    hunger = 100
    thirst = 50
    bored = false
    constructor (name){
        this.name = name
    }

    //a bunch of files and intervals to decrease things or bore the t. Also one for him to do a random thing

    //getHungry (lose 3-7 hunger every 2 minutes)
    //getThirsty (lose 3-7 thirst every 2 minutes)
    //getBored (flip boolean to true. Inquirer will provide some options to entertain, but not all will work...)

    //doSomething (there will be a list of actions. One might occur every 30 seconds. These might decrease hunger and thirst)

}