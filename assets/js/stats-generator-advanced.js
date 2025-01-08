document.addEventListener("DOMContentLoaded", function() {
    const circleSlider = document.getElementById("circleSlider");
    const circleValue = document.getElementById("circleValue");
    const generateButton = document.getElementById("generateButton");
    const resultsDiv = document.getElementById("results");
    const statsDiv = document.getElementById("stats");
    const pointsDisplay = document.getElementById("pointsDisplay"); 

    const statsData = {
        DEX: { 1: [5, 6,7], 2: [5, 7,8], 3: [5, 6,8], 4: [5, 7,8], 5: [5, 7,8], 6: [6, 8,10], 7: [7, 9,11], 8: [6, 8,10], 9: [6, 9, 12], 10: [7, 10, 12], 11: [7, 8, 9], 12: [6, 6, 6] },
        initiative: { 1: [5, 7,10], 2: [6, 8,10], 3: [7, 9,11], 4: [6, 8,11], 5: [5, 8,11], 6: [7, 10,13], 7: [7, 11,15], 8: [6, 9,12], 9: [7, 11, 14], 10: [8, 11, 14], 11: [7, 9, 10], 12: [8, 8, 8] },
        unconsciousness: {1: [10, 17,23], 2: [22, 27,33], 3: [30, 35,41], 4: [35, 44,53], 5: [42, 53,64], 6: [48, 59,70], 7: [59, 68,78], 8: [61, 80,98], 9: [80, 94, 108], 10: [88, 98, 108], 11: [91, 108, 126], 12: [102, 114, 126] },
        STR: { 1: [2, 4,6], 2: [4, 6,8], 3: [5, 7,8], 4: [5, 8,10], 5: [6, 9,11], 6: [6, 9,12], 7: [7, 11,14], 8: [10, 13,16], 9: [8, 11, 14], 10: [8, 11, 14], 11: [9, 12, 16], 12: [14, 16, 18] },
        physicalDefense: { 1: [7, 9,11], 2: [9, 10,11], 3: [9, 11,12], 4: [9, 11,13], 5: [9, 12,14], 6: [11, 14,16], 7: [12, 14,16], 8: [11, 13,15], 9: [14, 17, 19], 10: [16, 19, 21], 11: [16, 19, 21], 12: [20, 20, 21] },
        deathRating: {1: [13, 21,29], 2: [26, 33,40], 3: [35, 43,51], 4: [40, 53,65], 5: [51, 63,75], 6: [54, 69,85], 7: [68, 83,98], 8: [90, 103,115], 9: [93, 111, 130], 10: [102, 113, 125], 11: [103, 126, 148], 12: [116, 132, 148] },
        TOU: { 1: [2, 4,6], 2: [4, 6,7], 3: [5, 7,8], 4: [5, 8,10], 5: [7, 9,11], 6: [6, 9,11], 7: [7, 10,14], 8: [10, 14,17], 9: [9, 12, 16], 10: [10, 14, 17], 11: [12, 16, 19], 12: [14, 18, 22] },
        mysticDefense: { 1: [7, 8,10], 2: [7, 8,9], 3: [8, 10,12], 4: [8, 10,12], 5: [11, 12,14], 6: [11, 13,15], 7: [13, 15,17], 8: [14, 16,18], 9: [16, 18, 20], 10: [16, 18, 21], 11: [16, 21, 25], 12: [17, 20, 24] },
        woundThreshold: { 1: [3, 6,9], 2: [6, 8,11], 3: [7, 10,12], 4: [7, 11,15], 5: [10, 13,16], 6: [9, 13,17], 7: [11, 15,20], 8: [13, 19,24],  9: [13, 19, 24], 10: [15, 20, 26], 11: [19, 23, 28], 12: [21, 27, 33] },
        PER: { 1: [4, 5,6], 2: [4, 5,6], 3: [4, 5,7], 4: [4, 6,7], 5: [4, 6,8], 6: [5, 7,8], 7: [5, 7,10], 8: [5, 8,12],  9: [5, 8, 11], 10: [6, 9, 12], 11: [6, 10, 13], 12: [7, 8, 8] },
        socialDefense: { 1: [6, 7,8], 2: [7, 8,9], 3: [8, 9,11], 4: [8, 10,11], 5: [8, 10,12], 6: [10, 12,14], 7: [11, 13,16], 8: [11, 14,16], 9: [12, 15, 18], 10: [16, 18, 19], 11: [17, 20, 23], 12: [20, 21, 22] },
        knockdown: { 1: [3, 6,9], 2: [7, 9,12], 3: [7, 9,12], 4: [7, 11,15], 5: [8, 12,15], 6: [8, 12,16], 7: [9, 13,16], 8: [13, 16,19],  9: [9, 13, 17], 10: [9, 14, 18], 11: [12, 16, 20], 12: [20, 20, 20] },
        WIL: { 1: [4, 5,6], 2: [5, 5,6], 3: [4, 6,8], 4: [5, 7,8], 5: [6, 8,10], 6: [6, 8,9], 7: [6, 9,11], 8: [7, 10,12], 9: [6, 9, 12], 10: [6, 10, 14], 11: [6, 10, 15], 12: [8, 9, 10] },
        physicalArmor: { 1: [0, 2,3], 2: [1, 3,4], 3: [2, 4,6], 4: [3, 5,7], 5: [5, 7,8], 6: [5, 8,11], 7: [6, 8,10], 8: [10, 13,16],  9: [8, 11, 13], 10: [8, 12, 15], 11: [10, 15, 19], 12: [14, 15, 16] },
        recoveryTests: { 1: [1, 1,2], 2: [1, 2,2], 3: [2, 2,3], 4: [1, 2,4], 5: [2, 3,3], 6: [2, 3,4], 7: [3, 4,4], 8: [3, 4,5],  9: [3, 4, 5], 10: [3, 4, 6], 11: [4, 5, 6], 12: [5, 6, 7] },   
        CHA: { 1: [3, 4,5], 2: [3, 4,5], 3: [3, 5,6], 4: [3, 5,6], 5: [4, 5,6], 6: [4, 6,7], 7: [3, 6,9], 8: [4, 6,9], 9: [5, 6, 8], 10: [4, 6, 8], 11: [4, 7, 10], 12: [4, 6, 9] },
        mysticArmor: { 1: [1, 2,2], 2: [1, 2,3], 3: [1, 3,4], 4: [3, 4,5], 5: [4, 6,8], 6: [4, 6,8], 7: [6, 7,9], 8: [7, 9,11], 9: [9, 11, 13], 10: [10, 12, 14], 11: [11, 14, 18], 12: [12, 13, 14] },
        movement: { 1: [4, 9,14], 2: [8, 13,18], 3: [7, 12,17], 4: [8, 13,17], 5: [8, 12,16], 6: [8, 11,15], 7: [6, 12,18], 8: [11, 13,15], 9: [10, 13, 15], 10: [6, 11, 17], 11: [8, 12, 16], 12: [8, 11, 14] },
        actions: { 1: [1, 1,1], 2: [1, 1,1], 3: [1, 1,1], 4: [1, 1,2], 5: [1, 2,2], 6: [1, 2,3], 7: [2, 2,3], 8: [2, 2,3], 9: [2, 3, 4], 10: [3, 3, 4], 11: [3, 3, 4], 12: [3, 4, 6] },
        attack: { 1: [7, 10,13], 2: [9, 11,12], 3: [9, 12,15], 4: [11, 13,14], 5: [12, 14,17], 6: [14, 15,17], 7: [15, 17,20], 8: [18, 19,21],9: [20, 24, 27], 10: [22, 25, 27], 11: [22, 26, 29], 12: [30, 30, 30] },
        damage: { 1: [6, 10,14], 2: [9, 11,13], 3: [11, 14,16], 4: [11, 14,17], 5: [13, 15,18], 6: [13, 16,18], 7: [17, 20,22], 8: [19, 22,25], 9: [16, 21, 26], 10: [24, 26, 29], 11: [24, 27, 30], 12: [30, 30, 30] },
    };

    
    const checkboxData = {
        "Offensive Capabilities": [
            { name: "Deadly Poison, extra success (Circle + 5)", cost: 4 },
            { name: "Paralytic Poison, extra success (Circle + 5)", cost: 4 },
            { name: "Deadly Paralytic Poison, extra success (Circle + 5)", cost: 5 },
            { name: "Deadly Poison, wound (Circle + 5)", cost: 2 },
            { name: "Paralytic Poison, wound (Circle + 5)", cost: 2 },
            { name: "Deadly Paralytic Poison, wound (Circle + 5)", cost: 3 },
            { name: "Charge", cost: 3, dynamicCost: true },
            { name: "Dive", cost: 3, dynamicCost: true },
            { name: "Battle Shout (Circle + 4)", cost: 2 },
            { name: "Battle Shout (Circle + 8)", cost: 3 },
            { name: "Battle Bellow (CHA + 8)", cost: 2 },
            { name: "Battle Bellow (CHA + 12)", cost: 3 },
            { name: "Surprise Strike", cost: 3, dynamicCost: true },
            { name: "Ranged Attack (Weaker)", cost: 4 },
            { name: "Ranged Attack (Full)", cost: 6 },
            { name: "Ranged Typed Power (Limited)", cost: 3 },
            { name: "Ranged Typed Power (Unlimited)", cost: 4 }
        ],
        "Movement Capabilities": [
            { name: "Great Leap (Movement Rate / 2)", cost: 1 },
            { name: "Great Leap (Movement Rate)", cost: 2 },
            { name: "Flying (Movement Rate / 2)", cost: 2 },
            { name: "Flying (Movement Rate)", cost: 3 }
        ],
        "Monster Maneuvers": [
            { name: "Grab and Bite (Weaker)", cost: 2 },
            { name: "Grab and Bite (Full)", cost: 3 },
            { name: "Death Roll", cost: 3 },
            { name: "PUT ARMOR SHRED HERE", cost: 2}
        ],
        "Defensive Capabilities": [
            { name: "Spiked Armor (TOU + Circle)", cost: 4 },
            { name: "Elemental Armor (WIL + Circle)", cost: 4 },
            { name: "Resist Pain 2", cost: 1 },
            { name: "Resist Pain (TOU / 3)", cost: 2 },
            { name: "Fury 2", cost: 2 },
            { name: "Fury (TOU / 3)", cost: 3 },
            { name: "Regeneration (Standard, TOU + Circle)", cost: 2 },
            { name: "Regeneration (Simple, TOU + Circle)", cost: 3 },
            { name: "Debuff Aura (Harried)", cost: 3 }
        ],
        "Other Capabilities": [
            { name: "Stealthy Stride (Circle + 5)", cost: 1 },
            { name: "Stealthy Stride (DEX + Circle)", cost: 2 },
            { name: "Awareness (Circle + 5)", cost: 1 },
            { name: "Awareness (PER + Circle)", cost: 1 },
            { name: "Climbing (Circle + 5)", cost: 0 },
            { name: "Climbing (DEX + 5)", cost: 0 },
            { name: "Enhanced Sense [Vision] (5)", cost: 1 },
            { name: "Enhanced Sense [Other] (5)", cost: 2 }
        ],
        "Grand Vulnerabilityes": [
            { name: "Vulnerability to Fire", cost: -1 },
            { name: "Vulnerability to Air", cost: -1 },
            { name: "Vulnerability to Earth", cost: -1 },
            { name: "Vulnerability to Water", cost: -1 },
            { name: "Vulnerability to Wood", cost: -1 },
            { name: "Negative 3 PA", cost: -3 },
            { name: "Negative 3 MA", cost: -3 },
            { name: "Require Alternative Sense", cost: -2 }
        ],
        "Grand Defenses": [
            { name: "Immune to Fire", cost: 1 },
            { name: "Immune to Air", cost: 1 },
            { name: "Immune to Earth", cost: 1 },
            { name: "Immune to Water", cost: 1 },
            { name: "Immune to Wood", cost: 1 }
        ]
    };


    const difficultyLabels = ["Low", "Average", "High"];

    let points = 4; // Starting points
    pointsDisplay.textContent = "Points to spend remaining: " + points;

    // Create HTML for stats sliders
    for (const statName in statsData) {
        const statDiv = document.createElement("div");
        statDiv.classList.add("stat");

        const label = document.createElement("label");
        label.textContent = statName
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/^./, str => str.toUpperCase()) + ":";
        label.htmlFor = statName + "Slider";
        statDiv.appendChild(label);

        const slider = document.createElement("input");
        slider.type = "range";
        slider.id = statName + "Slider";
        slider.min = "1";
        slider.max = "3";
        slider.value = "2"; // Default to average
        statDiv.appendChild(slider);

        const valueSpan = document.createElement("span");
        valueSpan.id = statName + "Value";
        valueSpan.textContent = difficultyLabels[slider.value - 1];
        statDiv.appendChild(valueSpan);

        statsDiv.appendChild(statDiv);

        slider.addEventListener("input", () => {
            points = 4

            for (const statName in statsData) {
                const slider = document.getElementById(statName + "Slider");
                const newValue = parseInt(slider.value);
                console.log(statName + "Slider" + " " + newValue)
                switch (statName.toLowerCase()) {
                    case "dex":
                    case "str":
                    case "tou":
                    case "per":
                    case "wil":
                    case "cha":
                        if (newValue === 3) { points -= 1; } // High
                        break;
                    case "actions":
                        if (newValue === 3) { points -= 6; } // High
                        break;
                    case "initiative":
                    case "physicaldefense":
                    case "mysticdefense":
                    case "socialdefense":
                    case "physicalarmor":
                    case "mysticarmor":
                    case "woundthreshold":
                        if (newValue === 3) { points -= 1; } // High
                        else if (newValue === 1) { points += 1; } // Low
                        break;
                    case "unconsciousness":
                    case "deathrating":
                        if (newValue === 3) { points -= 2; } // High
                        else if (newValue === 1) { points += 1; } // Low
                        break;
                    case "movement":
                        if (newValue === 3) { points -= 3; } // High
                        else if (newValue === 1) { points += 2; } // Low
                        break;
                    case "attack":
                        if (newValue === 3) { points -= 2; } // High
                        else if (newValue === 1) { points += 2; } // Low
                        break;
                    case "damage":
                        if (newValue === 3) { points -= 2; } // High
                        else if (newValue === 1) { points += 2; } // Low
                        break;

                }
            }

            // Special case for combined armor/defense
            if (document.getElementById("physicalArmorSlider").value === "3" && 
                document.getElementById("physicalDefenseSlider").value === "3") {
                points -= 1; 
            }
            if (document.getElementById("mysticArmorSlider").value === "3" && 
                document.getElementById("mysticDefenseSlider").value === "3") {
                points -= 1; 
            }
            if (document.getElementById("attackSlider").value === "3" && 
                document.getElementById("damageSlider").value === "3") {
                points -= 2; 
            }
            if (document.getElementById("attackSlider").value === "1" && 
                document.getElementById("damageSlider").value === "1") {
                points += 2; 
            }
            const lowAttributes = ["DEXSlider", "STRSlider", "TOUSlider", "PERSlider", "WILSlider", "CHASlider"].filter(id => document.getElementById(id).value === "1").length;
            if (lowAttributes >= 6) {
                points += 2; // Add two points
            }
            else if (lowAttributes >= 3) {
                points += 1; // Add a point
            }

            // Update the points display
            pointsDisplay.textContent = "Points to spend remaining: " + points;
        });
    }
    const checkboxesDiv = document.getElementById("checkboxes"); 

    // Create checkboxes
    for (const category in checkboxData) {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("checkbox-category");

        const categoryHeader = document.createElement("h3");
        categoryHeader.textContent = category;
        categoryDiv.appendChild(categoryHeader);

        checkboxData[category].forEach(item => {
            const checkboxDiv = document.createElement("div");
            checkboxDiv.classList.add("checkbox-item");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = item.name; 
            checkboxDiv.appendChild(checkbox);

            const label = document.createElement("label");
            label.htmlFor = item.name;
            label.textContent = item.name + " (" + item.cost + " points)";
            checkboxDiv.appendChild(label);

            categoryDiv.appendChild(checkboxDiv);

            checkbox.addEventListener("change", () => {
                updatePoints(item, checkbox.checked);
            });
        });

        checkboxesDiv.appendChild(categoryDiv);
    }

    function updatePoints(item, isChecked) {
        // No need to handle dynamic costs anymore

        points = isChecked ? points - item.cost : points + item.cost;
        pointsDisplay.textContent = "Points to spend remaining: " + points;
    }

    circleSlider.addEventListener("input", () => {
        circleValue.textContent = circleSlider.value;
    });

    generateButton.addEventListener("click", () => {
        const circle = parseInt(circleSlider.value);
        const monsterName = "Generated Monster"; 
        const loreBlurb = "Insert lore blurb here."; 

        const results = {};

        for (const statName in statsData) {
            const slider = document.getElementById(statName + "Slider");
            const difficulty = slider.value; 
            let value = statsData[statName][circle][difficulty - 1];

            results[statName] = value;
        }

        let physicalArmor = results.physicalArmor;
        let mysticArmor = results.mysticArmor;
        let movementText = `Movement: ${results.movement}`;
    
        if (document.getElementById("Negative 3 PA").checked) {
            physicalArmor = -3;
        }
        if (document.getElementById("Negative 3 MA").checked) {
            mysticArmor = -3;
        }
        if (document.getElementById("Flying (Movement Rate)").checked) {
            movementText += ` (Flying ${results.movement})`;
        } else if (document.getElementById("Flying (Movement Rate / 2)").checked) {
            movementText += ` (Flying ${Math.floor(results.movement / 2)})`;
        }

        let attackText = `Actions: ${results.actions}; Unarmed: ${results.attack} (${results.damage})`; 

        let surpriseStrikeValue = 5;
        if (document.getElementById("Surprise Strike").checked) {
            if (circle >= 5 && circle <= 8) {
                surpriseStrikeValue = 10;
            } else if (circle >= 9) {
                surpriseStrikeValue = 15;
            }
            attackText += `, Surprise Unarmed: ${results.attack} (${results.damage + surpriseStrikeValue})`;
        }

        let challengeLevel = "";
        if (circle < 5) {
            challengeLevel = "Novice";
        } else if (circle < 9) {
            challengeLevel = "Journeyman";
        } else {
            challengeLevel = "Warden";
        }
    
        // Formatted output string with modified stats
        names = {1: "First", 2:"Second", 3:"Third", 4:"Fourth", 5:"Fifth", 6:"Sixth", 7:"Seventh", 8:"Eighth", 9:"Ninth", 10:"Tenth", 11:"Eleventh", 12:"Twelfth"}
        output = `
        <p>${monsterName}</h2>
        <p>${loreBlurb}</p>
        <p>Challenge: ${challengeLevel} (${names[circle]} circle)</p> 
        <p>DEX: ${results.DEX} Initiative: ${results.initiative} Unconsciousness: ${results.unconsciousness}</p>
        <p>STR: ${results.STR} Physical Defense: ${results.physicalDefense} Death Rating: ${results.deathRating}</p>
        <p>TOU: ${results.TOU} Mystic Defense: ${results.mysticDefense} Wound Threshold: ${results.woundThreshold}</p>
        <p>PER: ${results.PER} Social Defense: ${results.socialDefense} Knockdown: ${results.knockdown}</p>
        <p>WIL: ${results.WIL} Physical Armor: ${physicalArmor} Recovery Tests: ${results.recoveryTests}</p> 
        <p>CHA: ${results.CHA} Mystic Armor: ${mysticArmor}</p> 
        <p>${movementText}</p> 
        <p>${attackText}</p> 
        `;
        let additionalPowersText = "<p>Powers:</p>";

        // Offensive Capabilities
        if (document.getElementById("Deadly Poison, extra success (Circle + 5)").checked) {
            additionalPowersText += `<p>Poison (${circle + 5}): If the creature uses the Poison Stinger maneuver, the victim must resist the effects of a Deadly poison. The poison is Step ${circle + 5} [Onset: instant, Interval: 4/1 round, duration: 4 rounds]</p>`;
        }
        if (document.getElementById("Paralytic Poison, extra success (Circle + 5)").checked) {
            additionalPowersText += `<p>Poison (${circle + 5}): If the creature uses the Poison Stinger maneuver, the victim must resist the effects of a paralytic poison. The poison is Step ${circle + 5} [Onset: instant, Interval: 4/1 round, duration: 4 rounds]</p>`;
        }
        if (document.getElementById("Deadly Paralytic Poison, extra success (Circle + 5)").checked) {
            additionalPowersText += `<p>Poison (${circle + 5}): If the creature uses the Poison Stinger maneuver, the victim must resist the effects of a Deadly paralytic poison. The poison is Step ${circle + 5} [Onset: instant, Interval: 4/1 round, duration: 4 rounds]</p>`;
        }
        if (document.getElementById("Deadly Poison, wound (Circle + 5)").checked) {
            additionalPowersText += `<p>Poison (${circle + 5}): If the creature causes a wound with an attack, the victim must resist the effects of a Deadly poison. The poison is Step ${circle + 5} [Onset: instant, Interval: 4/1 round, duration: 4 rounds]</p>`;
        }
        if (document.getElementById("Paralytic Poison, wound (Circle + 5)").checked) {
            additionalPowersText += `<p>Poison (${circle + 5}): If the creature causes a wound with an attack, the victim must resist the effects of a paralytic poison. The poison is Step ${circle + 5} [Onset: instant, Interval: 4/1 round, duration: 4 rounds]</p>`;
        }
        if (document.getElementById("Deadly Paralytic Poison, wound (Circle + 5)").checked) {
            additionalPowersText += `<p>Poison (${circle + 5}): If the creature causes a wound with an attack, the victim must resist the effects of a deadly paralytic poison. The poison is Step ${circle + 5} [Onset: instant, Interval: 4/1 round, duration: 4 rounds]</p>`;
        }

        if (document.getElementById("Charge").checked) {
            let chargeValue = 5;
            if (circle >= 5 && circle <= 8) {
                chargeValue = 10;
            } else if (circle >= 9) {
                chargeValue = 15;
            }
            additionalPowersText += `<p>Charge (${chargeValue})</p>`;
        }
        if (document.getElementById("Dive").checked) {
            let diveValue = 5;
            if (circle >= 5 && circle <= 8) {
                diveValue = 10;
            } else if (circle >= 9) {
                diveValue = 15;
            }
            additionalPowersText += `<p>Dive (${diveValue})</p>`;
        }
        if (document.getElementById("Battle Shout (Circle + 4)").checked) {
            additionalPowersText += `<p>Battle Shout (${circle + 4}): The creature issues a loud shout, intimidating a single foe. The creature makes a Battle Shout test against his opponent's social defense. For each success, the target incurs a -2 penalty for each success to their action tests until the end of the next round. Each use against the same opponent in a given encounter increases the difficulty number by 5. This is an intimidation effect.</p>`;
        }
        if (document.getElementById("Battle Shout (Circle + 8)").checked) {
            additionalPowersText += `<p>Battle Shout (${circle + 8}): The creature issues a loud shout, intimidating a single foe. The creature makes a Battle Shout test against his opponent's social defense. For each success, the target incurs a -2 penalty for each success to their action tests until the end of the next round. Each use against the same opponent in a given encounter increases the difficulty number by 5. This is an intimidation effect.</p>`;
        }
        if (document.getElementById("Battle Bellow (CHA + 8)").checked) {
            additionalPowersText += `<p>Battle Bellow (${results.CHA + 8}): The creature issues a great bellow inspiring his allie and intimidating his enemies. The creature makes a battle bellow test against the highest social defense within 50 yards, +1 for each additional target. If successful, enemies suffer a -1 penalty for each success to their action tests until the end of the following round. Friendly targets gain a +1 bonus for each success to close combat attack tests.</p>`;
        }
        if (document.getElementById("Battle Bellow (CHA + 12)").checked) {
            additionalPowersText += `<p>Battle Bellow (${results.CHA + 12}): The creature issues a great bellow inspiring his allie and intimidating his enemies. The creature makes a battle bellow test against the highest social defense within 50 yards, +1 for each additional target. If successful, enemies suffer a -1 penalty for each success to their action tests until the end of the following round. Friendly targets gain a +1 bonus for each success to close combat attack tests.</p>`;
        }
        if (document.getElementById("Surprise Strike").checked) {
            additionalPowersText += `<p>Surprise Strike (${surpriseStrikeValue}): If attacking a target that is knocked down, blindsided, or surprised the creature gains this as a bonus to damage. Does not stack with ambush.</p>`;
        }

        if (document.getElementById("Great Leap (Movement Rate / 2)").checked) {
            additionalPowersText += `<p>Great Leap (${Math.floor(results.movement / 2)}): The creature may, as a free action, leap a distance in yards equal to this rank as part of their normal movement. This distance is divided by between horizontal and vertical distance leaped.</p>`;
        }
        if (document.getElementById("Great Leap (Movement Rate)").checked) {
            additionalPowersText += `<p>Great Leap (${results.movement}): The creature may, as a free action, leap a distance in yards equal to this rank as part of their normal movement. This distance is divided by between horizontal and vertical distance leaped.</p>`;
        }

        // Defensive Capabilities
        if (document.getElementById("Spiked Armor (TOU + Circle)").checked) {
            additionalPowersText += `<p>Spiked Armor (${results.TOU + circle}): The creature wraps itself in protective spikes. When an enemy hits this creature with a close combat attack, the spikes cut the attacker dealing Step ${results.TOU + circle}/physical damage.</p>`;
        }
        if (document.getElementById("Elemental Armor (WIL + Circle)").checked) {
            additionalPowersText += `<p>Elemental Armor (${results.WIL + circle}): The creature wraps itself in a protective [ELEMENT] aura. When an ememy hits this creature with an attack (close combat, ranged, or spell) within Step * 2 yards, the elementals arc to the attacker dealing Step ${results.WIL + circle}/physical damage with the [ELEMENT] keyword.</p>`;
        }
        if (document.getElementById("Resist Pain 2").checked) {
            additionalPowersText += "<p>Resist Pain (2): The creature ignores penalties for Wounds equal to the step of this ability.</p>";
        }
        if (document.getElementById("Resist Pain (TOU / 3)").checked) {
            additionalPowersText += `<p>Resist Pain (${Math.floor(results.TOU / 3)}): The creature ignores penalties for Wounds equal to the step of this ability.</p>`;
        }
        if (document.getElementById("Fury 2").checked) {
            additionalPowersText += "<p>Fury 2: Instead of suffering wound penalties, this grants the creature a bonus to tests. Once the creature has more wounds than the step of this ability, the bonuses are lost and the creature suffers normal penalties for Wounds.</p>";
        }
        if (document.getElementById("Fury (TOU / 3)").checked) {
            additionalPowersText += `<p>Fury (${Math.floor(results.TOU / 3)}): Instead of suffering wound penalties, this grants the creature a bonus to tests. Once the creature has more wounds than the step of this ability, the bonuses are lost and the creature suffers normal penalties for Wounds.</p>`;
        }
        if (document.getElementById("Regeneration (Standard, TOU + Circle)").checked) {
            additionalPowersText += `<p>Regeneration (Standard, ${results.TOU + circle}): The creature can spend a standard action to heal Step ${results.TOU + circle} damage.</p>`;
        }
        if (document.getElementById("Regeneration (Simple, TOU + Circle)").checked) {
            additionalPowersText += `<p>Regeneration (Simple, ${results.TOU + circle}): : The creature can spend a simple action to heal Step ${results.TOU + circle} damage.</p>`;
        }
        if (document.getElementById("Debuff Aura (Harried)").checked) {
            additionalPowersText += "<p>Debuff Aura (Harried): FILL IN THE BLANKS: Due to <reasons you choose>, those near the creature are harried OR suffer from some debuff.</p>";
        }

        // Other Capabilities
        if (document.getElementById("Stealthy Stride (Circle + 5)").checked) {
            additionalPowersText += `<p>Stealthy Stride (${circle + 5}): As the skill, Player's Guide p. 170.</p>`;
        }
        if (document.getElementById("Stealthy Stride (DEX + Circle)").checked) {
            additionalPowersText += `<p>Stealthy Stride (${results.DEX + circle}): As the skill, Player's Guide p. 170.</p>`;
        }
        if (document.getElementById("Awareness (Circle + 5)").checked) {
            additionalPowersText += `<p>Awareness (${circle + 5}): As the skill, Player's Guide p. 129.</p>`;
        }
        if (document.getElementById("Awareness (PER + Circle)").checked) {
            additionalPowersText += `<p>Awareness (${results.PER + circle}): As the skill, Player's Guide p. 129.</p>`;
        }
        if (document.getElementById("Climbing (Circle + 5)").checked) {
            additionalPowersText += `<p>Climbing (${circle + 5}): As the skill, Player's Guide p. 134.</p>`;
        }
        if (document.getElementById("Climbing (DEX + 5)").checked) {
            additionalPowersText += `<p>Climbing (${results.DEX + 5}): As the skill, Player's Guide p. 134.</p>`;
        }
        if (document.getElementById("Enhanced Sense [Vision] (5)").checked) {
            additionalPowersText += "<p>Enhanced Sense [Vision] (5)</p>";
        }
        if (document.getElementById("Enhanced Sense [Other] (5)").checked) {
            additionalPowersText += "<p>Enhanced Sense [Other] (5)</p>";
        }

        // Grand Vulnerabilityes
        if (document.getElementById("Vulnerability to Fire").checked) {
            additionalPowersText += "<p>Vulnerability to Fire: Attacks with the Fire keyword against the creature ignore any protection provided by armor.</p>";
        }
        if (document.getElementById("Vulnerability to Air").checked) {
            additionalPowersText += "<p>Vulnerability to Air: Attacks with the Air keyword against the creature ignore any protection provided by armor.</p>";
        }
        if (document.getElementById("Vulnerability to Earth").checked) {
            additionalPowersText += "<p>Vulnerability to Earth: Attacks with the Earth keyword against the creature ignore any protection provided by armor.</p>";
        }
        if (document.getElementById("Vulnerability to Water").checked) {
            additionalPowersText += "<p>Vulnerability to Water: Attacks with the Water or Cold keyword against the creature ignore any protection provided by armor.</p>";
        }
        if (document.getElementById("Vulnerability to Wood").checked) {
            additionalPowersText += "<p>Vulnerability to Wood: Attacks with the Wood keyword against the creature ignore any protection provided by armor.</p>";
        }
        if (document.getElementById("Require Alternative Sense").checked) {
            additionalPowersText += "<p>Require Alternative Sense: The monster must use the selected alternative sense to see.</p>";
        }

        // Grand Defenses
        if (document.getElementById("Immune to Fire").checked) {
            additionalPowersText += "<p>Immune to Fire: The creature takes no damage from attacks with the Fire keyword.</p>";
        }
        if (document.getElementById("Immune to Air").checked) {
            additionalPowersText += "<p>Immune to Air: The creature takes no damage from attacks with the Air keyword.</p>";
        }
        if (document.getElementById("Immune to Earth").checked) {
            additionalPowersText += "<p>Immune to Earth: The creature takes no damage from attacks with the Earth keyword.</p>";
        }
        if (document.getElementById("Immune to Water").checked) {
            additionalPowersText += "<p>Immune to Water: The creature takes no damage from attacks with the Water or Cold keyword.</p>";
        }
        if (document.getElementById("Immune to Wood").checked) {
            additionalPowersText += "<p>Immune to Wood: The creature takes no damage from attacks with the Wood keyword.</p>";
        }

        // Add the additional powers text to the output
        output += additionalPowersText; 

        resultsDiv.innerHTML = output;
    }); 
});