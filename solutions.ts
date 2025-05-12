function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();;
    }
}

// const result1 = formatString("hello world", true); 
// console.log(result1);

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

// const result2 = filterByRating(books); 
// console.log(result2); 

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((x, y) => [...x, ...y], []);
}

// const result3 = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]  
// console.log(result3);

class Vehicle {
    private make: string;
    private year: number;

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

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel());  // Output: "Model: Corolla"

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length
    } else {
        return value * 2
    }
}

// console.log(processValue("hello")); // Output: 5
// console.log(processValue(10)); // Output: 20


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

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

// console.log(getMostExpensiveProduct(products)); // Output: { name: "Bag", price: 50 }


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

// console.log(getDayType(Day.Monday));   // Output: "Weekday"
// console.log(getDayType(Day.Sunday));   // Output: "Weekend"

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

// squareAsync(0).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed