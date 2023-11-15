<fieldset id="stripe_div" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 hidden">
    <div class="w-full">
        <div id="payment-element">
            <!-- Elements will create form elements here -->
        </div>
        {{-- <div class="form-group">
            <label for="card-number">Card Number</label>
            <div id="card-number" class="w-full h-12 rounded-lg px-4 border border-[#D9DBE9] py-3"></div>
        </div>

        <div class="input-group">
            <div class="form-group">
                <label for="card-expiration">Card Expiration</label>
                <div id="card-expiration" class="w-full h-12 rounded-lg px-4 border border-[#D9DBE9] py-3"></div>
            </div>

            <div class="form-group">
                <label for="card-cvc">Card CVC</label>
                <div id="card-cvc" class="w-full h-12 rounded-lg px-4 border border-[#D9DBE9] py-3"></div>
            </div>
        </div>

        <div class="form-group">
            <label for="postal-code">ZIP or Postal Code</label>
            <input type="text" class="w-full h-12 rounded-lg px-4 border border-[#D9DBE9] py-3" id="postal-code" name="postal-code" required>
        </div> --}}
        {{-- <div id="card-element" class="w-full h-12 rounded-lg px-4 border border-[#D9DBE9] py-3"></div> --}}
        <div id="card-errors" class="text-danger" role="alert"></div>
    </div>
</fieldset>
