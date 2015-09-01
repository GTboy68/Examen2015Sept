angular.module('starter.controller', [])

.controller('indexController', function ($scope, $ionicModal, AwnserService, QuestionService, $rootScope) {
    $scope.awnsers = AwnserService.getAllAwnsers();
    $scope.questions = QuestionService.getAllQuestions();

	
   /*for (i = 0; i < $scope.authors.length; i++) {
        for (j = 0; j < $scope.quotes.length; j++) {
            if (i == j) {
                $scope.authors[i].quotes = $scope.quotes[j].quotes;
            }
        }
    }*/

    $ionicModal.fromTemplateUrl('modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function(awnser_id) {
        $scope.awnser = $scope.awnsers[awnser_id];
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
	
	$scope.giveRandomAwnser = function(question) {
		var found = false;
		for (i = 0; i < $scope.questions.length; i++) {
			if(question == $scope.questions[i].question){
				alert($scope.awnsers[i].awnser); 
				found = true;
			}
        }
		
		if(found == false){
			var random = Math.floor((Math.random() * 6) + 1);			
			alert($scope.awnsers[random].awnser);  
			
			
		}
			        
    };

    $scope.addQuestion = function(newQuestion) {
        if (newQuestion != undefined) {
            if ($scope.awnsers[$scope.awnser.id].questions.indexOf(newQuestion) == -1) {
                $scope.awnsers[$scope.awnser.id].questions.push(newQuestion);
                $scope.awnser = $scope.awnsers[$scope.awnser.id];
            }
            else {
                alert('This quote has already been assigned to this author');
            }
        }
        //$scope.closeModal();
    };
})
.controller('authorController', function ($scope) {})
