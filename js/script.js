// coupon Apply button
function couponApplyBtnClick(){
    const totalPrice = document.getElementById("total-price").innerText;
    const parseTotalPrice = parseFloat(totalPrice);

    const total = parseTotalPrice
    const finalTotalPrice = total - 0.2 * total
    const finalDiscountPrice = total * 0.2;
    
    const toFixedFinalDiscount = finalDiscountPrice.toFixed(2);
    const toFixedTotalPrice = finalTotalPrice.toFixed(2);

    const couponField = document.getElementById("coupon-code-field").value
    const parseCouponField = parseFloat(couponField);
    if(couponField == "SELL200"){
        document.getElementById("discount-price").innerText = toFixedFinalDiscount;
        document.getElementById("total").innerText = toFixedTotalPrice;
        document.getElementById("coupon-code-field").value = '';
    }
}
// card no 1
function products1(){
    const parsePrice = getParseValue("card1-price");
    
    const title1 = document.getElementById("card1-title").innerText;
    
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + parsePrice;

    btnPurchase("make-purchase-btn1",totalPrice);

    btnCoupon("coupon-apply-btn1",totalPrice);

    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;

    createChild("products-name",title1);
}
// card no 2
function products2(){
    const priceValue2 = getParseValue("card2-price");
    
    const title2 = document.getElementById("card2-title").innerText;
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + priceValue2;

    btnPurchase("make-purchase-btn1",totalPrice);
    btnCoupon("coupon-apply-btn1",totalPrice);
    
    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;

    createChild("products-name",title2);
}
// card no 3
function products3(){
    const priceValue3 = getParseValue("card3-price");
    
    const title3 = document.getElementById("card3-title").innerText;
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + priceValue3;

    btnPurchase("make-purchase-btn1",totalPrice);
    btnCoupon("coupon-apply-btn1",totalPrice);

    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;

    createChild("products-name",title3);
}
// card no 4
function products4(){
    const priceValue4 = getParseValue("card4-price");
    
    const title4 = document.getElementById("card4-title").innerText;
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + priceValue4;

    btnPurchase("make-purchase-btn1",totalPrice);
    btnCoupon("coupon-apply-btn1",totalPrice);

    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;
    createChild("products-name",title4);
}
// card no 5
function products5(){
    const priceValue5 = getParseValue("card5-price");
    
    const title5 = document.getElementById("card5-title").innerText;
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + priceValue5;

    btnPurchase("make-purchase-btn1",totalPrice);
    btnCoupon("coupon-apply-btn1",totalPrice);

    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;

    createChild("products-name",title5);
}
// card no 6
function products6(){
    const priceValue6 = getParseValue("card6-price");
    
    const title6 = document.getElementById("card6-title").innerText;
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + priceValue6;

    btnPurchase("make-purchase-btn1",totalPrice);
    btnCoupon("coupon-apply-btn1",totalPrice);

    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;
    createChild("products-name",title6);
}
// card no 7
function products7(){
    const priceValue7 = getParseValue("card7-price");
    
    const title7 = document.getElementById("card7-title").innerText;
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + priceValue7;

    btnPurchase("make-purchase-btn1",totalPrice);
    btnCoupon("coupon-apply-btn1",totalPrice);

    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;
    createChild("products-name",title7);
}
// card no 8
function products8(){
    const priceValue8 = getParseValue("card8-price");
    
    const title8 = document.getElementById("card8-title").innerText;
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + priceValue8;

    btnPurchase("make-purchase-btn1",totalPrice);
    btnCoupon("coupon-apply-btn1",totalPrice);

    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;
    createChild("products-name",title8);
}
// card no 9
function products9(){
    const priceValue9 = getParseValue("card9-price");
    
    const title9 = document.getElementById("card9-title").innerText;
    const parseTotalPrice = getParseValue("total-price");

    const totalPrice = parseTotalPrice + priceValue9;

    btnPurchase("make-purchase-btn1",totalPrice);
    btnCoupon("coupon-apply-btn1",totalPrice);
    
    const parsePriceFixed = totalPrice.toFixed(2)

    document.getElementById("total-price").innerText = parsePriceFixed;

    createChild("products-name",title9);
}
function getParseValue(title){
    const price = document.getElementById(title).innerText;
    const parsePrice = parseFloat(price);
    return parsePrice;

}
function createChild(productName,title){
    const productsName = document.getElementById(productName);
    const count = productsName.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1} ${title}`
    productsName.appendChild(p)
}
function btnPurchase(btnId,totalPrice){
    const makePaymentBtn = document.getElementById(btnId);
    if(totalPrice > 0){
        makePaymentBtn.disabled = false;
    }else {
        makePaymentBtn.disabled = true;
      }
}
function btnCoupon(btnId,totalPrice){
    const couponApplyBtn = document.getElementById(btnId)
    if(totalPrice >= 200){
        couponApplyBtn.disabled = false;
    }else{
        couponApplyBtn.disabled = true;
    }
}
function goHomeBtn(){
    document.getElementById("products-name").innerText = ''
    document.getElementById("total-price").innerText = "0.00"
    document.getElementById("discount-price").innerText = "0.00";
    document.getElementById("total").innerText = "0.00";
    document.getElementById("make-purchase-btn1").disabled = true;
    document.getElementById("coupon-apply-btn1").disabled = true;
}