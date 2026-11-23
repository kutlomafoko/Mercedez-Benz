
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// SET MINIMUM BOOKING DATE

const bookingDate = document.getElementById("bookingDate");

if (bookingDate) {
    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    bookingDate.min = localToday;
}

// EMAIL CONFIGURATION

// Replace with your actual dealership email.
const dealershipEmail = "YOUR_EMAIL@example.com";

// CONTACT AND BOOKING FORMS

function setupForm(formId, subject) {

    const form = document.getElementById(formId);

    if (!form) return;

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!form.reportValidity()) return;

        const formData = new FormData(form);

        let message = subject + "\n\n";

        for (const [key, value] of formData.entries()) {
            message += key.toUpperCase() + ": " + value + "\n";
        }

        const mailto =
            "mailto:" + dealershipEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(message);

        window.location.href = mailto;

        alert("Your email application will open. Send the prepared email to submit your enquiry.");

    });
}

setupForm("contactForm", "Mercedes-Benz Customer Enquiry");

setupForm("bookingForm", "Mercedes-Benz Test Drive Booking");

const vehicles = {

    sl: {
        name: "SL-CLASS",
        category: "PERFORMANCE COLLECTION",
        subtitle: "Pure driving pleasure.",
        speed: "4.1 s",
        engine: "V8",
        power: "449 hp",
        top: "155 mph",
        model: ""
    },

    cls: {
        name: "CLS-CLASS",
        category: "LUXURY COLLECTION",
        subtitle: "Elegance in every detail.",
        speed: "Model dependent",
        engine: "Multiple options",
        power: "Model dependent",
        top: "Model dependent",
        model: "mercedes-benz_cls53_amg_2022-v1.glb"
    },

    c: {
        name: "C-CLASS",
        category: "LUXURY SEDAN",
        subtitle: "Designed around you.",
        speed: "Model dependent",
        engine: "Multiple options",
        power: "Model dependent",
        top: "Model dependent",
        model: "mercedes-benz_c-class_w206_amg-line_2022-v3.glb"
    },

    g: {
        name: "G-CLASS",
        category: "OFF-ROAD COLLECTION",
        subtitle: "Unmistakable presence.",
        speed: "Model dependent",
        engine: "Multiple options",
        power: "Model dependent",
        top: "Model dependent",
        model: ""
    },

    s: {
        name: "S-CLASS",
        category: "FLAGSHIP COLLECTION",
        subtitle: "The essence of luxury.",
        speed: "Model dependent",
        engine: "Multiple options",
        power: "Model dependent",
        top: "Model dependent",
        model: "mersedes-benz_s-class_w221-v1.glb"
    },

    gla: {
        name: "GLA",
        category: "ELECTRIC COLLECTION",
        subtitle: "The future moves differently.",
        speed: "Model dependent",
        engine: "Electric",
        power: "Version dependent",
        top: "Version dependent",
        model: "mercedes-benz_gla-class_2020-v1.glb"
    }

};

const modelOptions = document.querySelectorAll(".model-option");
const viewer = document.getElementById("car-viewer");

function displayVehicle(id) {

    const vehicle = vehicles[id];

    if (!vehicle) return;

    // Update vehicle name
    document.getElementById("model-name").textContent =
        vehicle.name;

    document.getElementById("model-category").textContent =
        vehicle.category;

    document.getElementById("model-subtitle").textContent =
        vehicle.subtitle;

    // Update specifications
    document.getElementById("spec-speed").textContent =
        vehicle.speed;

    document.getElementById("spec-engine").textContent =
        vehicle.engine;

    document.getElementById("spec-power").textContent =
        vehicle.power;

    document.getElementById("spec-top").textContent =
        vehicle.top;

    // Load selected 3D vehicle
    viewer.src = vehicle.model;

    // Update selected model on the left
    modelOptions.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.model === id
        );

    });

}

// Model selection
modelOptions.forEach(button => {

    button.addEventListener("click", () => {

        displayVehicle(button.dataset.model);

    });

});

// Start with SL-Class
displayVehicle("sl");
