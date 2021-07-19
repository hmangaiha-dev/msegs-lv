(self["webpackChunk"] = self["webpackChunk"] || []).push([["Projectlist"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Projectlist.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Projectlist.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: null,
      projects: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("/api/projects/").then(function (response) {
      console.log(response.data);
      _this.projects = response.data;
    });
  },
  methods: {
    deleteProduct: function deleteProduct(id) {
      var _this2 = this;

      this.axios["delete"]("api/projects/".concat(id)).then(function (response) {
        var i = _this2.projects.map(function (data) {
          return data.id;
        }).indexOf(id);

        _this2.projects.splice(i, 1);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Projectlist.vue?vue&type=template&id=56a9c8c1":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Projectlist.vue?vue&type=template&id=56a9c8c1 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_webapp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/webapp.png */ "./resources/js/assets/webapp.png");


var _hoisted_1 = {
  "class": "flex-1 overflow-x-hidden overflow-y-auto bg-gray-200"
};
var _hoisted_2 = {
  "class": "container mx-auto px-6 py-8"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-gray-700 text-3xl font-medium"
}, "Dashboard", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "mt-4"
};
var _hoisted_5 = {
  "class": "flex flex-wrap -mx-6"
};
var _hoisted_6 = {
  "class": "w-full px-6 sm:w-1/2 xl:w-1/3"
};
var _hoisted_7 = {
  "class": "flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "p-3 rounded-full bg-indigo-600 bg-opacity-75",
  style: {
    "color": "white"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fas fa-project-diagram px-2"
})], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mx-5"
};
var _hoisted_10 = {
  "class": "text-2xl font-semibold text-gray-700"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-gray-500"
}, "Projects Added", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Project");

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "mt-8"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex flex-col mt-8"
};
var _hoisted_16 = {
  "class": "-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
};
var _hoisted_17 = {
  "class": "align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
};
var _hoisted_18 = {
  "class": "min-w-full"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
}, " Project"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
}, " Date/Sub-title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
}, " Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
}, " Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"px-6 py-3 border-b border-gray-200 bg-gray-50\">\r\n                        <router-link :to=\"{name: 'addproject'}\" class=\"text-indigo-600 hover:text-indigo-900 font-bold\">Add Project</router-link>\r\n\r\n\r\n                                            </th> ")])], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "px-6 py-4 whitespace-no-wrap border-b border-gray-200"
};
var _hoisted_21 = {
  "class": "flex items-center"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex-shrink-0 h-10 w-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "h-10 w-10 rounded-full",
  src: _assets_webapp_png__WEBPACK_IMPORTED_MODULE_1__.default,
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "ml-4"
};
var _hoisted_24 = {
  "class": "text-sm leading-5 font-medium text-gray-900"
};
var _hoisted_25 = {
  "class": "text-sm leading-5 text-gray-500"
};
var _hoisted_26 = {
  "class": "px-6 py-4 whitespace-no-wrap border-b border-gray-200"
};
var _hoisted_27 = {
  "class": "text-sm leading-5 text-gray-900"
};
var _hoisted_28 = {
  "class": "text-sm leading-5 text-gray-500"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "px-6 py-4 whitespace-no-wrap border-b border-gray-200"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
}, "Active")], -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.projects.length), 1
  /* TEXT */
  ), _hoisted_11])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'addproject'
    },
    "class": "text-indigo-600 hover:text-indigo-900 font-bold"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("     \r\n                            <div class=\"w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0\">\r\n                                <div class=\"flex items-center px-5 py-6 shadow-sm rounded-md bg-white\">\r\n                                    <div class=\"p-3 rounded-full bg-orange-600 bg-opacity-75\">\r\n                                        <svg class=\"h-8 w-8 text-white\" viewBox=\"0 0 28 28\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z\"\r\n                                                fill=\"currentColor\"></path>\r\n                                            <path\r\n                                                d=\"M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z\"\r\n                                                fill=\"currentColor\"></path>\r\n                                            <path\r\n                                                d=\"M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z\"\r\n                                                fill=\"currentColor\"></path>\r\n                                        </svg>\r\n                                    </div>\r\n    \r\n                                    <div class=\"mx-5\">\r\n                                        <h4 class=\"text-2xl font-semibold text-gray-700\">20</h4>\r\n                                        <div class=\"text-gray-500\">Incomplete</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div class=\"w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0\">\r\n                                <div class=\"flex items-center px-5 py-6 shadow-sm rounded-md bg-white\">\r\n                                    <div class=\"p-3 rounded-full bg-pink-600 bg-opacity-75\">\r\n                                        <svg class=\"h-8 w-8 text-white\" viewBox=\"0 0 28 28\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z\" fill=\"currentColor\"\r\n                                                stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path>\r\n                                            <path\r\n                                                d=\"M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z\"\r\n                                                stroke=\"currentColor\" stroke-width=\"2\"></path>\r\n                                        </svg>\r\n                                    </div>\r\n    \r\n                                    <div class=\"mx-5\">\r\n                                        <h4 class=\"text-2xl font-semibold text-gray-700\">21</h4>\r\n                                        <div class=\"text-gray-500\">Enquiries</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div> ")])]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" tables "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_18, [_hoisted_19, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.projects, function (project) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tbody", {
      "class": "bg-white",
      key: project.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(project.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(project.id), 1
    /* TEXT */
    )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(project.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(project.subtitle), 1
    /* TEXT */
    )]), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td\r\n                                                class=\"px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500\">\r\n                                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'projectsupdate',
        params: {
          id: project.id
        }
      },
      "class": "text-indigo-600 hover:text-indigo-900 font-bold"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_31];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      "class": "text-red-600  ",
      onClick: function onClick($event) {
        return $options.deleteProduct(project.id);
      }
    }, "Delete ", 8
    /* PROPS */
    , ["onClick"])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])]);
}

/***/ }),

/***/ "./resources/js/assets/webapp.png":
/*!****************************************!*\
  !*** ./resources/js/assets/webapp.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/webapp.png?9a0fc7d24287becfb0b00c378b3bf5e7");

/***/ }),

/***/ "./resources/js/components/Dashboard/Projectlist.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Dashboard/Projectlist.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projectlist_vue_vue_type_template_id_56a9c8c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projectlist.vue?vue&type=template&id=56a9c8c1 */ "./resources/js/components/Dashboard/Projectlist.vue?vue&type=template&id=56a9c8c1");
/* harmony import */ var _Projectlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projectlist.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard/Projectlist.vue?vue&type=script&lang=js");



_Projectlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Projectlist_vue_vue_type_template_id_56a9c8c1__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Projectlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Dashboard/Projectlist.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Projectlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Dashboard/Projectlist.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Projectlist.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projectlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projectlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projectlist.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Projectlist.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Dashboard/Projectlist.vue?vue&type=template&id=56a9c8c1":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Projectlist.vue?vue&type=template&id=56a9c8c1 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projectlist_vue_vue_type_template_id_56a9c8c1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projectlist_vue_vue_type_template_id_56a9c8c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projectlist.vue?vue&type=template&id=56a9c8c1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Projectlist.vue?vue&type=template&id=56a9c8c1");


/***/ })

}]);