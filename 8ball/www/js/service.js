angular.module('starter.service', [])






.factory('AwnserService', [function() {
    var awnsers = [{
    id: 1,
    awnser: 'it is certain',
  }, {
    id: 2,
    awnser: 'it is decidedly so',
  }, {
    id: 3,
    awnser: 'Without a doubt',
  }, {
    id: 4,
    awnser: 'Yes definitly',
  }, {
    id: 5,
    awnser: 'You may rely on it',
	}, {
    id: 6,
    awnser: 'As I see it, yes',
  }, {
    id: 7,
    awnser: 'Most likely',
	}, {
    id: 8,
    awnser: 'Outlook good',
  }, {
    id: 9,
    awnser: 'Yes',
	}, {
    id: 10,
    awnser: 'Most likely',
  }];
    return {
        getAllAwnsers: function() {
            return awnsers;
        },
        getAwnser: function(awnser_id) {
            return null;
        }
    }
}])
.factory('QuestionService', [function() {
    var questions = [
            {'id': 1, 'questions':
                        ["Will I cry",
                        "Will I see my family again"]},
            {'id': 2, 'questions': ["Will I pass",
                        "Will I be rich"]}
            ];
    return {
        getAllQuestions: function() {
            return questions;
        },
        getAllQuotesFromAwnser: function(awnser_id) {
            return null;
        }
    }
}]);
