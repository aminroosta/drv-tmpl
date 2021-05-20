import { execSync } from 'child_process';
import * as path from 'path';

function checkCodeFormatting() {
  const root = path.join(__dirname, '..');
  const prettier = `${root}/node_modules/.bin/prettier`;
  execSync(`${prettier} --check ${root}`);
}
it('Everything is formatted', () => {
  expect(checkCodeFormatting).not.toThrow();
});
