 //右侧下拉框 
 $(function(){
 		 
    var util = {

        /***
         *     wrap           选项卡的最外层   
               eventType      选项卡的事件类型
               btnClass       选项卡的btn所需class名（必须这样写）
        **/  
    	tab:function(opts){
		 	var btn = opts.wrap.find('.js-tab-btn');
         	var content = opts.wrap.find('.js-tab-content');
	        btn.on(opts.eventType,function(){
	            btn.removeClass('active');
	            $(this).addClass('active');
	            content.removeClass('active');
	            var index = $(btn).index($(this));
	            content.eq(   index  ).addClass('active');
	        });
    	},

        btnClick:function(){
            $('.header-menu-title').on('click',function(){
                if($('#headMenuList').is(':visible')){
                    $('#headMenuList').hide();
                }else{
                    $('#headMenuList').show();
                }
            });   
        },

        init: function(){
            var that = this;
            that.tab({
                 wrap:$('.js-wrap'),
                 eventType:'click'
            });

            that.btnClick(); 

        }
    };

    util.init();
   



 });




