// selecting the elements
const padlock = document.querySelector(".padlock");
const text = document.querySelector(".text");


// function determines the displaying
const displaying_block = () => {
    text.style.display = "block";
}

const displaying_none = () => {
    text.style.display = "none";
}


padlock.addEventListener("mouseenter", displaying_block);

padlock.addEventListener("mouseleave", displaying_none);

// locking the text
let padlock_clicked = false;


padlock.addEventListener("click", event => {
    console.log(padlock);
    padlock_clicked = !padlock_clicked;
    if(padlock_clicked){
        padlock.classList.add("padlock.padlock--clicked");
        displaying_block();
        padlock.removeEventListener("mouseleave", displaying_none);
        padlock.removeEventListener("mouseenter", displaying_block);
    } else{
        padlock.classList.remove("padlock.padlock--clicked");
        displaying_none();
        padlock.addEventListener("mouseleave", displaying_none);
        padlock.addEventListener("mouseenter", displaying_block);

    }    
});




