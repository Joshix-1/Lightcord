// bait typescript into thinking this is not reactDOM so no circular dependency.
export = window["Reac"+"tDOM"] as typeof import("react-dom")