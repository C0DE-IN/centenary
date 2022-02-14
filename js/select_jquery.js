$(document).ready(function() {
// Initializing arrays with city names.
var USA = [{
display: "<table class="table table-bordered">
          <thead style="background-color: #eee;">
            <tr>
              <th style="vertical-align: middle;" rowspan="3">Venue names</th>
              <th style="text-align: center;" colspan="5">KBA (Child)</th>
            </tr><tr>
              <th style="text-align: center;" colspan="5">weekends</th>
            </tr>
            <tr>
              <th>Monthly</th>
              <th>Quarterly</th>
              <th>Half Yearly</th>
              <th>Annually</th>
              <th>For one class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fee</td>
              <td></td>
              <td>10000</td>
              <td>17000</td>
              <td>33000</td>
              <td>425</td>
            </tr>
            <tr>
              <td>Reg Fee</td>
              <td></td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Tax (18%)</td>
              <td></td>
              <td>1980</td>
              <td>3240</td>
              <td>6120</td>
              <td>77</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td>12980</td>
              <td>21240</td>
              <td>40120</td>
              <td>502</td>
            </tr>
          </tbody>
        </table>",value: "WashingtonDC"},
{display: "Alaska", value: "Alaska"},
{display: "New York",value: "New-York"},
{display: "Florida",value: "Florida"},
{display: "Hawaii",value: "Hawaii"},
{display: "California",value: "California"}];
var AUSTRALIA = [{
display: "Canberra",value: "Canberra"},
{display: "Sydney",value: "Sydney"},
{display: "Melbourne",value: "Melbourne"},
{display: "Perth",value: "Perth"},
{display: "Gold Coast ",value: "Gold-Coast"}];
var FRANCE = [{
display: "Paris",value: "Paris"},
{display: "Avignon",value: "Avignon"},
{ display: "Strasbourg",value: "Strasbourg"},
{display: "Nice", value: "Nice"}];
// Function executes on change of first select option field.
$("#country").change(function() {
var select = $("#country option:selected").val();
switch (select) {
case "USA":
city(USA);
break;
case "AUSTRALIA":
city(AUSTRALIA);
break;
case "FRANCE":
city(FRANCE);
break;
default:
$("#city").empty();
$("#city").append("<option>--Select--</option>");
break;
}
});
// Function To List out Cities in Second Select tags
function city(arr) {
$("#city").empty(); //To reset cities
$("#city").append("<option>--Select--</option>");
$(arr).each(function(i) { //to list cities
$("#city").append("<option value="" + arr[i].value + "">" + arr[i].display + "</option>")
});
}
});