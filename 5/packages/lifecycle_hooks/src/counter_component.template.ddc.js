define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/lifecycle_hooks/src/counter_component', 'packages/lifecycle_hooks/src/logger_service', 'packages/lifecycle_hooks/src/spy_directive', 'packages/angular/src/core/change_detection/change_detection_util', 'packages/angular/src/di/reflector', 'packages/lifecycle_hooks/src/logger_service.template', 'packages/angular/angular.template', 'packages/lifecycle_hooks/src/spy_directive.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, counter_component, logger_service, spy_directive, change_detection_util, reflector, logger_service$, angular, spy_directive$) {
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
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__counter_component = counter_component.src__counter_component;
  const src__logger_service = logger_service.src__logger_service;
  const src__spy_directive = spy_directive.src__spy_directive;
  const src__core__change_detection__change_detection_util = change_detection_util.src__core__change_detection__change_detection_util;
  const src__di__reflector = reflector.src__di__reflector;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const src__spy_directive$46template = spy_directive$.src__spy_directive$46template;
  const _root = Object.create(null);
  const src__counter_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $text = dartx.text;
  const $_get = dartx._get;
  const $addEventListener = dartx.addEventListener;
  const $_set = dartx._set;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMyCounterComponent = () => (AppViewOfMyCounterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__counter_component.MyCounterComponent)))();
  let AppViewAndintToAppViewOfMyCounterComponent = () => (AppViewAndintToAppViewOfMyCounterComponent = dart.constFn(dart.fnType(AppViewOfMyCounterComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMyCounterComponent = () => (ComponentRefOfMyCounterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__counter_component.MyCounterComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMyCounterComponent = () => (ComponentFactoryOfMyCounterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__counter_component.MyCounterComponent)))();
  let IdentityMapOfString$SimpleChange = () => (IdentityMapOfString$SimpleChange = dart.constFn(_js_helper.IdentityMap$(core.String, src__core__change_detection__change_detection_util.SimpleChange)))();
  let AppViewOfCounterParentComponent = () => (AppViewOfCounterParentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__counter_component.CounterParentComponent)))();
  let AppViewAndintToAppViewOfCounterParentComponent = () => (AppViewAndintToAppViewOfCounterParentComponent = dart.constFn(dart.fnType(AppViewOfCounterParentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfCounterParentComponent = () => (ComponentRefOfCounterParentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__counter_component.CounterParentComponent)))();
  let ComponentFactoryOfCounterParentComponent = () => (ComponentFactoryOfCounterParentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__counter_component.CounterParentComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__counter_component$46template, {
    /*src__counter_component$46template.styles$MyCounterComponent*/get styles$MyCounterComponent() {
      return dart.constList(['.counter._ngcontent-%COMP% { background:lightyellow; padding:8px; margin-top:8px; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgFor_5_9 = Symbol('_NgFor_5_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  src__counter_component$46template.ViewMyCounterComponent0 = class ViewMyCounterComponent0 extends src__core__linker__app_view.AppView$(src__counter_component.MyCounterComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'counter';
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new('Counter=');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'h5', this[_el_0]);
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new('-- Counter Change Log --');
      this[_el_3][$append](_text_4);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], src__counter_component$46template.viewFactory_MyCounterComponent1);
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.changeLog;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_5_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_5_9].ngDoCheck();
      this[_appEl_5].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.counter);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__counter_component$46template.ViewMyCounterComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__counter_component$46template.ViewMyCounterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-counter'));
    let t = src__counter_component$46template.ViewMyCounterComponent0._renderType;
    t == null ? src__counter_component$46template.ViewMyCounterComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__counter_component$46template.styles$MyCounterComponent) : t;
    this.setupComponentType(src__counter_component$46template.ViewMyCounterComponent0._renderType);
  }).prototype = src__counter_component$46template.ViewMyCounterComponent0.prototype;
  dart.addTypeTests(src__counter_component$46template.ViewMyCounterComponent0);
  dart.setMethodSignature(src__counter_component$46template.ViewMyCounterComponent0, () => ({
    __proto__: dart.getMethods(src__counter_component$46template.ViewMyCounterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__counter_component.MyCounterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__counter_component$46template.ViewMyCounterComponent0, () => ({
    __proto__: dart.getFields(src__counter_component$46template.ViewMyCounterComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__counter_component$46template.ViewMyCounterComponent0, {
    /*src__counter_component$46template.ViewMyCounterComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__counter_component$46template.viewFactory_MyCounterComponent0 = function(parentView, parentIndex) {
    return new src__counter_component$46template.ViewMyCounterComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__counter_component$46template.viewFactory_MyCounterComponent0, AppViewAndintToAppViewOfMyCounterComponent());
  const _SpyDirective_0_5 = Symbol('_SpyDirective_0_5');
  const _text_1 = Symbol('_text_1');
  src__counter_component$46template._ViewMyCounterComponent1 = class _ViewMyCounterComponent1 extends src__core__linker__app_view.AppView$(src__counter_component.MyCounterComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_0], 'mySpy', '');
      this.addShimC(this[_el_0]);
      this[_SpyDirective_0_5] = new src__spy_directive.SpyDirective.new(src__logger_service.LoggerService._check(this.parentView.parentView.injectorGet(dart.wrapType(src__logger_service.LoggerService), this.parentView.viewData.parentIndex)));
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_chg = core.String._check(this.locals[$_get]('$implicit'));
      if (firstCheck) {
        this[_SpyDirective_0_5].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_chg);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      this[_SpyDirective_0_5].ngOnDestroy();
    }
  };
  (src__counter_component$46template._ViewMyCounterComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_SpyDirective_0_5] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__counter_component$46template._ViewMyCounterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__counter_component$46template.ViewMyCounterComponent0._renderType;
  }).prototype = src__counter_component$46template._ViewMyCounterComponent1.prototype;
  dart.addTypeTests(src__counter_component$46template._ViewMyCounterComponent1);
  dart.setMethodSignature(src__counter_component$46template._ViewMyCounterComponent1, () => ({
    __proto__: dart.getMethods(src__counter_component$46template._ViewMyCounterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__counter_component.MyCounterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__counter_component$46template._ViewMyCounterComponent1, () => ({
    __proto__: dart.getFields(src__counter_component$46template._ViewMyCounterComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_SpyDirective_0_5]: dart.fieldType(src__spy_directive.SpyDirective),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__counter_component$46template.viewFactory_MyCounterComponent1 = function(parentView, parentIndex) {
    return new src__counter_component$46template._ViewMyCounterComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__counter_component$46template.viewFactory_MyCounterComponent1, AppViewAndintToAppViewOfMyCounterComponent());
  dart.defineLazy(src__counter_component$46template, {
    /*src__counter_component$46template.styles$MyCounterComponentHost*/get styles$MyCounterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MyCounterComponent_0_5 = Symbol('_MyCounterComponent_0_5');
  src__counter_component$46template._ViewMyCounterComponentHost0 = class _ViewMyCounterComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__counter_component$46template.ViewMyCounterComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MyCounterComponent_0_5] = new src__counter_component.MyCounterComponent.new();
      this[_compView_0].create(this[_MyCounterComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMyCounterComponent()).new(0, this, this.rootEl, this[_MyCounterComponent_0_5]);
    }
    detectChangesInternal() {
      let changes = null;
      changes = null;
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__counter_component$46template._ViewMyCounterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MyCounterComponent_0_5] = null;
    src__counter_component$46template._ViewMyCounterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__counter_component$46template._ViewMyCounterComponentHost0.prototype;
  dart.addTypeTests(src__counter_component$46template._ViewMyCounterComponentHost0);
  dart.setMethodSignature(src__counter_component$46template._ViewMyCounterComponentHost0, () => ({
    __proto__: dart.getMethods(src__counter_component$46template._ViewMyCounterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__counter_component$46template._ViewMyCounterComponentHost0, () => ({
    __proto__: dart.getFields(src__counter_component$46template._ViewMyCounterComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__counter_component$46template.ViewMyCounterComponent0),
    [_MyCounterComponent_0_5]: dart.fieldType(src__counter_component.MyCounterComponent)
  }));
  src__counter_component$46template.viewFactory_MyCounterComponentHost0 = function(parentView, parentIndex) {
    return new src__counter_component$46template._ViewMyCounterComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__counter_component$46template.viewFactory_MyCounterComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__counter_component$46template, {
    /*src__counter_component$46template.MyCounterComponentNgFactory*/get MyCounterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMyCounterComponent()).new('my-counter', src__counter_component$46template.viewFactory_MyCounterComponentHost0, src__counter_component$46template._MyCounterComponentMetadata));
    },
    /*src__counter_component$46template.styles$CounterParentComponent*/get styles$CounterParentComponent() {
      return dart.constList(['.parent._ngcontent-%COMP% { background:gold; }'], dart.dynamic);
    }
  });
  const _el_1 = Symbol('_el_1');
  const _el_5 = Symbol('_el_5');
  const _el_7 = Symbol('_el_7');
  const _compView_7 = Symbol('_compView_7');
  const _MyCounterComponent_7_5 = Symbol('_MyCounterComponent_7_5');
  const _el_8 = Symbol('_el_8');
  const _appEl_10 = Symbol('_appEl_10');
  const _NgFor_10_9 = Symbol('_NgFor_10_9');
  let const$0;
  src__counter_component$46template.ViewCounterParentComponent0 = class ViewCounterParentComponent0 extends src__core__linker__app_view.AppView$(src__counter_component.CounterParentComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'parent';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new('Counter Spy');
      this[_el_1][$append](_text_2);
      this[_el_3] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_3]);
      let _text_4 = html.Text.new('Update counter');
      this[_el_3][$append](_text_4);
      this[_el_5] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_5]);
      let _text_6 = html.Text.new('Reset Counter');
      this[_el_5][$append](_text_6);
      this[_compView_7] = new src__counter_component$46template.ViewMyCounterComponent0.new(this, 7);
      this[_el_7] = this[_compView_7].rootEl;
      this[_el_0][$append](this[_el_7]);
      this.addShimC(html.HtmlElement._check(this[_el_7]));
      this[_MyCounterComponent_7_5] = new src__counter_component.MyCounterComponent.new();
      this[_compView_7].create(this[_MyCounterComponent_7_5], []);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_0]);
      this.addShimE(this[_el_8]);
      let _text_9 = html.Text.new('-- Spy Lifecycle Hook Log --');
      this[_el_8][$append](_text_9);
      let _anchor_10 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_10);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 0, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], src__counter_component$46template.viewFactory_CounterParentComponent1);
      this[_NgFor_10_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_10], _TemplateRef_10_8);
      this[_el_3][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'updateCounter')));
      this[_el_5][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'reset')));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changes = null;
      changes = null;
      let currVal_0 = _ctx.value;
      if (!(this[_expr_0] == currVal_0)) {
        this[_MyCounterComponent_7_5].counter = currVal_0;
        let t = changes;
        t == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t;
        changes[$_set]('counter', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_0], currVal_0));
        this[_expr_0] = currVal_0;
      }
      if (!(changes == null)) {
        this[_MyCounterComponent_7_5].ngOnChanges(changes);
      }
      let currVal_1 = _ctx.logs;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_10_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_10_9].ngDoCheck();
      this[_appEl_10].detectChangesInNestedViews();
      this[_compView_7].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_10];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_7];
      t$ == null ? null : t$.destroy();
    }
  };
  (src__counter_component$46template.ViewCounterParentComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_compView_7] = null;
    this[_MyCounterComponent_7_5] = null;
    this[_el_8] = null;
    this[_appEl_10] = null;
    this[_NgFor_10_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__counter_component$46template.ViewCounterParentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('counter-parent'));
    let t = src__counter_component$46template.ViewCounterParentComponent0._renderType;
    t == null ? src__counter_component$46template.ViewCounterParentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__counter_component$46template.styles$CounterParentComponent) : t;
    this.setupComponentType(src__counter_component$46template.ViewCounterParentComponent0._renderType);
  }).prototype = src__counter_component$46template.ViewCounterParentComponent0.prototype;
  dart.addTypeTests(src__counter_component$46template.ViewCounterParentComponent0);
  dart.setMethodSignature(src__counter_component$46template.ViewCounterParentComponent0, () => ({
    __proto__: dart.getMethods(src__counter_component$46template.ViewCounterParentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__counter_component.CounterParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__counter_component$46template.ViewCounterParentComponent0, () => ({
    __proto__: dart.getFields(src__counter_component$46template.ViewCounterParentComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.ButtonElement),
    [_el_5]: dart.fieldType(html.ButtonElement),
    [_el_7]: dart.fieldType(html.Element),
    [_compView_7]: dart.fieldType(src__counter_component$46template.ViewMyCounterComponent0),
    [_MyCounterComponent_7_5]: dart.fieldType(src__counter_component.MyCounterComponent),
    [_el_8]: dart.fieldType(html.Element),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_10_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(core.num),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__counter_component$46template.ViewCounterParentComponent0, {
    /*src__counter_component$46template.ViewCounterParentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__counter_component$46template.viewFactory_CounterParentComponent0 = function(parentView, parentIndex) {
    return new src__counter_component$46template.ViewCounterParentComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__counter_component$46template.viewFactory_CounterParentComponent0, AppViewAndintToAppViewOfCounterParentComponent());
  src__counter_component$46template._ViewCounterParentComponent1 = class _ViewCounterParentComponent1 extends src__core__linker__app_view.AppView$(src__counter_component.CounterParentComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_msg = core.String._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_msg);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__counter_component$46template._ViewCounterParentComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__counter_component$46template._ViewCounterParentComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__counter_component$46template.ViewCounterParentComponent0._renderType;
  }).prototype = src__counter_component$46template._ViewCounterParentComponent1.prototype;
  dart.addTypeTests(src__counter_component$46template._ViewCounterParentComponent1);
  dart.setMethodSignature(src__counter_component$46template._ViewCounterParentComponent1, () => ({
    __proto__: dart.getMethods(src__counter_component$46template._ViewCounterParentComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__counter_component.CounterParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__counter_component$46template._ViewCounterParentComponent1, () => ({
    __proto__: dart.getFields(src__counter_component$46template._ViewCounterParentComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__counter_component$46template.viewFactory_CounterParentComponent1 = function(parentView, parentIndex) {
    return new src__counter_component$46template._ViewCounterParentComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__counter_component$46template.viewFactory_CounterParentComponent1, AppViewAndintToAppViewOfCounterParentComponent());
  dart.defineLazy(src__counter_component$46template, {
    /*src__counter_component$46template.styles$CounterParentComponentHost*/get styles$CounterParentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _LoggerService_0_5 = Symbol('_LoggerService_0_5');
  const _CounterParentComponent_0_6 = Symbol('_CounterParentComponent_0_6');
  src__counter_component$46template._ViewCounterParentComponentHost0 = class _ViewCounterParentComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__counter_component$46template.ViewCounterParentComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_LoggerService_0_5] = new src__logger_service.LoggerService.new();
      this[_CounterParentComponent_0_6] = new src__counter_component.CounterParentComponent.new(this[_LoggerService_0_5]);
      this[_compView_0].create(this[_CounterParentComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfCounterParentComponent()).new(0, this, this.rootEl, this[_CounterParentComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__logger_service.LoggerService) && 0 === nodeIndex) {
        return this[_LoggerService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__counter_component$46template._ViewCounterParentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_LoggerService_0_5] = null;
    this[_CounterParentComponent_0_6] = null;
    src__counter_component$46template._ViewCounterParentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__counter_component$46template._ViewCounterParentComponentHost0.prototype;
  dart.addTypeTests(src__counter_component$46template._ViewCounterParentComponentHost0);
  dart.setMethodSignature(src__counter_component$46template._ViewCounterParentComponentHost0, () => ({
    __proto__: dart.getMethods(src__counter_component$46template._ViewCounterParentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__counter_component$46template._ViewCounterParentComponentHost0, () => ({
    __proto__: dart.getFields(src__counter_component$46template._ViewCounterParentComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__counter_component$46template.ViewCounterParentComponent0),
    [_LoggerService_0_5]: dart.fieldType(src__logger_service.LoggerService),
    [_CounterParentComponent_0_6]: dart.fieldType(src__counter_component.CounterParentComponent)
  }));
  src__counter_component$46template.viewFactory_CounterParentComponentHost0 = function(parentView, parentIndex) {
    return new src__counter_component$46template._ViewCounterParentComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__counter_component$46template.viewFactory_CounterParentComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__counter_component$46template, {
    /*src__counter_component$46template.CounterParentComponentNgFactory*/get CounterParentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfCounterParentComponent()).new('counter-parent', src__counter_component$46template.viewFactory_CounterParentComponentHost0, src__counter_component$46template._CounterParentComponentMetadata));
    },
    /*src__counter_component$46template._MyCounterComponentMetadata*/get _MyCounterComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__counter_component$46template._CounterParentComponentMetadata*/get _CounterParentComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__counter_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__counter_component$46template.initReflector = function() {
    if (dart.test(src__counter_component$46template._visited)) {
      return;
    }
    src__counter_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__counter_component.MyCounterComponent), src__counter_component$46template.MyCounterComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__counter_component.CounterParentComponent), src__counter_component$46template.CounterParentComponentNgFactory);
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
    src__spy_directive$46template.initReflector();
  };
  dart.fn(src__counter_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/counter_component.template.ddc", {
    "package:lifecycle_hooks/src/counter_component.template.dart": src__counter_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["counter_component.template.dart"],"names":[],"mappings":"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","file":"counter_component.template.ddc.js"}');
  // Exports:
  return {
    src__counter_component$46template: src__counter_component$46template
  };
});

//# sourceMappingURL=counter_component.template.ddc.js.map
