(self["webpackChunk"] = self["webpackChunk"] || []).push([["projects"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects_ProjectCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects/ProjectCard.vue */ "./resources/js/components/Projects/ProjectCard.vue");
/* harmony import */ var _Projects_ProjectCardSkeleton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects/ProjectCardSkeleton.vue */ "./resources/js/components/Projects/ProjectCardSkeleton.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProjectCard: _Projects_ProjectCard_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    ProjectCardSkeleton: _Projects_ProjectCardSkeleton_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      loading: true,
      projects: [// {title:'m-covid',subtitle:' A single platform to get updates on covid cases, issue permit for travels donations for pandemic, monitoring quarantine zones and more.',imgsrc:"sdcproject.png"},
      ]
    };
  },
  mounted: function mounted() {
    window.scrollTo(0, 0);
  },
  created: function created() {
    var _this = this;

    this.axios.get('/api/projects/').then(function (response) {
      console.log(response.data);
      _this.projects = response.data;
      _this.loading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['title', 'subtitle', 'imgsrc', 'id', 'date'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['title', 'subtitle', 'imgsrc', 'id', 'date'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=template&id=533b60e5&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=template&id=533b60e5&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-533b60e5");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-533b60e5");

var _hoisted_1 = {
  "class": "projects"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "projectsback"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "headings",
  style: {
    "margin": "auto"
  }
}, "Projects")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "container centercontainer"
};
var _hoisted_4 = {
  "class": "projectsrows"
};
var _hoisted_5 = {
  key: 0,
  "class": "loading",
  style: {
    "display": "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap"
  }
};
var _hoisted_6 = {
  key: 0
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ProjectCardSkeleton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProjectCardSkeleton");

  var _component_project_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("project-card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [$data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProjectCardSkeleton), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProjectCardSkeleton)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.projects, function (project) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
      key: project.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card\">\n          <img\n            :src=\"require('../assets/'+ project.imgsrc)\"\n            alt=\"\"\n            srcset=\"\"\n            class=\"cardimage\"\n          />\n          <div class=\"cardcontainer\" >\n            <span class=\"cardtitle\">{{project.title}}</span>\n            <p class=\"cardtexts\">\n              A single platform to get updates on covid cases, issue permit for\n              travels, donations for pandemic, monitoring quarantine zones and\n              more.\n            </p>\n          </div>\n          <div class=\"cardbutton\">\n            <p class=\"seeproject\" ><router-link  to='/projectdetails'> See Project <i class=\"fas fa-long-arrow-alt-right\"></i></router-link></p>\n          </div>\n        </div> "), project.goals == '.' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_6)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_project_card, {
      key: 1,
      title: project.title,
      subtitle: project.subtitle,
      imgsrc: project.imagepath,
      id: project.id,
      date: project.date
    }, null, 8
    /* PROPS */
    , ["title", "subtitle", "imgsrc", "id", "date"]))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=template&id=c13a7b02":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=template&id=c13a7b02 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = {
  "class": "cardcontainer"
};
var _hoisted_3 = {
  key: 0,
  "class": "carddate"
};
var _hoisted_4 = {
  "class": "cardtitle"
};
var _hoisted_5 = {
  "class": "cardtexts"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cardbutton"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "seeproject"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" SEE PROJECT "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fas fa-long-arrow-alt-right"
})])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'projectdetails',
      params: {
        id: $props.id
      }
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        src: '..' + $props.imgsrc,
        alt: "",
        srcset: "",
        "class": "cardimage"
      }, null, 8
      /* PROPS */
      , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [$props.date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.date), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.subtitle), 1
      /* TEXT */
      )]), _hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=template&id=81656d28&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=template&id=81656d28&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-81656d28");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-81656d28");

var _hoisted_1 = {
  "class": "card"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span src=\"&#39;..\" alt=\"\" srcset=\"\" class=\"cardimage shine\" data-v-81656d28></span><div class=\"cardcontainer \" data-v-81656d28><p class=\"carddate shine\" data-v-81656d28></p><p class=\"cardtitle shine\" style=\"margin-left:-4rem;\" data-v-81656d28></p><p class=\"cardtexts shine\" style=\"margin-top:3rem;width:12rem;\" data-v-81656d28></p><br data-v-81656d28><p class=\"cardtexts shine\" style=\"margin-top:0.3rem;width:5rem;\" data-v-81656d28></p><br data-v-81656d28><p class=\"cardtexts shine\" style=\"margin-top:0.3rem;width:3rem;\" data-v-81656d28></p><br data-v-81656d28><p class=\"cardtexts shine\" style=\"margin-top:0.3rem;width:6rem;\" data-v-81656d28></p><br data-v-81656d28></div><div class=\"cardbutton shine\" data-v-81656d28><!-- &lt;p class=&quot;seeproject&quot; &gt; SEE PROJECT &lt;i class=&quot;fas fa-long-arrow-alt-right&quot;&gt;&lt;/i&gt;&lt;/p&gt; --></div>", 3);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".projects[data-v-533b60e5] {\n  margin-top: auto;\n}\n.projectsback[data-v-533b60e5] {\n  background-color: #ececec;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.centercontainer[data-v-533b60e5] {\n  display: flex;\n  justify-content: center;\n}\n.projectsrows[data-v-533b60e5] {\n  padding: 2rem 0 2rem 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}\n#app > div.projects > div > div > div > div.cardbutton > p > a[data-v-533b60e5] {\n  text-decoration: none;\n  color: #f23d46;\n}\n@media screen and (max-width: 800px) {\n#app > div > div.spacing-top > div > div[data-v-533b60e5]:nth-child(2) {\n    margin: 0 6vw;\n}\n.projectsrows[data-v-533b60e5] {\n    padding: 2rem 0 2rem 0;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n.card[data-v-533b60e5] {\n    width: 95%;\n    margin-bottom: 12px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".card {\n  transition: 0.3s;\n  width: 16rem;\n  margin: 1rem;\n  min-height: 10rem;\n  height: 26rem;\n  border: 1px solid #E4E5E6;\n  position: relative;\n  border-radius: 5px;\n}\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.cardimage {\n  width: 100%;\n}\n.cardcontainer {\n  padding: 2px 16px;\n}\n.carddate {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #a1a1a1;\n}\n.cardtitle {\n  margin: -2rem 0 -2rem 0;\n  font-family: 'Playfair Display';\n  font-size: 20px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #2c3134;\n}\n.cardtexts {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n  overflow: hidden;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.56;\n  letter-spacing: normal;\n  text-align: left;\n  color: #76838f;\n  padding-top: 8px;\n}\n.cardbutton {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(10, 10, 10, 0.04);\n  height: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.seeproject {\n  padding: 10px 16px;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.56;\n  letter-spacing: normal;\n  text-align: left;\n  color: #f23d46;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n#app > div > div.spacing-top > div > div > div > span:nth-child(n) > div > div.cardbutton > p > a {\n  text-decoration: none;\n  color: #f23d46;\n  margin: auto;\n}\n@media screen and (max-width: 800px) {\n.card {\n    width: 90%;\n    margin-bottom: 12px;\n    transition: 0.3s;\n    width: 16rem;\n    margin: 0.5rem;\n    min-height: 10rem;\n    height: 26rem;\n    border: 1px solid #E4E5E6;\n    position: relative;\n}\n.cardtexts {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 4;\n    overflow: hidden;\n    font-family: Poppins;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: left;\n    color: #76838f;\n}\n.cardbutton {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(10, 10, 10, 0.04);\n    height: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n}\n@media only screen and (min-width: 1367px) {\n.card {\n    transition: 0.3s;\n    width: 340px;\n    margin: 0.5rem 15px;\n    min-height: 10rem;\n    height: 512px;\n    border: 1px solid #E4E5E6;\n    position: relative;\n    margin-bottom: 30px;\n}\n.carddate {\n    font-family: 'Poppins';\n    font-size: 12px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: left;\n    color: #a1a1a1;\n    padding-top: 16px;\n}\n.cardtitle {\n    margin: -2rem 0 -2rem 0;\n    font-family: 'Playfair Display';\n    font-size: 25px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.4;\n    letter-spacing: normal;\n    text-align: left;\n    color: #2c3134;\n}\n.cardtexts {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 4;\n    overflow: hidden;\n    font-family: Poppins;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: left;\n    color: #76838f;\n    padding-top: 8px;\n}\n.cardbutton {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(10, 10, 10, 0.04);\n    height: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.seeproject {\n    padding: 10px 16px;\n    font-family: 'Poppins';\n    font-size: 16px;\n    font-weight: 600;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: left;\n    color: #f23d46;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".card[data-v-81656d28] {\n  transition: 0.3s;\n  width: 16rem;\n  margin: 1rem;\n  min-height: 10rem;\n  height: 26rem;\n  border: 1px solid #E4E5E6;\n  position: relative;\n  border-radius: 5px;\n}\n.card[data-v-81656d28]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.cardimage[data-v-81656d28] {\n  width: 100%;\n  color: grey;\n  height: 10rem;\n}\n.cardcontainer[data-v-81656d28] {\n  padding: 2px 16px;\n}\n.carddate[data-v-81656d28] {\n  height: 0.8rem;\n  width: 4rem;\n  background: grey;\n}\n.cardtitle[data-v-81656d28] {\n  margin-top: 1rem;\n  font-family: 'Playfair Display';\n  font-size: 20px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #2c3134;\n  width: 10rem;\n  height: 1.2rem;\n  background: grey;\n}\n.cardtexts[data-v-81656d28] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n  overflow: hidden;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.56;\n  letter-spacing: normal;\n  text-align: left;\n  color: #76838f;\n  height: 0.2rem;\n  background: grey;\n}\n.cardbutton[data-v-81656d28] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(10, 10, 10, 0.04);\n  height: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.seeproject[data-v-81656d28] {\n  padding: 10px 16px;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.56;\n  letter-spacing: normal;\n  text-align: left;\n  color: #f23d46;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.shine[data-v-81656d28] {\n  background: #f6f7f8;\n  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);\n  background-repeat: no-repeat;\n  background-size: 800px 800px;\n  display: inline-block;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: placeholderShimmer-81656d28;\n  -webkit-animation-timing-function: linear;\n}\n@-webkit-keyframes placeholderShimmer-81656d28 {\n0% {\n    background-position: -468px 0;\n}\n100% {\n    background-position: 468px 0;\n}\n}\n@keyframes placeholderShimmer-81656d28 {\n0% {\n    background-position: -468px 0;\n}\n100% {\n    background-position: 468px 0;\n}\n}\n@media screen and (max-width: 800px) {\n.card[data-v-81656d28] {\n    width: 90%;\n    margin-bottom: 12px;\n    transition: 0.3s;\n    width: 16rem;\n    margin: 0.5rem;\n    min-height: 10rem;\n    height: 26rem;\n    border: 1px solid #E4E5E6;\n    position: relative;\n}\n.cardtexts[data-v-81656d28] {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 4;\n    overflow: hidden;\n    font-family: Poppins;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: left;\n    color: #76838f;\n}\n.cardbutton[data-v-81656d28] {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(10, 10, 10, 0.04);\n    height: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n}\n@media only screen and (min-width: 1367px) {\n.card[data-v-81656d28] {\n    transition: 0.3s;\n    width: 340px;\n    margin: 0.5rem 15px;\n    min-height: 10rem;\n    height: 512px;\n    border: 1px solid #E4E5E6;\n    position: relative;\n    margin-bottom: 30px;\n}\n.carddate[data-v-81656d28] {\n    font-family: 'Poppins';\n    font-size: 12px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: left;\n    color: #a1a1a1;\n    padding-top: 16px;\n}\n.cardtitle[data-v-81656d28] {\n    margin: -2rem 0 -2rem 0;\n    font-family: 'Playfair Display';\n    font-size: 25px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.4;\n    letter-spacing: normal;\n    text-align: left;\n    color: #2c3134;\n}\n.cardtexts[data-v-81656d28] {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 4;\n    overflow: hidden;\n    font-family: Poppins;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: left;\n    color: #76838f;\n    padding-top: 8px;\n}\n.cardbutton[data-v-81656d28] {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(10, 10, 10, 0.04);\n    height: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.seeproject[data-v-81656d28] {\n    padding: 10px 16px;\n    font-family: 'Poppins';\n    font-size: 16px;\n    font-weight: 600;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: left;\n    color: #f23d46;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_533b60e5_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_533b60e5_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_533b60e5_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_style_index_0_id_c13a7b02_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_style_index_0_id_c13a7b02_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_style_index_0_id_c13a7b02_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCardSkeleton_vue_vue_type_style_index_0_id_81656d28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCardSkeleton_vue_vue_type_style_index_0_id_81656d28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCardSkeleton_vue_vue_type_style_index_0_id_81656d28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Projects.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Projects.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects_vue_vue_type_template_id_533b60e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=533b60e5&scoped=true */ "./resources/js/components/Projects.vue?vue&type=template&id=533b60e5&scoped=true");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js */ "./resources/js/components/Projects.vue?vue&type=script&lang=js");
/* harmony import */ var _Projects_vue_vue_type_style_index_0_id_533b60e5_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true */ "./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true");




;
_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Projects_vue_vue_type_template_id_533b60e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-533b60e5"
/* hot reload */
if (false) {}

_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Projects.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Projects/ProjectCard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Projects/ProjectCard.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectCard_vue_vue_type_template_id_c13a7b02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectCard.vue?vue&type=template&id=c13a7b02 */ "./resources/js/components/Projects/ProjectCard.vue?vue&type=template&id=c13a7b02");
/* harmony import */ var _ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard.vue?vue&type=script&lang=js */ "./resources/js/components/Projects/ProjectCard.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectCard_vue_vue_type_style_index_0_id_c13a7b02_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss */ "./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss");




;
_ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ProjectCard_vue_vue_type_template_id_c13a7b02__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Projects/ProjectCard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Projects/ProjectCardSkeleton.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectCardSkeleton.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectCardSkeleton_vue_vue_type_template_id_81656d28_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectCardSkeleton.vue?vue&type=template&id=81656d28&scoped=true */ "./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=template&id=81656d28&scoped=true");
/* harmony import */ var _ProjectCardSkeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCardSkeleton.vue?vue&type=script&lang=js */ "./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectCardSkeleton_vue_vue_type_style_index_0_id_81656d28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true */ "./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true");




;
_ProjectCardSkeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ProjectCardSkeleton_vue_vue_type_template_id_81656d28_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_ProjectCardSkeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-81656d28"
/* hot reload */
if (false) {}

_ProjectCardSkeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Projects/ProjectCardSkeleton.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectCardSkeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Projects.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Projects.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Projects/ProjectCard.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectCard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCardSkeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCardSkeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCardSkeleton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Projects.vue?vue&type=template&id=533b60e5&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Projects.vue?vue&type=template&id=533b60e5&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_533b60e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_533b60e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=template&id=533b60e5&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=template&id=533b60e5&scoped=true");


/***/ }),

/***/ "./resources/js/components/Projects/ProjectCard.vue?vue&type=template&id=c13a7b02":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectCard.vue?vue&type=template&id=c13a7b02 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_template_id_c13a7b02__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_template_id_c13a7b02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCard.vue?vue&type=template&id=c13a7b02 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=template&id=c13a7b02");


/***/ }),

/***/ "./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=template&id=81656d28&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=template&id=81656d28&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCardSkeleton_vue_vue_type_template_id_81656d28_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCardSkeleton_vue_vue_type_template_id_81656d28_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCardSkeleton.vue?vue&type=template&id=81656d28&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=template&id=81656d28&scoped=true");


/***/ }),

/***/ "./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_533b60e5_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects.vue?vue&type=style&index=0&id=533b60e5&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_style_index_0_id_c13a7b02_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCard.vue?vue&type=style&index=0&id=c13a7b02&lang=scss");


/***/ }),

/***/ "./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCardSkeleton_vue_vue_type_style_index_0_id_81656d28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Projects/ProjectCardSkeleton.vue?vue&type=style&index=0&id=81656d28&lang=scss&scoped=true");


/***/ })

}]);