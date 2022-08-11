import React from "react";

function DeleteButton() {
        const li = document.querySelectorAll('li');
        const removeInput = document.querySelectorAll(".remove");
    
        for (var index = 0; index < li.length; index++) {
            removeInput[index].addEventListener("click", function(){
                this.closest(".lineItem").remove();
            })
        }
    }

export default DeleteButton;