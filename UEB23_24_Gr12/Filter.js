class Property {
    constructor(location, price) {
        this.location = location;
        this.price = price;
    }
}

class Rental {
    constructor() {
        this.properties = [];
    }

    addProperty(property) {
        this.properties.push(property);
    }

    findProperties(filters) {
        return this.properties.filter(property => {
            for (let filter in filters) {
                if (property[filter] !== filters[filter]) {
                    return false;
                }
            }
            return true;
        });
    }
}

let rental = new Rental();
rental.addProperty(new Property('Graz, Austria', 124));
rental.addProperty(new Property('Toronto Canada', 78));
rental.addProperty(new Property('Split, Croatia', 76));
rental.addProperty(new Property('Graz, Austria', 250));
rental.addProperty(new Property('Berlin, Germany', 241));

let properties = rental.findProperties({ location: 'Graz, Austria'});
console.log(properties);