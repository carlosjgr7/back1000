"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious_1 = require("tedious");
/*const connection = new Connection({
    server: '10.198.72.31',
    authentication: {
        type: 'default',
        options: {
            userName: 'amendoza',
            password: 'Am1523246.',
        },
    },
    options: {
        port: 1433,
        database: 'milpagos',
        trustServerCertificate: true,
    },
});

*/
const connection = new tedious_1.Connection({
    server: '(localdb)\\CJGR7',
    authentication: {
        type: 'default',
        options: {
            userName: 'carlosjgr7',
            password: '753951javi',
        },
    },
    options: {
        port: 1433,
        database: 'test',
    },
});
connection.on('connect', (err) => {
    if (err) {
        console.log('Connection Failed');
        throw err;
    }
    else {
        console.log('DBconection OK');
    }
    // executeStatement();
});
connection.connect();
const executeStatement = () => {
    const request = new tedious_1.Request("select 42, 'hello world'", (err, rowCount) => {
        if (err)
            throw err;
        //
        console.log('DONE!');
        connection.close();
    });
    // Emits a 'DoneInProc' event when completed.
    request.on('row', (columns) => {
        columns.forEach((column) => {
            if (column.value === null) {
                console.log('NULL');
            }
            else {
                console.log(column.value);
            }
        });
    });
    // In SQL Server 2000 you may need: connection.execSqlBatch(request);
    connection.execSql(request);
};
//# sourceMappingURL=index.js.map