/**
 * Created by Administrator on 2015/4/25.
 */
    //定义mydata数组 , 用来分段返回值.
var myData = [] ;
//存储数据 , 包括内容为标题 , 图片地址名, 和简介 .
var myDataStr = "1.1<br>\
<br>\
zz<br>\
<br>\
<br>\
2.2<br>\
<br>\
zz<br>\
<br>\
<br>\
3.3<br>\
<br>\
zz<br>\
<br>\
<br>\
4.4<br>\
<br>\
zz<br>\
<br>\
<br>\
5.5<br>\
<br>\
zz<br>\
<br>\
<br>\
6.6<br>\
<br>\
时间:2018-10-16<br>\
<br>\
<br>\
7.7<br>\
<br>\
上映<br>\
<br>\
8.8<br>\
<br>\
zz<br>\
<br>\
<br>\
9.9<br>\
<br>\
zz<br>\
<br>\
<br>\
10.10<br>\
<br>\
lqm<br>\
<br>\
<br>\
11.11<br>\
<br>\
时间:2018-10-16<br>\
"
//定义函数分割myData数据 , myData接收分好组的数据 :以三个连续的<br>\标记为分界

var d = myDataStr.split("<br><br><br>");   //以三个br分出不同大主题
for(var i=0 ;i< d.length;i++){
    var c = d[i].split("<br><br>");
    myData.push(
        {
            img:c[0].replace('.',"")+".jpg",
            caption:c[0].split('.')[1],
            desc:c[1]
        }
    )
}

