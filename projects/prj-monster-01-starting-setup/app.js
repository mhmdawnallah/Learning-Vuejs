function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%'}
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%'}
            }
            return { width: this.playerHealth + '%' };
        },
        couldUseSpecialAttack() {
            return (this.currentRound % 3 !== 0)
        }
    },
    watch: {
        playerHealth(playerHealthValue) {
            if (playerHealthValue <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = "draw";
            } else if (playerHealthValue <= 0) {
                // Player lost
                this.winner = "monster";
            }
        },
        monsterHealth(monsterHealthValue) {
            if (monsterHealthValue <= 0 && this.playerHealh <= 0) {
                // A draw
                this.winner = "draw";
            } else if (monsterHealthValue <= 0) {
                this.winner = "player";

            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const monsterDamage = getRandomValue(5,12);
            this.monsterHealth -= monsterDamage;
            this.attackPlayer();

        },
        attackPlayer() {
            const playerDamage = getRandomValue(8,15);
            this.playerHealth -= playerDamage;
        },
        specialAttackMonster() {
            this.currentRound++;
            const specialAttack = getRandomValue(10, 25);
            this.monsterHealth -= specialAttack;
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const playerHealValue = getRandomValue(8, 20);
            if (this.playerHealth + playerHealValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += playerHealValue;
            }
            this.attackMonster();
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null
        },
        surrender() {
            this.winner = "monster";
        }
    }
});

app.mount("#game");