        
        document.addEventListener('DOMContentLoaded', function() {
            // Function to load the XML file
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

        loadXMLDoc('cascade.xml')
        .then(function(xml) {
            var InfoElement_1 = document.getElementById("first_info_el");
            var InfoElement_2 = document.getElementById("second_info_el");
            var InfoElement_3 = document.getElementById("third_info_el");
            var InfoElement_4 = document.getElementById("fourth_info_el");
            if (InfoElement_1) {
                displayInfo(xml, InfoElement_1,0, "cascada");
                displayInfo(xml, InfoElement_2,1, "cascada");
                displayInfo(xml, InfoElement_3,2, "cascada");
                displayInfo(xml, InfoElement_4,3, "cascada");
            } else {
                console.error("Element with ID 'first_info_el' not found");
            }
        })
        .catch(function(error) {
            console.error(error);
        });

        

        // Add event listeners to the buttons
let button_1 = document.getElementById("button_1");
let button_2 = document.getElementById("button_2");

button_1.addEventListener("click", display_data);
button_2.addEventListener("click", display_data);

// Corrected display_data function
function display_data(event) {
    let button = event.target;
    const buttonValue = button.getAttribute("data-value");
    console.log(buttonValue);

    let first_doc = document.getElementById("first_page_container");
    let second_doc = document.getElementById("second_page_container");

    if (buttonValue === "btn_1") {
        first_doc.style.display = "flex";
        second_doc.style.display = "none";
        button_2.classList.remove('active_button');
        button_1.setAttribute("class", "active_button");
    }
    if (buttonValue === "btn_2") {
        first_doc.style.display = "none";
        second_doc.style.display = "flex";
        button_1.classList.remove('active_button');
        button_2.setAttribute("class", "active_button");
    }
}


    });