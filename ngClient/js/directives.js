myApp.directive('printThis', function() {
  /** https://docs.angularjs.org/guide/directive **/

  var directiveDefinitionObject = {
    restrict: 'EA',
    template: '<input ng-model="data" placeholder="Type here"/> {{ data }}'
  }

  return directiveDefinitionObject;
});
