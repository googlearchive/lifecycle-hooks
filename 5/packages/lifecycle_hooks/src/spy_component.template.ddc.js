define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/lifecycle_hooks/src/spy_component', 'packages/lifecycle_hooks/src/logger_service', 'packages/lifecycle_hooks/src/spy_directive', 'packages/angular/src/di/reflector', 'packages/lifecycle_hooks/src/logger_service.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template', 'packages/lifecycle_hooks/src/spy_directive.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, default_value_accessor, control_value_accessor, ng_model, ng_for, opaque_token, control_container, spy_component, logger_service, spy_directive, reflector, logger_service$, angular, angular_forms, spy_directive$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
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
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__spy_component = spy_component.src__spy_component;
  const src__logger_service = logger_service.src__logger_service;
  const src__spy_directive = spy_directive.src__spy_directive;
  const src__di__reflector = reflector.src__di__reflector;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const src__spy_directive$46template = spy_directive$.src__spy_directive$46template;
  const _root = Object.create(null);
  const src__spy_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let AppViewOfSpyParentComponent = () => (AppViewOfSpyParentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__spy_component.SpyParentComponent)))();
  let AppViewAndintToAppViewOfSpyParentComponent = () => (AppViewAndintToAppViewOfSpyParentComponent = dart.constFn(dart.fnType(AppViewOfSpyParentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfSpyParentComponent = () => (ComponentRefOfSpyParentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__spy_component.SpyParentComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfSpyParentComponent = () => (ComponentFactoryOfSpyParentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__spy_component.SpyParentComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__spy_component$46template, {
    /*src__spy_component$46template.styles$SpyParentComponent*/get styles$SpyParentComponent() {
      return dart.constList(['.parent._ngcontent-%COMP% { background:khaki; }', '.heroes._ngcontent-%COMP% { background:lightyellow; padding:0 8px; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _DefaultValueAccessor_3_5 = Symbol('_DefaultValueAccessor_3_5');
  const _NgValueAccessor_3_6 = Symbol('_NgValueAccessor_3_6');
  const _NgModel_3_7 = Symbol('_NgModel_3_7');
  const _el_4 = Symbol('_el_4');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgFor_9_9 = Symbol('_NgFor_9_9');
  const _el_10 = Symbol('_el_10');
  const _appEl_12 = Symbol('_appEl_12');
  const _NgFor_12_9 = Symbol('_NgFor_12_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _handle_input_3_2 = Symbol('_handle_input_3_2');
  const _handle_ngModelChange_3_1 = Symbol('_handle_ngModelChange_3_1');
  let const$;
  let const$0;
  src__spy_component$46template.ViewSpyParentComponent0 = class ViewSpyParentComponent0 extends src__core__linker__app_view.AppView$(src__spy_component.SpyParentComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'parent';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new('Spy Directive');
      this[_el_1][$append](_text_2);
      this[_el_3] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_0]));
      this.addShimC(this[_el_3]);
      this[_DefaultValueAccessor_3_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_3]);
      this[_NgValueAccessor_3_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_3_5]]);
      this[_NgModel_3_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_3_6]);
      this[_el_4] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_4]);
      let _text_5 = html.Text.new('Add Hero');
      this[_el_4][$append](_text_5);
      this[_el_6] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_6]);
      let _text_7 = html.Text.new('Reset Heroes');
      this[_el_6][$append](_text_7);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_8]);
      let _anchor_9 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 0, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], src__spy_component$46template.viewFactory_SpyParentComponent1);
      this[_NgFor_9_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_9], _TemplateRef_9_8);
      this[_el_10] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_0]);
      this.addShimE(this[_el_10]);
      let _text_11 = html.Text.new('-- Spy Lifecycle Hook Log --');
      this[_el_10][$append](_text_11);
      let _anchor_12 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_12);
      this[_appEl_12] = new src__core__linker__view_container.ViewContainer.new(12, 0, this, _anchor_12);
      let _TemplateRef_12_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_12], src__spy_component$46template.viewFactory_SpyParentComponent2);
      this[_NgFor_12_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_12], _TemplateRef_12_8);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(this[_el_3], 'keyup.enter', this.eventHandler0(dart.dynamic, dart.bind(this.ctx, 'addHero')));
      this[_el_3][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_3_2)));
      this[_el_3][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_3_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_3_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_3_1)));
      this[_el_4][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'addHero')));
      this[_el_6][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'reset')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 3 === nodeIndex) {
        return this[_DefaultValueAccessor_3_5];
      }
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 3 === nodeIndex) {
        return this[_NgValueAccessor_3_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 3 === nodeIndex) {
        return this[_NgModel_3_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_3_7].model = _ctx.newName;
      this[_NgModel_3_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_3_7].ngOnInit();
      }
      let currVal_1 = _ctx.heroes;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_9_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_9_9].ngDoCheck();
      let currVal_2 = _ctx.logs;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_NgFor_12_9].ngForOf = currVal_2;
        this[_expr_2] = currVal_2;
      }
      this[_NgFor_12_9].ngDoCheck();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_12].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_9];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_12];
      t$ == null ? null : t$.destroyNestedViews();
    }
    [_handle_ngModelChange_3_1]($event) {
      this.ctx.newName = core.String._check($event);
    }
    [_handle_input_3_2]($event) {
      dart.dsend(this[_DefaultValueAccessor_3_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
  };
  (src__spy_component$46template.ViewSpyParentComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_DefaultValueAccessor_3_5] = null;
    this[_NgValueAccessor_3_6] = null;
    this[_NgModel_3_7] = null;
    this[_el_4] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_appEl_9] = null;
    this[_NgFor_9_9] = null;
    this[_el_10] = null;
    this[_appEl_12] = null;
    this[_NgFor_12_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__spy_component$46template.ViewSpyParentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('spy-parent'));
    let t = src__spy_component$46template.ViewSpyParentComponent0._renderType;
    t == null ? src__spy_component$46template.ViewSpyParentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__spy_component$46template.styles$SpyParentComponent) : t;
    this.setupComponentType(src__spy_component$46template.ViewSpyParentComponent0._renderType);
  }).prototype = src__spy_component$46template.ViewSpyParentComponent0.prototype;
  dart.addTypeTests(src__spy_component$46template.ViewSpyParentComponent0);
  dart.setMethodSignature(src__spy_component$46template.ViewSpyParentComponent0, () => ({
    __proto__: dart.getMethods(src__spy_component$46template.ViewSpyParentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__spy_component.SpyParentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_3_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_3_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__spy_component$46template.ViewSpyParentComponent0, () => ({
    __proto__: dart.getFields(src__spy_component$46template.ViewSpyParentComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_3_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_3_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_3_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_4]: dart.fieldType(html.ButtonElement),
    [_el_6]: dart.fieldType(html.ButtonElement),
    [_el_8]: dart.fieldType(html.Element),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_9_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_10]: dart.fieldType(html.Element),
    [_appEl_12]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_12_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__spy_component$46template.ViewSpyParentComponent0, {
    /*src__spy_component$46template.ViewSpyParentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__spy_component$46template.viewFactory_SpyParentComponent0 = function(parentView, parentIndex) {
    return new src__spy_component$46template.ViewSpyParentComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__spy_component$46template.viewFactory_SpyParentComponent0, AppViewAndintToAppViewOfSpyParentComponent());
  const _SpyDirective_0_5 = Symbol('_SpyDirective_0_5');
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  src__spy_component$46template._ViewSpyParentComponent1 = class _ViewSpyParentComponent1 extends src__core__linker__app_view.AppView$(src__spy_component.SpyParentComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'heroes';
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
      let local_hero = core.String._check(this.locals[$_get]('$implicit'));
      if (firstCheck) {
        this[_SpyDirective_0_5].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_hero);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      this[_SpyDirective_0_5].ngOnDestroy();
    }
  };
  (src__spy_component$46template._ViewSpyParentComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_SpyDirective_0_5] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__spy_component$46template._ViewSpyParentComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__spy_component$46template.ViewSpyParentComponent0._renderType;
  }).prototype = src__spy_component$46template._ViewSpyParentComponent1.prototype;
  dart.addTypeTests(src__spy_component$46template._ViewSpyParentComponent1);
  dart.setMethodSignature(src__spy_component$46template._ViewSpyParentComponent1, () => ({
    __proto__: dart.getMethods(src__spy_component$46template._ViewSpyParentComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__spy_component.SpyParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__spy_component$46template._ViewSpyParentComponent1, () => ({
    __proto__: dart.getFields(src__spy_component$46template._ViewSpyParentComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_SpyDirective_0_5]: dart.fieldType(src__spy_directive.SpyDirective),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__spy_component$46template.viewFactory_SpyParentComponent1 = function(parentView, parentIndex) {
    return new src__spy_component$46template._ViewSpyParentComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__spy_component$46template.viewFactory_SpyParentComponent1, AppViewAndintToAppViewOfSpyParentComponent());
  src__spy_component$46template._ViewSpyParentComponent2 = class _ViewSpyParentComponent2 extends src__core__linker__app_view.AppView$(src__spy_component.SpyParentComponent) {
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
  (src__spy_component$46template._ViewSpyParentComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__spy_component$46template._ViewSpyParentComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__spy_component$46template.ViewSpyParentComponent0._renderType;
  }).prototype = src__spy_component$46template._ViewSpyParentComponent2.prototype;
  dart.addTypeTests(src__spy_component$46template._ViewSpyParentComponent2);
  dart.setMethodSignature(src__spy_component$46template._ViewSpyParentComponent2, () => ({
    __proto__: dart.getMethods(src__spy_component$46template._ViewSpyParentComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__spy_component.SpyParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__spy_component$46template._ViewSpyParentComponent2, () => ({
    __proto__: dart.getFields(src__spy_component$46template._ViewSpyParentComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__spy_component$46template.viewFactory_SpyParentComponent2 = function(parentView, parentIndex) {
    return new src__spy_component$46template._ViewSpyParentComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__spy_component$46template.viewFactory_SpyParentComponent2, AppViewAndintToAppViewOfSpyParentComponent());
  dart.defineLazy(src__spy_component$46template, {
    /*src__spy_component$46template.styles$SpyParentComponentHost*/get styles$SpyParentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _LoggerService_0_5 = Symbol('_LoggerService_0_5');
  const _SpyParentComponent_0_6 = Symbol('_SpyParentComponent_0_6');
  src__spy_component$46template._ViewSpyParentComponentHost0 = class _ViewSpyParentComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__spy_component$46template.ViewSpyParentComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_LoggerService_0_5] = new src__logger_service.LoggerService.new();
      this[_SpyParentComponent_0_6] = new src__spy_component.SpyParentComponent.new(this[_LoggerService_0_5]);
      this[_compView_0].create(this[_SpyParentComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfSpyParentComponent()).new(0, this, this.rootEl, this[_SpyParentComponent_0_6]);
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
  (src__spy_component$46template._ViewSpyParentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_LoggerService_0_5] = null;
    this[_SpyParentComponent_0_6] = null;
    src__spy_component$46template._ViewSpyParentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__spy_component$46template._ViewSpyParentComponentHost0.prototype;
  dart.addTypeTests(src__spy_component$46template._ViewSpyParentComponentHost0);
  dart.setMethodSignature(src__spy_component$46template._ViewSpyParentComponentHost0, () => ({
    __proto__: dart.getMethods(src__spy_component$46template._ViewSpyParentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__spy_component$46template._ViewSpyParentComponentHost0, () => ({
    __proto__: dart.getFields(src__spy_component$46template._ViewSpyParentComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__spy_component$46template.ViewSpyParentComponent0),
    [_LoggerService_0_5]: dart.fieldType(src__logger_service.LoggerService),
    [_SpyParentComponent_0_6]: dart.fieldType(src__spy_component.SpyParentComponent)
  }));
  src__spy_component$46template.viewFactory_SpyParentComponentHost0 = function(parentView, parentIndex) {
    return new src__spy_component$46template._ViewSpyParentComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__spy_component$46template.viewFactory_SpyParentComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__spy_component$46template, {
    /*src__spy_component$46template.SpyParentComponentNgFactory*/get SpyParentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSpyParentComponent()).new('spy-parent', src__spy_component$46template.viewFactory_SpyParentComponentHost0, src__spy_component$46template._SpyParentComponentMetadata));
    },
    /*src__spy_component$46template._SpyParentComponentMetadata*/get _SpyParentComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__spy_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__spy_component$46template.initReflector = function() {
    if (dart.test(src__spy_component$46template._visited)) {
      return;
    }
    src__spy_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__spy_component.SpyParentComponent), src__spy_component$46template.SpyParentComponentNgFactory);
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
    src__spy_directive$46template.initReflector();
  };
  dart.fn(src__spy_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/spy_component.template.ddc", {
    "package:lifecycle_hooks/src/spy_component.template.dart": src__spy_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["spy_component.template.dart"],"names":[],"mappings":"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","file":"spy_component.template.ddc.js"}');
  // Exports:
  return {
    src__spy_component$46template: src__spy_component$46template
  };
});

//# sourceMappingURL=spy_component.template.ddc.js.map
