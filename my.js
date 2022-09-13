
function testGS(){
    
    const url = "https://script.google.com/macros/s/AKfycbyP3Xu4-PeAAZebALYT9Do3V4nFC8chxzcw3yBOm6cx9Kw5k_A/exec";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click",testGS)