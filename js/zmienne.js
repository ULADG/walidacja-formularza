"use strict";

var wyslijBtn = document.getElementById("wyslij");

function waliduj() {
    




if(document.getElementById("name").value.trim() == "") {
    alert("wypełnij imie");
}}

wyslijBtn.addEventListener("click", waliduj);