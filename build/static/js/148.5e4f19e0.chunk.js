(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1975:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1371),o=n(33),c=n(34),s=n(35),l=n(36),u=n(20),d=n(1407);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var i=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=window.google,p=Object(d.withGoogleMap)(function(e){return i.a.createElement(d.GoogleMap,{defaultZoom:7,defaultCenter:e.center},e.directions&&i.a.createElement(d.DirectionsRenderer,{directions:e.directions}))}),h=function(e){Object(s.a)(n,e);var t=f(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={origin:new m.maps.LatLng(41.85073,-87.65126),destination:new m.maps.LatLng(41.85258,-87.65141),directions:null},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;(new m.maps.DirectionsService).route({origin:this.state.origin,destination:this.state.destination,travelMode:m.maps.TravelMode.DRIVING},function(t,n){n===m.maps.DirectionsStatus.OK?e.setState({directions:t}):console.error("error fetching directions ".concat(t))})}},{key:"render",value:function(){return i.a.createElement(p,{loadingElement:i.a.createElement("div",{style:{height:"100%"}}),containerElement:i.a.createElement("div",{style:{height:"550px"}}),mapElement:i.a.createElement("div",{style:{height:"100%"}}),center:this.state.origin,directions:this.state.directions})}}]),n}(r.Component),v=n(2);t.default=function(){return i.a.createElement(a.a,{className:"gx-card",title:i.a.createElement(v.a,{id:"sidebar.map.mapDirection"})},i.a.createElement(h,null))}}}]);
//# sourceMappingURL=148.5e4f19e0.chunk.js.map