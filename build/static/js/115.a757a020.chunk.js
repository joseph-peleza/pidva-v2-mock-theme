(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1690:function(e,t,n){e.exports=n.p+"static/media/marker.a30f29ac.png"},1982:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1371),c=n(31),i=n(33),o=n(34),s=n(55),u=n(35),m=n(36),h=n(20),f=n(1407);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var p=window.google,k=Object(f.withGoogleMap)(function(e){return r.a.createElement(f.GoogleMap,{defaultZoom:15,center:e.center},e.markers.map(function(t,a){return r.a.createElement(f.Marker,{defaultIcon:n(1690),key:a,position:t.position,onClick:function(){return e.onMarkerClick(t)}},t.showInfo&&r.a.createElement(f.InfoWindow,{onCloseClick:function(){return e.onMarkerClose(t)}},r.a.createElement("div",null,t.infoContent)))}))}),v=function(e){Object(u.a)(n,e);var t=d(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={center:{lat:47.646935,lng:-122.303763},markers:[{position:new p.maps.LatLng(47.646145,-122.303763),showInfo:!1,infoContent:r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,r.a.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0\r .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5\r 3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11\r 5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0\r 1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"}))),r.a.createElement("div",{className:"ml-1"},r.a.createElement("p",null,"UW Medical Center"),r.a.createElement("p",null,"1959 NE Pacific St"),r.a.createElement("p",null,"Seattle, WA 98195")))},{position:new p.maps.LatLng(47.647935,-122.303763),showInfo:!1,infoContent:r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,r.a.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672\r 13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5\r 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16\r 8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368\r 2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z"}))),r.a.createElement("div",{className:"ml-1"},r.a.createElement("p",null,"University of Washington Intramural Activities (IMA) Building"),r.a.createElement("p",null,"3924 Montlake Blvd NE"),r.a.createElement("p",null,"Seattle, WA 98195")))}]},e.handleMarkerClick=e.handleMarkerClick.bind(Object(s.a)(e)),e.handleMarkerClose=e.handleMarkerClose.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"handleMarkerClick",value:function(e){this.setState({markers:this.state.markers.map(function(t){return t===e?Object(c.a)({},t,{showInfo:!0}):t})})}},{key:"handleMarkerClose",value:function(e){this.setState({markers:this.state.markers.map(function(t){return t===e?Object(c.a)({},t,{showInfo:!1}):t})})}},{key:"render",value:function(){return r.a.createElement(k,{loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"550px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),center:this.state.center,markers:this.state.markers,onMarkerClick:this.handleMarkerClick,onMarkerClose:this.handleMarkerClose})}}]),n}(a.Component),E=n(2);t.default=function(){return r.a.createElement(l.a,{className:"gx-card",title:r.a.createElement(E.a,{id:"sidebar.map.popupInfo"})},r.a.createElement(v,null))}}}]);
//# sourceMappingURL=115.a757a020.chunk.js.map