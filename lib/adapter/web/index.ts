/*
 * @Author: tackchen
 * @Date: 2022-02-15 22:57:08
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-15 23:33:23
 * @FilePath: /pixi-ts/lib/adapter/web/index.ts
 * @Description: Coding something
 */

import {IAdapter} from '@lib-types/adapter';
import {isWebEnv} from '@lib/utils/util';

const WebAdapter: IAdapter = {
    getRenderView () {
        const size = this.getScreenSize();
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        return {
            ...size,
            view: canvas,
        };
    },
    getScreenSize () {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
};

function initStyle () {
    const style = document.createElement('style');
    style.innerText = 'body {padding: 0; margin: 0; position: fixed;outline: none; overflow: hidden; touch-action: none;}';
    document.head.appendChild(style);
}

if (isWebEnv()) {
    initStyle();
}

export default WebAdapter;