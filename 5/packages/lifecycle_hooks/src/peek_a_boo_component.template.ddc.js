define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/lifecycle_hooks/src/peek_a_boo_component', 'packages/lifecycle_hooks/src/logger_service', 'packages/angular/src/di/reflector', 'packages/lifecycle_hooks/src/logger_service.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, peek_a_boo_component, logger_service, reflector, logger_service$, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__peek_a_boo_component = peek_a_boo_component.src__peek_a_boo_component;
  const src__logger_service = logger_service.src__logger_service;
  const src__di__reflector = reflector.src__di__reflector;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__peek_a_boo_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfPeekABooComponent = () => (AppViewOfPeekABooComponent = dart.constFn(src__core__linker__app_view.AppView$(src__peek_a_boo_component.PeekABooComponent)))();
  let AppViewAndintToAppViewOfPeekABooComponent = () => (AppViewAndintToAppViewOfPeekABooComponent = dart.constFn(dart.fnType(AppViewOfPeekABooComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfPeekABooComponent = () => (ComponentRefOfPeekABooComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__peek_a_boo_component.PeekABooComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfPeekABooComponent = () => (ComponentFactoryOfPeekABooComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__peek_a_boo_component.PeekABooComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__peek_a_boo_component$46template, {
    /*src__peek_a_boo_component$46template.styles$PeekABooComponent*/get styles$PeekABooComponent() {
      return dart.constList(['p._ngcontent-%COMP% { background:lightyellow; padding:8px; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__peek_a_boo_component$46template.ViewPeekABooComponent0 = class ViewPeekABooComponent0 extends src__core__linker__app_view.AppView$(src__peek_a_boo_component.PeekABooComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Now you see my hero, ');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.name;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__peek_a_boo_component$46template.ViewPeekABooComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    src__peek_a_boo_component$46template.ViewPeekABooComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('peek-a-boo'));
    let t = src__peek_a_boo_component$46template.ViewPeekABooComponent0._renderType;
    t == null ? src__peek_a_boo_component$46template.ViewPeekABooComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__peek_a_boo_component$46template.styles$PeekABooComponent) : t;
    this.setupComponentType(src__peek_a_boo_component$46template.ViewPeekABooComponent0._renderType);
  }).prototype = src__peek_a_boo_component$46template.ViewPeekABooComponent0.prototype;
  dart.addTypeTests(src__peek_a_boo_component$46template.ViewPeekABooComponent0);
  dart.setMethodSignature(src__peek_a_boo_component$46template.ViewPeekABooComponent0, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_component$46template.ViewPeekABooComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__peek_a_boo_component.PeekABooComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__peek_a_boo_component$46template.ViewPeekABooComponent0, () => ({
    __proto__: dart.getFields(src__peek_a_boo_component$46template.ViewPeekABooComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__peek_a_boo_component$46template.ViewPeekABooComponent0, {
    /*src__peek_a_boo_component$46template.ViewPeekABooComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__peek_a_boo_component$46template.viewFactory_PeekABooComponent0 = function(parentView, parentIndex) {
    return new src__peek_a_boo_component$46template.ViewPeekABooComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__peek_a_boo_component$46template.viewFactory_PeekABooComponent0, AppViewAndintToAppViewOfPeekABooComponent());
  dart.defineLazy(src__peek_a_boo_component$46template, {
    /*src__peek_a_boo_component$46template.styles$PeekABooComponentHost*/get styles$PeekABooComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _PeekABooComponent_0_5 = Symbol('_PeekABooComponent_0_5');
  src__peek_a_boo_component$46template._ViewPeekABooComponentHost0 = class _ViewPeekABooComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__peek_a_boo_component$46template.ViewPeekABooComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_PeekABooComponent_0_5] = new src__peek_a_boo_component.PeekABooComponent.new(src__logger_service.LoggerService._check(this.injectorGet(dart.wrapType(src__logger_service.LoggerService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_PeekABooComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfPeekABooComponent()).new(0, this, this.rootEl, this[_PeekABooComponent_0_5]);
    }
    detectChangesInternal() {
      let changes = null;
      let firstCheck = this.cdState === 0;
      changes = null;
      if (firstCheck) {
        this[_PeekABooComponent_0_5].ngOnInit();
      }
      this[_PeekABooComponent_0_5].ngDoCheck();
      if (firstCheck) {
        this[_PeekABooComponent_0_5].ngAfterContentInit();
      }
      this[_PeekABooComponent_0_5].ngAfterContentChecked();
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_PeekABooComponent_0_5].ngAfterViewInit();
      }
      this[_PeekABooComponent_0_5].ngAfterViewChecked();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_PeekABooComponent_0_5].ngOnDestroy();
    }
  };
  (src__peek_a_boo_component$46template._ViewPeekABooComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_PeekABooComponent_0_5] = null;
    src__peek_a_boo_component$46template._ViewPeekABooComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__peek_a_boo_component$46template._ViewPeekABooComponentHost0.prototype;
  dart.addTypeTests(src__peek_a_boo_component$46template._ViewPeekABooComponentHost0);
  dart.setMethodSignature(src__peek_a_boo_component$46template._ViewPeekABooComponentHost0, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_component$46template._ViewPeekABooComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__peek_a_boo_component$46template._ViewPeekABooComponentHost0, () => ({
    __proto__: dart.getFields(src__peek_a_boo_component$46template._ViewPeekABooComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__peek_a_boo_component$46template.ViewPeekABooComponent0),
    [_PeekABooComponent_0_5]: dart.fieldType(src__peek_a_boo_component.PeekABooComponent)
  }));
  src__peek_a_boo_component$46template.viewFactory_PeekABooComponentHost0 = function(parentView, parentIndex) {
    return new src__peek_a_boo_component$46template._ViewPeekABooComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__peek_a_boo_component$46template.viewFactory_PeekABooComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__peek_a_boo_component$46template, {
    /*src__peek_a_boo_component$46template.PeekABooComponentNgFactory*/get PeekABooComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfPeekABooComponent()).new('peek-a-boo', src__peek_a_boo_component$46template.viewFactory_PeekABooComponentHost0, src__peek_a_boo_component$46template._PeekABooComponentMetadata));
    },
    /*src__peek_a_boo_component$46template._PeekABooComponentMetadata*/get _PeekABooComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__peek_a_boo_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__peek_a_boo_component$46template.initReflector = function() {
    if (dart.test(src__peek_a_boo_component$46template._visited)) {
      return;
    }
    src__peek_a_boo_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__peek_a_boo_component.PeekABooComponent), src__peek_a_boo_component$46template.PeekABooComponentNgFactory);
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__peek_a_boo_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/peek_a_boo_component.template.ddc", {
    "package:lifecycle_hooks/src/peek_a_boo_component.template.dart": src__peek_a_boo_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["peek_a_boo_component.template.dart"],"names":[],"mappings":";;;;QAsCc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;;;;MATP,6DAAwB;YAAG,iBAAO;;;;;;;;;AAclD,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,mBAAQ,CAAC,WAAK;AACd,UAAa,UAHH,AAGa,AAAI,IAHV,SAGsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GALG,AAKA,AAAI,IALG,SAKS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAgC,OAAO,QAAG;AAC1C,cAAmB,IAAI,KAAK;UAAtB,4BAA0B;AAChC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,GAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;8EA5BuB,UAA2B,EAAE,WAAe;IAJnD,WAAK;IACR,aAAO;IAChB,aAAO;AAE4D,yFAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,mFAAW;gBAAX,uEAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,6DAAwB;AAC9G,2BAAkB,CAAC,uEAAW;EAChC;;;;;;;;;4BAKY,IAAO;8BAAP,IAAO;;;;MAVQ,uEAAW;;;;;iFAgC0B,UAA2B,EAAE,WAAe;AAC5G,UAAO,KAAI,+DAAsB,CAAC,UAAU,EAAE,WAAW;EAC3D;;;MAEoB,iEAA4B;YAAG;;;;;;;AAQ/C,uBAAW,GAAG,IAAI,+DAAsB,CAAC,MAAM;AAC/C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,kCAAsB,GAAG,IAAI,+CAAyB,0CAAC,gBAAgB,CAAS,gDAAa,EAAE,aAAQ,YAAY;AACnH,uBAAW,OAAO,CAAC,4BAAsB,EAAE,qBAAgB;AAC3D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,uCAAuC,CAAC,GAAG,MAAM,WAAM,EAAE,4BAAsB;IAC5F;;AAIE,UAA0B;AAC1B,UAAK,aAAc,YAAY,KAAI;AACnC,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,oCAAsB,SAAS;;AAEjC,kCAAsB,UAAU;AAChC,UAAI,UAAU,EAAE;AACd,oCAAsB,mBAAmB;;AAE3C,kCAAsB,sBAAsB;AAC5C,uBAAW,cAAc;AACzB,UAAI,UAAU,EAAE;AACd,oCAAsB,gBAAgB;;AAExC,kCAAsB,mBAAmB;IAC3C;;AAIE,+BAAW;;AACX,kCAAsB,YAAY;IACpC;;mFAnC4B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,4BAAsB;AAC4B,8FAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;qFAsCjI,UAA2B,EAAE,WAAe;AACrF,UAAO,KAAI,oEAA2B,CAAC,UAAU,EAAE,WAAW;EAChE;;;MAEkD,+DAA0B;YAAG,gBAAM,2CAA2C,CAAC,cAAc,uEAAkC,EAAE,+DAA0B;;MACvM,+DAA0B;YAAG;;MAC/B,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAO,oCAAiB,CAAC,0DAAiB,EAAE,+DAA0B;AACtE,IAAM,4CAAa;AACnB,IAAM,gCAAa;EACrB","file":"peek_a_boo_component.template.ddc.js"}');
  // Exports:
  return {
    src__peek_a_boo_component$46template: src__peek_a_boo_component$46template
  };
});

//# sourceMappingURL=peek_a_boo_component.template.ddc.js.map
