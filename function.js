var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdown = this.nextElementSibling;
        if (dropdown.style.maxHeight) {
            dropdown.style.maxHeight = null;
        } else {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        }
    });
}

var checkBox = document.querySelector(".dingButton");
checkBox.addEventListener('change', function() {

    if (this.checked){
        document.body.style.fontFamily = "Wingdings, Wingdings 2, Wingdings 3, sans-serif";
        console.log("wingding mode on")
    }
    else{
        document.body.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
        console.log("wingding mode off")
    }

});
