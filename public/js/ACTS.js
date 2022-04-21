(self["webpackChunk"] = self["webpackChunk"] || []).push([["ACTS"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    window.scrollTo(0, 0);
  },
  data: function data() {
    return {
      resources: [{
        title: 'Mizoram e-Governance RoadMap',
        path: 'https://drive.google.com/file/d/1ZuZUBLVdZE2c-uc1azboFzkv7RsAbC79/view?usp=sharing'
      }, {
        title: 'IT Amendment Act, 2008',
        path: 'https://drive.google.com/file/d/1ITypbL6B4XOtUspJ82hhQaDPPSp8Hjg9/view?usp=sharing'
      }, {
        title: 'Memorandum of Association',
        path: 'https://drive.google.com/file/d/1-sRrqRwtN1FnxlLCZAnSrO_rkAExUFZV/view?usp=sharing'
      }],
      images: '/images/test.png',
      errors: ''
    };
  },
  //  created() {
  //       this.axios.get(`/api/resources/index/?date=2021`).then((response) => {
  //           console.log(response.data);
  //           this.resources = response.data;
  //       }).
  //       catch((error)=>{
  //         this.errors = error
  //       });
  // },
  // methods:{
  //   yearfilter(date){
  //        this.axios.get(`/api/resources/index/?date=`+date)
  //        .then((response) => {
  //         console.log(response.data);
  //         this.resources = response.data;
  //     }).
  //     catch((error)=>{
  //       this.errors = error;
  //       console.log(this.errors)
  //     });
  //   }
  // }
  methods: {
    gotonew: function gotonew(link) {
      window.open(link, '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=template&id=6c43ac6c":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=template&id=6c43ac6c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_pdficon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pdficon.svg */ "./resources/js/assets/pdficon.svg");


var _hoisted_1 = {
  style: {
    "margin-top": "auto"
  }
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "ourservices"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "headings ",
  style: {
    "margin": "auto"
  }
}, "Acts & Rules")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "container",
  style: {
    "padding": "2rem 0 2rem 0"
  }
};
var _hoisted_4 = {
  "class": "mainrow"
};
var _hoisted_5 = {
  key: 0,
  "class": "rows1"
};
var _hoisted_6 = {
  "class": "resourcesitems"
};
var _hoisted_7 = {
  "class": "resourcescontents"
};
var _hoisted_8 = {
  "class": "resourcescontentsdate"
};
var _hoisted_9 = {
  "class": "resourcescontentstexts"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "resourcesprinter"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a href=\"../assets/biometri.pdf\" download=\"biometric.pdf\">  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _assets_pdficon_svg__WEBPACK_IMPORTED_MODULE_1__.default,
  alt: "",
  srcset: "",
  "class": "pdficon"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [$data.resources.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.resources, function (resource) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      key: resource.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"resourcescol\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
      href: resource.path,
      target: "_blank"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(resource.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(resource.title), 1
    /* TEXT */
    )]), _hoisted_10])], 8
    /* PROPS */
    , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div>       ")]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ourservices {\n  background-color: #ececec;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 3rem 0 3rem 0;\n}\n.mainrow {\n  display: flex;\n  flex-direction: row;\n}\n.rows1 {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n}\n.resourcescol {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.noresources {\n  width: 80%;\n}\n.archivecol {\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  margin-left: 3rem;\n  align-items: center;\n}\n.resourcesitems {\n  display: flex;\n  flex-direction: row;\n  padding: 6px 10.5px 8.5px 24.5px;\n  border-radius: 2.5px;\n  border: 1px solid #E4E5E6;\n  background-color: #ffffff;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.resourcesitems:hover {\n  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);\n}\n.resourcescontents {\n  width: 95%;\n  padding: 1rem;\n}\n.resourcesprinter {\n  width: 5%;\n  padding-right: 1rem;\n}\n.resourcescontentsdate {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #a1a1a1;\n}\n.resourcescontentstexts {\n  font-family: \"Playfair Display\";\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.39;\n  letter-spacing: normal;\n  text-align: left;\n  color: #272727;\n}\n.archivetitle {\n  font-family: PlayfairDisplay;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #2c3134;\n}\n.archivedates {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 18px;\n  letter-spacing: normal;\n  text-align: left;\n  color: #2c3134;\n  padding-top: 1rem;\n  cursor: pointer;\n}\n.archivemobile {\n  display: none;\n}\n@media screen and (max-width: 800px) {\n.mainrow {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n}\n.archivemobile {\n    display: block;\n    width: 100%;\n}\n.archivemobile > label:nth-child(1) {\n    font-family: 'Playfair Display';\n    font-size: 16px;\n    font-weight: bold;\n    color: #2c3134;\n}\n#year {\n    width: 100%;\n    border: 1px solid #E4E5E6;\n    padding: 1rem 0;\n    padding-left: 1rem;\n    border-radius: 6px;\n    font-family: 'Poppins';\n    font-size: 14px;\n    color: #2c3134;\n}\n#year > option:nth-child(n) {\n    width: 100%;\n    border: 1px solid #E4E5E6;\n    padding: 1rem 0;\n    padding-left: 1rem;\n    font-family: Poppins;\n    font-size: 14px;\n    color: #2c3134;\n    box-shadow: none;\n}\n#app > div > div.spacing-top > div > div.container {\n    margin: 0 8vw;\n}\n.rows1 {\n    display: flex;\n    flex-direction: column;\n}\n.resourcescol {\n    width: 100%;\n}\n.pdficon {\n    margin-right: 2rem;\n}\n.archivecol {\n    display: none;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/pdficon.svg":
/*!*****************************************!*\
  !*** ./resources/js/assets/pdficon.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/pdficon.svg?ddd173d04d53796dff2d9cff559a8464");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ACTS_vue_vue_type_style_index_0_id_6c43ac6c_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ACTS_vue_vue_type_style_index_0_id_6c43ac6c_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ACTS_vue_vue_type_style_index_0_id_6c43ac6c_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/ACTS.vue":
/*!******************************************!*\
  !*** ./resources/js/components/ACTS.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ACTS_vue_vue_type_template_id_6c43ac6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ACTS.vue?vue&type=template&id=6c43ac6c */ "./resources/js/components/ACTS.vue?vue&type=template&id=6c43ac6c");
/* harmony import */ var _ACTS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACTS.vue?vue&type=script&lang=js */ "./resources/js/components/ACTS.vue?vue&type=script&lang=js");
/* harmony import */ var _ACTS_vue_vue_type_style_index_0_id_6c43ac6c_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss */ "./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss");




;
_ACTS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ACTS_vue_vue_type_template_id_6c43ac6c__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ACTS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/ACTS.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ACTS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/ACTS.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/ACTS.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ACTS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ACTS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ACTS.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ACTS.vue?vue&type=template&id=6c43ac6c":
/*!************************************************************************!*\
  !*** ./resources/js/components/ACTS.vue?vue&type=template&id=6c43ac6c ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ACTS_vue_vue_type_template_id_6c43ac6c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ACTS_vue_vue_type_template_id_6c43ac6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ACTS.vue?vue&type=template&id=6c43ac6c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=template&id=6c43ac6c");


/***/ }),

/***/ "./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ACTS_vue_vue_type_style_index_0_id_6c43ac6c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ACTS.vue?vue&type=style&index=0&id=6c43ac6c&lang=scss");


/***/ })

}]);