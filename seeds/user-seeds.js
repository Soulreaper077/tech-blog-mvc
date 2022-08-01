const sequelize = require('../config/Connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'Soulreaper',
        email: 'jesseponce233@gmail.com',
        password: 'password123',
    },
    {
        username: 'Chadman12',
        email: 'chadman@yo.com',
        password: 'password123',
    },
    {
        username: 'Kittenpaw',
        email: 'sample@example.com',
        password: 'password123',
    },
    {
        username: 'PirateHunter1',
        email: 'pirate@sea.org',
        password: 'password123',
    },
    {
        username: 'yungKing',
        email: 'kings@royale.com',
        password: 'password123',
    },
    {
        username: 'WolfgangAma',
        email: 'wolfgang@pack.net',
        password: 'password123',
    },
    {
        username: 'StrawHat',
        email: 'strawhat@yo.com',
        password: 'password123',
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers; 