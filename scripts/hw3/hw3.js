// import RefillableMarker from "./RefillableMarker.js";

// const marker = new RefillableMarker("blue", 10);

// marker.print("Hello world, this is a test of the marker.");
// console.log("Ink left:", marker.ink);

// marker.refill(50);
// console.log("After refill:", marker.ink);

// marker.print("Printing again after refill.");

import Employer from "./Employer.js";
import EmpTable from "./EmpTable.js";

const employees = [
    new Employer("John Smith", 32, "Manager"),
    new Employer("Emily Clark", 28, "Cashier"),
    new Employer("Michael Brown", 41, "Security"),
    new Employer("Sarah Johnson", 35, "Accountant")
];

const table = new EmpTable(employees);

document.body.innerHTML = table.getHtml();