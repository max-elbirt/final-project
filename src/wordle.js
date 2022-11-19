window.addEventListener("load", ()=> {
    document.querySelector("input:first-child").focus();
});

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.readOnly=true;
})
let idx=0;
inputs.forEach(addEventListener("keydown", (e) => {
    
    let cell_value = e.key;
    inputs[idx].value = cell_value;
    idx += 1;
    inputs[idx].focus()

    
}))

// const inputs = document.querySelectorAll("input")