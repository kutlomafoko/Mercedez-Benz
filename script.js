
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

    // =====================================
    // 1. MERCEDES-BENZ MODELS
    // =====================================

    const models = {
        sclass: {
            name: "S-Class",
            tagline: "THE ART OF LUXURY.",
            image: "MERCEDES BENZ S 580 4MATIC ▪️YEAR_ 2023 ▪️MILEAGE_ BRAND NEW ▪️SPECS_ EURO ⠀ In stock & ready to ship worldwide 🌎 For any inquiry Contact us ☎️ +971 42 84 66 77 📧 Info@autolandmotor_ae 🌐 www.autolandmotor.jpg"
        },

        cclass: {
            name: "C-Class",
            tagline: "DESIGNED FOR YOUR DRIVE.",
            image: "Used Mercedes-Benz C Class C63 S Coupe for sale _ Romans International.jpg"
        },

        eclass: {
            name: "E-Class",
            tagline: "INTELLIGENCE IN MOTION.",
            image: "🚗 Mercedes-Benz E-Class EV Launch Date Revealed! ⚡️__Exciting news for luxury EV enthusiasts! Mercedes-Benz has announced the launch date for their highly anticipated E-Class EV_ Discover all the details about this luxurious .jpg"
        },

        gclass: {
            name: "G-Class",
            tagline: "STRONGER THAN EVER.",
            image: "Mercedes-benz G500.jpg"
        },

        gle: {
            name: "GLE",
            tagline: "THE POWER OF PRESENCE.",
            image: "jpg(4)"
        },

        amg: {
            name: "AMG GT",
            tagline: "BORN TO PERFORM.",
            image: "AMG GT63 🌟.jpg"
        },

        gls: {
            name: "GLS",
            tagline: "THE SUV OF EXCELLENCE.",
            image: ""
        },

        eqs: {
            name: "EQS",
            tagline: "A NEW ERA OF ELECTRIC LUXURY.",
            image: "EQS 53 AMG 4MATIC+ 761 HP_.jpg"
        }
    };


    // =====================================
    // 2. VEHICLE FEATURES
    // =====================================

    const features = {

        dashboard: {
            category: "INTERIOR TECHNOLOGY",
            title: "Luxury Dashboard",
            description: "Explore the " + "MODEL" + " dashboard, its digital displays, elegant materials and vehicle controls.",
            specOne: "Digital Display",
            specTwo: "Smart Technology"
        },

        steering: {
            category: "DRIVING EXPERIENCE",
            title: "Multifunction Steering",
            description: "Discover the steering design and convenient driving controls of this Mercedes-Benz.",
            specOne: "Multifunction Controls",
            specTwo: "Driver Comfort"
        },

        seats: {
            category: "INTERIOR COMFORT",
            title: "Premium Seats",
            description: "Explore the seating design, cabin materials and comfort features of this vehicle.",
            specOne: "Premium Materials",
            specTwo: "Comfort Design"
        },

        sunroof: {
            category: "INTERIOR EXPERIENCE",
            title: "Panoramic Sunroof",
            description: "Discover the roof design and the open cabin atmosphere of this Mercedes-Benz.",
            specOne: "Glass Roof Design",
            specTwo: "Open Cabin Feel"
        },

        wheels: {
            category: "EXTERIOR DESIGN",
            title: "Alloy Wheels",
            description: "Explore the wheel styling and exterior details of this vehicle.",
            specOne: "Alloy Design",
            specTwo: "Road Presence"
        },

        lighting: {
            category: "LIGHTING TECHNOLOGY",
            title: "Advanced Lighting",
            description: "Discover the lighting design and distinctive Mercedes-Benz appearance.",
            specOne: "Modern Lighting",
            specTwo: "Exterior Styling"
        },

        exterior: {
            category: "EXTERIOR DESIGN",
            title: "Exterior Styling",
            description: "Explore the body shape, curves, grille and exterior finishing of this vehicle.",
            specOne: "Premium Finish",
            specTwo: "Elegant Styling"
        },

        engine: {
            category: "ENGINEERING",
            title: "Engine & Performance",
            description: "Explore the engineering and performance characteristics of this Mercedes-Benz model.",
            specOne: "Engine Technology",
            specTwo: "Driving Dynamics"
        }
    };


    // =====================================
    // 3. GET HTML ELEMENTS
    // =====================================

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


    // Keep track of the selected vehicle
    let selectedModel = "sclass";


    // =====================================
    // 4. CLOSE FEATURE PANEL
    // =====================================

    function closeFeature() {

        featureDetails.classList.remove("open");

        featureButtons.forEach(button => {
            button.classList.remove("active");
        });
    }


    // =====================================
    // 5. CHANGE VEHICLE
    // =====================================

    function changeModel(modelKey) {

        const model = models[modelKey];

        if (!model) {
            console.error("Model not found:", modelKey);
            return;
        }

        selectedModel = modelKey;

        // Update vehicle name
        carName.textContent = model.name;

        // Update tagline
        carTagline.textContent = model.tagline;

        // Update vehicle image
        mainCar.style.opacity = "0";

        setTimeout(() => {

            if (model.image) {
                mainCar.src = model.image;
                mainCar.style.display = "block";
            } else {
                mainCar.removeAttribute("src");
                mainCar.style.display = "none";
            }

            mainCar.alt = "Mercedes-Benz " + model.name;

            mainCar.style.opacity = "1";

        }, 200);

        // Highlight selected model
        classButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.model === modelKey
            );

        });

        // Close old feature information
        closeFeature();

    }


    // =====================================
    // 6. MODEL BUTTON EVENTS
    // =====================================

    classButtons.forEach(button => {

        button.addEventListener("click", function () {

            const modelKey = this.dataset.model;

            changeModel(modelKey);

        });

    });


    // =====================================
    // 7. FEATURE BUTTON EVENTS
    // =====================================

    featureButtons.forEach(button => {

        button.addEventListener("click", function () {

            const featureKey = this.dataset.feature;
            const feature = features[featureKey];

            if (!feature) return;

            // Show selected feature
            featureCategory.textContent = feature.category;

            featureTitle.textContent =
                selectedModel.toUpperCase() + " — " + feature.title;

            featureDescription.textContent =
                feature.description.replace("MODEL", models[selectedModel].name);

            specOne.textContent = feature.specOne;
            specTwo.textContent = feature.specTwo;

            // Open feature panel
            featureDetails.classList.add("open");

            // Highlight selected feature button
            featureButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            // Bring details into view
            featureDetails.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        });

    });


    // =====================================
    // 8. CLOSE BUTTON EVENT
    // =====================================

    closeFeatureBtn.addEventListener("click", closeFeature);


    // =====================================
    // 9. INITIAL VEHICLE
    // =====================================

    changeModel("sclass");

});

/* =====================================
   LIQUID GLASS DOCK INTERACTION
===================================== */

const liquidDock = document.querySelector(".liquid-dock");

if (liquidDock) {

    const indicator = liquidDock.querySelector(".liquid-indicator");
    const dockItems = liquidDock.querySelectorAll(".dock-item");

    let activeItem = liquidDock.querySelector(".dock-item.active");

    function moveLiquid(item, ripple = false) {

        if (!item) return;

        indicator.style.left = item.offsetLeft + "px";
        indicator.style.width = item.offsetWidth + "px";

        if (ripple) {

            indicator.classList.remove("morph");

            // Restart the water ripple animation
            void indicator.offsetWidth;

            indicator.classList.add("morph");

            setTimeout(() => {
                indicator.classList.remove("morph");
            }, 850);
        }
    }

    // Initial position
    moveLiquid(activeItem);

    // Follow mouse and keyboard focus
    dockItems.forEach(item => {

        item.addEventListener("mouseenter", () => {
            moveLiquid(item, true);
        });

        item.addEventListener("focus", () => {
            moveLiquid(item, true);
        });

        item.addEventListener("click", () => {

            dockItems.forEach(link => {
                link.classList.remove("active");
            });

            item.classList.add("active");
            activeItem = item;

            moveLiquid(item, true);
        });

    });

    // Return to selected icon when mouse leaves
    liquidDock.addEventListener("mouseleave", () => {
        moveLiquid(activeItem);
    });

    // Reposition on screen resize
    window.addEventListener("resize", () => {
        moveLiquid(activeItem);
    });

}


