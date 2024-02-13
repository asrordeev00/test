let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "sertse maeeeeeeeeeeeeeeeeeee";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})