var serialPort = require("serialport");

serialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
    console.log(port.pnpId);
    console.log(port.manufacturer);
  });
});

var port = new serialPort('/dev/ttyAMA0', {
  baudRate: 57600
});

const Readline = serialPort.parsers.Readline;
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

serialPort.on("open", function (err) {
  if(err){
    console.log('error', 'serialPort.on("open" -> err');
    console.log('error', err.message);
//    winston.log('error', err);
  } else
  {
    console.log('open');
    console.info('serial port opened OK');

    parser.on('data', function(data) {
      console.log("parser.on('data'...");
      console.log(data);
    });
  }
});
