"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-indent */
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var Logo_1 = require("./Logo");
var Header_module_scss_1 = require("./Header.module.scss");
var ModalBtn_1 = require("../ModalBtn");
var ProfileButton_1 = require("../ProfileButton");
var Index_1 = require("../DropDownProfileBtn/Index");
var CustomButton_1 = require("../CustomButton");
var selectors_1 = require("../../../store/auth/selectors");
var actions_1 = require("../../../store/search/actions");
var ShowSearchMobile_1 = require("./ShowSearchMobile");
var HideSearchMobile_1 = require("./HideSearchMobile");
var BurgerMenuIcon_1 = require("./BurgerMenuIcon");
var ProfileLockIcon_1 = require("../svg/ProfileLockIcon");
var Header = function () {
    var name = react_redux_1.useSelector(selectors_1.GetUserName);
    var navigate = react_router_dom_1.useNavigate();
    var dispatch = react_redux_1.useDispatch();
    // close/open search on mobile
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var showSearch = function () {
        setOpen(true);
    };
    var hideSearch = function () {
        setOpen(false);
    };
    var searchHandler = function (searchTerm) {
        dispatch(actions_1.SetSearchTermAction(searchTerm));
        navigate('/search');
        setOpen(false);
    };
    // Mobile Menu
    var _b = react_1.useState(false), openMenu = _b[0], setOpenMenu = _b[1];
    var showMenu = function () {
        setOpenMenu(true);
        document.body.style.overflow = 'hidden';
    };
    var hideMenu = function () {
        setOpenMenu(false);
        document.body.style.overflow = '';
    };
    return (react_1["default"].createElement("div", { className: Header_module_scss_1["default"].wrapper },
        react_1["default"].createElement("header", { className: Header_module_scss_1["default"].header },
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"].logo },
                react_1["default"].createElement(Logo_1["default"], null)),
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"].searchWrapper },
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"].search },
                    react_1["default"].createElement(antd_1.Input.Search, { onSearch: searchHandler, enterButton: "\u0418\u0441\u043A\u0430\u0442\u044C", allowClear: true, prefix: react_1["default"].createElement(icons_1.SearchOutlined, { style: {
                                opacity: '0.4',
                                fontSize: '24px'
                            } }) })),
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"].searchMobileIcon },
                    !open
                        ? react_1["default"].createElement(ShowSearchMobile_1["default"], { onClick: showSearch })
                        : react_1["default"].createElement(HideSearchMobile_1["default"], { onClick: hideSearch }),
                    open && react_1["default"].createElement(antd_1.Input.Search, { className: Header_module_scss_1["default"].searchMobile, onSearch: searchHandler, allowClear: true }))),
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"].button }, name ? (react_1["default"].createElement(react_router_dom_1.Link, { to: "edit-ad" },
                react_1["default"].createElement(CustomButton_1["default"], { onClick: function () { }, buttonStyle: "btn--accent", type: "button" }, "\u041F\u043E\u0434\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435"))) : react_1["default"].createElement(ModalBtn_1["default"], null)),
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"].profileLockIcon },
                react_1["default"].createElement(ProfileLockIcon_1["default"], null)),
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"].profileButton }, name ? react_1["default"].createElement(Index_1["default"], null) : react_1["default"].createElement(ProfileButton_1["default"], null, "\u0412\u043E\u0439\u0442\u0438")),
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"].burger },
                !openMenu
                    ? react_1["default"].createElement(BurgerMenuIcon_1["default"], { onClick: showMenu })
                    : react_1["default"].createElement(HideSearchMobile_1["default"], { onClick: hideMenu }),
                openMenu
                    && react_1["default"].createElement("div", { className: Header_module_scss_1["default"].MobileMenu },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "edit-ad" },
                            react_1["default"].createElement(CustomButton_1["default"], { onClick: function () { }, buttonStyle: "btn--accent", type: "button" }, "\u041F\u043E\u0434\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")),
                        react_1["default"].createElement("ul", { className: Header_module_scss_1["default"].list },
                            react_1["default"].createElement("li", { className: Header_module_scss_1["default"].listItem }, "\u0412\u0441\u044F \u043B\u0435\u043D\u0442\u0430"),
                            react_1["default"].createElement("li", { className: Header_module_scss_1["default"].listItem }, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438"),
                            react_1["default"].createElement("li", { className: Header_module_scss_1["default"].listItem }, "\u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B"),
                            react_1["default"].createElement("li", { className: Header_module_scss_1["default"].listItem }, "\u041C\u0435\u0431\u0435\u043B\u044C"),
                            react_1["default"].createElement("li", { className: Header_module_scss_1["default"].listItem }, "\u041E\u0434\u0435\u0436\u0434\u0430"),
                            react_1["default"].createElement("li", { className: Header_module_scss_1["default"].listItem }, "\u0421\u043F\u043E\u0440\u0442"),
                            react_1["default"].createElement("li", { className: Header_module_scss_1["default"].listItem }, "\u0422\u0435\u0445\u043D\u0438\u043A\u0430"),
                            react_1["default"].createElement("li", { className: Header_module_scss_1["default"].listItem }, "\u0422\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0430")))))));
};
exports["default"] = Header;
