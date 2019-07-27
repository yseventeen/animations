$(function () {
    const str = $('.m-part1-p').html();
    console.log('str',str);
    const x = $('.m-part1-p').html('');
    console.log('x',x);
    let index = 0;

    $('.m-part1').animate({'width':300},2000,function () {
        // $('.m-part1-p').animate({'opacity':1},2000)
        // 实现打字效果
        var timer = setInterval(function() {
            //substr(index, 1) 方法在字符串中抽取从index下标开始的一个的字符
            var current = str.substr(index, 1);

            if (current == '<') {
                //indexOf() 方法返回">"在字符串中首次出现的位置。
                index = str.indexOf('>', index) + 1;
            } else {
                index++;
            }
            //console.log(["0到index下标下的字符",str.substring(0, index)],["符号",index & 1 ? '_': '']);
            //substring() 方法用于提取字符串中介于两个指定下标之间的字符
            // & 与运算 各个位分别相与，同时为1才得1。只要一个为0就得0
            $('.m-part1-p').html(str.substring(0, index) + (index & 1 ? '_' : ''));
            console.log('index ',index);
            // console.log(index & 1);
            console.log(('str',str.substring(0, index) + (index & 1 ? '_' : '')));
            index > $('.m-part1-p').html().length + 10 && (index = 0);
            // console.log($('.m-part1-p').html().length)
            // console.log(index);
            if(index >= str.length){
                clearInterval(timer);
            }
        }, 100);

    });
});