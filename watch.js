const runAll = require("npm-run-all");

runAll(["css", "live", "babel"], {
      parallel: true,
      printName: true,
      aggregateOutput: true
    })
    .then((results) => {
        console.log(`${results[0].name}: қатесіз ${results[0].code}`);
        console.log(`${results[1].name}: қатесіз ${results[1].code}`);
        console.log(`${results[1].name}: қатесіз ${results[1].code}`);
    })
    .catch(err => {
        console.log("failed!");
        console.error(err.message);
        console.log(err.stack);
    });
