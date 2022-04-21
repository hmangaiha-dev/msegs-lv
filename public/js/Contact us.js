(self["webpackChunk"] = self["webpackChunk"] || []).push([["Contact us"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      credentials: {},
      success: '',
      submitted: false
    };
  },
  mounted: function mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    submitcontact: function submitcontact() {
      var _this = this;

      this.axios.post("/api/contactus", this.credentials).then(function (res) {
        console.log('Submitted');
        _this.success = res.data;
        setTimeout(function () {
          _this.success = '';
        }, 5000);
        _this.credentials = '';
        _this.submitted = true; // this.credentials={};
      })["catch"](function (err) {
        console.log('error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_mail_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/mail.png */ "./resources/js/assets/mail.png");
/* harmony import */ var _assets_address_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/address.png */ "./resources/js/assets/address.png");
/* harmony import */ var _assets_phone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/phone.png */ "./resources/js/assets/phone.png");





var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-55d6b203");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-55d6b203");

var _hoisted_1 = {
  "class": "contactus"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("iframe", {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6420.56316980707!2d92.71281672098596!3d23.726354004446403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d94c7752e1de9%3A0xfabe21a09a0936d0!2sMizoram%20State%20e-Governance%20Society!5e0!3m2!1sen!2sin!4v1623352949599!5m2!1sen!2sin",
  width: "100%",
  height: "350",
  style: {
    "border": "0",
    "margin-top": "-14px",
    "margin-bottom": "1rem"
  },
  allowfullscreen: "",
  loading: "lazy"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "container",
  style: {
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "center",
    "align-items": "center",
    "align-contents": "center"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "inforows"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "infocols"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _assets_mail_png__WEBPACK_IMPORTED_MODULE_1__.default,
  alt: "",
  srcset: "",
  "class": "addressimage"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "addresstitle"
}, "Email"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "addressdesc"
}, "info@msegs.in")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "infocols"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _assets_address_png__WEBPACK_IMPORTED_MODULE_2__.default,
  alt: "",
  srcset: "",
  "class": "addressimage"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "addresstitle"
}, "Address"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "addressdesc",
  style: {
    "width": "100%"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Old Secretariat building - I, Treasury Square"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Aizawl, Mizoram -796001 ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "infocols"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _assets_phone_png__WEBPACK_IMPORTED_MODULE_3__.default,
  alt: "",
  srcset: "",
  "class": "addressimage"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "addresstitle"
}, "Contact"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "addressdesc"
}, "0389-2342986")])])], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr", {
  style: {
    "opacity": "20%",
    "margin": "4rem 0 2rem 0"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "container"
};
var _hoisted_6 = {
  key: 0,
  "class": "success animated slideInDown"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "formtitle"
}, "Share your information to keep in contact", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "formdesc"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("We would love to contact you and ask about any issues you "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("are facing about MSeGS")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "formgroups"
};
var _hoisted_10 = {
  "class": "fields"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "name",
  id: "labls",
  "class": "requird"
}, "Your Name", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "fields"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "email",
  id: "labls",
  "class": "requird"
}, "Your email address", -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_17 = {
  "class": "fields"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "subject",
  id: "labls",
  "class": "requird"
}, "Subject", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_21 = {
  "class": "fields"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "contactnumber",
  id: "labls",
  "class": "requird"
}, "Your phone number", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "fields",
  style: {
    "width": "84%"
  }
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "messsage",
  id: "labls",
  "class": "requird"
}, "How can we help you solve your issue", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div id=\"googleMap\" style=\"width:100%;height:400px;\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div id=\"map\"></div> "), _hoisted_2, _hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [$data.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.success), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span  class=\"success\">Thank you for contacting us</span> "), _hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [_hoisted_11, _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "class": "formclass",
    id: "name",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.credentials.name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.credentials.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "class": "formclass",
    id: "email",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.credentials.email = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.credentials.email]])]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [_hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "class": "formclass",
    id: "subject",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.credentials.subject = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.credentials.subject]])]), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [_hoisted_22, _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "class": "formclass",
    id: "contactnumber",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.credentials.contactnumber = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.credentials.contactnumber]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [_hoisted_25, _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
    type: "text",
    rows: "5",
    cols: "80",
    "class": "formclass",
    id: "message",
    style: {
      "height": "5rem"
    },
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.credentials.message = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.credentials.message]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    "class": "submittingbutton ",
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submitcontact && $options.submitcontact.apply($options, arguments);
    }, ["prevent"])),
    style: {
      "margin-top": "2rem"
    }
  }, "SUBMIT")])])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#map[data-v-55d6b203] {\n  height: 400px;\n  /* The height is 400 pixels */\n  width: 100%;\n  /* The width is the width of the web page */\n}\n.inforows[data-v-55d6b203] {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  justify-content: stretch;\n  align-content: flex-start;\n}\n.infocols[data-v-55d6b203] {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-content: center;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  padding-left: 4.1rem;\n  padding-right: 4.21rem;\n  width: auto;\n}\ndiv.infocols[data-v-55d6b203]:nth-child(2) {\n  border: 0;\n}\n.addressimage[data-v-55d6b203] {\n  width: 60px;\n  margin: auto;\n}\n.addresstitle[data-v-55d6b203] {\n  font-family: 'Poppins';\n  font-size: 20px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #2c3134;\n  margin: 0;\n}\n.addressdesc[data-v-55d6b203] {\n  font-family: 'Poppins';\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #76838f;\n  margin: 0;\n}\n.success[data-v-55d6b203] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 1rem 0;\n  align-content: center;\n  font-family: 'Poppins';\n  font-size: 16px;\n  text-align: center;\n  color: #268511;\n}\n.formtitle[data-v-55d6b203] {\n  padding-top: 12px;\n  font-family: 'Playfair Display';\n  font-size: 24px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: center;\n  color: #0a2458;\n}\n.formdesc[data-v-55d6b203] {\n  font-family: 'Poppins';\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.56;\n  letter-spacing: normal;\n  text-align: center;\n  color: #76838f;\n  padding-top: 6px;\n}\n.formgroups[data-v-55d6b203] {\n  margin: 0 4rem 4rem 4rem;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n.formclass[data-v-55d6b203] {\n  height: 2rem;\n  border-radius: 4px;\n  border: solid 0.5px #bfbfbf;\n  background-color: #ffffff;\n  margin: 0;\n  padding-left: 8px;\n}\n.fields[data-v-55d6b203] {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  margin: 2rem 1rem 0 1rem;\n}\n#labls[data-v-55d6b203] {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #2c3134;\n  z-index: 2;\n}\n#message[data-v-55d6b203] {\n  padding-top: 8px;\n}\n.requird[data-v-55d6b203]::after {\n  content: \"*\";\n  color: #f23d46;\n}\n.submittingbutton[data-v-55d6b203] {\n  padding: 8px 16px;\n  cursor: pointer;\n  margin: auto;\n  border: 1px solid #f23d46;\n  border-radius: 6px;\n  background-color: #f23d46;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n  text-decoration: none;\n}\n.submittingbutton[data-v-55d6b203]:hover {\n  background-color: white;\n  color: #f23d46;\n  border: 1px solid #f23d46;\n}\nspan.addressdesc > p[data-v-55d6b203]:nth-child(1) {\n  display: inline;\n  white-space: nowrap;\n}\n@media screen and (max-width: 800px) {\nspan.addressdesc > p[data-v-55d6b203]:nth-child(1) {\n    display: initial;\n    white-space: wrap;\n    width: 5vw;\n}\n.container[data-v-55d6b203] {\n    margin: auto;\n}\n.inforows[data-v-55d6b203] {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-evenly;\n    align-content: center;\n    align-items: center;\n}\n.infocols[data-v-55d6b203] {\n    border-left: 1px solid rgba(0, 0, 0, 0.1);\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\n    padding-left: 4.1rem;\n    padding-right: 4.21rem;\n    padding-bottom: 1rem;\n}\n.formgroups[data-v-55d6b203] {\n    margin: 0 0.5rem 4rem 0.5rem;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: center;\n}\n.formclass[data-v-55d6b203] {\n    width: 10;\n    height: 2rem;\n    border-radius: 4px;\n    border: solid 0.5px #bfbfbf;\n    background-color: #ffffff;\n    margin: 0;\n}\n.fields[data-v-55d6b203] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin: 2rem 1.5rem 0 1.5rem;\n}\n#labls[data-v-55d6b203] {\n    font-family: Poppins;\n    font-size: 14px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    letter-spacing: normal;\n    text-align: left;\n    color: #2c3134;\n    margin: 0 0 -1rem 0;\n}\n.requird[data-v-55d6b203]::after {\n    content: \"*\";\n    color: #f23d46;\n}\n.submitbutton[data-v-55d6b203] {\n    width: 100%;\n    height: 25px;\n    margin: auto;\n    padding: 6.5px 0 5px;\n    border-radius: 2.5px;\n    background-color: #dc3d32;\n    text-align: center;\n    font-size: 16px;\n    text-decoration: none;\n    color: white;\n    font-family: Poppins;\n    font-weight: 600;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.56;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/address.png":
/*!*****************************************!*\
  !*** ./resources/js/assets/address.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/address.png?563d0ce9297e4f679a8159cbf3541051");

/***/ }),

/***/ "./resources/js/assets/mail.png":
/*!**************************************!*\
  !*** ./resources/js/assets/mail.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/mail.png?d710a7cf203359012ec38168e5e4c2c8");

/***/ }),

/***/ "./resources/js/assets/phone.png":
/*!***************************************!*\
  !*** ./resources/js/assets/phone.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/phone.png?f4a13bcef75b5e59e759bdb27c56298f");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactUs_vue_vue_type_style_index_0_id_55d6b203_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactUs_vue_vue_type_style_index_0_id_55d6b203_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactUs_vue_vue_type_style_index_0_id_55d6b203_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/ContactUs.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ContactUs.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactUs_vue_vue_type_template_id_55d6b203_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=55d6b203&scoped=true */ "./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js */ "./resources/js/components/ContactUs.vue?vue&type=script&lang=js");
/* harmony import */ var _ContactUs_vue_vue_type_style_index_0_id_55d6b203_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true */ "./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true");




;
_ContactUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ContactUs_vue_vue_type_template_id_55d6b203_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_ContactUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-55d6b203"
/* hot reload */
if (false) {}

_ContactUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/ContactUs.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ContactUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/ContactUs.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/ContactUs.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactUs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactUs_vue_vue_type_template_id_55d6b203_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactUs_vue_vue_type_template_id_55d6b203_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactUs.vue?vue&type=template&id=55d6b203&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&scoped=true");


/***/ }),

/***/ "./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactUs_vue_vue_type_style_index_0_id_55d6b203_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ContactUs.vue?vue&type=style&index=0&id=55d6b203&lang=scss&scoped=true");


/***/ })

}]);