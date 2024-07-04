document.addEventListener('DOMContentLoaded', () => {
    const startQuizBtn = document.getElementById('start-quiz');
    const quizContainer = document.getElementById('quiz-container');
    const authForm = document.getElementById('auth');
    const loginBtn = document.getElementById('login-btn');
    const quizForm = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');
    const progressBar = document.getElementById('progress-bar');

    startQuizBtn.addEventListener('click', () => {
        startQuizBtn.style.display = 'none';
        quizContainer.style.display = 'block';
    });

    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Dummy authentication check
        if (username === 'Weezy' && password === 'password') {
            authForm.style.display = 'none';
            quizForm.style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });

    submitBtn.addEventListener('click', () => {
        let score = 0;

        const answers = {
            q1: 'yes',
            q2: 'no',
            q3: 'yes',
            q4: 'no',
            q5: 'yes'
        };

        // Check each answer against the correct answer
        for (const [question, correctAnswer] of Object.entries(answers)) {
            const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
            if (userAnswer && userAnswer.value === correctAnswer) {
                score++;
            }
        }

        // Display the result
        resultDiv.textContent = `You scored ${score} out of 5.`;
        resultDiv.style.display = 'block';
    });
});