//Parse.initialize("3lJfd4T87rxDvs34BJcXEjO7tbJLAyQ4cN3XSwCv", "WInG2A7UMnpzeCH51SXB0pecsWWtmOKvjXyolLUm");
Parse.initialize("pWjQfjhLn7kxSAcHO9d6jJG4HrXUY3ReX3UHbB9p", "661vZQ7LlKp54vGwtqfctecsnteyRMD1hNhTfi28"); //Blinqz

directory.Company = Parse.Object.extend({ 
	className : "Company",
	initialize : function() { 
	}
});

directory.CompanyCollection = Parse.Collection.extend(({
	model: directory.Company,

	fetch : function(options){
		console.log('custom company fetch');
		if(options.data && options.data.name){
	            var nameQuery = new Parse.Query(directory.Company).contains("Name", options.data.name);
	            this.query = nameQuery;
		}
        	Parse.Collection.prototype.fetch.apply(this, arguments);
	}
}));

directory.Employee = Parse.Object.extend({

    className: "employees",

    initialize: function() {
        this.reports = new directory.ReportsCollection();
        this.reports.query = new Parse.Query(directory.Employee).equalTo("managerId", this.id);
    }

});

directory.EmployeeCollection = Parse.Collection.extend(({

    model: directory.Employee,

    fetch: function(options) {
        console.log('custom fetch');
        if (options.data && options.data.name) {
            var firstNameQuery = new Parse.Query(directory.Employee).contains("firstName", options.data.name);
            var lastNameQuery = new Parse.Query(directory.Employee).contains("lastName", options.data.name);
            this.query = Parse.Query.or(firstNameQuery, lastNameQuery);
        }
        Parse.Collection.prototype.fetch.apply(this, arguments);

    }

}));

directory.ReportsCollection = Parse.Collection.extend(({

    model: directory.Employee

}));
