/*
 * @Author: tackchen
 * @Date: 2022-02-15 22:26:13
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-15 23:26:46
 * @FilePath: /pixi-ts/lib/adapter/index.ts
 * @Description: Coding something
 */

import {IAdapter} from '@lib/types/adapter';
import {isWebEnv} from '@lib/utils/util';
import WebAdapter from './web';

const Adapter: IAdapter = isWebEnv() ? WebAdapter : WebAdapter; // todo

export default Adapter;