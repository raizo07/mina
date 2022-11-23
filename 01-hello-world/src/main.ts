import { Square } from './Square.js';
import {
    isReady,
    shutdown,
    Field,
    Mina,
    PrivateKey,
    AccountUpdate,
} from 'snarkyjs';


(async function main() {
    await isReady

console.log('SnarkyJs loaded')

const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
const deployerAccount = Local.testAccounts[0].privateKey;

console.log('Shutting down');
}) ();