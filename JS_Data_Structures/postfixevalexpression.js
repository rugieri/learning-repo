class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.lenght == 0) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

//Performs Postfix Evaluation on given expression
function postFixEvaluation(exp) {
  var stack = new Stack();
  for (var i = 0; i < exp.length; i++) {
    var c = exp[i];
    if (!isNaN(c)) stack.push(c - "0");
    else {
      var val1 = stack.pop();
      var val2 = stack.pop();
      if (val1 == "Underflow" || val2 == "Underflow")
        return "Can't Perform postfix evaluation";
      switch (c) {
        case "+":
          stack.push(val2 + val1);
          break;

        case "-":
          stack.push(val2 - val1);
          break;

        case "/":
          stack.push(val2 / val1);
          break;

        case "*":
          stack.push(val2 * val1);
          break;
      }
    }
  }

  return stack.pop();
}

//calling the method above
//returns 9
console.log(postFixEvaluation("235*+8-"));

//returns postfix evaluation can't be performed
console.log(postFixEvaluation("23*+"));
