define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/lifecycle_hooks/src/on_changes_component', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/angular/src/core/change_detection/change_detection_util', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, on_changes_component, default_value_accessor, control_value_accessor, ng_model, opaque_token, control_container, change_detection_util, reflector, angular, angular_forms) {
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
  const src__on_changes_component = on_changes_component.src__on_changes_component;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__core__change_detection__change_detection_util = change_detection_util.src__core__change_detection__change_detection_util;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__on_changes_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $text = dartx.text;
  const $_get = dartx._get;
  const $addEventListener = dartx.addEventListener;
  const $_set = dartx._set;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfOnChangesComponent = () => (AppViewOfOnChangesComponent = dart.constFn(src__core__linker__app_view.AppView$(src__on_changes_component.OnChangesComponent)))();
  let AppViewAndintToAppViewOfOnChangesComponent = () => (AppViewAndintToAppViewOfOnChangesComponent = dart.constFn(dart.fnType(AppViewOfOnChangesComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfOnChangesComponent = () => (ComponentRefOfOnChangesComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__on_changes_component.OnChangesComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfOnChangesComponent = () => (ComponentFactoryOfOnChangesComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__on_changes_component.OnChangesComponent)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let IdentityMapOfString$SimpleChange = () => (IdentityMapOfString$SimpleChange = dart.constFn(_js_helper.IdentityMap$(core.String, src__core__change_detection__change_detection_util.SimpleChange)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let AppViewOfOnChangesParentComponent = () => (AppViewOfOnChangesParentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__on_changes_component.OnChangesParentComponent)))();
  let AppViewAndintToAppViewOfOnChangesParentComponent = () => (AppViewAndintToAppViewOfOnChangesParentComponent = dart.constFn(dart.fnType(AppViewOfOnChangesParentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfOnChangesParentComponent = () => (ComponentRefOfOnChangesParentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__on_changes_component.OnChangesParentComponent)))();
  let ComponentFactoryOfOnChangesParentComponent = () => (ComponentFactoryOfOnChangesParentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__on_changes_component.OnChangesParentComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__on_changes_component$46template, {
    /*src__on_changes_component$46template.styles$OnChangesComponent*/get styles$OnChangesComponent() {
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
  src__on_changes_component$46template.ViewOnChangesComponent0 = class ViewOnChangesComponent0 extends src__core__linker__app_view.AppView$(src__on_changes_component.OnChangesComponent) {
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
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], src__on_changes_component$46template.viewFactory_OnChangesComponent1);
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
  (src__on_changes_component$46template.ViewOnChangesComponent0.new = function(parentView, parentIndex) {
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
    src__on_changes_component$46template.ViewOnChangesComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('on-changes'));
    let t = src__on_changes_component$46template.ViewOnChangesComponent0._renderType;
    t == null ? src__on_changes_component$46template.ViewOnChangesComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__on_changes_component$46template.styles$OnChangesComponent) : t;
    this.setupComponentType(src__on_changes_component$46template.ViewOnChangesComponent0._renderType);
  }).prototype = src__on_changes_component$46template.ViewOnChangesComponent0.prototype;
  dart.addTypeTests(src__on_changes_component$46template.ViewOnChangesComponent0);
  dart.setMethodSignature(src__on_changes_component$46template.ViewOnChangesComponent0, () => ({
    __proto__: dart.getMethods(src__on_changes_component$46template.ViewOnChangesComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__on_changes_component.OnChangesComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__on_changes_component$46template.ViewOnChangesComponent0, () => ({
    __proto__: dart.getFields(src__on_changes_component$46template.ViewOnChangesComponent0.__proto__),
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
  dart.defineLazy(src__on_changes_component$46template.ViewOnChangesComponent0, {
    /*src__on_changes_component$46template.ViewOnChangesComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__on_changes_component$46template.viewFactory_OnChangesComponent0 = function(parentView, parentIndex) {
    return new src__on_changes_component$46template.ViewOnChangesComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__on_changes_component$46template.viewFactory_OnChangesComponent0, AppViewAndintToAppViewOfOnChangesComponent());
  const _text_1 = Symbol('_text_1');
  src__on_changes_component$46template._ViewOnChangesComponent1 = class _ViewOnChangesComponent1 extends src__core__linker__app_view.AppView$(src__on_changes_component.OnChangesComponent) {
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
  (src__on_changes_component$46template._ViewOnChangesComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__on_changes_component$46template._ViewOnChangesComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__on_changes_component$46template.ViewOnChangesComponent0._renderType;
  }).prototype = src__on_changes_component$46template._ViewOnChangesComponent1.prototype;
  dart.addTypeTests(src__on_changes_component$46template._ViewOnChangesComponent1);
  dart.setMethodSignature(src__on_changes_component$46template._ViewOnChangesComponent1, () => ({
    __proto__: dart.getMethods(src__on_changes_component$46template._ViewOnChangesComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__on_changes_component.OnChangesComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__on_changes_component$46template._ViewOnChangesComponent1, () => ({
    __proto__: dart.getFields(src__on_changes_component$46template._ViewOnChangesComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__on_changes_component$46template.viewFactory_OnChangesComponent1 = function(parentView, parentIndex) {
    return new src__on_changes_component$46template._ViewOnChangesComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__on_changes_component$46template.viewFactory_OnChangesComponent1, AppViewAndintToAppViewOfOnChangesComponent());
  dart.defineLazy(src__on_changes_component$46template, {
    /*src__on_changes_component$46template.styles$OnChangesComponentHost*/get styles$OnChangesComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _OnChangesComponent_0_5 = Symbol('_OnChangesComponent_0_5');
  src__on_changes_component$46template._ViewOnChangesComponentHost0 = class _ViewOnChangesComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__on_changes_component$46template.ViewOnChangesComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_OnChangesComponent_0_5] = new src__on_changes_component.OnChangesComponent.new();
      this[_compView_0].create(this[_OnChangesComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfOnChangesComponent()).new(0, this, this.rootEl, this[_OnChangesComponent_0_5]);
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
  (src__on_changes_component$46template._ViewOnChangesComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_OnChangesComponent_0_5] = null;
    src__on_changes_component$46template._ViewOnChangesComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__on_changes_component$46template._ViewOnChangesComponentHost0.prototype;
  dart.addTypeTests(src__on_changes_component$46template._ViewOnChangesComponentHost0);
  dart.setMethodSignature(src__on_changes_component$46template._ViewOnChangesComponentHost0, () => ({
    __proto__: dart.getMethods(src__on_changes_component$46template._ViewOnChangesComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__on_changes_component$46template._ViewOnChangesComponentHost0, () => ({
    __proto__: dart.getFields(src__on_changes_component$46template._ViewOnChangesComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__on_changes_component$46template.ViewOnChangesComponent0),
    [_OnChangesComponent_0_5]: dart.fieldType(src__on_changes_component.OnChangesComponent)
  }));
  src__on_changes_component$46template.viewFactory_OnChangesComponentHost0 = function(parentView, parentIndex) {
    return new src__on_changes_component$46template._ViewOnChangesComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__on_changes_component$46template.viewFactory_OnChangesComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__on_changes_component$46template, {
    /*src__on_changes_component$46template.OnChangesComponentNgFactory*/get OnChangesComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfOnChangesComponent()).new('on-changes', src__on_changes_component$46template.viewFactory_OnChangesComponentHost0, src__on_changes_component$46template._OnChangesComponentMetadata));
    },
    /*src__on_changes_component$46template.styles$OnChangesParentComponent*/get styles$OnChangesParentComponent() {
      return dart.constList(['.parent._ngcontent-%COMP% { background:lavender; }'], dart.dynamic);
    }
  });
  const _query_OnChangesComponent_1_0_isDirty = Symbol('_query_OnChangesComponent_1_0_isDirty');
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
  const _OnChangesComponent_17_5 = Symbol('_OnChangesComponent_17_5');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _handle_input_8_1 = Symbol('_handle_input_8_1');
  const _handle_ngModelChange_8_0 = Symbol('_handle_ngModelChange_8_0');
  const _handle_input_13_1 = Symbol('_handle_input_13_1');
  const _handle_ngModelChange_13_0 = Symbol('_handle_ngModelChange_13_0');
  let const$0;
  let const$1;
  let const$2;
  src__on_changes_component$46template.ViewOnChangesParentComponent0 = class ViewOnChangesParentComponent0 extends src__core__linker__app_view.AppView$(src__on_changes_component.OnChangesParentComponent) {
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
      this[_compView_17] = new src__on_changes_component$46template.ViewOnChangesComponent0.new(this, 17);
      this[_el_17] = this[_compView_17].rootEl;
      this[_el_0][$append](this[_el_17]);
      this.addShimC(html.HtmlElement._check(this[_el_17]));
      this[_OnChangesComponent_17_5] = new src__on_changes_component.OnChangesComponent.new();
      this[_compView_17].create(this[_OnChangesComponent_17_5], []);
      this[_el_8][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_8_1)));
      this[_el_8][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_8_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_8_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_8_0)));
      this[_el_13][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_13_1)));
      this[_el_13][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_13_5], 'touchHandler')));
      let subscription_1 = this[_NgModel_13_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_13_0)));
      this[_el_15][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'reset')));
      this.ctx.childView = this[_OnChangesComponent_17_5];
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
      let changes = null;
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
      changes = null;
      let currVal_3 = _ctx.hero;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_OnChangesComponent_17_5].hero = currVal_3;
        let t = changes;
        t == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t;
        changes[$_set]('hero', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_3], currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.power;
      if (!(this[_expr_4] == currVal_4)) {
        this[_OnChangesComponent_17_5].power = currVal_4;
        let t$ = changes;
        t$ == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$;
        changes[$_set]('power', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_4], currVal_4));
        this[_expr_4] = currVal_4;
      }
      if (!(changes == null)) {
        this[_OnChangesComponent_17_5].ngOnChanges(changes);
      }
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
  (src__on_changes_component$46template.ViewOnChangesParentComponent0.new = function(parentView, parentIndex) {
    this[_query_OnChangesComponent_1_0_isDirty] = true;
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
    this[_OnChangesComponent_17_5] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    src__on_changes_component$46template.ViewOnChangesParentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('on-changes-parent'));
    let t = src__on_changes_component$46template.ViewOnChangesParentComponent0._renderType;
    t == null ? src__on_changes_component$46template.ViewOnChangesParentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__on_changes_component$46template.styles$OnChangesParentComponent) : t;
    this.setupComponentType(src__on_changes_component$46template.ViewOnChangesParentComponent0._renderType);
  }).prototype = src__on_changes_component$46template.ViewOnChangesParentComponent0.prototype;
  dart.addTypeTests(src__on_changes_component$46template.ViewOnChangesParentComponent0);
  dart.setMethodSignature(src__on_changes_component$46template.ViewOnChangesParentComponent0, () => ({
    __proto__: dart.getMethods(src__on_changes_component$46template.ViewOnChangesParentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__on_changes_component.OnChangesParentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_8_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_8_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_13_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_13_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__on_changes_component$46template.ViewOnChangesParentComponent0, () => ({
    __proto__: dart.getFields(src__on_changes_component$46template.ViewOnChangesParentComponent0.__proto__),
    [_query_OnChangesComponent_1_0_isDirty]: dart.fieldType(core.bool),
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
    [_compView_17]: dart.fieldType(src__on_changes_component$46template.ViewOnChangesComponent0),
    [_OnChangesComponent_17_5]: dart.fieldType(src__on_changes_component.OnChangesComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__on_changes_component$46template.ViewOnChangesParentComponent0, {
    /*src__on_changes_component$46template.ViewOnChangesParentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__on_changes_component$46template.viewFactory_OnChangesParentComponent0 = function(parentView, parentIndex) {
    return new src__on_changes_component$46template.ViewOnChangesParentComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__on_changes_component$46template.viewFactory_OnChangesParentComponent0, AppViewAndintToAppViewOfOnChangesParentComponent());
  dart.defineLazy(src__on_changes_component$46template, {
    /*src__on_changes_component$46template.styles$OnChangesParentComponentHost*/get styles$OnChangesParentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _OnChangesParentComponent_0_5 = Symbol('_OnChangesParentComponent_0_5');
  src__on_changes_component$46template._ViewOnChangesParentComponentHost0 = class _ViewOnChangesParentComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__on_changes_component$46template.ViewOnChangesParentComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_OnChangesParentComponent_0_5] = new src__on_changes_component.OnChangesParentComponent.new();
      this[_compView_0].create(this[_OnChangesParentComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfOnChangesParentComponent()).new(0, this, this.rootEl, this[_OnChangesParentComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__on_changes_component$46template._ViewOnChangesParentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_OnChangesParentComponent_0_5] = null;
    src__on_changes_component$46template._ViewOnChangesParentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__on_changes_component$46template._ViewOnChangesParentComponentHost0.prototype;
  dart.addTypeTests(src__on_changes_component$46template._ViewOnChangesParentComponentHost0);
  dart.setMethodSignature(src__on_changes_component$46template._ViewOnChangesParentComponentHost0, () => ({
    __proto__: dart.getMethods(src__on_changes_component$46template._ViewOnChangesParentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__on_changes_component$46template._ViewOnChangesParentComponentHost0, () => ({
    __proto__: dart.getFields(src__on_changes_component$46template._ViewOnChangesParentComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__on_changes_component$46template.ViewOnChangesParentComponent0),
    [_OnChangesParentComponent_0_5]: dart.fieldType(src__on_changes_component.OnChangesParentComponent)
  }));
  src__on_changes_component$46template.viewFactory_OnChangesParentComponentHost0 = function(parentView, parentIndex) {
    return new src__on_changes_component$46template._ViewOnChangesParentComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__on_changes_component$46template.viewFactory_OnChangesParentComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__on_changes_component$46template, {
    /*src__on_changes_component$46template.OnChangesParentComponentNgFactory*/get OnChangesParentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfOnChangesParentComponent()).new('on-changes-parent', src__on_changes_component$46template.viewFactory_OnChangesParentComponentHost0, src__on_changes_component$46template._OnChangesParentComponentMetadata));
    },
    /*src__on_changes_component$46template._OnChangesComponentMetadata*/get _OnChangesComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__on_changes_component$46template._OnChangesParentComponentMetadata*/get _OnChangesParentComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__on_changes_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__on_changes_component$46template.initReflector = function() {
    if (dart.test(src__on_changes_component$46template._visited)) {
      return;
    }
    src__on_changes_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__on_changes_component.OnChangesComponent), src__on_changes_component$46template.OnChangesComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__on_changes_component.OnChangesParentComponent), src__on_changes_component$46template.OnChangesParentComponentNgFactory);
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__on_changes_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/on_changes_component.template.ddc", {
    "package:lifecycle_hooks/src/on_changes_component.template.dart": src__on_changes_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["on_changes_component.template.dart"],"names":[],"mappings":"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","file":"on_changes_component.template.ddc.js"}');
  // Exports:
  return {
    src__on_changes_component$46template: src__on_changes_component$46template
  };
});

//# sourceMappingURL=on_changes_component.template.ddc.js.map
