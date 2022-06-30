"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../../store/products/selectors");
var Buttons = function (_a) {
    var setItem = _a.setItem, menuItems = _a.menuItems;
    var productData = react_redux_1.useSelector(selectors_1.getProducts);
    var filterItem = function (curTag) {
        var newItem = productData.filter(function (newval) { return newval.tag === curTag; });
        setItem(newItem);
    };
    return (react_1["default"].createElement("div", { className: "scrolling-wrapper" },
        react_1["default"].createElement("button", { type: "button", className: "menu-item", onClick: function () { return setItem(productData); } }, "\u0412\u0441\u0435 \u0442\u043E\u0432\u0430\u0440\u044B"),
        menuItems.map(function (val) { return (react_1["default"].createElement("button", { type: "button", id: val, className: "menu-item", onClick: function () { return filterItem(val); } }, val)); })));
};
exports["default"] = Buttons;
