let form = document.querySelector("form")


form.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value ;
    let lastName = document.getElementById("last-name").value;
    let message = document.getElementById("message").value ; 

    addComment(firstName, lastName, message); 
     
    document.getElementById("last-name").value = "";
    document.getElementById("first-name").value = "";
    document.getElementById("message").value = "";
})

function addComment(param1, param2 , param3) {

    let styleContent = document.createElement("div")
    styleContent.classList.add("flex", "space-x-4", "text-sm", "text-gray-500")

    let border = document.createElement("div")
    border.classList.add("flex-1", "py-10", "border-t", "border-gray-200")

    let newName = document.createElement("h3");
    newName.classList.add("font-medium" ,"text-gray-900");
    newName.innerHTML =  param1  + " " + param2;

    let styleComment = document.createElement("div")
    styleComment.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500")
    let newComment = document.createElement("p")
    newComment.innerHTML = param3
    
    document.getElementById("comment-list").appendChild(border);
    document.getElementById("comment-list").appendChild(styleContent);
    styleContent.appendChild(border)
    border.appendChild(newName)
    border.appendChild(styleComment)
    border.appendChild(newComment)
}