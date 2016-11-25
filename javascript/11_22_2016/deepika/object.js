var a={
    studentname: 'Deepika',
	studentid:    001,
	ispresent:    false,
	issuspended:  null,
	
	b :{programname:'masters in IT',
	    courseID   :1143,
	c:{semester:'second  semester',
	   studentid:  111
	}
	}
	 
};
console.log(a);

//dot notation

a.b.programname='computerscience';
a.b.c.studentid=123;
console.log("After changing");
console.log(a.b.programname);
console.log(a.b.c.studentid);
console.log("To console the innerloop properties");
console.log(a.b.courseID);
console.log(a.ispresent);

//property notation
console.log("changing studentid using property notation");
a['studentid']=156;
console.log(a);
a[b[c['studentid']]]=234;
console.log(a);
console.log("Looping doesn't work in property notation");


	
	
	
	
	
	
    