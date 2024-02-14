//* You are given an integer array 'ARR of size N' and an integer 'S'
//* Your task is to return the list of all pairs of elements such that each sum of elements of each pair equals 'S'.
//^ Each pair should be sorted, i.e. the first value should be less than or equal to the second value.
//* Return the list of pairs sorted in non-decreasing order of their first value. In case if two pairs have the same first value, the pair with a smaller second value should come first.

//? Sample input 1:
//? 5 5         -> targets
//? 1 2 3 4 5   -> ARR
//? Sample output 1:
//? 1 4         -> 1 + 4 = 5
//? 2 3         -> 2 + 3 = 5

// I will end up looping through both arrays
// I don't care about the index of either array
// sort both arrays from least to greatest
// subtract the first int in samples from the first in target.
// now we now the second value to look for in samples. -> 
// 5(target[0]) - 1(samples[0]) = 4(find in samples) 
// look for '4'. samples is sorted so you have good idea of '4' location
// subtract 1 from answer '4' and check value of location '3' in samples
// if value is '4' then save 1 and 4 in answers.
// if value is less then move forward, if is more then move backward
// if not found return false


function pairSum(targets, samples) {
    let answers = [];
    const sTargets = targets.sort();
    const sSamples = samples.sort();
    let usedSamples = [];
    
    if (targets.length === 0 || samples.length === 0) {
        return false
    }

    for (let i = 0; i < sTargets.length; i++) {
        console.log(`target loop: ${i}`)
        usedSamples = sSamples;
        for (let j = 1; j <= sSamples.length; j++) {
            const eval = sTargets[0] - usedSamples[0];
            console.log(`eval: ${sTargets[0]} - ${usedSamples[0]} = ${eval}`)
            const check = eval - j;
            console.log(`check: ${eval} - ${j} = ${check}`)
            console.log(`j value: ${j}`)
            if (usedSamples[check] === eval) {
                console.log(usedSamples[0] + usedSamples[check])
                answers = [...answers, usedSamples[0], usedSamples[check]]
                usedSamples = usedSamples.slice(1)
            }
            console.log(answers);
            console.log(usedSamples)
        }
    }
}

const targets = [5,5]
const samples = [5,3,1,2,4,6]

pairSum(targets, samples);

//! This works but just barely 
