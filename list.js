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
parser.on('data', console.log);
