Products = {
  campingTents: {
    northFace: {
      image:
        "https://images.unsplash.com/photo-1496545672447-f699b503d270?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "All-weather tent for a comfortable and dry adventure.",
      price: "$120",
      inStock: "Yes",
    },
    coleman: {
      image:
        "https://images.unsplash.com/photo-1565588496723-63494874b143?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Spacious, easy-to-set-up tent for families and groups.",
      price: "$110",
      inStock: "Yes",
    },
    rei: {
      image:
        "https://images.unsplash.com/photo-1742138373997-a123057b834b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lightweight, durable tent ideal for backpacking trips.",
      price: "$140",
      inStock: "Limited",
    },
  },
  sleepingBags: {
    marmot: {
      image:
        "https://images.unsplash.com/photo-1699959634881-16f34059a78f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Warm, lightweight, and perfect for chilly nights under the stars.",
      price: "$80",
      inStock: "Yes",
    },
    kelty: {
      image:
        "https://plus.unsplash.com/premium_photo-1681566541689-456a1cb94578?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Cozy sleeping bag with extra insulation for cold weather camping.",
      price: "$95",
      inStock: "Limited",
    },
    rei: {
      image:
        "https://images.unsplash.com/photo-1729544851820-b268c9e51b78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Durable, water-resistant sleeping bag for all-season use.",
      price: "$105",
      inStock: "Yes",
    },
  },
};

function updateTentDisplay(tentData) {
  //first select the images and captions
  const carouselImages = [
    document.querySelector("#tentCarousel .carousel-item:nth-child(1) img"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(2) img"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(3) img"),
  ];
  const carouselCaptions = [
    document.querySelector("#tentCarousel .carousel-item:nth-child(1) h5"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(2) h5"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(3) h5"),
  ];
  const tentKeys = Object.keys(tentData);
  //this takes the object Products.camptingTents and puts the next keys ie Northface, coleman, and rei into an array
  tentKeys.forEach((key, i) => {
    carouselImages[i].src = tentData[key].image;
    carouselCaptions[i].textContent =
      key.charAt(0).toUpperCase() + key.slice(1) + " Tent";
  });

  const tableData = document.querySelector("#product-details-table tbody");
  tableData.innerHTML = "";
  tentKeys.forEach((key) => {
    const tent = tentData[key];
    const row = document.createElement("tr");
    row.innerHTML = `<td>${key.charAt(0).toUpperCase() + key.slice(1)}</td>
    <td>${tent.description}</td>
    <td>${tent.price}</td>
    <td>${tent.inStock}`;
    tableData.appendChild(row);
  });
  highlightTableRowByCarousel();
}

function updateSleepingBagDisplay(bagData) {
  // Update carousel images and captions
  const carouselImages = [
    document.querySelector("#tentCarousel .carousel-item:nth-child(1) img"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(2) img"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(3) img"),
  ];
  const carouselCaptions = [
    document.querySelector("#tentCarousel .carousel-item:nth-child(1) h5"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(2) h5"),
    document.querySelector("#tentCarousel .carousel-item:nth-child(3) h5"),
  ];
  const bagKeys = Object.keys(bagData);
  bagKeys.forEach((key, i) => {
    if (carouselImages[i]) {
      carouselImages[i].src = bagData[key].image;
      carouselImages[i].alt =
        key.charAt(0).toUpperCase() + key.slice(1) + " Sleeping Bag";
    }
    if (carouselCaptions[i]) {
      carouselCaptions[i].textContent =
        key.charAt(0).toUpperCase() + key.slice(1) + " Sleeping Bag";
    }
  });

  // Update product details table
  const tableBody = document.querySelector("#product-details-table tbody");
  tableBody.innerHTML = "";
  bagKeys.forEach((key) => {
    const bag = bagData[key];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${key.charAt(0).toUpperCase() + key.slice(1)}</td>
      <td>${bag.description}</td>
      <td>${bag.price}</td>
      <td>${bag.inStock}</td>
    `;
    tableBody.appendChild(row);
  });
  highlightTableRowByCarousel();
}

// Highlight the corresponding row in the product table based on the active carousel item
function highlightTableRowByCarousel() {
  const carousel = document.getElementById("tentCarousel");
  const activeIndex = Array.from(
    carousel.querySelectorAll(".carousel-item")
  ).findIndex((item) => item.classList.contains("active"));
  const tableRows = document.querySelectorAll(
    "#product-details-table tbody tr"
  );
  tableRows.forEach((row, i) => {
    if (i === activeIndex) {
      row.classList.add("table-primary");
    } else {
      row.classList.remove("table-primary");
    }
  });
}

// Listen for carousel slide events to update table row highlight
const tentCarousel = document.getElementById("tentCarousel");
tentCarousel.addEventListener("slid.bs.carousel", highlightTableRowByCarousel);

// Event listeners for product cards
const tentCard = document.getElementById("campingTent");
const sleepingBagCard = document.getElementById("sleepingBag");

tentCard.addEventListener("click", function (e) {
  updateTentDisplay(Products.campingTents);
});
sleepingBagCard.addEventListener("click", function (e) {
  updateSleepingBagDisplay(Products.sleepingBags);
});

const subscribeForm = document.querySelector("form");
subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (subscribeForm.checkValidity()) {
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
    subscribeForm.reset();
  } else {
    subscribeForm.classList.add("was-validated");
  }
});
