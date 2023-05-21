/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
//Nicola Janse van Rensburg_C22235

window.alert('Javascript is linked');


 var name = prompt("Please enter your name:");
    var greetingElement = document.getElementById("greeting");

    if (name) {
      greetingElement.innerHTML = "Hello, " + name + "!";
    } else {
      greetingElement.innerHTML = "Hello";
    }

    document.getElementById("rsvpForm").addEventListener("submit", function(event) {
      event.preventDefault();

      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var contactDetails = document.getElementById("contactDetails").value;

      var row = document.createElement("tr");
      var cell1 = document.createElement("td");
      var cell2 = document.createElement("td");
      var cell3 = document.createElement("td");
      var cell4 = document.createElement("td");
      var acceptButton = document.createElement("button");
      var declineButton = document.createElement("button");

      cell1.innerHTML = firstName;
      cell2.innerHTML = lastName;
      cell3.innerHTML = contactDetails;
      acceptButton.innerHTML = "Accept";
      declineButton.innerHTML = "Decline";

      acceptButton.addEventListener("click", function() {
        moveRow(row, waitingTable, acceptedTable);
        cell4.removeChild(acceptButton);
        cell4.removeChild(declineButton);
      });

      declineButton.addEventListener("click", function() {
        moveRow(row, waitingTable, declinedTable);
        cell4.removeChild(acceptButton);
        cell4.removeChild(declineButton);
      });

      cell4.appendChild(acceptButton);
      cell4.appendChild(declineButton);

      row.appendChild(cell1); // function to move a guest from waiting list to designated table
    function moveRow(row, sourceTable, destinationTable) {
      sourceTable.deleteRow(row.rowIndex);
      destinationTable.appendChild(row);
    }
      row.appendChild(cell2);
      row.appendChild(cell3);
      row.appendChild(cell4);

      waitingTable.appendChild(row);

      document.getElementById("rsvpForm").reset();
    });



