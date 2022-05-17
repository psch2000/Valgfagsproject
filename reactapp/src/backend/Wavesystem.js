import { Composit } from "../base/baseStructor/Composit";
import { DrawIcon } from "../base/baseStructor/DrawIcon";
import { CircleCollider } from "../base/baseStructor/collider/CircleCollider";
import { FollowPath } from "../assets/components/enemy/FollowPath";
import { Enemy } from "../assets/components/enemy/Enemy";
import { instantiate } from "../assets/app/functions/instantiate";
import { Path } from "../assets/components/Path";
import { Vector2d } from "../base/baseStructor/Vector2d";
import { sleep } from "../base/Sleep";
import { EventHandler } from "../base/baseBehaviour/EventHandler";

class WaveSystem {
    constructor(path) {
        this.path = path;
        this.round = 0;
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
        this.enemiesRemainingThisRound = 0;

        this.onWaveChange.invoke();

        for (let index = 0; index < this.round; index++) {
            this.spawnEnemy(8);
            await sleep(1000);
        }
    }

    enemyDead = () => {
        this.enemiesRemainingThisRound -= 1;
        if (this.enemiesRemainingThisRound < 1) this.endRound();
    }

    endRound() {
        console.log("end round (WaveSystem)");
        this.isWaveActive = false;
        this.onWaveChange.invoke();
    }

    spawnEnemy(enemyHealth) {
        let enemyComposit = new Composit("enemy" + this.enemiesSpawnedTotal);
        enemyComposit.addComponent(new DrawIcon("", true))
        enemyComposit.addComponent(new CircleCollider(this.path.pathWidth / 2, true));
        enemyComposit.addComponent(new FollowPath(this.path, 1, true));
        enemyComposit.addComponent(new Enemy(enemyHealth, this.enemyDead));
        enemyComposit.transform.position = this.path.waypoints[0].copy()
        instantiate(enemyComposit);

        this.enemiesSpawnedTotal += 1;
        this.enemiesRemainingThisRound += 1;
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
    new Vector2d(570, 435),
], "#ff00ff91", 50);

export let waveSystem = new WaveSystem(path);
