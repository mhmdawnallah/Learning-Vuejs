function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' };
        },
        couldUseSpecialAttack() {
            return (this.currentRound % 3 !== 0)
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
            
        }
    }
});

app.mount("#game");