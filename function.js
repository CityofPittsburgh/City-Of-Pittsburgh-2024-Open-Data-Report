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

//wingding mode (dont leave this in!)

document.addEventListener("DOMContentLoaded", () => {

    const checkBox = document.querySelector('.dingButton');
    if (checkBox) {
        checkBox.addEventListener('change', function () {

            if (this.checked) {
                document.body.style.fontFamily = "Webdings, Arial, sans-serif"
                console.log("wingding mode on")
            }
            else {
                document.body.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
                console.log("wingding mode off")
            }

        });
    } else {
        console.error("No element found with .dingButton");
    }
});
