export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received status ${res.status}`);
        }

        const body = await res.json();

        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResource('/people/');
        // console.log(res.count)
        return res.results.map(person => this._transformPerson(person));
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    };

    getAllStarships = async () => {
        const res = await this.getResource('/starships/');
        return res.results.map(starship => this._transformStarship(starship));
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship)
    };

    getAllPlanets = async () => {
        const res = await this.getResource('/planets/');
        return res.results.map(planet => this._transformPlanet(planet));
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);

        return this._transformPlanet(planet);
    };

    getAllSpecies = async () => {
        const res = await this.getResource('/species/');
        return res.results.map(species => this._transformSpecies(species));
    };

    getSpecies = async (id) => {
        const species = await this.getResource(`/species/${id}`);
        return this._transformSpecies(species);
    };

    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    };

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    };

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    };

    getSpeciesImage = ({ id }) => {
        return `${this._imageBase}/species/${id}.jpg`;
    };

    _getId(item) {
        const RegExp = /\/([0-9]*)\/$/;
        return item.url.match(RegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._getId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            gravity: planet.gravity
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._getId(starship),
            name: starship.name,
            starshipClass: starship.starship_class,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._getId(person),
            name: person.name,
            birthYear: person.birth_year,
            gender: person.gender,
            height: person.height,
            mass: person.mass,
            eyeColor: person.eye_color
        }
    };

    _transformSpecies = (species) => {
        return {
            id: this._getId(species),
            name: species.name,
            language: species.language,
            classification: species.classification,
            designation: species.designation,
            eyeColors: species.eye_colors,
            hairColors: species.hair_colors,
            skinColors: species.skin_colors,
            averageLifespan: species.average_lifespan,
            averageHeight: species.average_height
        }
    };
}