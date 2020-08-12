exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "59as87g5asgas5a",
          make: "BMW",
          model: "330i",
          mileage: 1000,
          transmission: null,
          title: null,
        },
        {
          id: 2,
          vin: "5as95df8as5g",
          make: "Honda",
          model: "Accord",
          mileage: 2000,
          transmission: null,
          title: null,
        },
        {
          id: 3,
          vin: "asas5df67g7a0s6g",
          make: "Toyota",
          model: "Camrey-3",
          mileage: 3000,
          transmission: null,
          title: null,
        },
        {
          id: 4,
          vin: "asd596fa8sf5d87",
          make: "Ford",
          model: "Bronco",
          mileage: 4000,
          transmission: null,
          title: null,
        },
      ]);
    });
};
