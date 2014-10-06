$(function() {
    ASNAHelper.RegisterAutoComplete.forField({
        labelTargetId: "textboxCustomerName",
        valueTargetId: "textboxCustomerNumber",
        library: "examples",
        file: "cmastnewL2",
        fieldsList: "cmname:label,cmcustno:value",
        rows: 12,
        qryfld1: "cmname",
        query: "CMNAME >= '{CMNAME}'",
        url: "/services/JsonAutoComplete.ashx",
        showLabelOnScroll: true
    });

    ASNAHelper.RegisterAutoComplete.forField({
        labelTargetId: "textboxState",
        valueTargetId: "textboxStateAbbrev",
        library: "devo",
        file: "States",
        fieldsList: "state:label,abbrev:value",
        rows: 12,
        qryfld1: "state",
        query: "STATE >= '{STATE}'",
        url: "/services/JsonAutoComplete.ashx",
        showLabelOnScroll: true,
        onSelect: function() {
            console.log("hola");
        }
    });

    ASNAHelper.RegisterAutoComplete.forField({
        labelTargetId: "textboxCounty",
        valueTargetId: "textboxCountyId",
        library: "devo",
        file: "county",
        fieldsList: "county:label,id:value,state",
        rows: 12,
        qryfld1: "county",
        qryfld2: "state",
        qryval2: "#textboxStateAbbrev",
        query: "STATE = '{STATE}' AND COUNTY >= '{COUNTY}'",
        url: "/services/JsonAutoComplete.ashx",
        showLabelOnScroll: true
    });
});


//  function configureSingleFieldAutoComplete(args) {
//    $("#" + args.labelTargetId).autocomplete({
//        source: function (req, add) {
//            var ajaxArgs = {
//                library: args.library,
//                file: args.file,
//                fieldsList: args.fieldsList,
//                rows: args.rows,
//                qryfld1: args.qryfld1,
//                qryval1: req.term,
//                query: args.query
//            };
//            var configArgs = {
//                url: args.url,
//                ownerId: this.element.context.id,
//                valueTargetId: args.valueTargetId,
//                labelTargetId: args.labelTargetId,
//                showLabelOnScroll: args.showLabelOnScroll
//            };
//            ASNAHelper.AutoComplete.source(req,add,ajaxArgs,configArgs);
//        },
//        select: function (e, ui) {
//            return ASNAHelper.AutoComplete.select(e, ui);
//        },
//        focus: function (e, ui) {
//            return ASNAHelper.AutoComplete.focus(e, ui);
//        }
//    });
//}



//$(function() {
//    $("#textboxCustomerName").autocomplete({
//        source: function (req, add) {
//            var ajaxArgs = {
//                library: "examples",
//                file: "cmastnewl2",
//                fieldsList: "cmname:label,cmcustno:value",
//                rows: 12,
//                qryfld1: "cmname",
//                qryval1: req.term,
//                query: "CMNAME >= '{CMNAME}'",
//            };
//            var configArgs = {
//                url: "/services/JsonAutoComplete.ashx",
//                ownerId: this.element.context.id,
//                valueTargetId: "textboxCustomerNumber",
//                labelTargetId: "textboxCustomerName",
//                showLabelOnScroll: true
//            };
//            ASNAHelper.AutoComplete.source(req,add,ajaxArgs,configArgs);
//        },
//        select: function (e, ui) {
//            return ASNAHelper.AutoComplete.select(e, ui);
//        },
//        focus: function (e, ui) {
//            return ASNAHelper.AutoComplete.focus(e, ui);
//        }
//    });
//});