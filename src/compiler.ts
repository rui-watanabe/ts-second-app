function echo(message: string): string | null{
  return message;
}

let implicitAny;
implicitAny = 'implicitAny';
implicitAny.toUpperCase();

// let nullableMessage: string = null;
// let undefinedMessage: string = undefined;
// let onlyNull: null = undefined;
// let onlyUndefined: undefined = null;
let nullableMessage = echo('hi');
let undefinedMessage: string | undefined = undefined;
let onlyNull: null = null;
let onlyUndefined: undefined = undefined;

// nullableMessage.toUpperCase
if(nullableMessage) {
  nullableMessage.toUpperCase();
}

const newFunction = echo.call(null, 'hi');