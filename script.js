
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
const dealershipEmail = "kutlomafoko415@gmail.com";

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
    speed: "4.5 seconds",
    engine: "3.0L Inline-6 Turbo",
    power: "435 HP",
    top: "250 km/h",
    model: "mercedes-benz_cls53_amg_2022-v1.glb"
},

c: {
    name: "C-CLASS",
    category: "LUXURY SEDAN",
    subtitle: "Designed around you.",
    speed: "6.0 seconds",
    engine: "2.0L Turbo Inline-4",
    power: "258 HP",
    top: "250 km/h",
    model: "mercedes-benz_c-class_w206_amg-line_2022-v3.glb"
},

g: {
    name: "G-CLASS",
    category: "OFF-ROAD COLLECTION",
    subtitle: "Unmistakable presence.",
    speed: "4.4 seconds",
    engine: "4.0L V8 Biturbo",
    power: "585 HP",
    top: "220 km/h",
    model: "2025_mercedes-benz_g-class_amg_g_63-v1.glb"
},

s: {
    name: "S-CLASS",
    category: "FLAGSHIP COLLECTION",
    subtitle: "The essence of luxury.",
    speed: "5.4 seconds",
    engine: "5.5L V8",
    power: "388 HP",
    top: "250 km/h",
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




document.addEventListener("DOMContentLoaded", function () {

    // MERCEDES CLASSES
    // Add the corresponding pictures to your images folder.

    const models = {
        sclass: {
            name: "S-Class",
            tagline: "THE ART OF LUXURY.",
            image: "MERCEDES BENZ S 580 4MATIC ▪️YEAR_ 2023 ▪️MILEAGE_ BRAND NEW ▪️SPECS_ EURO ⠀ In stock & ready to ship worldwide 🌎 For any inquiry Contact us ☎️ +971 42 84 66 77 📧 Info@autolandmotor_ae 🌐 www.autolandmotor.jpg"
        },

        cclass: {
            name: "C-Class",
            tagline: "DESIGNED FOR YOUR DRIVE.",
            image: "
                "
        },

        eclass: {
            name: "E-Class",
            tagline: "INTELLIGENCE IN MOTION.",
            image: ""
        },

        gclass: {
            name: "G-Class",
            tagline: "STRONGER THAN EVER.",
            image: ""
        },

        gle: {
            name: "GLE",
            tagline: "THE POWER OF PRESENCE.",
            image: ""
        },

        amg: {
            name: "AMG GT",
            tagline: "BORN TO PERFORM.",
            image: ""
        },

        gls: {
            name: "GLS",
            tagline: "THE SUV OF EXCELLENCE.",
            image: "
                "
        },

        eqs: {
            name: "EQS",
            tagline: "A NEW ERA OF ELECTRIC LUXURY.",
            image: ""
        }
    };


    // FEATURES

    const features = {

        dashboard: {
            category: "INTERIOR TECHNOLOGY",
            title: "Luxury Dashboard",
            description: "Experience the intelligent Mercedes-Benz cockpit with modern digital displays, elegant materials and advanced vehicle controls.",
            specOne: "Digital Display",
            specTwo: "Smart Technology"
        },

        steering: {
            category: "DRIVING EXPERIENCE",
            title: "Multifunction Steering",
            description: "Discover a beautifully designed steering wheel with convenient controls that help create a comfortable driving experience.",
            specOne: "Multifunction Controls",
            specTwo: "Driver Comfort"
        },

        seats: {
            category: "INTERIOR COMFORT",
            title: "Premium Seats",
            description: "Explore the carefully designed seating, premium materials and comfort-focused features inside your Mercedes-Benz.",
            specOne: "Premium Materials",
            specTwo: "Comfort Design"
        },

        sunroof: {
            category: "INTERIOR EXPERIENCE",
            title: "Panoramic Sunroof",
            description: "Enjoy an open cabin atmosphere with the elegant panoramic glass roof design.",
            specOne: "Panoramic Glass",
            specTwo: "Open Cabin Feel"
        },

        wheels: {
            category: "EXTERIOR DESIGN",
            title: "Alloy Wheels",
            description: "Explore distinctive Mercedes-Benz wheel designs that combine elegant styling with engineering.",
            specOne: "Alloy Design",
            specTwo: "Road Presence"
        },

        lighting: {
            category: "LIGHTING TECHNOLOGY",
            title: "Advanced Lighting",
            description: "Discover the distinctive Mercedes-Benz lighting signature and modern headlight technology.",
            specOne: "LED Lighting",
            specTwo: "Modern Visibility"
        },

        exterior: {
            category: "EXTERIOR DESIGN",
            title: "Exterior Styling",
            description: "Explore the curves, bodywork and carefully finished details that create the Mercedes-Benz appearance.",
            specOne: "Premium Finish",
            specTwo: "Elegant Styling"
        },

        engine: {
            category: "ENGINEERING",
            title: "Engine & Performance",
            description: "Discover the engineering, performance technology and driving dynamics behind the Mercedes-Benz experience.",
            specOne: "Engine Technology",
            specTwo: "Driving Dynamics"
        }
    };


    // HTML ELEMENTS

    const mainCar = document.getElementById("mainCar");
    const carName = document.getElementById("carName");
    const carTagline = document.getElementById("carTagline");

    const classButtons = document.querySelectorAll(".class-btn");
    const featureButtons = document.querySelectorAll(".feature-btn");

    const featureDetails = document.getElementById("featureDetails");

    const featureCategory = document.getElementById("featureCategory");
    const featureTitle = document.getElementById("featureTitle");
    const featureDescription = document.getElementById("featureDescription");

    const specOne = document.getElementById("specOne");
    const specTwo = document.getElementById("specTwo");

    const closeFeatureBtn = document.getElementById("closeFeature");


    // SELECT A MERCEDES CLASS

    function changeModel(modelKey) {

        const model = models[modelKey];

        if (!model) return;

        // Change car name and tagline
        carName.textContent = model.name;
        carTagline.textContent = model.tagline;

        // Change car photograph
        mainCar.src = model.image;
        mainCar.alt = "Mercedes-Benz " + model.name;

        // Highlight selected class
        classButtons.forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.model === modelKey
            );
        });

        // Close previous feature
        closeFeature();
    }


    // CLASS BUTTON CLICK EVENTS

    classButtons.forEach(button => {

        button.addEventListener("click", function () {

            changeModel(this.dataset.model);

        });

    });


    // SELECT A FEATURE

    function openFeature(featureKey, selectedButton) {

        const feature = features[featureKey];

        if (!feature) return;

        // Update feature information
        featureCategory.textContent = feature.category;

        featureTitle.textContent = feature.title;

        featureDescription.textContent = feature.description;

        specOne.textContent = feature.specOne;

        specTwo.textContent = feature.specTwo;

        // Display feature panel
        featureDetails.classList.add("open");

        // Highlight selected feature
        featureButtons.forEach(button => {
            button.classList.remove("active");
        });

        selectedButton.classList.add("active");

        // Scroll to the details
        featureDetails.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }


    // FEATURE BUTTON EVENTS

    featureButtons.forEach(button => {

        button.addEventListener("click", function () {

            openFeature(this.dataset.feature, this);

        });

    });


    // CLOSE FEATURE DETAILS

    function closeFeature() {

        featureDetails.classList.remove("open");

        featureButtons.forEach(button => {
            button.classList.remove("active");
        });

    }


    closeFeatureBtn.addEventListener("click", closeFeature);


    // SHOW FIRST CLASS WHEN PAGE LOADS

    changeModel("sclass");

});
