# E-Commerce Cart App using Fake Store API [React + Vite]
This project is all about fetching products from the Fake Store API and displaying them in a user-friendly way. Users can browse products, add them to their cart, and manage their selections—all in a responsive layout.

# Tech Used
React – For building UI components
Tailwind CSS – For styling and responsiveness
Fake Store API – For fetching product data

# My Journey 
This was a special project! My first e-commerce project and my first time working with React! Even as a senior designer, I had never built an e-commerce platform before—most of my experience was in product design. So, with a mix of excitement and curiosity, I dove in.

The first challenge? Setting up API integration to fetch product details. I used useEffect() to trigger the API fetch before the page is rendered. Then, with map(), I dynamically generated the product listings. Using an onClick function, I passed the details of the clicked item (id, image, name, price) to setState(), storing the selected product in the cart.

Since the cart count needed to be displayed in the Navbar and updated in real-time, I lifted the state up to the parent component. From there, I passed the cart data down to the Navbar and product listing components using props, ensuring seamless updates.

The final step was handling duplicate items in the cart. I added an if statement to check whether a product was already in the cart—if it was, an alert popped up saying, "Item already added to the cart."

This project wasn’t just about building an e-commerce cart—it was about understanding state management, structuring reusable components, and ensuring a smooth user experience. A fun challenge, and definitely a rewarding experience!

# How It Works
Products Page – Fetches and displays items with an "Add to Cart" button. If a product is added to the cart, the button changes to "Remove from Cart."
Cart Page – Using the Router, the cart modal has been moved to a separate page. Users can increase or decrease the quantity of their preferred products.
Offer Pricing – Users receive a 10% discount on the total price.
