const setup = () => {
	let button = document.querySelector("#btnToon");
    button.addEventListener("click", toonFavorieteBuurland)


}


const toonIsRoker = () =>{


}

const toonMoedertaal = () =>{
    let radioButtons = document.querySelectorAll('input[name="rbtMoedertaal"]');
    let selectedRadioButton;

    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            selectedRadioButton = radioButton;
        }
    });

    console.log(selectedRadioButton.value);
    

}

const toonFavorieteBuurland = () =>{

    let select = document.querySelector("#selFavorieteBuurland")
    let index = select.selectedIndex;

    let option = select.options[index];
    console.log(option.textContent);
    toonBestelling()
}

const toonBestelling = () =>{

    let selectedOptions = document.querySelectorAll("#selBestelling option:checked");

    selectedOptions.forEach(option => {
        console.log(option.value);
    });

    toonMoedertaal()

}



window.addEventListener("load", setup);