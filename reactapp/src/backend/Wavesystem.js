import { Path } from "../assets/components/Path";
import { Vector2d } from "../base/baseStructor/Vector2d";
import { sleep } from "../base/Sleep";
import { EventHandler } from "../base/baseBehaviour/EventHandler";
import { Player } from "../assets/components/bank/Player";
import { EnemyPool } from "../assets/pools/EnemyPool";
import { enemyTypesHealth } from "../assets/components/enemy/EnemyTypes";

class WaveSystem {
    constructor(path) {
        this.path = path;
        this.round = 0;
        this.roundUpscale = 0;
        this.spawAmount = 20;
        this.isWaveActive = false;
        this.enemiesSpawnedTotal = 0;
        this.enemiesRemainingThisRound = 0;

        this.onWaveChange = new EventHandler();
    }

    initialize() {
        this.path.createRectanglesOnPath();
    }

    async nextRound() {
        if (this.isWaveActive) return;

        this.isWaveActive = true;
        this.round += 1;
        this.enemiesRemainingThisRound = this.spawAmount;

        this.onWaveChange.invoke();

        let enemyTypeToSpawn = this.#getEnemyTypeByRound(this.round);

        for (let index = 0; index < this.spawAmount; index++) {
            this.spawnEnemy(enemyTypeToSpawn);
            await sleep(400);
        }

        this.spawAmount += 5;
    }

    enemyDead = () => {
        this.enemiesRemainingThisRound -= 1;
        if (this.enemiesRemainingThisRound < 1) this.endRound();
    }

    endRound() {
        if (this.isWaveActive === false) return;
        this.isWaveActive = false;
        this.onWaveChange.invoke();
        Player.bank.add(100 + this.round);
    }

    spawnEnemy(enemyType) {
        EnemyPool.getInstance().acquireReuseable(enemyType, this.path, this.enemyDead);

        this.enemiesSpawnedTotal += 1;
    }

    #getEnemyTypeByRound(round) {
        let enemyTypes = Object.keys(enemyTypesHealth);

        if(round % 3 == 0 && this.roundUpscale < enemyTypes.length - 1){
            this.roundUpscale += 1;
        }

        return enemyTypes[this.roundUpscale];
    }

    #getRandomEnemyType() {
        // inspired from https://thewebdev.info/2021/06/03/how-to-pick-a-random-property-from-a-javascript-object/
        let enemyTypes = Object.keys(enemyTypesHealth);
        let randomIndex = Math.floor(Math.random() * enemyTypes.length);

        return enemyTypes[randomIndex];
    }
}

export let path = new Path([
    new Vector2d(50, 0),
    new Vector2d(50, 165),
    new Vector2d(215, 165),
    new Vector2d(215, 275),
    new Vector2d(50, 275),
    new Vector2d(50, 410),
    new Vector2d(325, 410),
    new Vector2d(325, 80),
    new Vector2d(575, 80),
    new Vector2d(575, 215),
    new Vector2d(455, 215),
    new Vector2d(455, 345),
    new Vector2d(570, 345),
    new Vector2d(570, 450),
], "#ff00ff91", 50);

export let waveSystem = new WaveSystem(path);
