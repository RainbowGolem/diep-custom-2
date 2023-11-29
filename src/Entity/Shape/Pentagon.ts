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

import { Color } from "../../Const/Enums";

/**
 * Pentagon entity class.
 */
export default class Pentagon extends AbstractShape {
    /** If the pentagon is an alpha pentagon or not */
    public isAlpha: boolean;
    public isOmega: boolean;

    protected static BASE_ROTATION = AbstractShape.BASE_ROTATION / 2;
    protected static BASE_ORBIT = AbstractShape.BASE_ORBIT / 2;
    protected static BASE_VELOCITY = AbstractShape.BASE_VELOCITY / 2;

    public constructor(game: GameServer, isAlpha=false, tierOfTheShape=1, isOmega=false) {
        super(game);
        
        this.physicsData.values.sides = 5;

        this.nameData.values.name = `Pentagon Tier ${tierOfTheShape}`;
        this.physicsData.values.size = 75 * Math.SQRT1_2;

        this.isAlpha = isAlpha;
        this.isOmega = isOmega;

        if (isAlpha && isOmega) {
            isAlpha = false;
        }

        if (isAlpha) {

            this.physicsData.values.size = 225 * Math.SQRT1_2;
            this.nameData.values.name = `Alpha Pentagon Tier ${tierOfTheShape}`;

        } else if (isOmega) {

            this.physicsData.values.size = 675 * Math.SQRT1_2;
            this.nameData.values.name = `Omega Pentagon Tier ${tierOfTheShape}`;
        }

        this.physicsData.values.pushFactor = 11;


        if (tierOfTheShape === 5) { // 10 000

            this.styleData.values.color = Color.EnemyPentagonTier5

            this.scoreReward = 1_500_000;
                this.damagePerTick = 160;
                this.physicsData.values.absorbtionFactor = 0.005;
                this.healthData.values.health = this.healthData.values.maxHealth = 8000;

            if (isAlpha) {

                this.scoreReward = 10_000_000;
                this.damagePerTick = 320;
                this.physicsData.values.absorbtionFactor = 0.001;
                this.healthData.values.health = this.healthData.values.maxHealth = 18000;
            } else if (isOmega) {

                this.scoreReward = 40_000_000;
                this.damagePerTick = 640;
                this.physicsData.values.absorbtionFactor = 0.0005;
                this.healthData.values.health = this.healthData.values.maxHealth = 36000;
            }

            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 4) { // 1 000

            this.styleData.values.color = Color.EnemyPentagonTier4

            this.scoreReward = 300_000;
                this.damagePerTick = 80;
                this.physicsData.values.absorbtionFactor = 0.01;
                this.healthData.values.health = this.healthData.values.maxHealth = 4000;

            if (isAlpha) {

                this.scoreReward = 800_000;
                this.damagePerTick = 160;
                this.physicsData.values.absorbtionFactor = 0.005;
                this.healthData.values.health = this.healthData.values.maxHealth = 8000;
            } else if (isOmega) {

                this.scoreReward = 4_000_000;
                this.damagePerTick = 320;
                this.physicsData.values.absorbtionFactor = 0.001;
                this.healthData.values.health = this.healthData.values.maxHealth = 18000;
            }

            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 3) { // 100

            this.styleData.values.color = Color.EnemyPentagonTier3

            this.scoreReward = 15000;
                this.damagePerTick = 40;
                this.physicsData.values.absorbtionFactor = 0.05;
                this.healthData.values.health = this.healthData.values.maxHealth = 2000;

            if (isAlpha) {

                this.scoreReward = 40000;
                this.damagePerTick = 80;
                this.physicsData.values.absorbtionFactor = 0.01;
                this.healthData.values.health = this.healthData.values.maxHealth = 5000;
            } else if (isOmega) {

                this.scoreReward = 200_000;
                this.damagePerTick = 160;
                this.physicsData.values.absorbtionFactor = 0.005;
                this.healthData.values.health = this.healthData.values.maxHealth = 10000;
            }
            
            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 2) { // 10

            this.styleData.values.color = Color.EnemyPentagonTier2

            this.scoreReward = 1500;
            this.damagePerTick = 20;
            this.physicsData.values.absorbtionFactor = 0.1;
            this.healthData.values.health = this.healthData.values.maxHealth = 500;

            if (isAlpha) {

                this.scoreReward = 10000;
                this.damagePerTick = 40;
                this.physicsData.values.absorbtionFactor = 0.05;
                this.healthData.values.health = this.healthData.values.maxHealth = 2500;
            } else if (isOmega) {

                this.scoreReward = 40000;
                this.damagePerTick = 80;
                this.physicsData.values.absorbtionFactor = 0.01;
                this.healthData.values.health = this.healthData.values.maxHealth = 4000;
            }

            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);
        } else if (tierOfTheShape === 1) {

            this.styleData.values.color = Color.EnemyPentagon;

            this.scoreReward = 150;
            this.damagePerTick = 10;
            this.physicsData.values.absorbtionFactor = 0.5;
            this.healthData.values.health = this.healthData.values.maxHealth = 100; // 100
            
            if (isAlpha) {

                this.scoreReward = 2000;
                this.damagePerTick = 20;
                this.physicsData.values.absorbtionFactor = 0.1;
                this.healthData.values.health = this.healthData.values.maxHealth = 1000; // 300
            } else if (isOmega) {

                this.scoreReward = 12000;
                this.damagePerTick = 40;
                this.physicsData.values.absorbtionFactor = 0.05;
                this.healthData.values.health = this.healthData.values.maxHealth = 2500; // 900
            }
        }
    }
}