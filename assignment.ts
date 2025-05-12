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