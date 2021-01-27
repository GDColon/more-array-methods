module.exports = function() {

    Array.prototype.pick = function() {
        return this[Math.floor(Math.random() * this.length)];
    };

    Array.prototype.certainPick = function (num1, num2) {
        return this[Math.floor(Math.random() * num2) + num1]
    }

    Array.prototype.delete = function(i) {
        return this.filter((x, y) => y !== (+i));
    };

    Array.prototype.remove = function(i, strict) {
        let index = strict ? this.findIndex(x => x === i) : this.findIndex(x => x == i);
        return this.delete(index);
    };

    Array.prototype.purge = function(i, strict) {
        if (strict) return this.filter(x => x !== i);
        else return this.filter(x => x != i);
    };

    Array.prototype.ascend = function() {
        let trash = this.filter(x => isNaN(x));
        let numbers = this.filter(x => !isNaN(x));
        return numbers.sort((a, b) => a - b).concat(trash);
    };

    Array.prototype.descend = function() {
        let trash = this.filter(x => isNaN(x));
        let numbers = this.filter(x => !isNaN(x));
        return numbers.sort((a, b) => b - a).concat(trash);
    };

    Array.prototype.unique = function() {
        let unique = [];
        this.forEach(x => {if (!unique.includes(x)) unique.push(x)});
        return unique;
    };

    Array.prototype.toLowerCase = function() {
        return this.map(x => typeof x === "string" ? x.toLowerCase() : x);
    };

    Array.prototype.toUpperCase = function() {
        return this.map(x => typeof x === "string" ? x.toUpperCase() : x);
    };

    Array.prototype.sum = function() {
        return this.filter(x => typeof x === "number").reduce((a, b) => a + b, 0);
    };

    Array.prototype.average = function() {
        return this.sum() / this.length;
    };

    Array.prototype.stringify = function() {
        return this.map(x => typeof x === "number" ? String(x) : x);
    };

    Array.prototype.numerify = function() {
        return this.map(x => isNaN(x) ? x : Number(x));
    };

    Array.prototype.clean = function() {
        return this.filter(x => x || x === 0 || x === false);
    };

    Array.prototype.group = function() {
        let group = {};
        this.forEach(x => group[x] ? group[x] += 1 : group[x] = 1);
        return group;
    };

    Array.prototype.most = function() {
        let group = this.group();
        let keys = Object.keys(group);
        return keys.sort((a, b) => group[b] - group[a])[0];
    };

    Array.prototype.middle = function(ceil) {
        let len = (this.length / 2) - 0.5;
        if (ceil) return this[Math.ceil(len)];
        else return this[Math.floor(len)];
    };

    Array.prototype.insert = function (item, index) {
        this.splice(isNaN(index) ? this.length : +index, 0, item);
        return this;
    };

    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.first = function () {
        return this[this.length - this.length]
    }

    Array.prototype.h = function () {
        return this.map(() => "h");
    };

    Array.prototype.shuffle = function(){
        let length = this.length;
        let unshuffled = this;
        let shuffled = [];

        while (shuffled.length !== length) {
            let index = Math.floor(Math.random() * unshuffled.length);
            shuffled.push(unshuffled[index]);
            unshuffled = unshuffled.delete(index);
        }

        return shuffled;
    };

    Array.prototype.locate = function(func) {
        if (!func || typeof func === "object") func = "";
        if (typeof func === "string" || typeof func === "number") return {
            value: this.find(x => x === func),
            index: this.findIndex(x => x === func)
        };
        else return {
            value: this.find(func),
            index: this.findIndex(func)
        };
    };

};
