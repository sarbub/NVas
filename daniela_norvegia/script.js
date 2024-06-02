

// xml part

function loadXMLDoc(filename) {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log("XML file loaded successfully");
                resolve(this.responseXML);
            } else if (this.readyState == 4) {
                console.error("Error: Could not load XML file");
                reject("Error: Could not load XML file");
            }
        };
        xhttp.open("GET", filename, true);
        xhttp.send();
    });
}

// Function to parse the XML and display the data
function displayInfo(xml, element,index, tagname) {
    try {
        var fiordInfo = xml.getElementsByTagName(tagname)[index].textContent;
        element.innerText = fiordInfo;
    } catch (error) {
        console.error("Error parsing or displaying XML data", error);
    }
}

// display cascade information

loadXMLDoc('norway_info.xml')
.then(function(xml) {
var InfoElement_1 = document.getElementById("about_norway_p");
if (InfoElement_1) {
    displayInfo(xml, InfoElement_1,0, "information");
} else {
    console.error("Element with ID 'first_info_el' not found");
}
})
.catch(function(error) {
console.error(error);
});


// Corrected display_data function
function display_data(event) {
    let button = event.target;
    const buttonValue = button.getAttribute("data-value");
    console.log(buttonValue);

    let first_doc = document.getElementById("first_page_container");
    let second_doc = document.getElementById("second_page_container");
    let third_doc = document.getElementById("third_page_container");

    if (buttonValue === "btn_1") {
        first_doc.style.display = "flex";
        second_doc.style.display = "none";
        third_doc.style.display = "none";
        button_3.classList.remove('active_button');
        button_2.classList.remove('active_button');
        button_1.setAttribute("class", "active_button");
    }
    if (buttonValue === "btn_2") {
        first_doc.style.display = "none";
        second_doc.style.display = "flex";
        third_doc.style.display = "none";
        button_1.classList.remove('active_button');
        button_3.classList.remove('active_button');
        button_2.setAttribute("class", "active_button");
    }
    if (buttonValue === "btn_3") {
        first_doc.style.display = "none";
        second_doc.style.display = "none";
        third_doc.style.display = "flex";
        button_1.classList.remove('active_button');
        button_2.classList.remove('active_button');
        button_3.setAttribute("class", "active_button");
    }
}

// open the responsive menu section

let open_menu = document.getElementById("menu_icon");

open_menu.addEventListener("click", function() {
    let responsive_a_container = document.getElementById("responsive_a_container");
    let a_container = document.getElementById("a_container");

    if (responsive_a_container.style.display === "flex") {
        a_container.style.display = "flex";
        responsive_a_container.style.display = "none";
    } else {
        a_container.style.display = "none";
        responsive_a_container.style.display = "flex";
    }


});

