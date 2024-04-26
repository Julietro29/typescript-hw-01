function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}
const merged = merge({ name: 'Alex' }, { age: 29 });