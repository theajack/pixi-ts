/*
 * @Author: tackchen
 * @Date: 2022-02-15 23:26:08
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 01:53:54
 * @FilePath: /pixi-ts/lib/utils/util.ts
 * @Description: Coding something
 */

export function isWebEnv () {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
export function sign (n: number): -1|0|1 {
    if (n === 0) return 0;
    return n < 0 ? -1 : 1;
}