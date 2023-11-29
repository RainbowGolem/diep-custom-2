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

import ArenaEntity from "../../Native/Arena";
import GameServer from "../../Game";

import Crasher from "./Crasher";
import Pentagon from "./Pentagon";
import Triangle from "./Triangle";
import Square from "./Square";
import AbstractShape from "./AbstractShape";
import { removeFast } from "../../util";
import Hexagon from "./Hexagon";

function chooseShape() {
    let whichShape = Math.random();

    let shape;

    if (whichShape < 0.02) {
        shape = Hexagon;
    } else if (whichShape < 0.08) {
        shape = Pentagon;
    } else if (whichShape < 0.20) {
        shape = Triangle;
    } else {        
        shape = Square;
    }
    
    //console.log('not center shape was chosen')
    return shape;
}

function chooseCenterShape() {
    let whichShape = Math.random();

    let shape;

    if (whichShape < 0.1) {
        shape = Square;
    } else if (whichShape < 0.3) {
        shape = Triangle;
    } else if (whichShape < 0.5) {
        shape = Hexagon;
    } else if (whichShape < 0.7){        
        shape = Pentagon;
    } else {
        shape = Crasher
    }
    
    //console.log('center just got in here')
    return shape;
}

function findShapeTier(num1: number, num2: number, num3: number, num4: number) {
    let tierOfTheShape = 1;

    let tier2 = Math.random() <= num1 || false;
    let tier3 = (Math.random() <= num2 && tier2) || false
    let tier4 = (Math.random() <= num3 && tier3) || false
    let tier5 = (Math.random() <= num4 && tier4) || false

    if (tier5) {
        tierOfTheShape = 5;
    } else if (tier4) {
        tierOfTheShape = 4;
    } else if (tier3) {
        tierOfTheShape = 3;
    } else if (tier2) {
        tierOfTheShape = 2;
    }

    return tierOfTheShape;
}

/**
 * Used to balance out shape count in the arena, as well
 * as determines where each type of shape spawns around the arena.
 */

export default class ShapeManager {
    /** Current game server */
    protected game: GameServer;
    /** Arena whose shapes are being managed */
    protected arena: ArenaEntity;
    /** Stores all shapes */
    protected shapes: AbstractShape[] = [];

    public constructor(arena: ArenaEntity) {
        this.arena = arena;
        this.game = arena.game;
    }

    /**
     * Spawns a shape in a random location on the map.
     * Determines shape type by the random position chosen.
     */
    protected spawnShape(): AbstractShape {

        let shape: AbstractShape;

        const isCenterShape = Math.random() < 0.05;

        let whichShape = isCenterShape ? chooseCenterShape() : chooseShape();

        let tierOfTheShape = findShapeTier(0.1, 0.1, 0.1, 0.1);

        const {x, y} = this.arena.findSpawnLocation();
        const rightX = this.arena.arenaData.values.rightX;
        const leftX = this.arena.arenaData.values.leftX;
        
        if (isCenterShape) {
            // Pentagon Nest
            // Crasher Zone
                const isBig = Math.random() < .2;

                shape = new whichShape(this.game, true, tierOfTheShape, Math.random() < 0.05, isBig);

                shape.positionData.values.x = x / 10;
                shape.positionData.values.y = y / 10;
                shape.relationsData.values.owner = shape.relationsData.values.team = this.arena;
        } else {
            // Fields of Shapes
            const rand = Math.random();
            
            shape = new whichShape(this.game, Math.random() < 0.01, tierOfTheShape, false);

            if (Math.max(x, y) < rightX / 10 && Math.min(x, y) > leftX / 10) {
                shape.positionData.values.x = x * 10
                shape.positionData.values.y = y * 10
            } else {
                shape.positionData.values.x = x;
                shape.positionData.values.y = y;
            }

            shape.relationsData.values.owner = shape.relationsData.values.team = this.arena;
        }

        shape.scoreReward *= this.arena.shapeScoreRewardMultiplier;
        return shape;
    }

    /** Kills all shapes in the arena */
    public killAll() {
        for(let i = 0; i < this.shapes.length; ++i) {
            this.shapes[i]?.delete();
        }
    }

    protected get wantedShapes() {
        return 1000;
    }

    public tick() {
        for (let i = this.wantedShapes; i --> 0;) {
            const shape = this.shapes[i];
            // Alternatively, Entity.exists(shape), though this is probably faster
            if (!shape || shape.hash === 0) this.shapes[i] = this.spawnShape();
        }
    }
}
