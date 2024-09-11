const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/social_media', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database');
  } catch (error) {
    console.log('Error connecting to Database:', error);
  }
};

module.exports = connectDB;
