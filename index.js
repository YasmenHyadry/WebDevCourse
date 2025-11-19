
//--page to nigatuve
//page : from HTML click example  /page:/01/demos/index.html 

function loadPage(page) {

    //Get Refrence for HTML ELEMENT BY ITS ID 
    //-- contentFrame is iframe element type 

    let iframeElement = document.getElementById("contentFrame");

    //-- Give the iframe the HTML address 
    iframeElement.src = page;

    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("show");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}
