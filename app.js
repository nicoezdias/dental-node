const path = require('path');

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./db/database');
const User = require('./models/user');
const Patient = require('./models/patient');
const Address = require('./models/address');
const Dentist = require('./models/dentist');
const Appointment = require('./models/appointment');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.routes');
const consumerRoutes = require('./routes/consumer.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res, next) => {
	User.findByPk(1)
		.then((user) => {
			req.user = user;
			next();
		})
		.catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(consumerRoutes);

app.use(errorController.get404);

Patient.hasOne(Address);
Patient.hasMany(Appointment);
Dentist.hasMany(Appointment);

sequelize
	.sync()
	.then((result) => {
		return User.findByPk(1);
	})
	.then((user) => {
		if (!user) {
			return User.create({
				name: 'Nico',
				lastName: 'Dias',
				username: 'nicodias',
				email: 'test@test.com',
				password: 'test1234',
			});
		}
		return user;
	})
	.then((user) => {
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});
