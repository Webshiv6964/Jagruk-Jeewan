const medicalData = require('../data/medicalDatabase.json');

class SymptomChecker {
    constructor() {
        this.data = medicalData;
    }

    findCondition(userQuery) {
        // Normalize query
        const lowerQuery = userQuery.toLowerCase();

        // Simple keyword matching (scoring mechanism could be better, but this works for v1)
        let bestMatch = null;
        let maxMatches = 0;

        for (const item of this.data) {
            let matches = 0;
            for (const keyword of item.keywords) {
                if (lowerQuery.includes(keyword)) {
                    matches++;
                }
            }

            // Prioritize "Chest Pain" or Emergency items if matched even once to be safe
            if (matches > 0 && item.condition.includes("Emergency")) {
                return item;
            }

            if (matches > maxMatches) {
                maxMatches = matches;
                bestMatch = item;
            }
        }

        return bestMatch;
    }
}

module.exports = new SymptomChecker();
