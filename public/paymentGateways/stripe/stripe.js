if (stripeKey) {
    let stripe = Stripe(stripeKey);

    let style = {
        base: {
            fontSize: "16px",
            color: "#32325d",
            border: "1px solid red",
        },
    };

    // let card = elements.create('card', {style: style});
    // card.mount('#card-element');

    // const cardNumber = elements.create('cardNumber');
    // cardNumber.mount('#card-number');

    // const cardExpiration = elements.create('cardExpiry');
    // cardExpiration.mount('#card-expiration');

    // const cardCvc = elements.create('cardCvc');
    // cardCvc.mount('#card-cvc');

    const options = {
        mode: "setup",
        currency: "usd",
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };
    const elements = stripe.elements(options);
    const paymentElement = elements.create("payment");
    paymentElement.mount("#payment-element");

    function stripe_payment() {
        $("#payment_method").parent().removeClass("has-error");
        stripe
            .confirmPayment(elements)
            .then(function (result) {
                console.log(result, "123123");
                if (result.error) {
                    let errorElement = document.getElementById("card-errors");
                    errorElement.textContent = result.error.message;
                } else {
                    stripeTokenHandler(result.token);
                }
            });
    }

    function stripeTokenHandler(token) {
        let form = document.getElementById("paymentForm");
        let hiddenInput = document.createElement("input");
        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("name", "stripeToken");
        hiddenInput.setAttribute("value", token.id);
        form.appendChild(hiddenInput);
        form.submit();
    }
}
