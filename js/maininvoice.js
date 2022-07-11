 /* Import the module*/
  
 angular.module('invoicing', []) 
 // The default logo for the invoice
     .constant('DEFAULT_LOGO', 'images/instalogo.jpg')
     .constant('DEFAULT_addons', {
         adonitems: [
             { key: 'Invoice Date', description: new Date().toISOString().split("T")[0] },
             { key: 'GST No', description: 'A123-123-123-123' }
         ]
     })
 // The invoice displayed when the user first uses the app
 .constant('DEFAULT_INVOICE', {
     tax: 0.00,
     discount:0.00,
   invoice_number: 2022,
   invoice_date: "2020-07-08",
   customer_info: {
     name: ' ',
     web_link: ' ',
       address1: ' ',
       address2: ' ',
     postal: ' '
   },
   company_info: {
     name: ' ',
     web_link: ' ',
     address1: ' ',
     address2: ' ',
     postal: ' '
   },
   items:[
     { qty: 0, description: 'Description', cost: 0.0,hsn:'HSN', sgst:0.0, cgst:0.0,igst:0.0 }
   ]
 })
 
  
 // Service for accessing local storage
 .service('LocalStorage', [function() {
 
   var Service = {};
 
   // Returns true if there is a logo stored
   var hasLogo = function() {
     return !!localStorage['logo'];
   };
 
   // Returns a stored logo (false if none is stored)
   Service.getLogo = function() {
     if (hasLogo()) {
       return localStorage['logo'];
     } else {
       return false;
     }
   };
 
   Service.setLogo = function(logo) {
     localStorage['logo'] = logo;
   };
 
   // Checks to see if an invoice is stored
   var hasInvoice = function() {
     return !(localStorage['invoice'] == '' || localStorage['invoice'] == null);
   };
 
   // Returns a stored invoice (false if none is stored)
   Service.getInvoice = function() {
     if (hasInvoice()) {
       return JSON.parse(localStorage['invoice']);
     } else {
       return false;
     }
   };
 
   Service.setInvoice = function(invoice) {
     localStorage['invoice'] = JSON.stringify(invoice);
   };
 
     //Additional Details
 
     // Checks to see if extra details is stored
     var hasaddons = function () {
         return !(localStorage['addonDetails'] == '' || localStorage['addonDetails'] == null);
     };
 
     // Returns a stored invoice (false if none is stored)
     Service.getaddonDetails = function () {
         if (hasaddons()) {
             return JSON.parse(localStorage['addonDetails']);
         } else {
             return false;
         }
     };
 
     Service.setaddonDetails = function (addonDetails) {
         localStorage['addonDetails'] = JSON.stringify(addonDetails);
     };
 
 
 
     //Additional Details
 
 
   // Clears a stored logo
   Service.clearLogo = function() {
     localStorage['logo'] = '';
   };
 
   // Clears a stored invoice
   Service.clearinvoice = function() {
     localStorage['invoice'] = '';
   };
 
   // Clears all local storage
   Service.clear = function() {
     localStorage['invoice'] = '';
     localStorage['addonDetails'] = '';
     Service.clearLogo();
   };
 
   return Service;
 
 }])
 
 .service('Currency', [function(){
 
   var service = {};
 
   service.all = function() {
     return [ 
       {
         name: 'Indian Rupee (₹)',
         symbol: '₹'
       },
       {
         name: 'British Pound (£)',
         symbol: '£'
       },
       {
         name: 'Canadian Dollar ($)',
         symbol: 'CAD $ '
       },
       {
         name: 'Euro (€)',
         symbol: '€'
       },
       {
         name: 'US Dollar ($)',
         symbol: '$'
       }
     ]
   }
 
   return service;
   
 }])
 
     .service('Statelist', [function () {
 
         var service = {};
 
         service.all = function () {
             return [
                 {
                     name: 'Andaman Nicobar',
                     symbol: 'AN'
                 },
                 {
                     name: 'Andhra Pradesh',
                     symbol: 'AP'
                 },
                 {
                     name: 'Arunachal Pradesh',
                     symbol: 'AR'
                 },
                 {
                     name: 'Assam',
                     symbol: 'AS'
                 },
                 {
                     name: 'Bihar',
                     symbol: 'BR'
                 },
                  {
                      name: 'Chhattisgarh',
                     symbol: 'CG'
                  },
                   {
                     name: 'Goa',
                     symbol: 'GA'
                   },
                    {
                        name: 'Gujarat',
                     symbol: 'GJ'
                    },
                     {
                         name: 'Haryana',
                     symbol: 'HR'
                 },
                 {
                     name: 'Himachal Pradesh',
                     symbol: 'HP'
                 },
                 {
                     name: 'Jammu and Kashmir',
                     symbol: 'JK'
                 },
                 {
                     name: 'Jharkhand',
                     symbol: 'JH'
                 },
                 {
                     name: 'Karnataka',
                     symbol: 'KA'
                 },
                 {
                     name: 'Kerala',
                     symbol: 'KL'
                 },
                 {
                     name: 'Madhya Pradesh',
                     symbol: 'MP'
                 },
                 {
                     name: 'Maharashtra',
                     symbol: 'MH'
                 },
                 {
                     name: 'Manipur',
                     symbol: 'MN'
                 },
                 {
                     name: 'Meghalaya',
                     symbol: 'ML'
                 },
                 {
                     name: 'Mizoram',
                     symbol: 'MZ'
                 },
                 {
                     name: 'Nagaland',
                     symbol: 'NL'
                 },
                 {
                     name: 'Orissa',
                     symbol: 'OR'
                 },
                 {
                     name: 'Punjab',
                     symbol: 'PU'
                 },
                 {
                     name: 'Rajasthan',
                     symbol: 'RJ'
                 },
                 {
                     name: 'Sikkim',
                     symbol: 'SK'
                 },
                 {
                     name: 'Tamil Nadu',
                     symbol: 'TN'
                 },
                 {
                     name: 'Tripura',
                     symbol: 'TR'
                 },
                 {
                     name: 'Uttarakhand',
                     symbol: 'UK'
                 },
                 {
                     name: 'Uttar Pradesh',
                     symbol: 'UP'
                 },
                 {
                     name: 'West Bengal',
                     symbol: 'WB'
                 },
                 {
                     name: 'Telangana',
                     symbol: 'TS'
                 },
                 {
                     name: 'Andaman and Nicobar Islands',
                     symbol: 'AN'
                 },
                 {
                     name: 'Chandigarh',
                     symbol: 'CG'
                 },
                 {
                     name: 'Dadra and Nagar Haveli',
                     symbol: 'DH'
                 },
                 {
                     name: 'Daman and Diu',
                     symbol: 'DD'
                 },
                 {
                     name: 'Delhi',
                     symbol: 'DL'
                 },
                 {
                     name: 'Lakshadweep',
                     symbol: 'LD'
                 },
                 {
                     name: 'Pondicherry',
                     symbol: 'PY'
                 } 
             ]
         }
 
         return service;
 
     }])
 
      
 
 // Main application controller
     .controller('InvoiceCtrl', ['$scope', '$http', 'DEFAULT_INVOICE', 'DEFAULT_LOGO', 'LocalStorage', 'Currency', 'Statelist','DEFAULT_addons',
         function ($scope, $http, DEFAULT_INVOICE, DEFAULT_LOGO, LocalStorage, Currency, Statelist, DEFAULT_addons) {
 

          let otherDetails = JSON.parse(localStorage.getItem("otherDetails"));
   // Set defaults
   $scope.currencySymbol = otherDetails.currencySymbol || '₹';
   $scope.serviceState = otherDetails.serviceState || 'Punjab';
   $scope.supplierState = otherDetails.supplierState || 'Mizoram';
   $scope.logoRemoved = otherDetails.isLogoRemoved && true;
   $scope.printMode = true; 
    $scope.gst = otherDetails.isGst && true; 
    $scope.notes = otherDetails.isNotes || false;
    $scope.termsncond = otherDetails.isTcs || false;
    $scope.note = otherDetails.notes || '';
    $scope.tcs = otherDetails.tcs || '';
 
   (function init() {
     // Attempt to load invoice from local storage
     !function() {
       var invoice = LocalStorage.getInvoice();
         $scope.invoice = invoice ? invoice : DEFAULT_INVOICE;
         var additionalDetails = LocalStorage.getaddonDetails();
         $scope.additionalDetails = additionalDetails ? additionalDetails : DEFAULT_addons;
     }();
 
     // Set logo to the one from local storage or use default
     !function() {
       var logo = LocalStorage.getLogo();
       $scope.logo = logo ? logo : DEFAULT_LOGO;
     }();
 
     $scope.availableCurrencies = Currency.all();
     $scope.availableStateIN = Statelist.all(); 
   })()
   // Adds an item to the invoice's items
   $scope.addItem = function() {
     $scope.invoice.items.push({ qty:0, cost:0,hsn:'HSN',sgst:0.0,cgst:0.0,igst:0.0 ,description:"Description" });
   }
 
 // Adds an item to the invoice's items
 $scope.addnewDetails = function () {
     $scope.additionalDetails.adonitems.push({key:"",description:""});
 }

 $scope.saveAddonDetails = function () {
  localStorage['addonDetails'] = JSON.stringify($scope.additionalDetails);
 }
 
   // Toggle's the logo
   $scope.toggleLogo = function(element) {
    // document.querySelector(".fa-eye").classList.toggle('fa-eye-slash');
     $scope.logoRemoved = !$scope.logoRemoved;
    //  LocalStorage.clearLogo();
   };
 
           
 
   // Triggers the logo chooser click event
   $scope.editLogo = function() {
     // angular.element('#imgInp').trigger('click');
     document.getElementById('imgInp').click();
   };
             $scope.sendToprinter = function () {
              document.getElement('input').style.display='none';
                 window.location = "Invoice/sendToPrinter/" + $scope.invoice.items;
             };
             
   $scope.printInfo = function(e) {
     window.print();
   };
             
   // Remotes an item from the invoice
   $scope.removeItem = function(item) {
     $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
   };
             $scope.removeaddonItem = function (item) {
                 $scope.additionalDetails.adonitems.splice($scope.additionalDetails.adonitems.indexOf(item), 1);
             };
 
   // Calculates the sub total of the invoice  
   $scope.invoiceSubTotal = function() {
     var total = 0.00;
     angular.forEach($scope.invoice.items, function(item, key){
         total += (item.qty * item.cost); 
     });
     return total;
   };
 
 // Calculates the sub total of the invoice Without tax
 $scope.invoiceSubTotalNoTax = function () {
     var total = 0.00;
     angular.forEach($scope.invoice.items, function (item, key) {
         total += (item.qty * item.cost);
     });
     return total;
 };
 
 // Calculates the sub total of the invoice with CGST SGST
 $scope.invoiceSubTotalwithCGSGST = function () {
     var total = 0.00;
     angular.forEach($scope.invoice.items, function (item, key) {
         total += (item.qty * item.cost);
     });
     return total;
 };
 
 // Calculates the sub total of the invoice with IGST
 $scope.invoiceSubTotalwithIGST = function () {
     var total = 0.00;
     angular.forEach($scope.invoice.items, function (item, key) {
         total += (item.qty * item.cost);
     });
     return total;
 };
 
 // Calculates the sub total of the invoice with IGST
 $scope.calculateNetTax = function () {
     var total = 0.00;
     angular.forEach($scope.invoice.items, function (item, key) {
         total += (item.qty * item.cost * item.cgst/100 + item.qty * item.cost * item.sgst/100);
     });
     return total;
 };
 
             // Calculates the sub total of the invoice with IGST
             $scope.calculateNetGSTTax = function () {
                 var total = 0.00;
                 angular.forEach($scope.invoice.items, function (item, key) {
                     total += (item.qty * item.cost * item.igst / 100 );
                 });
                 return total;
             };
 
   // Calculates the tax of the invoice
   $scope.calculateTax = function() {
     return (($scope.invoice.tax * $scope.invoiceSubTotal())/100);
   };
 
 // Calculates Discount of the invoice
 $scope.calculateDiscountNoTax = function () {
     return (($scope.invoice.discount * $scope.invoiceSubTotalNoTax()) / 100);
 };
 $scope.calculateDiscountGST = function () {
     return (($scope.invoice.discount * $scope.invoiceSubTotal()) / 100);
 };
 
 
   // Calculates the grand total of the invoice
   $scope.calculateGrandTotal = function() {
     saveInvoice();
     return $scope.calculateTax() + $scope.invoiceSubTotal();
   };
 
             // Calculates the grand total of the invoice
             $scope.calculateGrandTotalwithCGSGST = function () {
                 saveInvoice();
                 var total_tax = $scope.calculateNetTax();
                 var total = 0.00;
                 angular.forEach($scope.invoice.items, function (item, key) {
                     total += (item.qty * item.cost );
                 });
                 return total + total_tax - $scope.calculateDiscountGST();
             };
 
             // Calculates the grand total of the invoice
             $scope.calculateGrandTotalwithIGST = function () {
                 saveInvoice();
                 var total_tax = $scope.calculateNetGSTTax();
                 var total = 0.00;
                 angular.forEach($scope.invoice.items, function (item, key) {
                     total += (item.qty * item.cost);
                 });
                 return total + total_tax - $scope.calculateDiscountGST();
             };
 
 // Calculates the grand total of the invoice
 $scope.calculateGrandTotalNoTax = function () {
     saveInvoice();
     return $scope.invoiceSubTotalNoTax() - $scope.calculateDiscountNoTax();
 };
 
   // Clears the local storage
   $scope.clearLocalStorage = function() {
     var confirmClear = confirm('Are you sure you would like to clear the invoice?');
     if(confirmClear) {
       LocalStorage.clear();
       setInvoice(DEFAULT_INVOICE);
       setaddonDetails(DEFAULT_addons);
     }
   };

   function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
};

   $scope.saveDetails = function(){
    // let query = window.location.search.split('?')[1].split('&');
    let query = window.location.search;
    query = parseQuery(query);
    console.log(query);
   }
 
   // Sets the current invoice to the given one
   var setInvoice = function(invoice) {
     $scope.invoice = invoice;
     saveInvoice();
   };

   var setaddonDetails = function(addonDetails) {
    $scope.additionalDetails = addonDetails;
    saveAddDetails();
  };
 
   // Reads a url
   var readUrl = function(input) {
     if (input.files && input.files[0]) {
       var reader = new FileReader();
       reader.onload = function (e) {
         document.getElementById('company_logo').setAttribute('src', e.target.result);
         LocalStorage.setLogo(e.target.result);
       }
       reader.readAsDataURL(input.files[0]);
     }
   };

   $scope.editAndToggleLogo = function(){
    document.getElementById('imgInp').click();
    $scope.logoRemoved = !$scope.logoRemoved;
  };
 
   // Saves the invoice in local storage
   var saveInvoice = function() {
     LocalStorage.setInvoice($scope.invoice);
   };

   var saveAddDetails = function() {
    LocalStorage.setaddonDetails($scope.additionalDetails);
  };
 
   // Runs on document.ready
   angular.element(document).ready(function () {
     // Set focus
    //  document.getElementById('invoice-number').focus();
 
     // Changes the logo whenever the input changes
     document.getElementById('imgInp').onchange = function() {
       readUrl(this);
     };
   });
 
 }])