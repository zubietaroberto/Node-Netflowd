require("NetFlowPacket");

var netflow=function(callback){
var dgram=require("dgram");
var server = dgram.createSocket("udp4");

server.on("message", function (mesg, rinfo) {
    x=new NetFlowPacket(mesg);
    try{
      callback(null, x);
       }
    catch(err){
      callback(error,null);
    }
   // console.log(x);
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " +
      address.address + ":" + address.port);
});

this.listen=function(port){server.bind(port)};
}
