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
export default class Hexagon extends AbstractShape {
    /** If the pentagon is an alpha pentagon or not */
    public isAlpha: boolean;

    protected static BASE_ROTATION = AbstractShape.BASE_ROTATION / 2;
    protected static BASE_ORBIT = AbstractShape.BASE_ORBIT / 2;
    protected static BASE_VELOCITY = AbstractShape.BASE_VELOCITY / 2;

    public constructor(game: GameServer, isAlpha=false, tierOfTheShape=1, isOmega=false) {
        super(game);
        
        this.nameData.values.name = isAlpha ? "Hexagon" : "Hexagon";

        this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 3000 : 200);
        this.physicsData.values.size = (isAlpha ? 300 : 100) * Math.SQRT1_2;
        this.physicsData.values.sides = 6;

        this.physicsData.values.absorbtionFactor = isAlpha ? 0.04: 0.4;
        this.physicsData.values.pushFactor = 22;

        this.isAlpha = isAlpha;

        this.damagePerTick = isAlpha ? 80 : 48;
        this.scoreReward = isAlpha ? 12000 : 400;

        if (tierOfTheShape === 5) {

            this.styleData.values.color = Color.EnemyPentagonTier5

            this.scoreReward = isAlpha ? 20000000 : 1000000;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 64000 : 3200);

            this.damagePerTick = isAlpha ? 320 : 160;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.001 : 0.01;

            console.log(`Tier 5\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}`);

        } else if (tierOfTheShape === 4) {

            this.styleData.values.color = Color.EnemyPentagonTier4

            this.scoreReward = isAlpha ? 5000000 : 250000;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 32000 : 1600);

            this.damagePerTick = isAlpha ? 160 : 80;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.005 : 0.05;

            console.log(`Tier 4\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}`);

        } else if (tierOfTheShape === 3) {

            this.styleData.values.color = Color.EnemyPentagonTier3

            this.scoreReward = isAlpha ? 600000 : 30000;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 16000 : 800);

            this.damagePerTick = isAlpha ? 80 : 40;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.015 : 0.15;
            
           //console.log(`Tier 3\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}`);

        } else if (tierOfTheShape === 2) {

            this.styleData.values.color = Color.EnemyPentagonTier2

            this.scoreReward = isAlpha ? 50000 : 2500;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 4000 : 200);

            this.damagePerTick = isAlpha ? 40 : 20;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.03 : 0.3;

            //console.log(`Tier 2\nPoints: ${this.scoreReward}\nHealth: ${this.healthData.values.health}\nDamage: ${this.damagePerTick}\nAbsorbtion: ${this.physicsData.values.absorbtionFactor}`);
        } else {

            this.styleData.values.color = Color.EnemyHexagon;

            this.scoreReward = isAlpha ? 3000 : 150;

            this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 2000 : 100);

            this.damagePerTick = isAlpha ? 20 : 10;

            this.physicsData.values.absorbtionFactor = isAlpha ? 0.05 : 0.5;
        }
    }
}