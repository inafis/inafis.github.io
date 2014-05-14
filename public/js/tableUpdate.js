//Update the User Data Request Table
$(document).ready(function(){
	var myUrl = "http://localhost:3000/api/requests"
	$.get( myUrl, {
		format:"json"
	})
	.done(function(data){
		$(jQuery.parseJSON(JSON.stringify(data))).each(function(){
			var period = this.PeriodEnding;
			var country = this.Country;
			var terrCode = this.CLDRTerritoryCode;
			var legalProc = this.LegalProcess;
			var usrDataReq = this.UserDataRequests;
			var percentReq = this.PercentageRequestsDataProduced;
			var userSpec = this.UsersSpecified;


			$("#tableData").append("<tr>");
			$("#tableData").append("<td>"+period);
			$("#tableData").append("<td>"+country);
			$("#tableData").append("<td>"+terrCode);
			$("#tableData").append("<td>"+legalProc);
			$("#tableData").append("<td>"+usrDataReq);
			$("#tableData").append("<td>"+percentReq+"%");
			$("#tableData").append("<td>"+userSpec);

		})	

	})
})