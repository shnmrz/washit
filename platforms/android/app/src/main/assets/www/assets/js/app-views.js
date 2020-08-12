$( ()=> {

	

	// Fade in - out of updated container
	var transEffect = Barba.BaseTransition.extend({
	    start: function(){
	      this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
	    },
	    fadeInNewcontent: function(nc) {
	      nc.hide();
	      var _this = this;
	      $(this.oldContainer).fadeOut(200).promise().done(() => {
	        nc.css('visibility','visible');
	        nc.fadeIn(0, function(){
	          _this.done();
	        })
	      });
	    }
	});

	// Trigger fade in - out
	Barba.Pjax.getTransition = function() {
	  return transEffect;
	}


	// Hompage index.html
	var Info_page = Barba.BaseView.extend({
		namespace: 'student-info',

		onEnter: function(){
			M.AutoInit();
			check_auth();
			get_avatar();
		},

		onEnterCompleted: function() {
			get_information();
		}

	});

	var Acad_page = Barba.BaseView.extend({
		namespace: 'student-acad',

		onEnter: function(){
			M.AutoInit();
			check_auth();
			get_avatar();
		},

		onEnterCompleted: function() {

		}

	});

	var Curriculum_page = Barba.BaseView.extend({
		namespace: 'student-cur',

		onEnter: function(){
			M.AutoInit();
			check_auth();
			get_avatar();
		},

		onEnterCompleted: function() {
			curr_focus();
			var param = get_url('sem') || '';
			get_curriculum(param);
		}

	});

	var Event_page = Barba.BaseView.extend({
		namespace: 'student-events',

		onEnter: function(){
			M.AutoInit();
			check_auth();
			get_avatar();
		},

		onEnterCompleted: function() {
			var param = get_url('event_id') || '';
			get_events(param);
		}

	});

	var Setting_page = Barba.BaseView.extend({
		namespace: 'student-settings',

		onEnter: function(){
			M.AutoInit();
			check_auth();
			get_avatar();
		},

		onEnterCompleted: function() {
			var elem = document.querySelector('.tabs'); var instance = M.Tabs.init(elem);
		}

	});


	var Admin_dashboard = Barba.BaseView.extend({
		namespace: 'admin-dashboard',

		onEnter: function(){
			M.AutoInit();
		},

		onEnterCompleted: function() {
			var elem = document.querySelector('.tabs'); var instance = M.Tabs.init(elem);
		}

	});



	// Barba View Extend Trigger
	Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, html) {
		Info_page.init();
		Acad_page.init();
		Curriculum_page.init();
		Event_page.init();
		Setting_page.init();
		Admin_dashboard.init();

		change_active(currentStatus);

	});

	

	// Trigger barba
	Barba.Prefetch.init();
	Barba.Pjax.start();

});