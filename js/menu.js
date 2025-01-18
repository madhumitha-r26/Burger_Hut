// Get all order buttons
const orderButtons = document.querySelectorAll(".order_btn");

// Add event listener to each order button
orderButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
  
    const card = e.target.parentNode.parentNode;
    const image = card.querySelector("img").src;
    const name = card.querySelector(".card-title").textContent;
    let price = card.querySelector(".card-text").textContent;
    
    
    const priceValue = parseFloat(price.split("Rs.")[1].trim());

    
    const modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.id = `orderModal${index + 1}`;
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Order Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex flex-column justify-content-center">
            <div class="d-flex justify-content-center">
              <img src="${image}" alt="order-img" width=300 height=300>
            </div>
            <h5 class="mt-4 text-center">${name}</h5>
            <p class="mt-2 text-center"> Rs. <span class="total-price">${priceValue}</span></p> 

            <div class="num-block skin-2">
              <div class="num-in">
                <span class="minus dis"></span>
                <input type="text" class="in-num" value="1" readonly="true">
                <span class="plus"></span>
              </div>
            </div>

            <button type="button" class="btn btn-danger w-100 mt-4" onclick="ord_msg()">Place Order</button>
          </div>
        </div>
      </div>
    `;

   
    document.body.appendChild(modal);

  
    const plusButton = modal.querySelector(".plus");
    const minusButton = modal.querySelector(".minus");
    const input = modal.querySelector(".in-num");
    const totalPriceElement = modal.querySelector(".total-price");

    plusButton.addEventListener("click", function () {
      input.value = parseInt(input.value) + 1;
      const quantity = parseInt(input.value);
      const totalPrice = (priceValue * quantity);
      totalPriceElement.textContent = totalPrice;
    });

    minusButton.addEventListener("click", function () {
      if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        const quantity = parseInt(input.value);
        const totalPrice = (priceValue * quantity);
        totalPriceElement.textContent = totalPrice;
      }
    });

    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  });
});

function ord_msg(){
  alert("THANKS FOR PLACING YOUR ORDER FROM US!")
}