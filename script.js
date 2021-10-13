const addItemButton = document.getElementById("addItem")
const selected = document.querySelector(".selected")
const optionsContainer = document.querySelector(".options-container")
const searchBox = document.querySelector(".search-box input")

const itemLevel = document.getElementById("ItemLevel")
const quantity = document.getElementById("Quantity")
const submit = document.getElementById("submit")

const enchantButton = document.getElementById("Enchant")
const upgradeButton = document.getElementById("Upgrade")

const enchantedFrame = document.getElementById("EnchantedFrame")
const isEnchanted = document.getElementById("isEnchanted")

const answer = document.getElementById("answer")

const optionsList = document.querySelectorAll(".option")

var currentMode = "Enchanting"

const itemValues = {
    "Eyepatch": {
        "EnchantBaseValue": 50,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 40,
        "UpgradeMultiplier": 4,
    },

    "Bandana": {
        "EnchantBaseValue": 65,
        "EnchantingMultiplier": 9,

        "UpgradeBaseValue": 50,
        "UpgradeMultiplier": 6,
    },

    "Scary Hat": {
        "EnchantBaseValue": 95,
        "EnchantingMultiplier": 15,

        "UpgradeBaseValue": 70,
        "UpgradeMultiplier": 10,
    },

    "Amulet [Poor]": {
        "EnchantBaseValue": 80,
        "EnchantingMultiplier": 12,

        "UpgradeBaseValue": 60,
        "UpgradeMultiplier": 8,
    },

    "Maid Skirt": {
        "EnchantBaseValue": 71,
        "EnchantingMultiplier": 3,

        "UpgradeBaseValue": 54,
        "UpgradeMultiplier": 2,
    },

    "Top Hat": {
        "EnchantBaseValue": 65,
        "EnchantingMultiplier": 9,

        "UpgradeBaseValue": 50,
        "UpgradeMultiplier": 6,
    },

    "Amulet [Dull]": {
        "EnchantBaseValue": 140,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 100,
        "UpgradeMultiplier": 4,
    }
}

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active")

    searchBox.value = "";
    filterList("")

    if (optionsContainer.classList.contains("active")) {
        searchBox.focus()
    }
})

optionsList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active")
    })
})

searchBox.addEventListener("keyup", function(e) {
    filterList(e.target.value)
})

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase()
    optionsList.forEach( option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase()
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block"
        } else {
            option.style.display = "none"
        }
    })
}

submit.addEventListener("click", () => {
    if (itemValues[selected.innerHTML]) {
        if (itemLevel.value != 1 && itemLevel.value % 10 != 0 && itemLevel.value <= 0) {return}
        if (quantity.value <= 0) {return}

        priceDic = itemValues[selected.innerHTML]
        if (currentMode == "Enchanting" || isEnchanted.checked) {
            if (itemLevel.value == 1) {
                answer.innerHTML = "Galleons needed: " + (priceDic.EnchantBaseValue * quantity.value)
            } else {
                answer.innerHTML = "Galleons needed: " + (priceDic.EnchantBaseValue + (priceDic.EnchantingMultiplier * (itemLevel.value/10))) * quantity.value
            }
        } else if (currentMode == "Upgrading") {
            if (itemLevel.value == 1) {
                answer.innerHTML = "Galleons needed: " + (priceDic.UpgradeBaseValue * quantity.value)
            } else {
                answer.innerHTML = "Galleons needed: " + (priceDic.UpgradeBaseValue + (priceDic.UpgradeMultiplier * (itemLevel.value/10))) * quantity.value
            }
        }
    }
})

enchantButton.addEventListener("click", () => {
    enchantButton.style.background = "#3498db"
    enchantButton.style.color = "#fff"

    enchantedFrame.classList.remove("active")
    currentMode = "Enchanting"

    upgradeButton.style.background = "#fff"
    upgradeButton.style.color = "#3498db"
})

upgradeButton.addEventListener("click", () => {
    upgradeButton.style.background = "#3498db"
    upgradeButton.style.color = "#fff"

    enchantedFrame.classList.toggle("active")
    currentMode = "Upgrading"

    enchantButton.style.background = "#fff"
    enchantButton.style.color = "#3498db"
})