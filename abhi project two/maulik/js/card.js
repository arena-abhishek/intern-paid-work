const heroSwiper = [
  {
    image: "./images/home/earth.jpg",
    title: "Innovating Chemistry for a Sustainable Future",
    description: "Leading the way in sustainable chemical solutions",
    icon: "fa-car",
  },
  {
    image: "./images/home/earth.jpg",
    title: "Textile Innovation",
    description: "Sustainable solutions for the textile manufacturing",
    icon: "fa-tshirt",
  },
  {
    image: "/images/home/earth.jpg",
    title: "Pharmaceutical Grade",
    description: "High-purity chemicals for pharmaceutical applications",
    icon: "fa-pills",
  },
];

const solutions = [
  {
      title: 'Automotive Solutions',
      description: 'Advanced chemical solutions for the automotive industry',
      icon: 'fa-car'
  },
  {
      title: 'Textile Innovation',
      description: 'Sustainable solutions for textile manufacturing',
      icon: 'fa-tshirt'
  },
  {
      title: 'Pharmaceutical Grade',
      description: 'High-purity chemicals for pharmaceutical applications',
      icon: 'fa-pills'
  },
  {
      title: 'Pharmaceutical Grade',
      description: 'High-purity chemicals for pharmaceutical applications',
      icon: 'fa-pills'
  },
 
];

function createHeroSwiper(heroSwiper) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  slide.innerHTML = `
    <div class="hero-slide" style="background-image: url('${heroSwiper.image}');">
      <div class="hero-content">
        <span class="display-4 fw-bold mb-4">${heroSwiper.title}</span>
        <p>${heroSwiper.description}</p>
        <a href="marketAndSolutions.html" class="cta-button">Explore Our Solutions</a>
      </div>
    </div>
  `;

  return slide; // Return the actual DOM element
}
function createMarketAndSolution(solutions) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `
        <div class="solution-card" data-aos="fade-up">
                <i class="fas ${solutions.icon} mb-4"></i>
                <h3>${solutions.title}</h3>
                <p>${solutions.description}</p>
                <a href="#" class="btn btn-outline-primary mt-3">Learn More</a>
            </div>
  `;

  return slide; // Return the actual DOM element
}

// Function to render slides
function renderCards(containerId, data, cardFunc) {
  const container = document.getElementById(containerId);
  if (container) {
    data.forEach((item) => {
      const card = cardFunc(item);
      container.appendChild(card);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards("hero-swiper", heroSwiper, createHeroSwiper);
  renderCards("market-solutions", solutions, createMarketAndSolution);
});
