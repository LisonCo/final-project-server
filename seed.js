const mongoose = require('mongoose');
const Product = require('./models/Products')
// require('dotenv').config();

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongodb.");
    return mongoose.connection.db.dropCollection('products');
  })
  .then(() => {
    console.log("Dropped produdcts collection.");
    return Product.insertMany(seedProducts);
  })
  .then(() => {
    console.log(`We have seeded our database successfully with products.`);
  })
  .catch(err => {
    console.error('Mongodb error', err);
  })

const seedProducts = [
  {
    name: "Baking soda", 
    price: 2,
    color: "#d2c8c8",
    image1: "./images/pot.png",
    image2: "",
    quantity: "500g",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  },
  {
    name: "White vinegar", 
    price: 2,
    color: "",
    image1: "./images/bottle1.png",
    image2: "",
    quantity: "1 liter",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  },
  {
    name: "Marseille soap", 
    price: 2,
    color: "#d2c8c8",
    image1: "./images/pot.png",
    image2: "",
    quantity: "1 piece",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  },
  {
    name: "Detergent", 
    price: 2,
    color: "",
    image1: "./images/big-bottle.png",
    image2: "",
    quantity: "2 liters",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  },
  {
    name: "Dish soap", 
    price: 2,
    color: "#E8EDE6",
    image1: "./images/big-bottle.png",
    image2: "",
    quantity: "1 liter",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  },
  {
    name: "Shampoo", 
    price: 2,
    color: "",
    image1: "./images/big-bottle.png",
    image2: "",
    quantity: "500 mL",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  },
  {
    name: "Lemon White Vinegar", 
    price: 2,
    color: "#d2c8c8",
    image1: "./images/bottle1.png",
    image2: "",
    quantity: "1 liter",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  },
  {
    name: "Shower gel", 
    price: 2,
    color: "",
    image1: "./images/big-bottle.png",
    image2: "",
    quantity: "200 mL",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  },
  {
    name: "Liquid black soap", 
    price: 2,
    color: "#d2c8c8",
    image1: "./images/bottle1.png",
    image2: "",
    quantity: "1 liter",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget leo congue, venenatis erat id, consectetur ipsum. In nec imperdiet massa, eu scelerisque risus. Cras ac tortor quis augue condimentum tristique varius sed nibh. Morbi sed aliquet nisi. Proin venenatis tempor lorem vestibulum rhoncus. Aliquam pharetra at tellus eu dapibus. Ut ac imperdiet ipsum, vitae ultricies est. Morbi in libero dignissim enim viverra faucibus in vitae eros. Phasellus ac nunc lacus. Nunc dictum libero in vulputate auctor. Phasellus tincidunt, leo sit amet sodales volutpat, lacus lectus semper turpis, a lobortis massa libero vel risus. Cras tincidunt eros eget fermentum lobortis."
  }
]

