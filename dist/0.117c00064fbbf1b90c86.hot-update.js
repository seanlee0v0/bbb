webpackHotUpdate(0,{

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__("./node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

/***/ }),

/***/ "./src/actions/LoginAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginFailed = exports.loginSucceed = undefined;

var _isomorphicFetch = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var loginSucceed = exports.loginSucceed = function loginSucceed() {
  return {
    type: 'LOGIN_SUCCEED',
    isLoginSucceed: true
  };
};

var loginFailed = exports.loginFailed = function loginFailed(errMsg) {
  return {
    type: 'LOGIN_FAILED',
    errMsg: errMsg,
    isLoginSucceed: false
  };
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanM/NzcyMyIsIndlYnBhY2s6Ly8vLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qcz8xYzIwIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0xvZ2luQWN0aW9uLmpzPzg1NjQiXSwibmFtZXMiOlsicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxmIiwiZmV0Y2giLCJiaW5kIiwic3VwcG9ydCIsInNlYXJjaFBhcmFtcyIsIml0ZXJhYmxlIiwiU3ltYm9sIiwiYmxvYiIsIkJsb2IiLCJlIiwiZm9ybURhdGEiLCJhcnJheUJ1ZmZlciIsInZpZXdDbGFzc2VzIiwiaXNEYXRhVmlldyIsIm9iaiIsIkRhdGFWaWV3IiwicHJvdG90eXBlIiwiaXNQcm90b3R5cGVPZiIsImlzQXJyYXlCdWZmZXJWaWV3IiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJpbmRleE9mIiwiT2JqZWN0IiwidG9TdHJpbmciLCJjYWxsIiwibm9ybWFsaXplTmFtZSIsIm5hbWUiLCJTdHJpbmciLCJ0ZXN0IiwiVHlwZUVycm9yIiwidG9Mb3dlckNhc2UiLCJub3JtYWxpemVWYWx1ZSIsInZhbHVlIiwiaXRlcmF0b3JGb3IiLCJpdGVtcyIsIml0ZXJhdG9yIiwibmV4dCIsInNoaWZ0IiwiZG9uZSIsInVuZGVmaW5lZCIsIkhlYWRlcnMiLCJoZWFkZXJzIiwibWFwIiwiZm9yRWFjaCIsImFwcGVuZCIsIkFycmF5IiwiaXNBcnJheSIsImhlYWRlciIsImdldE93blByb3BlcnR5TmFtZXMiLCJvbGRWYWx1ZSIsImdldCIsImhhcyIsImhhc093blByb3BlcnR5Iiwic2V0IiwiY2FsbGJhY2siLCJ0aGlzQXJnIiwia2V5cyIsInB1c2giLCJ2YWx1ZXMiLCJlbnRyaWVzIiwiY29uc3VtZWQiLCJib2R5IiwiYm9keVVzZWQiLCJQcm9taXNlIiwicmVqZWN0IiwiZmlsZVJlYWRlclJlYWR5IiwicmVhZGVyIiwicmVzb2x2ZSIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsInJlYWRCbG9iQXNBcnJheUJ1ZmZlciIsIkZpbGVSZWFkZXIiLCJwcm9taXNlIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJyZWFkQmxvYkFzVGV4dCIsInJlYWRBc1RleHQiLCJyZWFkQXJyYXlCdWZmZXJBc1RleHQiLCJidWYiLCJ2aWV3IiwiVWludDhBcnJheSIsImNoYXJzIiwibGVuZ3RoIiwiaSIsImZyb21DaGFyQ29kZSIsImpvaW4iLCJidWZmZXJDbG9uZSIsInNsaWNlIiwiYnl0ZUxlbmd0aCIsImJ1ZmZlciIsIkJvZHkiLCJfaW5pdEJvZHkiLCJfYm9keUluaXQiLCJfYm9keVRleHQiLCJfYm9keUJsb2IiLCJGb3JtRGF0YSIsIl9ib2R5Rm9ybURhdGEiLCJVUkxTZWFyY2hQYXJhbXMiLCJfYm9keUFycmF5QnVmZmVyIiwiRXJyb3IiLCJ0eXBlIiwicmVqZWN0ZWQiLCJ0aGVuIiwidGV4dCIsImRlY29kZSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJtZXRob2RzIiwibm9ybWFsaXplTWV0aG9kIiwibWV0aG9kIiwidXBjYXNlZCIsInRvVXBwZXJDYXNlIiwiUmVxdWVzdCIsImlucHV0Iiwib3B0aW9ucyIsInVybCIsImNyZWRlbnRpYWxzIiwibW9kZSIsInJlZmVycmVyIiwiY2xvbmUiLCJmb3JtIiwidHJpbSIsInNwbGl0IiwiYnl0ZXMiLCJyZXBsYWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VIZWFkZXJzIiwicmF3SGVhZGVycyIsImxpbmUiLCJwYXJ0cyIsImtleSIsIlJlc3BvbnNlIiwiYm9keUluaXQiLCJzdGF0dXMiLCJvayIsInN0YXR1c1RleHQiLCJyZXNwb25zZSIsInJlZGlyZWN0U3RhdHVzZXMiLCJyZWRpcmVjdCIsIlJhbmdlRXJyb3IiLCJsb2NhdGlvbiIsImluaXQiLCJyZXF1ZXN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXNwb25zZVVSTCIsInJlc3BvbnNlVGV4dCIsIm9udGltZW91dCIsIm9wZW4iLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInBvbHlmaWxsIiwibG9naW5TdWNjZWVkIiwiaXNMb2dpblN1Y2NlZWQiLCJsb2dpbkZhaWxlZCIsImVyck1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFBQSxDQUFRLHNDQUFSO0FBQ0FDLE9BQU9DLE9BQVAsR0FBaUJDLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkYsSUFBaEIsQ0FBakIsQzs7Ozs7Ozs7OztBQ0xBLENBQUMsVUFBU0EsSUFBVCxFQUFlO0FBQ2Q7O0FBRUEsTUFBSUEsS0FBS0MsS0FBVCxFQUFnQjtBQUNkO0FBQ0Q7O0FBRUQsTUFBSUUsVUFBVTtBQUNaQyxrQkFBYyxxQkFBcUJKLElBRHZCO0FBRVpLLGNBQVUsWUFBWUwsSUFBWixJQUFvQixjQUFjTSxNQUZoQztBQUdaQyxVQUFNLGdCQUFnQlAsSUFBaEIsSUFBd0IsVUFBVUEsSUFBbEMsSUFBMkMsWUFBVztBQUMxRCxVQUFJO0FBQ0YsWUFBSVEsSUFBSjtBQUNBLGVBQU8sSUFBUDtBQUNELE9BSEQsQ0FHRSxPQUFNQyxDQUFOLEVBQVM7QUFDVCxlQUFPLEtBQVA7QUFDRDtBQUNGLEtBUCtDLEVBSHBDO0FBV1pDLGNBQVUsY0FBY1YsSUFYWjtBQVlaVyxpQkFBYSxpQkFBaUJYO0FBWmxCLEdBQWQ7O0FBZUEsTUFBSUcsUUFBUVEsV0FBWixFQUF5QjtBQUN2QixRQUFJQyxjQUFjLENBQ2hCLG9CQURnQixFQUVoQixxQkFGZ0IsRUFHaEIsNEJBSGdCLEVBSWhCLHFCQUpnQixFQUtoQixzQkFMZ0IsRUFNaEIscUJBTmdCLEVBT2hCLHNCQVBnQixFQVFoQix1QkFSZ0IsRUFTaEIsdUJBVGdCLENBQWxCOztBQVlBLFFBQUlDLGFBQWEsU0FBYkEsVUFBYSxDQUFTQyxHQUFULEVBQWM7QUFDN0Is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QXNCLElBQXRCO0FBQ0QsQ0E1Y0QsRUE0Y0csT0FBTzVKLElBQVAsS0FBZ0IsV0FBaEIsR0FBOEJBLElBQTlCLFlBNWNILEU7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNPLElBQU02SixzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FDMUI7QUFDRXhELFVBQU0sZUFEUjtBQUVFeUQsb0JBQWdCO0FBRmxCLEdBRDBCO0FBQUEsQ0FBckI7O0FBT0EsSUFBTUMsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxNQUFEO0FBQUEsU0FDekI7QUFDRTNELFVBQU0sY0FEUjtBQUVFMkQsWUFBUUEsTUFGVjtBQUdFRixvQkFBZ0I7QUFIbEIsR0FEeUI7QUFBQSxDQUFwQixDIiwiZmlsZSI6IjAuMTE3YzAwMDY0ZmJiZjFiOTBjODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZSB3aGF0d2ctZmV0Y2ggcG9seWZpbGwgaW5zdGFsbHMgdGhlIGZldGNoKCkgZnVuY3Rpb25cbi8vIG9uIHRoZSBnbG9iYWwgb2JqZWN0ICh3aW5kb3cgb3Igc2VsZilcbi8vXG4vLyBSZXR1cm4gdGhhdCBhcyB0aGUgZXhwb3J0IGZvciB1c2UgaW4gV2VicGFjaywgQnJvd3NlcmlmeSBldGMuXG5yZXF1aXJlKCd3aGF0d2ctZmV0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gc2VsZi5mZXRjaC5iaW5kKHNlbGYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwiaW1wb3J0IHtmZXRjaH0gZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2NlZWQgPSAoKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fU1VDQ0VFRCcsXG4gICAgaXNMb2dpblN1Y2NlZWQ6IHRydWVcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgbG9naW5GYWlsZWQgPSAoZXJyTXNnKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fRkFJTEVEJyxcbiAgICBlcnJNc2c6IGVyck1zZyxcbiAgICBpc0xvZ2luU3VjY2VlZDogZmFsc2VcbiAgfVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvTG9naW5BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9