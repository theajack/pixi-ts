/*
 * @Author: tackchen
 * @Date: 2022-02-15 22:57:08
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-19 20:56:19
 * @FilePath: /pixi-ts/lib/adapter/web/index.ts
 * @Description: Coding something
 */

import {IAdapter} from '@lib-types/adapter';
import {ISize} from '@lib/types/util';
import {isWebEnv} from '@lib/utils/util';

let viewObject: ISize & {view: HTMLCanvasElement};

const WebAdapter: IAdapter = {
    getRenderView () {
        if (!viewObject) {
            const size = this.getScreenSize();
            const canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            canvas.width = size.width;
            canvas.height = size.height;
            viewObject = {
                ...size,
                view: canvas,
            };
        }
        return viewObject;
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