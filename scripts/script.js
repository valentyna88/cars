document.addEventListener("DOMContentLoaded", () => {
  const mainAction = document.getElementById("main-action");
  const carsSection = document.getElementById("cars");
  const priceSection = document.getElementById("price");
  const priceAction = document.getElementById("price-action");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const carInput = document.getElementById("car");
  const buttons = document.getElementsByClassName("car-button");
  const layer = document.querySelector(".price-image");
  const elem = document.querySelector(".main");

  // Smooth scroll to cars section
  mainAction.onclick = () => {
    carsSection.scrollIntoView({ behavior: "smooth" });
  };

  // Smooth scroll to price section for each button
  Array.from(buttons).forEach((button) => {
    button.onclick = () => {
      priceSection.scrollIntoView({ behavior: "smooth" });
    };
  });

  // Form validation
  priceAction.onclick = () => {
    const inputs = [
      { field: nameInput, message: "Please fill in the name field!" },
      { field: phoneInput, message: "Please fill in the phone field!" },
      { field: carInput, message: "Please fill in the car field!" },
    ];

    for (const input of inputs) {
      if (input.field.value === "") {
        alert(input.message);
        return;
      }
    }

    alert("Thank you for your application, we will contact you shortly!");
  };

  // Parallax effect
  document.addEventListener("mousemove", (event) => {
    layer.style.transform = `translate3d(${(event.clientX * 0.5) / 6}px, ${
      (event.clientY * 0.5) / 6
    }px, 0px)`;
  });

  // Background scroll effect
  document.addEventListener("scroll", () => {
    elem.style.backgroundPositionX = `0 ${0.5 * window.scrollY}px`;
  });
});
