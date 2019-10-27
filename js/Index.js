const feautersList = document.querySelectorAll('.feauters-list-link');
console.log(feautersList);
for (let i = 0; i < feautersList.length; i++) {
    feautersList[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        
        const target = evt.target;
        // console.log(target);
        const dataText = target.dataset.link;
        // console.log(dataText);
        const detailText = document.querySelector(`#${dataText}`);
        console.log(detailText);
    })
}