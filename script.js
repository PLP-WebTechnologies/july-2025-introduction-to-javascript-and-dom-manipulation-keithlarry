const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const chakra = parseInt(document.getElementById('chakra').value);
    const output = document.getElementById('output');

    output.innerHTML = '';

    if (!name || isNaN(chakra) || chakra < 1 || chakra > 100) {
        output.innerHTML = `<p>Please enter a valid ninja name and chakra level (1-100).</p>`;
        return;
    }

    output.innerHTML += `<h3>Welcome, ${name}!</h3>`;
    output.innerHTML += `<p>Analyzing your chakra level: ${chakra}...</p>`;

    if (chakra >= 80) {
        output.innerHTML += `<p>🟢 Your chakra is incredibly strong! You're an S-Class Shinobi.</p>`;
    } else if (chakra >= 50) {
        output.innerHTML += `<p>🟡 You're strong, but you still have room to grow.</p>`;
    } else {
        output.innerHTML += `<p>🔴 Low chakra detected. Begin basic training immediately.</p>`;
    }

    // JavaScript Functions
    const level = determineRank(chakra);
    const formattedName = formatNinjaName(name);

    output.innerHTML += `<p>Rank: <strong>${level}</strong></p>`;
    output.innerHTML += `<p>Codename: <strong>${formattedName}</strong></p>`;

    // JavaScript Loops
    output.innerHTML += `<h4>Recommended Techniques:</h4>`;
    const techniques = suggestTechniques(chakra);

    const ul = document.createElement('ul');
    techniques.forEach(function (tech) {
        const li = document.createElement('li');
        li.textContent = tech;
        ul.appendChild(li);
    });
    output.appendChild(ul);
});

// Function to determine shinobi rank
function determineRank(chakraLevel) {
    if (chakraLevel >= 80) return "S-Class";
    if (chakraLevel >= 60) return "A-Class";
    if (chakraLevel >= 40) return "B-Class";
    return "Genin";
}

// Function to format the ninja name
function formatNinjaName(name) {
    return `Shadow of ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`;
}

// Function that returns recommended techniques based on chakra
function suggestTechniques(chakraLevel) {
    const allTechniques = [
        "Basic Taijutsu",
        "Fire Style: Fireball Jutsu",
        "Chidori",
        "Amaterasu",
        "Rinnegan Warp",
        "Kirin",
        "Shadow Clone",
        "Susanoo"
    ];

    const suggestions = [];

    // Suggest techniques based on power level
    for (let i = 0; i < allTechniques.length; i++) {
        if (chakraLevel >= (i * 10 + 20)) {
            suggestions.push(allTechniques[i]);
        }
    }

    return suggestions;
}
