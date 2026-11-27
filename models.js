
/* =========================================
   MERCEDES-BENZ MODELS — SHOWROOM CONTROLS
========================================= */

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}


// =========================================
// VEHICLE DATA
// =========================================

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
        // Check the spelling of this actual filename.
        model: "mersedes-benz_s-class_w221-v1.glb"
    },

    gla: {
        name: "GLA-CLASS",
        category: "COMPACT SUV COLLECTION",
        subtitle: "Compact elegance. Unmistakable presence.",
        speed: "8.9 s",
        engine: "1.3L Turbo Petrol",
        power: "163 hp",
        top: "210 km/h",
        model: "models/gla-class.glb"
    }
};


// =========================================
// GET SHOWROOM ELEMENTS
// =========================================

const viewer = document.getElementById("car-viewer");
const modelOptions = document.querySelectorAll(".model-option");

const modelName = document.getElementById("model-name");
const modelCategory = document.getElementById("model-category");
const modelSubtitle = document.getElementById("model-subtitle");

const specSpeed = document.getElementById("spec-speed");
const specEngine = document.getElementById("spec-engine");
const specPower = document.getElementById("spec-power");
const specTop = document.getElementById("spec-top");


// =========================================
// SELECT AND DISPLAY A VEHICLE
// =========================================

function displayVehicle(id) {
    const vehicle = vehicles[id];

    if (!vehicle || !viewer) {
        console.error("Vehicle or 3D viewer not found:", id);
        return;
    }

    if (modelName) modelName.textContent = vehicle.name;
    if (modelCategory) modelCategory.textContent = vehicle.category;
    if (modelSubtitle) modelSubtitle.textContent = vehicle.subtitle;

    if (specSpeed) specSpeed.textContent = vehicle.speed;
    if (specEngine) specEngine.textContent = vehicle.engine;
    if (specPower) specPower.textContent = vehicle.power;
    if (specTop) specTop.textContent = vehicle.top;

    modelOptions.forEach(button => {
        button.classList.toggle("active", button.dataset.model === id);
    });

    // Load the new 3D model
    viewer.src = vehicle.model;

    console.log("Selected vehicle:", vehicle.name, vehicle.model);
}


// Attach model button events
modelOptions.forEach(button => {
    button.addEventListener("click", () => {
        displayVehicle(button.dataset.model);
    });
});


// =========================================
// CAR COLOUR SELECTOR
// =========================================

const colorOptions = document.querySelectorAll(".color-option");
const selectedColor = document.getElementById("selected-color");

const colorNames = {
    "#111111": "Obsidian Black",
    "#c0c0c0": "High-Tech Silver",
    "#142b50": "Nautic Blue",
    "#800d18": "Patagonia Red"
};

const colorFactors = {
    "#111111": [0.07, 0.07, 0.07, 1],
    "#c0c0c0": [0.65, 0.65, 0.65, 1],
    "#142b50": [0.04, 0.12, 0.28, 1],
    "#800d18": [0.35, 0.02, 0.06, 1]
};

let currentColor = "#111111";

function applyCarColor() {
    if (!viewer || !viewer.model) return;

    const factor = colorFactors[currentColor];

    if (!factor) return;

    try {
        viewer.model.materials.forEach(material => {
            material.pbrMetallicRoughness.setBaseColorFactor(factor);
        });
    } catch (error) {
        console.error("Could not apply vehicle colour:", error);
    }
}


// Reapply the selected colour whenever a model finishes loading
if (viewer) {
    viewer.addEventListener("load", () => {
        applyCarColor();
        console.log("3D vehicle loaded.");
    });

    viewer.addEventListener("error", event => {
        console.error("3D model failed to load. Check the GLB file path.", event);
    });
}


// Colour button events
colorOptions.forEach(button => {
    button.addEventListener("click", () => {
        currentColor = button.dataset.color;

        colorOptions.forEach(option => {
            option.classList.toggle("active", option === button);
        });

        if (selectedColor) {
            selectedColor.textContent = colorNames[currentColor] || currentColor;
        }

        applyCarColor();
    });
});


// =========================================
// LIQUID GLASS DOCK — MOVING RIPPLE
// =========================================

const liquidDock = document.querySelector(".liquid-dock");

if (liquidDock) {
    const indicator = liquidDock.querySelector(".liquid-indicator");
    const dockItems = liquidDock.querySelectorAll(".dock-item");

    let activeItem = liquidDock.querySelector(".dock-item.active");

    function moveLiquid(item, ripple = false) {
        if (!item || !indicator) return;

        indicator.style.left = `${item.offsetLeft}px`;
        indicator.style.width = `${item.offsetWidth}px`;

        if (ripple) {
            indicator.classList.remove("morph");

            // Restart the ripple animation
            void indicator.offsetWidth;

            indicator.classList.add("morph");

            setTimeout(() => {
                indicator.classList.remove("morph");
            }, 850);
        }
    }

    // Set initial position after the page has rendered
    requestAnimationFrame(() => moveLiquid(activeItem));

    dockItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            moveLiquid(item, true);
        });

        item.addEventListener("focus", () => {
            moveLiquid(item, true);
        });

        item.addEventListener("click", () => {
            dockItems.forEach(link => link.classList.remove("active"));

            item.classList.add("active");
            activeItem = item;

            moveLiquid(item, true);
        });
    });

    liquidDock.addEventListener("mouseleave", () => {
        moveLiquid(activeItem);
    });

    window.addEventListener("resize", () => {
        moveLiquid(activeItem);
    });
}


// =========================================
// START WITH SL-CLASS
// =========================================

displayVehicle("sl");
