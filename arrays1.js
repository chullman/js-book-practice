var scores = [60, 60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 70, 70, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44, 69, 69, 70];

var output;

var highscore = 0;

var peopleWithHighscore = [];

for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i +" score: " + scores[i];
    console.log(output);
    if (scores[i] == highscore) {
        peopleWithHighscore.push("#" + (i + 1));
    }
    else if (scores[i] > highscore) {
        highscore = scores[i];
        peopleWithHighscore = [];
        peopleWithHighscore.push("#" + (i + 1))
    }
 
}

console.log("Highscore is " + highscore);

peopleWithHighscore.forEach (element => {
    console.log("Person " + element + " has the highest score of " + highscore);
});
    