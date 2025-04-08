const garage = {
  location: "Downtown",
  showDetails: function (owner) {
    console.log(
      `${owner}'s ${this.type} (${this.brand}) is parked at ${this.location}`
    );
  },
};

const vehicles = [
  { type: "Car", brand: "Toyota", owner: "Alice" },
  { type: "Bike", brand: "Yamaha", owner: "Bob" },
  { type: "Truck", brand: "Ford", owner: "Charlie" },
];

vehicles.forEach(function (vehicle) {
  const { type, brand, owner } = vehicle;
  // vehicle.location = garage.location
  // We can use this approch also
  garage.showDetails.call(
    (vehicle = { ...vehicle, location: garage.location }),
    owner
  );
});
const bonus = function () {
  const { owner } = vehicles[0];
  console.log(
    `${owner}'s ${this.type} (${this.brand}) is parked at ${this.location}`
  );
};
setTimeout(bonus.bind({...vehicles[0], location: garage.location}), 2000);
