import * as assert from 'assert';
import { window as Window } from 'vscode';

// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
  Window.showInformationMessage('Start all tests.');

  test('Sample test', () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
