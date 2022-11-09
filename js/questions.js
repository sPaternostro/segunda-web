(function () {
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight; //scrollheight nos da el alto min para q un elemento se muestre, pero NO da padding.
            }

            answer.style.height = `${height}px`;
        })

    });


})();