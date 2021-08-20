let aob = [
    { framework: 'React.Js', website: 'PayPal' },
    { framework: 'React.Js', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Next.Js', website: 'halobhavin' },
    { framework: 'Vue.Js', website: 'Vue' },
    { framework: 'JavaScript', website: 'heynikhil' }
]

let newArray = []
let track = []

for (let i = 0; i < aob.length; i++) {
    if (track.includes(aob[i].framework)) {
        continue;
    } else {
        let count = 1;
        for (let j = i + 1; j < aob.length; j++) {
            if (aob[j].framework == aob[i].framework) { // Checking if FrameWork is repeated or not 
                count++; // If Framework repeated count is incremented
            }
        }
        newArray.push({ victim: aob[i].framework, count: count })
        track.push(aob[i].framework)
    }
}
console.log(newArray);


// Task 1

let arr = []

for (let i = 0; i < 1000; i++) {
    var obj = {
        name: makeid(),
        age: randomNumber(1, 100),
        XP: randomNumber(0, 800),
        Level: randomNumber(1, 9),
    }

    var score = obj.XP / obj.Level

    arr.push({...obj, score })
}

console.log("ARR", arr);

arr.sort((a, b) => {
    return a.score < b.score ? 1 : b.score < a.score ? -1 : 0
})

console.log("Sorting Array", arr);



function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
