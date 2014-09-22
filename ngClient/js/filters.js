myApp.filter('checkmark', function() {
  /** https://docs.angularjs.org/guide/filter **/

  var filterFunction = function(input) {
    return input ? '\u2713' : '\u2718';
  };

  return filterFunction;
});
