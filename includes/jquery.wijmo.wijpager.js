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
"use strict";(function(a){a.widget("wijmo.wijpager",{options:{firstPageClass:"ui-icon-seek-first",firstPageText:"First",lastPageClass:"ui-icon-seek-end",lastPageText:"Last",mode:"numeric",nextPageClass:"ui-icon-seek-next",nextPageText:"Next",pageButtonCount:10,previousPageClass:"ui-icon-seek-prev",previousPageText:"Previous",pageCount:1,pageIndex:0,pageindexchanging:null,pageindexchanged:null},_create:function(){this.element.addClass("ui-widget wijmo-wijpager ui-helper-clearfix");this.options.disabled&&this.disable();this._refresh()},_init:function(){__wijReadOptionEvents(["pageindexchanging","pageindexchanged"],this)},destroy:function(){this.element.removeClass("ui-widget wijmo-wijpager ui-helper-clearfix");this.$ul.remove();a.Widget.prototype.destroy.apply(this,arguments)},_setOption:function(){a.Widget.prototype._setOption.apply(this,arguments);this._refresh()},_refresh:function(){this._validate();this.$ul&&this.$ul.remove();this.element.append(this.$ul=a('<ul class="ui-list ui-corner-all ui-widget-content ui-helper-clearfix" role="tablist"></ul>'));switch(this.options.mode){case"nextPrevious":this._createNextPrev(false);break;case"nextPreviousFirstLast":this._createNextPrev(true);break;case"numeric":this._createNumeric(false);break;case"numericFirstLast":this._createNumeric(true)}},_validate:function(){if(isNaN(this.options.pageCount)||this.options.pageCount<1)this.options.pageCount=1;if(isNaN(this.options.pageIndex)||this.options.pageIndex<0)this.options.pageIndex=0;else if(this.options.pageIndex>=this.options.pageCount)this.options.pageIndex=this.options.pageCount-1;if(isNaN(this.options.pageButtonCount)||this.options.pageButtonCount<1)this.options.pageButtonCount=1},_createNextPrev:function(a){a&&this.options.pageIndex&&this.$ul.append(this._createPagerItem(false,this.options.firstPageText).append(this._createPagerControl(1,this.options.firstPageText,this.options.firstPageClass)));this.options.pageIndex&&this.$ul.append(this._createPagerItem(false,this.options.previousPageText).append(this._createPagerControl(this.options.pageIndex,this.options.previousPageText,this.options.previousPageClass)));this.options.pageIndex+1<this.options.pageCount&&this.$ul.append(this._createPagerItem(false,this.options.nextPageText).append(this._createPagerControl(this.options.pageIndex+2,this.options.nextPageText,this.options.nextPageClass)));a&&this.options.pageIndex+1<this.options.pageCount&&this.$ul.append(this._createPagerItem(false,this.options.lastPageText).append(this._createPagerControl(this.options.pageCount,this.options.lastPageText,this.options.lastPageClass)))},_createNumeric:function(e){var d=this.options.pageIndex+1,c=1,a=Math.min(this.options.pageCount,this.options.pageButtonCount),b;if(d>a){c=Math.floor(this.options.pageIndex/this.options.pageButtonCount)*this.options.pageButtonCount+1;a=c+this.options.pageButtonCount-1;a=Math.min(a,this.options.pageCount);if(a-c+1<this.options.pageButtonCount)c=Math.max(1,a-this.options.pageButtonCount+1)}if(c!==1){e&&this.$ul.append(this._createPagerItem(false,this.options.firstPageText).append(this._createPagerControl(1,this.options.firstPageText,this.options.firstPageClass)));this.$ul.append(this._createPagerItem(false,"...").append(this._createPagerControl(c-1,"...","")))}for(b=c;b<=a;b++)this.$ul.append(this._createPagerItem(b===d,b.toString()).append(this._createPagerControl(b,b.toString(),"",b===d)));if(this.options.pageCount>a){this.$ul.append(this._createPagerItem(false,"...").append(this._createPagerControl(a+1,"...","")));e&&this.$ul.append(this._createPagerItem(false,this.options.lastPageText).append(this._createPagerControl(this.options.pageCount,this.options.lastPageText,this.options.lastPageClass)))}},_createPagerItem:function(d,c){var b=a("<li />").addClass("ui-page ui-corner-all").attr({role:"tab","aria-label":c,title:c});if(d)b.addClass("ui-state-active").attr("aria-selected","true");else b.addClass("ui-state-default").hover(function(){a(this).removeClass("ui-state-default").addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover").addClass("ui-state-default")});return b},_createPagerControl:function(f,e,c,d){var b=null;if(d)b=a("<span />");else if(c)b=a("<span />").addClass("ui-icon "+c);else b=a("<a/>").attr("href","#");b.attr("title",e).text(e);!d&&b.bind("click."+this.widgetName,{newPageIndex:f-1},a.proxy(this._onClick,this));return b},_onClick:function(b){if(this.options.disabled)return false;var a={newPageIndex:b.data.newPageIndex,handled:false};if(this._trigger("pageindexchanging",null,a))if(this.options.pageIndex!==a.newPageIndex){this.options.pageIndex=a.newPageIndex;!a.handled&&this._refresh();this._trigger("pageindexchanged",null,{newPageIndex:a.newPageIndex})}return false}})})(jQuery);