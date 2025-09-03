/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3473:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9242);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3396);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/index/PageIndex.vue?vue&type=template&id=7435475a


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h1", {
  class: "pt-2"
}, "319 Boys – Fantasy Football Legends", -1);

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "sm:text-xl pt-4"
}, "Presenting... your current champion.... drum roll...", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HeaderSection = (0,runtime_core_esm_bundler/* resolveComponent */.up)("HeaderSection");

  const _component_ChampionList = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ChampionList");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_HeaderSection), (0,runtime_core_esm_bundler/* createElementVNode */._)("main", null, [_hoisted_1, _hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ChampionList)])], 64);
}
;// CONCATENATED MODULE: ./src/pages/index/PageIndex.vue?vue&type=template&id=7435475a

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(7139);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/index/ChampionList.vue?vue&type=template&id=64ffc34e

const ChampionListvue_type_template_id_64ffc34e_hoisted_1 = {
  id: "champions",
  class: "relative pt-1"
};
const ChampionListvue_type_template_id_64ffc34e_hoisted_2 = {
  class: "snap-y"
};
const _hoisted_3 = ["id"];
const _hoisted_4 = {
  id: "selectedYear",
  class: "fixed top-0 h-screen flex items-center justify-center sm:right-2 md:right-4 lg:right-10 xl:right-20 z-0"
};
const _hoisted_5 = {
  key: 0,
  class: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
};
function ChampionListvue_type_template_id_64ffc34e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChampionItem = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ChampionItem");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", ChampionListvue_type_template_id_64ffc34e_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("ul", ChampionListvue_type_template_id_64ffc34e_hoisted_2, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.champions, champion => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", {
      key: champion.year,
      id: 'year-' + champion.year,
      class: "py-4 snap-end"
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ChampionItem, {
      champion: champion,
      active: this.activeChampion === champion
    }, null, 8, ["champion", "active"])], 8, _hoisted_3);
  }), 128))]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [$data.activeChampion ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h2", _hoisted_5, (0,shared_esm_bundler/* toDisplayString */.zw)($data.activeChampion.year), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])]);
}
;// CONCATENATED MODULE: ./src/pages/index/ChampionList.vue?vue&type=template&id=64ffc34e

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/index/ChampionItem.vue?vue&type=template&id=5d678541&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-5d678541"), n = n(), _popScopeId(), n);

const ChampionItemvue_type_template_id_5d678541_scoped_true_hoisted_1 = ["src", "alt"];
const ChampionItemvue_type_template_id_5d678541_scoped_true_hoisted_2 = {
  class: "lg:text-xl"
};
function ChampionItemvue_type_template_id_5d678541_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("figure", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: 'https://mekane84.github.io/319-boys-assets/' + $props.champion.image,
    alt: 'Picture of ' + $props.champion.champion + ' owner ' + $props.champion.owner,
    class: "rounded"
  }, null, 8, ChampionItemvue_type_template_id_5d678541_scoped_true_hoisted_1), (0,runtime_core_esm_bundler/* createElementVNode */._)("figcaption", ChampionItemvue_type_template_id_5d678541_scoped_true_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)($props.champion.year) + " Champion – " + (0,shared_esm_bundler/* toDisplayString */.zw)($props.champion.champion) + ", " + (0,shared_esm_bundler/* toDisplayString */.zw)($props.champion.owner), 1)]);
}
;// CONCATENATED MODULE: ./src/pages/index/ChampionItem.vue?vue&type=template&id=5d678541&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/index/ChampionItem.vue?vue&type=script&lang=js
/* harmony default export */ var ChampionItemvue_type_script_lang_js = ({
  name: 'ChampionItem',
  props: {
    champion: Object
  }
});
;// CONCATENATED MODULE: ./src/pages/index/ChampionItem.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/index/ChampionItem.vue?vue&type=style&index=0&id=5d678541&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/index/ChampionItem.vue?vue&type=style&index=0&id=5d678541&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/pages/index/ChampionItem.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ChampionItemvue_type_script_lang_js, [['render',ChampionItemvue_type_template_id_5d678541_scoped_true_render],['__scopeId',"data-v-5d678541"]])

/* harmony default export */ var ChampionItem = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/index/ChampionList.vue?vue&type=script&lang=js

/* harmony default export */ var ChampionListvue_type_script_lang_js = ({
  name: 'ChampionList',
  components: {
    ChampionItem: ChampionItem
  },

  mounted() {
    const thisVue = this;
    fetch('https://mekane84.github.io/319-boys-assets/stats/champions.json').then(response => response.json()).then(data => {
      thisVue.champions = data;
      const [firstChamp] = thisVue.champions;
      thisVue.activeChampion = firstChamp;
      thisVue.$nextTick(thisVue.setupScrollSpy);
    });
  },

  data() {
    return {
      champions: [],
      activeChampion: null
    };
  },

  methods: {
    setupScrollSpy() {
      window.onscroll = () => {
        const scrollPosTop = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollPosMid = scrollPosTop + windowHeight / 2;
        const scrollPosMidMore = scrollPosMid - windowHeight / 20;
        if (!this.champions) // wait until the list is set up
          return;

        if (scrollPosTop < 3) {
          // if they are scrolled to the top, should always show the first one
          this.activeChampion = this.champions[0];
          return;
        } // if they are scrolled to the bottom, should always show the last one


        if (scrollPosTop + windowHeight + 3 > document.documentElement.scrollHeight) {
          this.activeChampion = this.champions[this.champions.length - 1];
          return;
        }

        this.champions.forEach(champion => {
          const el = document.querySelector(`#year-${champion.year}`);
          const elTop = el.offsetTop;
          const elBottom = el.offsetTop + el.scrollHeight;

          if (scrollPosMidMore >= elTop && scrollPosMidMore <= elBottom) {
            this.activeChampion = champion;
          }
        });
      };
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/index/ChampionList.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/index/ChampionList.vue




;
const ChampionList_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ChampionListvue_type_script_lang_js, [['render',ChampionListvue_type_template_id_64ffc34e_render]])

/* harmony default export */ var ChampionList = (ChampionList_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HeaderSection.vue?vue&type=template&id=a2f5e5a6&scoped=true


const HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-a2f5e5a6"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_1 = {
  class: "flex items-center justify-between"
};

const HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_2 = /*#__PURE__*/HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
  href: "/"
}, "319 Boys", -1));

const HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_3 = {
  class: "z-10"
};

const HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<nav class=\"inline\" data-v-a2f5e5a6><ul class=\"inline-flex items-center space-x-8\" data-v-a2f5e5a6><li data-v-a2f5e5a6><a href=\"https://docs.google.com/spreadsheets/d/1xcIRewpvhyuR6cYp0rT7hIgvE-JH_KHGr7OxLdlzH1I/\" target=\"_blank\" data-v-a2f5e5a6> Dues and Contracts </a></li><li data-v-a2f5e5a6><a href=\"https://mekane84.github.io/319-boys-assets/pages/319boys_dashboard.html\" target=\"_blank\" data-v-a2f5e5a6> Stats </a></li><li data-v-a2f5e5a6><a href=\"https://www.youtube.com/watch?v=VVZ_VJ7BEM8\" target=\"_blank\" data-v-a2f5e5a6> Bonus Video </a></li></ul></nav>", 1);

const HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_5 = {
  class: "ml-8"
};

const _hoisted_6 = /*#__PURE__*/HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  class: "w-6 h-6"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z",
  class: "fill-transparent"
}), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
  d: "m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z",
  class: "fill-slate-400 dark:fill-slate-500"
}), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z",
  class: "fill-slate-400 dark:fill-slate-500"
})], -1));

const _hoisted_7 = [_hoisted_6];

const _hoisted_8 = /*#__PURE__*/HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("hr", {
  class: "border-slate-300 dark:border-slate-700"
}, null, -1));

function HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("header", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_1, [HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_2, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_3, [HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("span", HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleDarkMode && $options.toggleDarkMode(...args)),
    "aria-label": "Toggle dark mode"
  }, _hoisted_7)])])])]), _hoisted_8], 64);
}
;// CONCATENATED MODULE: ./src/components/HeaderSection.vue?vue&type=template&id=a2f5e5a6&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HeaderSection.vue?vue&type=script&lang=js
/* harmony default export */ var HeaderSectionvue_type_script_lang_js = ({
  name: 'HeaderSection',
  methods: {
    toggleDarkMode() {
      if (localStorage.theme === 'light') localStorage.theme = 'dark';else if (localStorage.theme === 'dark') localStorage.theme = 'light';else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) localStorage.theme = 'light';else localStorage.theme = 'dark';
      }
      if (localStorage.theme === 'dark') document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');
    }

  }
});
;// CONCATENATED MODULE: ./src/components/HeaderSection.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HeaderSection.vue?vue&type=style&index=0&id=a2f5e5a6&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HeaderSection.vue?vue&type=style&index=0&id=a2f5e5a6&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/HeaderSection.vue




;


const HeaderSection_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HeaderSectionvue_type_script_lang_js, [['render',HeaderSectionvue_type_template_id_a2f5e5a6_scoped_true_render],['__scopeId',"data-v-a2f5e5a6"]])

/* harmony default export */ var HeaderSection = (HeaderSection_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/index/PageIndex.vue?vue&type=script&lang=js


/* harmony default export */ var PageIndexvue_type_script_lang_js = ({
  name: 'PageIndex',
  components: {
    HeaderSection: HeaderSection,
    ChampionList: ChampionList
  }
});
;// CONCATENATED MODULE: ./src/pages/index/PageIndex.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/index/PageIndex.vue?vue&type=style&index=0&id=7435475a&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/index/PageIndex.vue?vue&type=style&index=0&id=7435475a&lang=css

;// CONCATENATED MODULE: ./src/pages/index/PageIndex.vue




;


const PageIndex_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PageIndexvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var PageIndex = (PageIndex_exports_);
;// CONCATENATED MODULE: ./src/pages/index/main.js



(0,runtime_dom_esm_bundler/* createApp */.ri)(PageIndex).mount('#app');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_319_boys"] = self["webpackChunk_319_boys"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(3473); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.e6a2045e.js.map