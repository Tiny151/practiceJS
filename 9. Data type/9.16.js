// 1. Primitive Types
export const isString = (val) => typeof val === "string";
export const isNumber = (val) => typeof val === "number" && !isNaN(val); // NaN is considered a number, so we check for it explicitly
export const isBigInt = (val) => typeof val === "bigint";
export const isBoolean = (val) => typeof val === "boolean";
export const isNull = (val) => val === null;
export const isUndefined = (val) => typeof val === "undefined";
export const isSymbol = (val) => typeof val === "symbol";

// 2. Reference Types
export const isObject = (val) =>!!val && typeof val === "object" && !Array.isArray(val);
export const isArray = (val) => Array.isArray(val);
export const isFunction = (val) => typeof val === "function";
