'use strict';

window.onload = function(e) {
    var pdf = document.getElementById("pdf_file");
    pdf.src = "eviction_notice.pdf";
	document.getElementById("input_file_name").value = "eviction_notice";
}

document.getElementById("submit").addEventListener('click', function() {
    var name = document.getElementById("input_name").innerHTML;
    var Address = document.getElementById("input_address").innerHTML;
    var County = document.getElementById("input_county").innerHTML;
    var year = document.getElementById("input_year").innerHTML;
    var filename = document.getElementById("input_file_name").innerHTML;
    var page = document.getElementById("input_page_number").innerHTML;
    alert("thank you");
    document.getElementById("newData").style.display = "none";
    document.getElementById("pdf").style.display = "none";
    
})

function view(input) {
    if(input == "newData") {
        document.getElementById("editData").style.display = "none";
        document.getElementById("newData").style.display = "inline-block";
        document.getElementById("pdf").style.display = "inline-block";
    } else {
        document.getElementById("newData").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("editData").style.display = "inline-block";
    }
}