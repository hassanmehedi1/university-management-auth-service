"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterFilterableFields = exports.academicSemesterSearchableFields = exports.academicSemesterTitleCodeMapper = exports.academicSemesterMonths = exports.academicSemesterCodes = exports.academicSemesterTitles = void 0;
exports.academicSemesterTitles = [
    "Autumn",
    "Summer",
    "Fall",
];
exports.academicSemesterCodes = [
    "01",
    "02",
    "03",
];
exports.academicSemesterMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
// mapper for semester codes autumn -> 01, summer -> 02, fall -> 03
exports.academicSemesterTitleCodeMapper = {
    Autumn: "01",
    Summer: "02",
    Fall: "03",
};
exports.academicSemesterSearchableFields = ["title", "code", "year"];
exports.academicSemesterFilterableFields = [
    "searchTerm",
    "title",
    "code",
    "year",
];
