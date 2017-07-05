* As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent.
  * { name: ..., price: ..., brand: ..., alcoholContent: ..., type: ..., pintsLeft: ... }

* As an employee, I want to fill out a form when I tap a new keg to add it to the list.
  * Button to click to render form, then submit event to add to list.

* As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
  * Clicking edit renders form pre-populated with beers info to be updated.
  * clicking submit, updates info in the model.

* As a patron and/or employee, I want to see how many pints are left in a keg.
  * Data bind to the amount of beer left in the keg.

* As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.

* As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
  * switch to empty-keg icon when <= 10 pintsLeft

* As a patron, I would like to be able to see each beers alcoholContent.

* As a patron, I want to be able to see what type of beer a particular keg contains by color coding.
