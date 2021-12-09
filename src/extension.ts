import { commands as Commands, window as Window, ExtensionContext } from 'vscode';

export const activate = (context: ExtensionContext) => {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "rallycoding-vscode" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = Commands.registerCommand('rallycoding-vscode.helloWorld', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    Window.showInformationMessage('Hello World from RallyCoding for VSCode!');
  });

  context.subscriptions.push(disposable);
};

export const deactivate = () => {};
