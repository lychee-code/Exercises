String.prototype.isUpperCase = function() {
    // if (this == this.toUpperCase()) return true;
    // else return false

    // breve; this == String.prototype
    return this.toString() == this.toUpperCase()
  }

console.log('ASTJ'.isUpperCase())