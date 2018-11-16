const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/hotseat', {logging: false});

const People = db.define('person', {
    name: Sequelize.STRING,
    hotseat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: null
    }
});

People.notYet = function() {
    return this.findAll({
        where: {
            hotseat: false
        }
    });
};

People.didHotSeat = function() {
    return this.findAll({
        where: {
            hotseat: true
        }
    });
};


module.exports = { db, People };
