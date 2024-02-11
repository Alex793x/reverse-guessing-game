const BinarySearch = <T>(guess: T, options: T[], start: number, end: number): number => {

    if (options.length === 0 || start > end) return -1;

    let middle = Math.floor(start + (end - start) / 2);

    if (options[middle] === guess) {
    
        return middle;
    } else if (guess > options[middle]) {
        return BinarySearch(guess, options, middle + 1, end);
    } else {
        return BinarySearch(guess, options, start, middle - 1);
    }
};

export default BinarySearch