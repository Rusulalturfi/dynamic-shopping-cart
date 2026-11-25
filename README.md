
Reflection Questions

1. How did you dynamically create and append new elements to the DOM?
   I used document.createElement() to create the product item, its text, and the Remove button. Then I used appendChild() to add them to the cart.
2. What steps did you take to ensure accurate updates to the total price?
   I updated the total when I added or removed a product. I saved each product’s price in the dataset. So I could subtract the right amount when removing it.
3. How did you handle invalid input for product name or price?
   I checked that the product name wasn’t empty and that the price was a valid number greater than zero. If the information wasn’t valid, the app showed an alert.
4. What challenges did you face when implementing the remove functionality?
   I had to make sure the app removed the right product and subtracted its price from the total first. I used closest('li') to find the product and remove() to delete it.
