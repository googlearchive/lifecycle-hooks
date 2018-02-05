// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'peek_a_boo_component.dart';
export 'peek_a_boo_component.dart';
import 'package:angular/angular.dart';
import 'logger_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'logger_service.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;

import 'package:angular/src/core/linker/app_view.dart';
import 'peek_a_boo_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';
import 'logger_service.dart' as import8;

const List<dynamic> styles$PeekABooComponent = const ['p._ngcontent-%COMP% { background:lightyellow; padding:8px; }'];

class ViewPeekABooComponent0 extends AppView<import1.PeekABooComponent> {
  import2.Element _el_0;
  import2.Text _text_2;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewPeekABooComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('peek-a-boo');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$PeekABooComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.PeekABooComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_0);
    import2.Text _text_1 = new import2.Text('Now you see my hero, ');
    _el_0.append(_text_1);
    _text_2 = new import2.Text('');
    _el_0.append(_text_2);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.PeekABooComponent _ctx = ctx;
    final currVal_0 = (_ctx.name ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.PeekABooComponent> viewFactory_PeekABooComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewPeekABooComponent0(parentView, parentIndex);
}

const List<dynamic> styles$PeekABooComponentHost = const [];

class _ViewPeekABooComponentHost0 extends AppView<dynamic> {
  ViewPeekABooComponent0 _compView_0;
  import1.PeekABooComponent _PeekABooComponent_0_4;
  _ViewPeekABooComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewPeekABooComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _PeekABooComponent_0_4 = new import1.PeekABooComponent(this.injectorGet(import8.LoggerService, viewData.parentIndex));
    _compView_0.create(_PeekABooComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.PeekABooComponent>(0, this, rootEl, _PeekABooComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.PeekABooComponent) && (0 == nodeIndex))) {
      return _PeekABooComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    Map<String, SimpleChange> changes;
    bool firstCheck = (this.cdState == 0);
    changes = null;
    if (firstCheck) {
      _PeekABooComponent_0_4.ngOnInit();
    }
    _PeekABooComponent_0_4.ngDoCheck();
    if (firstCheck) {
      _PeekABooComponent_0_4.ngAfterContentInit();
    }
    _PeekABooComponent_0_4.ngAfterContentChecked();
    _compView_0.detectChanges();
    if (firstCheck) {
      _PeekABooComponent_0_4.ngAfterViewInit();
    }
    _PeekABooComponent_0_4.ngAfterViewChecked();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _PeekABooComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_PeekABooComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewPeekABooComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.PeekABooComponent> PeekABooComponentNgFactory = const ComponentFactory<import1.PeekABooComponent>('peek-a-boo', viewFactory_PeekABooComponentHost0, _PeekABooComponentMetadata);
const _PeekABooComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ngRef.registerComponent(
    PeekABooComponent,
    PeekABooComponentNgFactory,
  );
}