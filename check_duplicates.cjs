const fs = require('fs');

const content = fs.readFileSync('src/translations/index.ts', 'utf8');

function findDuplicates(lang) {
    const regex = new RegExp(`\\b${lang}:\\s*\\{([\\s\\S]*?)\\},\\s*(?:[a-z]+:|export)`, 'i');
    const match = content.match(regex);
    let block = '';
    if (!match) {
        const regexLast = new RegExp(`\\b${lang}:\\s*\\{([\\s\\S]*?)\\}\\s*\\};`, 'i');
        const matchLast = content.match(regexLast);
        if (matchLast) block = matchLast[1];
    } else {
        block = match[1];
    }

    const lines = block.split('\n');
    const keys = [];
    const duplicates = [];
    for (const line of lines) {
        const m = line.match(/^\s*([a-zA-Z0-9_]+)\s*:/);
        if (m) {
            const key = m[1];
            if (keys.includes(key)) {
                duplicates.push(key);
            }
            keys.push(key);
        }
    }
    return { keysCount: keys.length, duplicates };
}

console.log("EN:", findDuplicates('en'));
console.log("KO:", findDuplicates('ko'));
console.log("FR:", findDuplicates('fr'));
