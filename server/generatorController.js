const Place = require('./models/place')
const {validationResult} = require('express-validator')

class GeneratorController {
  async addPlace(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({message: "Game over"});
      }
      const {
        title,
        address,
        description,
        bus_station,
        rating,
        tags,
        photo
      } = req.body;
      const place = new Place({
        title,
        address,
        description,
        bus_station,
        rating,
        tags,
        photo
      });
      await place.save()
      return res.status(200).json({message: 'You are awesome!'})
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Fuck you c:'})
    }
  }

  async getPlace(req, res) {
    const category = req.query.category
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({message: "You are invalid!"});
    }
    const place = await Place.find({tags: category});
    if (!place) {
      res.status(400).json('Net mesta bro');
    }
    return res.status(200).send(place[0])
  }
}


module.exports = new GeneratorController()