const exercises = ['Pull-ups', 'dips', 'push-ups', 'squats', 'pistol-squats', 'handstand push-ups', 'pike push-ups', 'bench-press', 'lateral raises', 'dumbell press'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//const equipment = ['Pull-up bar', 'dip bars', 'bench', 'box', 'step', 'barbell', 'dumbells'];
let equipment = [];

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

if (exercise1 === 'Pull-ups'|| exercise2 ==='Pull-ups'|| exercise3 ==='Pull-ups'|| exercise4==='Pull-ups' || exercise5 === 'Pull-ups'){
    equipment.push('Pull-up bar');
} 
if (exercise1==='dips' || exercise2==='dips' || exercise3==='dips' || exercise4==='dips' || exercise5==='dips' === 'dips'){
    equipment.push('dip-bars');
} 
if (exercise1==='bench-press' || exercise2==='bench-press' || exercise3 ==='bench-press'|| exercise4==='bench-press' || exercise5 === 'bench-press'){
    equipment.push('bench');
    equipment.push('barbell');
} 
if (exercise1==='dumbell press' || exercise2==='dumbell press' || exercise3==='dumbell press' || exercise4 ==='dumbell press'|| exercise5 === 'dumbell press'){
    equipment.push('dumbells');
}


const generateWOD = () => {
    const day = days[Math.floor(Math.random() * 7)]; 
    console.log(`Today is ${day}, and your workout of the day is: ${exercise1}, ${exercise2}, ${exercise3}, ${exercise4} and ${exercise5}. \n
The equipment you will need is: ` + equipment);
}

generateWOD();