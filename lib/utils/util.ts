/*
 * @Author: tackchen
 * @Date: 2022-02-15 23:26:08
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-15 23:26:38
 * @FilePath: /pixi-ts/lib/utils/util.ts
 * @Description: Coding something
 */

export function isWebEnv () {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}