# creditcard-validator
Checks credit card numbers to see if they are valid

Uses the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) for the number check.

Currently only identifies some Amex, Mastercard, and Visa cards

Issuing Network | IIN Ranges | Length
--------------- | ---------- | ------
Amex | 34, 37 | 15
Mastercard | 51-55 | 16
Visa | 4 | 16

[source](https://en.wikipedia.org/wiki/Payment_card_number)

MII Digit Value | Issuer Category
--------------- | ---------------
0 | ISO/TC 68 and other industry assignments
1 | Airlines
2 | Airlines, financial and other future industry assignments
3 | Travel and entertainment
4 | Banking and financial
5 | Banking and financial
6 | Merchandising and banking/financial
7 | Petroleum and other future industry assignments
8 | Healthcare, telecommunications and other future industry assignments
9 | For assignment by national standards bodies

[source](https://en.wikipedia.org/wiki/ISO/IEC_7812)
