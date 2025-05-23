/* 
  PRODUCT DATA STRUCTURE
  ----------------------
  - The "Products" object contains categories of outdoor gear.
  - Two main categories: "campingTents" and "sleepingBags".
  - Each category includes various brands (e.g., North Face, Coleman, REI).
  - Each brand item includes an image URL, description, price, and stock status.
  Products = {
  campingTents: {
    northFace: {
      image:
        "https://images.unsplash.com/photo-1496545672447-f699b503d270?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "All-weather tent for a comfortable and dry adventure.",
      price: "$120",
      inStock: "Yes",
    },

  FUNCTION: updateTentDisplay(tentData)
  -------------------------------------
  - Updates the UI with data from the tent products.
  - Selects three image and caption elements from the carousel.
  - Loops through each tent and:
    - Sets the image source and caption.
  - Selects the product details table and clears any existing content.
  - For each tent:
    - Creates a new row with the brand name, description, price, and stock.
    - Appends it to the table body.
  - Calls a function to highlight the matching table row based on carousel slide.
  function updateTentDisplay(tentData) {
  //first select the images and captions
  const carouselImages = [
    document.querySelector("#tentCarousel .carousel-item:nth-child(1) img"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(2) img"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(3) img"),
  ];...

  FUNCTION: updateSleepingBagDisplay(bagData)
  -------------------------------------------
  - Updates the UI with data from sleeping bag products.
  - Selects carousel image and caption elements.
  - For each sleeping bag:
    - Sets image source, alt text, and caption.
  - Clears the product table and fills in new rows with product details.
  - Calls function to highlight corresponding table row.

  FUNCTION: highlightTableRowByCarousel()
  ---------------------------------------
  - Identifies the currently active carousel item.
  - Highlights the matching row in the product details table.
  - Removes highlighting from all other rows.

  CAROUSEL EVENT LISTENER
  -----------------------
  - Listens for the carousel’s "slide completed" event.
  - Triggers row highlighting to match the current image slide.

  PRODUCT CARD CLICK LISTENERS
  ----------------------------
  - Two product cards are clickable:
    - One for tents
    - One for sleeping bags
  - Clicking a card updates the display to show that category’s products.

  FORM SUBMISSION & MODAL CONTROL
  -------------------------------
  - The subscription form prevents default submit behavior.
  - If the form is valid:
    - A modal is shown confirming subscription.
    - The form is reset.
  - If not valid:
    - Validation styling is applied to help user correct errors.
*/
