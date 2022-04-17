import mongoose from 'mongoose'

/* PaqueSchema will correspond to a collection in your MongoDB database. */
const PaqueSchema = new mongoose.Schema({
  name: {

    type: String,
  },
  city: {

    type: String,
  },
  created: {
    type: String,
  },
  
})

export default mongoose.models.Paque || mongoose.model('Paque', PaqueSchema)
