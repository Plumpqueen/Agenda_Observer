"use strict";
/* import { describe, expect, test } from '@jest/globals';
import main from "../src/main";

describe('main', () => {
    test('main', () => {
        expect(main()).toBe(true);
    })
}); */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const main_1 = __importDefault(require("../src/main"));
(0, globals_1.describe)('main function', () => {
    (0, globals_1.test)('main function returns the string "Hello, World!"', () => {
        (0, globals_1.expect)((0, main_1.default)()).toMatch("Hello, World!");
    });
});
//# sourceMappingURL=main.test.js.map