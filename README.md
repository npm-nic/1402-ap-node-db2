# Node DB 2 Module Challenge

In this challenge, you will write an API that can be used to manage _Cars_ stored in a Relational Database.

## Project Set Up

Follow these steps for starting your project.

- [ ] Fork this repository into your account and **clone your version**.
- [ ] Add your _Team Lead_ as collaborator on your repository.
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your _Team Lead_ as a reviewer on the pull-request
- [ ] Your _Team Lead_ will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- Using `knex migrations`, design and write a schema for the `cars` table using the specifications below.
- Configure `knex` to connect to a `/data/car-dealer.db3` database using the `sqlite3` npm module.
- Write endpoints to support `CREATE` and `READ` operations on the `cars` resource.
- Use a rest client like _Insomnia_ or _Postman_ to test your API.

## Specifications

The client for this API is a car dealer who has provided the following specs:

- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

## Stretch Problems

- Add seed data to the database using `knex seeds`
- Add `UPDATE` and `DELETE` operations to your API.
- Write a schema file for a `sales` table. This table should track information on the sale of each car. You may wish to research `foreign keys` in order to link each sale to the entry in `cars` which sold.

### Let's Do This

`npm i knex sqlite3`

#### Configure `knex` to connect to a `/data/car-dealer.db3` database using the `sqlite3` npm module

`knex init`

configure development in [knexfile.js](knexfile.js)

#### Using knex migrations, design and write a schema for the cars table using the specifications

`knex migrate:make create_cars_table`

write schema in migrations_folder >> [created_table](./migrations/20200812092802_create_cars_table.js)

create :open_file_folder: `data` for knexfile configuration (above)

`knex migrate:latest`

:eyes: Open car-dealer.db3 in SQLiteStudio :eyes:

#### Write endpoints to support `CREATE` and `READ` operations on the `cars` resource

`npm i helmet morgan express -D nodemon`

`npm touch index.js`

:open_file_folder: api

- [server.js](api/server.js)
- :open_file_folder: cars >> [cars-router.js](api/cars/cars-router.js)
