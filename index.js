const questions = document.querySelectorAll('.question')

questions.forEach(question => {
    question.addEventListener('click', () => {
        const info = question.querySelector('.question-info')
        const icon = question.querySelector('.question-icon')
        info.classList.toggle('active')
        if( icon.getAttribute('src') === './assets/images/icon-plus.svg') icon.src = './assets/images/icon-minus.svg'
        else icon.src = './assets/images/icon-plus.svg'
    })
})

