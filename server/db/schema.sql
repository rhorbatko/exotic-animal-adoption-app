
DROP TABLE IF EXISTS pet_types CASCADE;
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
    vaccination_status BOOLEAN DEFAULT false,
    adoption_story TEXT NOT NULL,
    available_for_adoption BOOLEAN DEFAULT true,
    pet_type_id INTEGER REFERENCES pet_types(id)
);

