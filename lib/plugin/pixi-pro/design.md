<!--
 * @Author: tackchen
 * @Date: 2022-02-18 13:57:48
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-19 00:17:15
 * @FilePath: /pixi-ts/lib/plugin/pixi-pro/design.md
 * @Description: Coding something
-->

摩擦力: friction 0-1
弹力: elasticity 0-1
质量: quality

竖直模式

密度: density 0 1
空气密度： airDensity 0.5
重力加速度 ay = (density - airDenisity) * 1;
水平空气阻力忽略不计

水平模式

地面的摩擦力系数: 1
两物体接触的摩擦力: friction_a * friction_b
两物体接触的弹力: fe = elasticity_a * elasticity_b

碰撞之后 会使物体速度方向 速度大小 - (1 - fe) * v;





