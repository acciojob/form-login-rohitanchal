function getFormvalue() {
    event.preventDefault(); // Prevents the default form submission behavior
    
    const form = document.getElementById("form1");
    const firstName = form.elements["fname"].value; // Get first name
    const lastName = form.elements["lname"].value; // Get last name
    
    alert(firstName + " " + lastName); // Show the full name in an alert
}
