document.getElementById("passenger-details-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const passengerCount = parseInt(localStorage.getItem("passengerCount"));
    const passengerDetails = [];
  
    for (let i = 1; i <= passengerCount; i++) {
      const passenger = {
        name: document.getElementById(`passenger-${i}-name`).value,
        gender: document.getElementById(`passenger-${i}-gender`).value,
        contact: document.getElementById(`passenger-${i}-contact`).value,
        age: document.getElementById(`passenger-${i}-age`).value
      };
  
      passengerDetails.push(passenger);
    }
  
    // You can do further processing with the passenger details, such as storing them or submitting them to a server.
  
    // Redirect to the next page or perform other actions as needed.
    // For example, you can redirect to a confirmation page:
    window.location.href = "Confirmation.html";
  });
  
  window.addEventListener("DOMContentLoaded", function() {
    const passengerCount = parseInt(localStorage.getItem("passengerCount"));
    const form = document.getElementById("passenger-details-form");
  
    for (let i = 1; i <= passengerCount; i++) {
      const passengerGroup = document.createElement("div");
      passengerGroup.classList.add("form-group");
  
      const nameLabel = document.createElement("label");
      nameLabel.textContent = `Passenger ${i} Name:`;
  
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = `passenger-${i}-name`;
      nameInput.required = true;
  
      const genderLabel = document.createElement("label");
      genderLabel.textContent = `Passenger ${i} Gender:`;
  
      const genderInput = document.createElement("select");
      genderInput.id = `passenger-${i}-gender`;
      genderInput.innerHTML = `
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      `;
  
      const contactLabel = document.createElement("label");
      contactLabel.textContent = `Passenger ${i} Contact Number:`;
  
      const contactInput = document.createElement("input");
      contactInput.type = "text";
      contactInput.id = `passenger-${i}-contact`;
      contactInput.required = true;
  
      const ageLabel = document.createElement("label");
      ageLabel.textContent = `Passenger ${i} Age:`;
  
      const ageInput = document.createElement("input");
      ageInput.type = "number";
      ageInput.id = `passenger-${i}-age`;
      ageInput.required = true;
  
      passengerGroup.appendChild(nameLabel);
      passengerGroup.appendChild(nameInput);
      passengerGroup.appendChild(genderLabel);
      passengerGroup.appendChild(genderInput);
      passengerGroup.appendChild(contactLabel);
      passengerGroup.appendChild(contactInput);
      passengerGroup.appendChild(ageLabel);
      passengerGroup.appendChild(ageInput);
  
      form.appendChild(passengerGroup);
    }
  });
  