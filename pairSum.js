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

function pairSum(targets, samples) {
    // step 1
    // init an empty bucket - obj or array?
    // sort the arrays so you don't have to test which is greater
    // step 2
    // take the first number in targets and subtract it from the first number is samples
    // Now you know what to look for. 5(target) - 1(sample) = 4(num to look for)
    // look to see if 1,4 is in bucket
    // step 3
    // loop through samples. Is 4 found
    // yes -> add samples '1' and samples '4' to a bucket to return later
    // no -> move to next step = do nothing
    // drop first number from samples and return step 2
    
    // do steps 2 and 3 until samples is 0
    // when samples is 0 drop target 0, reset samples, run steps 2 thru 3
}
// function pairSum(targets, samples) {
//     let answers = [];
//     const sTargets = targets.sort();
//     const sSamples = samples.sort();
//     let usedSamples = sSamples;
    
//     if (targets.length === 0 || samples.length === 0) {
//         return false
//     }


//     for (let j = 1; j <= sSamples.length; j++) {
//         const eval = sTargets[0] - usedSamples[0];
//         console.log(`eval: ${sTargets[0]} - ${usedSamples[0]} = ${eval}`)
//         const check = eval - j;
//         console.log(`check: ${eval} - ${j} = ${check}`)
//         console.log(`j value: ${j}`)
//         if (usedSamples[check] === eval) {
//             console.log(usedSamples[0] + usedSamples[check])
//             answers = [...answers, usedSamples[0], usedSamples[check]]
//             usedSamples = usedSamples.slice(1)
//         }
//         console.log(answers);
//         console.log(usedSamples)
//     }
// }

const targets = [5]
const samples = [5,3,1,2,4,6]

console.log(pairSum(targets, samples));

//! This works but just barely 
