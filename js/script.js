const headerAcc = document.querySelectorAll('.accordion__header'),
      bodyAcc = document.querySelectorAll('.accordion__body');

headerAcc.forEach(header => {
    header.addEventListener('click', (e) => {
        showOrHideBodyText(e);
    });
});


function showOrHideBodyText(e){
    let target = e.target;

    if (target.classList.contains('accordion__header')){
        headerAcc.forEach(header => {
            header.classList.remove('active');
        });

        let nextElement = target.nextElementSibling;

        if (nextElement.style.maxHeight){
            bodyAcc.forEach(body => {
                body.style.maxHeight = null;
            });
            nextElement.style.maxHeight = null;
            target.classList.remove('active');
        } else {
            bodyAcc.forEach(body => {
                body.style.maxHeight = null;
            });
            nextElement.style.maxHeight = nextElement.scrollHeight + "px";
            target.classList.add('active');
        }
    }
}