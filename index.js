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
