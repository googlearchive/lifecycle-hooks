// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'spy_component.dart';
export 'spy_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'logger_service.dart';
import 'spy_directive.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'logger_service.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'spy_directive.template.dart' as _ref3;

import 'package:angular/src/core/linker/app_view.dart';
import 'spy_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import3;
import 'package:angular_forms/src/directives/ng_model.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import13;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import14;
import 'package:angular_forms/src/directives/ng_control.dart' as import15;
import 'spy_directive.dart' as import16;
import 'logger_service.dart' as import17;
import 'dart:core';

const List<dynamic> styles$SpyParentComponent = const ['.parent._ngcontent-%COMP% { background:khaki; }', '.heroes._ngcontent-%COMP% { background:lightyellow; padding:0 8px; }'];

class ViewSpyParentComponent0 extends AppView<import1.SpyParentComponent> {
  import2.DivElement _el_0;
  import2.Element _el_1;
  import2.InputElement _el_3;
  import3.DefaultValueAccessor _DefaultValueAccessor_3_4;
  List<dynamic> _NgValueAccessor_3_5;
  import4.NgModel _NgModel_3_6;
  import2.ButtonElement _el_4;
  import2.ButtonElement _el_6;
  import2.Element _el_8;
  ViewContainer _appEl_9;
  import6.NgFor _NgFor_9_7;
  import2.Element _el_10;
  ViewContainer _appEl_12;
  import6.NgFor _NgFor_12_7;
  var _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewSpyParentComponent0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('spy-parent');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$SpyParentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.SpyParentComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'parent';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    import2.Text _text_2 = new import2.Text('Spy Directive');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'input', _el_0);
    addShimC(_el_3);
    _DefaultValueAccessor_3_4 = new import3.DefaultValueAccessor(_el_3);
    _NgValueAccessor_3_5 = [_DefaultValueAccessor_3_4];
    _NgModel_3_6 = new import4.NgModel(null, _NgValueAccessor_3_5);
    _el_4 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_4);
    import2.Text _text_5 = new import2.Text('Add Hero');
    _el_4.append(_text_5);
    _el_6 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_6);
    import2.Text _text_7 = new import2.Text('Reset Heroes');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_8);
    var _anchor_9 = ngAnchor.clone(false);
    _el_0.append(_anchor_9);
    _appEl_9 = new ViewContainer(9, 0, this, _anchor_9);
    TemplateRef _TemplateRef_9_6 = new TemplateRef(_appEl_9, viewFactory_SpyParentComponent1);
    _NgFor_9_7 = new import6.NgFor(_appEl_9, _TemplateRef_9_6);
    _el_10 = createAndAppend(doc, 'h4', _el_0);
    addShimE(_el_10);
    import2.Text _text_11 = new import2.Text('-- Spy Lifecycle Hook Log --');
    _el_10.append(_text_11);
    var _anchor_12 = ngAnchor.clone(false);
    _el_0.append(_anchor_12);
    _appEl_12 = new ViewContainer(12, 0, this, _anchor_12);
    TemplateRef _TemplateRef_12_6 = new TemplateRef(_appEl_12, viewFactory_SpyParentComponent2);
    _NgFor_12_7 = new import6.NgFor(_appEl_12, _TemplateRef_12_6);
    import10.appViewUtils.eventManager.addEventListener(_el_3, 'keyup.enter', eventHandler0(ctx.addHero));
    _el_3.addEventListener('input', eventHandler1(_handle_input_3_2));
    _el_3.addEventListener('blur', eventHandler0(_DefaultValueAccessor_3_4.touchHandler));
    final subscription_0 = _NgModel_3_6.update.listen(eventHandler1(_handle_ngModelChange_3_1));
    _el_4.addEventListener('click', eventHandler0(ctx.addHero));
    _el_6.addEventListener('click', eventHandler0(ctx.reset));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.DefaultValueAccessor) && (3 == nodeIndex))) {
      return _DefaultValueAccessor_3_4;
    }
    if ((identical(token, const import13.OpaqueToken<import14.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (3 == nodeIndex))) {
      return _NgValueAccessor_3_5;
    }
    if (((identical(token, import4.NgModel) || identical(token, import15.NgControl)) && (3 == nodeIndex))) {
      return _NgModel_3_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.SpyParentComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_3_6.model = _ctx.newName;
    _NgModel_3_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_3_6.ngOnInit();
    }
    final currVal_1 = _ctx.heroes;
    if (!identical(_expr_1, currVal_1)) {
      _NgFor_9_7.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    _NgFor_9_7.ngDoCheck();
    final currVal_2 = _ctx.logs;
    if (!identical(_expr_2, currVal_2)) {
      _NgFor_12_7.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    _NgFor_12_7.ngDoCheck();
    _appEl_9.detectChangesInNestedViews();
    _appEl_12.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_9?.destroyNestedViews();
    _appEl_12?.destroyNestedViews();
  }

  void _handle_ngModelChange_3_1($event) {
    ctx.newName = $event;
  }

  void _handle_input_3_2($event) {
    _DefaultValueAccessor_3_4.onChange($event.target.value);
  }
}

AppView<import1.SpyParentComponent> viewFactory_SpyParentComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewSpyParentComponent0(parentView, parentIndex);
}

class _ViewSpyParentComponent1 extends AppView<import1.SpyParentComponent> {
  import2.DivElement _el_0;
  import16.SpyDirective _SpyDirective_0_4;
  import2.Text _text_1;
  var _expr_0;
  _ViewSpyParentComponent1(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSpyParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.SpyParentComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'heroes';
    createAttr(_el_0, 'mySpy', '');
    addShimC(_el_0);
    _SpyDirective_0_4 = new import16.SpyDirective(parentView.parentView.injectorGet(import17.LoggerService, parentView.viewData.parentIndex));
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.SpyDirective) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _SpyDirective_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final String local_hero = locals['\$implicit'];
    if (firstCheck) {
      _SpyDirective_0_4.ngOnInit();
    }
    final currVal_0 = import10.interpolate0(local_hero);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _SpyDirective_0_4.ngOnDestroy();
  }
}

AppView<import1.SpyParentComponent> viewFactory_SpyParentComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSpyParentComponent1(parentView, parentIndex);
}

class _ViewSpyParentComponent2 extends AppView<import1.SpyParentComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewSpyParentComponent2(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSpyParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.SpyParentComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final String local_msg = locals['\$implicit'];
    final currVal_0 = import10.interpolate0(local_msg);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.SpyParentComponent> viewFactory_SpyParentComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSpyParentComponent2(parentView, parentIndex);
}

const List<dynamic> styles$SpyParentComponentHost = const [];

class _ViewSpyParentComponentHost0 extends AppView<dynamic> {
  ViewSpyParentComponent0 _compView_0;
  import17.LoggerService _LoggerService_0_4;
  import1.SpyParentComponent _SpyParentComponent_0_5;
  _ViewSpyParentComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewSpyParentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LoggerService_0_4 = new import17.LoggerService();
    _SpyParentComponent_0_5 = new import1.SpyParentComponent(_LoggerService_0_4);
    _compView_0.create(_SpyParentComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.SpyParentComponent>(0, this, rootEl, _SpyParentComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.LoggerService) && (0 == nodeIndex))) {
      return _LoggerService_0_4;
    }
    if ((identical(token, import1.SpyParentComponent) && (0 == nodeIndex))) {
      return _SpyParentComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_SpyParentComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSpyParentComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.SpyParentComponent> SpyParentComponentNgFactory = const ComponentFactory<import1.SpyParentComponent>('spy-parent', viewFactory_SpyParentComponentHost0, _SpyParentComponentMetadata);
const _SpyParentComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ngRef.registerComponent(
    SpyParentComponent,
    SpyParentComponentNgFactory,
  );
}
