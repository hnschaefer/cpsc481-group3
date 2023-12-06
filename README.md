# cpsc481-group3

This project is hosted using Vercel at the address:
** https://cpsc481-group3.vercel.app/ **

Alternatively, you can run the program locally with React. 

Steps:

Install Node.js

Recommended version is 20.9.0

In your terminal, navigate to the project folder, "ordering-system", and run the command `npm install` to install all dependencies required 
Once that is done, run the command `npm start` to start up the application. It will start up in your browser locally, at http://localhost:3000

Hamza Lodhi - 30122098 - hamza.lodhi@ucalgary.ca
Heidi Schaefer - 30084340 - heidi.schaefer@ucalgary.ca
Aninda Shome  - 30093757 - aninda.shome1@ucalgary.ca
Amna Hassan -  30124748 - amna.hassan@ucalgary.ca
Kaia Ntwari -  30087765 - kaia.ntwari@ucalgary.ca

**General Walkthrough**
1. Main menu
2. Tap right arrow for categories to look through category options
3. Select any category (Features, Start + Share, Bowls, etc.)
4. Select and unselect filters as desired
    - Note: If a filter has no matching results in a category, an error message is shown
5. Select an item
    - Note: Sushi > Salmon Aburi Roll is hardcoded to be out of stock
6. Add customization notes as desired
7. Vary quantity as desired
    - Note: Quantity is limited from 1-9
8. Select “Add to Cart”
9. Repeat steps 2-7 as desired
    - Note: “Refresh Menu” will take you to the beginning of the menu
10. Select “Call For Server”
11. Select items as desired, press “Send”
    - Note: If no items are selected, an error message is shown
12. Select “Order Cart”
13. Vary quantities, make edits, or remove items as desired
14. Select “Place Order”
15. Repeat steps 2-14 as desired
16. Select “Pay For Order”
17. Rate items using stars
18. Select “Make Payment”

**Specific Walkthrough Example**
1. Main menu
2. Select “Order Cart”
    - Note: A message is shown indicating that the user must first add items to their cart, or visit the “Pay For Order” section to see previous orders.
3. Select “Return To Menu”
4. Tap right arrow for categories until you find “Mains”, select “Mains”
5. Select “Filter” > “Vegetarian”
    - Note: No vegetarian items are in “Mains”, a message indicating this is shown.
6. Select “Filter” > “Gluten-Free”
    - Note: Two gluten-free items are in “Mains”, they are displayed
7. Select “Truffle Parmesan Chicken”
8. Add notes to “Customization Notes” - for example: “extra mushrooms”
9. Change quantity to 2
    - Note: Quantity is limited from 1-9
10. Select “Add to Cart”
11. You will return to the Main Menu
12. Select “Pay For Order”
    - Note: Message saying “No orders have been placed yet” will be shown.
13. Select “Return To Menu”
14. Select “Sushi” category
15. Select “Salmon Aburi Roll”
    - Note: This item is hardcoded to be out of stock, an order alert will be shown.
16. Select “Zen Roll”
17. Select “Add to Cart”
18. Select “Call For Server”
19. Do not select any options (“Help”, “Napkins” or “Water”), and select “Send”
    - Note: A message saying “Please select one or more of the options” will be shown.
20. Select “Help”, select “Send”
    - Note: A message saying “The server is on their way!” will be shown.
21. Select “Order Cart”
22. Change quantity of “Zen Roll” to 2
23. Edit “Truffle Parmesan Chicken” to say “extra mushrooms on one order”
24. Select “Place Order”
    - Note: A message will be shown alerting the user that their order has been placed.
    - Note: The cart is now empty, as the items have moved to the "Pay For Order" page.
25. Select “Pay For Order”
26. Rate items using 5 star icons
27. Select “Make Payment”
    - Note: A message will be shown alerting the user that the server will come to take their payment.
    - Note: Items remain on screen to ensure correctness when making payment.

**Important Note:** Refreshing the browser window (not the “Refresh Menu” button), will remove all items from cart and previous orders, as there is not a real backend database. This limitation is intentional to focus the scope of the project on the UI.
