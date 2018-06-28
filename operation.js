
var index = 0;
var selectedNode;


document.getElementById('submit').addEventListener('click', function () {

    var title = document.getElementById('title');
    var details = document.getElementById('details');
    var errorTitle = document.getElementById('errorTitle');
    var errorDetails = document.getElementById('errorDetails');
    var newDetails = document.getElementById('newData');
    var newDiv = document.createElement('div');
    var editbtn = document.createElement("button");

    var editbtnlabel = document.createTextNode("Edit");
    var deletebtn = document.createElement("button");

    var deletebtnlabel = document.createTextNode("Delete");

    var flag = false;
    if (title.value == "") {

        errorTitle.innerHTML = "Title field is required";
    }

    if (details.value == "") {
        errorDetails.innerHTML = "Details field is required";
    }

    if (title.value != "" && details.value != "") {


        if (selectedNode && selectedNode.childNodes[0] && selectedNode.childNodes[0].nodeValue) {

            selectedNode.childNodes[0].nodeValue = 'Title :' + title.value + ',' + 'Details :' + details.value;

        }
        else {
            newDiv.className = 'createdDiv';
            editbtn.className = 'crudBtn';
            deletebtn.className = 'crudBtn';
            editbtn.id = "editbtn" + index;
            deletebtn.id = "deletebtn" + index;
            editbtn.appendChild(editbtnlabel);
            deletebtn.appendChild(deletebtnlabel);
            newDiv.innerHTML += 'Title :' + title.value + ',' + 'Details :' + details.value + editbtn.outerHTML + deletebtn.outerHTML;

            newDetails.appendChild(newDiv);
            var selectedIndex = index;
               
            document.getElementById('deletebtn' + selectedIndex).addEventListener('click', function () {
                console.log("selectedIndex", selectedIndex)
                newDetails.removeChild(newDiv)
                title.value = "";
                details.value = "";

           })
        
      
            document.getElementById('editbtn' + selectedIndex).addEventListener('click', function () {
                var editData = document.getElementsByClassName('createdDiv');
                var titleRtrv = editData[selectedIndex].childNodes[0].nodeValue.split(',')[0].split(':')[1];
                var detailsRtrv = editData[selectedIndex].childNodes[0].nodeValue.split(',')[1].split(':')[1];
                selectedNode = document.getElementsByClassName('createdDiv')[selectedIndex];
                title.value = titleRtrv;
                details.value = detailsRtrv;
                console.log("selectedIndex", selectedIndex)

            })
            index++;
        }
        // if(selectedNode)

        title.value = "";
        details.value = "";  
        
    }

})









