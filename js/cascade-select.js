$(document).ready(function() {
  groupByCompany = function(products) {
    var company, productsOptions;
    company = $("#company_id :selected").text();
    productsOptions = $($.parseHTML(products, document, true)).filter("optgroup[label='" + company + "']").html();
    if (productsOptions) {
      $('#product_id').html(productsOptions);
    }
  }

  products = $("#product_id").html();
  groupByCompany(products);
  $("#company_id").change(function() {
    groupByCompany(products);
  });
});
