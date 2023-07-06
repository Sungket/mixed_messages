const exercises = ["Pull-ups", 'dips', 'push-ups', 'squats', 'pistol-squats', 'handstand push-ups', 'pike push-ups', 'bench-press', 'lateral raises', 'dumbell press'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const equipment = ['Pull-up bar', 'dip bars', 'bench', 'box', 'step', 'barbell', 'dumbells'];

let randomEquipmentIndex = Math.floor(Math.random() * 7);

const exercise1 = exercises[Math.floor(Math.random() * exercises.length)];
let exercise2 = exercises[Math.floor(Math.random() * exercises.length)];
while (exercise2 === exercise1) {
    exercise2 = exercises[Math.floor(Math.random() * exercises.length)]
}
let exercise3 = exercises[Math.floor(Math.random() * exercises.length)];
while ((exercise3 === exercise1) || (exercise3 === exercise2)) {
    exercise3 = exercises[Math.floor(Math.random() * exercises.length)]
}
let exercise4 = exercises[Math.floor(Math.random() * exercises.length)];
while ((exercise4 === exercise1) || (exercise4 === exercise2) || (exercise4 === exercise3)) {
    exercise4 = exercises[Math.floor(Math.random() * exercises.length)]
}
let exercise5 = exercises[Math.floor(Math.random() * exercises.length)];
while ((exercise5 === exercise1) || (exercise5 === exercise2) || (exercise5 === exercise3)|| (exercise5 === exercise4)) {
    exercise5 = exercises[Math.floor(Math.random() * exercises.length)]
}

let equipment1 = equipment[Math.floor(Math.random() * equipment.length)];
if(exercise1 || exercise2 || exercise3 || exercise4 || exercise5 === 'Pull-ups'){
    equipment1 = equipment[0];
} else if (exercise1 || exercise2 || exercise3 || exercise4 || exercise5 === 'dips'){
    equipment1 = equipment[1];
} else if (exercise1 || exercise2 || exercise3 || exercise4 || exercise5 === 'bench-press'){
    equipment1 = equipment[5];
} else if (exercise1 || exercise2 || exercise3 || exercise4 || exercise5 === 'dumbell press'){
    equipment1 = equipment[6];
}
let equipment2 = equipment[Math.floor(Math.random() * equipment.length)];
while(equipment2 === equipment1){
    if(exercise1 || exercise2 || exercise3 || exercise4 || exercise5 === 'Pull-ups'){
        equipment2 = equipment[0];
    } else if (exercise1 || exercise2 || exercise3 || exercise4 || exercise5 === 'dips'){
        equipment2 = equipment[1];
    } else if (exercise1 || exercise2 || exercise3 || exercise4 || exercise5 === 'bench-press'){
        equipment2 = equipment[5];
    } else if (exercise1 || exercise2 || exercise3 || exercise4 || exercise5 === 'dumbell press'){
        equipment2 = equipment[6];
    } else {
        equipment2 = equipment[Math.floor(Math.random() * equipment.length)];  
    }  
}
let equipment3 = equipment[Math.floor(Math.random() * equipment.length)];
while(equipment3 === equipment1 || equipment3 === equipment2){
    equipment3 = equipment[Math.floor(Math.random() * equipment.length)];
}


const generateWOD = () => {
    const day = days[Math.floor(Math.random() * 7)]; 
    console.log(`Today is ${day}, and your workout of the day is: ${exercise1}, ${exercise2}, ${exercise3}, ${exercise4} and ${exercise5}. \n
The equipment you will need is: ${equipment1}, ${equipment2} and ${equipment3}.`);
}

generateWOD();