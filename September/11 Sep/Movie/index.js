let movies = ['Jawan', 'Gadar 2', 'Dream Girl 2', 'Kushi', 'Jailer', 'OMG 2', '3 Ekka'];
let times = ['9:00 to 11:30', '11:30 to 2:00', '2:30 to 5:00', '5:00 to 8:00', '8:00 to 11:30']
let seats = ['Silver', 'Gold', 'Platinum', 'Royal']
let combo = ['Pepsi + Butter popcorn = 200Rs', 'Pepsi + Simple Popcorn = 150Rs', 'Coke + Butter Popcorn = 180Rs', 'Coke + Simple Popcorn = 120Rs', 'Nothing']

let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



// let move = require('./Modules/movie_select')

function inLoop() {
    console.log('Please enter a movie name you want to watch from the below list:\n');
    for (let i = 0; i < movies.length; i++)  console.log((i + 1) + '.' + movies[i]);
    rl.question('Movie Name: ', (name) => {
        // let movie_name = move.select(movies, name);
        var movie_name;
        if (!movies.includes(name)) {
            console.log('Please enter correct movie name');
            inLoop();
        }
        else movie_name = name;

        rl.question('Please enter no. of tickets: ', (num) => {
            // tickets = nextTick(num);

            console.log('Timing Slots:\n');
            for (let i = 0; i < times.length; i++) console.log((i + 1) + '.' + times[i]);
            rl.question('Enter Slot Number: ', (time) => {

                console.log('Which type of seat preference you want:');
                for (let i = 0; i < seats.length; i++) console.log((i + 1) + '.' + seats[i]);
                rl.question('Enter Number: ', (seat) => {

                    let ava = Math.round(Math.random() * 100)
                    console.log('Available Seats: ' + ava);

                    console.log('Available Bevrages combo you want to buy somthing:\n');
                    for (let i = 0; i < combo.length; i++) console.log((i + 1) + '.' + combo[i]);
                    rl.question('Enter Number: ', (number) => {

                        console.log('Details of selected things:\n');
                        console.log(name);
                        console.log(num);
                        console.log(times[Number(time - 1)]);
                        console.log(seats[Number(seat - 1)]);
                        console.log('Available Seats: ' + ava);
                        console.log(combo[Number(number - 1)]);
                        rl.close();
                    })
                });
            })
        })
    })
}

inLoop();

// function nextTick(num) {
//     if (num > 10 || num <= 0) {
//         console.log('Please Enter valid number of tickets');
//     }
//     else {
//         return num;
//     }
// }

