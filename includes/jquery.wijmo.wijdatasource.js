/*
 *
 * Wijmo Library 1.0.0
 * http://wijmo.com/
 *
 * Copyright(c) ComponentOne, LLC.  All rights reserved.
 * 
 * Dual licensed under the Wijmo Commercial or GNU GPL Version 3 licenses.
 * licensing@wijmo.com
 * http://wijmo.com/license
 *
 *
 **/
"use strict";(function(a){var c,b,d;c=function(b){var a=this;a.data={};a.reader=null;a.proxy=null;a.items=[];a.loading=null;a.loaded=null;a._constructor(b)};window.wijdatasource=c;a.extend(c.prototype,{_constructor:function(b){a.extend(this,b)},load:function(c,e){var b=this,d=b.proxy;a.isFunction(b.loading)&&b.loading(b,c);if(d)d.request(b,b.loaded,c);else{(b.items.length===0||e)&&this.read();a.isFunction(b.loaded)&&b.loaded(b,c)}},read:function(){var a=this,b=a.data;if(b&&a.reader)a.reader.read(a);else{a.items=a.data;return a.data}}});b=function(b){if(a.isArray(b))this.fields=b};window.wijarrayreader=b;a.extend(b.prototype,{read:function(b){if(a.isArray(b.data))b.items=this._map(b.data);else b.items=[]},_map:function(d){var c=this,b=[];if(c.fields===undefined||c.fields.length===0){a.extend(true,b,d);return b}else a.each(d,function(f,d){var e={};a.each(c.fields,function(g,b){if(a.isFunction(b.mapping)){e[b.name]=b.mapping(d);return true}var f=b.mapping!==undefined?b.mapping:b.name,c=d[f];if(c===undefined)if(b.defaultValue!==undefined)c=b.defaultValue;else c=d;e[b.name]=c});b.push(e)});return b}});d=function(a){this.options=a};window.wijhttpproxy=d;a.extend(d.prototype,{request:function(d,e,f){var g=this,b=a.extend({},this.options),c=b.success;b.success=function(h){a.isFunction(c)&&c(h);g._complete(h,d,e,b,f)};a.ajax(b)},_complete:function(e,b,c,d,f){b.data=d.key!==undefined?e[d.key]:e;b.read();a.isFunction(c)&&c(b,f)}})})(jQuery);