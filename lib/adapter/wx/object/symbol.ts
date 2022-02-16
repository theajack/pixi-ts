/*
 * @Author: tackchen
 * @Date: 2022-02-15 23:00:40
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-15 23:30:01
 * @FilePath: /pixi-ts/lib/adapter/wx/object/symbol.ts
 * @Description: Coding something
 */

let idCounter = 0;

if (!window.Symbol) {
    const MockSymbol = (function Symbol (key: string) {
        return `__${key}_${Math.floor(Math.random() * 1e9)}_${++idCounter}__`;
    }) as any;

    MockSymbol.iterator = Symbol('Symbol.iterator');
    window.Symbol = MockSymbol as any;
}