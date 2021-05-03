// Написать функцию `isDeepEqual`

// сравниение объектов
let obj = {
    b: 55,
    a: 123,
};
let obj2 = {
    a: 123,
    b: 55,
};
function isDeepEqual(objA, objB) {
    let a = Object.entries(objA).sort();
    let b = Object.entries(objB).sort();
    let aStr = a.toString();
    let bStr = b.toString();

    if (a.length !== b.length) {
        return false;
    }
    if (aStr === bStr) {
        return true;
    } else {
        return false;
    }

};
console.log(isDeepEqual(obj, obj2));


// функция калькулятор
function calculate(oper) {
    return function (a) {
        return function (b) {
            if (oper == '+') {
                return b + a;
            } else if (oper == '-') {
                return b - a;
            } else if (oper == '*') {
                return b * a;
            } else if (oper == '/') {
                return b / a;
            } else {
                return console.log('error');
            }
        }
    }
}
console.log(calculate('*')(5)(5));


// Фукнция сумматор, число вызовов может быть неограниченым
function sum(n) {
    let rezult = n;

    function f(s) {
        rezult += s;
        console.log(rezult);
        return f;
    }
    console.log(rezult);
    return f;

};

console.log(sum(5)(10)(30));


// неограниченный вызов методов объекта
let obj = {
    num: 0,
    add: function (a) {
        console.log(this.num += a);
        return this;
    },
    min: function (m) {
        console.log(this.num -= m);
        return this;
    },
    reset: function () {
        console.log(this.num = 0);
        return this;
    },
    log: function () {
        console.log(this.num);
        return this.num;
    }
};
console.log(obj.add(5).min(2).add(100).reset().add(500).log());


// ____________________________ CAR
const car = {
    gears: 0,
    speed: 0,
    up: function () {
        console.log(this.gears += 1);
        return this;
    },
    down: function () {
        console.log(this.gears -= 1);
        return this;
    },
    log: function () {
        switch (this.gears) {
            case -1:
                console.log('back');
                break;
            case 0:
                console.log('neutral');
                break;
            case 1:
                console.log('slow');
                break;
            case 2:
                console.log('medium');
                break;
            case 3:
                console.log('fast');
                break;
            case 4:
                console.log('very fast');
                break;
        }
        if (this.gears >= 5) {
            console.log("Warning! Your speed is too high!");
        }
    }
}
car.valueOf = function () {
    return this.speed;
}
console.log(car + 3);
car.up().down().down().log();
console.log(car.speed);


// ____________________________ DATE
function sleep(num){
    setTimeout(() => {  console.log(new Date()); }, num * 1000);
}

console.log(new Date());
sleep(9);