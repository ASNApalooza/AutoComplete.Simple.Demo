<%@ Page Language="AVR" AutoEventWireup="false" CodeFile="AutoComplete.aspx.vr" Inherits="AutoComplete" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>

    <link rel="stylesheet" href="/public/vendor/jquery-ui/themes/smoothness/jquery-ui.min.css">

    <style>
        .md-width-input {
            width: 280px;
            font-size: 120%;
        }

        .ui-autocomplete-loading {
            background-image: url('public/images/concentric-spinner.gif');
            background-position: 98% 50%;
            background-repeat: no-repeat;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:TextBox ID="textboxCustomerName" runat="server" CssClass="md-width-input" ClientIDMode="Static"></asp:TextBox><br />
        <asp:TextBox ID="textboxCustomerNumber" runat="server" CssClass="md-width-input" ClientIDMode="Static"></asp:TextBox><br />
    </div>
    <script src="/public/vendor/jquery/dist/jquery.min.js"></script>
    <script src="/public/vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="/public/js/ASNAHelper.AutoComplete.js"></script>
    <script src="/public/js/jQueryAutoComplete.aspx.js"></script>
    </form>
</body>
</html>
