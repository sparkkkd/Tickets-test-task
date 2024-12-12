const declOfNum = (num, titles) => {
    // функция для склонения чисел
    const cases = [2, 0, 1, 1, 1, 2];
    return `${num} ${
        titles[
            num % 100 > 4 && num % 100 < 20 ? 2 : cases[Math.min(num % 10, 5)]
        ]
    }`;
};

export default declOfNum;
