const poemClass = require('../model/createPoem.js')



async function post_Content(req, res){
    const user = new poemClass(req.body.author, req.body.poem_name, req.body.shape, req.body.text_content)

    await user.submit_Gen();
    res.redirect('/')
}

function generateSquareOutline(size) {
    let outline = '';
  
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
          outline += '*';
        } else {
          outline += ' ';
        }
      }
      outline += '\n';
    }
  
    return outline;
}

function generateTriangleOutline(height) {
    let outline = '';
  
    for (let i = 0; i < height; i++) {
      // Add spaces for the left padding
      for (let j = 0; j < height - i - 1; j++) {
        outline += ' ';
      }
  
      // Add '*' for the current row
      for (let k = 0; k < 2 * i + 1; k++) {
        outline += '*';
      }
  
      outline += '\n';
    }
  
    return outline;
}

function countWords(text) {
    const wordCounts = {};
  
    // Split the text into words using a regular expression
    const words = text.split(/\s+/);
  
    // Iterate through each word and count occurrences
    for (const word of words) {
      const cleanedWord = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      
      if (cleanedWord !== "") {
        if (wordCounts[cleanedWord]) {
          wordCounts[cleanedWord]++;
        } else {
          wordCounts[cleanedWord] = 1;
        }
      }
    }
  
    return wordCounts;
}




module.exports = {
    post_Content: post_Content,
    generateSquareOutline: generateSquareOutline,
    generateTriangleOutline, generateTriangleOutline,
    countWords: countWords
}