
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
        model: "2022_mercedes-benz_sl_63_amg-v3.glb"
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
        model: "2025_mercedes-benz_g-class_amg_g_63-v1.glb"
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
    category: "COMPACT SUV COLLECTION",
    subtitle: "Compact elegance. Unmistakable presence.",
    speed: "8.9 s",
    engine: "1.3L Turbo Petrol",
    power: "163 hp",
    top: "210 km/h",
    model: "models/gla-class.glb"
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
// INTERACTIVE CAR COLOURS

const colorOptions = document.querySelectorAll(".color-option");
const selectedColor = document.getElementById("selected-color");

const colorNames = {
    "#111111": "Obsidian Black",
    "#c0c0c0": "High-Tech Silver",
    "#142b50": "Nautic Blue",
    "#800d18": "Patagonia Red"
};

colorOptions.forEach(button => {

    button.addEventListener("click", () => {

        const color = button.dataset.color;

        colorOptions.forEach(option => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        selectedColor.textContent = colorNames[color];

        const viewer = document.getElementById("car-viewer");

        // Change the 3D model's material colour
        viewer.model?.materials.forEach(material => {
            material.pbrMetallicRoughness.setBaseColorFactor(
                color === "#111111" ? [0.07, 0.07, 0.07, 1] :
                color === "#c0c0c0" ? [0.65, 0.65, 0.65, 1] :
                color === "#142b50" ? [0.04, 0.12, 0.28, 1] :
                [0.35, 0.02, 0.06, 1]
            );
        });

    });

});

// =====================================
// MERCEDES-BENZ INTERACTIVE SHOWROOM
// =====================================

// VEHICLE COLLECTION

const vehicles = {

    sclass: {
        name: "Mercedes-Benz S-Class",
        tagline: "THE ART OF LUXURY.",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1800&q=90"
    },

    cclass: {
        name: "Mercedes-Benz C-Class",
        tagline: "ELEGANCE IN MOTION.",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1800&q=90"
    },

    eclass: {
        name: "Mercedes-Benz E-Class",
        tagline: "INTELLIGENCE MEETS LUXURY.",
        image: "https://images.unsplash.com/photo-1618843479618-39b9f7d9b5d1?auto=format&fit=crop&w=1800&q=90"
    },

    gclass: {
        name: "Mercedes-Benz G-Class",
        tagline: "STRONGER THAN EVER.",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1800&q=90"
    },

    gle: {
        name: "Mercedes-Benz GLE",
        tagline: "FREEDOM WITHOUT LIMITS.",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1800&q=90"
    },

    amg: {
        name: "Mercedes-AMG GT",
        tagline: "BORN TO PERFORM.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90"
    },

    gls: {
        name: "Mercedes-Benz GLS",
        tagline: "SPACE. PRESENCE. PRESTIGE.",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1800&q=90"
    },

    eqs: {
        name: "Mercedes-Benz EQS",
        tagline: "A NEW ERA OF ELECTRIC LUXURY.",
        image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1800&q=90"
    }

};


// FEATURE INFORMATION

const features = {

    lights: {
        category: "EXTERIOR DESIGN",
        title: "Signature Lighting",
        description: "Discover the distinctive lighting design that gives Mercedes-Benz vehicles their elegant and confident appearance.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
        specOne: "LED Lighting",
        specTwo: "Modern Design"
    },

    wheels: {
        category: "EXTERIOR DETAILS",
        title: "Premium Alloy Wheels",
        description: "Explore beautifully designed wheels that complement the vehicle's proportions and deliver a distinctive road presence.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85",
        specOne: "Alloy Styling",
        specTwo: "Sporty Design"
    },

    dashboard: {
        category: "DIGITAL EXPERIENCE",
        title: "Intelligent Dashboard",
        description: "Experience a modern digital cockpit with intuitive controls, advanced displays and innovative entertainment technology.",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1000&q=85",
        specOne: "Digital Display",
        specTwo: "Smart Controls"
    },

    seats: {
        category: "INTERIOR COMFORT",
        title: "Luxury Seating",
        description: "Discover premium seating with carefully considered materials and comfort-focused design for an enjoyable journey.",
        image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85",
        specOne: "Premium Upholstery",
        specTwo: "Luxury Comfort"
    },

    roof: {
        category: "INTERIOR DESIGN",
        title: "Panoramic Sunroof",
        description: "Enjoy an open and airy cabin atmosphere with panoramic roof designs available on selected Mercedes-Benz models.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=85",
        specOne: "Panoramic Glass",
        specTwo: "Open Cabin Feel"
    },

    rear: {
        category: "EXTERIOR DESIGN",
        title: "Distinctive Rear Design",
        description: "Explore the carefully sculpted rear styling and refined finishing details that complete the vehicle's appearance.",
        image: "https://images.unsplash.com/photo-1618843479618-39b9f7d9b5d1?auto=format&fit=crop&w=1000&q=85",
        specOne: "Modern Styling",
        specTwo: "Elegant Finish"
    },

    steering: {
        category: "DRIVER EXPERIENCE",
        title: "Multifunction Steering",
        description: "Discover the driver-focused steering design and convenient controls that help make every journey more intuitive.",
        image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1000&q=85",
        specOne: "Driver Focus",
        specTwo: "Easy Controls"
    },

    performance: {
        category: "ENGINEERING",
        title: "Power & Performance",
        description: "Explore the engineering behind Mercedes-Benz performance. Engine specifications and performance vary by model and trim.",
        image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1000&q=85",
        specOne: "Advanced Engineering",
        specTwo: "Model Dependent"
    }

};


// GET HTML ELEMENTS

const mainCar = document.getElementById("mainCar");
const carName = document.getElementById("carName");
const carTagline = document.getElementById("carTagline");

const sidebar = document.getElementById("featureSidebar");
const carDisplay = document.getElementById("carDisplay");


// OPEN SIDEBAR

function openFeature(featureName) {

    const feature = features[featureName];

    if (!feature) return;

    document.getElementById("featureImage").src = feature.image;

    document.getElementById("featureCategory").textContent =
        feature.category;

    document.getElementById("featureTitle").textContent =
        feature.title;

    document.getElementById("featureDescription").textContent =
        feature.description;

    document.getElementById("specOne").textContent =
        feature.specOne;

    document.getElementById("specTwo").textContent =
        feature.specTwo;

    sidebar.classList.add("active");

    carDisplay.classList.add("sidebar-open");
}


// CLOSE SIDEBAR

function closeFeature() {

    sidebar.classList.remove("active");

    carDisplay.classList.remove("sidebar-open");

}


// CLICK ON CAR HOTSPOTS

document.querySelectorAll(".hotspot").forEach(button => {

    button.addEventListener("click", function() {

        const selectedFeature = this.dataset.feature;

        openFeature(selectedFeature);

    });

});


// CLOSE BUTTON

document.getElementById("closeSidebar").addEventListener("click", function() {

    closeFeature();

});


// ESCAPE KEY CLOSES SIDEBAR

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeFeature();

    }

});


// CHANGE VEHICLE

function changeVehicle(model) {

    const vehicle = vehicles[model];

    if (!vehicle) return;

    mainCar.style.opacity = "0";

    setTimeout(() => {

        mainCar.src = vehicle.image;

        mainCar.onload = () => {
            mainCar.style.opacity = "1";
        };

        mainCar.onerror = () => {
            mainCar.style.opacity = "1";
        };

    }, 200);

    carName.textContent = vehicle.name;

    carTagline.textContent = vehicle.tagline;

    // UPDATE ACTIVE BUTTON

    document.querySelectorAll(".model-btn").forEach(button => {

        button.classList.remove("active");

        if (button.dataset.model === model) {

            button.classList.add("active");

        }

    });

    // UPDATE MODEL NUMBER

    const modelNumbers = {
        sclass: "01 / 08",
        cclass: "02 / 08",
        eclass: "03 / 08",
        gclass: "04 / 08",
        gle: "05 / 08",
        amg: "06 / 08",
        gls: "07 / 08",
        eqs: "08 / 08"
    };

    document.getElementById("modelNumber").textContent =
        modelNumbers[model];

    closeFeature();

}


// MODEL SELECTION BUTTONS

document.querySelectorAll(".model-btn").forEach(button => {

    button.addEventListener("click", function() {

        const selectedModel = this.dataset.model;

        changeVehicle(selectedModel);

    });

});
