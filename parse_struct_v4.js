import fs from 'fs';
import ts from 'typescript';

const fileContent = fs.readFileSync('src/translations/index.ts', 'utf8');
const sourceFile = ts.createSourceFile(
    'index.ts',
    fileContent,
    ts.ScriptTarget.Latest,
    true
);

function getKeys(node) {
    const keys = [];
    if (ts.isPropertyAssignment(node)) {
        if (ts.isObjectLiteralExpression(node.initializer)) {
            node.initializer.properties.forEach(prop => {
                if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name)) {
                    keys.push(prop.name.text);
                }
            });
        }
    }
    return keys;
}

let enKeys = [];
let koKeys = [];
let frKeys = [];

function visit(node) {
    if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name)) {
        if (node.name.text === 'en') {
            enKeys = getKeys(node);
        } else if (node.name.text === 'ko') {
            koKeys = getKeys(node);
        } else if (node.name.text === 'fr') {
            frKeys = getKeys(node);
        }
    }
    ts.forEachChild(node, visit);
}

visit(sourceFile);

console.log("EN keys:", enKeys.length);
console.log("KO keys:", koKeys.length);
console.log("FR keys:", frKeys.length);

const missingKo = enKeys.filter(k => !koKeys.includes(k));
const missingFr = enKeys.filter(k => !frKeys.includes(k));

console.log("Missing KO:", missingKo);
console.log("Missing FR:", missingFr);
