

function testGS(){
    
    const url = "https://script.google.com/macros/s/AKfycbyP3Xu4-PeAAZebALYT9Do3V4nFC8chxzcw3yBOm6cx9Kw5k_A/exec";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

function adddGS(){
    
    const url = "https://script.google.com/macros/s/AKfycbyP3Xu4-PeAAZebALYT9Do3V4nFC8chxzcw3yBOm6cx9Kw5k_A/exec";
    
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({"First":"Jose","Last":"Villacorte","Telephone":324134}) // body data type must match "Content-Type" header
    });
}


    
document.getElementById("btn2").addEventListener("click",adddGS);

document.getElementById("btn").addEventListener("click",testGS);

