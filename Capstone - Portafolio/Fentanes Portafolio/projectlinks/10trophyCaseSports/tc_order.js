"use strict";

/* Result on HTML 796
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1
  
   Author: 
   Date:   
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
*/

/*4. Within the tc_order.js file, you will create arrays containing information on a sample customer order. Create an array named item that will contain the ID numbers of the items purchased by the customer. Add the following four item numbers to the array: 10582, 23015, 41807, and 10041. 
alternate: var item = new Array("10582", "23015", "41807", "10041");
HTML 742*/
var item = [10582, 23015, 41807, 10041];

/*5. Create an array named itemDescription containing the following item descriptions:
• 1975 Green Bay Packers Football (signed), Item 10582
• Tom Landry 1955 Football Card (unsigned), Item 23015
• 1916 Army-Navy Game, Framed Photo (signed), Item 41807
• Protective Card Sheets, Item 10041
alternate: var itemDescription = new Array();
itemDescription[0] = "1975 Green Bay Packers Football (signed), Item 10582";
itemDescription[1] = "Tom Landry 1955 Football Card (unsigned), Item 23015";
itemDescription[2] = "1916 Army-Navy Game, Framed Photo (signed), Item 41807";
itemDescription[3] = "Protective Card Sheets, Item 10041"; HTML 742*/
var itemDescription = ["1975 Green Bay Packers Football (signed), Item 10582", "Tom Landry 1955 Football Card (unsigned), Item 23015", "1916 Army-Navy Game, Framed Photo (signed), Item 41807", "Protective Card Sheets, Item 10041"];

/*6. Create an array named itemPrice containing the following item prices: 149.93, 89.98, 334.93, and 22.67.*/
var itemPrice = [149.93, 89.98, 334.93, 22.67];

/*7. Create an array named itemQty containing the following quantities that the customer ordered of each item: 1, 1, 1, and 4.*/
var itemQty = [1, 1, 1, 4];

/*8. In your script, you will calculate a running total of the cost of the order. Declare a variable named ordertotal and set its initial value to 0. HTML 695*/
var orderTotal = 0;

/*9. Declare a variable named cartHTML that will contain the HTML code for the contents of the shopping cart, which will be displayed as a table. Set its initial value to the text string: <table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr> HTML*/
var cartHTML = "<table>" + "<tr><th>Item</th>" + "<th>Description</th>" + "<th>Price</th>" + "<th>Qty</th>" + "<th>Total</th></tr>";

/*10. Create a for loop that loops through the entries in the item array. Each time through the loop, execute the commands described in Steps a through e.
    a. Add the following HTML code to the value of the cartHTML variable <tr> <td><img src='tc_item.png' alt='item' /></td> where item is the current value from the item array. HTML 757*/
for (var i = 0; i < 4; i++){
    //console.log(item[i]);
    //console.log)(itemDescription[i]);
    //console.log(itemPrice[i]);
    //console.log(itemQty[i]);
cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item'/></td>";
    //calling all images in the for loop

    /*b. Add the following HTML code to the cartHTML variable to display the description, price, and quantity ordered of the item <td>description</td> <td>$price</td> <td>guantity</td> where description is the current value from the itemDescription array, price is the current value from the itemPrice array preceded by a $ symbol, and quantity is the current value from the itemQty array.*/
cartHTML += "<td>" + itemDescription[i] + "</td>";
cartHTML += "<td>" + "$" + itemPrice[i] + "</td>";
cartHTML += "<td>" + itemQty[i] + "</td>";

    /*c. Declare a variable named itemCost equal to the price value multiplied by the quantity value for the current item.*/
var itemCost = itemPrice[i]*itemQty[i];

    /*d. Add the following HTML code to the cartHTML variable to display the cost for the item(s) ordered, completing the table row <td>$cost</td></tr> where cost is the value of the itemCost variable, preceded by a $ symbol.*/
cartHTML += "<td>" + "$" + itemCost + "</td></tr>";

    /*e. Add the value of the itemCost variable to the orderTotal variable to keep a running total of the total cost of the customer order.*/
orderTotal += itemCost;
}

/*11. After the for loop has completed, add the following HTML code to the value of the cartHTML variable, completing the shopping cart table <tr> <td colspan='4'>Subtotal</td> <td>$total</td> </tr> </table> where total is the value of the orderTotal variable, preceded by a $ symbol.*/
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>" + "$" + orderTotal + "</td></tr>" + "</table>";

/*12. Apply the cartHTML value to the inner HTML of the div element with the ID cart.*/
document.getElementById("cart").innerHTML = cartHTML;

/*13. Document your script file with appropriate comments, and then save your work 
14. Open the tc_cart.html file in your browser and verify that the page now shows the shopping cart data for the sample customer order.*/


//var myTotal = 1*149.93 + 1*89.98 + 1*334.93 + 4*22.67
//var myTotal = 1*itemPrice[0] + 1*itemPrice[1] + 1*itemPrice[2] + 4*itemPrice[3];
//var myTotal = itemQty[0]*itemPrice[0] + itemQty[1]*itemPrice[1] + itemQty[2]*itemPrice[2] + itemQty[3]*itemPrice[3];
//console.log(myTotal);
