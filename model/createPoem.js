const db = require('../data/database')


class poemClass{
    constructor(author, poem_Name, shape, text){
        this.author = author,
        this.poem_Name = poem_Name,
        this.shape = shape,
        this.text = text
    }

    async submit_Gen(){

        await db.getDB().collection('poem_Data').insertOne({
            author: this.author,
            poem_Name: this.poem_Name,
            shape: this.shape,
            text: this.text
        })
    }

}


module.exports = poemClass;