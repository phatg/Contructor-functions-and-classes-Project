
/***********************************************************************

Let's create instances of an ES2015 class!

Using the `new` keyword, create two instances of the provided
`ServiceProvider` class:

* For the first instance, pass into the constructor method the string "Verizon"
  for the company name
* For the second instance, pass into the constructor method the string
  "T-Mobile" for the company name

Use the provided `verizon` and `tmobile` variables to capture references to the
new instances.

***********************************************************************/

class ServiceProvider {
  constructor(companyName) {
    this.companyName = companyName;
  }
}

const verizon = null;
const tmobile = null;

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = {
    ServiceProvider,
    verizon,
    tmobile
  };
} catch {
  module.exports = null;
}
