define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/lifecycle_hooks/src/do_check_component', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, do_check_component, default_value_accessor, control_value_accessor, ng_model, opaque_token, control_container, reflector, angular, angular_forms) {
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
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__do_check_component = do_check_component.src__do_check_component;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__do_check_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $text = dartx.text;
  const $_get = dartx._get;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDoCheckComponent = () => (AppViewOfDoCheckComponent = dart.constFn(src__core__linker__app_view.AppView$(src__do_check_component.DoCheckComponent)))();
  let AppViewAndintToAppViewOfDoCheckComponent = () => (AppViewAndintToAppViewOfDoCheckComponent = dart.constFn(dart.fnType(AppViewOfDoCheckComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDoCheckComponent = () => (ComponentRefOfDoCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__do_check_component.DoCheckComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDoCheckComponent = () => (ComponentFactoryOfDoCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__do_check_component.DoCheckComponent)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let AppViewOfDoCheckParentComponent = () => (AppViewOfDoCheckParentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__do_check_component.DoCheckParentComponent)))();
  let AppViewAndintToAppViewOfDoCheckParentComponent = () => (AppViewAndintToAppViewOfDoCheckParentComponent = dart.constFn(dart.fnType(AppViewOfDoCheckParentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDoCheckParentComponent = () => (ComponentRefOfDoCheckParentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__do_check_component.DoCheckParentComponent)))();
  let ComponentFactoryOfDoCheckParentComponent = () => (ComponentFactoryOfDoCheckParentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__do_check_component.DoCheckParentComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__do_check_component$46template, {
    /*src__do_check_component$46template.styles$DoCheckComponent*/get styles$DoCheckComponent() {
      return dart.constList(['.hero._ngcontent-%COMP% { background:lightyellow; padding:8px; margin-top:8px; }', 'p._ngcontent-%COMP% { background:yellow; padding:8px; margin-top:8px; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgFor_7_9 = Symbol('_NgFor_7_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  src__do_check_component$46template.ViewDoCheckComponent0 = class ViewDoCheckComponent0 extends src__core__linker__app_view.AppView$(src__do_check_component.DoCheckComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'hero';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' can ');
      this[_el_1][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_1][$append](this[_text_4]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_0]);
      this.addShimE(this[_el_5]);
      let _text_6 = html.Text.new('-- Change Log --');
      this[_el_5][$append](_text_6);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], src__do_check_component$46template.viewFactory_DoCheckComponent1);
      this[_NgFor_7_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_7], _TemplateRef_7_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.changeLog;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_NgFor_7_9].ngForOf = currVal_2;
        this[_expr_2] = currVal_2;
      }
      this[_NgFor_7_9].ngDoCheck();
      this[_appEl_7].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let l = _ctx.power;
      let currVal_1 = l != null ? l : '';
      if (!(this[_expr_1] === currVal_1)) {
        this[_text_4][$text] = currVal_1;
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_7];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__do_check_component$46template.ViewDoCheckComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_appEl_7] = null;
    this[_NgFor_7_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__do_check_component$46template.ViewDoCheckComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('do-check'));
    let t = src__do_check_component$46template.ViewDoCheckComponent0._renderType;
    t == null ? src__do_check_component$46template.ViewDoCheckComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__do_check_component$46template.styles$DoCheckComponent) : t;
    this.setupComponentType(src__do_check_component$46template.ViewDoCheckComponent0._renderType);
  }).prototype = src__do_check_component$46template.ViewDoCheckComponent0.prototype;
  dart.addTypeTests(src__do_check_component$46template.ViewDoCheckComponent0);
  dart.setMethodSignature(src__do_check_component$46template.ViewDoCheckComponent0, () => ({
    __proto__: dart.getMethods(src__do_check_component$46template.ViewDoCheckComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__do_check_component.DoCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__do_check_component$46template.ViewDoCheckComponent0, () => ({
    __proto__: dart.getFields(src__do_check_component$46template.ViewDoCheckComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.Element),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_7_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__do_check_component$46template.ViewDoCheckComponent0, {
    /*src__do_check_component$46template.ViewDoCheckComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__do_check_component$46template.viewFactory_DoCheckComponent0 = function(parentView, parentIndex) {
    return new src__do_check_component$46template.ViewDoCheckComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__do_check_component$46template.viewFactory_DoCheckComponent0, AppViewAndintToAppViewOfDoCheckComponent());
  const _text_1 = Symbol('_text_1');
  src__do_check_component$46template._ViewDoCheckComponent1 = class _ViewDoCheckComponent1 extends src__core__linker__app_view.AppView$(src__do_check_component.DoCheckComponent) {
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
      let local_chg = core.String._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_chg);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__do_check_component$46template._ViewDoCheckComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__do_check_component$46template._ViewDoCheckComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__do_check_component$46template.ViewDoCheckComponent0._renderType;
  }).prototype = src__do_check_component$46template._ViewDoCheckComponent1.prototype;
  dart.addTypeTests(src__do_check_component$46template._ViewDoCheckComponent1);
  dart.setMethodSignature(src__do_check_component$46template._ViewDoCheckComponent1, () => ({
    __proto__: dart.getMethods(src__do_check_component$46template._ViewDoCheckComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__do_check_component.DoCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__do_check_component$46template._ViewDoCheckComponent1, () => ({
    __proto__: dart.getFields(src__do_check_component$46template._ViewDoCheckComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__do_check_component$46template.viewFactory_DoCheckComponent1 = function(parentView, parentIndex) {
    return new src__do_check_component$46template._ViewDoCheckComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__do_check_component$46template.viewFactory_DoCheckComponent1, AppViewAndintToAppViewOfDoCheckComponent());
  dart.defineLazy(src__do_check_component$46template, {
    /*src__do_check_component$46template.styles$DoCheckComponentHost*/get styles$DoCheckComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _DoCheckComponent_0_5 = Symbol('_DoCheckComponent_0_5');
  src__do_check_component$46template._ViewDoCheckComponentHost0 = class _ViewDoCheckComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__do_check_component$46template.ViewDoCheckComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DoCheckComponent_0_5] = new src__do_check_component.DoCheckComponent.new();
      this[_compView_0].create(this[_DoCheckComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDoCheckComponent()).new(0, this, this.rootEl, this[_DoCheckComponent_0_5]);
    }
    detectChangesInternal() {
      this[_DoCheckComponent_0_5].ngDoCheck();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__do_check_component$46template._ViewDoCheckComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DoCheckComponent_0_5] = null;
    src__do_check_component$46template._ViewDoCheckComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__do_check_component$46template._ViewDoCheckComponentHost0.prototype;
  dart.addTypeTests(src__do_check_component$46template._ViewDoCheckComponentHost0);
  dart.setMethodSignature(src__do_check_component$46template._ViewDoCheckComponentHost0, () => ({
    __proto__: dart.getMethods(src__do_check_component$46template._ViewDoCheckComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__do_check_component$46template._ViewDoCheckComponentHost0, () => ({
    __proto__: dart.getFields(src__do_check_component$46template._ViewDoCheckComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__do_check_component$46template.ViewDoCheckComponent0),
    [_DoCheckComponent_0_5]: dart.fieldType(src__do_check_component.DoCheckComponent)
  }));
  src__do_check_component$46template.viewFactory_DoCheckComponentHost0 = function(parentView, parentIndex) {
    return new src__do_check_component$46template._ViewDoCheckComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__do_check_component$46template.viewFactory_DoCheckComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__do_check_component$46template, {
    /*src__do_check_component$46template.DoCheckComponentNgFactory*/get DoCheckComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDoCheckComponent()).new('do-check', src__do_check_component$46template.viewFactory_DoCheckComponentHost0, src__do_check_component$46template._DoCheckComponentMetadata));
    },
    /*src__do_check_component$46template.styles$DoCheckParentComponent*/get styles$DoCheckParentComponent() {
      return dart.constList(['.parent._ngcontent-%COMP% { background:lavender; }'], dart.dynamic);
    }
  });
  const _query_DoCheckComponent_1_0_isDirty = Symbol('_query_DoCheckComponent_1_0_isDirty');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _el_7 = Symbol('_el_7');
  const _el_8 = Symbol('_el_8');
  const _DefaultValueAccessor_8_5 = Symbol('_DefaultValueAccessor_8_5');
  const _NgValueAccessor_8_6 = Symbol('_NgValueAccessor_8_6');
  const _NgModel_8_7 = Symbol('_NgModel_8_7');
  const _el_9 = Symbol('_el_9');
  const _el_10 = Symbol('_el_10');
  const _el_12 = Symbol('_el_12');
  const _el_13 = Symbol('_el_13');
  const _DefaultValueAccessor_13_5 = Symbol('_DefaultValueAccessor_13_5');
  const _NgValueAccessor_13_6 = Symbol('_NgValueAccessor_13_6');
  const _NgModel_13_7 = Symbol('_NgModel_13_7');
  const _el_14 = Symbol('_el_14');
  const _el_15 = Symbol('_el_15');
  const _el_17 = Symbol('_el_17');
  const _compView_17 = Symbol('_compView_17');
  const _DoCheckComponent_17_5 = Symbol('_DoCheckComponent_17_5');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _handle_input_8_1 = Symbol('_handle_input_8_1');
  const _handle_ngModelChange_8_0 = Symbol('_handle_ngModelChange_8_0');
  const _handle_input_13_1 = Symbol('_handle_input_13_1');
  const _handle_ngModelChange_13_0 = Symbol('_handle_ngModelChange_13_0');
  let const$0;
  let const$1;
  let const$2;
  src__do_check_component$46template.ViewDoCheckParentComponent0 = class ViewDoCheckParentComponent0 extends src__core__linker__app_view.AppView$(src__do_check_component.DoCheckParentComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'parent';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      this[_el_3] = html.TableElement._check(src__core__linker__app_view.createAndAppend(doc, 'table', this[_el_0]));
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'tr', this[_el_3]);
      this.addShimE(this[_el_4]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'td', this[_el_4]);
      this.addShimE(this[_el_5]);
      let _text_6 = html.Text.new('Power:');
      this[_el_5][$append](_text_6);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'td', this[_el_4]);
      this.addShimE(this[_el_7]);
      this[_el_8] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_7]));
      this.addShimC(this[_el_8]);
      this[_DefaultValueAccessor_8_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_8]);
      this[_NgValueAccessor_8_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_8_5]]);
      this[_NgModel_8_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_8_6]);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, 'tr', this[_el_3]);
      this.addShimE(this[_el_9]);
      this[_el_10] = src__core__linker__app_view.createAndAppend(doc, 'td', this[_el_9]);
      this.addShimE(this[_el_10]);
      let _text_11 = html.Text.new('Hero.name:');
      this[_el_10][$append](_text_11);
      this[_el_12] = src__core__linker__app_view.createAndAppend(doc, 'td', this[_el_9]);
      this.addShimE(this[_el_12]);
      this[_el_13] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_12]));
      this.addShimC(this[_el_13]);
      this[_DefaultValueAccessor_13_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_13]);
      this[_NgValueAccessor_13_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_13_5]]);
      this[_NgModel_13_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_13_6]);
      this[_el_14] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_14]);
      this[_el_15] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_14]));
      this.addShimC(this[_el_15]);
      let _text_16 = html.Text.new('Reset Log');
      this[_el_15][$append](_text_16);
      this[_compView_17] = new src__do_check_component$46template.ViewDoCheckComponent0.new(this, 17);
      this[_el_17] = this[_compView_17].rootEl;
      this[_el_0][$append](this[_el_17]);
      this.addShimC(html.HtmlElement._check(this[_el_17]));
      this[_DoCheckComponent_17_5] = new src__do_check_component.DoCheckComponent.new();
      this[_compView_17].create(this[_DoCheckComponent_17_5], []);
      this[_el_8][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_8_1)));
      this[_el_8][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_8_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_8_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_8_0)));
      this[_el_13][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_13_1)));
      this[_el_13][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_13_5], 'touchHandler')));
      let subscription_1 = this[_NgModel_13_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_13_0)));
      this[_el_15][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'reset')));
      this.ctx.childView = this[_DoCheckComponent_17_5];
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 8 === nodeIndex) {
        return this[_DefaultValueAccessor_8_5];
      }
      if (token === (const$1 || (const$1 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 8 === nodeIndex) {
        return this[_NgValueAccessor_8_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 8 === nodeIndex) {
        return this[_NgModel_8_7];
      }
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 13 === nodeIndex) {
        return this[_DefaultValueAccessor_13_5];
      }
      if (token === (const$2 || (const$2 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 13 === nodeIndex) {
        return this[_NgValueAccessor_13_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 13 === nodeIndex) {
        return this[_NgModel_13_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_8_7].model = _ctx.power;
      this[_NgModel_8_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_8_7].ngOnInit();
      }
      changed = false;
      this[_NgModel_13_7].model = _ctx.hero.name;
      this[_NgModel_13_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_13_7].ngOnInit();
      }
      let currVal_3 = _ctx.hero;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_DoCheckComponent_17_5].hero = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.power;
      if (!(this[_expr_4] == currVal_4)) {
        this[_DoCheckComponent_17_5].power = currVal_4;
        this[_expr_4] = currVal_4;
      }
      this[_DoCheckComponent_17_5].ngDoCheck();
      let l = _ctx.title;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_17].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_17];
      t == null ? null : t.destroy();
    }
    [_handle_ngModelChange_8_0]($event) {
      this.ctx.power = core.String._check($event);
    }
    [_handle_input_8_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_8_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
    [_handle_ngModelChange_13_0]($event) {
      this.ctx.hero.name = core.String._check($event);
    }
    [_handle_input_13_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_13_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
  };
  (src__do_check_component$46template.ViewDoCheckParentComponent0.new = function(parentView, parentIndex) {
    this[_query_DoCheckComponent_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_el_8] = null;
    this[_DefaultValueAccessor_8_5] = null;
    this[_NgValueAccessor_8_6] = null;
    this[_NgModel_8_7] = null;
    this[_el_9] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    this[_el_13] = null;
    this[_DefaultValueAccessor_13_5] = null;
    this[_NgValueAccessor_13_6] = null;
    this[_NgModel_13_7] = null;
    this[_el_14] = null;
    this[_el_15] = null;
    this[_el_17] = null;
    this[_compView_17] = null;
    this[_DoCheckComponent_17_5] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    src__do_check_component$46template.ViewDoCheckParentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('do-check-parent'));
    let t = src__do_check_component$46template.ViewDoCheckParentComponent0._renderType;
    t == null ? src__do_check_component$46template.ViewDoCheckParentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__do_check_component$46template.styles$DoCheckParentComponent) : t;
    this.setupComponentType(src__do_check_component$46template.ViewDoCheckParentComponent0._renderType);
  }).prototype = src__do_check_component$46template.ViewDoCheckParentComponent0.prototype;
  dart.addTypeTests(src__do_check_component$46template.ViewDoCheckParentComponent0);
  dart.setMethodSignature(src__do_check_component$46template.ViewDoCheckParentComponent0, () => ({
    __proto__: dart.getMethods(src__do_check_component$46template.ViewDoCheckParentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__do_check_component.DoCheckParentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_8_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_8_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_13_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_13_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__do_check_component$46template.ViewDoCheckParentComponent0, () => ({
    __proto__: dart.getFields(src__do_check_component$46template.ViewDoCheckParentComponent0.__proto__),
    [_query_DoCheckComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.TableElement),
    [_el_4]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.Element),
    [_el_7]: dart.fieldType(html.Element),
    [_el_8]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_8_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_8_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_8_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_9]: dart.fieldType(html.Element),
    [_el_10]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.Element),
    [_el_13]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_13_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_13_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_13_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_14]: dart.fieldType(html.Element),
    [_el_15]: dart.fieldType(html.ButtonElement),
    [_el_17]: dart.fieldType(html.Element),
    [_compView_17]: dart.fieldType(src__do_check_component$46template.ViewDoCheckComponent0),
    [_DoCheckComponent_17_5]: dart.fieldType(src__do_check_component.DoCheckComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__do_check_component$46template.ViewDoCheckParentComponent0, {
    /*src__do_check_component$46template.ViewDoCheckParentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__do_check_component$46template.viewFactory_DoCheckParentComponent0 = function(parentView, parentIndex) {
    return new src__do_check_component$46template.ViewDoCheckParentComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__do_check_component$46template.viewFactory_DoCheckParentComponent0, AppViewAndintToAppViewOfDoCheckParentComponent());
  dart.defineLazy(src__do_check_component$46template, {
    /*src__do_check_component$46template.styles$DoCheckParentComponentHost*/get styles$DoCheckParentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DoCheckParentComponent_0_5 = Symbol('_DoCheckParentComponent_0_5');
  src__do_check_component$46template._ViewDoCheckParentComponentHost0 = class _ViewDoCheckParentComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__do_check_component$46template.ViewDoCheckParentComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DoCheckParentComponent_0_5] = new src__do_check_component.DoCheckParentComponent.new();
      this[_compView_0].create(this[_DoCheckParentComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDoCheckParentComponent()).new(0, this, this.rootEl, this[_DoCheckParentComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__do_check_component$46template._ViewDoCheckParentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DoCheckParentComponent_0_5] = null;
    src__do_check_component$46template._ViewDoCheckParentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__do_check_component$46template._ViewDoCheckParentComponentHost0.prototype;
  dart.addTypeTests(src__do_check_component$46template._ViewDoCheckParentComponentHost0);
  dart.setMethodSignature(src__do_check_component$46template._ViewDoCheckParentComponentHost0, () => ({
    __proto__: dart.getMethods(src__do_check_component$46template._ViewDoCheckParentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__do_check_component$46template._ViewDoCheckParentComponentHost0, () => ({
    __proto__: dart.getFields(src__do_check_component$46template._ViewDoCheckParentComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__do_check_component$46template.ViewDoCheckParentComponent0),
    [_DoCheckParentComponent_0_5]: dart.fieldType(src__do_check_component.DoCheckParentComponent)
  }));
  src__do_check_component$46template.viewFactory_DoCheckParentComponentHost0 = function(parentView, parentIndex) {
    return new src__do_check_component$46template._ViewDoCheckParentComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__do_check_component$46template.viewFactory_DoCheckParentComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__do_check_component$46template, {
    /*src__do_check_component$46template.DoCheckParentComponentNgFactory*/get DoCheckParentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDoCheckParentComponent()).new('do-check-parent', src__do_check_component$46template.viewFactory_DoCheckParentComponentHost0, src__do_check_component$46template._DoCheckParentComponentMetadata));
    },
    /*src__do_check_component$46template._DoCheckComponentMetadata*/get _DoCheckComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__do_check_component$46template._DoCheckParentComponentMetadata*/get _DoCheckParentComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__do_check_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__do_check_component$46template.initReflector = function() {
    if (dart.test(src__do_check_component$46template._visited)) {
      return;
    }
    src__do_check_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__do_check_component.DoCheckComponent), src__do_check_component$46template.DoCheckComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__do_check_component.DoCheckParentComponent), src__do_check_component$46template.DoCheckParentComponentNgFactory);
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__do_check_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/do_check_component.template.ddc", {
    "package:lifecycle_hooks/src/do_check_component.template.dart": src__do_check_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["do_check_component.template.dart"],"names":[],"mappings":"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","file":"do_check_component.template.ddc.js"}');
  // Exports:
  return {
    src__do_check_component$46template: src__do_check_component$46template
  };
});

//# sourceMappingURL=do_check_component.template.ddc.js.map
