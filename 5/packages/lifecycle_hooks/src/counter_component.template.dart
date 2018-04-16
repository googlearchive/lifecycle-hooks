// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'counter_component.dart';
export 'counter_component.dart';
import 'package:angular/angular.dart';
import 'logger_service.dart';
import 'spy_directive.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'logger_service.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'spy_directive.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'counter_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'spy_directive.dart' as import11;
import 'logger_service.dart' as import12;
import 'dart:core';

const List<dynamic> styles$MyCounterComponent = const ['.counter._ngcontent-%COMP% { background:lightyellow; padding:8px; margin-top:8px; }'];

class ViewMyCounterComponent0 extends AppView<import1.MyCounterComponent> {
  import2.DivElement _el_0;
  import2.Text _text_2;
  import2.Element _el_3;
  ViewContainer _appEl_5;
  import4.NgFor _NgFor_5_9;
  var _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewMyCounterComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-counter');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MyCounterComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.MyCounterComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'counter';
    addShimC(_el_0);
    import2.Text _text_1 = new import2.Text('Counter=');
    _el_0.append(_text_1);
    _text_2 = new import2.Text('');
    _el_0.append(_text_2);
    _el_3 = createAndAppend(doc, 'h5', _el_0);
    addShimE(_el_3);
    import2.Text _text_4 = new import2.Text('-- Counter Change Log --');
    _el_3.append(_text_4);
    final _anchor_5 = createViewContainerAnchor();
    _el_0.append(_anchor_5);
    _appEl_5 = new ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_MyCounterComponent1);
    _NgFor_5_9 = new import4.NgFor(_appEl_5, _TemplateRef_5_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MyCounterComponent _ctx = ctx;
    final currVal_1 = _ctx.changeLog;
    if (!identical(_expr_1, currVal_1)) {
      _NgFor_5_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    _NgFor_5_9.ngDoCheck();
    _appEl_5.detectChangesInNestedViews();
    final currVal_0 = import8.interpolate0(_ctx.counter);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_5?.destroyNestedViews();
  }
}

AppView<import1.MyCounterComponent> viewFactory_MyCounterComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMyCounterComponent0(parentView, parentIndex);
}

class _ViewMyCounterComponent1 extends AppView<import1.MyCounterComponent> {
  import2.DivElement _el_0;
  import11.SpyDirective _SpyDirective_0_5;
  import2.Text _text_1;
  var _expr_0;
  _ViewMyCounterComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMyCounterComponent0._renderType;
  }
  @override
  ComponentRef<import1.MyCounterComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'mySpy', '');
    addShimC(_el_0);
    _SpyDirective_0_5 = new import11.SpyDirective(parentView.parentView.injectorGet(import12.LoggerService, parentView.viewData.parentIndex));
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final String local_chg = locals['\$implicit'];
    if (firstCheck) {
      _SpyDirective_0_5.ngOnInit();
    }
    final currVal_0 = import8.interpolate0(local_chg);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _SpyDirective_0_5.ngOnDestroy();
  }
}

AppView<import1.MyCounterComponent> viewFactory_MyCounterComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMyCounterComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MyCounterComponentHost = const [];

class _ViewMyCounterComponentHost0 extends AppView<dynamic> {
  ViewMyCounterComponent0 _compView_0;
  import1.MyCounterComponent _MyCounterComponent_0_5;
  _ViewMyCounterComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMyCounterComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MyCounterComponent_0_5 = new import1.MyCounterComponent();
    _compView_0.create(_MyCounterComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.MyCounterComponent>(0, this, rootEl, _MyCounterComponent_0_5);
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

AppView viewFactory_MyCounterComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMyCounterComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.MyCounterComponent> MyCounterComponentNgFactory = const ComponentFactory<import1.MyCounterComponent>('my-counter', viewFactory_MyCounterComponentHost0, _MyCounterComponentMetadata);
const List<dynamic> styles$CounterParentComponent = const ['.parent._ngcontent-%COMP% { background:gold; }'];

class ViewCounterParentComponent0 extends AppView<import1.CounterParentComponent> {
  import2.DivElement _el_0;
  import2.Element _el_1;
  import2.ButtonElement _el_3;
  import2.ButtonElement _el_5;
  import2.Element _el_7;
  ViewMyCounterComponent0 _compView_7;
  import1.MyCounterComponent _MyCounterComponent_7_5;
  import2.Element _el_8;
  ViewContainer _appEl_10;
  import4.NgFor _NgFor_10_9;
  num _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewCounterParentComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('counter-parent');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$CounterParentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.CounterParentComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'parent';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    import2.Text _text_2 = new import2.Text('Counter Spy');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_3);
    import2.Text _text_4 = new import2.Text('Update counter');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_5);
    import2.Text _text_6 = new import2.Text('Reset Counter');
    _el_5.append(_text_6);
    _compView_7 = new ViewMyCounterComponent0(this, 7);
    _el_7 = _compView_7.rootEl;
    _el_0.append(_el_7);
    addShimC(_el_7);
    _MyCounterComponent_7_5 = new import1.MyCounterComponent();
    _compView_7.create(_MyCounterComponent_7_5, []);
    _el_8 = createAndAppend(doc, 'h4', _el_0);
    addShimE(_el_8);
    import2.Text _text_9 = new import2.Text('-- Spy Lifecycle Hook Log --');
    _el_8.append(_text_9);
    final _anchor_10 = createViewContainerAnchor();
    _el_0.append(_anchor_10);
    _appEl_10 = new ViewContainer(10, 0, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = new TemplateRef(_appEl_10, viewFactory_CounterParentComponent1);
    _NgFor_10_9 = new import4.NgFor(_appEl_10, _TemplateRef_10_8);
    _el_3.addEventListener('click', eventHandler0(ctx.updateCounter));
    _el_5.addEventListener('click', eventHandler0(ctx.reset));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.CounterParentComponent _ctx = ctx;
    Map<String, SimpleChange> changes;
    changes = null;
    final currVal_0 = _ctx.value;
    if (!identical(_expr_0, currVal_0)) {
      _MyCounterComponent_7_5.counter = currVal_0;
      changes ??= <String, SimpleChange>{};
      changes['counter'] = new SimpleChange(_expr_0, currVal_0);
      _expr_0 = currVal_0;
    }
    if (!identical(changes, null)) {
      _MyCounterComponent_7_5.ngOnChanges(changes);
    }
    final currVal_1 = _ctx.logs;
    if (!identical(_expr_1, currVal_1)) {
      _NgFor_10_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    _NgFor_10_9.ngDoCheck();
    _appEl_10.detectChangesInNestedViews();
    _compView_7.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_10?.destroyNestedViews();
    _compView_7?.destroy();
  }
}

AppView<import1.CounterParentComponent> viewFactory_CounterParentComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewCounterParentComponent0(parentView, parentIndex);
}

class _ViewCounterParentComponent1 extends AppView<import1.CounterParentComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewCounterParentComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewCounterParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.CounterParentComponent> build() {
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
    final currVal_0 = import8.interpolate0(local_msg);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.CounterParentComponent> viewFactory_CounterParentComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewCounterParentComponent1(parentView, parentIndex);
}

const List<dynamic> styles$CounterParentComponentHost = const [];

class _ViewCounterParentComponentHost0 extends AppView<dynamic> {
  ViewCounterParentComponent0 _compView_0;
  import12.LoggerService _LoggerService_0_5;
  import1.CounterParentComponent _CounterParentComponent_0_6;
  _ViewCounterParentComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewCounterParentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LoggerService_0_5 = new import12.LoggerService();
    _CounterParentComponent_0_6 = new import1.CounterParentComponent(_LoggerService_0_5);
    _compView_0.create(_CounterParentComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.CounterParentComponent>(0, this, rootEl, _CounterParentComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import12.LoggerService) && (0 == nodeIndex))) {
      return _LoggerService_0_5;
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

AppView viewFactory_CounterParentComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewCounterParentComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.CounterParentComponent> CounterParentComponentNgFactory = const ComponentFactory<import1.CounterParentComponent>('counter-parent', viewFactory_CounterParentComponentHost0, _CounterParentComponentMetadata);
const _MyCounterComponentMetadata = const [];
const _CounterParentComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MyCounterComponent, MyCounterComponentNgFactory);
  _ngRef.registerComponent(CounterParentComponent, CounterParentComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
