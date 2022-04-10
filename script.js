var names=new Array();
names[0]="Rachid";
names[1]="Jamal";
names[2]="Jjada";
names[3]="rachid";
names[4]="Jihane";
names[5]="Fouzia";
names[6]="Jihane";



for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}