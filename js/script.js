
function additionalItems(val) {
    const containers = document.querySelectorAll('.cross');
    containers.forEach((container)=>{
        container.hidden = val;
    })
};

function onBtn() {
    const onPrevBtn = document.querySelector('.onprevBtn');
    let r = document.querySelector(':root');
    r.style.setProperty('--border-bottom-color', "none");
}

function offBtn() {
    const offPrevBtn = document.querySelector('.offprevBtn');
    let r = document.querySelector(':root');
    r.style.setProperty('--border-bottom-color', "rgb(139, 139, 139)");
}

// window.addEventListener('beforeprint', () => console.log("printing"))



function showEdit(val){
    const pencils = document.querySelectorAll(".pencil");
    pencils[val].hidden = !(pencils[val].hidden);
}
