'use strict';

window.onload = function(e) {
    var pdf = document.getElementById("pdf_file");
    pdf.src = "pdf/eviction_notice.pdf";
}

document.getElementById("submit_button").addEventListener('click', function() {
    var name = document.getElementById("input_name").innerHTML;
    var Address = document.getElementById("input_address").innerHTML;
    var County = document.getElementById("input_county").innerHTML;
    var year = document.getElementById("input_year").innerHTML;
    var filename = document.getElementById("input_file_name").innerHTML;
    var page = document.getElementById("input_page_number").innerHTML;
    alert("thank you");
    window.location.href = "index.html";
})
