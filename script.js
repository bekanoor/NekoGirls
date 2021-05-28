const date = document.querySelector('.date');

function NekoClock() {
    let dateManager = new Date();

    let hours = dateManager.getHours();
    let minutes = dateManager.getMinutes();
    let sec = dateManager.getSeconds();
    
    date.innerHTML = 
    `<img src="./NekoGirls/${Math.trunc(hours / 10)}.gif"><img src="./NekoGirls/${hours % 10}.gif"> 
    <img src="./NekoGirls/cherry.png"> 
    <img src="./NekoGirls/${Math.trunc(minutes / 10)}.gif"><img src="./NekoGirls/${minutes % 10}.gif">
    <img src="./NekoGirls/cherry.png"> 
    <img src="./NekoGirls/${Math.trunc(sec / 10)}.gif"><img src="./NekoGirls/${sec % 10}.gif">`; 

    setTimeout(NekoClock, 1000);
}

NekoClock();