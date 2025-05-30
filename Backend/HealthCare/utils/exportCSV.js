const { Parser } = require('json2csv');

exports.exportToCSV = (res, data, filename) => {
  const parser = new Parser();
  const csv = parser.parse(data);
  res.header('Content-Type', 'text/csv');
  res.attachment(`${filename}.csv`);
  return res.send(csv);
};
