// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'on_changes_component.dart';
export 'on_changes_component.dart';
import 'dart:convert';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_forms/angular_forms.template.dart' as _ref1;

import 'package:angular/src/core/linker/app_view.dart';
import 'on_changes_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';
import 'package:angular/src/core/linker/query_list.dart' as import12;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import13;
import 'package:angular_forms/src/directives/ng_model.dart' as import14;
import 'package:angular/src/core/di/opaque_token.dart' as import15;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import16;
import 'package:angular_forms/src/directives/ng_control.dart' as import17;

const List<dynamic> styles$OnChangesComponent = const ['.hero._ngcontent-%COMP% { background:lightyellow; padding:8px; margin-top:8px; }', 'p._ngcontent-%COMP% { background:yellow; padding:8px; margin-top:8px; }'];

class ViewOnChangesComponent0 extends AppView<import1.OnChangesComponent> {
  import2.DivElement _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  import2.Text _text_4;
  import2.Element _el_5;
  ViewContainer _appEl_7;
  import4.NgFor _NgFor_7_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewOnChangesComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('on-changes');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$OnChangesComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.OnChangesComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'hero';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_1);
    _text_2 = new import2.Text('');
    _el_1.append(_text_2);
    import2.Text _text_3 = new import2.Text(' can ');
    _el_1.append(_text_3);
    _text_4 = new import2.Text('');
    _el_1.append(_text_4);
    _el_5 = createAndAppend(doc, 'h4', _el_0);
    addShimE(_el_5);
    import2.Text _text_6 = new import2.Text('-- Change Log --');
    _el_5.append(_text_6);
    var _anchor_7 = ngAnchor.clone(false);
    _el_0.append(_anchor_7);
    _appEl_7 = new ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_6 = new TemplateRef(_appEl_7, viewFactory_OnChangesComponent1);
    _NgFor_7_7 = new import4.NgFor(_appEl_7, _TemplateRef_7_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.OnChangesComponent _ctx = ctx;
    final currVal_2 = _ctx.changeLog;
    if (!identical(_expr_2, currVal_2)) {
      _NgFor_7_7.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    _NgFor_7_7.ngDoCheck();
    _appEl_7.detectChangesInNestedViews();
    final currVal_0 = import8.interpolate0(_ctx.hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.power ?? '');
    if (!identical(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_7?.destroyNestedViews();
  }
}

AppView<import1.OnChangesComponent> viewFactory_OnChangesComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewOnChangesComponent0(parentView, parentIndex);
}

class _ViewOnChangesComponent1 extends AppView<import1.OnChangesComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewOnChangesComponent1(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewOnChangesComponent0._renderType;
  }
  @override
  ComponentRef<import1.OnChangesComponent> build() {
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
    final String local_chg = locals['\$implicit'];
    final currVal_0 = import8.interpolate0(local_chg);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.OnChangesComponent> viewFactory_OnChangesComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewOnChangesComponent1(parentView, parentIndex);
}

const List<dynamic> styles$OnChangesComponentHost = const [];

class _ViewOnChangesComponentHost0 extends AppView<dynamic> {
  ViewOnChangesComponent0 _compView_0;
  import1.OnChangesComponent _OnChangesComponent_0_4;
  _ViewOnChangesComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewOnChangesComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _OnChangesComponent_0_4 = new import1.OnChangesComponent();
    _compView_0.create(_OnChangesComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.OnChangesComponent>(0, this, rootEl, _OnChangesComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.OnChangesComponent) && (0 == nodeIndex))) {
      return _OnChangesComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    Map<String, SimpleChange> changes;
    changes = null;
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_OnChangesComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewOnChangesComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.OnChangesComponent> OnChangesComponentNgFactory = const ComponentFactory<import1.OnChangesComponent>('on-changes', viewFactory_OnChangesComponentHost0, _OnChangesComponentMetadata);
const List<dynamic> styles$OnChangesParentComponent = const ['.parent._ngcontent-%COMP% { background:lavender; }'];

class ViewOnChangesParentComponent0 extends AppView<import1.OnChangesParentComponent> {
  final import12.QueryList _viewQuery_OnChangesComponent_0 = new import12.QueryList();
  import2.DivElement _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  import2.TableElement _el_3;
  import2.Element _el_4;
  import2.Element _el_5;
  import2.Element _el_7;
  import2.InputElement _el_8;
  import13.DefaultValueAccessor _DefaultValueAccessor_8_4;
  List<dynamic> _NgValueAccessor_8_5;
  import14.NgModel _NgModel_8_6;
  import2.Element _el_9;
  import2.Element _el_10;
  import2.Element _el_12;
  import2.InputElement _el_13;
  import13.DefaultValueAccessor _DefaultValueAccessor_13_4;
  List<dynamic> _NgValueAccessor_13_5;
  import14.NgModel _NgModel_13_6;
  import2.Element _el_14;
  import2.ButtonElement _el_15;
  import2.Element _el_17;
  ViewOnChangesComponent0 _compView_17;
  import1.OnChangesComponent _OnChangesComponent_17_4;
  var _expr_0;
  var _expr_3;
  String _expr_4;
  static RenderComponentType _renderType;
  ViewOnChangesParentComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('on-changes-parent');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$OnChangesParentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.OnChangesParentComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'parent';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    _text_2 = new import2.Text('');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'table', _el_0);
    addShimC(_el_3);
    _el_4 = createAndAppend(doc, 'tr', _el_3);
    addShimE(_el_4);
    _el_5 = createAndAppend(doc, 'td', _el_4);
    addShimE(_el_5);
    import2.Text _text_6 = new import2.Text('Power:');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'td', _el_4);
    addShimE(_el_7);
    _el_8 = createAndAppend(doc, 'input', _el_7);
    addShimC(_el_8);
    _DefaultValueAccessor_8_4 = new import13.DefaultValueAccessor(_el_8);
    _NgValueAccessor_8_5 = [_DefaultValueAccessor_8_4];
    _NgModel_8_6 = new import14.NgModel(null, _NgValueAccessor_8_5);
    _el_9 = createAndAppend(doc, 'tr', _el_3);
    addShimE(_el_9);
    _el_10 = createAndAppend(doc, 'td', _el_9);
    addShimE(_el_10);
    import2.Text _text_11 = new import2.Text('Hero.name:');
    _el_10.append(_text_11);
    _el_12 = createAndAppend(doc, 'td', _el_9);
    addShimE(_el_12);
    _el_13 = createAndAppend(doc, 'input', _el_12);
    addShimC(_el_13);
    _DefaultValueAccessor_13_4 = new import13.DefaultValueAccessor(_el_13);
    _NgValueAccessor_13_5 = [_DefaultValueAccessor_13_4];
    _NgModel_13_6 = new import14.NgModel(null, _NgValueAccessor_13_5);
    _el_14 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_14);
    _el_15 = createAndAppend(doc, 'button', _el_14);
    addShimC(_el_15);
    import2.Text _text_16 = new import2.Text('Reset Log');
    _el_15.append(_text_16);
    _compView_17 = new ViewOnChangesComponent0(this, 17);
    _el_17 = _compView_17.rootEl;
    _el_0.append(_el_17);
    addShimC(_el_17);
    _OnChangesComponent_17_4 = new import1.OnChangesComponent();
    _compView_17.create(_OnChangesComponent_17_4, []);
    _el_8.addEventListener('input', eventHandler1(_handle_input_8_1));
    _el_8.addEventListener('blur', eventHandler0(_DefaultValueAccessor_8_4.touchHandler));
    final subscription_0 = _NgModel_8_6.update.listen(eventHandler1(_handle_ngModelChange_8_0));
    _el_13.addEventListener('input', eventHandler1(_handle_input_13_1));
    _el_13.addEventListener('blur', eventHandler0(_DefaultValueAccessor_13_4.touchHandler));
    final subscription_1 = _NgModel_13_6.update.listen(eventHandler1(_handle_ngModelChange_13_0));
    _el_15.addEventListener('click', eventHandler0(ctx.reset));
    _viewQuery_OnChangesComponent_0.reset([_OnChangesComponent_17_4]);
    ctx.childView = _viewQuery_OnChangesComponent_0.first;
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.DefaultValueAccessor) && (8 == nodeIndex))) {
      return _DefaultValueAccessor_8_4;
    }
    if ((identical(token, const import15.OpaqueToken<import16.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (8 == nodeIndex))) {
      return _NgValueAccessor_8_5;
    }
    if (((identical(token, import14.NgModel) || identical(token, import17.NgControl)) && (8 == nodeIndex))) {
      return _NgModel_8_6;
    }
    if ((identical(token, import13.DefaultValueAccessor) && (13 == nodeIndex))) {
      return _DefaultValueAccessor_13_4;
    }
    if ((identical(token, const import15.OpaqueToken<import16.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (13 == nodeIndex))) {
      return _NgValueAccessor_13_5;
    }
    if (((identical(token, import14.NgModel) || identical(token, import17.NgControl)) && (13 == nodeIndex))) {
      return _NgModel_13_6;
    }
    if ((identical(token, import1.OnChangesComponent) && (17 == nodeIndex))) {
      return _OnChangesComponent_17_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.OnChangesParentComponent _ctx = ctx;
    bool changed = false;
    Map<String, SimpleChange> changes;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_8_6.model = _ctx.power;
    _NgModel_8_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_8_6.ngOnInit();
    }
    changed = false;
    _NgModel_13_6.model = _ctx.hero.name;
    _NgModel_13_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_13_6.ngOnInit();
    }
    changes = null;
    final currVal_3 = _ctx.hero;
    if (!identical(_expr_3, currVal_3)) {
      _OnChangesComponent_17_4.hero = currVal_3;
      changes ??= <String, SimpleChange>{};
      changes['hero'] = new SimpleChange(_expr_3, currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.power;
    if (!identical(_expr_4, currVal_4)) {
      _OnChangesComponent_17_4.power = currVal_4;
      changes ??= <String, SimpleChange>{};
      changes['power'] = new SimpleChange(_expr_4, currVal_4);
      _expr_4 = currVal_4;
    }
    if (!identical(changes, null)) {
      _OnChangesComponent_17_4.ngOnChanges(changes);
    }
    final currVal_0 = (_ctx.title ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_17.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_17?.destroy();
  }

  void _handle_ngModelChange_8_0($event) {
    ctx.power = $event;
  }

  void _handle_input_8_1($event) {
    _DefaultValueAccessor_8_4.onChange($event.target.value);
  }

  void _handle_ngModelChange_13_0($event) {
    ctx.hero.name = $event;
  }

  void _handle_input_13_1($event) {
    _DefaultValueAccessor_13_4.onChange($event.target.value);
  }
}

AppView<import1.OnChangesParentComponent> viewFactory_OnChangesParentComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewOnChangesParentComponent0(parentView, parentIndex);
}

const List<dynamic> styles$OnChangesParentComponentHost = const [];

class _ViewOnChangesParentComponentHost0 extends AppView<dynamic> {
  ViewOnChangesParentComponent0 _compView_0;
  import1.OnChangesParentComponent _OnChangesParentComponent_0_4;
  _ViewOnChangesParentComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewOnChangesParentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _OnChangesParentComponent_0_4 = new import1.OnChangesParentComponent();
    _compView_0.create(_OnChangesParentComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.OnChangesParentComponent>(0, this, rootEl, _OnChangesParentComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.OnChangesParentComponent) && (0 == nodeIndex))) {
      return _OnChangesParentComponent_0_4;
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

AppView viewFactory_OnChangesParentComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewOnChangesParentComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.OnChangesParentComponent> OnChangesParentComponentNgFactory = const ComponentFactory<import1.OnChangesParentComponent>('on-changes-parent', viewFactory_OnChangesParentComponentHost0, _OnChangesParentComponentMetadata);
const _OnChangesComponentMetadata = const [];
const _OnChangesParentComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ngRef.registerComponent(
    OnChangesComponent,
    OnChangesComponentNgFactory,
  );
  _ngRef.registerComponent(
    OnChangesParentComponent,
    OnChangesParentComponentNgFactory,
  );
}
