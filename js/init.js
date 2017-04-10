
	window.onload = init;
	     // 开始
	     // pageA
	function init(){
        	//开场音乐
	       	var audio1 = Hmlt5Audio(audioConfig.playURl);
	        audio1.end(function() {
	            Hmlt5Audio(audioConfig.cycleURL, true);
	        });
	        //小男孩开始走
        	var boy = BoyWalk();
            // 太阳公转
            $("#sun").addClass('rotation'); 
            // 飘云
            $(".cloud:first").addClass('cloud1Anim');
            $(".cloud:last").addClass('cloud2Anim'); 

            // 开始第一次走路
            // pageA
            boy.walkTo(5000, 0.6)
                .then(function() {
                    //第一次走路完成
                    //开始页面滚动
                    scrollTo(5000, 1);
                })
                .then(function() {
                    //第二次走
                    return boy.walkTo(5000, 0.5);
                })
                //pageB
                .then(function() {
                    //暂停走路
                    boy.stopWalk();
                })
                .then(function() {
                    //开门
                    return openDoor();
                })
                .then(function() {
                    //开灯
                    lamp.bright();
                })
                .then(function() {
                    //进商店
                    return boy.toShop(2000);
                })
                .then(function(){
                    // 取花
                    return boy.talkFlower();
                })
                .then(function(){
                    //飞鸟
                    bird.fly();
                })
                .then(function() {
                    //出商店
                    return boy.outShop(2000);
                })
                .then(function() {
                    //关门
                    return shutDoor();
                })
                .then(function() {
                    // 灯暗
                    lamp.dark();
                }) 
                //pageC               
                .then(function(){
           			return boy.walkTo(2000, 0.7);                	
                })
                .then(function(){
                    //开始页面滚动
                    scrollTo(5000, 2);                	
                })
                .then(function(){
					// 第一次走路到桥底边left,top
           			return boy.walkTo(5000, 0.15);                	
                })
                .then(function() {
                    // 第二次走路到桥上left,top
                    return boy.walkTo(1500, 0.25, (bridgeY - girl.getHeight()) / visualHeight);
                })
                .then(function() {
                    // 实际走路的比例
                    var proportionX = (girl.getOffset().left - boy.getWidth()) / visualWidth;
                    // 第三次桥上直走到小女孩面前
                    return boy.walkTo(2000, proportionX);
                }).then(function() {
                    // 图片还原原地停止状态
                    boy.resetOriginal();
                }).then(function(){
                    // 增加转身动作 
                setTimeout(function() {
                        girl.rotate();
                        boy.rotate(function() {
                            // 开始logo动画
                            logo.run();
                        });
                    }, 1000); 
                })
                .then(function(){
                	snowflake();
                })
        }

