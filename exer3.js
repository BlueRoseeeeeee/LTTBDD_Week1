Dophin_score = [96, 108, 89]
Koalas_score = [88, 91, 110]

function sumAvg(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Dophin_score[i];

    }
    return sum / arr.length;
}
console.log(`Calculate the average score for Dophin team:${sumAvg(Dophin_score)}`)
console.log(`Calculate the average score for Koalas team:${sumAvg(Koalas_score)}`)