
/***********************************************************************

Let's create a constructor function to represent SMS text messages!

Define a constructor function named `SMS` that accepts three arguments that
initialize the following properties:

* recipient - the recipient of the text message
* sender - the sender of the text message
* text - the text for the text message

In addition to Mocha, we recommend that you test your code manually using
Node.js with the examples below. Use the command:

`node problems/01-constructor-function.js`

Examples:

const message1 = new SMS('555-111-1111', '555-222-2222', 'Test message one');
console.log(message1);

// Should print...

// SMS {
//   recipient: '555-111-1111',
//   sender: '555-222-2222',
//   text: 'Test message one'
// }

const message2 = new SMS('555-333-3333', '555-444-4444', 'Test message two');
console.log(message2);

// Should print...

// SMS {
//   recipient: '555-333-3333',
//   sender: '555-444-4444',
//   text: 'Test message two'
// }

***********************************************************************/
function SMS (recipient, sender, text) {
  this.recipient = recipient;
  this.sender = sender;
  this.text = text;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = SMS;
} catch {
  module.exports = null;
}
