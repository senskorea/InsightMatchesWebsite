const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const ts = require('typescript');

const source = fs.readFileSync(path.resolve(__dirname, '../src/pages/Careers.tsx'), 'utf8');
const file = ts.createSourceFile('Careers.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const expectedIds = ['korea-country-manager', 'technology-lead', 'project-coordinator', 'growth-content-lead'];
const roleObjects = [];

function property(object, name) {
  return object.properties.find(item => ts.isPropertyAssignment(item) && item.name.getText(file).replaceAll(/['"]/g, '') === name);
}

function visit(node) {
  if (ts.isObjectLiteralExpression(node)) {
    const id = property(node, 'id');
    if (id && ts.isStringLiteral(id.initializer) && expectedIds.includes(id.initializer.text)) roleObjects.push(node);
  }
  ts.forEachChild(node, visit);
}
visit(file);

assert.equal(roleObjects.length, 8, 'Expected four English and four Korean role definitions');
for (const id of expectedIds) assert.equal(roleObjects.filter(role => property(role, 'id').initializer.text === id).length, 2, 'Missing locale for ' + id);
for (const role of roleObjects) {
  for (const [name, count] of [['responsibilities', 5], ['requirements', 5], ['firstSixMonths', 3]]) {
    const value = property(role, name);
    assert(value && ts.isArrayLiteralExpression(value.initializer), 'Missing ' + name);
    assert.equal(value.initializer.elements.length, count, property(role, 'id').initializer.text + ' has inconsistent ' + name);
  }
}
assert(!source.includes('Founding CTO / Lead Engineer'), 'Legacy CTO title remains');
console.log('PASS: four vacancies, two languages and consistent section counts');
