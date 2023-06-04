/**
 * 
1. install stripe and react stripe js
2. create  a checkout form  with  card element (card element contains : card number, expiration date, cvs, zip code)
3. create account on stripe and get the publicahle key pk
4. get card info information
5. create a payment method
6. use test card to test payment
7. on the server side instal stripe : npm i --save stripe
8. create a payment intent api with payment method types['card']
9. make sure you provide amount in cents by multiply your price with 100
10. call payment intent api to get client secret and store it in as state
11 . use confirmCardPayment api with client secret card info
12. display error card 
12. display confirm success
https://stripe.com/docs/payments/quickstart?client=react&lang=node
 */



