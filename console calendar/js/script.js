function calendar(year, month) {
    month--;
    var arr = [];
    let firstDateOfMotnh = 1;

    let lastDayOfMonth = getLastDayOfMonth(year, month);
    let unshiftElemNum = getUnShiftElemNum(year, month);
    let pushElemNum = getPushElemNum(year, month);

    arr = createArr(firstDateOfMotnh, lastDayOfMonth);
    arr = unshiftElem(unshiftElemNum, arr);
    arr = pushElem(pushElemNum, arr);
    arr = chunkArr(7, arr);
    console.log(arr);
};

calendar(2021, 12);

function getLastDayOfMonth(year, month) {
    let day = new Date(year, month + 1, 0);
    return day.getDate();
};

function getRealDayOfWeekNum(jsDayNum) {
    if (jsDayNum == 0) {
        return 7;
    } else {
        return jsDayNum;
    }
};

function getFirstDayWeekOfMonthNum(year, month) {
    let day = new Date(year, month, 1);
    return day.getDay();
};

function getLastDayWeekOfMonthNum(year, month) {
    let day = new Date(year, month + 1, 0);
    return day.getDay();
};

function getUnShiftElemNum(year, month) {
    let jsDayNum = getFirstDayWeekOfMonthNum(year, month);
    let realDayNum = getRealDayOfWeekNum(jsDayNum);
    return realDayNum - 1;
};

function getPushElemNum(year, month) {
    let jsDayNum = getLastDayWeekOfMonthNum(year, month);
    let realDayNum = getRealDayOfWeekNum(jsDayNum);
    return 7 - realDayNum;
};


// ____________________________ РАБОТА С МАССИВОМ
function createArr(from, to) {
    let arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }
    return arr;
};

function unshiftElem(num, arr) {
    for (let i = 0; i < num; i++) {
        arr.unshift(" ")
    }
    return arr;
};

function pushElem(num, arr) {
    for (let i = 0; i < num; i++) {
        arr.push(" ")
    }
    return arr;
}


function chunkArr(num, arr) {
    let rez = [];
    let ch = [];
    let day = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
    let iteration = arr.length / num;
    rez.push(day);
    for (let i = 0; i < iteration; i++) {
        ch = arr.splice(0, num)
        rez.push(ch)
    }
    return rez;
}