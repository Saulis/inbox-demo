function Inbox(numberOfItems) {

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function randomElement(array) {
        return array[randomInt(0, array.length)];
    }

    function randomElements(array, count) {
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push(randomElement(array));
        }
        return result;
    }

    function randomArray(min, max, items) {
        var points = [];
        for (var i = 0; i < items; i++) {
            points.push(randomInt(min, max));
        }
        return points;
    }

    function randomSummary() {
        return randomElement([ 'Please ', 'Could you ', 'May I ', 'When do you ' ]) +
            randomElement([ 'help with the ', 'come up with a new ' ]) +
            randomElement([ 'proposal ', 'process ', 'idea ', 'server ' ]) +
            'for ' +
            randomElement([ 'UI components', 'making better coffee', 'visual design', 'fixing typos', 'managing projects', 'tracking time' ]) +
            '?';
    }

    /* Initialize the data. */
    var status = [ 'Active', 'Inactive', 'Delayed' ];
    var data = [];
    var date = new Date().getTime();
    for (var i = 0; i < numberOfItems; i++) {
        data.push({
            'status': randomElement(status),
            'summary': randomSummary(),
            'progress': randomInt(10, 95),
            'from': randomElement(Inbox.randomUsers),
            'unread': (Math.random() > 0.7),
            'starred': (Math.random() > 0.8),
            'sent': new Date(date)
        });
        date -= (1000 * 60 * 60 * 24) * randomInt(0, 2);
    }
    this.data = data;
}

Inbox.prototype.sort = function(sortProperty, sortDirection) {
    this.data.sort(function(a, b) {
        if (a[sortProperty] < b[sortProperty]) {
            return (sortDirection === 'asc' ? -1 : 1);
        } else if (a[sortProperty] > b[sortProperty]) {
            return (sortDirection === 'asc' ? 1 : -1);
        }
        return 0;
    });
};

Inbox.prototype.getData = function(index, count)  {
    return this.data.slice(index, index + count);
};

Inbox.prototype.size = function() {
    return this.data.length;
};

/*
 * Random user data fetched with https://randomuser.me/
 */
Inbox.randomUsers = [{
    "firstName": "Alexa",
    "lastName": "Ryan",
    "photo": "photos/women/13.jpg"
}, {
    "firstName": "Rhonda",
    "lastName": "Dixon",
    "photo": "photos/women/86.jpg"
}, {
    "firstName": "Elaine",
    "lastName": "Newman",
    "photo": "photos/women/68.jpg"
}, {
    "firstName": "Kelly",
    "lastName": "Fox",
    "photo": "photos/men/26.jpg"
}, {
    "firstName": "Natalie",
    "lastName": "Armstrong",
    "photo": "photos/women/25.jpg"
}, {
    "firstName": "Meghan",
    "lastName": "Nichols",
    "photo": "photos/women/23.jpg"
}, {
    "firstName": "Todd",
    "lastName": "Ray",
    "photo": "photos/men/81.jpg"
}, {
    "firstName": "Julia",
    "lastName": "Hawkins",
    "photo": "photos/women/93.jpg"
}, {
    "firstName": "Jack",
    "lastName": "Cunningham",
    "photo": "photos/men/12.jpg"
}, {
    "firstName": "Roger",
    "lastName": "Romero",
    "photo": "photos/men/37.jpg"
}, {
    "firstName": "Deanna",
    "lastName": "Hanson",
    "photo": "photos/women/17.jpg"
}, {
    "firstName": "Kevin",
    "lastName": "Hicks",
    "photo": "photos/men/71.jpg"
}, {
    "firstName": "Brad",
    "lastName": "Morrison",
    "photo": "photos/men/54.jpg"
}, {
    "firstName": "Edward",
    "lastName": "Lawson",
    "photo": "photos/men/29.jpg"
}, {
    "firstName": "Cory",
    "lastName": "Burke",
    "photo": "photos/men/15.jpg"
}, {
    "firstName": "Eli",
    "lastName": "Davidson",
    "photo": "photos/men/35.jpg"
}, {
    "firstName": "Hannah",
    "lastName": "Hunter",
    "photo": "photos/women/13.jpg"
}, {
    "firstName": "Owen",
    "lastName": "Ruiz",
    "photo": "photos/men/45.jpg"
}, {
    "firstName": "Brennan",
    "lastName": "Turner",
    "photo": "photos/men/53.jpg"
}, {
    "firstName": "Jean",
    "lastName": "Murphy",
    "photo": "photos/women/24.jpg"
}, {
    "firstName": "Linda",
    "lastName": "Ray",
    "photo": "photos/women/89.jpg"
}, {
    "firstName": "Grace",
    "lastName": "Kim",
    "photo": "photos/women/66.jpg"
}, {
    "firstName": "Tracy",
    "lastName": "Walters",
    "photo": "photos/men/34.jpg"
}, {
    "firstName": "Nicholas",
    "lastName": "Hernandez",
    "photo": "photos/men/21.jpg"
}, {
    "firstName": "Samantha",
    "lastName": "Brown",
    "photo": "photos/women/45.jpg"
}, {
    "firstName": "Eileen",
    "lastName": "Gordon",
    "photo": "photos/women/41.jpg"
}, {
    "firstName": "Erica",
    "lastName": "Watson",
    "photo": "photos/women/92.jpg"
}, {
    "firstName": "Rosemary",
    "lastName": "Morrison",
    "photo": "photos/women/3.jpg"
}, {
    "firstName": "Tim",
    "lastName": "Ford",
    "photo": "photos/men/60.jpg"
}, {
    "firstName": "Becky",
    "lastName": "Dean",
    "photo": "photos/women/0.jpg"
}, {
    "firstName": "Kurt",
    "lastName": "Martin",
    "photo": "photos/men/72.jpg"
}, {
    "firstName": "Peggy",
    "lastName": "Castro",
    "photo": "photos/women/86.jpg"
}, {
    "firstName": "Louise",
    "lastName": "Perry",
    "photo": "photos/women/96.jpg"
}, {
    "firstName": "Lynn",
    "lastName": "Rice",
    "photo": "photos/women/20.jpg"
}, {
    "firstName": "Courtney",
    "lastName": "Lambert",
    "photo": "photos/women/3.jpg"
}, {
    "firstName": "Joe",
    "lastName": "Rogers",
    "photo": "photos/men/77.jpg"
}, {
    "firstName": "Myrtle",
    "lastName": "Watkins",
    "photo": "photos/women/88.jpg"
}, {
    "firstName": "Freddie",
    "lastName": "Arnold",
    "photo": "photos/men/8.jpg"
}, {
    "firstName": "Jerome",
    "lastName": "Mccoy",
    "photo": "photos/men/39.jpg"
}, {
    "firstName": "Kitty",
    "lastName": "Perez",
    "photo": "photos/women/52.jpg"
}, {
    "firstName": "Alicia",
    "lastName": "Harris",
    "photo": "photos/women/82.jpg"
}, {
    "firstName": "Jane",
    "lastName": "Morgan",
    "photo": "photos/women/48.jpg"
}, {
    "firstName": "Rafael",
    "lastName": "Tucker",
    "photo": "photos/men/78.jpg"
}, {
    "firstName": "Edwin",
    "lastName": "George",
    "photo": "photos/men/6.jpg"
}, {
    "firstName": "Marshall",
    "lastName": "Bowman",
    "photo": "photos/men/11.jpg"
}, {
    "firstName": "Becky",
    "lastName": "Bryant",
    "photo": "photos/women/23.jpg"
}, {
    "firstName": "Louise",
    "lastName": "Brewer",
    "photo": "photos/women/1.jpg"
}, {
    "firstName": "Julio",
    "lastName": "Perkins",
    "photo": "photos/men/80.jpg"
}, {
    "firstName": "Terrence",
    "lastName": "Morgan",
    "photo": "photos/men/49.jpg"
}, {
    "firstName": "Kristina",
    "lastName": "Campbell",
    "photo": "photos/women/50.jpg"
}, {
    "firstName": "Joe",
    "lastName": "Ortiz",
    "photo": "photos/men/51.jpg"
}, {
    "firstName": "Pauline",
    "lastName": "Bell",
    "photo": "photos/women/25.jpg"
}, {
    "firstName": "Andre",
    "lastName": "Sims",
    "photo": "photos/men/40.jpg"
}, {
    "firstName": "Daryl",
    "lastName": "Schmidt",
    "photo": "photos/men/86.jpg"
}, {
    "firstName": "Darryl",
    "lastName": "Wells",
    "photo": "photos/men/44.jpg"
}, {
    "firstName": "Jeanne",
    "lastName": "Gibson",
    "photo": "photos/women/61.jpg"
}, {
    "firstName": "Leah",
    "lastName": "Burke",
    "photo": "photos/women/80.jpg"
}, {
    "firstName": "Isabella",
    "lastName": "Martin",
    "photo": "photos/women/55.jpg"
}, {
    "firstName": "Christian",
    "lastName": "Gonzales",
    "photo": "photos/men/64.jpg"
}, {
    "firstName": "Wayne",
    "lastName": "Black",
    "photo": "photos/men/12.jpg"
}, {
    "firstName": "Zoey",
    "lastName": "Little",
    "photo": "photos/women/51.jpg"
}, {
    "firstName": "Frances",
    "lastName": "Fletcher",
    "photo": "photos/women/78.jpg"
}, {
    "firstName": "Kristen",
    "lastName": "Ferguson",
    "photo": "photos/women/43.jpg"
}, {
    "firstName": "Leroy",
    "lastName": "West",
    "photo": "photos/men/23.jpg"
}, {
    "firstName": "Elizabeth",
    "lastName": "Wood",
    "photo": "photos/women/3.jpg"
}, {
    "firstName": "Owen",
    "lastName": "Peters",
    "photo": "photos/men/80.jpg"
}, {
    "firstName": "George",
    "lastName": "Wade",
    "photo": "photos/men/53.jpg"
}, {
    "firstName": "Jacqueline",
    "lastName": "Hale",
    "photo": "photos/women/80.jpg"
}, {
    "firstName": "Ethel",
    "lastName": "Howard",
    "photo": "photos/women/24.jpg"
}, {
    "firstName": "Dolores",
    "lastName": "Russell",
    "photo": "photos/women/59.jpg"
}, {
    "firstName": "Bernice",
    "lastName": "Black",
    "photo": "photos/women/84.jpg"
}, {
    "firstName": "Marcus",
    "lastName": "Henderson",
    "photo": "photos/men/57.jpg"
}, {
    "firstName": "Shannon",
    "lastName": "Pena",
    "photo": "photos/women/49.jpg"
}, {
    "firstName": "Leonard",
    "lastName": "Matthews",
    "photo": "photos/men/50.jpg"
}, {
    "firstName": "Randy",
    "lastName": "Anderson",
    "photo": "photos/men/99.jpg"
}, {
    "firstName": "Robert",
    "lastName": "Boyd",
    "photo": "photos/men/37.jpg"
}, {
    "firstName": "Sally",
    "lastName": "Ford",
    "photo": "photos/women/37.jpg"
}, {
    "firstName": "Isaac",
    "lastName": "Evans",
    "photo": "photos/men/63.jpg"
}, {
    "firstName": "Robin",
    "lastName": "Fields",
    "photo": "photos/women/13.jpg"
}, {
    "firstName": "Martha",
    "lastName": "Collins",
    "photo": "photos/women/55.jpg"
}, {
    "firstName": "Genesis",
    "lastName": "Alexander",
    "photo": "photos/women/59.jpg"
}, {
    "firstName": "Tomothy",
    "lastName": "Young",
    "photo": "photos/men/26.jpg"
}, {
    "firstName": "Evan",
    "lastName": "Wood",
    "photo": "photos/men/48.jpg"
}, {
    "firstName": "Randy",
    "lastName": "Kelly",
    "photo": "photos/men/40.jpg"
}, {
    "firstName": "Cassandra",
    "lastName": "Sanchez",
    "photo": "photos/women/38.jpg"
}, {
    "firstName": "Pedro",
    "lastName": "Crawford",
    "photo": "photos/men/46.jpg"
}, {
    "firstName": "Letitia",
    "lastName": "Byrd",
    "photo": "photos/women/4.jpg"
}, {
    "firstName": "Dylan",
    "lastName": "Russell",
    "photo": "photos/men/38.jpg"
}, {
    "firstName": "Isobel",
    "lastName": "Ramirez",
    "photo": "photos/women/33.jpg"
}, {
    "firstName": "Barry",
    "lastName": "May",
    "photo": "photos/men/87.jpg"
}, {
    "firstName": "Roger",
    "lastName": "Hunt",
    "photo": "photos/men/94.jpg"
}, {
    "firstName": "Claire",
    "lastName": "Barnett",
    "photo": "photos/women/24.jpg"
}, {
    "firstName": "Mary",
    "lastName": "Graves",
    "photo": "photos/women/31.jpg"
}, {
    "firstName": "Brian",
    "lastName": "Jensen",
    "photo": "photos/men/5.jpg"
}, {
    "firstName": "Tomothy",
    "lastName": "Harrison",
    "photo": "photos/men/48.jpg"
}, {
    "firstName": "Lena",
    "lastName": "Mills",
    "photo": "photos/women/70.jpg"
}, {
    "firstName": "Harry",
    "lastName": "Larson",
    "photo": "photos/men/57.jpg"
}, {
    "firstName": "Joyce",
    "lastName": "Andrews",
    "photo": "photos/women/48.jpg"
}, {
    "firstName": "Lauren",
    "lastName": "Rodriquez",
    "photo": "photos/women/12.jpg"
}, {
    "firstName": "Harold",
    "lastName": "Garza",
    "photo": "photos/men/30.jpg"
}];
