var ASNAHelper = ASNAHelper || {};

ASNAHelper.AutoComplete = function () {

    var url = null;
    var ownerId = null;
    var valueTargetId = null;
    var labelTargetId = null;
    var showLabelOnScroll = null;

    function source(req,add,ajaxArgs,configArgs) {
        var url = configArgs.url;
        this.ownerId = configArgs.ownerId;
        if (configArgs.hasOwnProperty("valueTargetId")) this.valueTargetId = configArgs.valueTargetId;
        if (configArgs.hasOwnProperty("labelTargetId")) this.labelTargetId = configArgs.labelTargetId;
        if (configArgs.hasOwnProperty("showLabelOnScroll")) this.showLabelOnScroll = configArgs.showLabelOnScroll;

        $(".my-ui-icon-alert").removeClass("my-ui-icon-alert");

        var queryString = $.param(ajaxArgs);
        var fullUrl = url + "?" + queryString;
        var promise = $.getJSON(fullUrl)
        .done(function (data) {
            if (data.list) {
                if (data.list.length > 0) {
                    add(data.list);
                } else {
                    $(".ui-autocomplete-loading").addClass("my-ui-icon-alert");
                }
            }
            else if (data.error) {
                var x = data;
            }
        })
        .fail(function (jqXHR,textStatus,errorThrown) {
            console.log("error");
            console.log("error " + textStatus);
            console.log("incoming Text " + jqXHR.responseText);
        })
        .always(function() {
            $(".ui-autocomplete-loading").removeClass("ui-autocomplete-loading");
        });
    }

    function select(e,ui) {
        var result = true;
        if (this.valueTargetId) {
            $("#" + this.valueTargetId).text(ui.item.value);
            $("#" + this.valueTargetId).val(ui.item.value);
        }
        if (this.labelTargetId) {
            $("#" + this.labelTargetId).val(ui.item.label);
            result = this.labelTargetId !== this.ownerId;
        }
    
        return result;
    }

    function focus(e,ui) {
        var result = true;
        if (this.showLabelOnScroll) {
            $("#" + this.labelTargetId).val(ui.item.label);            
            result = false;
        }
        return result;
    }

    return  {
        source: source,
        select: select,
        focus: focus
    };
}();

ASNAHelper.ConfigureAutoComplete = function() {
    function forSingleField(args) {
        $("#" + args.labelTargetId).autocomplete({
             source: function (req, add) {
                var ajaxArgs = {
                    library: args.library,
                    file: args.file,
                    fieldsList: args.fieldsList,
                    rows: args.rows,
                    qryfld1: args.qryfld1,
                    qryval1: req.term,
                    query: args.query
                };
                var configArgs = {
                    url: args.url,
                    ownerId: this.element.context.id,
                    valueTargetId: args.valueTargetId,
                    labelTargetId: args.labelTargetId,
                    showLabelOnScroll: args.showLabelOnScroll
                };
                ASNAHelper.AutoComplete.source(req,add,ajaxArgs,configArgs);
            },
            select: function (e, ui) {
                return ASNAHelper.AutoComplete.select(e, ui);
            },
            focus: function (e, ui) {
                return ASNAHelper.AutoComplete.focus(e, ui);
            }
        });
    };

    return {
        forSingleField: forSingleField
    }
}();
