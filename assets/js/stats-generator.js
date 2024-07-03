document.addEventListener("DOMContentLoaded", function() {
    const circleSlider = document.getElementById("circleSlider");
    const circleValue = document.getElementById("circleValue");
    const generateButton = document.getElementById("generateButton");
    const resultsDiv = document.getElementById("results");
    const statsDiv = document.getElementById("stats");
  
    const statsData = {
        DEX: { 9: [6, 9, 12], 10: [7, 10, 12], 11: [7, 8, 9], 12: [6, 6, 6] },
        initiative: { 9: [7, 11, 14], 10: [8, 11, 14], 11: [7, 9, 10], 12: [8, 8, 8] },
        unconsciousness: { 9: [80, 94, 108], 10: [88, 98, 108], 11: [91, 108, 126], 12: [102, 114, 126] },
        STR: { 9: [8, 11, 14], 10: [8, 11, 14], 11: [9, 12, 16], 12: [14, 16, 18] },
        physicalDefense: { 9: [14, 17, 19], 10: [16, 19, 21], 11: [16, 19, 21], 12: [20, 20, 21] },
        deathRating: { 9: [93, 111, 130], 10: [102, 113, 125], 11: [103, 126, 148], 12: [116, 132, 148] },
        TOU: { 9: [9, 12, 16], 10: [10, 14, 17], 11: [12, 16, 19], 12: [14, 18, 22] },
        mysticDefense: { 9: [16, 18, 20], 10: [16, 18, 21], 11: [16, 21, 25], 12: [17, 20, 24] },
        woundThreshold: { 9: [13, 19, 24], 10: [15, 20, 26], 11: [19, 23, 28], 12: [21, 27, 33] },
        PER: { 9: [5, 8, 11], 10: [6, 9, 12], 11: [6, 10, 13], 12: [7, 8, 8] },
        socialDefense: { 9: [12, 15, 18], 10: [16, 18, 19], 11: [17, 20, 23], 12: [20, 21, 22] },
        knockdown: { 9: [9, 13, 17], 10: [9, 14, 18], 11: [12, 16, 20], 12: [20, 20, 20] },
        WIL: { 9: [6, 9, 12], 10: [6, 10, 14], 11: [6, 10, 15], 12: [8, 9, 10] },
        physicalArmor: { 9: [8, 11, 13], 10: [8, 12, 15], 11: [10, 15, 19], 12: [14, 15, 16] },
        recoveryTests: { 9: [3, 4, 5], 10: [3, 4, 6], 11: [4, 5, 6], 12: [5, 6, 7] },   
        CHA: { 9: [5, 6, 8], 10: [4, 6, 8], 11: [4, 7, 10], 12: [4, 6, 9] },
        mysticArmor: { 9: [9, 11, 13], 10: [10, 12, 14], 11: [11, 14, 18], 12: [12, 13, 14] },
        movement: { 9: [10, 13, 15], 10: [6, 11, 17], 11: [8, 12, 16], 12: [8, 11, 14] },
        actions: { 9: [2, 3, 4], 10: [3, 3, 4], 11: [3, 3, 4], 12: [3, 4, 6] },
        attack: { 9: [20, 24, 27], 10: [22, 25, 27], 11: [22, 26, 29], 12: [30, 30, 30] },
        damage: { 9: [16, 21, 26], 10: [24, 26, 29], 11: [24, 27, 30], 12: [30, 30, 30] },
    };
  
    const difficultyLabels = ["Low", "Average", "High"];

    // Create HTML for stats sliders
    for (const statName in statsData) {
      const statDiv = document.createElement("div");
      statDiv.classList.add("stat");
      
      const label = document.createElement("label");
      label.textContent = statName
          .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space between words
          .replace(/^./, str => str.toUpperCase()) + ":"; // Capitalize first letter
      label.htmlFor = statName + "Slider";
      statDiv.appendChild(label);

      const slider = document.createElement("input");
      slider.type = "range";
      slider.id = statName + "Slider";
      slider.min = "1";
      slider.max = "3";
      slider.value = "2";
      statDiv.appendChild(slider);
  
      const valueSpan = document.createElement("span");
      valueSpan.id = statName + "Value";
      valueSpan.textContent = difficultyLabels[slider.value - 1];
      statDiv.appendChild(valueSpan);
  
      statsDiv.appendChild(statDiv);
  
      slider.addEventListener("input", () => {
          valueSpan.textContent = difficultyLabels[slider.value - 1];
      });
    }
    // Randomness slider (with label)
    const randomnessDiv = document.createElement("div");
    randomnessDiv.classList.add("stat");

    const randomnessLabel = document.createElement("label");
    randomnessLabel.textContent = "Randomness:";
    randomnessLabel.htmlFor = "randomnessSlider";
    randomnessDiv.appendChild(randomnessLabel);

    const randomnessSlider = document.createElement("input");
    randomnessSlider.type = "range";
    randomnessSlider.id = "randomnessSlider";
    randomnessSlider.min = "0";
    randomnessSlider.max = "25";
    randomnessSlider.value = "0";
    randomnessDiv.appendChild(randomnessSlider);

    const randomnessValue = document.createElement("span");
    randomnessValue.id = "randomnessValue";
    randomnessValue.textContent = "0%";
    randomnessDiv.appendChild(randomnessValue);

    statsDiv.appendChild(randomnessDiv); 

    randomnessSlider.addEventListener("input", () => {
        randomnessValue.textContent = randomnessSlider.value + "%";
    });
  
    circleSlider.addEventListener("input", () => {
      circleValue.textContent = circleSlider.value;
    });
  
    generateButton.addEventListener("click", () => {
        const circle = parseInt(circleSlider.value);
        const randomnessPercent = parseInt(randomnessSlider.value);
        const monsterName = "Generated Monster";
        const loreBlurb = "Insert lore blurb here.";

        const results = {};
        const excludedStats = ["dex", "str", "tou", "per", "wil", "cha", "actions"]; // Stats to exclude from randomization

        for (const statName in statsData) {
            const slider = document.getElementById(statName + "Slider");
            const difficulty = slider.value;
            let value = statsData[statName][circle][difficulty - 1];

            // Apply randomness if not excluded
            if (!excludedStats.includes(statName.toLowerCase())) {
                const randomnessRange = Math.round(value * (randomnessPercent / 100));
                const randomAdjustment = Math.floor(Math.random() * (randomnessRange * 2 + 1)) - randomnessRange;
                value = Math.max(1, value + randomAdjustment); // Ensure value doesn't go below 1
            }

            results[statName] = value;
        }

        const attackIndex = Math.min(results["actions"] - 1, statsData["attack"][circle].length - 1); // Get the correct index
        let attack = statsData["attack"][circle][attackIndex];
        const damageIndex = Math.min(results["actions"] - 1, statsData["damage"][circle].length - 1); // Get the correct index
        let damage = statsData["damage"][circle][damageIndex];

        if (randomnessPercent > 0) {
            const attackRandomnessRange = Math.round(attack * (randomnessPercent / 100));
            const attackRandomAdjustment = Math.floor(Math.random() * (attackRandomnessRange * 2 + 1)) - attackRandomnessRange;
            attack = Math.max(1, attack + attackRandomAdjustment);

            const damageRandomnessRange = Math.round(damage * (randomnessPercent / 100));
            const damageRandomAdjustment = Math.floor(Math.random() * (damageRandomnessRange * 2 + 1)) - damageRandomnessRange;
            damage = Math.max(1, damage + damageRandomAdjustment);
        }

        // Formatted output string
        const output = `
            <p>${monsterName}</h2>
            <p>${loreBlurb}</p>
            <p>Challenge: Warden (Circle ${circle})</p>
            <p>DEX: ${results.DEX} Initiative: ${results.initiative} Unconsciousness: ${results.unconsciousness}</p>
            <p>STR: ${results.STR} Physical Defense: ${results.physicalDefense} Death Rating: ${results.deathRating}</p>
            <p>TOU: ${results.TOU} Mystic Defense: ${results.mysticDefense} Wound Threshold: ${results.woundThreshold}</p>
            <p>PER: ${results.PER} Social Defense: ${results.socialDefense} Knockdown: ${results.knockdown}</p>
            <p>WIL: ${results.WIL} Physical Armor: ${results.physicalArmor} Recovery Tests: ${results.recoveryTests}</p>
            <p>CHA: ${results.CHA} Mystic Armor: ${results.mysticArmor}</p>
            <p>Movement: ${results.movement}</p>
            <p>Actions: ${results.actions}; Unarmed: ${attack} (${damage})</p>
        `;

        resultsDiv.innerHTML = output;
    });
});