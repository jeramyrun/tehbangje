const count = require('text-count');

function jerry() {
  const text = "J E R R Y"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Jerry
