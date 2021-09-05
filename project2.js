function displayResults(data) {
	$("#resultThumb").attr("src", data.player[0].strThumb);
	$("#resultName").html(data.player[0].strPlayer);
	$("#resultTeam").html(data.player[0].strTeam);
	$("#resultDOB").html(data.player[0].dateBorn);
	$("#resultNationality").html(data.player[0].strNationality);
	$("#resultNumber").html(data.player[0].strNumber);
	$("#resultPosition").html(data.player[0].strPosition);
	$("#resultHeight").html(data.player[0].strHeight);
	$("#resultWeight").html(data.player[0].strWeight);
	$("#resultDesc").html(data.player[0].strDescriptionEN);
}

function submit() {
	let firstName = $("#firstName").val();
	let lastName = $("#lastName").val();
	
	let url = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=";
	let newurl = url + firstName + "%20" + lastName;
	$.get(newurl, function(data){
		
		if($("#firstName").val().length === 0 && $("#lastName").val().length > 0){
			alert("You didn't enter first name");
		} else if(firstName.length > 0 && lastName.length === 0){
			alert("You didn't enter last name");
		} else if(firstName.length === 0 && lastName.length === 0){
			alert("You didn't enter names into both boxes");
		}else {
			if(data.player !== null){
				$("#output").show();
				displayResults(data);
				
				if(data.player[0].strThumb === "" || data.player[0].strThumb === null){
					$("#resultThumb").attr("src", "https://iaaglobal.org/storage/bulk_images/no-image.png");
				}
				if(data.player[0].strPlayer === "" || data.player[0].strPlayer === null){
					document.getElementById("resultName").innerHTML = "No information available";
				}
				if(data.player[0].strTeam === "" || data.player[0].strTeam === null){
					document.getElementById("resultTeam").innerHTML = "No information available";
				}
				if(data.player[0].dateBorn === "" || data.player[0].dateBorn === null){
					document.getElementById("resultDOB").innerHTML = "No information available";
				}
				if(data.player[0].strNationality === "" || data.player[0].strNationality === null){
					document.getElementById("resultNationality").innerHTML = "No information available";
				}
				if(data.player[0].strNumber === "" || data.player[0].strNumber === null){
					document.getElementById("resultNumber").innerHTML = "No information available";
				}
				if(data.player[0].strPosition === "" || data.player[0].strPosition === null){
					document.getElementById("resultPosition").innerHTML = "No information available";
				}
				if(data.player[0].strHeight === "" || data.player[0].strHeight === null){
					document.getElementById("resultHeight" || data.player[0].strThumb === null).innerHTML = "No information available";
				}
				if(data.player[0].strWeight === "" || data.player[0].strWeight === null){
					document.getElementById("resultWeight").innerHTML = "No information available";
				}
				if(data.player[0].strDescriptionEN === "" || data.player[0].strDescriptionEN === null){
					document.getElementById("resultDesc").innerHTML = "No information available";
				}
			}
			
			if(data.player === null){
				alert("No such player");
			}
		}
	});
}





