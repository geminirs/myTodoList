// 定义了一个module
angular.module('todo',['ionic'])

// 定义projects facotry，
// - saving / loading projects from local storage
// - save and load the last active project index
.facotry('Projects', function(){
	return {
		all: function(){},
		save: function(projects){},
		newProject: function(projectTitle){},
		getLastActiveIndex: function(){},
		setLastActiveIndex: function(index){}
	}
})

// 定义了一个叫做 ToDoListCtrl 的controller
.controller('TodoCtrl', function($scope, $ionicModal){
	// 定义一个$scope来携带ToDo List的条目
	$scope.tasks = [{ 		//声明一个$scope变量
		title: 'Ionic Style 定制',
		status: 'doing'
	},	{ 
		title: 'Mobile Grids',
		status: 'todo'
	},	{ 
		title: 'Mobile 次级页面导航逻辑',
		status: 'todo'
	}]

	// create and load the modal
	$ionicModal.fromTemplateUrl('new-task.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal){
		$scope.taskModal = modal;
	})

	// called when the form is submitted
	$scope.createTask = function(task){
		$scope.tasks.push({
			title: task.title
		});
		$scope.taskModal.hide();
		task.title = '';
	}

	// open our new task modal
	$scope.newTask = function(){
		$scope.taskModal.show();
	}

	// close the new task modal
	$scope.closeNewTask = function(){
		$scope.taskModal.hide();
	}

	

});