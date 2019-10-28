const feautersList = document.querySelectorAll('.feauters-list-link');
for (let i = 0; i < feautersList.length; i++) {
    feautersList[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        
        const target = evt.target;
        const activeElement = document.querySelector('.feauters-discription-item-active');
        const activeLink = document.querySelector('.feauters-list-link-active');

        if (activeLink !== target) {
        activeElement.classList.remove('feauters-discription-item-active');
        activeLink.classList.remove('feauters-list-link-active');
        }
        const dataText = target.dataset.link;
        const detailText = document.querySelector(`#${dataText}`);
        
        target.classList.add('feauters-list-link-active');
        detailText.classList.add('feauters-discription-item-active');
    })
}