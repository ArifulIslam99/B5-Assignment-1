function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();;
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((completeArray, index) => [...completeArray, ...index], []);
}

class Vehicle {
    private make: string;
    year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length
    } else {
        return value * 2
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products) {
        return null
    } else {
        let product = products.reduce((mostExpensive, current) => current.price > mostExpensive.price ? current : mostExpensive)
        return product
    }
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    } else {
        return "Weekday"
    }
}

async function squareAsync(n: number): Promise<number> {
    let result: Promise<number> = new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
    return result
}