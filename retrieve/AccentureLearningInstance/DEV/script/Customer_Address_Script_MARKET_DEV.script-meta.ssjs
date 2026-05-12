Platform.Load('Core', '1');

// Load from first data extension
var de1 = DataExtension.Init('Customer_Profile_MARKET_DEV');
var rows1 = de1.Rows.Retrieve();

// Load from second data extension
var de2 = DataExtension.Init('Customer_Messages_MARKET_DEV');
var rows2 = de2.Rows.Retrieve();

// Process records from first DE
for (var i = 0; i < rows1.length; i++) {
    var record1 = rows1[i];
    Write('Record 1: ' + record1['ColumnName']);
}

// Process records from second DE
for (var x = 0; x < rows2.length; x++) {
    var record2 = rows2[x];
    Write('Record 2: ' + record2['ColumnName']);
}
