# TypeScript Basics – Interfaces vs Types & keyof Keyword

This blog explains two important concepts in TypeScript:

---

## What are some differences between interfaces and types in TypeScript?

In TypeScript, both `interface` and `type` help us define the shape of data, like what properties an object should have. But they are little difference between them.
- **`interface`** is mainly used to describe the structure of **objects** and **classes**.
- **`type`** can do more things, like defining unions, intersections, and even primitive types like `string`, `number`, etc.

They look almost the same when defining object shapes. But `type` is more flexible, and `interface` is more focused on object structures.
- `interface` supports extension in a clean way. You can extend many interfaces at once. This is good when working with classes or large objects.
- `type` can also extend, but it uses the `&` symbol for combining types.

A special feature of `interface` is **declaration merging**. This means you can write the same interface again, and TypeScript will combine them. This does **not** work with `type`.

This is helpful when writing code in large projects or with third-party libraries.

### When to use what?
- Use `interface` when working with object-oriented code or class-like structures.
- Use `type` when you need more flexible features, like combining multiple types, creating union types, etc.

#### ✏️ Simple Example:
```ts
interface Person {
  name: string;
  age: number;
}

type Status = "success" | "error"; // Only possible with type

```

---

## What is the use of the keyof keyword in TypeScript? Provide an example.

In TypeScript, `keyof` is a special keyword that returns all the keys (property names) of a given object type as a union of string literals.
- This is very helpful when you want to work with object properties dynamically but still keep type safety.
- `keyof` takes an object type and gives back all the keys as a type.
- This returned type is a **union** of the object’s keys.

```ts
type User = {
  name: string;
  email: string;
  age: number;
};

type Keys = keyof User; // "name" | "email" | "age"

```

### Why is it useful?

- It helps create generic and flexible functions.
- It makes sure we only use existing keys from an object.
- If someone uses a wrong key, TypeScript will show an error.
- It improves code safety and autocomplete in editors like VS Code.


#### ✏️ Simple Example:

We can combine `keyof` with generics to create safe functions:

```ts

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

```

Then call it like this:

```ts

const user = {
  name: "Amit",
  email: "amit@example.com",
  age: 30,
};

const name = getValue(user, "name");   // ✅ Valid
const age = getValue(user, "age");     // ✅ Valid
// const error = getValue(user, "gender"); ❌ Error: "gender" is not a key of user

```