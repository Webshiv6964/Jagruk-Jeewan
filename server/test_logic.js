const symptomChecker = require('./services/SymptomChecker');

const tests = [
    "I have a fever and headache",
    "My chest hurts a lot",
    "I have a burn on my hand",
    "Unrelated nonsense"
];

tests.forEach(query => {
    console.log(`\nQuery: "${query}"`);
    const result = symptomChecker.findCondition(query);
    if (result) {
        console.log(`Matched: ${result.condition}`);
        if (result.condition.includes("Emergency")) {
            console.log("ALERT: Emergency condition detected!");
        }
    } else {
        console.log("No specific condition matched (Defaulting to fallback in API).");
    }
});
