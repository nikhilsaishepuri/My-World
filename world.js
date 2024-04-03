
document.querySelectorAll(".allPaths").forEach(e => {
e.setAttribute('class', `allPaths ${e.id}`);
e.addEventListener("mouseover", function () {
    window.onmousemove=function (j) {
        x = j.clientX
        y = j.clientY
        document.getElementById('name').style.top = y-60  + 'px'
        document.getElementById('name').style.left = x +10 + 'px'
    }
    const classes=e.className.baseVal.replace(/ /g, '.')         
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "yellow"
        country.style.cursor="pointer"
    })
    document.getElementById("name").style.opacity = 1
    
    document.getElementById("namep").innerText = e.id
})
e.addEventListener("mouseleave", function () {
    const classes=e.className.baseVal.replace(/ /g, '.')
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "#ececec"
        
    })
    document.getElementById("name").style.opacity = 0
})

e.addEventListener("click",function(){
    getUser(e.id)
})

})

document.getElementById('search-box').addEventListener('input', function() {
    
    const searchValue = this.value.trim().toLowerCase().replace(/\s/g, '');

    document.querySelectorAll(".allPaths").forEach(e => {
        const countryName = e.id.replace(/\s/g, '').toLowerCase();
        
        if (searchValue === '') {           
            e.style.fill = "#ececec";
        } else if (countryName.includes(searchValue)) {
            e.style.fill = "yellow";
            e.style.cursor = "pointer";
        } else {
            e.style.fill = "#ececec";
        }
    });
});

