'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var mockScope={},
         view1Ctrl = $controller('View1Ctrl',{$scope:mockScope});
      expect(view1Ctrl).toBeDefined();
    }));

    it('should define a birthdaytext in the scope', inject(function($controller){

    	var mockScope={},
    	BirthdayCtrl =$controller('View1Ctrl',{$scope:mockScope});
    	expect(mockScope.birthdaytext).toBeDefined();

    }));


    //It is defined in the fb script
    it('should not be defined a gender in the scope but rather in FB script', inject(function($controller){

      var mockScope={},
        GenderCtrl=$controller('View1Ctrl',{$scope:mockScope});
        expect(mockScope.gender).toBeUndefined();
    }));

    it('should not be defined a resultday in the scope but rather in the fb script', inject(function($controller){

      var mockScope={},
        ResultDayCtrl=$controller('View1Ctrl',{$scope:mockScope});
        expect(mockScope.resultday).toBeUndefined();
    }));

    it('should not be defined a daynumber in the scope but rather in the fb script', inject(function($controller){

      var mockScope={},
        DayNumberCtrl=$controller('View1Ctrl',{$scope:mockScope});
        expect(mockScope.daynumber).toBeUndefined();
    }));

    // it('is working', inject(function(){
    //   var mockScope={},
    //   LoginCtrl=$controller('View1Ctrl',{$scope:mockScope})
    //     expect(checkLoginState).toBeTrue();
    // }));
  
});

});