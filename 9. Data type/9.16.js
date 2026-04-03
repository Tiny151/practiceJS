// 1. Primitive Types
const isString = (val) => typeof val === "string";
const isNumber = (val) => typeof val === "number" && !isNaN(val); // NaN is considered a number, so we check for it explicitly
const isBigInt = (val) => typeof val === "bigint";
const isBoolean = (val) => typeof val === "boolean";
const isNull = (val) => val === null;
const isUndefined = (val) => typeof val === "undefined";
const isSymbol = (val) => typeof val === "symbol";

// 2. Reference Types
const isObject = (val) =>!!val && typeof val === "object" && !Array.isArray(val);
const isArray = (val) => Array.isArray(val);
const isFunction = (val) => typeof val === "function";
