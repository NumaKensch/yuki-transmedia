/**
 * Created by flaviapittet on 11/03/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LevelSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    clues: [String],
    solution: {
        url_img: String,
        alt: String
    },


});

mongoose.model('Level', LevelSchema);
