define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__do_check_component = Object.create(_root);
  const $add = dartx.add;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $clear = dartx.clear;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__do_check_component.Hero = class Hero extends core.Object {
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
  (src__do_check_component.Hero.new = function(name) {
    this[name$] = name;
  }).prototype = src__do_check_component.Hero.prototype;
  dart.addTypeTests(src__do_check_component.Hero);
  const name$ = Symbol("Hero.name");
  dart.setMethodSignature(src__do_check_component.Hero, () => ({
    __proto__: dart.getMethods(src__do_check_component.Hero.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__do_check_component.Hero, () => ({
    __proto__: dart.getFields(src__do_check_component.Hero.__proto__),
    name: dart.fieldType(core.String)
  }));
  src__do_check_component.DoCheckComponent = class DoCheckComponent extends core.Object {
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
    get changeDetected() {
      return this[changeDetected];
    }
    set changeDetected(value) {
      this[changeDetected] = value;
    }
    get changeLog() {
      return this[changeLog];
    }
    set changeLog(value) {
      this[changeLog] = value;
    }
    get oldHeroName() {
      return this[oldHeroName];
    }
    set oldHeroName(value) {
      this[oldHeroName] = value;
    }
    get oldPower() {
      return this[oldPower];
    }
    set oldPower(value) {
      this[oldPower] = value;
    }
    get oldLogLength() {
      return this[oldLogLength];
    }
    set oldLogLength(value) {
      this[oldLogLength] = value;
    }
    get noChangeCount() {
      return this[noChangeCount];
    }
    set noChangeCount(value) {
      this[noChangeCount] = value;
    }
    ngDoCheck() {
      if (this.hero.name != this.oldHeroName) {
        this.changeDetected = true;
        this.changeLog[$add](dart.str`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
        this.oldHeroName = this.hero.name;
      }
      if (this.power != this.oldPower) {
        this.changeDetected = true;
        this.changeLog[$add](dart.str`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
        this.oldPower = this.power;
      }
      if (dart.test(this.changeDetected)) {
        this.noChangeCount = 0;
      } else {
        let count = this.noChangeCount = dart.notNull(this.noChangeCount) + 1;
        let noChangeMsg = dart.str`DoCheck called ${count}x when no change to hero or power`;
        if (count === 1) {
          this.changeLog[$add](noChangeMsg);
        } else {
          this.changeLog[$_set](dart.notNull(this.changeLog[$length]) - 1, noChangeMsg);
        }
      }
      this.changeDetected = false;
    }
    reset() {
      this.changeDetected = true;
      this.changeLog[$clear]();
    }
  };
  (src__do_check_component.DoCheckComponent.new = function() {
    this[hero] = null;
    this[power] = null;
    this[changeDetected] = false;
    this[changeLog] = JSArrayOfString().of([]);
    this[oldHeroName] = '';
    this[oldPower] = '';
    this[oldLogLength] = 0;
    this[noChangeCount] = 0;
  }).prototype = src__do_check_component.DoCheckComponent.prototype;
  dart.addTypeTests(src__do_check_component.DoCheckComponent);
  const hero = Symbol("DoCheckComponent.hero");
  const power = Symbol("DoCheckComponent.power");
  const changeDetected = Symbol("DoCheckComponent.changeDetected");
  const changeLog = Symbol("DoCheckComponent.changeLog");
  const oldHeroName = Symbol("DoCheckComponent.oldHeroName");
  const oldPower = Symbol("DoCheckComponent.oldPower");
  const oldLogLength = Symbol("DoCheckComponent.oldLogLength");
  const noChangeCount = Symbol("DoCheckComponent.noChangeCount");
  src__do_check_component.DoCheckComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.DoCheck];
  dart.setMethodSignature(src__do_check_component.DoCheckComponent, () => ({
    __proto__: dart.getMethods(src__do_check_component.DoCheckComponent.__proto__),
    ngDoCheck: dart.fnType(dart.dynamic, []),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__do_check_component.DoCheckComponent, () => ({
    __proto__: dart.getFields(src__do_check_component.DoCheckComponent.__proto__),
    hero: dart.fieldType(src__do_check_component.Hero),
    power: dart.fieldType(core.String),
    changeDetected: dart.fieldType(core.bool),
    changeLog: dart.fieldType(ListOfString()),
    oldHeroName: dart.fieldType(core.String),
    oldPower: dart.fieldType(core.String),
    oldLogLength: dart.fieldType(core.int),
    noChangeCount: dart.fieldType(core.int)
  }));
  src__do_check_component.DoCheckParentComponent = class DoCheckParentComponent extends core.Object {
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
      this.hero = new src__do_check_component.Hero.new('Windstorm');
      this.power = 'sing';
      let t = this.childView;
      t == null ? null : t.reset();
    }
  };
  (src__do_check_component.DoCheckParentComponent.new = function() {
    this[hero$] = null;
    this[power$] = null;
    this[title] = 'DoCheck';
    this[childView] = null;
    this.reset();
  }).prototype = src__do_check_component.DoCheckParentComponent.prototype;
  dart.addTypeTests(src__do_check_component.DoCheckParentComponent);
  const hero$ = Symbol("DoCheckParentComponent.hero");
  const power$ = Symbol("DoCheckParentComponent.power");
  const title = Symbol("DoCheckParentComponent.title");
  const childView = Symbol("DoCheckParentComponent.childView");
  dart.setMethodSignature(src__do_check_component.DoCheckParentComponent, () => ({
    __proto__: dart.getMethods(src__do_check_component.DoCheckParentComponent.__proto__),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__do_check_component.DoCheckParentComponent, () => ({
    __proto__: dart.getFields(src__do_check_component.DoCheckParentComponent.__proto__),
    hero: dart.fieldType(src__do_check_component.Hero),
    power: dart.fieldType(core.String),
    title: dart.fieldType(core.String),
    childView: dart.fieldType(src__do_check_component.DoCheckComponent)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/do_check_component.ddc", {
    "package:lifecycle_hooks/src/do_check_component.dart": src__do_check_component
  }, '{"version":3,"sourceRoot":"","sources":["do_check_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAIS;;;;;;;YAE0B,2CAAC,QAAQ,SAAI;IAAC;;+CAD1C,IAAS;IAAJ,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;IAsBV;;;;;;IAEE;;;;;;IAEF;;;;;;IACQ;;;;;;IAEN;;;;;;IACA;;;;;;IACH;;;;;;IACA;;;;;;;AAGF,UAAI,SAAI,KAAK,IAAI,gBAAW,EAAE;AAC5B,2BAAc,GAAG;AACjB,sBAAS,MAAI,CACT,0CAAkC,SAAI,KAAK,WAAU,gBAAW;AACpE,wBAAW,GAAG,SAAI,KAAK;;AAGzB,UAAI,UAAK,IAAI,aAAQ,EAAE;AACrB,2BAAc,GAAG;AACjB,sBAAS,MAAI,CAAC,sCAA6B,UAAK,WAAS,aAAQ;AACjE,qBAAQ,GAAG,UAAK;;AAGlB,oBAAI,mBAAc,GAAE;AAClB,0BAAa,GAAG;aACX;AAEL,YAAI,0BAAqB,GAzD/B,aAyDkB,kBAAa,IAAI;AAC7B,YAAI,cACA,0BAAkB,KAAK;AAC3B,YAAI,KAAK,KAAI,GAAG;AAEd,wBAAS,MAAI,CAAC,WAAW;eACpB;AAEL,wBAAS,QAAkB,aAAjB,cAAS,SAAO,IAAG,GAAK,WAAW;;;AAIjD,yBAAc,GAAG;IACnB;;AAGE,yBAAc,GAAG;AACjB,oBAAS,QAAM;IACjB;;;IAhDK,UAAI;IAEF,WAAK;IAEP,oBAAc,GAAG;IACT,eAAS,GAAG;IAElB,iBAAW,GAAG;IACd,cAAQ,GAAG;IACd,kBAAY,GAAG;IACf,mBAAa,GAAG;EAuCtB;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWO;;;;;;IACE;;;;;;IACA;;;;;;IAEU;;;;;;;AAOf,eAAI,GAAG,IAAI,gCAAI,CAAC;AAChB,gBAAK,GAAG;AACR,4BAAS;;IACX;;;IAdK,WAAI;IACF,YAAK;IACL,WAAK,GAAG;IAEE,eAAS;AAGxB,cAAK;EACP","file":"do_check_component.ddc.js"}');
  // Exports:
  return {
    src__do_check_component: src__do_check_component
  };
});

//# sourceMappingURL=do_check_component.ddc.js.map
