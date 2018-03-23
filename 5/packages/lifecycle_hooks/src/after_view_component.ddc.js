define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/lifecycle_hooks/src/logger_service'], function(dart_sdk, lifecycle_hooks, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__after_view_component = Object.create(_root);
  const $clear = dartx.clear;
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  src__after_view_component.ChildViewComponent = class ChildViewComponent extends core.Object {
    get hero() {
      return this[hero];
    }
    set hero(value) {
      this[hero] = value;
    }
  };
  (src__after_view_component.ChildViewComponent.new = function() {
    this[hero] = 'Magneta';
  }).prototype = src__after_view_component.ChildViewComponent.prototype;
  dart.addTypeTests(src__after_view_component.ChildViewComponent);
  const hero = Symbol("ChildViewComponent.hero");
  dart.setFieldSignature(src__after_view_component.ChildViewComponent, () => ({
    __proto__: dart.getFields(src__after_view_component.ChildViewComponent.__proto__),
    hero: dart.fieldType(core.String)
  }));
  const _logger = Symbol('_logger');
  const _prevHero = Symbol('_prevHero');
  const _logIt = Symbol('_logIt');
  const _doSomething = Symbol('_doSomething');
  src__after_view_component.AfterViewComponent = class AfterViewComponent extends core.Object {
    get viewChild() {
      return this[viewChild];
    }
    set viewChild(value) {
      this[viewChild] = value;
    }
    ngAfterViewInit() {
      this[_logIt]('AfterViewInit');
      this[_doSomething]();
    }
    ngAfterViewChecked() {
      if (this[_prevHero] == this.viewChild.hero) {
        this[_logIt]('AfterViewChecked (no change)');
      } else {
        this[_prevHero] = this.viewChild.hero;
        this[_logIt]('AfterViewChecked');
        this[_doSomething]();
      }
    }
    get comment() {
      return this[comment];
    }
    set comment(value) {
      this[comment] = value;
    }
    [_doSomething]() {
      let c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
      if (c !== this.comment) {
        dart.dsend(this[_logger].tick(), 'then', dart.fn(_ => {
          this.comment = c;
        }, dynamicToNull()));
      }
    }
    [_logIt](method) {
      let child = this.viewChild;
      let message = dart.str`${method}: ${child != null ? child.hero : 'no'} child view`;
      this[_logger].log(message);
    }
  };
  (src__after_view_component.AfterViewComponent.new = function(logger) {
    this[_prevHero] = '';
    this[viewChild] = null;
    this[comment] = '';
    this[_logger] = logger;
    this[_logIt]('AfterView constructor');
  }).prototype = src__after_view_component.AfterViewComponent.prototype;
  dart.addTypeTests(src__after_view_component.AfterViewComponent);
  const viewChild = Symbol("AfterViewComponent.viewChild");
  const comment = Symbol("AfterViewComponent.comment");
  src__after_view_component.AfterViewComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewChecked, src__core__metadata__lifecycle_hooks.AfterViewInit];
  dart.setMethodSignature(src__after_view_component.AfterViewComponent, () => ({
    __proto__: dart.getMethods(src__after_view_component.AfterViewComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.dynamic, []),
    ngAfterViewChecked: dart.fnType(dart.dynamic, []),
    [_doSomething]: dart.fnType(dart.void, []),
    [_logIt]: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__after_view_component.AfterViewComponent, () => ({
    __proto__: dart.getFields(src__after_view_component.AfterViewComponent.__proto__),
    [_prevHero]: dart.fieldType(core.String),
    viewChild: dart.fieldType(src__after_view_component.ChildViewComponent),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService),
    comment: dart.fieldType(core.String)
  }));
  src__after_view_component.AfterViewParentComponent = class AfterViewParentComponent extends core.Object {
    get show() {
      return this[show];
    }
    set show(value) {
      this[show] = value;
    }
    get logs() {
      return this[_logger].logs;
    }
    reset() {
      this.logs[$clear]();
      this.show = false;
      dart.dsend(this[_logger].tick(), 'then', dart.fn(_ => {
        this.show = true;
      }, dynamicToNull()));
    }
  };
  (src__after_view_component.AfterViewParentComponent.new = function(logger) {
    this[show] = true;
    this[_logger] = logger;
  }).prototype = src__after_view_component.AfterViewParentComponent.prototype;
  dart.addTypeTests(src__after_view_component.AfterViewParentComponent);
  const show = Symbol("AfterViewParentComponent.show");
  dart.setMethodSignature(src__after_view_component.AfterViewParentComponent, () => ({
    __proto__: dart.getMethods(src__after_view_component.AfterViewParentComponent.__proto__),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__after_view_component.AfterViewParentComponent, () => ({
    __proto__: dart.getGetters(src__after_view_component.AfterViewParentComponent.__proto__),
    logs: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__after_view_component.AfterViewParentComponent, () => ({
    __proto__: dart.getFields(src__after_view_component.AfterViewParentComponent.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService),
    show: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/after_view_component.ddc", {
    "package:lifecycle_hooks/src/after_view_component.dart": src__after_view_component
  }, '{"version":3,"sourceRoot":"","sources":["after_view_component.dart"],"names":[],"mappings":";;;;;;;;;;;;IAYS;;;;;;;;cAAI,GAAG;EAChB;;;;;;;;;;;;IAiBqB;;;;;;;AAUjB,kBAAM,CAAC;AACP,wBAAY;IACd;;AAIE,UAAI,eAAS,IAAI,cAAS,KAAK,EAAE;AAC/B,oBAAM,CAAC;aACF;AACL,uBAAS,GAAG,cAAS,KAAK;AAC1B,oBAAM,CAAC;AACP,0BAAY;;IAEhB;IAEO;;;;;;;AAIL,UAAI,IAAI,AAAA,AAAsB,cAAb,KAAK,OAAO,GAAG,KAAK,uBAAuB;AAC5D,UAAI,CAAC,KAAI,YAAO,EAAE;AAEhB,gCAAO,KAAK,YAAQ,QAAC,CAAC;AACpB,sBAAO,GAAG,CAAC;;;IAGjB;aAEY,MAAa;AACvB,UAAI,QAAQ,cAAS;AACrB,UAAI,UAAU,WAAG,MAAM,KAAK,KAAK,IAAI,OAAO,KAAK,KAAK,GAAC;AACvD,mBAAO,IAAI,CAAC,OAAO;IACrB;;+DAtCwB,MAAO;IAR3B,eAAS,GAAG;IAIG,eAAS;IAyBrB,aAAO,GAAG;IArBO,aAAO,GAAP,MAAO;AAC7B,gBAAM,CAAC;EACT;;;;;;;;;;;;;;;;;;;;IA4DK;;;;;;;YAIoB,cAAO,KAAK;;;AAGnC,eAAI,QAAM;AAEV,eAAI,GAAG;AACP,8BAAO,KAAK,YAAQ,QAAC,CAAC;AACpB,iBAAI,GAAG;;IAEX;;qEAX8B,MAAO;IAFhC,UAAI,GAAG;IAEkB,aAAO,GAAP,MAAO;EAAC","file":"after_view_component.ddc.js"}');
  // Exports:
  return {
    src__after_view_component: src__after_view_component
  };
});

//# sourceMappingURL=after_view_component.ddc.js.map
