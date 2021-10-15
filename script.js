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
        "ItemType": "Normal",
        "EnchantBaseValue": 50,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 40,
        "UpgradeMultiplier": 4,
    },

    "Bandana": {
        "ItemType": "Normal",
        "EnchantBaseValue": 65,
        "EnchantingMultiplier": 9,

        "UpgradeBaseValue": 50,
        "UpgradeMultiplier": 6,
    },

    "Scary Hat": {
        "ItemType": "Normal",
        "EnchantBaseValue": 95,
        "EnchantingMultiplier": 15,

        "UpgradeBaseValue": 70,
        "UpgradeMultiplier": 10,
    },

    "Amulet [Poor]": {
        "ItemType": "Normal",
        "EnchantBaseValue": 80,
        "EnchantingMultiplier": 12,

        "UpgradeBaseValue": 60,
        "UpgradeMultiplier": 8,
    },

    "Maid Skirt": {
        "ItemType": "Normal",
        "EnchantBaseValue": 71,
        "EnchantingMultiplier": 3,

        "UpgradeBaseValue": 54,
        "UpgradeMultiplier": 2,
    },

    "Top Hat": {
        "ItemType": "Normal",
        "EnchantBaseValue": 65,
        "EnchantingMultiplier": 9,

        "UpgradeBaseValue": 50,
        "UpgradeMultiplier": 6,
    },

    "Amulet [Dull]": {
        "ItemType": "Normal",
        "EnchantBaseValue": 140,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 100,
        "UpgradeMultiplier": 4,
    },

    "Glasses": {
        "ItemType": "Normal",
        "EnchantBaseValue": 80,
        "EnchantingMultiplier": 12,

        "UpgradeBaseValue": 60,
        "UpgradeMultiplier": 8,
    },

    "Winter Cap": {
        "ItemType": "Normal",
        "EnchantBaseValue": 41,
        "EnchantingMultiplier": 3,

        "UpgradeBaseValue": 34,
        "UpgradeMultiplier": 2,
    },

    "Scarf": {
        "ItemType": "Normal",
        "EnchantBaseValue": 50,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 40,
        "UpgradeMultiplier": 4,
    },

    "Headband": {
        "ItemType": "Normal",
        "EnchantBaseValue": 59,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 46,
        "UpgradeMultiplier": 4,
    },

    "Canvas Hat": {
        "ItemType": "Normal",
        "EnchantBaseValue": 62,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 48,
        "UpgradeMultiplier": 4,
    },

    "Maid Top": {
        "ItemType": "Normal",
        "EnchantBaseValue": 80,
        "EnchantingMultiplier": 3,

        "UpgradeBaseValue": 40,
        "UpgradeMultiplier": 2,
    },

    "Iron Armor": {
        "ItemType": "LowHigh",
        "EnchantBaseValue": 170,
        "EnchantingMultiplierLow": 6,
        "EnchantingMultiplierHigh": 9,

        "UpgradeBaseValue": 120,
        "UpgradeMultiplierLow": 4,
        "UpgradeMultiplierHigh": 6,
    },

    "Warrior's Boots": {
        "ItemType": "LowHigh",
        "EnchantBaseValue": 110,
        "EnchantingMultiplierLow": 3,
        "EnchantingMultiplierHigh": 6,

        "UpgradeBaseValue": 78,
        "UpgradeMultiplierLow": 2,
        "UpgradeMultiplierHigh": 4,
    },

    "Old Dagger": {
        "ItemType": "LowHigh",
        "EnchantBaseValue": 41,
        "EnchantingMultiplierLow": 0,
        "EnchantingMultiplierHigh": 3,

        "UpgradeBaseValue": 34,
        "UpgradeMultiplierLow": 0,
        "UpgradeMultiplierHigh": 2,
    },

    "Wooden Club": {
        "ItemType": "Normal",
        "EnchantBaseValue": 80,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 60,
        "UpgradeMultiplier": 4,
    },

    "Hunting Boots": {
        "ItemType": "LowHigh",
        "EnchantBaseValue": 76,
        "EnchantingMultiplierLow": 3,
        "EnchantingMultiplierHigh": 6,

        "UpgradeBaseValue": 64,
        "UpgradeMultiplierLow": 2,
        "UpgradeMultiplierHigh": 4,
    },

    "Cape": {
        "ItemType": "Normal",
        "EnchantBaseValue": 68,
        "EnchantingMultiplier": 3,

        "UpgradeBaseValue": 52,
        "UpgradeMultiplier": 2,
    },

    "Straw Hat": {
        "ItemType": "Normal",
        "EnchantBaseValue": 116,
        "EnchantingMultiplier": 6,

        "UpgradeBaseValue": 84,
        "UpgradeMultiplier": 4,
    },

    "Mysterious Mask": {
        "ItemType": "Normal",
        "EnchantBaseValue": 110,
        "EnchantingMultiplier": 18,

        "UpgradeBaseValue": 80,
        "UpgradeMultiplier": 12,
    },

    "Skirt": {
        "ItemType": "Normal",
        "EnchantBaseValue": 50,
        "EnchantingMultiplier": 9,

        "UpgradeBaseValue": 40,
        "UpgradeMultiplier": 6,
    },

    "Banded Top Hat": {
        "ItemType": "Normal",
        "EnchantBaseValue": 65,
        "EnchantingMultiplier": 9,

        "UpgradeBaseValue": 50,
        "UpgradeMultiplier": 6,
    },

    "Fur Hood": {
        "ItemType": "Normal",
        "EnchantBaseValue": 80,
        "EnchantingMultiplier": 3,

        "UpgradeBaseValue": 60,
        "UpgradeMultiplier": 2,
    },

    "Iron Helmet": {
        "ItemType": "LowHigh",
        "Mode": "NoLow0",

        "EnchantBaseValue": 77,
        "EnchantingMultiplierLow": 0,
        "EnchantingMultiplierHigh": 3,

        "UpgradeBaseValue": 58,
        "UpgradeMultiplierLow": 0,
        "UpgradeMultiplierHigh": 2,
    },
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
        multiplier = itemLevel.value/10
        if (currentMode == "Enchanting" || isEnchanted.checked) {
            if (itemLevel.value == 1) {
                answer.innerHTML = "Galleons needed: " + (priceDic.EnchantBaseValue * quantity.value)
            } else {
                if (priceDic.ItemType == "Normal") {
                    answer.innerHTML = "Galleons needed: " + (priceDic.EnchantBaseValue + (priceDic.EnchantingMultiplier * multiplier)) * quantity.value
                } else if (priceDic.ItemType == "LowHigh") {
                    low0 = (priceDic.UpgradeMultiplierLow == 0 && priceDic.Mode == null)
                    if (multiplier % 2 == 0) {
                        // Even
                        addition = (low0 && itemLevel.value >= 60) && priceDic.EnchantingMultiplierHigh || 0
                        answer.innerHTML = "Galleons needed: " + (priceDic.EnchantBaseValue + (priceDic.EnchantingMultiplierLow * Math.floor(multiplier/2)) + (priceDic.EnchantingMultiplierHigh * Math.floor(multiplier/2)) + addition) * quantity.value
                    } else {
                        // Odd
                        if (low0) {
                            addition = (itemLevel.value >= 60 && priceDic.EnchantingMultiplierHigh) || 0
                            answer.innerHTML = "Galleons needed: " + (priceDic.EnchantBaseValue + (priceDic.EnchantingMultiplierLow * Math.floor((multiplier - 1)/2)) + (priceDic.EnchantingMultiplierHigh * Math.floor((multiplier + 1)/2)) + addition) * quantity.value
                        } else {
                            answer.innerHTML = "Galleons needed: " + (priceDic.EnchantBaseValue + (priceDic.EnchantingMultiplierLow * Math.floor((multiplier + 1)/2)) + (priceDic.EnchantingMultiplierHigh * Math.floor((multiplier - 1)/2))) * quantity.value
                        }
                    }
                }
            }
        } else if (currentMode == "Upgrading") {
            if (itemLevel.value == 1) {
                answer.innerHTML = "Galleons needed: " + (priceDic.UpgradeBaseValue * quantity.value)
            } else {
                if (priceDic.ItemType == "Normal") {
                    answer.innerHTML = "Galleons needed: " + (priceDic.UpgradeBaseValue + (priceDic.UpgradeMultiplier * multiplier)) * quantity.value
                } else if (priceDic.ItemType == "LowHigh") {
                    low0 = (priceDic.UpgradeMultiplierLow == 0 && priceDic.Mode == null)
                    if (multiplier % 2 == 0) {
                        // Even
                        addition = (low0 && itemLevel.value >= 60) && priceDic.UpgradeMultiplierHigh || 0
                        answer.innerHTML = "Galleons needed: " + (priceDic.UpgradeBaseValue + (priceDic.UpgradeMultiplierLow * Math.floor(multiplier/2)) + (priceDic.UpgradeMultiplierHigh * Math.floor(multiplier/2)) + addition) * quantity.value
                    } else {
                        // Odd
                        if (low0) {
                            addition = (itemLevel.value >= 60 && priceDic.UpgradeMultiplierHigh) || 0
                            answer.innerHTML = "Galleons needed: " + (priceDic.UpgradeBaseValue + (priceDic.UpgradeMultiplierLow * Math.floor((multiplier - 1)/2)) + (priceDic.UpgradeMultiplierHigh * Math.floor((multiplier + 1)/2)) + addition) * quantity.value
                        } else {
                            answer.innerHTML = "Galleons needed: " + (priceDic.UpgradeBaseValue + (priceDic.UpgradeMultiplierLow * Math.floor((multiplier + 1)/2)) + (priceDic.UpgradeMultiplierHigh * Math.floor((multiplier - 1)/2))) * quantity.value
                        }
                    }
                }
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

enchantButton.style.background = "#3498db"
    enchantButton.style.color = "#fff"

upgradeButton.addEventListener("click", () => {
    upgradeButton.style.background = "#3498db"
    upgradeButton.style.color = "#fff"

    enchantedFrame.classList.toggle("active")
    currentMode = "Upgrading"

    enchantButton.style.background = "#fff"
    enchantButton.style.color = "#3498db"
})
