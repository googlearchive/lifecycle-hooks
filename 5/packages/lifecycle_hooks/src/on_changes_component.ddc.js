define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection_util', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, change_detection_util, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__change_detection_util = change_detection_util.src__core__change_detection__change_detection_util;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__on_changes_component = Object.create(_root);
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $clear = dartx.clear;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringAndSimpleChangeToNull = () => (StringAndSimpleChangeToNull = dart.constFn(dart.fnType(core.Null, [core.String, src__core__change_detection__change_detection_util.SimpleChange])))();
  let MapOfString$SimpleChange = () => (MapOfString$SimpleChange = dart.constFn(core.Map$(core.String, src__core__change_detection__change_detection_util.SimpleChange)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__on_changes_component.Hero = class Hero extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(['name', this.name]);
    }
  };
  (src__on_changes_component.Hero.new = function(name) {
    this[name$] = name;
  }).prototype = src__on_changes_component.Hero.prototype;
  dart.addTypeTests(src__on_changes_component.Hero);
  const name$ = Symbol("Hero.name");
  dart.setMethodSignature(src__on_changes_component.Hero, () => ({
    __proto__: dart.getMethods(src__on_changes_component.Hero.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__on_changes_component.Hero, () => ({
    __proto__: dart.getFields(src__on_changes_component.Hero.__proto__),
    name: dart.fieldType(core.String)
  }));
  src__on_changes_component.OnChangesComponent = class OnChangesComponent extends core.Object {
    get hero() {
      return this[hero];
    }
    set hero(value) {
      this[hero] = value;
    }
    get power() {
      return this[power];
    }
    set power(value) {
      this[power] = value;
    }
    get changeLog() {
      return this[changeLog];
    }
    set changeLog(value) {
      this[changeLog] = value;
    }
    ngOnChanges(changes) {
      changes[$forEach](dart.fn((propName, change) => {
        let cur = convert.json.encode(change.currentValue);
        let prev = change.previousValue == null ? "{}" : convert.json.encode(change.previousValue);
        this.changeLog[$add](dart.str`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }, StringAndSimpleChangeToNull()));
    }
    reset() {
      this.changeLog[$clear]();
    }
  };
  (src__on_changes_component.OnChangesComponent.new = function() {
    this[hero] = null;
    this[power] = null;
    this[changeLog] = JSArrayOfString().of([]);
  }).prototype = src__on_changes_component.OnChangesComponent.prototype;
  dart.addTypeTests(src__on_changes_component.OnChangesComponent);
  const hero = Symbol("OnChangesComponent.hero");
  const power = Symbol("OnChangesComponent.power");
  const changeLog = Symbol("OnChangesComponent.changeLog");
  src__on_changes_component.OnChangesComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnChanges];
  dart.setMethodSignature(src__on_changes_component.OnChangesComponent, () => ({
    __proto__: dart.getMethods(src__on_changes_component.OnChangesComponent.__proto__),
    ngOnChanges: dart.fnType(dart.dynamic, [MapOfString$SimpleChange()]),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__on_changes_component.OnChangesComponent, () => ({
    __proto__: dart.getFields(src__on_changes_component.OnChangesComponent.__proto__),
    hero: dart.fieldType(src__on_changes_component.Hero),
    power: dart.fieldType(core.String),
    changeLog: dart.fieldType(ListOfString())
  }));
  src__on_changes_component.OnChangesParentComponent = class OnChangesParentComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    get power() {
      return this[power$];
    }
    set power(value) {
      this[power$] = value;
    }
    get title() {
      return this[title];
    }
    set title(value) {
      this[title] = value;
    }
    get childView() {
      return this[childView];
    }
    set childView(value) {
      this[childView] = value;
    }
    reset() {
      this.hero = new src__on_changes_component.Hero.new('Windstorm');
      this.power = 'sing';
      let t = this.childView;
      t == null ? null : t.reset();
    }
  };
  (src__on_changes_component.OnChangesParentComponent.new = function() {
    this[hero$] = null;
    this[power$] = null;
    this[title] = 'OnChanges';
    this[childView] = null;
    this.reset();
  }).prototype = src__on_changes_component.OnChangesParentComponent.prototype;
  dart.addTypeTests(src__on_changes_component.OnChangesParentComponent);
  const hero$ = Symbol("OnChangesParentComponent.hero");
  const power$ = Symbol("OnChangesParentComponent.power");
  const title = Symbol("OnChangesParentComponent.title");
  const childView = Symbol("OnChangesParentComponent.childView");
  dart.setMethodSignature(src__on_changes_component.OnChangesParentComponent, () => ({
    __proto__: dart.getMethods(src__on_changes_component.OnChangesParentComponent.__proto__),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__on_changes_component.OnChangesParentComponent, () => ({
    __proto__: dart.getFields(src__on_changes_component.OnChangesParentComponent.__proto__),
    hero: dart.fieldType(src__on_changes_component.Hero),
    power: dart.fieldType(core.String),
    title: dart.fieldType(core.String),
    childView: dart.fieldType(src__on_changes_component.OnChangesComponent)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/on_changes_component.ddc", {
    "package:lifecycle_hooks/src/on_changes_component.dart": src__on_changes_component
  }, '{"version":3,"sourceRoot":"","sources":["on_changes_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAMS;;;;;;;YAE0B,2CAAC,QAAQ,SAAI;IAAC;;iDAD1C,IAAS;IAAJ,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;IAsBV;;;;;;IAEE;;;;;;IAEM;;;;;;gBAED,OAAiC;AAC3C,aAAO,UAAQ,CAAC,SAAC,QAAe,EAAE,MAAmB;AACnD,YAAO,MAAM,YAAI,OAAO,CAAC,MAAM,aAAa;AAC5C,YAAO,OAAO,MAAM,cAAc,IAAI,OAChC,OACA,YAAI,OAAO,CAAC,MAAM,cAAc;AACtC,sBAAS,MAAI,CAAC,WAAE,QAAQ,oBAAkB,GAAG,qBAAmB,IAAI;;IAExE;;AAGE,oBAAS,QAAM;IACjB;;;IAlBK,UAAI;IAEF,WAAK;IAEC,eAAS,GAAG;EAe3B;;;;;;;;;;;;;;;;;;IASO;;;;;;IACE;;;;;;IACA;;;;;;IAEY;;;;;;;AAQjB,eAAI,GAAG,IAAI,kCAAI,CAAC;AAEhB,gBAAK,GAAG;AACR,4BAAS;;IACX;;;IAhBK,WAAI;IACF,YAAK;IACL,WAAK,GAAG;IAEI,eAAS;AAG1B,cAAK;EACP","file":"on_changes_component.ddc.js"}');
  // Exports:
  return {
    src__on_changes_component: src__on_changes_component
  };
});

//# sourceMappingURL=on_changes_component.ddc.js.map
