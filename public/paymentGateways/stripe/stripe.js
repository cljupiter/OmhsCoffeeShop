if (stripeKey) {
    let stripe = Stripe(stripeKey);
    let elements;

    initialize();
    checkStatus();

    async function initialize() {
        const { clientSecret } = await fetch(orderRoute, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: JSON.stringify({
                paymentMethod: "stripe",
            }),
        }).then((r) => r.json());

        elements = stripe.elements({ clientSecret });

        const paymentElementOptions = {
            layout: "tabs",
        };

        const paymentElement = elements.create(
            "payment",
            paymentElementOptions
        );
        paymentElement.mount("#payment-element");
    }

    async function checkStatus() {
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        const { paymentIntent } = await stripe.retrievePaymentIntent(
            clientSecret
        );

        switch (paymentIntent.status) {
            case "succeeded":
                window.location.href = returnURL.replace(
                    "transaction_no",
                    paymentIntent.id
                );
                break;
            case "processing":
                break;
            case "requires_payment_method":
                break;
            default:
                break;
        }
    }

    function stripe_payment() {
        $("#payment_method").parent().removeClass("has-error");
        stripe
            .confirmPayment({
                elements,
                confirmParams: {
                    return_url: window.location.href,
                },
            })
            .then(function (result) {
                console.log(result);
                // let errorElement = document.getElementById("card-errors");
                // if (error.type === "card_error" || error.type === "validation_error") {
                //     errorElement.textContent = error.message;
                //   } else {
                //     errorElement.textContent = "An unexpected error occurred.";
                //   }
            });
    }
}
