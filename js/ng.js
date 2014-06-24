angular
	.module("onePage", ["ngCookies"/* ,"ngRoute" */])
	.controller("langCtrl", function langCtrl($scope, $cookies) 
		{		
			$scope.library = function(state) {
			if(state==="english") {
			// intro 
			$scope.welcome = "Welcome"
			$scope.lang = "En";
			$scope.dimsum = "DIM SUM";
			$scope.seafood = "SEAFOOD";
			$scope.poultry = "POULTRY";
			$scope.banquet = "BANQUET";
			$scope.map = "Direction";
			$scope.tel = "Telephone";
			// menu
			$scope.menu = "MENU"
			$scope.home = "HOME";
			$scope.rsvp = "RSVP";
			$scope.takeout = "TAKEOUT";
			$scope.takeoutSmall = "ORDER ONLINE";
			$scope.dinner = "DINNER";
			$scope.contact = "CONTACT US";
			$scope.rsvpSmall = "FOR 10+ GUESTS ONLY";
			// 
			} else {
			$scope.welcome = "歡迎光臨"
			$scope.lang = "中";
			$scope.dimsum = "港式點心";
			$scope.seafood = "生猛海味";
			$scope.poultry = "山珍野味";
			$scope.banquet = "豪華宴席";
			$scope.map = "豪庭地圖";
			$scope.tel = "豪庭電話";
			// menu
			$scope.home = "一覽";
			$scope.home = "主頁";
			$scope.rsvp = "定席";
			$scope.takeout = "外賣";
			$scope.takeoutSmall = "網上訂餐";
			$scope.dinner = "晚餐";
			$scope.contact = "聯絡我們";
			$scope.rsvpSmall = "限十人以上";
			}
		}
			
			if(!$cookies.langCookies) {
					$cookies.langCookies = "english"
					$scope.library("english");
			} else {
				if($cookies.langCookies === "english") {
					$scope.library("english");
				} else if($cookies.langCookies === "chinese") {
					$scope.library("chinese");
				}
			}
			$scope.changeLang = function(state) {
				if(!state) {
					if($cookies.langCookies === "english"
					) {
						$cookies.langCookies = "chinese";
						$scope.library("chinese");
					} else if($cookies.langCookies === "chinese"
					) {
						$cookies.langCookies = "english";
						$scope.library("english");
					}
				} else {
					$cookies.langCookies === state;
					$scope.library(state);
				}
			}	
	});/*

	 .controller('routeCtrl', function($scope, $route, $routeParams, $location,$cookies) {
     	$scope.$route = $route;
	 	$scope.$location = $location;
	 	$scope.$routeParams = $routeParams;
	 	$scope.params = $routeParams;
	 	$scope.$on('$viewContentLoaded', function()
	 	{
        	page(winHight, winWidth); 		
			introAnimation();	
			slideNav(winHight, winWidth);		
			
			if($scope.params.setLang==="en") {
				langCtrl.changLang;
		} 
				
		});
	 })
	 .config(function($routeProvider, $locationProvider) {
		 $routeProvider
		 	.when("/go",
		 		{
		 			templateUrl:"restOfstuff.html",
		 			controller:"routeCtrl"
		 		}
		 	)
		 	.when("/",
		 		{
		 			templateUrl:"html/intro.html",
		 			controller:"routeCtrl"
		 		}
		 	)
		 	.when("/:setLang/dimsum/",
		 		{
		 			templateUrl:"html/dimsum.html",
		 			controller:"routeCtrl"
		 		}
		 	)
	})
	.controller('pageCtrl', function($scope, $cookies) {
		$scope.next = function(lang, destination) {
			
		}
	})
*/
	

 
	
 