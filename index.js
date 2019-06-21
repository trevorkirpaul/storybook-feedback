'use strict';function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var React=_interopDefault(require('react')),addons=_interopDefault(require('@storybook/addons')),styled=_interopDefault(require('styled-components'));/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}var Input = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;var Input$1 = function (_a) {
  var name = _a.name,
      value = _a.value,
      onChange = _a.onChange,
      type = _a.type;
  return React.createElement(Input, {
    name: name,
    type: type,
    value: value,
    onChange: onChange
  });
};

Input$1.defaultProps = {
  type: 'text'
};var Button = styled.button(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([""], [""])));
var templateObject_1$1;var Button$1 = function (_a) {
  var children = _a.children,
      onClick = _a.onClick;
  return React.createElement(Button, {
    onClick: onClick
  }, children);
};var Feedback =
/** @class */
function (_super) {
  __extends(Feedback, _super);

  function Feedback() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      value: 'Trevor',
      name: ''
    };

    _this.handleOnChange = function (e) {
      var _a = e.target,
          name = _a.name,
          value = _a.value;

      _this.setState(function (prevState) {
        var _a;

        return __assign({}, prevState, (_a = {}, _a[name] = value, _a));
      });
    };

    return _this;
  }

  Feedback.prototype.render = function () {
    var _this = this;

    var active = this.props.active;
    var name = this.state.name;

    if (!active) {
      return null;
    }

    if (active) {
      return React.createElement(React.Fragment, null, React.createElement(Input$1, {
        name: "name",
        value: name,
        onChange: this.handleOnChange
      }), React.createElement(Button$1, {
        onClick: function () {
          return console.log(_this.state);
        }
      }, "Submit"));
    }
  };

  return Feedback;
}(React.Component);

addons.register('Feedback', function (api) {
  // Also need to set a unique name to the panel.
  addons.addPanel('Feedback/panel', {
    title: 'Feedback',
    render: function (_a) {
      var active = _a.active,
          key = _a.key;
      return React.createElement(Feedback, {
        key: key,
        api: api,
        active: active
      });
    }
  });
});module.exports=Feedback;