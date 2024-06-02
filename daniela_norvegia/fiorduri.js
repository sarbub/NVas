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
    // Load and display fiord elements the XML content
    loadXMLDoc('fiorduri.xml')
        .then(function(xml) {
            var InfoElement_1 = document.getElementById("first_info_el");
            var InfoElement_2 = document.getElementById("second_info_el");
            var InfoElement_3 = document.getElementById("third_info_el");
            var InfoElement_4 = document.getElementById("fourth_info_el");
            var InfoElement_5 = document.getElementById("fifth_info_el");
            if (InfoElement_1) {
                displayInfo(xml, InfoElement_1,0, "fiord");
                displayInfo(xml, InfoElement_2,1, "fiord");
                displayInfo(xml, InfoElement_3,2, "fiord");
                displayInfo(xml, InfoElement_4,3, "fiord");
                displayInfo(xml, InfoElement_5,4, "fiord");
            } else {
                console.error("Element with ID 'first_info_el' not found");
            }
        })
        .catch(function(error) {
            console.error(error);
        });
    });