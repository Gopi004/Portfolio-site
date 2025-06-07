document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".sub");

    submitBtn.addEventListener("click", function () {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const msg = document.getElementById("msg").value.trim();

        if (!name || !email || !msg) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulating form submission
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Optional: clear form after submit
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
    });
});