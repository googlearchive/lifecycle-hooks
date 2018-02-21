// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/after_content_component.dart';
import 'src/after_view_component.dart';
import 'src/counter_component.dart';
import 'src/do_check_component.dart';
import 'src/on_changes_component.dart';
import 'src/peek_a_boo_parent_component.dart';
import 'src/spy_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/after_content_component.template.dart' as _ref1;
import 'src/after_view_component.template.dart' as _ref2;
import 'src/counter_component.template.dart' as _ref3;
import 'src/do_check_component.template.dart' as _ref4;
import 'src/on_changes_component.template.dart' as _ref5;
import 'src/peek_a_boo_parent_component.template.dart' as _ref6;
import 'src/spy_component.template.dart' as _ref7;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'src/peek_a_boo_parent_component.template.dart' as import3;
import 'src/logger_service.dart' as import4;
import 'src/peek_a_boo_parent_component.dart' as import5;
import 'src/spy_component.template.dart' as import6;
import 'src/spy_component.dart' as import7;
import 'src/on_changes_component.template.dart' as import8;
import 'src/on_changes_component.dart' as import9;
import 'src/do_check_component.template.dart' as import10;
import 'src/do_check_component.dart' as import11;
import 'src/after_view_component.template.dart' as import12;
import 'src/after_view_component.dart' as import13;
import 'src/after_content_component.template.dart' as import14;
import 'src/after_content_component.dart' as import15;
import 'src/counter_component.template.dart' as import16;
import 'src/counter_component.dart' as import17;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import19;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import21;
import 'package:angular/angular.dart';

const List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.AnchorElement _el_0;
  import2.Element _el_1;
  import2.AnchorElement _el_3;
  import2.Element _el_5;
  import2.AnchorElement _el_6;
  import2.Element _el_8;
  import2.AnchorElement _el_9;
  import2.Element _el_11;
  import2.AnchorElement _el_12;
  import2.Element _el_14;
  import2.AnchorElement _el_15;
  import2.Element _el_17;
  import2.AnchorElement _el_18;
  import2.Element _el_20;
  import2.AnchorElement _el_21;
  import2.Element _el_23;
  import2.AnchorElement _el_24;
  import2.Element _el_25;
  import3.ViewPeekABooParentComponent0 _compView_25;
  import4.LoggerService _LoggerService_25_4;
  import5.PeekABooParentComponent _PeekABooParentComponent_25_5;
  import2.AnchorElement _el_26;
  import2.AnchorElement _el_28;
  import2.Element _el_29;
  import6.ViewSpyParentComponent0 _compView_29;
  import4.LoggerService _LoggerService_29_4;
  import7.SpyParentComponent _SpyParentComponent_29_5;
  import2.AnchorElement _el_30;
  import2.AnchorElement _el_32;
  import2.Element _el_33;
  import8.ViewOnChangesParentComponent0 _compView_33;
  import9.OnChangesParentComponent _OnChangesParentComponent_33_4;
  import2.AnchorElement _el_34;
  import2.AnchorElement _el_36;
  import2.Element _el_37;
  import10.ViewDoCheckParentComponent0 _compView_37;
  import11.DoCheckParentComponent _DoCheckParentComponent_37_4;
  import2.AnchorElement _el_38;
  import2.AnchorElement _el_40;
  import2.Element _el_41;
  import12.ViewAfterViewParentComponent0 _compView_41;
  import4.LoggerService _LoggerService_41_4;
  import13.AfterViewParentComponent _AfterViewParentComponent_41_5;
  import2.AnchorElement _el_42;
  import2.AnchorElement _el_44;
  import2.Element _el_45;
  import14.ViewAfterContentParentComponent0 _compView_45;
  import4.LoggerService _LoggerService_45_4;
  import15.AfterContentParentComponent _AfterContentParentComponent_45_5;
  import2.AnchorElement _el_46;
  import2.AnchorElement _el_48;
  import2.Element _el_49;
  import16.ViewCounterParentComponent0 _compView_49;
  import4.LoggerService _LoggerService_49_4;
  import17.CounterParentComponent _CounterParentComponent_49_5;
  import2.AnchorElement _el_50;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import21.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_0, 'id', 'top');
    _el_1 = createAndAppend(doc, 'h1', parentRenderNode);
    import2.Text _text_2 = new import2.Text('Component Lifecycle Hooks');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_3, 'href', '#hooks');
    import2.Text _text_4 = new import2.Text('Peek-a-boo: (most) lifecycle hooks');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'br', parentRenderNode);
    _el_6 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_6, 'href', '#onchanges');
    import2.Text _text_7 = new import2.Text('OnChanges');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'br', parentRenderNode);
    _el_9 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_9, 'href', '#docheck');
    import2.Text _text_10 = new import2.Text('DoCheck');
    _el_9.append(_text_10);
    _el_11 = createAndAppend(doc, 'br', parentRenderNode);
    _el_12 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_12, 'href', '#after-view');
    import2.Text _text_13 = new import2.Text('AfterViewInit & AfterViewChecked');
    _el_12.append(_text_13);
    _el_14 = createAndAppend(doc, 'br', parentRenderNode);
    _el_15 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_15, 'href', '#after-content');
    import2.Text _text_16 = new import2.Text('AfterContentInit & AfterContentChecked');
    _el_15.append(_text_16);
    _el_17 = createAndAppend(doc, 'br', parentRenderNode);
    _el_18 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_18, 'href', '#spy');
    import2.Text _text_19 = new import2.Text('Spy: directive with OnInit & OnDestroy');
    _el_18.append(_text_19);
    _el_20 = createAndAppend(doc, 'br', parentRenderNode);
    _el_21 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_21, 'href', '#counter');
    import2.Text _text_22 = new import2.Text('Counter: OnChanges + Spy directive');
    _el_21.append(_text_22);
    _el_23 = createAndAppend(doc, 'br', parentRenderNode);
    _el_24 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_24, 'id', 'hooks');
    _compView_25 = new import3.ViewPeekABooParentComponent0(this, 25);
    _el_25 = _compView_25.rootEl;
    parentRenderNode.append(_el_25);
    _LoggerService_25_4 = new import4.LoggerService();
    _PeekABooParentComponent_25_5 = new import5.PeekABooParentComponent(_LoggerService_25_4);
    _compView_25.create(_PeekABooParentComponent_25_5, []);
    _el_26 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_26, 'href', '#top');
    import2.Text _text_27 = new import2.Text('back to top');
    _el_26.append(_text_27);
    _el_28 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_28, 'id', 'spy');
    _compView_29 = new import6.ViewSpyParentComponent0(this, 29);
    _el_29 = _compView_29.rootEl;
    parentRenderNode.append(_el_29);
    _LoggerService_29_4 = new import4.LoggerService();
    _SpyParentComponent_29_5 = new import7.SpyParentComponent(_LoggerService_29_4);
    _compView_29.create(_SpyParentComponent_29_5, []);
    _el_30 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_30, 'href', '#top');
    import2.Text _text_31 = new import2.Text('back to top');
    _el_30.append(_text_31);
    _el_32 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_32, 'id', 'onchanges');
    _compView_33 = new import8.ViewOnChangesParentComponent0(this, 33);
    _el_33 = _compView_33.rootEl;
    parentRenderNode.append(_el_33);
    _OnChangesParentComponent_33_4 = new import9.OnChangesParentComponent();
    _compView_33.create(_OnChangesParentComponent_33_4, []);
    _el_34 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_34, 'href', '#top');
    import2.Text _text_35 = new import2.Text('back to top');
    _el_34.append(_text_35);
    _el_36 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_36, 'id', 'docheck');
    _compView_37 = new import10.ViewDoCheckParentComponent0(this, 37);
    _el_37 = _compView_37.rootEl;
    parentRenderNode.append(_el_37);
    _DoCheckParentComponent_37_4 = new import11.DoCheckParentComponent();
    _compView_37.create(_DoCheckParentComponent_37_4, []);
    _el_38 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_38, 'href', '#top');
    import2.Text _text_39 = new import2.Text('back to top');
    _el_38.append(_text_39);
    _el_40 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_40, 'id', 'after-view');
    _compView_41 = new import12.ViewAfterViewParentComponent0(this, 41);
    _el_41 = _compView_41.rootEl;
    parentRenderNode.append(_el_41);
    _LoggerService_41_4 = new import4.LoggerService();
    _AfterViewParentComponent_41_5 = new import13.AfterViewParentComponent(_LoggerService_41_4);
    _compView_41.create(_AfterViewParentComponent_41_5, []);
    _el_42 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_42, 'href', '#top');
    import2.Text _text_43 = new import2.Text('back to top');
    _el_42.append(_text_43);
    _el_44 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_44, 'id', 'after-content');
    _compView_45 = new import14.ViewAfterContentParentComponent0(this, 45);
    _el_45 = _compView_45.rootEl;
    parentRenderNode.append(_el_45);
    _LoggerService_45_4 = new import4.LoggerService();
    _AfterContentParentComponent_45_5 = new import15.AfterContentParentComponent(_LoggerService_45_4);
    _compView_45.create(_AfterContentParentComponent_45_5, []);
    _el_46 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_46, 'href', '#top');
    import2.Text _text_47 = new import2.Text('back to top');
    _el_46.append(_text_47);
    _el_48 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_48, 'id', 'counter');
    _compView_49 = new import16.ViewCounterParentComponent0(this, 49);
    _el_49 = _compView_49.rootEl;
    parentRenderNode.append(_el_49);
    _LoggerService_49_4 = new import4.LoggerService();
    _CounterParentComponent_49_5 = new import17.CounterParentComponent(_LoggerService_49_4);
    _compView_49.create(_CounterParentComponent_49_5, []);
    _el_50 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_50, 'href', '#top');
    import2.Text _text_51 = new import2.Text('back to top');
    _el_50.append(_text_51);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.LoggerService) && (25 == nodeIndex))) {
      return _LoggerService_25_4;
    }
    if ((identical(token, import5.PeekABooParentComponent) && (25 == nodeIndex))) {
      return _PeekABooParentComponent_25_5;
    }
    if ((identical(token, import4.LoggerService) && (29 == nodeIndex))) {
      return _LoggerService_29_4;
    }
    if ((identical(token, import7.SpyParentComponent) && (29 == nodeIndex))) {
      return _SpyParentComponent_29_5;
    }
    if ((identical(token, import9.OnChangesParentComponent) && (33 == nodeIndex))) {
      return _OnChangesParentComponent_33_4;
    }
    if ((identical(token, import11.DoCheckParentComponent) && (37 == nodeIndex))) {
      return _DoCheckParentComponent_37_4;
    }
    if ((identical(token, import4.LoggerService) && (41 == nodeIndex))) {
      return _LoggerService_41_4;
    }
    if ((identical(token, import13.AfterViewParentComponent) && (41 == nodeIndex))) {
      return _AfterViewParentComponent_41_5;
    }
    if ((identical(token, import4.LoggerService) && (45 == nodeIndex))) {
      return _LoggerService_45_4;
    }
    if ((identical(token, import15.AfterContentParentComponent) && (45 == nodeIndex))) {
      return _AfterContentParentComponent_45_5;
    }
    if ((identical(token, import4.LoggerService) && (49 == nodeIndex))) {
      return _LoggerService_49_4;
    }
    if ((identical(token, import17.CounterParentComponent) && (49 == nodeIndex))) {
      return _CounterParentComponent_49_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_25.detectChanges();
    _compView_29.detectChanges();
    _compView_33.detectChanges();
    _compView_37.detectChanges();
    _compView_41.detectChanges();
    _compView_45.detectChanges();
    _compView_49.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_25?.destroy();
    _compView_29?.destroy();
    _compView_33?.destroy();
    _compView_37?.destroy();
    _compView_41?.destroy();
    _compView_45?.destroy();
    _compView_49?.destroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_4;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_4 = new import1.AppComponent();
    _compView_0.create(_AppComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AppComponent>(0, this, rootEl, _AppComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_4;
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

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> AppComponentNgFactory = const ComponentFactory<import1.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
