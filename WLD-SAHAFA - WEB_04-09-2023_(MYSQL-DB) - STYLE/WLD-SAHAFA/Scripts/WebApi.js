$(document).ready(function () {
    var oldData = [];
    setInterval(function () {
        GetCounterDetails();
    }, 5000);

    function GetCounterDetails() {
        $.ajax({
            type: "POST",
            async: "false",
            url: "Webservice.asmx/GetDetails",
            data: JSON.stringify({ 'oldCounters': oldData }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                let result = data.d
                console.log(result);
                oldData = result.data;
                SetCounterDetails(result.data);
                SetLatestCounterDetails(result.latestCounter);
                speechEnglish(result.textEnglish);
                speechArabic(result.textArabic);
            }
        });
    }
});