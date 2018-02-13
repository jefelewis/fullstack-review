angular.module('app')
.component('app', {
  controller: function() {
    this.repos = [];
  },
  templateUrl: '/templates/app.html'
});