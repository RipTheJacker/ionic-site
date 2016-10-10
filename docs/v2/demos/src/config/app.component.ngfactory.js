var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/tabs/tabs';
import * as import11 from 'ionic-angular/components/tabs/tab';
import * as import12 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import13 from 'ionic-angular/navigation/nav-controller';
import * as import14 from 'ionic-angular/navigation/view-controller';
import * as import15 from 'ionic-angular/components/app/app';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/platform/platform';
import * as import19 from 'ionic-angular/navigation/deep-linker';
import * as import20 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
import * as import24 from 'ionic-angular/gestures/gesture-controller';
import * as import25 from 'ionic-angular/transitions/transition-controller';
import * as import26 from 'ionic-angular/components/toolbar/toolbar';
import * as import27 from 'ionic-angular/components/navbar/navbar';
import * as import28 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import29 from 'ionic-angular/components/content/content';
import * as import30 from 'ionic-angular/components/list/list';
import * as import31 from 'ionic-angular/components/item/item';
import * as import32 from '@angular/core/src/linker/query_list';
import * as import33 from 'ionic-angular/components/label/label';
import * as import34 from 'ionic-angular/components/select/select';
import * as import35 from '@angular/forms/src/directives/ng_model';
import * as import36 from '@angular/forms/src/directives/ng_control_status';
import * as import37 from 'ionic-angular/components/option/option';
import * as import38 from 'ionic-angular/components/button/button';
import * as import39 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import40 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import41 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import42 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import43 from 'ionic-angular/util/form';
import * as import44 from '../../node_modules/ionic-angular/components/select/select.ngfactory';
import * as import45 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import46 from '@angular/forms/src/directives/control_value_accessor';
import * as import47 from '@angular/forms/src/directives/ng_control';
import * as import48 from 'ionic-angular/components/nav/nav';
import * as import49 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import50 from 'ionic-angular/navigation/nav-controller-base';
var renderType_TabPage_Host = null;
var _View_TabPage_Host0 = (function (_super) {
    __extends(_View_TabPage_Host0, _super);
    function _View_TabPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabPage_Host0, renderType_TabPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TabPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TabPage_0_4 = new import3.TabPage();
        this._appEl_0.initComponent(this._TabPage_0_4, [], compView_0);
        compView_0.create(this._TabPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TabPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TabPage) && (0 === requestNodeIndex))) {
            return this._TabPage_0_4;
        }
        return notFoundResult;
    };
    return _View_TabPage_Host0;
}(import1.AppView));
function viewFactory_TabPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabPage_Host === null)) {
        (renderType_TabPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TabPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var TabPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_TabPage_Host0, import3.TabPage);
var styles_TabPage = [];
var renderType_TabPage = null;
var _View_TabPage0 = (function (_super) {
    __extends(_View_TabPage0, _super);
    function _View_TabPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabPage0, renderType_TabPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-tabs', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import12.viewFactory_Tabs0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Tabs_0_4 = new import10.Tabs(this.parentInjector.get(import13.NavController, null), this.parentInjector.get(import14.ViewController, null), this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.parentInjector.get(import18.Platform), this.renderer, this.parentInjector.get(import19.DeepLinker));
        this._appEl_0.initComponent(this._Tabs_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_2, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_2, 'tabIcon', 'musical-notes');
        this.renderer.setElementAttribute(this._el_2, 'tabTitle', 'Music');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import20.viewFactory_Tab0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Tab_2_4 = new import11.Tab(this._Tabs_0_4, this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import21.Keyboard), new import17.ElementRef(this._el_2), this.parentInjector.get(import22.NgZone), this.renderer, this.parentInjector.get(import23.ComponentFactoryResolver), compView_2.ref, this.parentInjector.get(import24.GestureController), this.parentInjector.get(import25.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_2.initComponent(this._Tab_2_4, [], compView_2);
        compView_2.create(this._Tab_2_4, [], null);
        this._text_3 = this.renderer.createText(null, '\n  ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_4, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_4, 'tabIcon', 'videocam');
        this.renderer.setElementAttribute(this._el_4, 'tabTitle', 'Movies');
        this._appEl_4 = new import2.AppElement(4, 0, this, this._el_4);
        var compView_4 = import20.viewFactory_Tab0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Tab_4_4 = new import11.Tab(this._Tabs_0_4, this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import21.Keyboard), new import17.ElementRef(this._el_4), this.parentInjector.get(import22.NgZone), this.renderer, this.parentInjector.get(import23.ComponentFactoryResolver), compView_4.ref, this.parentInjector.get(import24.GestureController), this.parentInjector.get(import25.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_4.initComponent(this._Tab_4_4, [], compView_4);
        compView_4.create(this._Tab_4_4, [], null);
        this._text_5 = this.renderer.createText(null, '\n  ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_6, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_6, 'tabIcon', 'game-controller-b');
        this.renderer.setElementAttribute(this._el_6, 'tabTitle', 'Games');
        this._appEl_6 = new import2.AppElement(6, 0, this, this._el_6);
        var compView_6 = import20.viewFactory_Tab0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Tab_6_4 = new import11.Tab(this._Tabs_0_4, this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import21.Keyboard), new import17.ElementRef(this._el_6), this.parentInjector.get(import22.NgZone), this.renderer, this.parentInjector.get(import23.ComponentFactoryResolver), compView_6.ref, this.parentInjector.get(import24.GestureController), this.parentInjector.get(import25.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_6.initComponent(this._Tab_6_4, [], compView_6);
        compView_6.create(this._Tab_6_4, [], null);
        this._text_7 = this.renderer.createText(null, '\n', null);
        compView_0.create(this._Tabs_0_4, [[].concat([
                this._text_1,
                this._el_2,
                this._text_3,
                this._el_4,
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8
        ], [], []);
        return null;
    };
    _View_TabPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.Tab) && (2 === requestNodeIndex))) {
            return this._Tab_2_4;
        }
        if (((token === import11.Tab) && (4 === requestNodeIndex))) {
            return this._Tab_4_4;
        }
        if (((token === import11.Tab) && (6 === requestNodeIndex))) {
            return this._Tab_6_4;
        }
        if (((token === import10.Tabs) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Tabs_0_4;
        }
        return notFoundResult;
    };
    _View_TabPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.tabOne;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Tab_2_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = 'Music';
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Tab_2_4.tabTitle = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = 'musical-notes';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Tab_2_4.tabIcon = currVal_2;
            this._expr_2 = currVal_2;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_2_4.ngOnInit();
        }
        var currVal_5 = this.context.tabOne;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Tab_4_4.root = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_6 = 'Movies';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Tab_4_4.tabTitle = currVal_6;
            this._expr_6 = currVal_6;
        }
        var currVal_7 = 'videocam';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Tab_4_4.tabIcon = currVal_7;
            this._expr_7 = currVal_7;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_4_4.ngOnInit();
        }
        var currVal_10 = this.context.tabOne;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._Tab_6_4.root = currVal_10;
            this._expr_10 = currVal_10;
        }
        var currVal_11 = 'Games';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._Tab_6_4.tabTitle = currVal_11;
            this._expr_11 = currVal_11;
        }
        var currVal_12 = 'game-controller-b';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Tab_6_4.tabIcon = currVal_12;
            this._expr_12 = currVal_12;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_6_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = this._Tab_2_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementAttribute(this._el_2, 'id', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Tab_2_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-labelledby', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
        var currVal_8 = this._Tab_4_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_4, 'id', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._Tab_4_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementAttribute(this._el_4, 'aria-labelledby', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
        var currVal_13 = this._Tab_6_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementAttribute(this._el_6, 'id', ((currVal_13 == null) ? null : currVal_13.toString()));
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._Tab_6_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementAttribute(this._el_6, 'aria-labelledby', ((currVal_14 == null) ? null : currVal_14.toString()));
            this._expr_14 = currVal_14;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Tabs_0_4.ngAfterViewInit();
            }
        }
    };
    _View_TabPage0.prototype.destroyInternal = function () {
        this._Tabs_0_4.ngOnDestroy();
    };
    return _View_TabPage0;
}(import1.AppView));
export function viewFactory_TabPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabPage === null)) {
        (renderType_TabPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/config/tabs.html', 0, import8.ViewEncapsulation.None, styles_TabPage, {}));
    }
    return new _View_TabPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage(this.parentInjector.get(import18.Platform), this.parentInjector.get(import13.NavController));
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
var styles_ApiDemoPage = ['.config-demo[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    background-color: #f8f8f8;\n  }\n\n  .config-demo[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n    color: #444;\n    font-style: italic;\n    margin: 0 16px;\n  }'];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import26.Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import14.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import39.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import27.Navbar(this.parentInjector.get(import15.App), this.parentInjector.get(import14.ViewController, null), this.parentInjector.get(import13.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import40.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import28.ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import26.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Config', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'config-demo');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import41.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import29.Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import15.App), this.parentInjector.get(import21.Keyboard), this.parentInjector.get(import22.NgZone), this.parentInjector.get(import14.ViewController, null), this.parentInjector.get(import10.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import30.List(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import24.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item item-block');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import42.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import31.Item(this.parentInjector.get(import43.Form), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_13), this.renderer);
        this._ItemContent_13_5 = new import31.ItemContent();
        this._query_Label_13_0 = new import32.QueryList();
        this._query_Button_13_1 = new import32.QueryList();
        this._query_Icon_13_2 = new import32.QueryList();
        this._appEl_13.initComponent(this._Item_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_15_3 = new import33.Label(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_15), this.renderer, null, null, null, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Back Button Icon', null);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-select', null);
        this._appEl_18 = new import2.AppElement(18, 13, this, this._el_18);
        var compView_18 = import44.viewFactory_Select0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Select_18_4 = new import34.Select(this.parentInjector.get(import15.App), this.parentInjector.get(import43.Form), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_18), this.renderer, this._Item_13_4, this.parentInjector.get(import13.NavController, null));
        this._NG_VALUE_ACCESSOR_18_5 = [this._Select_18_4];
        this._NgModel_18_6 = new import35.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_18_5);
        this._NgControl_18_7 = this._NgModel_18_6;
        this._NgControlStatus_18_8 = new import36.NgControlStatus(this._NgControl_18_7);
        this._query_Option_18_0 = new import32.QueryList();
        this._appEl_18.initComponent(this._Select_18_4, [], compView_18);
        this._text_19 = this.renderer.createText(null, '\n        ', null);
        this._el_20 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_20, 'value', 'ios-arrow-back');
        this._Option_20_3 = new import37.Option(new import17.ElementRef(this._el_20));
        this._text_21 = this.renderer.createText(this._el_20, 'ios-arrow-back', null);
        this._text_22 = this.renderer.createText(null, '\n        ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_23, 'value', 'md-arrow-back');
        this._Option_23_3 = new import37.Option(new import17.ElementRef(this._el_23));
        this._text_24 = this.renderer.createText(this._el_23, 'md-arrow-back', null);
        this._text_25 = this.renderer.createText(null, '\n        ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_26, 'value', 'close');
        this._Option_26_3 = new import37.Option(new import17.ElementRef(this._el_26));
        this._text_27 = this.renderer.createText(this._el_26, 'close', null);
        this._text_28 = this.renderer.createText(null, '\n        ', null);
        this._el_29 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_29, 'value', 'heart');
        this._Option_29_3 = new import37.Option(new import17.ElementRef(this._el_29));
        this._text_30 = this.renderer.createText(this._el_29, 'heart', null);
        this._text_31 = this.renderer.createText(null, '\n        ', null);
        this._el_32 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_32, 'value', 'globe');
        this._Option_32_3 = new import37.Option(new import17.ElementRef(this._el_32));
        this._text_33 = this.renderer.createText(this._el_32, 'globe', null);
        this._text_34 = this.renderer.createText(null, '\n      ', null);
        compView_18.create(this._Select_18_4, [], null);
        this._text_35 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([this._Label_15_3]);
        this._Item_13_4.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4, [
            [],
            [].concat([this._el_15]),
            [].concat([
                this._text_14,
                this._text_17,
                this._text_35
            ]),
            [].concat([this._el_18]),
            []
        ], null);
        this._text_36 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_37 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_37, 'class', 'item item-block');
        this._appEl_37 = new import2.AppElement(37, 11, this, this._el_37);
        var compView_37 = import42.viewFactory_Item0(this.viewUtils, this.injector(37), this._appEl_37);
        this._Item_37_4 = new import31.Item(this.parentInjector.get(import43.Form), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_37), this.renderer);
        this._ItemContent_37_5 = new import31.ItemContent();
        this._query_Label_37_0 = new import32.QueryList();
        this._query_Button_37_1 = new import32.QueryList();
        this._query_Icon_37_2 = new import32.QueryList();
        this._appEl_37.initComponent(this._Item_37_4, [], compView_37);
        this._text_38 = this.renderer.createText(null, '\n      ', null);
        this._el_39 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_39_3 = new import33.Label(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_39), this.renderer, null, null, null, null);
        this._text_40 = this.renderer.createText(this._el_39, 'Icon Mode', null);
        this._text_41 = this.renderer.createText(null, '\n      ', null);
        this._el_42 = this.renderer.createElement(null, 'ion-select', null);
        this._appEl_42 = new import2.AppElement(42, 37, this, this._el_42);
        var compView_42 = import44.viewFactory_Select0(this.viewUtils, this.injector(42), this._appEl_42);
        this._Select_42_4 = new import34.Select(this.parentInjector.get(import15.App), this.parentInjector.get(import43.Form), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_42), this.renderer, this._Item_37_4, this.parentInjector.get(import13.NavController, null));
        this._NG_VALUE_ACCESSOR_42_5 = [this._Select_42_4];
        this._NgModel_42_6 = new import35.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_42_5);
        this._NgControl_42_7 = this._NgModel_42_6;
        this._NgControlStatus_42_8 = new import36.NgControlStatus(this._NgControl_42_7);
        this._query_Option_42_0 = new import32.QueryList();
        this._appEl_42.initComponent(this._Select_42_4, [], compView_42);
        this._text_43 = this.renderer.createText(null, '\n        ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_44, 'value', 'ios');
        this._Option_44_3 = new import37.Option(new import17.ElementRef(this._el_44));
        this._text_45 = this.renderer.createText(this._el_44, 'ios', null);
        this._text_46 = this.renderer.createText(null, '\n        ', null);
        this._el_47 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_47, 'value', 'md');
        this._Option_47_3 = new import37.Option(new import17.ElementRef(this._el_47));
        this._text_48 = this.renderer.createText(this._el_47, 'md', null);
        this._text_49 = this.renderer.createText(null, '\n      ', null);
        compView_42.create(this._Select_42_4, [], null);
        this._text_50 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_37_0.reset([this._Label_39_3]);
        this._Item_37_4.contentLabel = this._query_Label_37_0.first;
        compView_37.create(this._Item_37_4, [
            [],
            [].concat([this._el_39]),
            [].concat([
                this._text_38,
                this._text_41,
                this._text_50
            ]),
            [].concat([this._el_42]),
            []
        ], null);
        this._text_51 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_52 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_52, 'class', 'item item-block');
        this._appEl_52 = new import2.AppElement(52, 11, this, this._el_52);
        var compView_52 = import42.viewFactory_Item0(this.viewUtils, this.injector(52), this._appEl_52);
        this._Item_52_4 = new import31.Item(this.parentInjector.get(import43.Form), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_52), this.renderer);
        this._ItemContent_52_5 = new import31.ItemContent();
        this._query_Label_52_0 = new import32.QueryList();
        this._query_Button_52_1 = new import32.QueryList();
        this._query_Icon_52_2 = new import32.QueryList();
        this._appEl_52.initComponent(this._Item_52_4, [], compView_52);
        this._text_53 = this.renderer.createText(null, '\n      ', null);
        this._el_54 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_54_3 = new import33.Label(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_54), this.renderer, null, null, null, null);
        this._text_55 = this.renderer.createText(this._el_54, 'Tab Placement', null);
        this._text_56 = this.renderer.createText(null, '\n      ', null);
        this._el_57 = this.renderer.createElement(null, 'ion-select', null);
        this._appEl_57 = new import2.AppElement(57, 52, this, this._el_57);
        var compView_57 = import44.viewFactory_Select0(this.viewUtils, this.injector(57), this._appEl_57);
        this._Select_57_4 = new import34.Select(this.parentInjector.get(import15.App), this.parentInjector.get(import43.Form), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_57), this.renderer, this._Item_52_4, this.parentInjector.get(import13.NavController, null));
        this._NG_VALUE_ACCESSOR_57_5 = [this._Select_57_4];
        this._NgModel_57_6 = new import35.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_57_5);
        this._NgControl_57_7 = this._NgModel_57_6;
        this._NgControlStatus_57_8 = new import36.NgControlStatus(this._NgControl_57_7);
        this._query_Option_57_0 = new import32.QueryList();
        this._appEl_57.initComponent(this._Select_57_4, [], compView_57);
        this._text_58 = this.renderer.createText(null, '\n        ', null);
        this._el_59 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_59, 'value', 'bottom');
        this._Option_59_3 = new import37.Option(new import17.ElementRef(this._el_59));
        this._text_60 = this.renderer.createText(this._el_59, 'bottom', null);
        this._text_61 = this.renderer.createText(null, '\n        ', null);
        this._el_62 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_62, 'value', 'top');
        this._Option_62_3 = new import37.Option(new import17.ElementRef(this._el_62));
        this._text_63 = this.renderer.createText(this._el_62, 'top', null);
        this._text_64 = this.renderer.createText(null, '\n      ', null);
        compView_57.create(this._Select_57_4, [], null);
        this._text_65 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_52_0.reset([this._Label_54_3]);
        this._Item_52_4.contentLabel = this._query_Label_52_0.first;
        compView_52.create(this._Item_52_4, [
            [],
            [].concat([this._el_54]),
            [].concat([
                this._text_53,
                this._text_56,
                this._text_65
            ]),
            [].concat([this._el_57]),
            []
        ], null);
        this._text_66 = this.renderer.createText(this._el_11, '\n\n  ', null);
        this._text_67 = this.renderer.createText(null, '\n  ', null);
        this._el_68 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_68, 'class', 'note');
        this._text_69 = this.renderer.createText(this._el_68, 'Note: the config will not be updated until you click the button below.', null);
        this._text_70 = this.renderer.createText(null, '\n\n  ', null);
        this._el_71 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_71, 'padding', '');
        this._text_72 = this.renderer.createText(this._el_71, '\n    ', null);
        this._el_73 = this.renderer.createElement(this._el_71, 'button', null);
        this.renderer.setElementAttribute(this._el_73, 'block', '');
        this.renderer.setElementAttribute(this._el_73, 'ion-button', '');
        this._appEl_73 = new import2.AppElement(73, 71, this, this._el_73);
        var compView_73 = import45.viewFactory_Button0(this.viewUtils, this.injector(73), this._appEl_73);
        this._Button_73_4 = new import38.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_73), this.renderer);
        this._appEl_73.initComponent(this._Button_73_4, [], compView_73);
        this._text_74 = this.renderer.createText(null, '\n      Update Config\n    ', null);
        compView_73.create(this._Button_73_4, [[].concat([this._text_74])], null);
        this._text_75 = this.renderer.createText(this._el_71, '\n  ', null);
        this._text_76 = this.renderer.createText(null, '\n\n  ', null);
        this._el_77 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_77, 'class', 'note');
        this._text_78 = this.renderer.createText(this._el_77, 'Any config for your app should be passed as the third argument to ionicBootstrap.', null);
        this._text_79 = this.renderer.createText(null, '\n\n  ', null);
        this._text_80 = this.renderer.createText(null, '\n  ', null);
        this._el_81 = this.renderer.createElement(null, 'pre', null);
        this.renderer.setElementAttribute(this._el_81, 'margin', '');
        this._text_82 = this.renderer.createText(null, '\n\n  ', null);
        this._el_83 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_83, 'padding', '');
        this._text_84 = this.renderer.createText(this._el_83, '\n    ', null);
        this._el_85 = this.renderer.createElement(this._el_83, 'button', null);
        this.renderer.setElementAttribute(this._el_85, 'block', '');
        this.renderer.setElementAttribute(this._el_85, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_85, 'ion-button', '');
        this._appEl_85 = new import2.AppElement(85, 83, this, this._el_85);
        var compView_85 = import45.viewFactory_Button0(this.viewUtils, this.injector(85), this._appEl_85);
        this._Button_85_4 = new import38.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_85), this.renderer);
        this._appEl_85.initComponent(this._Button_85_4, [], compView_85);
        this._text_86 = this.renderer.createText(null, '\n      Go to Another Page\n    ', null);
        compView_85.create(this._Button_85_4, [[].concat([this._text_86])], null);
        this._text_87 = this.renderer.createText(this._el_83, '\n  ', null);
        this._text_88 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_67,
                this._el_68,
                this._text_70,
                this._el_71,
                this._text_76,
                this._el_77,
                this._text_79,
                this._text_80,
                this._el_81,
                this._text_82,
                this._el_83,
                this._text_88
            ]),
            []
        ], null);
        this._text_89 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_90 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_18, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_18_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_18, 'click', this.eventHandler(this._handle_click_18_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_18, 'keyup.space', this.eventHandler(this._handle_keyup_space_18_2.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_18_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_18_0.bind(this)));
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_42, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_42_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_42, 'click', this.eventHandler(this._handle_click_42_1.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_42, 'keyup.space', this.eventHandler(this._handle_keyup_space_42_2.bind(this)));
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_42_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_42_0.bind(this)));
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_57, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_57_0.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_57, 'click', this.eventHandler(this._handle_click_57_1.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_57, 'keyup.space', this.eventHandler(this._handle_keyup_space_57_2.bind(this)));
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        var subscription_2 = this._NgModel_57_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_57_0.bind(this)));
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_73, 'click', this.eventHandler(this._handle_click_73_0.bind(this)));
        this._expr_46 = import7.UNINITIALIZED;
        var disposable_10 = this.renderer.listen(this._el_85, 'click', this.eventHandler(this._handle_click_85_0.bind(this)));
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._text_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._el_83,
            this._text_84,
            this._el_85,
            this._text_86,
            this._text_87,
            this._text_88,
            this._text_89,
            this._text_90
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10
        ], [
            subscription_0,
            subscription_1,
            subscription_2
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import27.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import26.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import33.Label) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Label_15_3;
        }
        if (((token === import37.Option) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Option_20_3;
        }
        if (((token === import37.Option) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Option_23_3;
        }
        if (((token === import37.Option) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Option_26_3;
        }
        if (((token === import37.Option) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Option_29_3;
        }
        if (((token === import37.Option) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Option_32_3;
        }
        if (((token === import34.Select) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Select_18_4;
        }
        if (((token === import46.NG_VALUE_ACCESSOR) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NG_VALUE_ACCESSOR_18_5;
        }
        if (((token === import35.NgModel) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgModel_18_6;
        }
        if (((token === import47.NgControl) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgControl_18_7;
        }
        if (((token === import36.NgControlStatus) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgControlStatus_18_8;
        }
        if (((token === import31.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Item_13_4;
        }
        if (((token === import31.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ItemContent_13_5;
        }
        if (((token === import33.Label) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Label_39_3;
        }
        if (((token === import37.Option) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Option_44_3;
        }
        if (((token === import37.Option) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Option_47_3;
        }
        if (((token === import34.Select) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._Select_42_4;
        }
        if (((token === import46.NG_VALUE_ACCESSOR) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NG_VALUE_ACCESSOR_42_5;
        }
        if (((token === import35.NgModel) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgModel_42_6;
        }
        if (((token === import47.NgControl) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgControl_42_7;
        }
        if (((token === import36.NgControlStatus) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgControlStatus_42_8;
        }
        if (((token === import31.Item) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._Item_37_4;
        }
        if (((token === import31.ItemContent) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._ItemContent_37_5;
        }
        if (((token === import33.Label) && ((54 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._Label_54_3;
        }
        if (((token === import37.Option) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 60)))) {
            return this._Option_59_3;
        }
        if (((token === import37.Option) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._Option_62_3;
        }
        if (((token === import34.Select) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._Select_57_4;
        }
        if (((token === import46.NG_VALUE_ACCESSOR) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._NG_VALUE_ACCESSOR_57_5;
        }
        if (((token === import35.NgModel) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._NgModel_57_6;
        }
        if (((token === import47.NgControl) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._NgControl_57_7;
        }
        if (((token === import36.NgControlStatus) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._NgControlStatus_57_8;
        }
        if (((token === import31.Item) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._Item_52_4;
        }
        if (((token === import31.ItemContent) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._ItemContent_52_5;
        }
        if (((token === import30.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._List_11_3;
        }
        if (((token === import38.Button) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 74)))) {
            return this._Button_73_4;
        }
        if (((token === import38.Button) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._Button_85_4;
        }
        if (((token === import29.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_7 = this.context.config.backButtonIcon;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._NgModel_18_6.model = currVal_7;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_7, currVal_7);
            this._expr_7 = currVal_7;
        }
        if ((changes !== null)) {
            this._NgModel_18_6.ngOnChanges(changes);
        }
        var currVal_14 = 'ios-arrow-back';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._Option_20_3.value = currVal_14;
            this._expr_14 = currVal_14;
        }
        var currVal_15 = 'md-arrow-back';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._Option_23_3.value = currVal_15;
            this._expr_15 = currVal_15;
        }
        var currVal_16 = 'close';
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._Option_26_3.value = currVal_16;
            this._expr_16 = currVal_16;
        }
        var currVal_17 = 'heart';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._Option_29_3.value = currVal_17;
            this._expr_17 = currVal_17;
        }
        var currVal_18 = 'globe';
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._Option_32_3.value = currVal_18;
            this._expr_18 = currVal_18;
        }
        changes = null;
        var currVal_23 = this.context.config.iconMode;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this._NgModel_42_6.model = currVal_23;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_23, currVal_23);
            this._expr_23 = currVal_23;
        }
        if ((changes !== null)) {
            this._NgModel_42_6.ngOnChanges(changes);
        }
        var currVal_30 = 'ios';
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this._Option_44_3.value = currVal_30;
            this._expr_30 = currVal_30;
        }
        var currVal_31 = 'md';
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this._Option_47_3.value = currVal_31;
            this._expr_31 = currVal_31;
        }
        changes = null;
        var currVal_36 = this.context.config.tabsPlacement;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this._NgModel_57_6.model = currVal_36;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_36, currVal_36);
            this._expr_36 = currVal_36;
        }
        if ((changes !== null)) {
            this._NgModel_57_6.ngOnChanges(changes);
        }
        var currVal_43 = 'bottom';
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this._Option_59_3.value = currVal_43;
            this._expr_43 = currVal_43;
        }
        var currVal_44 = 'top';
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this._Option_62_3.value = currVal_44;
            this._expr_44 = currVal_44;
        }
        changed = false;
        var currVal_46 = '';
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this._Button_73_4.block = currVal_46;
            changed = true;
            this._expr_46 = currVal_46;
        }
        if (changed) {
            this._appEl_73.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_48 = '';
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this._Button_85_4.block = currVal_48;
            changed = true;
            this._expr_48 = currVal_48;
        }
        var currVal_49 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this._Button_85_4.color = currVal_49;
            changed = true;
            this._expr_49 = currVal_49;
        }
        if (changed) {
            this._appEl_85.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Option_18_0.dirty) {
                this._query_Option_18_0.reset([
                    this._Option_20_3,
                    this._Option_23_3,
                    this._Option_26_3,
                    this._Option_29_3,
                    this._Option_32_3
                ]);
                this._Select_18_4.options = this._query_Option_18_0;
                this._query_Option_18_0.notifyOnChanges();
            }
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([]);
                this._Item_13_4._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Option_42_0.dirty) {
                this._query_Option_42_0.reset([
                    this._Option_44_3,
                    this._Option_47_3
                ]);
                this._Select_42_4.options = this._query_Option_42_0;
                this._query_Option_42_0.notifyOnChanges();
            }
            if (this._query_Button_37_1.dirty) {
                this._query_Button_37_1.reset([]);
                this._Item_37_4._buttons = this._query_Button_37_1;
                this._query_Button_37_1.notifyOnChanges();
            }
            if (this._query_Icon_37_2.dirty) {
                this._query_Icon_37_2.reset([]);
                this._Item_37_4._icons = this._query_Icon_37_2;
                this._query_Icon_37_2.notifyOnChanges();
            }
            if (this._query_Option_57_0.dirty) {
                this._query_Option_57_0.reset([
                    this._Option_59_3,
                    this._Option_62_3
                ]);
                this._Select_57_4.options = this._query_Option_57_0;
                this._query_Option_57_0.notifyOnChanges();
            }
            if (this._query_Button_52_1.dirty) {
                this._query_Button_52_1.reset([]);
                this._Item_52_4._buttons = this._query_Button_52_1;
                this._query_Button_52_1.notifyOnChanges();
            }
            if (this._query_Icon_52_2.dirty) {
                this._query_Icon_52_2.reset([]);
                this._Item_52_4._icons = this._query_Icon_52_2;
                this._query_Icon_52_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_18_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_42_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_37_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_57_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_52_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_73_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_85_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_6 = this._Select_18_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_18, 'select-disabled', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_8 = this._NgControlStatus_18_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_18, 'ng-untouched', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_18_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_18, 'ng-touched', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_18_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_18, 'ng-pristine', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_18_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_18, 'ng-dirty', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatus_18_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_18, 'ng-valid', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_18_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_18, 'ng-invalid', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_22 = this._Select_42_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_42, 'select-disabled', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_24 = this._NgControlStatus_42_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_42, 'ng-untouched', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this._NgControlStatus_42_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_42, 'ng-touched', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_42_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_42, 'ng-pristine', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_42_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_42, 'ng-dirty', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._NgControlStatus_42_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_42, 'ng-valid', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = this._NgControlStatus_42_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_42, 'ng-invalid', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_35 = this._Select_57_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_57, 'select-disabled', currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_37 = this._NgControlStatus_57_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setElementClass(this._el_57, 'ng-untouched', currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_38 = this._NgControlStatus_57_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_57, 'ng-touched', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_39 = this._NgControlStatus_57_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementClass(this._el_57, 'ng-pristine', currVal_39);
            this._expr_39 = currVal_39;
        }
        var currVal_40 = this._NgControlStatus_57_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setElementClass(this._el_57, 'ng-dirty', currVal_40);
            this._expr_40 = currVal_40;
        }
        var currVal_41 = this._NgControlStatus_57_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementClass(this._el_57, 'ng-valid', currVal_41);
            this._expr_41 = currVal_41;
        }
        var currVal_42 = this._NgControlStatus_57_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementClass(this._el_57, 'ng-invalid', currVal_42);
            this._expr_42 = currVal_42;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Select_18_4.ngOnDestroy();
        this._NgModel_18_6.ngOnDestroy();
        this._Select_42_4.ngOnDestroy();
        this._NgModel_42_6.ngOnDestroy();
        this._Select_57_4.ngOnDestroy();
        this._NgModel_57_6.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_18_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.config.backButtonIcon = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_18_1 = function ($event) {
        this._appEl_18.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_18_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_18_2 = function ($event) {
        this._appEl_18.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_18_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_42_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.config.iconMode = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_42_1 = function ($event) {
        this._appEl_42.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_42_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_42_2 = function ($event) {
        this._appEl_42.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_42_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_57_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.config.tabsPlacement = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_57_1 = function ($event) {
        this._appEl_57.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_57_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_57_2 = function ($event) {
        this._appEl_57.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_57_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_73_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.load() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_85_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.push() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/config/page.html', 0, import8.ViewEncapsulation.Emulated, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_PushPage_Host = null;
var _View_PushPage_Host0 = (function (_super) {
    __extends(_View_PushPage_Host0, _super);
    function _View_PushPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PushPage_Host0, renderType_PushPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PushPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PushPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._PushPage_0_4 = new import3.PushPage(this.parentInjector.get(import13.NavController));
        this._appEl_0.initComponent(this._PushPage_0_4, [], compView_0);
        compView_0.create(this._PushPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_PushPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.PushPage) && (0 === requestNodeIndex))) {
            return this._PushPage_0_4;
        }
        return notFoundResult;
    };
    return _View_PushPage_Host0;
}(import1.AppView));
function viewFactory_PushPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PushPage_Host === null)) {
        (renderType_PushPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_PushPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var PushPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_PushPage_Host0, import3.PushPage);
var styles_PushPage = [];
var renderType_PushPage = null;
var _View_PushPage0 = (function (_super) {
    __extends(_View_PushPage0, _super);
    function _View_PushPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PushPage0, renderType_PushPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PushPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import26.Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import14.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import39.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import27.Navbar(this.parentInjector.get(import15.App), this.parentInjector.get(import14.ViewController, null), this.parentInjector.get(import13.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import40.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import28.ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import26.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Page', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import41.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import29.Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import15.App), this.parentInjector.get(import21.Keyboard), this.parentInjector.get(import22.NgZone), this.parentInjector.get(import14.ViewController, null), this.parentInjector.get(import10.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_11, 'padding', '');
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_13, 'block', '');
        this.renderer.setElementAttribute(this._el_13, 'ion-button', '');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import45.viewFactory_Button0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Button_13_4 = new import38.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_13), this.renderer);
        this._appEl_13.initComponent(this._Button_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, 'Go Back to Config', null);
        compView_13.create(this._Button_13_4, [[].concat([this._text_14])], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_16 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_16
            ]),
            []
        ], null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17
        ], [disposable_0], []);
        return null;
    };
    _View_PushPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import27.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import26.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import38.Button) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Button_13_4;
        }
        if (((token === import29.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_PushPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changed = false;
        var currVal_4 = '';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Button_13_4.block = currVal_4;
            changed = true;
            this._expr_4 = currVal_4;
        }
        if (changed) {
            this._appEl_13.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_13_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_PushPage0.prototype.destroyInternal = function () {
        this._Content_9_4.ngOnDestroy();
    };
    _View_PushPage0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.pop() !== false);
        return (true && pd_0);
    };
    return _View_PushPage0;
}(import1.AppView));
export function viewFactory_PushPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PushPage === null)) {
        (renderType_PushPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/config/push-page.html', 0, import8.ViewEncapsulation.None, styles_PushPage, {}));
    }
    return new _View_PushPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import49.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import48.Nav(this.parentInjector.get(import14.ViewController, null), this.parentInjector.get(import50.NavControllerBase, null), this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import21.Keyboard), new import17.ElementRef(this._el_0), this.parentInjector.get(import22.NgZone), this.renderer, this.parentInjector.get(import23.ComponentFactoryResolver), this.parentInjector.get(import24.GestureController), this.parentInjector.get(import25.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import48.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/config/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
