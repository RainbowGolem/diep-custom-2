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

export default class Triangle extends AbstractShape {
    public isAlpha: boolean;
    public isOmega: boolean;

    public constructor(game: GameServer, isAlpha=false, tierOfTheShape=1, isOmega=false) {
        super(game);
        
        this.nameData.values.name = "Triangle";

        this.physicsData.values.size = 55 * Math.SQRT1_2;
        this.physicsData.values.sides = 3;

        this.isAlpha = isAlpha;
        this.isOmega = isOmega;

        if (isAlpha && isOmega) {
            isAlpha = false;
        }

        if (isAlpha) {

            this.physicsData.values.size = 150 * Math.SQRT1_2;
            this.nameData.values.name = `Alpha Triangle Tier ${tierOfTheShape}`;

        } else if (isOmega) {

            this.physicsData.values.size = 450 * Math.SQRT1_2;
            this.nameData.values.name = `Omega Triangle Tier ${tierOfTheShape}`;
        }

        if (tierOfTheShape === 5) {

            this.styleData.values.color = Color.EnemyPentagonTier5

            this.scoreReward = isAlpha ? 1000000 : 50000;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 19200 : 960);

            this.damagePerTick = isAlpha ? 160 : 80;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.001 : 0.01;

            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 4) {

            this.styleData.values.color = Color.EnemyPentagonTier4

            this.scoreReward = isAlpha ? 300000 : 15000;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 9600 : 480);

            this.damagePerTick = isAlpha ? 80 : 40;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.005 : 0.05;

            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 3) {

            this.styleData.values.color = Color.EnemyPentagonTier3

            this.scoreReward = isAlpha ? 60000 : 3000;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 4800 : 240);

            this.damagePerTick = isAlpha ? 40 : 20;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.01 : 0.1;
            
            console.log(`${this.nameData.values.name}\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}\n`);

        } else if (tierOfTheShape === 2) {

            this.styleData.values.color = Color.EnemyPentagonTier2

            this.scoreReward = isAlpha ? 5000 : 250;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 1200 : 60);

            this.damagePerTick = isAlpha ? 20 : 10;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.05 : 0.5;

            //console.log(`Tier 2 triangle\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}`);
        } else {

            if (isOmega) {
                this.scoreReward
            }

            this.styleData.values.color = Color.EnemyTriangle;

            this.scoreReward = isAlpha ? 500 : 25;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 600 : 30);

            this.damagePerTick = isAlpha ? 10 : 5;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.1 : 1;
        }
    }
}
