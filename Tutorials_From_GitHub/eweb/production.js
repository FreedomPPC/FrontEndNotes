var express = require('express')
var path = require("path");
var port = 8080

var app = express()

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', function (request, response){

    if(request.url.indexOf("test") != -1) {
      response.json({
          code: 0,
          msg:"获取成功",
          data:[
            {"_id":"5795a1bb5dc803c328a75ca2"+JSON.stringify(request.query),"providerName":"杭州谷鼎暖通设备有限公司","detailAddresses":"江干区三新北路中豪湘座A座403室","areaCaption":"杭州","contact":"朱寿","phone":"13989803757","areaId":"57958812515c79f1296c2556","catery":"采暖系列"},
            {"_id":"5795a1bb5dc803c328a75ca3"+JSON.stringify(request.query),"providerName":"杭州赛洋环保工程有限公司","detailAddresses":"萧山区工人路恒隆广场B座1109","areaCaption":"杭州","contact":"吴进","phone":"13968133336","areaId":"57958812515c79f1296c2556","catery":"采暖系列"},
            {"_id":"5795a1bb5dc803c328a75ca4"+JSON.stringify(request.query),"providerName":"杭州奥盛环境设备工程有限公司","detailAddresses":"杭州滨江滨盛路1509号恒天大厦1302室","areaCaption":"杭州","contact":"孟国富","phone":"13336057073","areaId":"57958812515c79f1296c2556","catery":"采暖系列"},
            {"_id":"5795a1bb5dc803c328a75ca5"+JSON.stringify(request.query),"providerName":"杭州筑家暖通设备有限公司","detailAddresses":"滨江区寰宇路寰宇天下11幢105商铺","areaCaption":"杭州","contact":"郑道夫","phone":"13819162902","areaId":"57958812515c79f1296c2556","catery":"采暖系列"},
            {"_id":"5795a1bb5dc803c328a75ca6"+JSON.stringify(request.query),"providerName":"杭州杭悦暖通设备有限公司","detailAddresses":"杭州江干区银沙路智格新城大厦A座1201室","areaCaption":"杭州","contact":"徐立斌","phone":"13735405285","areaId":"57958812515c79f1296c2556","catery":"采暖系列"},
            {"_id":"5795a1bb5dc803c328a75ca7"+JSON.stringify(request.query),"providerName":"杭州绿怡暖通设备有限公司","detailAddresses":"滨江区江虹路611号上峰电商产业园413室","areaCaption":"杭州","contact":"徐松兴","phone":"13777423408","areaId":"57958812515c79f1296c2556","catery":"采暖系列"},
            {"_id":"5795a1bb5dc803c328a75ca8"+JSON.stringify(request.query),"providerName":"杭州森澜环境科技有限公司","detailAddresses":"杭州市滨盛路3175号第六空间C1-14B","areaCaption":"杭州","contact":"陈建忠","phone":"13805725397","areaId":"57958812515c79f1296c2556","catery":"采暖系列"}
          ]
      })
    }
    else if(request.url.indexOf(".") == -1)   response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
