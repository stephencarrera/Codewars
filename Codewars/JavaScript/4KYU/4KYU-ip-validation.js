/*
https://www.codewars.com/kata/ip-validation/train/javascript


Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

Input to the function is guaranteed to be a single string.

Examples

// valid inputs:
1.2.3.4
123.45.67.89

// invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!
*/
function isValidIP(str) {
  return (
    str.split(".").filter(octet => {
      return octet === Number(octet).toString() && Number(octet) < 256;
    }).length === 4
  );
}
