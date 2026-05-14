// const car = {
//     manufacturer: "Toyota",
//     model: "Camry",
//     year: 2018,
//     averageSpeed: 80
// };

// function showCarInfo(car) {
//     alert(
//         "Manufacturer: " + car.manufacturer +
//         "\nModel: " + car.model +
//         "\nYear: " + car.year +
//         "\nAverage speed: " + car.averageSpeed + " km/h"
//     );
// }

// function calculateTime(distance, car) {
//     const pureTime = distance / car.averageSpeed;
//     const breaks = Math.floor(pureTime / 4);
//     const totalTime = pureTime + breaks;
//     alert("Total time: " + totalTime + " hours");
// }

// showCarInfo(car);

// const dist = Number(prompt("Enter distance in km"));
// calculateTime(dist, car);

//Task 2
const printMachine = {
    fontSize: "20px",
    fontColor: "blue",
    fontFamily: "Arial",
    print(text) {
        alert(
            "Font size: " + this.fontSize +
            "\nFont color: " + this.fontColor +
            "\nFont family: " + this.fontFamily +
            "\nText: " + text
        );
    }
};

setTimeout(function() {
    printMachine.print("Hello from printMachine");
}, 5000);
