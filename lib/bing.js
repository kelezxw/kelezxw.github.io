/*
 * @Author: kele
 * @Date: 2023-07-14 18:15:29
 * @LastEditors: kele
 * @LastEditTime: 2023-07-14 20:28:51
 * @Description: 使用bing每日壁纸作为背景
 */
// 用fetch提示跨域问题，使用fetch-jsonp还是不行，bing做得好啊,暂时不搞了
function getBingImg() {
    try {
        fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
        .then(function(response) {
            return response.json()
        }).then(function(data) {
            var url = 'https://cn.bing.com' + data.images[0].url;
            document.getElementById('banner').style.backgroundImage = 'url(' + url + ')';
        })
    } catch (error) {
        console.log(error);
    }  
}
// getBingImg();