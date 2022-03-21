
DROP TABLE IF EXISTS pet_types;
CREATE TABLE pet_types (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
img_url VARCHAR(255) NOT NULL,
description TEXT
);

DROP TABLE IF EXISTS pets;
CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    age INTEGER,
    vaccination_status BOOLEAN,
    adoption_story TEXT NOT NULL,
    available _for_adoption BOOLEAN,
    pet_type_id INTEGER REFERENCES pet_types(id)
);

DROP TABLE IF EXISTS adoption_applications;
CREATE TABLE adoption_applications (
id SERIAL PRIMARY KEY,
pet_id INTEGER REFERENCES pets(id),
applicant_name VARCHAR(255) NOT NULL,
phone_number VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
home_status VARCHAR(255) NOT NULL,
application_status VARCHAR(255) NOT NULL
);


