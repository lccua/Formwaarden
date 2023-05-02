const setup = () => {
	let button = document.querySelector("#btnToon");
    button.addEventListener("click",  toonIsRoker)
}

const toonIsRoker = () =>{

    let chkPriority = document.querySelector("#chkIsRoker");

    if (chkPriority.checked){
        console.log("is een roker")
    }
    else{
        console.log("is geen roker")
    }

    toonMoedertaal()
}

const toonMoedertaal = () =>{
    let rbtMoedertaal = document.querySelector("input[name='rbtMoedertaal']:checked");
    console.log("moedertaal is "+rbtMoedertaal.value);

    toonFavorieteBuurland()

}

const toonFavorieteBuurland = () =>{

    let select = document.querySelector("#selFavorieteBuurland")
    let index = select.selectedIndex;

    let option = select.options[index];
    console.log("Uw favoriete buurland is: "+ option.textContent);
    toonBestelling()
}

const toonBestelling = () =>{

    let selectedOptions = document.querySelectorAll("#selBestelling option:checked");
    let string = "";
    selectedOptions.forEach(option => {
        string = string + ` ${option.value}`;
    });
    console.log(`Dit is de bestelling:${string}`)

}

window.addEventListener("load", setup);