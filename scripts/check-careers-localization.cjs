const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const page = ts.createSourceFile('Careers.tsx', fs.readFileSync(path.join(root, 'src/pages/Careers.tsx'), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const dictionarySource = fs.readFileSync(path.join(root, 'src/translations/koreaRole.ts'), 'utf8');
const dictionary = JSON.parse(dictionarySource.slice(dictionarySource.indexOf('= ') + 2).trim().replace(/;$/, ''));
const roles = ['korea-country-manager', 'cto', 'project-coordinator'];
let checked = 0;
const found = [];
function visit(node, inRole = false) {
  if (ts.isJsxElement(node) && node.openingElement.tagName.getText(page) === 'section') {
    const id = node.openingElement.attributes.properties.find(p => ts.isJsxAttribute(p) && p.name.text === 'id');
    if (id && id.initializer && ts.isStringLiteral(id.initializer) && roles.includes(id.initializer.text)) {
      inRole = true;
      found.push(id.initializer.text);
    }
  }
  if (inRole && ts.isJsxText(node)) assert.equal(node.text.trim(), '', 'Untranslated job text: ' + node.text.trim());
  if (ts.isCallExpression(node) && node.expression.getText(page) === 'copy') {
    assert(ts.isStringLiteral(node.arguments[0]), 'Use a literal translation key');
    const key = node.arguments[0].text;
    assert(dictionary[key] && /[가-힣]/.test(dictionary[key]), 'Missing Korean translation: ' + key);
    checked++;
  }
  ts.forEachChild(node, child => visit(child, inRole));
}
visit(page);
assert.deepEqual(found, roles, 'Keep all three roles, with Country Manager first');
console.log('PASS: all three job specs localised; ' + checked + ' translated text instances checked');
