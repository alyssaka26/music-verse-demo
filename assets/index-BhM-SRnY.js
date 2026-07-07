(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ya="178",tl=0,Qa=1,nl=2,cc=1,il=2,rn=3,En=0,At=1,Yt=2,xn=0,di=1,gi=2,eo=3,to=4,rl=5,Un=100,sl=101,al=102,ol=103,cl=104,ll=200,ul=201,hl=202,fl=203,Is=204,Ns=205,dl=206,pl=207,ml=208,gl=209,_l=210,vl=211,xl=212,Ml=213,Sl=214,Fs=0,Os=1,Bs=2,_i=3,zs=4,Hs=5,Vs=6,Gs=7,lc=0,El=1,yl=2,Mn=0,Tl=1,bl=2,Al=3,uc=4,wl=5,Rl=6,Cl=7,hc=300,vi=301,xi=302,ks=303,Ws=304,Wr=306,Fr=1e3,On=1001,Xs=1002,Wt=1003,Pl=1004,er=1005,Kt=1006,$r=1007,Bn=1008,ln=1009,fc=1010,dc=1011,Hi=1012,Ta=1013,Hn=1014,sn=1015,Yi=1016,ba=1017,Aa=1018,Vi=1020,pc=35902,mc=1021,gc=1022,kt=1023,Gi=1026,ki=1027,_c=1028,wa=1029,vc=1030,Ra=1031,Ca=1033,Ar=33776,wr=33777,Rr=33778,Cr=33779,qs=35840,Ys=35841,Ks=35842,Zs=35843,$s=36196,js=37492,Js=37496,Qs=37808,ea=37809,ta=37810,na=37811,ia=37812,ra=37813,sa=37814,aa=37815,oa=37816,ca=37817,la=37818,ua=37819,ha=37820,fa=37821,Pr=36492,da=36494,pa=36495,xc=36283,ma=36284,ga=36285,_a=36286,Dl=3200,Ll=3201,Ul=0,Il=1,vn="",Tt="srgb",Mi="srgb-linear",Or="linear",$e="srgb",Xn=7680,no=519,Nl=512,Fl=513,Ol=514,Mc=515,Bl=516,zl=517,Hl=518,Vl=519,va=35044,io="300 es",an=2e3,Br=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ro=1234567;const Oi=Math.PI/180,Wi=180/Math.PI;function on(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function Pa(i,e){return(i%e+e)%e}function Gl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function kl(i,e,t){return i!==e?(t-i)/(e-i):0}function Bi(i,e,t){return(1-t)*i+t*e}function Wl(i,e,t,n){return Bi(i,e,1-Math.exp(-t*n))}function Xl(i,e=1){return e-Math.abs(Pa(i,e*2)-e)}function ql(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Kl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zl(i,e){return i+Math.random()*(e-i)}function $l(i){return i*(.5-Math.random())}function jl(i){i!==void 0&&(ro=i);let e=ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jl(i){return i*Oi}function Ql(i){return i*Wi}function eu(i){return(i&i-1)===0&&i!==0}function tu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function iu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:Oi,RAD2DEG:Wi,generateUUID:on,clamp:ze,euclideanModulo:Pa,mapLinear:Gl,inverseLerp:kl,lerp:Bi,damp:Wl,pingpong:Xl,smoothstep:ql,smootherstep:Yl,randInt:Kl,randFloat:Zl,randFloatSpread:$l,seededRandom:jl,degToRad:Jl,radToDeg:Ql,isPowerOfTwo:eu,ceilPowerOfTwo:tu,floorPowerOfTwo:nu,setQuaternionFromProperEuler:iu,normalize:Ke,denormalize:Gt};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ki{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=M;return}if(f!==M||c!==d||l!==m||u!==_){let p=1-o;const h=c*d+l*m+u*_+f*M,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const U=Math.sqrt(T),P=Math.atan2(U,h*A);p=Math.sin(p*P)/U,o=Math.sin(o*P)/U}const E=o*A;if(c=c*p+d*E,l=l*p+m*E,u=u*p+_*E,f=f*p+M*E,p===1-o){const U=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=U,l*=U,u*=U,f*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+c*m-l*d,e[t+1]=c*_+u*d+l*f-o*m,e[t+2]=l*_+u*m+o*d-c*f,e[t+3]=u*_-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f+d*m*_;break;case"YZX":this._x=d*u*f+l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f-d*m*_;break;case"XZY":this._x=d*u*f-l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new N,so=new Ki;class Le{constructor(e,t,n,r,s,a,o,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],_=n[8],M=r[0],p=r[3],h=r[6],A=r[1],T=r[4],E=r[7],U=r[2],P=r[5],R=r[8];return s[0]=a*M+o*A+c*U,s[3]=a*p+o*T+c*P,s[6]=a*h+o*E+c*R,s[1]=l*M+u*A+f*U,s[4]=l*p+u*T+f*P,s[7]=l*h+u*E+f*R,s[2]=d*M+m*A+_*U,s[5]=d*p+m*T+_*P,s[8]=d*h+m*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,m=l*s-a*c,_=t*f+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*l-u*n)*M,e[2]=(o*n-r*a)*M,e[3]=d*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Le;function Sc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){const i=Xi("canvas");return i.style.display="block",i}const ao={};function pi(i){i in ao||(ao[i]=!0,console.warn(i))}function su(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function au(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ou(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const oo=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cu(){const i={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$e&&(r.r=cn(r.r),r.g=cn(r.g),r.b=cn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vn?Or:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mi]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:oo,fromXYZ:co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:oo,fromXYZ:co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}const Ge=cu();function cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qn;class lu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qn===void 0&&(qn=Xi("canvas")),qn.width=e.width,qn.height=e.height;const r=qn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cn(t[n]/255)*255):t[n]=cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uu=0;class Da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qr(r[a].image)):s.push(Qr(r[a]))}else s=Qr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hu=0;const es=new N;class _t extends Ei{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=On,r=On,s=Kt,a=Bn,o=kt,c=ln,l=_t.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=on(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(es).x}get height(){return this.source.getSize(es).y}get depth(){return this.source.getSize(es).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=hc;_t.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],_=c[9],M=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,E=(m+1)/2,U=(h+1)/2,P=(u+d)/4,R=(f+M)/4,I=(_+p)/4;return T>E&&T>U?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=P/n,s=R/n):E>U?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=I/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=R/s,r=I/s),this.set(n,r,s,t),this}let A=Math.sqrt((p-_)*(p-_)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(f-M)/A,this.z=(d-u)/A,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new _t(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Da(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ec extends _t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class du extends _t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),nr.subVectors(this.max,Ri),Yn.subVectors(e.a,Ri),Kn.subVectors(e.b,Ri),Zn.subVectors(e.c,Ri),fn.subVectors(Kn,Yn),dn.subVectors(Zn,Kn),bn.subVectors(Yn,Zn);let t=[0,-fn.z,fn.y,0,-dn.z,dn.y,0,-bn.z,bn.y,fn.z,0,-fn.x,dn.z,0,-dn.x,bn.z,0,-bn.x,-fn.y,fn.x,0,-dn.y,dn.x,0,-bn.y,bn.x,0];return!ts(t,Yn,Kn,Zn,nr)||(t=[1,0,0,0,1,0,0,0,1],!ts(t,Yn,Kn,Zn,nr))?!1:(ir.crossVectors(fn,dn),t=[ir.x,ir.y,ir.z],ts(t,Yn,Kn,Zn,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jt=[new N,new N,new N,new N,new N,new N,new N,new N],zt=new N,tr=new Zi,Yn=new N,Kn=new N,Zn=new N,fn=new N,dn=new N,bn=new N,Ri=new N,nr=new N,ir=new N,An=new N;function ts(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){An.fromArray(i,s);const o=r.x*Math.abs(An.x)+r.y*Math.abs(An.y)+r.z*Math.abs(An.z),c=e.dot(An),l=t.dot(An),u=n.dot(An);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const pu=new Zi,Ci=new N,ns=new N;class Xr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ci,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(ns)),this.expandByPoint(Ci.copy(e.center).sub(ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qt=new N,is=new N,rr=new N,pn=new N,rs=new N,sr=new N,ss=new N;class La{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.origin).addScaledVector(this.direction,t),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){is.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(is);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=pn.dot(this.direction),c=-pn.dot(rr),l=pn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*c-o,d=a*o-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const M=1/u;f*=M,d*=M,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(is).addScaledVector(rr,d),m}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const n=Qt.dot(this.direction),r=Qt.dot(Qt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,n,r,s){rs.subVectors(t,e),sr.subVectors(n,e),ss.crossVectors(rs,sr);let a=this.direction.dot(ss),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,e);const c=o*this.direction.dot(sr.crossVectors(pn,sr));if(c<0)return null;const l=o*this.direction.dot(rs.cross(pn));if(l<0||c+l>a)return null;const u=-o*pn.dot(ss);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,s,a,o,c,l,u,f,d,m,_,M,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,d,m,_,M,p)}set(e,t,n,r,s,a,o,c,l,u,f,d,m,_,M,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,_=o*u,M=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,_=l*u,M=l*f;t[0]=d+M*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=M+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,_=l*u,M=l*f;t[0]=d-M*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*f,_=o*u,M=o*f;t[0]=c*u,t[4]=_*l-m,t[8]=d*l+M,t[1]=c*f,t[5]=M*l+d,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,_=o*c,M=o*l;t[0]=c*u,t[4]=M-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+_,t[10]=d-M*f}else if(e.order==="XZY"){const d=a*c,m=a*l,_=o*c,M=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+M,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mu,e,gu)}lookAt(e,t,n){const r=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),mn.crossVectors(n,Ct),mn.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),mn.crossVectors(n,Ct)),mn.normalize(),ar.crossVectors(Ct,mn),r[0]=mn.x,r[4]=ar.x,r[8]=Ct.x,r[1]=mn.y,r[5]=ar.y,r[9]=Ct.y,r[2]=mn.z,r[6]=ar.z,r[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],_=n[2],M=n[6],p=n[10],h=n[14],A=n[3],T=n[7],E=n[11],U=n[15],P=r[0],R=r[4],I=r[8],S=r[12],x=r[1],C=r[5],k=r[9],z=r[13],K=r[2],Z=r[6],X=r[10],j=r[14],H=r[3],oe=r[7],he=r[11],Se=r[15];return s[0]=a*P+o*x+c*K+l*H,s[4]=a*R+o*C+c*Z+l*oe,s[8]=a*I+o*k+c*X+l*he,s[12]=a*S+o*z+c*j+l*Se,s[1]=u*P+f*x+d*K+m*H,s[5]=u*R+f*C+d*Z+m*oe,s[9]=u*I+f*k+d*X+m*he,s[13]=u*S+f*z+d*j+m*Se,s[2]=_*P+M*x+p*K+h*H,s[6]=_*R+M*C+p*Z+h*oe,s[10]=_*I+M*k+p*X+h*he,s[14]=_*S+M*z+p*j+h*Se,s[3]=A*P+T*x+E*K+U*H,s[7]=A*R+T*C+E*Z+U*oe,s[11]=A*I+T*k+E*X+U*he,s[15]=A*S+T*z+E*j+U*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],M=e[7],p=e[11],h=e[15];return _*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*m-n*c*m)+M*(+t*c*m-t*l*d+s*a*d-r*a*m+r*l*u-s*c*u)+p*(+t*l*f-t*o*m-s*a*f+n*a*m+s*o*u-n*l*u)+h*(-r*o*u-t*c*f+t*o*d+r*a*f-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],M=e[13],p=e[14],h=e[15],A=f*p*l-M*d*l+M*c*m-o*p*m-f*c*h+o*d*h,T=_*d*l-u*p*l-_*c*m+a*p*m+u*c*h-a*d*h,E=u*M*l-_*f*l+_*o*m-a*M*m-u*o*h+a*f*h,U=_*f*c-u*M*c-_*o*d+a*M*d+u*o*p-a*f*p,P=t*A+n*T+r*E+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(M*d*s-f*p*s-M*r*m+n*p*m+f*r*h-n*d*h)*R,e[2]=(o*p*s-M*c*s+M*r*l-n*p*l-o*r*h+n*c*h)*R,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*m-n*c*m)*R,e[4]=T*R,e[5]=(u*p*s-_*d*s+_*r*m-t*p*m-u*r*h+t*d*h)*R,e[6]=(_*c*s-a*p*s-_*r*l+t*p*l+a*r*h-t*c*h)*R,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*m+t*c*m)*R,e[8]=E*R,e[9]=(_*f*s-u*M*s-_*n*m+t*M*m+u*n*h-t*f*h)*R,e[10]=(a*M*s-_*o*s+_*n*l-t*M*l-a*n*h+t*o*h)*R,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*m-t*o*m)*R,e[12]=U*R,e[13]=(u*M*r-_*f*r+_*n*d-t*M*d-u*n*p+t*f*p)*R,e[14]=(_*o*r-a*M*r-_*n*c+t*M*c+a*n*p-t*o*p)*R,e[15]=(a*f*r-u*o*r+u*n*c-t*f*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,m=s*u,_=s*f,M=a*u,p=a*f,h=o*f,A=c*l,T=c*u,E=c*f,U=n.x,P=n.y,R=n.z;return r[0]=(1-(M+h))*U,r[1]=(m+E)*U,r[2]=(_-T)*U,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(d+h))*P,r[6]=(p+A)*P,r[7]=0,r[8]=(_+T)*R,r[9]=(p-A)*R,r[10]=(1-(d+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$n.set(r[0],r[1],r[2]).length();const a=$n.set(r[4],r[5],r[6]).length(),o=$n.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const l=1/s,u=1/a,f=1/o;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=an){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,_;if(o===an)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Br)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=an){const c=this.elements,l=1/(t-e),u=1/(n-r),f=1/(a-s),d=(t+e)*l,m=(n+r)*u;let _,M;if(o===an)_=(a+s)*f,M=-2*f;else if(o===Br)_=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new N,Ht=new at,mu=new N(0,0,0),gu=new N(1,1,1),mn=new N,ar=new N,Ct=new N,lo=new at,uo=new Ki;class un{constructor(e=0,t=0,n=0,r=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Ua{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _u=0;const ho=new N,jn=new Ki,en=new at,or=new N,Pi=new N,vu=new N,xu=new Ki,fo=new N(1,0,0),po=new N(0,1,0),mo=new N(0,0,1),go={type:"added"},Mu={type:"removed"},Jn={type:"childadded",child:null},as={type:"childremoved",child:null};class Et extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new N,t=new un,n=new Ki,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Le}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(fo,e)}rotateY(e){return this.rotateOnAxis(po,e)}rotateZ(e){return this.rotateOnAxis(mo,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fo,e)}translateY(e){return this.translateOnAxis(po,e)}translateZ(e){return this.translateOnAxis(mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Pi,or,this.up):en.lookAt(or,Pi,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(en),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(go),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mu),as.child=e,this.dispatchEvent(as),as.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(go),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,vu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DEFAULT_UP=new N(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new N,tn=new N,os=new N,nn=new N,Qn=new N,ei=new N,_o=new N,cs=new N,ls=new N,us=new N,hs=new ct,fs=new ct,ds=new ct;class Ot{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),tn.subVectors(n,t),os.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(tn),c=Vt.dot(os),l=tn.dot(tn),u=tn.dot(os),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,_=(a*u-o*c)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,nn.x),c.addScaledVector(a,nn.y),c.addScaledVector(o,nn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return hs.setScalar(0),fs.setScalar(0),ds.setScalar(0),hs.fromBufferAttribute(e,t),fs.fromBufferAttribute(e,n),ds.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hs,s.x),a.addScaledVector(fs,s.y),a.addScaledVector(ds,s.z),a}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),tn.subVectors(e,t),Vt.cross(tn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Vt.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,n),ei.subVectors(s,n),cs.subVectors(e,n);const c=Qn.dot(cs),l=ei.dot(cs);if(c<=0&&l<=0)return t.copy(n);ls.subVectors(e,r);const u=Qn.dot(ls),f=ei.dot(ls);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Qn,a);us.subVectors(e,s);const m=Qn.dot(us),_=ei.dot(us);if(_>=0&&m<=_)return t.copy(s);const M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ei,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return _o.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(_o,o);const h=1/(p+M+d);return a=M*h,o=d*h,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=Pa(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ps(a,s,e+1/3),this.g=ps(a,s,e),this.b=ps(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ge.workingToColorSpace(gt.copy(this),e),Math.round(ze(gt.r*255,0,255))*65536+Math.round(ze(gt.g*255,0,255))*256+Math.round(ze(gt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(gt.copy(this),t);const n=gt.r,r=gt.g,s=gt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Tt){Ge.workingToColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,r=gt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(cr);const n=Bi(gn.h,cr.h,t),r=Bi(gn.s,cr.s,t),s=Bi(gn.l,cr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Ne;Ne.NAMES=yc;let Su=0;class yi extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=on(),this.name="",this.type="Material",this.blending=di,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Is,this.blendDst=Ns,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=no,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Is&&(n.blendSrc=this.blendSrc),this.blendDst!==Ns&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==no&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ui extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new N,lr=new Fe;let Eu=0;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=va,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),e}}class Tc extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bc extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yu=0;const Nt=new at,ms=new Et,ti=new N,Pt=new Zi,Di=new Zi,dt=new N;class Xt extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?bc:Tc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return ms.lookAt(e),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Pt.min,Di.min),Pt.expandByPoint(dt),dt.addVectors(Pt.max,Di.max),Pt.expandByPoint(dt)):(Pt.expandByPoint(Di.min),Pt.expandByPoint(Di.max))}Pt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)dt.fromBufferAttribute(o,l),c&&(ti.fromBufferAttribute(e,l),dt.add(ti)),r=Math.max(r,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new N,c[I]=new N;const l=new N,u=new N,f=new N,d=new Fe,m=new Fe,_=new Fe,M=new N,p=new N;function h(I,S,x){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,x),u.sub(l),f.sub(l),m.sub(d),_.sub(d);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(C),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(C),o[I].add(M),o[S].add(M),o[x].add(M),c[I].add(p),c[S].add(p),c[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,S=A.length;I<S;++I){const x=A[I],C=x.start,k=x.count;for(let z=C,K=C+k;z<K;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new N,E=new N,U=new N,P=new N;function R(I){U.fromBufferAttribute(r,I),P.copy(U);const S=o[I];T.copy(S),T.sub(U.multiplyScalar(U.dot(S))).normalize(),E.crossVectors(P,S);const C=E.dot(c[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,C)}for(let I=0,S=A.length;I<S;++I){const x=A[I],C=x.start,k=x.count;for(let z=C,K=C+k;z<K;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,_=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*u;for(let h=0;h<u;h++)d[_++]=l[m++]}return new Lt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new at,wn=new La,ur=new Xr,xo=new N,hr=new N,fr=new N,dr=new N,gs=new N,pr=new N,Mo=new N,mr=new N;class bt extends Et{constructor(e=new Xt,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){pr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(gs.fromBufferAttribute(f,e),a?pr.addScaledVector(gs,u):pr.addScaledVector(gs.sub(t),u))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),wn.copy(e.ray).recast(e.near),!(ur.containsPoint(wn.origin)===!1&&(wn.intersectSphere(ur,xo)===null||wn.origin.distanceToSquared(xo)>(e.far-e.near)**2))&&(vo.copy(s).invert(),wn.copy(e.ray).applyMatrix4(vo),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const p=d[_],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,U=T;E<U;E+=3){const P=o.getX(E),R=o.getX(E+1),I=o.getX(E+2);r=gr(this,h,e,n,l,u,f,P,R,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,h=M;p<h;p+=3){const A=o.getX(p),T=o.getX(p+1),E=o.getX(p+2);r=gr(this,a,e,n,l,u,f,A,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const p=d[_],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,U=T;E<U;E+=3){const P=E,R=E+1,I=E+2;r=gr(this,h,e,n,l,u,f,P,R,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=_,h=M;p<h;p+=3){const A=p,T=p+1,E=p+2;r=gr(this,a,e,n,l,u,f,A,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Tu(i,e,t,n,r,s,a,o){let c;if(e.side===At?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===En,o),c===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(mr);return l<t.near||l>t.far?null:{distance:l,point:mr.clone(),object:i}}function gr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,hr),i.getVertexPosition(c,fr),i.getVertexPosition(l,dr);const u=Tu(i,e,t,n,hr,fr,dr,Mo);if(u){const f=new N;Ot.getBarycoord(Mo,hr,fr,dr,f),r&&(u.uv=Ot.getInterpolatedAttribute(r,o,c,l,f,new Fe)),s&&(u.uv1=Ot.getInterpolatedAttribute(s,o,c,l,f,new Fe)),a&&(u.normal=Ot.getInterpolatedAttribute(a,o,c,l,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};Ot.getNormal(hr,fr,dr,d.normal),u.face=d,u.barycoord=f}return u}class $i extends Xt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function _(M,p,h,A,T,E,U,P,R,I,S){const x=E/R,C=U/I,k=E/2,z=U/2,K=P/2,Z=R+1,X=I+1;let j=0,H=0;const oe=new N;for(let he=0;he<X;he++){const Se=he*C-z;for(let Oe=0;Oe<Z;Oe++){const je=Oe*x-k;oe[M]=je*A,oe[p]=Se*T,oe[h]=K,l.push(oe.x,oe.y,oe.z),oe[M]=0,oe[p]=0,oe[h]=P>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(Oe/R),f.push(1-he/I),j+=1}}for(let he=0;he<I;he++)for(let Se=0;Se<R;Se++){const Oe=d+Se+Z*he,je=d+Se+Z*(he+1),W=d+(Se+1)+Z*(he+1),te=d+(Se+1)+Z*he;c.push(Oe,je,te),c.push(je,W,te),H+=6}o.addGroup(m,H,S),m+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=Si(i[t]);for(const r in n)e[r]=n[r]}return e}function bu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ac(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Au={clone:Si,merge:St};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=bu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ia extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new N,So=new Fe,Eo=new Fe;class Ft extends Ia{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,So,Eo),t.subVectors(Eo,So)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Cu extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ft(ni,ii,e,t);r.layers=this.layers,this.add(r);const s=new Ft(ni,ii,e,t);s.layers=this.layers,this.add(s);const a=new Ft(ni,ii,e,t);a.layers=this.layers,this.add(a);const o=new Ft(ni,ii,e,t);o.layers=this.layers,this.add(o);const c=new Ft(ni,ii,e,t);c.layers=this.layers,this.add(c);const l=new Ft(ni,ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class wc extends _t{constructor(e=[],t=vi,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pu extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new wc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $i(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:xn});s.uniforms.tEquirect.value=t;const a=new bt(r,s),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Kt),new Cu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class zn extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Du={type:"move"};class _s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),h=this._getHandJoint(l,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Du)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Na{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Na(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rc extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=va,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mt=new N;class zr{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cc extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ri;const Li=new N,si=new N,ai=new N,oi=new Fe,Ui=new Fe,Pc=new at,_r=new N,Ii=new N,vr=new N,yo=new Fe,vs=new Fe,To=new Fe;class Uu extends Et{constructor(e=new Cc){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new Xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lu(t,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new zr(n,3,0,!1)),ri.setAttribute("uv",new zr(n,2,3,!1))}this.geometry=ri,this.material=e,this.center=new Fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),si.setFromMatrixScale(this.matrixWorld),Pc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&si.multiplyScalar(-ai.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;xr(_r.set(-.5,-.5,0),ai,a,si,r,s),xr(Ii.set(.5,-.5,0),ai,a,si,r,s),xr(vr.set(.5,.5,0),ai,a,si,r,s),yo.set(0,0),vs.set(1,0),To.set(1,1);let o=e.ray.intersectTriangle(_r,Ii,vr,!1,Li);if(o===null&&(xr(Ii.set(-.5,.5,0),ai,a,si,r,s),vs.set(0,1),o=e.ray.intersectTriangle(_r,vr,Ii,!1,Li),o===null))return;const c=e.ray.origin.distanceTo(Li);c<e.near||c>e.far||t.push({distance:c,point:Li.clone(),uv:Ot.getInterpolation(Li,_r,Ii,vr,yo,vs,To,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xr(i,e,t,n,r,s){oi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ui.x=s*oi.x-r*oi.y,Ui.y=r*oi.x+s*oi.y):Ui.copy(oi),i.copy(e),i.x+=Ui.x,i.y+=Ui.y,i.applyMatrix4(Pc)}const xs=new N,Iu=new N,Nu=new Le;class Dn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=xs.subVectors(n,t).cross(Iu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nu.getNormalMatrix(e),r=this.coplanarPoint(xs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Xr,Fu=new Fe(.5,.5),Mr=new N;class Dc{constructor(e=new Dn,t=new Dn,n=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],M=r[10],p=r[11],h=r[12],A=r[13],T=r[14],E=r[15];if(n[0].setComponents(c-s,d-l,p-m,E-h).normalize(),n[1].setComponents(c+s,d+l,p+m,E+h).normalize(),n[2].setComponents(c+a,d+u,p+_,E+A).normalize(),n[3].setComponents(c-a,d-u,p-_,E-A).normalize(),n[4].setComponents(c-o,d-f,p-M,E-T).normalize(),t===an)n[5].setComponents(c+o,d+f,p+M,E+T).normalize();else if(t===Br)n[5].setComponents(o,f,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){Rn.center.set(0,0,0);const t=Fu.distanceTo(e.center);return Rn.radius=.7071067811865476+t,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Mr.x=r.normal.x>0?e.max.x:e.min.x,Mr.y=r.normal.y>0?e.max.y:e.min.y,Mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lc extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bo=new at,xa=new La,Sr=new Xr,Er=new N;class Ou extends Et{constructor(e=new Xt,t=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Sr.radius+=s,e.ray.intersectsSphere(Sr)===!1)return;bo.copy(r).invert(),xa.copy(e.ray).applyMatrix4(bo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=d,M=m;_<M;_++){const p=l.getX(_);Er.fromBufferAttribute(f,p),Ao(Er,p,c,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,M=m;_<M;_++)Er.fromBufferAttribute(f,_),Ao(Er,_,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ao(i,e,t,n,r,s,a){const o=xa.distanceSqToPoint(i);if(o<t){const c=new N;xa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bu extends _t{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uc extends _t{constructor(e,t,n=Hn,r,s,a,o=Wt,c=Wt,l,u=Gi,f=1){if(u!==Gi&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sn extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,m=[],_=[],M=[],p=[];for(let h=0;h<u;h++){const A=h*d-a;for(let T=0;T<l;T++){const E=T*f-s;_.push(E,-A,0),M.push(0,0,1),p.push(T/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let A=0;A<o;A++){const T=A+l*h,E=A+l*(h+1),U=A+1+l*(h+1),P=A+1+l*h;m.push(T,E,P),m.push(E,U,P)}this.setIndex(m),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fa extends Xt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let f=e;const d=(t-e)/r,m=new N,_=new Fe;for(let M=0;M<=r;M++){for(let p=0;p<=n;p++){const h=s+p/n*a;m.x=f*Math.cos(h),m.y=f*Math.sin(h),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}f+=d}for(let M=0;M<r;M++){const p=M*(n+1);for(let h=0;h<n;h++){const A=h+p,T=A,E=A+n+1,U=A+n+2,P=A+1;o.push(T,E,P),o.push(E,U,P)}}this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zu extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hu extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vu{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const m=l[f],_=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Gu=new Vu;class Oa{constructor(e){this.manager=e!==void 0?e:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci=new WeakMap;class ku extends Oa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ms.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=ci.get(a);f===void 0&&(f=[],ci.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Xi("img");function c(){u(),t&&t(this);const f=ci.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onLoad&&m.onLoad(this)}ci.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),Ms.remove(`image:${e}`);const d=ci.get(this)||[];for(let m=0;m<d.length;m++){const _=d[m];_.onError&&_.onError(f)}ci.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ms.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Wu extends Oa{constructor(e){super(e)}load(e,t,n,r){const s=new _t,a=new ku(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Xu extends Ia{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qu extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Yu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const wo=new at;class Ku{constructor(e,t,n=0,r=1/0){this.ray=new La(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wo),this}intersectObject(e,t=!0,n=[]){return Ma(e,this,n,t),n.sort(Ro),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ma(e[r],this,n,t);return n.sort(Ro),n}}function Ro(i,e){return i.distance-e.distance}function Ma(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ma(s[a],e,t,!0)}}function Co(i,e,t,n){const r=Zu(n);switch(t){case mc:return i*e;case _c:return i*e/r.components*r.byteLength;case wa:return i*e/r.components*r.byteLength;case vc:return i*e*2/r.components*r.byteLength;case Ra:return i*e*2/r.components*r.byteLength;case gc:return i*e*3/r.components*r.byteLength;case kt:return i*e*4/r.components*r.byteLength;case Ca:return i*e*4/r.components*r.byteLength;case Ar:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ys:case Zs:return Math.max(i,16)*Math.max(e,8)/4;case qs:case Ks:return Math.max(i,8)*Math.max(e,8)/2;case $s:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pr:case da:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xc:case ma:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ga:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zu(i){switch(i){case ln:case fc:return{byteLength:1,components:1};case Hi:case dc:case Yi:return{byteLength:2,components:1};case ba:case Aa:return{byteLength:2,components:4};case Hn:case Ta:case sn:return{byteLength:4,components:1};case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);function Ic(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function $u(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],M=f[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,f[d]=M)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const M=f[m];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$h=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ad=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ed=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:ju,alphahash_pars_fragment:Ju,alphamap_fragment:Qu,alphamap_pars_fragment:eh,alphatest_fragment:th,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:rh,batching_pars_vertex:sh,batching_vertex:ah,begin_vertex:oh,beginnormal_vertex:ch,bsdfs:lh,iridescence_fragment:uh,bumpmap_pars_fragment:hh,clipping_planes_fragment:fh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:gh,color_pars_fragment:_h,color_pars_vertex:vh,color_vertex:xh,common:Mh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:yh,displacementmap_vertex:Th,emissivemap_fragment:bh,emissivemap_pars_fragment:Ah,colorspace_fragment:wh,colorspace_pars_fragment:Rh,envmap_fragment:Ch,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Dh,envmap_pars_vertex:Lh,envmap_physical_pars_fragment:kh,envmap_vertex:Uh,fog_vertex:Ih,fog_pars_vertex:Nh,fog_fragment:Fh,fog_pars_fragment:Oh,gradientmap_pars_fragment:Bh,lightmap_pars_fragment:zh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Vh,lights_pars_begin:Gh,lights_toon_fragment:Wh,lights_toon_pars_fragment:Xh,lights_phong_fragment:qh,lights_phong_pars_fragment:Yh,lights_physical_fragment:Kh,lights_physical_pars_fragment:Zh,lights_fragment_begin:$h,lights_fragment_maps:jh,lights_fragment_end:Jh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:rf,map_pars_fragment:sf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:cf,metalnessmap_pars_fragment:lf,morphinstance_vertex:uf,morphcolor_vertex:hf,morphnormal_vertex:ff,morphtarget_pars_vertex:df,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:_f,normal_pars_vertex:vf,normal_vertex:xf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Tf,opaque_fragment:bf,packing:Af,premultiplied_alpha_fragment:wf,project_vertex:Rf,dithering_fragment:Cf,dithering_pars_fragment:Pf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:If,shadowmap_vertex:Nf,shadowmask_pars_fragment:Ff,skinbase_vertex:Of,skinning_pars_vertex:Bf,skinning_vertex:zf,skinnormal_vertex:Hf,specularmap_fragment:Vf,specularmap_pars_fragment:Gf,tonemapping_fragment:kf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:qf,uv_pars_fragment:Yf,uv_pars_vertex:Kf,uv_vertex:Zf,worldpos_vertex:$f,background_vert:jf,background_frag:Jf,backgroundCube_vert:Qf,backgroundCube_frag:ed,cube_vert:td,cube_frag:nd,depth_vert:id,depth_frag:rd,distanceRGBA_vert:sd,distanceRGBA_frag:ad,equirect_vert:od,equirect_frag:cd,linedashed_vert:ld,linedashed_frag:ud,meshbasic_vert:hd,meshbasic_frag:fd,meshlambert_vert:dd,meshlambert_frag:pd,meshmatcap_vert:md,meshmatcap_frag:gd,meshnormal_vert:_d,meshnormal_frag:vd,meshphong_vert:xd,meshphong_frag:Md,meshphysical_vert:Sd,meshphysical_frag:Ed,meshtoon_vert:yd,meshtoon_frag:Td,points_vert:bd,points_frag:Ad,shadow_vert:wd,shadow_frag:Rd,sprite_vert:Cd,sprite_frag:Pd},ie={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},qt={basic:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:St([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:St([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:St([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:St([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:St([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:St([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:St([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:St([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:St([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:St([ie.lights,ie.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};qt.physical={uniforms:St([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const yr={r:0,b:0,g:0},Cn=new un,Dd=new at;function Ld(i,e,t,n,r,s,a){const o=new Ne(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function _(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function M(T){let E=!1;const U=_(T);U===null?h(o,c):U&&U.isColor&&(h(U,1),E=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,E){const U=_(E);U&&(U.isCubeTexture||U.mapping===Wr)?(u===void 0&&(u=new bt(new $i(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Si(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cn.copy(E.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(Cn)),u.material.toneMapped=Ge.getTransfer(U.colorSpace)!==$e,(f!==U||d!==U.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=U,d=U.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new bt(new Sn(2,2),new hn({name:"BackgroundMaterial",uniforms:Si(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(U.colorSpace)!==$e,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||d!==U.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=U,d=U.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,E){T.getRGB(yr,Ac(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,E,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(o,c)},render:M,addToRenderList:p,dispose:A}}function Ud(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(x,C,k,z,K){let Z=!1;const X=f(z,k,C);s!==X&&(s=X,l(s.object)),Z=m(x,z,k,K),Z&&_(x,z,k,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(x,C,k,z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function f(x,C,k){const z=k.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let Z=K[C.id];Z===void 0&&(Z={},K[C.id]=Z);let X=Z[z];return X===void 0&&(X=d(c()),Z[z]=X),X}function d(x){const C=[],k=[],z=[];for(let K=0;K<t;K++)C[K]=0,k[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:z,object:x,attributes:{},index:null}}function m(x,C,k,z){const K=s.attributes,Z=C.attributes;let X=0;const j=k.getAttributes();for(const H in j)if(j[H].location>=0){const he=K[H];let Se=Z[H];if(Se===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function _(x,C,k,z){const K={},Z=C.attributes;let X=0;const j=k.getAttributes();for(const H in j)if(j[H].location>=0){let he=Z[H];he===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),K[H]=Se,X++}s.attributes=K,s.attributesNum=X,s.index=z}function M(){const x=s.newAttributes;for(let C=0,k=x.length;C<k;C++)x[C]=0}function p(x){h(x,0)}function h(x,C){const k=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;k[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),K[x]!==C&&(i.vertexAttribDivisor(x,C),K[x]=C)}function A(){const x=s.newAttributes,C=s.enabledAttributes;for(let k=0,z=C.length;k<z;k++)C[k]!==x[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function T(x,C,k,z,K,Z,X){X===!0?i.vertexAttribIPointer(x,C,k,K,Z):i.vertexAttribPointer(x,C,k,z,K,Z)}function E(x,C,k,z){M();const K=z.attributes,Z=k.getAttributes(),X=C.defaultAttributeValues;for(const j in Z){const H=Z[j];if(H.location>=0){let oe=K[j];if(oe===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){const he=oe.normalized,Se=oe.itemSize,Oe=e.get(oe);if(Oe===void 0)continue;const je=Oe.buffer,W=Oe.type,te=Oe.bytesPerElement,xe=W===i.INT||W===i.UNSIGNED_INT||oe.gpuType===Ta;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Me=ce.stride,ke=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)h(H.location+we,ce.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let we=0;we<H.locationSize;we++)p(H.location+we);i.bindBuffer(i.ARRAY_BUFFER,je);for(let we=0;we<H.locationSize;we++)T(H.location+we,Se/H.locationSize,W,he,Me*te,(ke+Se/H.locationSize*we)*te,xe)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)h(H.location+ce,oe.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<H.locationSize;ce++)p(H.location+ce);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ce=0;ce<H.locationSize;ce++)T(H.location+ce,Se/H.locationSize,W,he,Se*te,Se/H.locationSize*ce*te,xe)}}else if(X!==void 0){const he=X[j];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(H.location,he);break;case 3:i.vertexAttrib3fv(H.location,he);break;case 4:i.vertexAttrib4fv(H.location,he);break;default:i.vertexAttrib1fv(H.location,he)}}}}A()}function U(){I();for(const x in n){const C=n[x];for(const k in C){const z=C[k];for(const K in z)u(z[K].object),delete z[K];delete C[k]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const k in C){const z=C[k];for(const K in z)u(z[K].object),delete z[K];delete C[k]}delete n[x.id]}function R(x){for(const C in n){const k=n[C];if(k[x.id]===void 0)continue;const z=k[x.id];for(const K in z)u(z[K].object),delete z[K];delete k[x.id]}}function I(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:A}}function Id(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,n,1)}function c(l,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let _=0;for(let M=0;M<f;M++)_+=u[M]*d[M];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Nd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==kt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:U,maxSamples:P}}function Fd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Dn,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):l();else{const A=s?0:n,T=A*4;let E=h.clippingState||null;c.value=E,E=u(_,d,T,m);for(let U=0;U!==T;++U)E[U]=t[U];h.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,_){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,_!==!0||p===null){const h=m+M*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,E=m;T!==M;++T,E+=4)a.copy(f[T]).applyMatrix4(A,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Od(i){let e=new WeakMap;function t(a,o){return o===ks?a.mapping=vi:o===Ws&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ks||o===Ws)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Pu(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const hi=4,Po=[.125,.215,.35,.446,.526,.582],In=20,Ss=new Xu,Do=new Ne;let Es=null,ys=0,Ts=0,bs=!1;const Ln=(1+Math.sqrt(5))/2,li=1/Ln,Lo=[new N(-Ln,li,0),new N(Ln,li,0),new N(-li,0,Ln),new N(li,0,Ln),new N(0,Ln,-li),new N(0,Ln,li),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Bd=new N;class Uo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Bd}=s;Es=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,ys,Ts),this._renderer.xr.enabled=bs,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Yi,format:kt,colorSpace:Mi,depthBuffer:!1},r=Io(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Io(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zd(s)),this._blurMaterial=Hd(s,e,t)}return r}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Ss)}_sceneToCubeUV(e,t,n,r,s){const c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Do),f.toneMapping=Mn,f.autoClear=!1;const _=new ui({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),M=new bt(new $i,_);let p=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,p=!0):(_.color.copy(Do),p=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):T===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));const E=this._cubeSize;Tr(r,T*E,A>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(M,c),f.render(e,c)}M.geometry.dispose(),M.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===vi||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Tr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ss)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lo[(r-s-1)%Lo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),M=s/_,p=isFinite(s)?1+Math.floor(u*M):In;p>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);const h=[];let A=0;for(let R=0;R<In;++R){const I=R/M,S=Math.exp(-I*I/2);h.push(S),R===0?A+=S:R<p&&(A+=2*S)}for(let R=0;R<h.length;R++)h[R]=h[R]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const E=this._sizeLods[r],U=3*E*(r>T-hi?r-T+hi:0),P=4*(this._cubeSize-E);Tr(t,U,P,3*E,2*E),c.setRenderTarget(t),c.render(f,Ss)}}function zd(i){const e=[],t=[],n=[];let r=i;const s=i-hi+1+Po.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-hi?c=Po[a-i+hi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,M=3,p=2,h=1,A=new Float32Array(M*_*m),T=new Float32Array(p*_*m),E=new Float32Array(h*_*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,I=P>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];A.set(S,M*_*P),T.set(d,p*_*P);const x=[P,P,P,P,P,P];E.set(x,h*_*P)}const U=new Xt;U.setAttribute("position",new Lt(A,M)),U.setAttribute("uv",new Lt(T,p)),U.setAttribute("faceIndex",new Lt(E,h)),e.push(U),r>hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Io(i,e,t){const n=new Vn(i,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Hd(i,e,t){const n=new Float32Array(In),r=new N(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function No(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Fo(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ks||c===Ws,u=c===vi||c===xi;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Uo(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Uo(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&pi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kd(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,_=f.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let T=0,E=A.length;T<E;T+=3){const U=A[T+0],P=A[T+1],R=A[T+2];d.push(U,P,P,R,R,U)}}else if(_!==void 0){const A=_.array;M=_.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const U=T+0,P=T+1,R=T+2;d.push(U,P,P,R,R,U)}}else return;const p=new(Sc(d)?bc:Tc)(d,1);p.version=M;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Wd(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function l(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,d*a,_),t.update(m,n,_))}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];t.update(p,n,1)}function f(d,m,_,M){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/a,m[h],M[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,M,0,_);let h=0;for(let A=0;A<_;A++)h+=m[A]*M[A];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Xd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function qd(i,e,t){const n=new WeakMap,r=new ct;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let x=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),M===!0&&(E=2),p===!0&&(E=3);let U=o.attributes.position.count*E,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const R=new Float32Array(U*P*4*f),I=new Ec(R,U,P,f);I.type=sn,I.needsUpdate=!0;const S=E*4;for(let C=0;C<f;C++){const k=h[C],z=A[C],K=T[C],Z=U*P*4*C;for(let X=0;X<k.count;X++){const j=X*S;_===!0&&(r.fromBufferAttribute(k,X),R[Z+j+0]=r.x,R[Z+j+1]=r.y,R[Z+j+2]=r.z,R[Z+j+3]=0),M===!0&&(r.fromBufferAttribute(z,X),R[Z+j+4]=r.x,R[Z+j+5]=r.y,R[Z+j+6]=r.z,R[Z+j+7]=0),p===!0&&(r.fromBufferAttribute(K,X),R[Z+j+8]=r.x,R[Z+j+9]=r.y,R[Z+j+10]=r.z,R[Z+j+11]=K.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new Fe(U,P)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Yd(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Nc=new _t,Oo=new Uc(1,1),Fc=new Ec,Oc=new du,Bc=new wc,Bo=[],zo=[],Ho=new Float32Array(16),Vo=new Float32Array(9),Go=new Float32Array(4);function Ti(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Bo[r];if(s===void 0&&(s=new Float32Array(r),Bo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=zo[e];t===void 0&&(t=new Int32Array(e),zo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Kd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function Jd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Go.set(n),i.uniformMatrix2fv(this.addr,!1,Go),ft(t,n)}}function Qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Vo.set(n),i.uniformMatrix3fv(this.addr,!1,Vo),ft(t,n)}}function ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Ho.set(n),i.uniformMatrix4fv(this.addr,!1,Ho),ft(t,n)}}function tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Oo.compareFunction=Mc,s=Oo):s=Nc,t.setTexture2D(e||s,r)}function up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Oc,r)}function hp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bc,r)}function fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fc,r)}function dp(i){switch(i){case 5126:return Kd;case 35664:return Zd;case 35665:return $d;case 35666:return jd;case 35674:return Jd;case 35675:return Qd;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return fp}}function pp(i,e){i.uniform1fv(this.addr,e)}function mp(i,e){const t=Ti(e,this.size,2);i.uniform2fv(this.addr,t)}function gp(i,e){const t=Ti(e,this.size,3);i.uniform3fv(this.addr,t)}function _p(i,e){const t=Ti(e,this.size,4);i.uniform4fv(this.addr,t)}function vp(i,e){const t=Ti(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xp(i,e){const t=Ti(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mp(i,e){const t=Ti(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sp(i,e){i.uniform1iv(this.addr,e)}function Ep(i,e){i.uniform2iv(this.addr,e)}function yp(i,e){i.uniform3iv(this.addr,e)}function Tp(i,e){i.uniform4iv(this.addr,e)}function bp(i,e){i.uniform1uiv(this.addr,e)}function Ap(i,e){i.uniform2uiv(this.addr,e)}function wp(i,e){i.uniform3uiv(this.addr,e)}function Rp(i,e){i.uniform4uiv(this.addr,e)}function Cp(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Nc,s[a])}function Pp(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Oc,s[a])}function Dp(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bc,s[a])}function Lp(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Fc,s[a])}function Up(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return Ep;case 35668:case 35672:return yp;case 35669:case 35673:return Tp;case 5125:return bp;case 36294:return Ap;case 36295:return wp;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Lp}}class Ip{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dp(t.type)}}class Np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Up(t.type)}}class Fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const As=/(\w+)(\])?(\[|\.)?/g;function ko(i,e){i.seq.push(e),i.map[e.id]=e}function Op(i,e,t){const n=i.name,r=n.length;for(As.lastIndex=0;;){const s=As.exec(n),a=As.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ko(t,l===void 0?new Ip(o,i,e):new Np(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Fp(o),ko(t,f)),t=f}}}class Dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Op(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Wo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bp=37297;let zp=0;function Hp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Xo=new Le;function Vp(i){Ge._getMatrix(Xo,Ge.workingColorSpace,i);const e=`mat3( ${Xo.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hp(i.getShaderSource(e),a)}else return r}function Gp(i,e){const t=Vp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kp(i,e){let t;switch(e){case Tl:t="Linear";break;case bl:t="Reinhard";break;case Al:t="Cineon";break;case uc:t="ACESFilmic";break;case Rl:t="AgX";break;case Cl:t="Neutral";break;case wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new N;function Wp(){Ge.getLuminanceCoefficients(br);const i=br.x.toFixed(4),e=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function qp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fi(i){return i!==""}function Yo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ko(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(Kp,$p)}const Zp=new Map;function $p(i,e){let t=Ie[e];if(t===void 0){const n=Zp.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sa(t)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zo(i){return i.replace(jp,Jp)}function Jp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $o(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===il?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function em(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vi:case xi:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xi&&(e="ENVMAP_MODE_REFRACTION"),e}function nm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case El:e="ENVMAP_BLENDING_MIX";break;case yl:e="ENVMAP_BLENDING_ADD";break}return e}function im(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Qp(t),l=em(t),u=tm(t),f=nm(t),d=im(t),m=Xp(t),_=qp(s),M=r.createProgram();let p,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),h.length>0&&(h+=`
`)):(p=[$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),h=[$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Mn?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),Wp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),a=Sa(a),a=Yo(a,t),a=Ko(a,t),o=Sa(o),o=Yo(o,t),o=Ko(o,t),a=Zo(a),o=Zo(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+p+a,E=A+h+o,U=Wo(r,r.VERTEX_SHADER,T),P=Wo(r,r.FRAGMENT_SHADER,E);r.attachShader(M,U),r.attachShader(M,P),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(M).trim(),z=r.getShaderInfoLog(U).trim(),K=r.getShaderInfoLog(P).trim();let Z=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,U,P);else{const j=qo(r,U,"vertex"),H=qo(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+j+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||K==="")&&(X=!1);X&&(C.diagnostics={runnable:Z,programLog:k,vertexShader:{log:z,prefix:p},fragmentShader:{log:K,prefix:h}})}r.deleteShader(U),r.deleteShader(P),I=new Dr(r,M),S=Yp(r,M)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,Bp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=P,this}let sm=0;class am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new om(e),t.set(e,n)),n}}class om{constructor(e){this.id=sm++,this.code=e,this.usedTimes=0}}function cm(i,e,t,n,r,s,a){const o=new Ua,c=new am,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,x,C,k,z){const K=k.fog,Z=z.geometry,X=S.isMeshStandardMaterial?k.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=j&&j.mapping===Wr?j.image.height:null,oe=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Se=he!==void 0?he.length:0;let Oe=0;Z.morphAttributes.position!==void 0&&(Oe=1),Z.morphAttributes.normal!==void 0&&(Oe=2),Z.morphAttributes.color!==void 0&&(Oe=3);let je,W,te,xe;if(oe){const Ye=qt[oe];je=Ye.vertexShader,W=Ye.fragmentShader}else je=S.vertexShader,W=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);const ce=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),ke=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,it=!!S.map,rt=!!S.matcap,We=!!j,b=!!S.aoMap,vt=!!S.lightMap,Xe=!!S.bumpMap,Qe=!!S.normalMap,ge=!!S.displacementMap,He=!!S.emissiveMap,ye=!!S.metalnessMap,Ue=!!S.roughnessMap,ut=S.anisotropy>0,y=S.clearcoat>0,g=S.dispersion>0,F=S.iridescence>0,G=S.sheen>0,Y=S.transmission>0,V=ut&&!!S.anisotropyMap,_e=y&&!!S.clearcoatMap,re=y&&!!S.clearcoatNormalMap,me=y&&!!S.clearcoatRoughnessMap,ve=F&&!!S.iridescenceMap,$=F&&!!S.iridescenceThicknessMap,le=G&&!!S.sheenColorMap,Ae=G&&!!S.sheenRoughnessMap,be=!!S.specularMap,ne=!!S.specularColorMap,Pe=!!S.specularIntensityMap,w=Y&&!!S.transmissionMap,se=Y&&!!S.thicknessMap,J=!!S.gradientMap,fe=!!S.alphaMap,Q=S.alphaTest>0,q=!!S.alphaHash,de=!!S.extensions;let De=Mn;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(De=i.toneMapping);const et={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:W,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:ke,instancingColor:ke&&z.instanceColor!==null,instancingMorph:ke&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Mi,alphaToCoverage:!!S.alphaToCoverage,map:it,matcap:rt,envMap:We,envMapMode:We&&j.mapping,envMapCubeUVHeight:H,aoMap:b,lightMap:vt,bumpMap:Xe,normalMap:Qe,displacementMap:d&&ge,emissiveMap:He,normalMapObjectSpace:Qe&&S.normalMapType===Il,normalMapTangentSpace:Qe&&S.normalMapType===Ul,metalnessMap:ye,roughnessMap:Ue,anisotropy:ut,anisotropyMap:V,clearcoat:y,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:me,dispersion:g,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:$,sheen:G,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:be,specularColorMap:ne,specularIntensityMap:Pe,transmission:Y,transmissionMap:w,thicknessMap:se,gradientMap:J,opaque:S.transparent===!1&&S.blending===di&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:Q,alphaHash:q,combine:S.combine,mapUv:it&&M(S.map.channel),aoMapUv:b&&M(S.aoMap.channel),lightMapUv:vt&&M(S.lightMap.channel),bumpMapUv:Xe&&M(S.bumpMap.channel),normalMapUv:Qe&&M(S.normalMap.channel),displacementMapUv:ge&&M(S.displacementMap.channel),emissiveMapUv:He&&M(S.emissiveMap.channel),metalnessMapUv:ye&&M(S.metalnessMap.channel),roughnessMapUv:Ue&&M(S.roughnessMap.channel),anisotropyMapUv:V&&M(S.anisotropyMap.channel),clearcoatMapUv:_e&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:$&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&M(S.sheenRoughnessMap.channel),specularMapUv:be&&M(S.specularMap.channel),specularColorMapUv:ne&&M(S.specularColorMap.channel),specularIntensityMapUv:Pe&&M(S.specularIntensityMap.channel),transmissionMapUv:w&&M(S.transmissionMap.channel),thicknessMapUv:se&&M(S.thicknessMap.channel),alphaMapUv:fe&&M(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Qe||ut),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(it||fe),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Me,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Oe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&Ge.getTransfer(S.map.colorSpace)===$e,decodeVideoTextureEmissive:He&&S.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(S.emissiveMap.colorSpace)===$e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===At,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function A(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const x=_[S.type];let C;if(x){const k=qt[x];C=Au.clone(k.uniforms)}else C=S.uniforms;return C}function U(S,x){let C;for(let k=0,z=u.length;k<z;k++){const K=u[k];if(K.cacheKey===x){C=K,++C.usedTimes;break}}return C===void 0&&(C=new rm(i,x,S,s),u.push(C)),C}function P(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function R(S){c.remove(S)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:U,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:I}}function lm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,m,_,M,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:M,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=M,h.group=p),e++,h}function o(f,d,m,_,M,p){const h=a(f,d,m,_,M,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(f,d,m,_,M,p){const h=a(f,d,m,_,M,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||um),n.length>1&&n.sort(d||jo),r.length>1&&r.sort(d||jo)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function hm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Jo,i.set(n,[a])):r>=s.length?(a=new Jo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ne};break;case"SpotLight":t={position:new N,direction:new N,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function dm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pm=0;function mm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gm(i){const e=new fm,t=dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new at,a=new at;function o(l){let u=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,M=0,p=0,h=0,A=0,T=0,E=0,U=0,P=0,R=0;l.sort(mm);for(let S=0,x=l.length;S<x;S++){const C=l[S],k=C.color,z=C.intensity,K=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=k.r*z,f+=k.g*z,d+=k.b*z;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],z);R++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,H=t.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=X,m++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(k).multiplyScalar(z),X.distance=K,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[M]=X;const j=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,j.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[M]=j.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=Z,E++}M++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(k).multiplyScalar(z),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=X,p++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const j=C.shadow,H=t.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=C.shadow.matrix,T++}n.point[_]=X,_++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(z),X.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[h]=X,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==M||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==E||I.numSpotMaps!==U||I.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,I.directionalLength=m,I.pointLength=_,I.spotLength=M,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=E,I.numSpotMaps=U,I.numLightProbes=R,n.version=pm++)}function c(l,u){let f=0,d=0,m=0,_=0,M=0;const p=u.matrixWorldInverse;for(let h=0,A=l.length;h<A;h++){const T=l[h];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const E=n.hemi[M];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:n}}function Qo(i){const e=new gm(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function _m(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Qo(i),e.set(r,[o])):s>=a.length?(o=new Qo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mm(i,e,t){let n=new Dc;const r=new Fe,s=new Fe,a=new ct,o=new zu({depthPacking:Ll}),c=new Hu,l={},u=t.maxTextureSize,f={[En]:At,[At]:En,[Yt]:Yt},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:vm,fragmentShader:xm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Xt;_.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new bt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let h=this.type;this.render=function(P,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(xn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=h!==rn&&this.type===rn,K=h===rn&&this.type!==rn;for(let Z=0,X=P.length;Z<X;Z++){const j=P[Z],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||z===!0||K===!0){const Se=this.type!==rn?{minFilter:Wt,magFilter:Wt}:{};H.map!==null&&H.map.dispose(),H.map=new Vn(r.x,r.y,Se),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const he=H.getViewportCount();for(let Se=0;Se<he;Se++){const Oe=H.getViewport(Se);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),k.viewport(a),H.updateMatrices(j,Se),n=H.getFrustum(),E(R,I,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===rn&&A(H,I),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,C)};function A(P,R){const I=e.update(M);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Vn(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,M,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,I,m,M,null)}function T(P,R,I,S){let x=null;const C=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)x=C;else if(x=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=x.uuid,z=R.uuid;let K=l[k];K===void 0&&(K={},l[k]=K);let Z=K[z];Z===void 0&&(Z=x.clone(),K[z]=Z,R.addEventListener("dispose",U)),x=Z}if(x.visible=R.visible,x.wireframe=R.wireframe,S===rn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=I}return x}function E(P,R,I,S,x){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===rn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const z=e.update(P),K=P.material;if(Array.isArray(K)){const Z=z.groups;for(let X=0,j=Z.length;X<j;X++){const H=Z[X],oe=K[H.materialIndex];if(oe&&oe.visible){const he=T(P,oe,S,x);P.onBeforeShadow(i,P,R,I,z,he,H),i.renderBufferDirect(I,null,z,he,P,H),P.onAfterShadow(i,P,R,I,z,he,H)}}}else if(K.visible){const Z=T(P,K,S,x);P.onBeforeShadow(i,P,R,I,z,Z,null),i.renderBufferDirect(I,null,z,Z,P,null),P.onAfterShadow(i,P,R,I,z,Z,null)}}const k=P.children;for(let z=0,K=k.length;z<K;z++)E(k[z],R,I,S,x)}function U(P){P.target.removeEventListener("dispose",U);for(const I in l){const S=l[I],x=P.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Sm={[Fs]:Os,[Bs]:Vs,[zs]:Gs,[_i]:Hs,[Os]:Fs,[Vs]:Bs,[Gs]:zs,[Hs]:_i};function Em(i,e){function t(){let w=!1;const se=new ct;let J=null;const fe=new ct(0,0,0,0);return{setMask:function(Q){J!==Q&&!w&&(i.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){w=Q},setClear:function(Q,q,de,De,et){et===!0&&(Q*=De,q*=De,de*=De),se.set(Q,q,de,De),fe.equals(se)===!1&&(i.clearColor(Q,q,de,De),fe.copy(se))},reset:function(){w=!1,J=null,fe.set(-1,0,0,0)}}}function n(){let w=!1,se=!1,J=null,fe=null,Q=null;return{setReversed:function(q){if(se!==q){const de=e.get("EXT_clip_control");q?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),se=q;const De=Q;Q=null,this.setClear(De)}},getReversed:function(){return se},setTest:function(q){q?ce(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(q){J!==q&&!w&&(i.depthMask(q),J=q)},setFunc:function(q){if(se&&(q=Sm[q]),fe!==q){switch(q){case Fs:i.depthFunc(i.NEVER);break;case Os:i.depthFunc(i.ALWAYS);break;case Bs:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case zs:i.depthFunc(i.EQUAL);break;case Hs:i.depthFunc(i.GEQUAL);break;case Vs:i.depthFunc(i.GREATER);break;case Gs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=q}},setLocked:function(q){w=q},setClear:function(q){Q!==q&&(se&&(q=1-q),i.clearDepth(q),Q=q)},reset:function(){w=!1,J=null,fe=null,Q=null,se=!1}}}function r(){let w=!1,se=null,J=null,fe=null,Q=null,q=null,de=null,De=null,et=null;return{setTest:function(Ye){w||(Ye?ce(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!w&&(i.stencilMask(Ye),se=Ye)},setFunc:function(Ye,Bt,jt){(J!==Ye||fe!==Bt||Q!==jt)&&(i.stencilFunc(Ye,Bt,jt),J=Ye,fe=Bt,Q=jt)},setOp:function(Ye,Bt,jt){(q!==Ye||de!==Bt||De!==jt)&&(i.stencilOp(Ye,Bt,jt),q=Ye,de=Bt,De=jt)},setLocked:function(Ye){w=Ye},setClear:function(Ye){et!==Ye&&(i.clearStencil(Ye),et=Ye)},reset:function(){w=!1,se=null,J=null,fe=null,Q=null,q=null,de=null,De=null,et=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],_=null,M=!1,p=null,h=null,A=null,T=null,E=null,U=null,P=null,R=new Ne(0,0,0),I=0,S=!1,x=null,C=null,k=null,z=null,K=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=j>=2);let oe=null,he={};const Se=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),je=new ct().fromArray(Se),W=new ct().fromArray(Oe);function te(w,se,J,fe){const Q=new Uint8Array(4),q=i.createTexture();i.bindTexture(w,q),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<J;de++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(se+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return q}const xe={};xe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(_i),Xe(!1),Qe(Qa),ce(i.CULL_FACE),b(xn);function ce(w){u[w]!==!0&&(i.enable(w),u[w]=!0)}function Me(w){u[w]!==!1&&(i.disable(w),u[w]=!1)}function ke(w,se){return f[w]!==se?(i.bindFramebuffer(w,se),f[w]=se,w===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=se),w===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=se),!0):!1}function we(w,se){let J=m,fe=!1;if(w){J=d.get(se),J===void 0&&(J=[],d.set(se,J));const Q=w.textures;if(J.length!==Q.length||J[0]!==i.COLOR_ATTACHMENT0){for(let q=0,de=Q.length;q<de;q++)J[q]=i.COLOR_ATTACHMENT0+q;J.length=Q.length,fe=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,fe=!0);fe&&i.drawBuffers(J)}function it(w){return _!==w?(i.useProgram(w),_=w,!0):!1}const rt={[Un]:i.FUNC_ADD,[sl]:i.FUNC_SUBTRACT,[al]:i.FUNC_REVERSE_SUBTRACT};rt[ol]=i.MIN,rt[cl]=i.MAX;const We={[ll]:i.ZERO,[ul]:i.ONE,[hl]:i.SRC_COLOR,[Is]:i.SRC_ALPHA,[_l]:i.SRC_ALPHA_SATURATE,[ml]:i.DST_COLOR,[dl]:i.DST_ALPHA,[fl]:i.ONE_MINUS_SRC_COLOR,[Ns]:i.ONE_MINUS_SRC_ALPHA,[gl]:i.ONE_MINUS_DST_COLOR,[pl]:i.ONE_MINUS_DST_ALPHA,[vl]:i.CONSTANT_COLOR,[xl]:i.ONE_MINUS_CONSTANT_COLOR,[Ml]:i.CONSTANT_ALPHA,[Sl]:i.ONE_MINUS_CONSTANT_ALPHA};function b(w,se,J,fe,Q,q,de,De,et,Ye){if(w===xn){M===!0&&(Me(i.BLEND),M=!1);return}if(M===!1&&(ce(i.BLEND),M=!0),w!==rl){if(w!==p||Ye!==S){if((h!==Un||E!==Un)&&(i.blendEquation(i.FUNC_ADD),h=Un,E=Un),Ye)switch(w){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.ONE,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case eo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case to:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}A=null,T=null,U=null,P=null,R.set(0,0,0),I=0,p=w,S=Ye}return}Q=Q||se,q=q||J,de=de||fe,(se!==h||Q!==E)&&(i.blendEquationSeparate(rt[se],rt[Q]),h=se,E=Q),(J!==A||fe!==T||q!==U||de!==P)&&(i.blendFuncSeparate(We[J],We[fe],We[q],We[de]),A=J,T=fe,U=q,P=de),(De.equals(R)===!1||et!==I)&&(i.blendColor(De.r,De.g,De.b,et),R.copy(De),I=et),p=w,S=!1}function vt(w,se){w.side===Yt?Me(i.CULL_FACE):ce(i.CULL_FACE);let J=w.side===At;se&&(J=!J),Xe(J),w.blending===di&&w.transparent===!1?b(xn):b(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const fe=w.stencilWrite;o.setTest(fe),fe&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),He(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(w){x!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),x=w)}function Qe(w){w!==tl?(ce(i.CULL_FACE),w!==C&&(w===Qa?i.cullFace(i.BACK):w===nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),C=w}function ge(w){w!==k&&(X&&i.lineWidth(w),k=w)}function He(w,se,J){w?(ce(i.POLYGON_OFFSET_FILL),(z!==se||K!==J)&&(i.polygonOffset(se,J),z=se,K=J)):Me(i.POLYGON_OFFSET_FILL)}function ye(w){w?ce(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Ue(w){w===void 0&&(w=i.TEXTURE0+Z-1),oe!==w&&(i.activeTexture(w),oe=w)}function ut(w,se,J){J===void 0&&(oe===null?J=i.TEXTURE0+Z-1:J=oe);let fe=he[J];fe===void 0&&(fe={type:void 0,texture:void 0},he[J]=fe),(fe.type!==w||fe.texture!==se)&&(oe!==J&&(i.activeTexture(J),oe=J),i.bindTexture(w,se||xe[w]),fe.type=w,fe.texture=se)}function y(){const w=he[oe];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function G(){try{i.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{i.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{i.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{i.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function me(){try{i.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{i.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{i.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(w){je.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),je.copy(w))}function Ae(w){W.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),W.copy(w))}function be(w,se){let J=l.get(se);J===void 0&&(J=new WeakMap,l.set(se,J));let fe=J.get(w);fe===void 0&&(fe=i.getUniformBlockIndex(se,w.name),J.set(w,fe))}function ne(w,se){const fe=l.get(se).get(w);c.get(se)!==fe&&(i.uniformBlockBinding(se,fe,w.__bindingPointIndex),c.set(se,fe))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,he={},f={},d=new WeakMap,m=[],_=null,M=!1,p=null,h=null,A=null,T=null,E=null,U=null,P=null,R=new Ne(0,0,0),I=0,S=!1,x=null,C=null,k=null,z=null,K=null,je.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:Me,bindFramebuffer:ke,drawBuffers:we,useProgram:it,setBlending:b,setMaterial:vt,setFlipSided:Xe,setCullFace:Qe,setLineWidth:ge,setPolygonOffset:He,setScissorTest:ye,activeTexture:Ue,bindTexture:ut,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:ve,texImage3D:$,updateUBOMapping:be,uniformBlockBinding:ne,texStorage2D:re,texStorage3D:me,texSubImage2D:G,texSubImage3D:Y,compressedTexSubImage2D:V,compressedTexSubImage3D:_e,scissor:le,viewport:Ae,reset:Pe}}function ym(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):Xi("canvas")}function M(y,g,F){let G=1;const Y=ut(y);if((Y.width>F||Y.height>F)&&(G=F/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const V=Math.floor(G*Y.width),_e=Math.floor(G*Y.height);f===void 0&&(f=_(V,_e));const re=g?_(V,_e):f;return re.width=V,re.height=_e,re.getContext("2d").drawImage(y,0,0,V,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+V+"x"+_e+")."),re}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,g,F,G,Y=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let V=g;if(g===i.RED&&(F===i.FLOAT&&(V=i.R32F),F===i.HALF_FLOAT&&(V=i.R16F),F===i.UNSIGNED_BYTE&&(V=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.R8UI),F===i.UNSIGNED_SHORT&&(V=i.R16UI),F===i.UNSIGNED_INT&&(V=i.R32UI),F===i.BYTE&&(V=i.R8I),F===i.SHORT&&(V=i.R16I),F===i.INT&&(V=i.R32I)),g===i.RG&&(F===i.FLOAT&&(V=i.RG32F),F===i.HALF_FLOAT&&(V=i.RG16F),F===i.UNSIGNED_BYTE&&(V=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RG8UI),F===i.UNSIGNED_SHORT&&(V=i.RG16UI),F===i.UNSIGNED_INT&&(V=i.RG32UI),F===i.BYTE&&(V=i.RG8I),F===i.SHORT&&(V=i.RG16I),F===i.INT&&(V=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGB8UI),F===i.UNSIGNED_SHORT&&(V=i.RGB16UI),F===i.UNSIGNED_INT&&(V=i.RGB32UI),F===i.BYTE&&(V=i.RGB8I),F===i.SHORT&&(V=i.RGB16I),F===i.INT&&(V=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),F===i.UNSIGNED_INT&&(V=i.RGBA32UI),F===i.BYTE&&(V=i.RGBA8I),F===i.SHORT&&(V=i.RGBA16I),F===i.INT&&(V=i.RGBA32I)),g===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),g===i.RGBA){const _e=Y?Or:Ge.getTransfer(G);F===i.FLOAT&&(V=i.RGBA32F),F===i.HALF_FLOAT&&(V=i.RGBA16F),F===i.UNSIGNED_BYTE&&(V=_e===$e?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(y,g){let F;return y?g===null||g===Hn||g===Vi?F=i.DEPTH24_STENCIL8:g===sn?F=i.DEPTH32F_STENCIL8:g===Hi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hn||g===Vi?F=i.DEPTH_COMPONENT24:g===sn?F=i.DEPTH_COMPONENT32F:g===Hi&&(F=i.DEPTH_COMPONENT16),F}function U(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Wt&&y.minFilter!==Kt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function P(y){const g=y.target;g.removeEventListener("dispose",P),I(g),g.isVideoTexture&&u.delete(g)}function R(y){const g=y.target;g.removeEventListener("dispose",R),x(g)}function I(y){const g=n.get(y);if(g.__webglInit===void 0)return;const F=y.source,G=d.get(F);if(G){const Y=G[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(y),Object.keys(G).length===0&&d.delete(F)}n.remove(y)}function S(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const F=y.source,G=d.get(F);delete G[g.__cacheKey],a.memory.textures--}function x(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let Y=0;Y<g.__webglFramebuffer[G].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[G][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let G=0,Y=F.length;G<Y;G++){const V=n.get(F[G]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(y)}let C=0;function k(){C=0}function z(){const y=C;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),C+=1,y}function K(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Z(y,g){const F=n.get(y);if(y.isVideoTexture&&ye(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const G=y.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,y,g);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function X(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){xe(F,y,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function j(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){xe(F,y,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function H(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){ce(F,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const oe={[Fr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Xs]:i.MIRRORED_REPEAT},he={[Wt]:i.NEAREST,[Pl]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},Se={[Nl]:i.NEVER,[Vl]:i.ALWAYS,[Fl]:i.LESS,[Mc]:i.LEQUAL,[Ol]:i.EQUAL,[Hl]:i.GEQUAL,[Bl]:i.GREATER,[zl]:i.NOTEQUAL};function Oe(y,g){if(g.type===sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Kt||g.magFilter===$r||g.magFilter===er||g.magFilter===Bn||g.minFilter===Kt||g.minFilter===$r||g.minFilter===er||g.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,oe[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,oe[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,oe[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,he[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Wt||g.minFilter!==er&&g.minFilter!==Bn||g.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function je(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",P));const G=g.source;let Y=d.get(G);Y===void 0&&(Y={},d.set(G,Y));const V=K(g);if(V!==y.__cacheKey){Y[V]===void 0&&(Y[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Y[V].usedTimes++;const _e=Y[y.__cacheKey];_e!==void 0&&(Y[y.__cacheKey].usedTimes--,_e.usedTimes===0&&S(g)),y.__cacheKey=V,y.__webglTexture=Y[V].texture}return F}function W(y,g,F){return Math.floor(Math.floor(y/F)/g)}function te(y,g,F,G){const V=y.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,G,g.data);else{V.sort(($,le)=>$.start-le.start);let _e=0;for(let $=1;$<V.length;$++){const le=V[_e],Ae=V[$],be=le.start+le.count,ne=W(Ae.start,g.width,4),Pe=W(le.start,g.width,4);Ae.start<=be+1&&ne===Pe&&W(Ae.start+Ae.count-1,g.width,4)===ne?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++_e,V[_e]=Ae)}V.length=_e+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),me=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let $=0,le=V.length;$<le;$++){const Ae=V[$],be=Math.floor(Ae.start/4),ne=Math.ceil(Ae.count/4),Pe=be%g.width,w=Math.floor(be/g.width),se=ne,J=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,w),t.texSubImage2D(i.TEXTURE_2D,0,Pe,w,se,J,F,G,g.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,me),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function xe(y,g,F){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);const Y=je(y,g),V=g.source;t.bindTexture(G,y.__webglTexture,i.TEXTURE0+F);const _e=n.get(V);if(V.version!==_e.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const re=Ge.getPrimaries(Ge.workingColorSpace),me=g.colorSpace===vn?null:Ge.getPrimaries(g.colorSpace),ve=g.colorSpace===vn||re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let $=M(g.image,!1,r.maxTextureSize);$=Ue(g,$);const le=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let be=T(g.internalFormat,le,Ae,g.colorSpace,g.isVideoTexture);Oe(G,g);let ne;const Pe=g.mipmaps,w=g.isVideoTexture!==!0,se=_e.__version===void 0||Y===!0,J=V.dataReady,fe=U(g,$);if(g.isDepthTexture)be=E(g.format===ki,g.type),se&&(w?t.texStorage2D(i.TEXTURE_2D,1,be,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,be,$.width,$.height,0,le,Ae,null));else if(g.isDataTexture)if(Pe.length>0){w&&se&&t.texStorage2D(i.TEXTURE_2D,fe,be,Pe[0].width,Pe[0].height);for(let Q=0,q=Pe.length;Q<q;Q++)ne=Pe[Q],w?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ne.width,ne.height,le,Ae,ne.data):t.texImage2D(i.TEXTURE_2D,Q,be,ne.width,ne.height,0,le,Ae,ne.data);g.generateMipmaps=!1}else w?(se&&t.texStorage2D(i.TEXTURE_2D,fe,be,$.width,$.height),J&&te(g,$,le,Ae)):t.texImage2D(i.TEXTURE_2D,0,be,$.width,$.height,0,le,Ae,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){w&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,be,Pe[0].width,Pe[0].height,$.depth);for(let Q=0,q=Pe.length;Q<q;Q++)if(ne=Pe[Q],g.format!==kt)if(le!==null)if(w){if(J)if(g.layerUpdates.size>0){const de=Co(ne.width,ne.height,g.format,g.type);for(const De of g.layerUpdates){const et=ne.data.subarray(De*de/ne.data.BYTES_PER_ELEMENT,(De+1)*de/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,De,ne.width,ne.height,1,le,et)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,$.depth,le,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,be,ne.width,ne.height,$.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,$.depth,le,Ae,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,be,ne.width,ne.height,$.depth,0,le,Ae,ne.data)}else{w&&se&&t.texStorage2D(i.TEXTURE_2D,fe,be,Pe[0].width,Pe[0].height);for(let Q=0,q=Pe.length;Q<q;Q++)ne=Pe[Q],g.format!==kt?le!==null?w?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ne.width,ne.height,le,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,be,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ne.width,ne.height,le,Ae,ne.data):t.texImage2D(i.TEXTURE_2D,Q,be,ne.width,ne.height,0,le,Ae,ne.data)}else if(g.isDataArrayTexture)if(w){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,be,$.width,$.height,$.depth),J)if(g.layerUpdates.size>0){const Q=Co($.width,$.height,g.format,g.type);for(const q of g.layerUpdates){const de=$.data.subarray(q*Q/$.data.BYTES_PER_ELEMENT,(q+1)*Q/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,$.width,$.height,1,le,Ae,de)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,le,Ae,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,$.width,$.height,$.depth,0,le,Ae,$.data);else if(g.isData3DTexture)w?(se&&t.texStorage3D(i.TEXTURE_3D,fe,be,$.width,$.height,$.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,le,Ae,$.data)):t.texImage3D(i.TEXTURE_3D,0,be,$.width,$.height,$.depth,0,le,Ae,$.data);else if(g.isFramebufferTexture){if(se)if(w)t.texStorage2D(i.TEXTURE_2D,fe,be,$.width,$.height);else{let Q=$.width,q=$.height;for(let de=0;de<fe;de++)t.texImage2D(i.TEXTURE_2D,de,be,Q,q,0,le,Ae,null),Q>>=1,q>>=1}}else if(Pe.length>0){if(w&&se){const Q=ut(Pe[0]);t.texStorage2D(i.TEXTURE_2D,fe,be,Q.width,Q.height)}for(let Q=0,q=Pe.length;Q<q;Q++)ne=Pe[Q],w?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le,Ae,ne):t.texImage2D(i.TEXTURE_2D,Q,be,le,Ae,ne);g.generateMipmaps=!1}else if(w){if(se){const Q=ut($);t.texStorage2D(i.TEXTURE_2D,fe,be,Q.width,Q.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ae,$)}else t.texImage2D(i.TEXTURE_2D,0,be,le,Ae,$);p(g)&&h(G),_e.__version=V.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ce(y,g,F){if(g.image.length!==6)return;const G=je(y,g),Y=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const V=n.get(Y);if(Y.version!==V.__version||G===!0){t.activeTexture(i.TEXTURE0+F);const _e=Ge.getPrimaries(Ge.workingColorSpace),re=g.colorSpace===vn?null:Ge.getPrimaries(g.colorSpace),me=g.colorSpace===vn||_e===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,$=g.image[0]&&g.image[0].isDataTexture,le=[];for(let q=0;q<6;q++)!ve&&!$?le[q]=M(g.image[q],!0,r.maxCubemapSize):le[q]=$?g.image[q].image:g.image[q],le[q]=Ue(g,le[q]);const Ae=le[0],be=s.convert(g.format,g.colorSpace),ne=s.convert(g.type),Pe=T(g.internalFormat,be,ne,g.colorSpace),w=g.isVideoTexture!==!0,se=V.__version===void 0||G===!0,J=Y.dataReady;let fe=U(g,Ae);Oe(i.TEXTURE_CUBE_MAP,g);let Q;if(ve){w&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Pe,Ae.width,Ae.height);for(let q=0;q<6;q++){Q=le[q].mipmaps;for(let de=0;de<Q.length;de++){const De=Q[de];g.format!==kt?be!==null?w?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,Pe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,De.width,De.height,be,ne,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,Pe,De.width,De.height,0,be,ne,De.data)}}}else{if(Q=g.mipmaps,w&&se){Q.length>0&&fe++;const q=ut(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Pe,q.width,q.height)}for(let q=0;q<6;q++)if($){w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,le[q].width,le[q].height,be,ne,le[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Pe,le[q].width,le[q].height,0,be,ne,le[q].data);for(let de=0;de<Q.length;de++){const et=Q[de].image[q].image;w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,et.width,et.height,be,ne,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,Pe,et.width,et.height,0,be,ne,et.data)}}else{w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,be,ne,le[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Pe,be,ne,le[q]);for(let de=0;de<Q.length;de++){const De=Q[de];w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,be,ne,De.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,Pe,be,ne,De.image[q])}}}p(g)&&h(i.TEXTURE_CUBE_MAP),V.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Me(y,g,F,G,Y,V){const _e=s.convert(F.format,F.colorSpace),re=s.convert(F.type),me=T(F.internalFormat,_e,re,F.colorSpace),ve=n.get(g),$=n.get(F);if($.__renderTarget=g,!ve.__hasExternalTextures){const le=Math.max(1,g.width>>V),Ae=Math.max(1,g.height>>V);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,V,me,le,Ae,g.depth,0,_e,re,null):t.texImage2D(Y,V,me,le,Ae,0,_e,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Y,$.__webglTexture,0,ge(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Y,$.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(y,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const G=g.depthTexture,Y=G&&G.isDepthTexture?G.type:null,V=E(g.stencilBuffer,Y),_e=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=ge(g);He(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,V,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,V,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,V,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,y)}else{const G=g.textures;for(let Y=0;Y<G.length;Y++){const V=G[Y],_e=s.convert(V.format,V.colorSpace),re=s.convert(V.type),me=T(V.internalFormat,_e,re,V.colorSpace),ve=ge(g);F&&He(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,me,g.width,g.height):He(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,me,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,me,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(g.depthTexture);G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const Y=G.__webglTexture,V=ge(g);if(g.depthTexture.format===Gi)He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(g.depthTexture.format===ki)He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function it(y){const g=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=G}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const G=y.texture.mipmaps;G&&G.length>0?we(g.__webglFramebuffer[0],y):we(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),ke(g.__webglDepthbuffer[G],y,!1);else{const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,V)}}else{const G=y.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ke(g.__webglDepthbuffer,y,!1);else{const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(y,g,F){const G=n.get(y);g!==void 0&&Me(G.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&it(y)}function We(y){const g=y.texture,F=n.get(y),G=n.get(g);y.addEventListener("dispose",R);const Y=y.textures,V=y.isWebGLCubeRenderTarget===!0,_e=Y.length>1;if(_e||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let me=0;me<g.mipmaps.length;me++)F.__webglFramebuffer[re][me]=i.createFramebuffer()}else F.__webglFramebuffer[re]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)F.__webglFramebuffer[re]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(_e)for(let re=0,me=Y.length;re<me;re++){const ve=n.get(Y[re]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&He(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<Y.length;re++){const me=Y[re];F.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const ve=s.convert(me.format,me.colorSpace),$=s.convert(me.type),le=T(me.internalFormat,ve,$,me.colorSpace,y.isXRRenderTarget===!0),Ae=ge(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,le,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,F.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,g);for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)Me(F.__webglFramebuffer[re][me],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,me);else Me(F.__webglFramebuffer[re],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(g)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,me=Y.length;re<me;re++){const ve=Y[re],$=n.get(ve);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),Oe(i.TEXTURE_2D,ve),Me(F.__webglFramebuffer,y,ve,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),p(ve)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(re=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,G.__webglTexture),Oe(re,g),g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)Me(F.__webglFramebuffer[me],y,g,i.COLOR_ATTACHMENT0,re,me);else Me(F.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,re,0);p(g)&&h(re),t.unbindTexture()}y.depthBuffer&&it(y)}function b(y){const g=y.textures;for(let F=0,G=g.length;F<G;F++){const Y=g[F];if(p(Y)){const V=A(y),_e=n.get(Y).__webglTexture;t.bindTexture(V,_e),h(V),t.unbindTexture()}}}const vt=[],Xe=[];function Qe(y){if(y.samples>0){if(He(y)===!1){const g=y.textures,F=y.width,G=y.height;let Y=i.COLOR_BUFFER_BIT;const V=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(y),re=g.length>1;if(re)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const me=y.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);const $=n.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,Y,i.NEAREST),c===!0&&(vt.length=0,Xe.length=0,vt.push(i.COLOR_ATTACHMENT0+ve),y.depthBuffer&&y.resolveDepthBuffer===!1&&(vt.push(V),Xe.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);const $=n.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,$,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ge(y){return Math.min(r.maxSamples,y.samples)}function He(y){const g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ye(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function Ue(y,g){const F=y.colorSpace,G=y.format,Y=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==Mi&&F!==vn&&(Ge.getTransfer(F)===$e?(G!==kt||Y!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function ut(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=rt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=He}function Tm(i,e){function t(n,r=vn){let s;const a=Ge.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.BYTE;if(n===dc)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Yi)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===kt)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===vc)return i.RG;if(n===Ra)return i.RG_INTEGER;if(n===Ca)return i.RGBA_INTEGER;if(n===Ar||n===wr||n===Rr||n===Cr)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ar)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ar)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qs||n===Ys||n===Ks||n===Zs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ys)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ks)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$s||n===js||n===Js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$s||n===js)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Js)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===ca||n===la||n===ua||n===ha||n===fa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ta)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===na)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ia)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pr||n===da||n===pa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Pr)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===ma||n===ga||n===_a)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Pr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new _t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:bm,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rm extends Ei{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,_=null;const M=new wm,p=t.getContextAttributes();let h=null,A=null;const T=[],E=[],U=new Fe;let P=null;const R=new Ft;R.viewport=new ct;const I=new Ft;I.viewport=new ct;const S=[R,I],x=new qu;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=T[W];return te===void 0&&(te=new _s,T[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=T[W];return te===void 0&&(te=new _s,T[W]=te),te.getGripSpace()},this.getHand=function(W){let te=T[W];return te===void 0&&(te=new _s,T[W]=te),te.getHandSpace()};function z(W){const te=E.indexOf(W.inputSource);if(te===-1)return;const xe=T[te];xe!==void 0&&(xe.update(W.inputSource,W.frame,l||a),xe.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Z);for(let W=0;W<T.length;W++){const te=E[W];te!==null&&(E[W]=null,T[W].disconnect(te))}C=null,k=null,M.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,A=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ce=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=p.stencil?ki:Gi,ce=p.stencil?Vi:Hn);const ke={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Vn(d.textureWidth,d.textureHeight,{format:kt,type:ln,depthTexture:new Uc(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Vn(m.framebufferWidth,m.framebufferHeight,{format:kt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(W){for(let te=0;te<W.removed.length;te++){const xe=W.removed[te],ce=E.indexOf(xe);ce>=0&&(E[ce]=null,T[ce].disconnect(xe))}for(let te=0;te<W.added.length;te++){const xe=W.added[te];let ce=E.indexOf(xe);if(ce===-1){for(let ke=0;ke<T.length;ke++)if(ke>=E.length){E.push(xe),ce=ke;break}else if(E[ke]===null){E[ke]=xe,ce=ke;break}if(ce===-1)break}const Me=T[ce];Me&&Me.connect(xe)}}const X=new N,j=new N;function H(W,te,xe){X.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);const ce=X.distanceTo(j),Me=te.projectionMatrix.elements,ke=xe.projectionMatrix.elements,we=Me[14]/(Me[10]-1),it=Me[14]/(Me[10]+1),rt=(Me[9]+1)/Me[5],We=(Me[9]-1)/Me[5],b=(Me[8]-1)/Me[0],vt=(ke[8]+1)/ke[0],Xe=we*b,Qe=we*vt,ge=ce/(-b+vt),He=ge*-b;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(He),W.translateZ(ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Me[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ye=we+ge,Ue=it+ge,ut=Xe-He,y=Qe+(ce-He),g=rt*it/Ue*ye,F=We*it/Ue*ye;W.projectionMatrix.makePerspective(ut,y,g,F,ye,Ue),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,xe=W.far;M.texture!==null&&(M.depthNear>0&&(te=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),x.near=I.near=R.near=te,x.far=I.far=R.far=xe,(C!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,k=x.far),R.layers.mask=W.layers.mask|2,I.layers.mask=W.layers.mask|4,x.layers.mask=R.layers.mask|I.layers.mask;const ce=W.parent,Me=x.cameras;oe(x,ce);for(let ke=0;ke<Me.length;ke++)oe(Me[ke],ce);Me.length===2?H(x,R,I):x.projectionMatrix.copy(R.projectionMatrix),he(W,x,ce)};function he(W,te,xe){xe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(xe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let Se=null;function Oe(W,te){if(u=te.getViewerPose(l||a),_=te,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let ce=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let we=0;we<xe.length;we++){const it=xe[we];let rt=null;if(m!==null)rt=m.getViewport(it);else{const b=f.getViewSubImage(d,it);rt=b.viewport,we===0&&(e.setRenderTargetTextures(A,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(A))}let We=S[we];We===void 0&&(We=new Ft,We.layers.enable(we),We.viewport=new ct,S[we]=We),We.matrix.fromArray(it.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(it.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(rt.x,rt.y,rt.width,rt.height),we===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(We)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const we=f.getDepthInformation(xe[0]);we&&we.isValid&&we.texture&&M.init(e,we,r.renderState)}}for(let xe=0;xe<T.length;xe++){const ce=E[xe],Me=T[xe];ce!==null&&Me!==void 0&&Me.update(ce,te,l||a)}Se&&Se(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const je=new Ic;je.setAnimationLoop(Oe),this.setAnimationLoop=function(W){Se=W},this.dispose=function(){}}}const Pn=new un,Cm=new at;function Pm(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Ac(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,T,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,A,T):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===At&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===At&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=e.get(h),T=A.envMap,E=A.envMapRotation;T&&(p.envMap.value=T,Pn.copy(E),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),p.envMapRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(Pn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,A,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=T*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===At&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const A=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Dm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const E=T.program;n.uniformBlockBinding(A,E)}function l(A,T){let E=r[A.id];E===void 0&&(_(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",p));const U=T.program;n.updateUBOMapping(A,U);const P=e.render.frame;s[A.id]!==P&&(d(A),s[A.id]=P)}function u(A){const T=f();A.__bindingPointIndex=T;const E=i.createBuffer(),U=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],E=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let P=0,R=E.length;P<R;P++){const I=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,x=I.length;S<x;S++){const C=I[S];if(m(C,P,S,U)===!0){const k=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let Z=0;Z<z.length;Z++){const X=z[Z],j=M(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+K,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,K),K+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,E,U){const P=A.value,R=T+"_"+E;if(U[R]===void 0)return typeof P=="number"||typeof P=="boolean"?U[R]=P:U[R]=P.clone(),!0;{const I=U[R];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return U[R]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function _(A){const T=A.uniforms;let E=0;const U=16;for(let R=0,I=T.length;R<I;R++){const S=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,C=S.length;x<C;x++){const k=S[x],z=Array.isArray(k.value)?k.value:[k.value];for(let K=0,Z=z.length;K<Z;K++){const X=z[K],j=M(X),H=E%U,oe=H%j.boundary,he=H+oe;E+=oe,he!==0&&U-he<j.storage&&(E+=U-he),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=j.storage}}}const P=E%U;return P>0&&(E+=U-P),A.__size=E,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Lm{constructor(e={}){const{canvas:t=ru(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),M=new Int32Array(4);let p=null,h=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=Tt;let P=0,R=0,I=null,S=-1,x=null;const C=new ct,k=new ct;let z=null;const K=new Ne(0);let Z=0,X=t.width,j=t.height,H=1,oe=null,he=null;const Se=new ct(0,0,X,j),Oe=new ct(0,0,X,j);let je=!1;const W=new Dc;let te=!1,xe=!1;const ce=new at,Me=new at,ke=new N,we=new ct,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function We(){return I===null?H:1}let b=n;function vt(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",q,!1),b===null){const D="webgl2";if(b=vt(D,v),b===null)throw vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Xe,Qe,ge,He,ye,Ue,ut,y,g,F,G,Y,V,_e,re,me,ve,$,le,Ae,be,ne,Pe,w;function se(){Xe=new Gd(b),Xe.init(),ne=new Tm(b,Xe),Qe=new Nd(b,Xe,e,ne),ge=new Em(b,Xe),Qe.reverseDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),He=new Xd(b),ye=new lm,Ue=new ym(b,Xe,ge,ye,Qe,ne,He),ut=new Od(E),y=new Vd(E),g=new $u(b),Pe=new Ud(b,g),F=new kd(b,g,He,Pe),G=new Yd(b,F,g,He),le=new qd(b,Qe,Ue),me=new Fd(ye),Y=new cm(E,ut,y,Xe,Qe,Pe,me),V=new Pm(E,ye),_e=new hm,re=new _m(Xe),$=new Ld(E,ut,y,ge,G,m,c),ve=new Mm(E,G,Qe),w=new Dm(b,He,Qe,ge),Ae=new Id(b,Xe,He),be=new Wd(b,Xe,He),He.programs=Y.programs,E.capabilities=Qe,E.extensions=Xe,E.properties=ye,E.renderLists=_e,E.shadowMap=ve,E.state=ge,E.info=He}se();const J=new Rm(E,b);this.xr=J,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=Xe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Xe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(X,j,!1))},this.getSize=function(v){return v.set(X,j)},this.setSize=function(v,D,O=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,j=D,t.width=Math.floor(v*H),t.height=Math.floor(D*H),O===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(X*H,j*H).floor()},this.setDrawingBufferSize=function(v,D,O){X=v,j=D,H=O,t.width=Math.floor(v*O),t.height=Math.floor(D*O),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,D,O,B){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,D,O,B),ge.viewport(C.copy(Se).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Oe)},this.setScissor=function(v,D,O,B){v.isVector4?Oe.set(v.x,v.y,v.z,v.w):Oe.set(v,D,O,B),ge.scissor(k.copy(Oe).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(v){ge.setScissorTest(je=v)},this.setOpaqueSort=function(v){oe=v},this.setTransparentSort=function(v){he=v},this.getClearColor=function(v){return v.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,O=!0){let B=0;if(v){let L=!1;if(I!==null){const ee=I.texture.format;L=ee===Ca||ee===Ra||ee===wa}if(L){const ee=I.texture.type,ae=ee===ln||ee===Hn||ee===Hi||ee===Vi||ee===ba||ee===Aa,pe=$.getClearColor(),ue=$.getClearAlpha(),Re=pe.r,Ce=pe.g,Ee=pe.b;ae?(_[0]=Re,_[1]=Ce,_[2]=Ee,_[3]=ue,b.clearBufferuiv(b.COLOR,0,_)):(M[0]=Re,M[1]=Ce,M[2]=Ee,M[3]=ue,b.clearBufferiv(b.COLOR,0,M))}else B|=b.COLOR_BUFFER_BIT}D&&(B|=b.DEPTH_BUFFER_BIT),O&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",q,!1),$.dispose(),_e.dispose(),re.dispose(),ye.dispose(),ut.dispose(),y.dispose(),G.dispose(),Pe.dispose(),w.dispose(),Y.dispose(),J.dispose(),J.removeEventListener("sessionstart",qa),J.removeEventListener("sessionend",Ya),yn.stop()};function fe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const v=He.autoReset,D=ve.enabled,O=ve.autoUpdate,B=ve.needsUpdate,L=ve.type;se(),He.autoReset=v,ve.enabled=D,ve.autoUpdate=O,ve.needsUpdate=B,ve.type=L}function q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function de(v){const D=v.target;D.removeEventListener("dispose",de),De(D)}function De(v){et(v),ye.remove(v)}function et(v){const D=ye.get(v).programs;D!==void 0&&(D.forEach(function(O){Y.releaseProgram(O)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,O,B,L,ee){D===null&&(D=it);const ae=L.isMesh&&L.matrixWorld.determinant()<0,pe=Zc(v,D,O,B,L);ge.setMaterial(B,ae);let ue=O.index,Re=1;if(B.wireframe===!0){if(ue=F.getWireframeAttribute(O),ue===void 0)return;Re=2}const Ce=O.drawRange,Ee=O.attributes.position;let Be=Ce.start*Re,Ze=(Ce.start+Ce.count)*Re;ee!==null&&(Be=Math.max(Be,ee.start*Re),Ze=Math.min(Ze,(ee.start+ee.count)*Re)),ue!==null?(Be=Math.max(Be,0),Ze=Math.min(Ze,ue.count)):Ee!=null&&(Be=Math.max(Be,0),Ze=Math.min(Ze,Ee.count));const ot=Ze-Be;if(ot<0||ot===1/0)return;Pe.setup(L,B,pe,O,ue);let tt,Je=Ae;if(ue!==null&&(tt=g.get(ue),Je=be,Je.setIndex(tt)),L.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*We()),Je.setMode(b.LINES)):Je.setMode(b.TRIANGLES);else if(L.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*We()),L.isLineSegments?Je.setMode(b.LINES):L.isLineLoop?Je.setMode(b.LINE_LOOP):Je.setMode(b.LINE_STRIP)}else L.isPoints?Je.setMode(b.POINTS):L.isSprite&&Je.setMode(b.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Je.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Te=L._multiDrawStarts,st=L._multiDrawCounts,Ve=L._multiDrawCount,wt=ue?g.get(ue).bytesPerElement:1,Wn=ye.get(B).currentProgram.getUniforms();for(let Rt=0;Rt<Ve;Rt++)Wn.setValue(b,"_gl_DrawID",Rt),Je.render(Te[Rt]/wt,st[Rt])}else if(L.isInstancedMesh)Je.renderInstances(Be,ot,L.count);else if(O.isInstancedBufferGeometry){const Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,st=Math.min(O.instanceCount,Te);Je.renderInstances(Be,ot,st)}else Je.render(Be,ot)};function Ye(v,D,O){v.transparent===!0&&v.side===Yt&&v.forceSinglePass===!1?(v.side=At,v.needsUpdate=!0,Qi(v,D,O),v.side=En,v.needsUpdate=!0,Qi(v,D,O),v.side=Yt):Qi(v,D,O)}this.compile=function(v,D,O=null){O===null&&(O=v),h=re.get(O),h.init(D),T.push(h),O.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),v!==O&&v.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();const B=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){const pe=ee[ae];Ye(pe,O,L),B.add(pe)}else Ye(ee,O,L),B.add(ee)}),h=T.pop(),B},this.compileAsync=function(v,D,O=null){const B=this.compile(v,D,O);return new Promise(L=>{function ee(){if(B.forEach(function(ae){ye.get(ae).currentProgram.isReady()&&B.delete(ae)}),B.size===0){L(v);return}setTimeout(ee,10)}Xe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Bt=null;function jt(v){Bt&&Bt(v)}function qa(){yn.stop()}function Ya(){yn.start()}const yn=new Ic;yn.setAnimationLoop(jt),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(v){Bt=v,J.setAnimationLoop(v),v===null?yn.stop():yn.start()},J.addEventListener("sessionstart",qa),J.addEventListener("sessionend",Ya),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(D),D=J.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,D,I),h=re.get(v,T.length),h.init(D),T.push(h),Me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(Me),xe=this.localClippingEnabled,te=me.init(this.clippingPlanes,xe),p=_e.get(v,A.length),p.init(),A.push(p),J.enabled===!0&&J.isPresenting===!0){const ee=E.xr.getDepthSensingMesh();ee!==null&&Kr(ee,D,-1/0,E.sortObjects)}Kr(v,D,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(oe,he),rt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,rt&&$.addToRenderList(p,v),this.info.render.frame++,te===!0&&me.beginShadows();const O=h.state.shadowsArray;ve.render(O,v,D),te===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,L=p.transmissive;if(h.setupLights(),D.isArrayCamera){const ee=D.cameras;if(L.length>0)for(let ae=0,pe=ee.length;ae<pe;ae++){const ue=ee[ae];Za(B,L,v,ue)}rt&&$.render(v);for(let ae=0,pe=ee.length;ae<pe;ae++){const ue=ee[ae];Ka(p,v,ue,ue.viewport)}}else L.length>0&&Za(B,L,v,D),rt&&$.render(v),Ka(p,v,D);I!==null&&R===0&&(Ue.updateMultisampleRenderTarget(I),Ue.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(E,v,D),Pe.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],te===!0&&me.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Kr(v,D,O,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){B&&we.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Me);const ae=G.update(v),pe=v.material;pe.visible&&p.push(v,ae,pe,O,we.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const ae=G.update(v),pe=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),we.copy(v.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),we.copy(ae.boundingSphere.center)),we.applyMatrix4(v.matrixWorld).applyMatrix4(Me)),Array.isArray(pe)){const ue=ae.groups;for(let Re=0,Ce=ue.length;Re<Ce;Re++){const Ee=ue[Re],Be=pe[Ee.materialIndex];Be&&Be.visible&&p.push(v,ae,Be,O,we.z,Ee)}}else pe.visible&&p.push(v,ae,pe,O,we.z,null)}}const ee=v.children;for(let ae=0,pe=ee.length;ae<pe;ae++)Kr(ee[ae],D,O,B)}function Ka(v,D,O,B){const L=v.opaque,ee=v.transmissive,ae=v.transparent;h.setupLightsView(O),te===!0&&me.setGlobalState(E.clippingPlanes,O),B&&ge.viewport(C.copy(B)),L.length>0&&Ji(L,D,O),ee.length>0&&Ji(ee,D,O),ae.length>0&&Ji(ae,D,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Za(v,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new Vn(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Yi:ln,minFilter:Bn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const ee=h.state.transmissionRenderTarget[B.id],ae=B.viewport||C;ee.setSize(ae.z*E.transmissionResolutionScale,ae.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),ue=E.getActiveCubeFace(),Re=E.getActiveMipmapLevel();E.setRenderTarget(ee),E.getClearColor(K),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),rt&&$.render(O);const Ce=E.toneMapping;E.toneMapping=Mn;const Ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),te===!0&&me.setGlobalState(E.clippingPlanes,B),Ji(v,O,B),Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ze=0,ot=D.length;Ze<ot;Ze++){const tt=D[Ze],Je=tt.object,Te=tt.geometry,st=tt.material,Ve=tt.group;if(st.side===Yt&&Je.layers.test(B.layers)){const wt=st.side;st.side=At,st.needsUpdate=!0,$a(Je,O,B,Te,st,Ve),st.side=wt,st.needsUpdate=!0,Be=!0}}Be===!0&&(Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee))}E.setRenderTarget(pe,ue,Re),E.setClearColor(K,Z),Ee!==void 0&&(B.viewport=Ee),E.toneMapping=Ce}function Ji(v,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let L=0,ee=v.length;L<ee;L++){const ae=v[L],pe=ae.object,ue=ae.geometry,Re=ae.group;let Ce=ae.material;Ce.allowOverride===!0&&B!==null&&(Ce=B),pe.layers.test(O.layers)&&$a(pe,D,O,ue,Ce,Re)}}function $a(v,D,O,B,L,ee){v.onBeforeRender(E,D,O,B,L,ee),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(E,D,O,B,v,ee),L.transparent===!0&&L.side===Yt&&L.forceSinglePass===!1?(L.side=At,L.needsUpdate=!0,E.renderBufferDirect(O,D,B,L,v,ee),L.side=En,L.needsUpdate=!0,E.renderBufferDirect(O,D,B,L,v,ee),L.side=Yt):E.renderBufferDirect(O,D,B,L,v,ee),v.onAfterRender(E,D,O,B,L,ee)}function Qi(v,D,O){D.isScene!==!0&&(D=it);const B=ye.get(v),L=h.state.lights,ee=h.state.shadowsArray,ae=L.state.version,pe=Y.getParameters(v,L.state,ee,D,O),ue=Y.getProgramCacheKey(pe);let Re=B.programs;B.environment=v.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(v.isMeshStandardMaterial?y:ut).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",de),Re=new Map,B.programs=Re);let Ce=Re.get(ue);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===ae)return Ja(v,pe),Ce}else pe.uniforms=Y.getUniforms(v),v.onBeforeCompile(pe,E),Ce=Y.acquireProgram(pe,ue),Re.set(ue,Ce),B.uniforms=pe.uniforms;const Ee=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=me.uniform),Ja(v,pe),B.needsLights=jc(v),B.lightsStateVersion=ae,B.needsLights&&(Ee.ambientLightColor.value=L.state.ambient,Ee.lightProbe.value=L.state.probe,Ee.directionalLights.value=L.state.directional,Ee.directionalLightShadows.value=L.state.directionalShadow,Ee.spotLights.value=L.state.spot,Ee.spotLightShadows.value=L.state.spotShadow,Ee.rectAreaLights.value=L.state.rectArea,Ee.ltc_1.value=L.state.rectAreaLTC1,Ee.ltc_2.value=L.state.rectAreaLTC2,Ee.pointLights.value=L.state.point,Ee.pointLightShadows.value=L.state.pointShadow,Ee.hemisphereLights.value=L.state.hemi,Ee.directionalShadowMap.value=L.state.directionalShadowMap,Ee.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ee.spotShadowMap.value=L.state.spotShadowMap,Ee.spotLightMatrix.value=L.state.spotLightMatrix,Ee.spotLightMap.value=L.state.spotLightMap,Ee.pointShadowMap.value=L.state.pointShadowMap,Ee.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function ja(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Dr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Ja(v,D){const O=ye.get(v);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Zc(v,D,O,B,L){D.isScene!==!0&&(D=it),Ue.resetTextureUnits();const ee=D.fog,ae=B.isMeshStandardMaterial?D.environment:null,pe=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Mi,ue=(B.isMeshStandardMaterial?y:ut).get(B.envMap||ae),Re=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!O.morphAttributes.position,Be=!!O.morphAttributes.normal,Ze=!!O.morphAttributes.color;let ot=Mn;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ot=E.toneMapping);const tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=tt!==void 0?tt.length:0,Te=ye.get(B),st=h.state.lights;if(te===!0&&(xe===!0||v!==x)){const xt=v===x&&B.id===S;me.setState(B,v,xt)}let Ve=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==st.state.version||Te.outputColorSpace!==pe||L.isBatchedMesh&&Te.batching===!1||!L.isBatchedMesh&&Te.batching===!0||L.isBatchedMesh&&Te.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Te.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Te.instancing===!1||!L.isInstancedMesh&&Te.instancing===!0||L.isSkinnedMesh&&Te.skinning===!1||!L.isSkinnedMesh&&Te.skinning===!0||L.isInstancedMesh&&Te.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Te.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Te.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Te.instancingMorph===!1&&L.morphTexture!==null||Te.envMap!==ue||B.fog===!0&&Te.fog!==ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==me.numPlanes||Te.numIntersection!==me.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==Ce||Te.morphTargets!==Ee||Te.morphNormals!==Be||Te.morphColors!==Ze||Te.toneMapping!==ot||Te.morphTargetsCount!==Je)&&(Ve=!0):(Ve=!0,Te.__version=B.version);let wt=Te.currentProgram;Ve===!0&&(wt=Qi(B,D,L));let Wn=!1,Rt=!1,wi=!1;const nt=wt.getUniforms(),Ut=Te.uniforms;if(ge.useProgram(wt.program)&&(Wn=!0,Rt=!0,wi=!0),B.id!==S&&(S=B.id,Rt=!0),Wn||x!==v){ge.buffers.depth.getReversed()?(ce.copy(v.projectionMatrix),au(ce),ou(ce),nt.setValue(b,"projectionMatrix",ce)):nt.setValue(b,"projectionMatrix",v.projectionMatrix),nt.setValue(b,"viewMatrix",v.matrixWorldInverse);const yt=nt.map.cameraPosition;yt!==void 0&&yt.setValue(b,ke.setFromMatrixPosition(v.matrixWorld)),Qe.logarithmicDepthBuffer&&nt.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&nt.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Rt=!0,wi=!0)}if(L.isSkinnedMesh){nt.setOptional(b,L,"bindMatrix"),nt.setOptional(b,L,"bindMatrixInverse");const xt=L.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),nt.setValue(b,"boneTexture",xt.boneTexture,Ue))}L.isBatchedMesh&&(nt.setOptional(b,L,"batchingTexture"),nt.setValue(b,"batchingTexture",L._matricesTexture,Ue),nt.setOptional(b,L,"batchingIdTexture"),nt.setValue(b,"batchingIdTexture",L._indirectTexture,Ue),nt.setOptional(b,L,"batchingColorTexture"),L._colorsTexture!==null&&nt.setValue(b,"batchingColorTexture",L._colorsTexture,Ue));const It=O.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&le.update(L,O,wt),(Rt||Te.receiveShadow!==L.receiveShadow)&&(Te.receiveShadow=L.receiveShadow,nt.setValue(b,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ut.envMap.value=ue,Ut.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Ut.envMapIntensity.value=D.environmentIntensity),Rt&&(nt.setValue(b,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&$c(Ut,wi),ee&&B.fog===!0&&V.refreshFogUniforms(Ut,ee),V.refreshMaterialUniforms(Ut,B,H,j,h.state.transmissionRenderTarget[v.id]),Dr.upload(b,ja(Te),Ut,Ue)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Dr.upload(b,ja(Te),Ut,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&nt.setValue(b,"center",L.center),nt.setValue(b,"modelViewMatrix",L.modelViewMatrix),nt.setValue(b,"normalMatrix",L.normalMatrix),nt.setValue(b,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const xt=B.uniformsGroups;for(let yt=0,Zr=xt.length;yt<Zr;yt++){const Tn=xt[yt];w.update(Tn,wt),w.bind(Tn,wt)}}return wt}function $c(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function jc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,D,O){const B=ye.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ye.get(v.texture).__webglTexture=D,ye.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const O=ye.get(v);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const Jc=b.createFramebuffer();this.setRenderTarget=function(v,D=0,O=0){I=v,P=D,R=O;let B=!0,L=null,ee=!1,ae=!1;if(v){const ue=ye.get(v);if(ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)Ue.setupRenderTarget(v);else if(ue.__hasExternalTextures)Ue.rebindTextures(v,ye.get(v.texture).__webglTexture,ye.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ee=v.depthTexture;if(ue.__boundDepthTexture!==Ee){if(Ee!==null&&ye.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ae=!0);const Ce=ye.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?L=Ce[D][O]:L=Ce[D],ee=!0):v.samples>0&&Ue.useMultisampledRTT(v)===!1?L=ye.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?L=Ce[O]:L=Ce,C.copy(v.viewport),k.copy(v.scissor),z=v.scissorTest}else C.copy(Se).multiplyScalar(H).floor(),k.copy(Oe).multiplyScalar(H).floor(),z=je;if(O!==0&&(L=Jc),ge.bindFramebuffer(b.FRAMEBUFFER,L)&&B&&ge.drawBuffers(v,L),ge.viewport(C),ge.scissor(k),ge.setScissorTest(z),ee){const ue=ye.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,O)}else if(ae){const ue=ye.get(v.texture),Re=D;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ue.__webglTexture,O,Re)}else if(v!==null&&O!==0){const ue=ye.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ue.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(v,D,O,B,L,ee,ae,pe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ae!==void 0&&(ue=ue[ae]),ue){ge.bindFramebuffer(b.FRAMEBUFFER,ue);try{const Re=v.textures[pe],Ce=Re.format,Ee=Re.type;if(!Qe.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&O>=0&&O<=v.height-L&&(v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+pe),b.readPixels(D,O,B,L,ne.convert(Ce),ne.convert(Ee),ee))}finally{const Re=I!==null?ye.get(I).__webglFramebuffer:null;ge.bindFramebuffer(b.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,D,O,B,L,ee,ae,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ae!==void 0&&(ue=ue[ae]),ue)if(D>=0&&D<=v.width-B&&O>=0&&O<=v.height-L){ge.bindFramebuffer(b.FRAMEBUFFER,ue);const Re=v.textures[pe],Ce=Re.format,Ee=Re.type;if(!Qe.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Be),b.bufferData(b.PIXEL_PACK_BUFFER,ee.byteLength,b.STREAM_READ),v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+pe),b.readPixels(D,O,B,L,ne.convert(Ce),ne.convert(Ee),0);const Ze=I!==null?ye.get(I).__webglFramebuffer:null;ge.bindFramebuffer(b.FRAMEBUFFER,Ze);const ot=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await su(b,ot,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Be),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ee),b.deleteBuffer(Be),b.deleteSync(ot),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,O=0){const B=Math.pow(2,-O),L=Math.floor(v.image.width*B),ee=Math.floor(v.image.height*B),ae=D!==null?D.x:0,pe=D!==null?D.y:0;Ue.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,ae,pe,L,ee),ge.unbindTexture()};const Qc=b.createFramebuffer(),el=b.createFramebuffer();this.copyTextureToTexture=function(v,D,O=null,B=null,L=0,ee=null){ee===null&&(L!==0?(pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let ae,pe,ue,Re,Ce,Ee,Be,Ze,ot;const tt=v.isCompressedTexture?v.mipmaps[ee]:v.image;if(O!==null)ae=O.max.x-O.min.x,pe=O.max.y-O.min.y,ue=O.isBox3?O.max.z-O.min.z:1,Re=O.min.x,Ce=O.min.y,Ee=O.isBox3?O.min.z:0;else{const It=Math.pow(2,-L);ae=Math.floor(tt.width*It),pe=Math.floor(tt.height*It),v.isDataArrayTexture?ue=tt.depth:v.isData3DTexture?ue=Math.floor(tt.depth*It):ue=1,Re=0,Ce=0,Ee=0}B!==null?(Be=B.x,Ze=B.y,ot=B.z):(Be=0,Ze=0,ot=0);const Je=ne.convert(D.format),Te=ne.convert(D.type);let st;D.isData3DTexture?(Ue.setTexture3D(D,0),st=b.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ue.setTexture2DArray(D,0),st=b.TEXTURE_2D_ARRAY):(Ue.setTexture2D(D,0),st=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const Ve=b.getParameter(b.UNPACK_ROW_LENGTH),wt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Wn=b.getParameter(b.UNPACK_SKIP_PIXELS),Rt=b.getParameter(b.UNPACK_SKIP_ROWS),wi=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,tt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Re),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ce),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ee);const nt=v.isDataArrayTexture||v.isData3DTexture,Ut=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const It=ye.get(v),xt=ye.get(D),yt=ye.get(It.__renderTarget),Zr=ye.get(xt.__renderTarget);ge.bindFramebuffer(b.READ_FRAMEBUFFER,yt.__webglFramebuffer),ge.bindFramebuffer(b.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let Tn=0;Tn<ue;Tn++)nt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ye.get(v).__webglTexture,L,Ee+Tn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ye.get(D).__webglTexture,ee,ot+Tn)),b.blitFramebuffer(Re,Ce,ae,pe,Be,Ze,ae,pe,b.DEPTH_BUFFER_BIT,b.NEAREST);ge.bindFramebuffer(b.READ_FRAMEBUFFER,null),ge.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(L!==0||v.isRenderTargetTexture||ye.has(v)){const It=ye.get(v),xt=ye.get(D);ge.bindFramebuffer(b.READ_FRAMEBUFFER,Qc),ge.bindFramebuffer(b.DRAW_FRAMEBUFFER,el);for(let yt=0;yt<ue;yt++)nt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,It.__webglTexture,L,Ee+yt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,It.__webglTexture,L),Ut?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xt.__webglTexture,ee,ot+yt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,xt.__webglTexture,ee),L!==0?b.blitFramebuffer(Re,Ce,ae,pe,Be,Ze,ae,pe,b.COLOR_BUFFER_BIT,b.NEAREST):Ut?b.copyTexSubImage3D(st,ee,Be,Ze,ot+yt,Re,Ce,ae,pe):b.copyTexSubImage2D(st,ee,Be,Ze,Re,Ce,ae,pe);ge.bindFramebuffer(b.READ_FRAMEBUFFER,null),ge.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ut?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(st,ee,Be,Ze,ot,ae,pe,ue,Je,Te,tt.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(st,ee,Be,Ze,ot,ae,pe,ue,Je,tt.data):b.texSubImage3D(st,ee,Be,Ze,ot,ae,pe,ue,Je,Te,tt):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ee,Be,Ze,ae,pe,Je,Te,tt.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ee,Be,Ze,tt.width,tt.height,Je,tt.data):b.texSubImage2D(b.TEXTURE_2D,ee,Be,Ze,ae,pe,Je,Te,tt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Ve),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Wn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Rt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,wi),ee===0&&D.generateMipmaps&&b.generateMipmap(st),ge.unbindTexture()},this.copyTextureToTexture3D=function(v,D,O=null,B=null,L=0){return pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,O,B,L)},this.initRenderTarget=function(v){ye.get(v).__webglFramebuffer===void 0&&Ue.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ue.setTextureCube(v,0):v.isData3DTexture?Ue.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ue.setTexture2DArray(v,0):Ue.setTexture2D(v,0),ge.unbindTexture()},this.resetState=function(){P=0,R=0,I=null,ge.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const zc=[{id:0,album:"S.K.A.T.E.",title:"Stir",artist:"Rylo Rodriguez",genre:"Hip-Hop/Rap",cover:"/covers/01-skate.jpg",accent:"#c461ff",rgb:"196,97,255",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cf/af/f3/cfaff3c8-9b84-2e0f-63d7-bfa12f5ecc8d/mzaf_14687665660213802930.plus.aac.p.m4a"},{id:1,album:"ICEMAN",title:"Make Them Cry",artist:"Drake",genre:"Hip-Hop/Rap",cover:"/covers/02-iceman.jpg",accent:"#62dfff",rgb:"98,223,255",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/25/bf/fb/25bffb67-3e21-5072-f3d8-e42e85dc6d45/mzaf_9872388116614738549.plus.aac.p.m4a"},{id:2,album:"you seem pretty sad for a girl so in love",title:"drop dead",artist:"Olivia Rodrigo",genre:"Pop",cover:"/covers/03-pretty-sad.jpg",accent:"#ff668f",rgb:"255,102,143",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/89/57/ad/8957adf6-1862-4e4e-bcb5-810d6cf79cc4/mzaf_7752581374620577831.plus.aac.p.m4a"},{id:3,album:"xperiment",title:"wheredoistart",artist:"Ken Carson",genre:"Hip-Hop/Rap",cover:"/covers/04-xperiment.jpg",accent:"#ff493d",rgb:"255,73,61",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/42/c8/93/42c893e2-2087-1130-3b1f-908d22b86264/mzaf_12870525892948573084.plus.aac.p.m4a"},{id:4,album:"HABIBTI",title:"Rusty Intro",artist:"Drake",genre:"R&B/Soul",cover:"/covers/05-habibti.jpg",accent:"#fa9a4b",rgb:"250,154,75",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6a/c8/d6/6ac8d61d-3c7a-c32b-2f48-c4f499a0a55c/mzaf_9256688444839749491.plus.aac.p.m4a"},{id:5,album:"The Great Divide: The Last Of The Bugs",title:"End of August",artist:"Noah Kahan",genre:"Alternative",cover:"/covers/06-great-divide.jpg",accent:"#ffbd5b",rgb:"255,189,91",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/5e/e9/115ee9d4-ed93-b259-3a97-e5a501153074/mzaf_16772257583889191291.plus.aac.p.m4a"},{id:6,album:"CONFESSIONS II",title:"I Feel So Free",artist:"Madonna",genre:"Pop",cover:"/covers/07-confessions.jpg",accent:"#ff4edb",rgb:"255,78,219",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/31/8d/10/318d1098-e403-a15a-761b-7cb70f5e2e06/mzaf_9984440707239979.plus.aac.p.m4a"},{id:7,album:"ML2",title:"Ganja",artist:"YoungBoy Never Broke Again",genre:"Hip-Hop/Rap",cover:"/covers/08-ml2.jpg",accent:"#9aff53",rgb:"154,255,83",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/cb/4c/5dcb4c6e-d38b-a3e4-6921-480c67c9b674/mzaf_3989855488784830993.plus.aac.p.m4a"},{id:8,album:"I’m The Problem",title:"I'm The Problem",artist:"Morgan Wallen",genre:"Country",cover:"/covers/09-problem.jpg",accent:"#f5d375",rgb:"245,211,117",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4d/ca/26/4dca2667-33de-a871-7b3f-4a6b28558109/mzaf_8581491301158910393.plus.aac.p.m4a"},{id:9,album:"Dandelion",title:"Froggy Went A Courtin'",artist:"Ella Langley",genre:"Country",cover:"/covers/10-dandelion.jpg",accent:"#f09b74",rgb:"240,155,116",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/23/28/ee/2328eea5-8cff-9dea-19d6-b835a5c5b4cf/mzaf_14190879362410067925.plus.aac.p.m4a"},{id:10,album:"OCTANE",title:"E85",artist:"Don Toliver",genre:"Hip-Hop/Rap",cover:"/covers/11-octane.jpg",accent:"#55f5cb",rgb:"85,245,203",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/62/22/b1/6222b1cd-8d2b-f310-4529-aed80063d877/mzaf_13809479701156828516.plus.aac.p.m4a"},{id:11,album:"Visitor (Deluxe)",title:"This Is My House",artist:"SIENNA SPIRO",genre:"Pop",cover:"/covers/12-visitor.jpg",accent:"#7995ff",rgb:"121,149,255",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1a/59/d1/1a59d1a9-b3f4-eced-7123-243123411c9c/mzaf_12692764356363571469.plus.aac.p.m4a"},{id:12,album:"Big Mama",title:"Business & Personal",artist:"Latto",genre:"Hip-Hop/Rap",cover:"/covers/13-big-mama.jpg",accent:"#ff815a",rgb:"255,129,90",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a4/0c/17/a40c17c4-3cce-63d0-8fef-d444ee6b36e8/mzaf_9372570659213093434.plus.aac.p.m4a"},{id:13,album:"MAID OF HONOUR",title:"Hoe Phase",artist:"Drake",genre:"Hip-Hop/Rap",cover:"/covers/14-maid-honour.jpg",accent:"#f1b36c",rgb:"241,179,108",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/71/ab/fb71ab58-5268-8baf-f322-08b9b71c7ea2/mzaf_8986505924247142519.plus.aac.p.m4a"},{id:14,album:"KPop Demon Hunters",title:"TAKEDOWN",artist:"TWICE",genre:"K-Pop",cover:"/covers/15-kpop-demon.jpg",accent:"#ff4fa6",rgb:"255,79,166",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cb/b4/69/cbb469fa-3cf8-2ab1-1cfa-03334179f1e9/mzaf_8961451398364908651.plus.aac.p.m4a"},{id:15,album:"BROWN (The Chocolate Edition)",title:"Loose",artist:"Chris Brown",genre:"R&B/Soul",cover:"/covers/16-brown.jpg",accent:"#e89a5b",rgb:"232,154,91",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/52/27/9b/52279bee-7683-1025-fde2-d034968de069/mzaf_15747748208527473742.plus.aac.p.m4a"},{id:16,album:"and all pride aside",title:"all fours",artist:"kwn feat. DESTIN CONRAD",genre:"R&B/Soul",cover:"/covers/17-pride-aside.jpg",accent:"#e86488",rgb:"232,100,136",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b0/50/ed/b050ede0-c249-d627-051b-1a97898ceb43/mzaf_6576934157672305188.plus.aac.p.m4a"},{id:17,album:"PROJECT X",title:"MANNISH",artist:"Key Glock",genre:"Hip-Hop/Rap",cover:"/covers/18-project-x.jpg",accent:"#fdcd42",rgb:"253,205,66",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/61/23/ce/6123cee7-7fc8-6ab9-f212-d3b08cebc25e/mzaf_8397381352056448836.plus.aac.p.m4a"},{id:18,album:"KILL THE KING",title:"A KING'S THOUGHT",artist:"T.I. & Heiress Harris",genre:"Hip-Hop/Rap",cover:"/covers/19-kill-king.jpg",accent:"#e5ac67",rgb:"229,172,103",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/2c/6b/862c6bfe-472f-7cd4-c81c-eac8bb8e5be5/mzaf_2947551846814599150.plus.aac.p.m4a"},{id:19,album:"The Art of Loving",title:"The Art of Loving",artist:"Olivia Dean",genre:"Pop",cover:"/covers/20-art-loving.jpg",accent:"#b88bff",rgb:"184,139,255",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/76/47/30/764730b9-d557-9461-6df5-a39a9fe82bf3/mzaf_17486685486372164821.plus.aac.p.m4a"},{id:20,album:"V8",title:"Friend",artist:"THE 8 & VERNON",genre:"K-Pop",cover:"/covers/21-v8.jpg",accent:"#8ee8ff",rgb:"142,232,255",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6f/b8/44/6fb84456-54ec-cfee-547b-652109f6e835/mzaf_15246872730107055151.plus.aac.p.m4a"},{id:21,album:"安泊猜想",title:"粗糙",artist:"许嵩",genre:"Mandopop",cover:"/covers/22-anbo.jpg",accent:"#8fcfb2",rgb:"143,207,178",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3f/ee/28/3fee28e7-caa9-5df7-7acc-77e21b77fef4/mzaf_13520900451727556354.plus.aac.p.m4a"},{id:22,album:"Lover",title:"I Forgot That You Existed",artist:"Taylor Swift",genre:"Pop",cover:"/covers/23-lover.jpg",accent:"#f6a6c5",rgb:"246,166,197",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9c/e2/97/9ce2976a-b1c8-aa80-3e94-f4562cbad53e/mzaf_11906958635430192793.plus.aac.p.m4a"},{id:23,album:"Ruby",title:"Intro: JANE with FKJ",artist:"JENNIE & FKJ",genre:"Pop",cover:"/covers/24-ruby.jpg",accent:"#ec4f65",rgb:"236,79,101",preview:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a5/eb/fa/a5ebfa19-6417-d65c-14a7-74487c88a342/mzaf_7918904435465310237.plus.aac.p.m4a"}];function za(i){return/^https?:\/\//.test(i)?i:`/music-verse-demo/${i.replace(/^\//,"")}`}const Um=23;function Im(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Hc(i){return((i+180)%360+360)%360-180}function Nm(i,e){const t=Math.cos(Dt.degToRad((i.elevation+e.elevation)*.5)),n=Hc(i.azimuth-e.azimuth)*t;return Math.hypot(n,i.elevation-e.elevation)}function Fm(i){const e=Im((i+1)*2654435761),t=[];function n(r,s,a,o,c,l=!1){const u=[];let f=0;for(;u.length<r&&f<500;){f+=1;const d={azimuth:Hc(s+(e()-.5)*a),elevation:(e()-.5)*o+(e()-.5)*5};if(l&&Math.hypot(d.azimuth,d.elevation)<11)continue;const m=f>300?13:f>180?15:17;if(u.some(h=>Nm(h,d)<m))continue;const _=c[u.length],M=_==="primary"?0:_==="secondary"?1:2,p=_==="primary"?[.86,1.04]:_==="secondary"?[.62,.78]:[.44,.6];u.push({...d,radius:7+M*.8+e()*(1+M*.35),scale:Dt.lerp(p[0],p[1],e()),tilt:(e()-.5)*13,layer:_})}t.push(...u)}return n(8,0,76,60,["primary","primary","secondary","secondary","secondary","distant","distant","distant"],!0),n(5,92,68,64,["primary","secondary","secondary","distant","distant"]),n(5,-92,68,64,["primary","secondary","secondary","distant","distant"]),n(5,180,76,66,["secondary","secondary","distant","distant","distant"]),t}const bi=document.querySelector("#world"),pt=new Lm({canvas:bi,antialias:!0,powerPreference:"high-performance"});pt.setPixelRatio(Math.min(window.devicePixelRatio,1.75));pt.setSize(window.innerWidth,window.innerHeight);pt.outputColorSpace=Tt;pt.toneMapping=uc;pt.toneMappingExposure=1.1;pt.autoClear=!1;pt.setClearColor("#05020d",1);const ji=new Rc;ji.fog=new Na("#090316",.035);const Gn=new Ft(66,window.innerWidth/window.innerHeight,.1,100);Gn.position.set(0,0,.01);const kn=new zn;ji.add(kn);const Hr=new zn;kn.add(Hr);const Om=new Wu,Bm=new Yu,ec=new Ku,zm=new Fe(0,0),tc=new N,nc=new N,ws=new N,ic=new N,Ai=[],Ha=[],Vc=new Rc,Hm=new Ia,Va=[new Ne,new Ne,new Ne],Gc=[new Ne,new Ne,new Ne],Vr={uTime:{value:0},uAmplitude:{value:1.05},uColorStops:{value:Va},uResolution:{value:new Fe(window.innerWidth,window.innerHeight)},uBlend:{value:.48}},Vm=new hn({uniforms:Vr,transparent:!0,depthTest:!1,depthWrite:!1,blending:gi,vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    precision highp float;

    uniform float uTime;
    uniform float uAmplitude;
    uniform vec3 uColorStops[3];
    uniform vec2 uResolution;
    uniform float uBlend;
    varying vec2 vUv;

    vec3 permute(vec3 x) {
      return mod(((x * 34.0) + 1.0) * x, 289.0);
    }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    vec3 colorRamp(float factor) {
      vec3 first = mix(uColorStops[0], uColorStops[1], smoothstep(0.0, 0.55, factor));
      vec3 second = mix(uColorStops[1], uColorStops[2], smoothstep(0.45, 1.0, factor));
      return mix(first, second, smoothstep(0.36, 0.72, factor));
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / max(uResolution.y, 1.0);
      float t = uTime;
      float horizon = 0.54 + snoise(vec2(uv.x * 1.85 + t * 0.035, t * 0.12)) * 0.15 * uAmplitude;
      float curtain = smoothstep(0.48 * uBlend, 0.0, abs(uv.y - horizon));
      float lowerFade = smoothstep(0.04, 0.32, uv.y);
      float upperFade = 1.0 - smoothstep(0.88, 1.0, uv.y);
      float rays = snoise(vec2(uv.x * 9.0 * aspect + t * 0.10, uv.y * 2.2 - t * 0.04));
      rays = pow(max(rays * 0.5 + 0.5, 0.0), 2.25);
      float secondary = smoothstep(0.38, 0.0, abs(uv.y - horizon - 0.16)) * 0.22;
      float intensity = (curtain * (0.24 + rays * 0.62) + secondary) * lowerFade * upperFade;
      intensity *= 0.36;
      vec3 auroraColor = colorRamp(clamp(uv.x + snoise(vec2(uv.x * 1.4, t * 0.05)) * 0.08, 0.0, 1.0));
      vec2 centered = uv - 0.5;
      float vignette = 1.0 - smoothstep(0.56, 0.92, dot(centered, centered) * 1.65);
      vec3 color = auroraColor * intensity * vignette;
      gl_FragColor = vec4(color, intensity * 0.82 * vignette);
    }
  `});Vc.add(new bt(new Sn(2,2),Vm));let Zt=zc[0],Lr=null,Gr=0,Ur=!1,kc=!1,Ni=!1,Rs=0,Cs=0,Ga=0,zi=0,Yr=!1,Ir={x:0,y:0},Nn=!1,Nr=1,Wc=performance.now(),rc=!1;const qe={entry:document.querySelector("#entry"),enterButton:document.querySelector("#enterButton"),reticle:document.querySelector("#reticle"),targetCopy:document.querySelector("#targetCopy"),targetTitle:document.querySelector("#targetTitle"),targetArtist:document.querySelector("#targetArtist"),nowCover:document.querySelector("#nowCover"),nowTitle:document.querySelector("#nowTitle"),nowArtist:document.querySelector("#nowArtist"),pauseButton:document.querySelector("#pauseButton"),backButton:document.querySelector("#backButton"),motionButton:document.querySelector("#motionButton"),journey:document.querySelector("#journey"),warp:document.querySelector("#warp"),transitionCopy:document.querySelector("#transitionCopy"),hint:document.querySelector("#hint")},qi=new Audio,ka=new Audio;qi.preload=ka.preload="metadata";qi.crossOrigin=ka.crossOrigin="anonymous";let Fn=qi;const Ps=new Map,Ea=document.createElement("canvas"),Ds=Ea.getContext("2d",{willReadFrequently:!0}),fi=(i,e,t)=>Math.min(t,Math.max(e,i));function sc(i,e,t){i/=255,e/=255,t/=255;const n=Math.max(i,e,t),r=Math.min(i,e,t);let s=0,a=0;const o=(n+r)/2;if(n!==r){const c=n-r;switch(a=o>.5?c/(2-n-r):c/(n+r),n){case i:s=(e-t)/c+(e<t?6:0);break;case e:s=(t-i)/c+2;break;default:s=(i-e)/c+4;break}s/=6}return{h:s,s:a,l:o}}function Ls(i,e){const t=Math.abs(i-e);return Math.min(t,1-t)}function kr(i){const e=new Ne(i.accent);return[e.clone().offsetHSL(-.1,.08,.08),e.clone().offsetHSL(.03,.14,.18),e.clone().offsetHSL(.16,.1,.04)]}function Us(i,e){const{h:t,s:n,l:r}=i,s=e===1?.78:e===0?.66:.7,a=e===1?.66:e===0?.5:.56,o=new Ne;return o.setHSL(t,fi(n*.62+s*.38,.46,.88),fi(r*.36+a*.64,.4,.72)),o}function Gm(i,e){if(!i.length)return kr(e);const t=i[0],n=i.find(s=>Ls(s.h,t.h)>.08)||i[1]||{...t,h:(t.h+.1)%1,s:fi(t.s*1.08,.35,.9),l:fi(t.l+.08,.2,.78)},r=i.find(s=>Ls(s.h,t.h)>.18&&Ls(s.h,n.h)>.08)||i[2]||{...t,h:(t.h+.82)%1,s:fi(t.s*.95,.35,.88),l:fi(t.l-.02,.2,.72)};return[Us(n,0),Us(t,1),Us(r,2)]}function km(i){if(Ps.has(i.cover))return Ps.get(i.cover);const e=new Promise(t=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>{try{Ea.width=56,Ea.height=56,Ds.clearRect(0,0,56,56),Ds.drawImage(n,0,0,56,56);const s=Ds.getImageData(0,0,56,56).data,a=Array.from({length:36},()=>({r:0,g:0,b:0,weight:0,count:0}));for(let c=0;c<s.length;c+=4){if(s[c+3]<200)continue;const u=s[c],f=s[c+1],d=s[c+2],m=sc(u,f,d);if(m.l<.07||m.l>.92||m.s<.1)continue;const _=1-Math.min(1,Math.abs(m.l-.56)/.56),p=Math.pow(m.s,1.35)*(.55+_)*(m.l>.22&&m.l<.8?1.25:.75),h=a[Math.floor(m.h*a.length)%a.length];h.r+=u*p,h.g+=f*p,h.b+=d*p,h.weight+=p,h.count+=1}const o=a.filter(c=>c.weight>0).map(c=>{const l=c.r/c.weight,u=c.g/c.weight,f=c.b/c.weight,d=sc(l,u,f),m=1-Math.min(1,Math.abs(d.l-.58)/.58);return{...d,score:Math.pow(c.weight,.72)*(.4+d.s*1.55)*(.65+m)}}).sort((c,l)=>l.score-c.score);t(Gm(o,i))}catch{t(kr(i))}},n.onerror=()=>t(kr(i)),n.src=za(i.cover)});return Ps.set(i.cover,e),e}function Wm(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.16,"rgba(190,130,255,.55)"),t.addColorStop(.5,"rgba(100,50,200,.15)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Bu(i)}function Xm(){const i=window.innerWidth<600?900:1500,e=new Float32Array(i*3),t=new Float32Array(i*3);for(let a=0;a<i;a++){const o=11+Math.random()*35,c=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);e[a*3]=o*Math.sin(l)*Math.cos(c),e[a*3+1]=o*Math.cos(l),e[a*3+2]=o*Math.sin(l)*Math.sin(c);const u=.45+Math.random()*.55;t.set([u*.78,u*.64,u],a*3)}const n=new Xt;n.setAttribute("position",new Lt(e,3)),n.setAttribute("color",new Lt(t,3));const r=new Ou(n,new Lc({size:.045,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0}));r.name="stars",kn.add(r);const s=Wm();for(let a=0;a<10;a++){const o=new Cc({map:s,color:a%2?"#7d39e6":"#183d92",transparent:!0,opacity:.11,blending:gi,depthWrite:!1}),c=new Uu(o),l=a/10*Math.PI*2;c.position.set(Math.sin(l)*14,(Math.random()-.5)*8,Math.cos(l)*14),c.scale.setScalar(11+Math.random()*8),c.userData.phase=Math.random()*6,c.name="nebula",kn.add(c)}}function qm(i,e,t){const n=new zn,r=Dt.degToRad(t.azimuth),s=Dt.degToRad(t.elevation);n.position.set(Math.sin(r)*Math.cos(s)*t.radius,Math.sin(s)*t.radius,-Math.cos(r)*Math.cos(s)*t.radius),n.lookAt(0,0,0),n.userData.basePosition=n.position.clone(),n.userData.phase=e*.72,n.userData.song=i,n.userData.baseScale=t.scale,n.userData.layer=t.layer,n.userData.isHovered=!1,n.userData.baseTilt=Dt.degToRad(t.tilt);const a=new bt(new Sn(2.34,2.34),new ui({color:i.accent,transparent:!0,opacity:.09,blending:gi,depthWrite:!1}));a.position.z=-.035,n.add(a);const o=new bt(new Sn(2.06,2.06),new ui({color:"#ffffff",transparent:!0,opacity:.28}));n.add(o);const c=Om.load(za(i.cover));c.colorSpace=Tt,c.wrapS=Fr,c.repeat.x=-1,c.offset.x=1;const l=new bt(new Sn(1.92,1.92),new ui({map:c,transparent:!0,opacity:.96}));l.position.z=.018,l.userData.card=n,n.userData.cover=l,n.userData.halo=a,n.userData.baseOpacity=t.layer==="primary"?.98:t.layer==="secondary"?.78:.52,l.material.opacity=n.userData.baseOpacity,n.add(l);const u=new bt(new Fa(1.24,1.255,64),new ui({color:i.accent,transparent:!0,opacity:.28,blending:gi,side:Yt}));u.position.z=-.06,n.add(u),n.scale.setScalar(.001),Hr.add(n),Ai.push(n)}function Ym(i){const e=zc.filter(s=>s.id!==i.id),t=(s,a)=>(a.id*7+i.id*3)%17-(s.id*7+i.id*3)%17,n=e.filter(s=>s.genre===i.genre).sort(t),r=e.filter(s=>s.genre!==i.genre).sort(t);return[...n.slice(0,4),...r,...n.slice(4)].slice(0,Um)}function Km(){for(;Hr.children.length;)Hr.children.pop().traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())});Ai.length=0}function Wa(i){Km(),Wc=performance.now();const e=Ym(i),t=Fm(i.id);e.forEach((n,r)=>qm(n,r,t[r])),Lr=null,Gr=0,document.documentElement.style.setProperty("--dwell",0),qe.targetCopy.classList.remove("visible")}function Zm(i){return`${Math.round(i.r*255)},${Math.round(i.g*255)},${Math.round(i.b*255)}`}function ac(i,e=!1){i.forEach((t,n)=>{Gc[n].copy(t),e&&Va[n].copy(t)})}function oc(i){const e=i[1]||i[0];document.documentElement.style.setProperty("--accent",`#${e.getHexString()}`),document.documentElement.style.setProperty("--accent-rgb",Zm(e)),ji.fog.color.copy(e).multiplyScalar(.085),pt.setClearColor(e.clone().multiplyScalar(.025),1),kn.children.filter(t=>t.name==="nebula").forEach((t,n)=>{t.material.color.copy(i[n%i.length])})}function $m(i,e=!1){const t=kr(i);ac(t,e),oc(t),km(i).then(n=>{Zt.id===i.id&&(ac(n,!1),oc(n))})}function Xa(i){document.documentElement.style.setProperty("--accent",i.accent),document.documentElement.style.setProperty("--accent-rgb",i.rgb),ji.fog.color.set(i.accent).multiplyScalar(.085),pt.setClearColor(new Ne(i.accent).multiplyScalar(.025),1),$m(i,!rc),rc=!0}function Xc(i){qe.nowCover.src=za(i.cover),qe.nowTitle.textContent=i.title,qe.nowArtist.textContent=`${i.artist} · ${i.genre}`,qe.journey.textContent=`WORLD ${String(Nr).padStart(2,"0")} · ${i.genre.toUpperCase()}`,qe.backButton.disabled=Ha.length===0}function qc(i,e=!1){const t=Fn===qi?ka:qi;if(t.src=i.preview,t.volume=e?.72:0,t.currentTime=0,t.play().catch(()=>{}),e){Fn.pause(),Fn=t;return}const n=Fn,r=performance.now(),s=()=>{const a=Math.min(1,(performance.now()-r)/900);t.volume=a*.72,n.volume=(1-a)*.72,a<1?requestAnimationFrame(s):(n.pause(),Fn=t)};s()}function Yc(i,e=!1){Ur||i.id===Zt.id||(Ur=!0,e||Ha.push(Zt),qe.transitionCopy.querySelector("strong").textContent=i.title,qe.transitionCopy.classList.remove("visible"),qe.transitionCopy.offsetWidth,qe.transitionCopy.classList.add("visible"),qe.warp.classList.remove("active"),qe.warp.offsetWidth,qe.warp.classList.add("active"),Ai.forEach((t,n)=>{t.userData.departAt=performance.now()+n*18,t.userData.departureScale=t.scale.x}),setTimeout(()=>{Zt=i,Nr=Math.max(1,e?Nr-1:Nr+1),Xa(i),Xc(i),Wa(i),qc(i)},650),setTimeout(()=>{Ur=!1,qe.transitionCopy.classList.remove("visible")},1500))}function jm(i,e){if(i!==Lr&&(Lr=i,Gr=e,document.documentElement.style.setProperty("--dwell",0)),Ai.forEach(r=>{const s=r===Lr;r.userData.isHovered=s,r.userData.halo.material.opacity=s?.34:.09}),!i){qe.targetCopy.classList.remove("visible"),qe.reticle.classList.remove("locked");return}const t=i.userData.song;qe.targetTitle.textContent=t.title,qe.targetArtist.textContent=`${t.artist} · Hold to enter`,qe.targetCopy.classList.add("visible"),qe.reticle.classList.add("locked");const n=Math.min(1,(e-Gr)/1050);document.documentElement.style.setProperty("--dwell",n.toFixed(3)),n>=1&&Yc(t)}function Jm(i){if(!kc||Ur)return;ec.setFromCamera(zm,Gn);const e=ec.intersectObjects(Ai.map(t=>t.userData.cover),!1);jm(e.length?e[0].object.userData.card:null,i)}function Qm(i,e){Gn.getWorldDirection(tc),Ai.forEach((t,n)=>{if(t.userData.departAt){const u=Math.min(1,(e-t.userData.departAt)/440);t.scale.setScalar(Math.max(.001,t.userData.departureScale*(1-u))),t.position.multiplyScalar(1+.018*u);return}nc.copy(t.userData.basePosition).normalize();const r=tc.dot(nc),s=Dt.clamp((r-.68)/.32,0,1),a=Dt.clamp((e-Wc)/1e3*1.75-n*.035,0,1),o=1+s*.22,c=t.userData.isHovered?1.16:1,l=t.userData.baseScale*o*c*Math.max(.001,a);ic.setScalar(l),t.scale.lerp(ic,.09),ws.copy(t.userData.basePosition).multiplyScalar(1-s*.055),ws.y+=Math.sin(i*.55+t.userData.phase)*.13,t.position.lerp(ws,.065),t.userData.cover.material.opacity=Dt.lerp(t.userData.baseOpacity,.98,s),t.rotation.z=t.userData.baseTilt+Math.sin(i*.35+t.userData.phase)*.025})}function eg(i){Yr=!0,Ir={x:i.clientX,y:i.clientY},bi.setPointerCapture?.(i.pointerId)}function tg(i){if(!Yr||Nn)return;const e=i.clientX-Ir.x,t=i.clientY-Ir.y;Ga-=e*.0042,zi-=t*.0038,zi=Dt.clamp(zi,-1.18,1.18),Ir={x:i.clientX,y:i.clientY},Gr=performance.now()}function Kc(){Yr=!1}function ng(i){if(!Nn||i.alpha==null)return;const e=screen.orientation?.angle||window.orientation||0,t=Dt.degToRad(i.alpha),n=Dt.degToRad(i.beta||0);Ga=-t+Dt.degToRad(e),zi=Dt.clamp(n-Math.PI/2,-1.2,1.2)}async function ig(){try{if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted")return;Nn=!Nn,qe.motionButton.classList.toggle("active",Nn),qe.motionButton.querySelector(".motion-label").textContent=Nn?"ON":"MOTION"}catch{Nn=!1}}qe.enterButton.addEventListener("click",async()=>{kc=!0,qe.entry.classList.add("hidden"),Wa(Zt),Xa(Zt),Xc(Zt),qc(Zt,!0),setTimeout(()=>qe.hint.style.opacity=".12",4500)});qe.motionButton.addEventListener("click",ig);qe.pauseButton.addEventListener("click",()=>{Ni=!Ni,Ni?Fn.pause():Fn.play().catch(()=>{}),qe.pauseButton.textContent=Ni?"▶":"Ⅱ",document.querySelector(".playing-bars").style.display=Ni?"none":"flex"});qe.backButton.addEventListener("click",()=>{const i=Ha.pop();i&&Yc(i,!0)});bi.addEventListener("pointerdown",eg);bi.addEventListener("pointermove",tg);bi.addEventListener("pointerup",Kc);bi.addEventListener("pointercancel",Kc);window.addEventListener("deviceorientation",ng,!0);window.addEventListener("resize",()=>{Gn.aspect=window.innerWidth/window.innerHeight,Gn.updateProjectionMatrix(),pt.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),pt.setSize(window.innerWidth,window.innerHeight),Vr.uResolution.value.set(window.innerWidth,window.innerHeight)});window.addEventListener("blur",()=>{Yr=!1});pt.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),qe.hint.textContent="VISUAL SIGNAL LOST · RELOAD TO RECONNECT"});Xm();Wa(Zt);Xa(Zt);pt.setAnimationLoop(i=>{const e=Bm.getElapsedTime();Rs+=(Ga-Rs)*.075,Cs+=(zi-Cs)*.075,Gn.rotation.set(Cs,Rs,0,"YXZ"),kn.getObjectByName("stars").rotation.y=e*.006,kn.children.filter(t=>t.name==="nebula").forEach(t=>{t.material.opacity=.08+Math.sin(e*.22+t.userData.phase)*.025}),Vr.uTime.value=e,Vr.uAmplitude.value=1+Math.sin(e*.18)*.08,Va.forEach((t,n)=>t.lerp(Gc[n],.035)),Qm(e,i),Jm(i),pt.clear(),pt.render(Vc,Hm),pt.clearDepth(),pt.render(ji,Gn)});
