class GuessingGame {
    constructor() {
      this._arr = [];
      this._min = null;
      this._max = null;
      this._guess = null;
    }

    setRange(min, max) {
      if (min < max ) {

        while (min <= max) {
          this._arr.push(min);
          min++
        }

        this._min = 0;
        this._max = this._arr.indexOf(max);
      }
    }

    guess() {
      this._guess = Math.round((this._min + this._max) / 2);
      return this._guess;
    }

    lower() {
      this._max = this._guess;
    }

    greater() {
      this._min = this._guess;
    }
}

module.exports = GuessingGame;
