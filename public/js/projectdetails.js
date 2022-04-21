(self["webpackChunk"] = self["webpackChunk"] || []).push([["projectdetails"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: '',
      title: '',
      subtitle: '',
      imagepath: '',
      contents: '',
      client: '',
      hostedat: '',
      developedby: '',
      goals: '',
      bannerpath: ''
    };
  },
  created: function created() {
    var _this = this;

    this.id = this.$route.params.id;
    console.log("ID", this.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/projects/' + this.id).then(function (response) {
      console.log("DATA", response.data);
      _this.title = response.data.title;
      _this.subtitle = response.data.subtitle;
      _this.imagepath = response.data.imagepath;
      _this.bannerpath = response.data.bannerpath;
      _this.contents = response.data.contents;
      _this.client = response.data.client;
      _this.hostedat = response.data.hostedat;
      _this.developedby = response.data.developedby;
      _this.goals = response.data.goals;
    });
  },
  mounted: function mounted() {
    window.scrollTo(0, 0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=template&id=5c8353a3":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=template&id=5c8353a3 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_webapp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/webapp.png */ "./resources/js/assets/webapp.png");


var _hoisted_1 = {
  style: {
    "margin-top": "-1rem"
  }
};
var _hoisted_2 = {
  "class": "details"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "headings ",
  style: {
    "margin": "auto"
  }
}, "Project Details", -1
/* HOISTED */
);

var _hoisted_4 = {
  style: {
    "color": "#707070",
    "font-size": "12px"
  }
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Projects");

var _hoisted_6 = {
  "class": "projectcontainer"
};
var _hoisted_7 = {
  "class": "detailsrows"
};
var _hoisted_8 = {
  "class": "col1"
};
var _hoisted_9 = {
  "class": "detailscard"
};
var _hoisted_10 = {
  "class": "detailstitle"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr", {
  style: {
    "opacity": "20%"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "detailscardcontainer"
};
var _hoisted_13 = {
  "class": "detailscardrows"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcol1"
}, " Client ", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "detailscardcol2"
};
var _hoisted_16 = {
  "class": "detailscardrows"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcol1"
}, " Hosted at ", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "detailscardcol2"
};
var _hoisted_19 = {
  "class": "detailscardrows"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcol1"
}, " Developed by ", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "detailscardcol2"
};
var _hoisted_22 = {
  "class": "detailscardrows"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcol1"
}, " Goals ", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "detailscardcol2"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr", {
  style: {
    "opacity": "20%"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcontainer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardrows"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcol1"
}, " Products "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcol2"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardrows"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcol1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _assets_webapp_png__WEBPACK_IMPORTED_MODULE_1__.default,
  alt: "",
  srcset: "",
  "class": "detailscardcol1image"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "detailscardcol2"
}, " Web application ")])], -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "col2"
};
var _hoisted_28 = {
  "class": "col2contents"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/projects",
    style: {
      "text-decoration": "underline",
      "color": "#707070"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1
  /* TEXT */
  ), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ///// "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.client), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \\\\\\\\\\\\ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.hostedat), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \\\\\\\\\\ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ///// "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.developedby), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \\\\\\\\\\\\ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ///// "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.goals), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \\\\\\\\\\\\ ")]), _hoisted_25, _hoisted_26])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: '..' + $data.bannerpath,
    alt: "",
    srcset: "",
    "class": "col2image"
  }, null, 8
  /* PROPS */
  , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p class=\"col2heading\">\n           {{subtitle}}\n          </p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
    innerHTML: $data.contents
  }, null, 8
  /* PROPS */
  , ["innerHTML"])])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".projectcontainer {\n  margin: 0 16vw 0px 16vw;\n}\n.details {\n  background-color: #ececec;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 3rem 0 3rem 0;\n}\n.detailsrows {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n.col1 {\n  width: 30%;\n}\n.detailscard {\n  margin-top: 1rem;\n  width: 100%;\n  border: 1px solid #E4E5E6;\n  border-radius: 5px;\n}\n.detailstitle {\n  padding: 1rem 0.5rem 1rem 0.5rem;\n  text-align: center;\n  font-family: Poppins;\n  color: #0a2458;\n  font-weight: bold;\n  font-size: 20px;\n}\n.detailscardcontainer {\n  padding: 1rem;\n}\n.detailscardrows {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  padding: 0.5rem 0 0.1rem 0;\n}\n.detailscardcol1 {\n  width: 30%;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.56;\n  letter-spacing: normal;\n  text-align: left;\n  color: #2c3134;\n}\n.detailscardcol2 {\n  width: 70%;\n  padding-left: 14px;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.56;\n  letter-spacing: normal;\n  text-align: left;\n  color: #76838f;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.col2 {\n  width: 70%;\n  padding: 1rem 1rem 1rem 2rem;\n}\n.col2image {\n  width: 100%;\n  border-radius: 0px;\n}\n.col2heading {\n  font-family: 'Playfair Display';\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.6;\n  letter-spacing: normal;\n  text-align: left;\n  color: #393939;\n  padding-top: 16px;\n}\n.col2contents {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.56;\n  letter-spacing: normal;\n  text-align: left;\n  color: #393939;\n}\n.col2contents > span:nth-child(n) > h2:nth-child(n) {\n  font-size: 25px;\n  font-family: 'Playfair Display';\n  line-height: 1.2;\n  padding-top: 20px;\n  padding-bottom: 16px;\n}\n.col2contents > span:nth-child(n) > h4:nth-child(n) {\n  font-size: 25px;\n  font-family: 'Playfair Display';\n  color: #393939;\n  font-weight: normal;\n  padding: 28px 0 16px 0;\n}\n.col2contents > span:nth-child(n) > p:nth-child(n) {\n  font-size: 16px;\n  font-family: 'Poppins';\n  color: #393939;\n  font-weight: normal;\n  word-wrap: break-word;\n}\n.col2contents > span:nth-child(1) > p:nth-child(n) > img:nth-child(n) {\n  max-width: 100%;\n}\n.col2contents > span:nth-child(n) > ul:nth-child(n) > li:nth-child(n) {\n  margin-left: 0;\n  padding-left: 0;\n  line-height: 1.88;\n  font-size: 16px;\n  font-family: 'Poppins';\n  color: #393939;\n  font-weight: normal;\n}\n.col2contents > span:nth-child(n) > ul:nth-child(n) {\n  margin-left: 1rem;\n  padding-left: 0;\n  line-height: 1.88;\n}\n@media screen and (max-width: 800px) {\n.projectcontainer {\n    margin: 0 4vw 0 4vw;\n}\n.detailsrows {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n.col1 {\n    width: 100%;\n}\n.detailscard {\n    width: 100%;\n    box-shadow: 1px 1px 4px grey;\n    border-radius: 5px;\n}\n.detailstitle {\n    padding: 1rem 0 1rem 0;\n    text-align: center;\n    font-family: Poppins;\n    color: #0a2458;\n    font-weight: bold;\n    font-size: 20px;\n}\n.detailscardcontainer {\n    padding: 1rem;\n}\n.detailscardrows {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    padding: 0.5rem 0 0.1rem 0;\n}\n.detailscardcol1 {\n    width: 30%;\n    font-family: Poppins;\n    font-size: 14px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: left;\n    color: #2c3134;\n}\n.detailscardcol2 {\n    width: 70%;\n    padding-left: 14px;\n    font-family: Poppins;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: left;\n    color: #76838f;\n}\n.col2 {\n    width: 100%;\n    padding: 1rem 0rem 1rem 0rem;\n}\n.col2image {\n    width: 100%;\n}\n}\n\n/* laptops */\n/* large screens */\n@media only screen and (min-width: 1367px) {\n.projectcontainer {\n    margin: 0 20vw 0 20vw;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_style_index_0_id_5c8353a3_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_style_index_0_id_5c8353a3_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_style_index_0_id_5c8353a3_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Projects/ProjectDetails.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectDetails.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectDetails_vue_vue_type_template_id_5c8353a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDetails.vue?vue&type=template&id=5c8353a3 */ "./resources/js/components/Projects/ProjectDetails.vue?vue&type=template&id=5c8353a3");
/* harmony import */ var _ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetails.vue?vue&type=script&lang=js */ "./resources/js/components/Projects/ProjectDetails.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectDetails_vue_vue_type_style_index_0_id_5c8353a3_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss */ "./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss");




;
_ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ProjectDetails_vue_vue_type_template_id_5c8353a3__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Projects/ProjectDetails.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Projects/ProjectDetails.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectDetails.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Projects/ProjectDetails.vue?vue&type=template&id=5c8353a3":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectDetails.vue?vue&type=template&id=5c8353a3 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_template_id_5c8353a3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_template_id_5c8353a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectDetails.vue?vue&type=template&id=5c8353a3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=template&id=5c8353a3");


/***/ }),

/***/ "./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectDetails_vue_vue_type_style_index_0_id_5c8353a3_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectDetails.vue?vue&type=style&index=0&id=5c8353a3&lang=scss");


/***/ })

}]);