import * as vscode from 'vscode';

import { EXTENSION_NAME } from './shared';

export function activate(context: vscode.ExtensionContext) {
    console.log(`${EXTENSION_NAME} extension activated`);
}

export function deactivate() {
    console.log(`${EXTENSION_NAME} extension deactivated`);
}
