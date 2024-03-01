let form = document.querySelector("form")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value ;
    let lastName = document.getElementById("last-name").value;
    let message = document.getElementById("message").value ; 

    addComment(firstName, lastName, message); 
    

    document.getElementById("nom").value = "";
    document.getElementById("commentaire").value = "";
})

function addComment(param1, param2 , param3) {
    
    let newComment = document.createElement("div");
    newComment.classList.add("message");
    
    
    newComment.innerHTML = "<strong>" + param1 + "</strong> " + "<strong>" + param2 + "</strong> " + param3;
    
    
    document.getElementById("comment-list").appendChild(newComment);
}