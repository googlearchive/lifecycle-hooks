define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/lifecycle_hooks/src/logger_service'], function(dart_sdk, lifecycle_hooks, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__after_content_component = Object.create(_root);
  const $clear = dartx.clear;
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  src__after_content_component.ChildComponent = class ChildComponent extends core.Object {
    get hero() {
      return this[hero];
    }
    set hero(value) {
      this[hero] = value;
    }
  };
  (src__after_content_component.ChildComponent.new = function() {
    this[hero] = 'Magneta';
  }).prototype = src__after_content_component.ChildComponent.prototype;
  dart.addTypeTests(src__after_content_component.ChildComponent);
  const hero = Symbol("ChildComponent.hero");
  dart.setFieldSignature(src__after_content_component.ChildComponent, () => ({
    __proto__: dart.getFields(src__after_content_component.ChildComponent.__proto__),
    hero: dart.fieldType(core.String)
  }));
  const _logger = Symbol('_logger');
  const _prevHero = Symbol('_prevHero');
  const _logIt = Symbol('_logIt');
  const _doSomething = Symbol('_doSomething');
  src__after_content_component.AfterContentComponent = class AfterContentComponent extends core.Object {
    get comment() {
      return this[comment];
    }
    set comment(value) {
      this[comment] = value;
    }
    get contentChild() {
      return this[contentChild];
    }
    set contentChild(value) {
      this[contentChild] = value;
    }
    ngAfterContentInit() {
      this[_logIt]('AfterContentInit');
      this[_doSomething]();
    }
    ngAfterContentChecked() {
      if (this[_prevHero] == (() => {
        let t = this.contentChild;
        return t == null ? null : t.hero;
      })()) {
        this[_logIt]('AfterContentChecked (no change)');
      } else {
        let t = this.contentChild;
        this[_prevHero] = t == null ? null : t.hero;
        this[_logIt]('AfterContentChecked');
        this[_doSomething]();
      }
    }
    [_doSomething]() {
      this.comment = this.contentChild.hero.length > 10 ? "That's a long name" : '';
    }
    [_logIt](method) {
      let child = this.contentChild;
      let message = dart.str`${method}: ${(() => {
        let l = child == null ? null : child.hero;
        return l != null ? l : 'no';
      })()} child content`;
      this[_logger].log(message);
    }
  };
  (src__after_content_component.AfterContentComponent.new = function(logger) {
    this[_prevHero] = '';
    this[comment] = '';
    this[contentChild] = null;
    this[_logger] = logger;
    this[_logIt]('AfterContent constructor');
  }).prototype = src__after_content_component.AfterContentComponent.prototype;
  dart.addTypeTests(src__after_content_component.AfterContentComponent);
  const comment = Symbol("AfterContentComponent.comment");
  const contentChild = Symbol("AfterContentComponent.contentChild");
  src__after_content_component.AfterContentComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterContentChecked, src__core__metadata__lifecycle_hooks.AfterContentInit];
  dart.setMethodSignature(src__after_content_component.AfterContentComponent, () => ({
    __proto__: dart.getMethods(src__after_content_component.AfterContentComponent.__proto__),
    ngAfterContentInit: dart.fnType(dart.dynamic, []),
    ngAfterContentChecked: dart.fnType(dart.dynamic, []),
    [_doSomething]: dart.fnType(dart.void, []),
    [_logIt]: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__after_content_component.AfterContentComponent, () => ({
    __proto__: dart.getFields(src__after_content_component.AfterContentComponent.__proto__),
    [_prevHero]: dart.fieldType(core.String),
    comment: dart.fieldType(core.String),
    contentChild: dart.fieldType(src__after_content_component.ChildComponent),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService)
  }));
  src__after_content_component.AfterContentParentComponent = class AfterContentParentComponent extends core.Object {
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
  (src__after_content_component.AfterContentParentComponent.new = function(logger) {
    this[show] = true;
    this[_logger] = logger;
  }).prototype = src__after_content_component.AfterContentParentComponent.prototype;
  dart.addTypeTests(src__after_content_component.AfterContentParentComponent);
  const show = Symbol("AfterContentParentComponent.show");
  dart.setMethodSignature(src__after_content_component.AfterContentParentComponent, () => ({
    __proto__: dart.getMethods(src__after_content_component.AfterContentParentComponent.__proto__),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__after_content_component.AfterContentParentComponent, () => ({
    __proto__: dart.getGetters(src__after_content_component.AfterContentParentComponent.__proto__),
    logs: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__after_content_component.AfterContentParentComponent, () => ({
    __proto__: dart.getFields(src__after_content_component.AfterContentParentComponent.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService),
    show: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/after_content_component.ddc", {
    "package:lifecycle_hooks/src/after_content_component.dart": src__after_content_component
  }, '{"version":3,"sourceRoot":"","sources":["after_content_component.dart"],"names":[],"mappings":";;;;;;;;;;;;IAYS;;;;;;;;cAAI,GAAG;EAChB;;;;;;;;;;;;IAeS;;;;;;IAIQ;;;;;;;AAUb,kBAAM,CAAC;AACP,wBAAY;IACd;;AAIE,UAAI,eAAS;gBAAI,iBAAY;;YAAQ;AACnC,oBAAM,CAAC;aACF;AACL,gBAAY,iBAAY;uBAAf;AACT,oBAAM,CAAC;AACP,0BAAY;;IAEhB;;AAIE,kBAAO,GAAG,AAAA,AAAyB,iBAAb,KAAK,OAAO,GAAG,KAAK,uBAAuB;IACnE;aAEY,MAAa;AACvB,UAAI,QAAQ,iBAAY;AACxB,UAAI,UAAU,WAAG,MAAM;gBAAK,KAAK,kBAAL,KAAK,KAAM;+BAAI;;AAC3C,mBAAO,IAAI,CAAC,OAAO;IACrB;;qEA9B2B,MAAO;IAT3B,eAAS,GAAG;IACZ,aAAO,GAAG;IAIF,kBAAY;IAIA,aAAO,GAAP,MAAO;AAChC,gBAAM,CAAC;EACT;;;;;;;;;;;;;;;;;;;;IAwDK;;;;;;;YAIoB,cAAO,KAAK;;;AAGnC,eAAI,QAAM;AAEV,eAAI,GAAG;AACP,8BAAO,KAAK,YAAQ,QAAC,CAAC;AACpB,iBAAI,GAAG;;IAEX;;2EAXiC,MAAO;IAFnC,UAAI,GAAG;IAEqB,aAAO,GAAP,MAAO;EAAC","file":"after_content_component.ddc.js"}');
  // Exports:
  return {
    src__after_content_component: src__after_content_component
  };
});

//# sourceMappingURL=after_content_component.ddc.js.map
