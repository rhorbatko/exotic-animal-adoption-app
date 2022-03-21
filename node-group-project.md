# Adopt a Pet

We at Launch Academy are big fans of pets. There are many pets out there
looking for a home. Your challenge is to build an app that allows good pets
to find their ultimate destination!

**If you have not already, please work through node-group-project-overview with your team for the initial set up.**

## Your Tools

- Express
- React
- PostgreSQL
- Github

**HINT: You can feel free to find packages beyond those provided and integrate them into your project.**

### What will our app do

This week, you'll be focused on building a Full-Stack Application that includes:

- A database with tables to support your application
- A landing page for the site with links to the different types of Animals
- An Index page for each type of animal which lists available pets to adopt
- A show page for each animal
- A React form for requesting to adopt a pet
  - Express Endpoint which persists the data received from Fetch to PostgreSQL DB
- A React form for listing a pet available for adoption
  - Express Endpoint which persists the data received from `fetch` to a PostgreSQL Database
- A Nav Bar which appears on every page

## User Stories

We recommend that you work sequentially through these user stories.

### Hints

- You have been provided two commands to assist with your database management
  - `yarn run db:import` will import your schema.
  - **you will have to update the script in the `package.json` with your database name.**
    - Make sure to use `DROP TABLE IF EXISTS <tablename>` if you'd like your import to be re-runnable (if you have issues with the drop table command you may need to add `CASCADE` after `<tablename?` if your table is relied on by another table via foreign key)
  - `yarn run db:seed` will run your Seeder.js
  - **You will need to ensure you update the connection string in `server/db/Seeder.js` to reflect your database_name**
- Build reusable components where possible
- Ensure every table you create has an `id` column for its `PRIMARY KEY`
- If a field is not listed as (optional) then consider it required

### List of Pet Types

```no-highlight
As a potential pet adopter
I want to select from a list of animal types
So that I can decide what type of pet I want to adopt
```

Acceptance Criteria:

- Create a database table in your `schema.sql` for `pet_types` with the following fields
  - id (primary key)
  - name
  - img_url
  - description (optional string)
- From your command line run `yarn run db:import` to load your schema
- Add `insert` statements to your `Seeder.js` file to populate the `pet_types` table
  - From your command line run `yarn run db:seed` to run your Seeder
- Navigating to `/` should redirect to `/pet-types`
- When I visit `/pet-types`, I should see a listing of the different types of animals up for adoption and a description if available
- There should also be a picture for each type of animal displayed using the `img_url` from the database

### Pets of a Given Type

```no-highlight
As a potential pet adopter
I want to visit an index page which lists each adoptable pet of a particular type
So that I can see which pets are available
```

Acceptance Criteria

- Create a database table in your `schema.sql` for `pets` with the following fields
  - id (primary key)
  - name
  - img_url
  - age (optional integer)
  - vaccination_status (boolean, default value of `false`)
  - adoption_story
  - available_for_adoption (boolean, default value of `true`)
  - pet_type_id (foreign key for the `pet_types` table)
- Add `insert` statements to your `Seeder.js` file to populate the `pets` table
- Visiting `/pet-types/:id` should bring me to a listing of all available pets that belong to that type
- Each listing should have the following
  - A small picture of the animal
  - Name
  - Age
  - `Vaccination Status`
    - `Yes/no` reflected as a `boolean` in the database
- The name of each animal type on `/pet-types` should be a link to their respective `/pet-types/:id` index page.
  - Clicking the picture on `/pet-types` should also link to the show page for that animal type.

### Display Pet Detail

```no-highlight
As a potential pet adopter
I want to see a specific animal's information
So that I can decide whether I want to apply to adopt them
```

Acceptance Criteria

- Visiting `/pets/:id` should bring me to the show page of a specific animal
- I can also navigate to `/pets/:id` by clicking on a pet's name or image on the `/pet-types/:id` page.
- If the id is not found, or does not belong to the specified pet type, I should be see an error message on the page.
- The animal's picture should be centered on the top of the page
- Below the animal's picture should be an area listing the information about that animal
  - Name
  - Age
  - Vaccination status
  - A story about why the user should adopt them

### Apply to Adopt

```no-highlight
As a user
I want to fill out an adoption form
So that I can apply to adopt an adorable animal
```

Acceptance Criteria

- Create a database table in your `schema.sql` for `adoption_applications` with the following fields
  - id (primary key)
  - name
  - phone_number
  - email
  - home_status
  - application_status (default value of `"pending"`)
  - pet_id (FOREIGN KEY for the `pets` table)
- At the bottom of the `/pets/:id` page there should be a button that says `Adopt Me!` which will render a form to adopt the specific animal on the same page
- The form is only displayed on the `pet show page` after the `Adopt Me!` button has been clicked.
- The form requires the following information:
  - Name
  - Phone Number
  - Email
  - Home status (own or rent managed via a dropdown)
- Form fields have front end validation to ensure they are filled out
  - Optional: validate format for `Phone Number` and `Email`
- If the request is successful:
  - The adoption application should be persisted into the database table via a fetch POST request to `/api/v1/pets/:petId/adoption-applications`
  - The pet show page should re-render without the form displayed, and with a message stating `Your request is in process.`
- If the request is not successful:
  - The form should remain displayed on the page
  - Optional: retain the information the user entered in the form

### Add a Pet

```no-highlight
As a sad and reluctant pet owner
I want to have a form to put an animal up for adoption
So that no animal goes without a good home
```

Acceptance Criteria

- Navigating to `/pets/new` displays a form for listing a pet to surrender
- The form should contain the following fields for the pet:
  - Name
  - Age
  - Pet Type
    - This should be a drop down with options for each of the animal types your site supports
  - Image Url
  - Adoption Story
  - Vaccination Status (check box)
- The form cannot be submitted if the required fields are not filled out
  - Optional: validate format of `Age`
- If the request is successful:
  - A new record should be persisted in the `pets` table with the user's input, via a fetch POST request to `/api/v1/pets`.
  - The user should be redirected to the new added pet's show page.
- If invalid input is submitted, the user should remain on the page and be presented with error messages pertaining to the empty fields.
  - Optional: retain the information the user entered in the form

### Only View Pets that are Available for Adoption

```no-highlight
As a potential pet owner
I want to only see pets who are available for adoption
So that I don't fall in love with pets who are no longer available
```

Acceptance Criteria

- The `/pet-types/:id` page that shows all pets of a specific type should only show pets that are currently available for adoption
- To do so, add a method `getAvailablePets()` which queries for all `pets` of a certain type, with a filter based on their `available_for_adoption` status
- Update your API endpoint to only provide the data for those filtered pets

### NavBar

```no-highlight
As a user
I want to see a nav bar
So that I can easily navigate the site
```

Acceptance Criteria

- A `NavBar` using `React Router`
  - The `NavBar` contains links to:
    - The `All Pet Types` page
    - Each pet type's show page
      - Note that if you have links to various show pages, you often need to give React a hint to reload your show component in order to make it update properly. Check out the [React Router `useLocation` hook][uselocation-docs] to see how you might get that working!
    - `List a Pet for Adoption`
      - This should be a link to the `/pets/new` path.

### Non-Core User Stories

### Review an Adoption Request

```no-highlight
As an employee of the adoption agency
I want to have a form to review adoption requests
So that I can place a pet in the right home
```

Acceptance Criteria

- Create an index page of all adoption applications at `/adoption-applications`
  - This should display the information about the applicant, as well as the name of the pet
    - The name of the pet should be a link to the pet's show page
- Under each application should be an "Approve" and "Deny" button
  - Clicking the "Approve" button updates the pending request in the database to `approved`, and updates the `available_for_adoption` status on the `pets` table to `false`
  - Clicking the "Denied" button updates the pending request in the database to `denied`, and updates the `available_for_adoption` status on the `pets` table to `true`

### View All Adopted Pets

```no-highlight
As an admin
I want to be able to see all adopted pets
So I can see how my hard work has put wonderful animals into loving homes
```

- Create a new index page for animals which have been successfully adopted
  - This should display animals of all types which have an `available_for_adoption` status of `false`

### Edit Pets

```no-highlight
As an employee of the adoption agency
I want to be able to update a pet's information
To better reflect who they are as I get to know them
```

- On the pet's show page, there should be a button to "Edit This Pet"
- Clicking the button takes me to `/pets/:id/edit`
- This form has the same fields as my original "Surrender Pet" form
- If the form is submitted successfully:
  - The existing record should be updated in the `pets` table with the user's input.
  - The user should be redirected back to the pet's show page.
- If invalid input is submitted, the user should remain on the page and be presented with error messages pertaining to the empty fields.
  - Optional: retain the information the user entered in the form

### Add a 404 error page

```no-highlight
As a user visiting the site
I want to be presented with a 404 error page when navigating to an invalid path
So that I know I have entered the url
```

- If I navigate to a page like `"/petsLizards/5"` I should get a 404 page back.
- If I try to go to a pet type or pet that does not exist, I should also get a 404 page. E.g., if I navigate to `/pets/2200`, because there is no pet with an id of 2200. Same if I try to go to `/pet-types/55` when I don't have a pet type with the id of 55.

[uselocation-docs]: https://reactrouter.com/web/api/Hooks/uselocation
