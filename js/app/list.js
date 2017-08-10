mui.init({});
//initHelp();
var tapId = null;
//所有的方法都放到这里
mui.plusReady(function(){
	//获取列表
	initHelp();
});

function initHelp(){
	var data = [];
	if(data.length == 0){
		data.push(getItem(1,'事项5','待办事项5'));
		data.push(getItem(2,'事项4','待办事项4'));
		data.push(getItem(3,'事项3','待办事项3'));
		data.push(getItem(4,'事项2','待办事项2'));
		data.push(getItem(5,'事项1','待办事项1'));
		data.push(getItem(6,'功能8','退出程序'));
		data.push(getItem(7,'功能7','右滑菜单'));
		data.push(getItem(8,'功能6','左上角查看完成事项'));
		data.push(getItem(9,'功能5','右上角添加待办事项'));
		data.push(getItem(10,'功能4','长按代办事项可以删除'));
		data.push(getItem(11,'功能3','右滑待办事项可以完成'));
		data.push(getItem(12,'功能2','点击待办事项可以查看详情'));
		data.push(getItem(13,'功能1','首页显示待办事项列表'));
		localStorage.setItem('demo_list_data_1',JSON.stringify(data));
	}
	initList();
}

function getItem(index,title,content){
	var item = 
	{index:index,
	title:title,
	content:content,
	}
	return item;
}

function initList(){
	var $ul = $('#todolist').empty();
	var res = JSON.parse(localStorage.getItem('demo_list_data_1'));
	for (i = 0; i<res.length; i++) {
		$ul.append(genLi(res[i]));
	}
	showList($ul);
}

function genLi(data){
	var id = data.index;
	var title = data.title;
	var content = data.content;
	
	var li = '<li class="mui-table-view-cell" id="todoli_' + id + '" data-id="' + id + '">'
			+	'<div class="mui-slider-right mui-disabled">'
				+	'<a class="mui-btn mui-btn-red doneBtn">完成</a>' +
            '</div>' + 
            '<div class="mui-slider-handle">' + 
                '<div class="mui-media-body">' + 
                    title + 
                    '<p class="mui-ellipsis">'+content+'</p>' + 
                '</div>' + 
            '</div>' +
        '</li>';
         
    return li;
}
function showList(ul){
    if(ul.find('li').size() > 0 &&  ul.is(':hidden')) ul.show();    
}