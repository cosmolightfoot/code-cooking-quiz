const quizForm = document.getElementById('quiz');

quizForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('form submitted');
    const formData = new FormData(quizForm);
    const answers = {
        weapon: formData.get('weapons')
    };
    console.log('answers', answers);
});
