/*
    DiepCustom - custom tank game server that shares diep.io's WebSocket protocol
    Copyright (C) 2022 ABCxFF (github.com/ABCxFF)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>
*/

import GameServer from "../../Game";
import AbstractShape from "./AbstractShape";

import { Color, NameFlags } from "../../Const/Enums";

/*
const player = client.camera?.cameraData.player;
        if (!Entity.exists(player) || !(player instanceof ObjectEntity)) return;
        const x = xArg.match(RELATIVE_POS_REGEX) ? player.positionData.x + parseInt(xArg.slice(1) || "0", 10) : parseInt(xArg, 10);
        const y = yArg.match(RELATIVE_POS_REGEX) ? player.positionData.y + parseInt(yArg.slice(1) || "0", 10) : parseInt(yArg, 10);
        if (isNaN(x) || isNaN(y)) return;
        player.positionData.x = x;
        player.positionData.y = y;
        player.setVelocity(0, 0);
        player.entityState |= EntityStateFlags.needsCreate | EntityStateFlags.needsDelete;
*/

/**
 * Pentagon entity class.
 */
export default class Hexagon extends AbstractShape {
    /** If the pentagon is an alpha pentagon or not */
    public isAlpha: boolean;
    public isOmega: boolean;

    protected static BASE_ROTATION = AbstractShape.BASE_ROTATION / 2;
    protected static BASE_ORBIT = AbstractShape.BASE_ORBIT / 2;
    protected static BASE_VELOCITY = AbstractShape.BASE_VELOCITY / 2;

    public constructor(game: GameServer, isAlpha=false, tierOfTheShape=1, isOmega=false) {
        super(game);

        this.physicsData.values.sides = 6;
        
        this.nameData.values.name = `Hexagon Tier ${tierOfTheShape}`;
        this.physicsData.values.size = 100 * Math.SQRT1_2;

        this.isAlpha = isAlpha;
        this.isOmega = isOmega;

        if (isAlpha && isOmega) {
            isAlpha = false;
        }

        if (isAlpha) {

            this.physicsData.values.size = 300 * Math.SQRT1_2;
            this.nameData.values.name = `Alpha Hexagon Tier ${tierOfTheShape}`;

        } else if (isOmega) {

            this.physicsData.values.size = 900 * Math.SQRT1_2;
            this.nameData.values.name = `Omega Hexagon Tier ${tierOfTheShape}`;
        }

        this.physicsData.values.pushFactor = 11;


        if (tierOfTheShape === 5) { // 10 000

            this.styleData.values.color = Color.EnemyPentagonTier5

            this.scoreReward = 4_000_000;
                this.damagePerTick = 160;
                this.physicsData.values.absorbtionFactor = 0.001;
                this.healthData.values.health = this.healthData.values.maxHealth = 10000;

            if (isAlpha) {

                this.scoreReward = 30_000_000;
                this.damagePerTick = 320;
                this.physicsData.values.absorbtionFactor = 0.0005;
                this.healthData.values.health = this.healthData.values.maxHealth = 24000;
            } else if (isOmega) {

                this.scoreReward = 120_000_000;
                this.damagePerTick = 640;
                this.physicsData.values.absorbtionFactor = 0.0001;
                this.healthData.values.health = this.healthData.values.maxHealth = 64000;
            }

            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 4) { // 1 000

            this.styleData.values.color = Color.EnemyPentagonTier4

            this.scoreReward = 400_000;
                this.damagePerTick = 80;
                this.physicsData.values.absorbtionFactor = 0.005;
                this.healthData.values.health = this.healthData.values.maxHealth = 6000;

            if (isAlpha) {

                this.scoreReward = 3_000_000;
                this.damagePerTick = 160;
                this.physicsData.values.absorbtionFactor = 0.001;
                this.healthData.values.health = this.healthData.values.maxHealth = 16000;
            } else if (isOmega) {

                this.scoreReward = 10_000_000;
                this.damagePerTick = 320;
                this.physicsData.values.absorbtionFactor = 0.0005;
                this.healthData.values.health = this.healthData.values.maxHealth = 32000;
            }

            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 3) { // 100

            this.styleData.values.color = Color.EnemyPentagonTier3

            this.scoreReward = 40000;
                this.damagePerTick = 40;
                this.physicsData.values.absorbtionFactor = 0.01;
                this.healthData.values.health = this.healthData.values.maxHealth = 3000;

            if (isAlpha) {

                this.scoreReward = 200_000;
                this.damagePerTick = 80;
                this.physicsData.values.absorbtionFactor = 0.005;
                this.healthData.values.health = this.healthData.values.maxHealth = 6500;
            } else if (isOmega) {

                this.scoreReward = 800_000;
                this.damagePerTick = 160;
                this.physicsData.values.absorbtionFactor = 0.001;
                this.healthData.values.health = this.healthData.values.maxHealth = 10000;
            }
            
            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 2) { // 10

            this.styleData.values.color = Color.EnemyPentagonTier2

            this.scoreReward = 4000;
            this.damagePerTick = 20;
            this.physicsData.values.absorbtionFactor = 0.05;
            this.healthData.values.health = this.healthData.values.maxHealth = 1000;

            if (isAlpha) {

                this.scoreReward = 30000;
                this.damagePerTick = 40;
                this.physicsData.values.absorbtionFactor = 0.01;
                this.healthData.values.health = this.healthData.values.maxHealth = 4000;
            } else if (isOmega) {

                this.scoreReward = 80000;
                this.damagePerTick = 80;
                this.physicsData.values.absorbtionFactor = 0.005;
                this.healthData.values.health = this.healthData.values.maxHealth = 6000;
            }

            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);
        } else if (tierOfTheShape === 1) {

            this.styleData.values.color = Color.EnemyHexagon;

            this.scoreReward = 400;
            this.damagePerTick = 10;
            this.physicsData.values.absorbtionFactor = 0.5;
            this.healthData.values.health = this.healthData.values.maxHealth = 250;
            
            if (isAlpha) {

                this.scoreReward = 6000;
                this.damagePerTick = 20;
                this.physicsData.values.absorbtionFactor = 0.05;
                this.healthData.values.health = this.healthData.values.maxHealth = 2000;
            } else if (isOmega) {

                this.scoreReward = 24000;
                this.damagePerTick = 40;
                this.physicsData.values.absorbtionFactor = 0.01;
                this.healthData.values.health = this.healthData.values.maxHealth = 4000;
            }
        }
    }
}