$(function() {
  var body = $("body"),
      count = 1,
      newLine = function () {
        body.append("<hr />");
      }

  while (count < 101) {
    
    if (count % 5 == 0 && count % 3 == 0) {
      body.append("FizzBuzz");
      newLine();

    } else if (count % 5 == 0) {
      body.append("Buzz");
      newLine();
    }

    else if (count % 3 == 0) {
      body.append("Fizz");
      newLine();
    }

    else {
      body.append(count);
      newLine();
    }

    count++;

  }


})();