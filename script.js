
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


// TECHNOLOGY PAGE SCROLL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// TECHNOLOGY CARD INTERACTIONS

const technologyInfo = {
    mbux: {
        title: "Intelligence in Every Detail.",
        description: "MBUX brings together digital displays, voice interaction, navigation and connected infotainment features to create a more personalised driving experience.",
        symbol: "✦",
        caption: "MBUX DIGITAL INTELLIGENCE"
    },

    safety: {
        title: "Confidence Through Innovation.",
        description: "Driver assistance technologies use sensors, cameras and intelligent systems to support the driver and help improve awareness on the road.",
        symbol: "◈",
        caption: "ADVANCED DRIVER ASSISTANCE"
    },

    electric: {
        title: "A New Era of Mobility.",
        description: "Electric mobility combines electric drive systems, battery technology and charging solutions to create new ways of travelling.",
        symbol: "⚡",
        caption: "ELECTRIC MOBILITY"
    },

    light: {
        title: "Lighting the Way Forward.",
        description: "Advanced lighting systems are designed to adapt illumination to driving conditions and help improve visibility.",
        symbol: "◎",
        caption: "DIGITAL LIGHT TECHNOLOGY"
    }
};


// UPDATE DETAIL PANEL

document.querySelectorAll(".tech-more").forEach(button => {

    button.addEventListener("click", () => {

        const selectedTechnology = technologyInfo[button.dataset.target];

        if (!selectedTechnology) return;

        document.getElementById("detail-title").textContent =
            selectedTechnology.title;

        document.getElementById("detail-description").textContent =
            selectedTechnology.description;

        document.getElementById("detail-symbol").textContent =
            selectedTechnology.symbol;

        document.getElementById("detail-caption").textContent =
            selectedTechnology.caption;

        document.querySelector(".tech-detail-section").scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* =========================================================
   MERCEDES-BENZ COLLECTIONS INTERACTIVITY — collections.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const vehicleData = {
        sclass: {
            number: "01 / 12",
            category: "THE FLAGSHIP SEDAN",
            name: "S-Class",
            description: "Experience exceptional comfort, intelligent technology, and timeless sophistication.",
            type: "Luxury Sedan",
            experience: "Ultimate Luxury",
            image: "images/sclass.jpg"
        },
        cclass: {
            number: "02 / 12",
            category: "MODERN ELEGANCE",
            name: "C-Class",
            description: "Dynamic proportions meet digital luxury with driver-focused MBUX innovation.",
            type: "Sport Sedan",
            experience: "Agile Refinement",
            image: "images/cclass.jpg"
        },
        eclass: {
            number: "03 / 12",
            category: "INTELLIGENT LUXURY",
            name: "E-Class",
            description: "Seamless executive poise powered by next-generation hybrid performance and AI comfort.",
            type: "Executive Sedan",
            experience: "Effortless Poise",
            image: "images/eclass.jpg"
        },
        gclass: {
            number: "04 / 12",
            category: "ICONIC ADVENTURE",
            name: "G-Wagon",
            description: "Unmistakable silhouette engineered with legendary off-road capability and handcrafted prestige.",
            type: "Off-Road Icon",
            experience: "Iconic Power",
            image: "images/gclass.jpg"
        },
        gle: {
            number: "05 / 12",
            category: "VERSATILE SOPHISTICATION",
            name: "GLE SUV",
            description: "Commanding road presence paired with spacious cabin tranquility and adaptive suspension.",
            type: "Midsize Luxury SUV",
            experience: "Versatile Poise",
            image: "images/gle.jpg"
        },
        amg: {
            number: "06 / 12",
            category: "PURE PERFORMANCE",
            name: "AMG GT",
            description: "Handcrafted V8 power and motorsport aerodynamics built for visceral driving precision.",
            type: "Performance Coupé",
            experience: "Track-Bred Thrill",
            image: "images/amg.jpg"
        },
        gls: {
            number: "07 / 12",
            category: "FIRST-CLASS SPACE",
            name: "GLS",
            description: "The S-Class of SUVs—three rows of first-class seating wrapped in commanding elegance.",
            type: "Full-Size Luxury SUV",
            experience: "First-Class Travel",
            image: "images/gls.jpg"
        },
        eqs: {
            number: "08 / 12",
            category: "THE ELECTRIC FUTURE",
            name: "EQS",
            description: "Sculpted one-bow aerodynamics and the sweeping MBUX Hyperscreen define all-electric luxury.",
            type: "All-Electric Flagship",
            experience: "Zero-Emission Luxury",
            image: "images/eqs.jpg"
        },
        roadster: {
            number: "09 / 12",
            category: "OPEN-AIR HERITAGE",
            name: "SL Roadster",
            description: "An iconic 2+2 convertible blending grand touring comfort with AMG performance DNA.",
            type: "Luxury Roadster",
            experience: "Open-Air Freedom",
            image: "images/roadster.jpg"
        },
        cle: {
            number: "10 / 12",
            category: "SCULPTED ATHLETICISM",
            name: "CLE Coupé",
            description: "Expressive two-door styling with a low stance, long hood, and tailored cockpit luxury.",
            type: "Grand Tourer Coupé",
            experience: "Sculpted Sport",
            image: "images/cle.jpg"
        },
        eqe: {
            number: "11 / 12",
            category: "SILENT DYNAMICS",
            name: "EQE SUV",
            description: "Progressive electric versatility with whisper-quiet acoustics and intelligent range management.",
            type: "All-Electric SUV",
            experience: "Electric Agility",
            image: "images/eqe.jpg"
        },
        maybach: {
            number: "12 / 12",
            category: "BESPOKE PRESTIGE",
            name: "Mercedes-Maybach",
            description: "The pinnacle of bespoke automotive craftsmanship, chauffeur-driven serenity, and rare materials.",
            type: "Ultra-Luxury Limousine",
            experience: "Sovereign Prestige",
            image: "images/maybach.jpg"
        }
    };

    const cards = document.querySelectorAll(".collection-card");
    const featuredGlass = document.getElementById("featuredGlass");
    const featuredImage = document.getElementById("featuredImage");
    const featuredCategory = document.getElementById("featuredCategory");
    const featuredName = document.getElementById("featuredName");
    const featuredDescription = document.getElementById("featuredDescription");
    const featuredType = document.getElementById("featuredType");
    const featuredExperience = document.getElementById("featuredExperience");
    const sectionCounter = document.getElementById("sectionCounter");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const modelKey = card.getAttribute("data-model");
            const data = vehicleData[modelKey];
            if (!data) return;

            // Update active card state
            cards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");

            // Smooth glass transition
            featuredGlass.classList.add("switching");

            setTimeout(() => {
                featuredImage.src = data.image;
                featuredImage.alt = `Mercedes-Benz ${data.name}`;
                featuredCategory.textContent = data.category;
                featuredName.textContent = data.name;
                featuredDescription.textContent = data.description;
                featuredType.textContent = data.type;
                featuredExperience.textContent = data.experience;
                if (sectionCounter) sectionCounter.textContent = data.number;

                featuredGlass.classList.remove("switching");
            }, 220);

            // Smooth scroll back up to featured showcase on mobile/tablet
            if (window.innerWidth < 860) {
                featuredGlass.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });

        // Subtle interactive liquid tilt on mouse move
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-11px) perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
});


