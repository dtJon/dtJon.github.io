directory.CompanyView = Backbone.View.extend({

    render: function () {
debugger;
        this.$el.html(this.template(this.model.attributes));
        $('#details', this.el).html(new directory.CompanySummaryView({model:this.model}).render().el);
/*        this.model.reports.fetch({
            success:function (data) {
                if (data.length == 0)
                    $('.no-reports').show();
            }
        });
        $('#reports', this.el).append(new directory.EmployeeListView({model:this.model.reports}).render().el);*/
        return this;
    }
});

directory.CompanySummaryView = Backbone.View.extend({

    initialize:function () {
        this.model.on("change", this.render, this);
    },

    render:function () {
debugger;
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});
