  function configureSingleFieldAutoComplete(args) {
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
}

$(function() {
//    configureSingleFieldAutoComplete({
    ASNAHelper.ConfigureAutoComplete.forSingleField({
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
});


    //ASNAHelper.ConfigureAutoComplete.forSingleField({


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