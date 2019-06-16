// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {

        this.vikingArmy.push(Viking);
        console.log(`vikingo añadido, ahora hay ${this.vikingArmy.length}`);
    }

    addSaxon(Saxon) {

        this.saxonArmy.push(Saxon);
        console.log(`sajón añadido, ahora hay ${this.saxonArmy.length}`);
    }

    vikingAttack() {
        let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
        let randomViking = Math.floor(Math.random() * (this.vikingArmy.length));

        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        this.saxonArmy.splice(randomSaxon, 1);

        return `A Saxon has died in combat`;
    }

    saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
        let randomViking = Math.floor(Math.random() * (this.vikingArmy.length));

        let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (this.vikingArmy[i].health <= 0) {
                this.vikingArmy.splice(i, 1);
            }
        }

        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        }
        else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survive another day...`;
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
