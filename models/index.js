const Users= require('./users');
const Messages= require('./message');

Users.hasMany(Messages);
Messages.belongsTo(Users);

module.exports= {
    Users,
    Messages
}