module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a string with only the time
    ifEquals: (arg1, arg2, options) => {
      // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    }
  }