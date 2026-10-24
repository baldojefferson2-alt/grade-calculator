// Grade Calculator - Main Logic
// Calculates the weighted average and determines the letter grade

document.getElementById('gradeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const studentName = document.getElementById('studentName').value.trim();
    const quiz = parseFloat(document.getElementById('quiz').value);
    const assignment = parseFloat(document.getElementById('assignment').value);
    const midterm = parseFloat(document.getElementById('midterm').value);
    const finalExam = parseFloat(document.getElementById('final').value);

    // Validate scores are between 0 and 100
    const scores = [quiz, assignment, midterm, finalExam];
    for (const score of scores) {
        if (score < 0 || score > 100) {
            alert('Please enter scores between 0 and 100.');
            return;
        }
    }

    // Calculate weighted average
    const weightedAverage =
        quiz * 0.2 +
        assignment * 0.2 +
        midterm * 0.25 +
        finalExam * 0.35;

    // Determine letter grade
    const letterGrade = getLetterGrade(weightedAverage);

    // Display the result
    displayResult(studentName, weightedAverage, letterGrade);
});

/**
 * Returns the letter grade based on the numeric average.
 * @param {number} average - The weighted average score.
 * @returns {string} The corresponding letter grade.
 */
function getLetterGrade(average) {
    if (average >= 97) return 'A+';
    if (average >= 93) return 'A';
    if (average >= 90) return 'A-';
    if (average >= 87) return 'B+';
    if (average >= 83) return 'B';
    if (average >= 80) return 'B-';
    if (average >= 77) return 'C+';
    if (average >= 73) return 'C';
    if (average >= 70) return 'C-';
    if (average >= 67) return 'D+';
    if (average >= 63) return 'D';
    if (average >= 60) return 'D-';
    return 'F';
}

/**
 * Displays the calculated result on the page.
 * @param {string} name - The student's name.
 * @param {number} average - The weighted average.
 * @param {string} grade - The letter grade.
 */
function displayResult(name, average, grade) {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');

    const isPassing = average >= 60;
    const statusClass = isPassing ? 'pass' : 'fail';
    const statusText = isPassing ? 'PASSED' : 'FAILED';

    resultDiv.innerHTML = `
        <h2>Results for ${name}</h2>
        <p><strong>Weighted Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Letter Grade:</strong> ${grade}</p>
        <p class="${statusClass}"><strong>Status:</strong> ${statusText}</p>
    `;
}
