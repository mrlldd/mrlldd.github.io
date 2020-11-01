export default function createPseudoRandomPicker(min: number, max: number, initialArray: ReadonlyArray<number> = []) {
    const numbers: number[] = [];
    for (let i = min + initialArray.length; i <= max; i++) {
        numbers.push(i);
    }

    function shuffle() {
        numbers.sort(() => Math.random() - 0.5);
    }

    shuffle();

    let currentIndex = 0;

    return function () {
        if (initialArray.length) {
        }
        if (currentIndex < initialArray.length) {
            return initialArray[currentIndex++];
        }

        if (currentIndex < numbers.length) {
            const result = numbers[currentIndex - initialArray.length];
            currentIndex++;
            return result;
        } else {
            shuffle();
            currentIndex = 0;
            return numbers[currentIndex++];
        }
    };
}