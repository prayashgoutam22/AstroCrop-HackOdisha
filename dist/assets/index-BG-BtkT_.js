import{j as e,Q as ps,a as hs}from"./query-BS0w-3_i.js";import{a as gs,r as c}from"./vendor-C3xezT0W.js";import{V as Je,R as Ze,A as Xe,C as et,T as tt,D as st,P as xs,a as at,b as fs,c as ys,d as Ns,S as js,e as nt,f as bs,g as vs,h as it,i as ws,j as rt,k as ot,l as Cs,m as lt,I as ct,n as dt,o as mt,p as ut,L as pt,q as ht,r as ks,s as Ss,t as gt,u as xt,v as Ts,w as ft,x as yt,y as Ms,z as Nt,B as Is,E as jt,F as bt,G as Ps,H as Rs,J as vt,K as As,M as Ds,N as wt,O as Es,Q as Ct,U as Ls,W as kt,X as St,Y as Hs,Z as Tt,_ as Mt,$ as Fs,a0 as Ws,a1 as It,a2 as Pt,a3 as Rt,a4 as Os}from"./ui-CQNPEj3h.js";import{t as zs,c as Us,a as me}from"./utils-BtAuFv3K.js";import{X as ue,C as pe,R as At,B as Ne,U as Bs,S as Gs,M as $s,a as _s,b as Ks,c as Dt,d as he,e as Vs,G as Ys,f as De,N as Se,L as Ee,g as Et,h as J,i as Lt,j as je,T as Te,D as Q,W as ze,k as K,l as qs,m as Me,n as Qs,o as ge,p as Ie,q as Le,r as Js,I as re,s as He,t as Zs,P as Xs,u as Pe,v as ea,w as Ht,x as ta,F as sa,y as aa,z as Ue,A as Be,E as na,H as ia,J as ra,K as oa}from"./icons-Zq777Wdf.js";import{j as la}from"./themes-CH_OJkqM.js";import{$ as ca}from"./toast-BpEZXqtP.js";import{u as da,a as ma,L as ua,B as pa,R as ha,b as be}from"./router-D3k9ErWO.js";import{h as ga,E as xa}from"./pdf-DCgdZCM8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Ft,Ge=gs;Ft=Ge.createRoot,Ge.hydrateRoot;const fa=1,ya=1e6;let ve=0;function Na(){return ve=(ve+1)%Number.MAX_SAFE_INTEGER,ve.toString()}const we=new Map,$e=t=>{if(we.has(t))return;const s=setTimeout(()=>{we.delete(t),ee({type:"REMOVE_TOAST",toastId:t})},ya);we.set(t,s)},ja=(t,s)=>{switch(s.type){case"ADD_TOAST":return{...t,toasts:[s.toast,...t.toasts].slice(0,fa)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===s.toast.id?{...n,...s.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=s;return n?$e(n):t.toasts.forEach(i=>{$e(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return s.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==s.toastId)}}},ne=[];let ie={toasts:[]};function ee(t){ie=ja(ie,t),ne.forEach(s=>{s(ie)})}function ba({...t}){const s=Na(),n=o=>ee({type:"UPDATE_TOAST",toast:{...o,id:s}}),i=()=>ee({type:"DISMISS_TOAST",toastId:s});return ee({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:o=>{o||i()}}}),{id:s,dismiss:i,update:n}}function Wt(){const[t,s]=c.useState(ie);return c.useEffect(()=>(ne.push(s),()=>{const n=ne.indexOf(s);n>-1&&ne.splice(n,1)}),[t]),{...t,toast:ba,dismiss:n=>ee({type:"DISMISS_TOAST",toastId:n})}}function y(...t){return zs(Us(t))}const va=xs,Ot=c.forwardRef(({className:t,...s},n)=>e.jsx(Je,{ref:n,className:y("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...s}));Ot.displayName=Je.displayName;const wa=me("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),zt=c.forwardRef(({className:t,variant:s,...n},i)=>e.jsx(Ze,{ref:i,className:y(wa({variant:s}),t),...n}));zt.displayName=Ze.displayName;const Ca=c.forwardRef(({className:t,...s},n)=>e.jsx(Xe,{ref:n,className:y("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...s}));Ca.displayName=Xe.displayName;const Ut=c.forwardRef(({className:t,...s},n)=>e.jsx(et,{ref:n,className:y("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...s,children:e.jsx(ue,{className:"h-4 w-4"})}));Ut.displayName=et.displayName;const Bt=c.forwardRef(({className:t,...s},n)=>e.jsx(tt,{ref:n,className:y("text-sm font-semibold",t),...s}));Bt.displayName=tt.displayName;const Gt=c.forwardRef(({className:t,...s},n)=>e.jsx(st,{ref:n,className:y("text-sm opacity-90",t),...s}));Gt.displayName=st.displayName;function ka(){const{toasts:t}=Wt();return e.jsxs(va,{children:[t.map(function({id:s,title:n,description:i,action:o,...l}){return e.jsxs(zt,{...l,children:[e.jsxs("div",{className:"grid gap-1",children:[n&&e.jsx(Bt,{children:n}),i&&e.jsx(Gt,{children:i})]}),o,e.jsx(Ut,{})]},s)}),e.jsx(Ot,{})]})}const Sa=({...t})=>{const{theme:s="system"}=la();return e.jsx(ca,{theme:s,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},te=fs,oe=ys,le=Ns,se=c.forwardRef(({className:t,sideOffset:s=4,...n},i)=>e.jsx(at,{ref:i,sideOffset:s,className:y("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));se.displayName=at.displayName;const Ta={theme:"system",setTheme:()=>null},$t=c.createContext(Ta);function Ma({children:t,defaultTheme:s="system",storageKey:n="vite-ui-theme",...i}){const[o,l]=c.useState(()=>localStorage.getItem(n)||s);c.useEffect(()=>{const d=window.document.documentElement;if(d.classList.remove("light","dark"),o==="system"){const b=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";d.classList.add(b);return}d.classList.add(o)},[o]);const m={theme:o,setTheme:d=>{localStorage.setItem(n,d),l(d)}};return e.jsx($t.Provider,{...i,value:m,children:t})}const Ia=()=>{const t=c.useContext($t);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t},Ce={en:{dashboard:"Dashboard",yieldPredictor:"Yield Predictor",yieldCalculator:"Yield Calculator",weatherForecast:"Weather Forecast",soilAnalysis:"Soil Analysis",cropDiseaseDetection:"Crop Disease Detection",chatBot:"FasalGPT",location:"Location",selectLocation:"Select Location",state:"State",district:"District",city:"City",cropType:"Crop Type",selectCrop:"Select Crop",soilPH:"Soil pH",nitrogen:"Nitrogen (N)",phosphorus:"Phosphorus (P)",potassium:"Potassium (K)",area:"Area",temperature:"Temperature",humidity:"Humidity",rainfall:"Rainfall",calculate:"Calculate",predict:"Predict",analyze:"Analyze",upload:"Upload",camera:"Camera",takePhoto:"Take Photo",browseFiles:"Browse Files",removeImage:"Remove Image",cancel:"Cancel",capture:"Capture",openCamera:"Open Camera",analyzing:"Analyzing...",online:"Online",offline:"Offline",welcomeMessage:"🌾 Welcome to AstroCrop!",currentWeather:"Current Weather",yieldPrediction:"Yield Prediction",fertilizerRecommendation:"Fertilizer Recommendation",irrigationSchedule:"Irrigation Schedule",expectedYield:"Expected Yield",fertilizerAmount:"Fertilizer Amount",irrigationFrequency:"Irrigation Frequency",predictedYield:"Predicted Yield",totalYield:"Total Yield",confidence:"Confidence",recommendation:"Recommendation",kgPerHectare:"kg/hectare",hectare:"hectare",celsius:"°C",percentage:"%",mm:"mm",days:"days",ppm:"ppm",kmh:"km/h",windSpeed:"Wind Speed",basalApplication:"Basal application: 50% at sowing",firstTopDressing:"First top dressing: 25% at 30 days",secondTopDressing:"Second top dressing: 25% at 60 days",partlyCloudy:"Partly Cloudy",clear:"Clear",cloudy:"Cloudy",lightRain:"Light Rain",locationNotSet:"Location not set",sevenDayForecast:"7-Day Forecast",lastUpdated:"Last updated",nutrients:"Nutrients",physical:"Physical",biological:"Biological",optimal:"Optimal",low:"Low",high:"High",critical:"Critical",nextSampling:"Next Sampling",sampleDepth:"Sample Depth",samplingMethod:"Sampling Method",recommendations:"Recommendations",historicalData:"Historical Data",download:"Download",uploadImage:"Upload Image",detectionResults:"Detection Results",symptoms:"Symptoms",treatment:"Treatment",prevention:"Prevention",favorableConditions:"Favorable Conditions",spreadRate:"Spread Rate",viewDetailedReport:"View Detailed Report",startNewDetection:"Start New Detection",tipsForBetterDetection:"Tips for better detection",ensureGoodLighting:"Ensure good lighting conditions",focusOnAffectedParts:"Focus on affected plant parts",includeHealthyAndDiseased:"Include both healthy and diseased tissue for comparison",takeMultipleImages:"Take multiple images from different angles",npkRequirements:"NPK Requirements",recommendedProducts:"Recommended Products",applicationSchedule:"Application Schedule",amount:"Amount",warnings:"Warnings",next:"Next",soilPh:"Soil pH",organicMatter:"Organic Matter",applicationNotes:"Application Notes",agriAssistant:"FasalGPT",askAboutCrops:"Ask about crops, weather, fertilizers...",botIsTyping:"Bot is typing...",quickQuestions:"Quick questions",continueConversation:"Continue the conversation",relatedTopics:"Related topics",riceCultivationGuide:"Rice cultivation guide",wheatFertilizerSchedule:"Wheat fertilizer schedule",soilPhManagement:"Soil pH management",pestControlForCrops:"Pest control for crops",irrigationTiming:"Irrigation timing",yieldPredictionMethods:"Yield prediction methods",gettingLocation:"Getting location...",locationError:"Location error",locationActive:"Location active",noLocationSet:"No location set"},hi:{dashboard:"डैशबोर्ड",yieldPredictor:"उत्पादन पूर्वानुमान",yieldCalculator:"उत्पादन कैलकुलेटर",weatherForecast:"मौसम पूर्वानुमान",soilAnalysis:"मिट्टी विश्लेषण",cropDiseaseDetection:"फसल रोग पहचान",chatBot:"FasalGPT",location:"स्थान",selectLocation:"स्थान चुनें",state:"राज्य",district:"जिला",city:"शहर",cropType:"फसल का प्रकार",selectCrop:"फसल चुनें",soilPH:"मिट्टी का pH",nitrogen:"नाइट्रोजन (N)",phosphorus:"फास्फोरस (P)",potassium:"पोटेशियम (K)",area:"क्षेत्रफल",temperature:"तापमान",humidity:"आर्द्रता",rainfall:"वर्षा",calculate:"गणना करें",predict:"भविष्यवाणी करें",analyze:"विश्लेषण करें",upload:"अपलोड करें",camera:"कैमरा",takePhoto:"फोटो लें",browseFiles:"फाइलें ब्राउज़ करें",removeImage:"छवि हटाएं",cancel:"रद्द करें",capture:"कैप्चर करें",openCamera:"कैमरा खोलें",analyzing:"विश्लेषण हो रहा है...",online:"ऑनलाइन",offline:"ऑफलाइन",welcomeMessage:"🌾 AstroCrop में आपका स्वागत है!",currentWeather:"वर्तमान मौसम",yieldPrediction:"उत्पादन पूर्वानुमान",fertilizerRecommendation:"उर्वरक सिफारिश",irrigationSchedule:"सिंचाई अनुसूची",expectedYield:"अपेक्षित उत्पादन",fertilizerAmount:"उर्वरक की मात्रा",irrigationFrequency:"सिंचाई की आवृत्ति",predictedYield:"पूर्वानुमानित उत्पादन",totalYield:"कुल उत्पादन",confidence:"विश्वसनीयता",recommendation:"सिफारिश",kgPerHectare:"किग्रा/हेक्टेयर",hectare:"हेक्टेयर",celsius:"°C",percentage:"%",mm:"मिमी",days:"दिन",ppm:"पीपीएम",kmh:"किमी/घंटा",windSpeed:"हवा की गति",basalApplication:"आधारिक अनुप्रयोग: बुवाई पर 50%",firstTopDressing:"पहली शीर्ष ड्रेसिंग: 30 दिन पर 25%",secondTopDressing:"दूसरी शीर्ष ड्रेसिंग: 60 दिन पर 25%",partlyCloudy:"आंशिक रूप से बादल",clear:"साफ",cloudy:"बादल",lightRain:"हल्की बारिश",locationNotSet:"स्थान सेट नहीं है",sevenDayForecast:"7-दिन का पूर्वानुमान",lastUpdated:"अंतिम अपडेट",nutrients:"पोषक तत्व",physical:"भौतिक",biological:"जैविक",optimal:"इष्टतम",low:"कम",high:"उच्च",critical:"गंभीर",nextSampling:"अगला नमूना",sampleDepth:"नमूना गहराई",samplingMethod:"नमूना विधि",recommendations:"सिफारिशें",historicalData:"ऐतिहासिक डेटा",download:"डाउनलोड",uploadImage:"छवि अपलोड करें",detectionResults:"पहचान परिणाम",symptoms:"लक्षण",treatment:"उपचार",prevention:"रोकथाम",favorableConditions:"अनुकूल परिस्थितियां",spreadRate:"फैलाव दर",viewDetailedReport:"विस्तृत रिपोर्ट देखें",startNewDetection:"नई पहचान शुरू करें",tipsForBetterDetection:"बेहतर पहचान के लिए सुझाव",ensureGoodLighting:"अच्छी रोशनी सुनिश्चित करें",focusOnAffectedParts:"प्रभावित पौधे के हिस्सों पर ध्यान दें",includeHealthyAndDiseased:"तुलना के लिए स्वस्थ और रोगग्रस्त दोनों ऊतक शामिल करें",takeMultipleImages:"विभिन्न कोणों से कई छवियां लें",npkRequirements:"NPK आवश्यकताएं",recommendedProducts:"अनुशंसित उत्पाद",applicationSchedule:"अनुप्रयोग अनुसूची",amount:"मात्रा",warnings:"चेतावनियां",next:"अगला",soilPh:"मिट्टी का pH",organicMatter:"कार्बनिक पदार्थ",applicationNotes:"अनुप्रयोग नोट्स",agriAssistant:"FasalGPT",askAboutCrops:"फसलों, मौसम, उर्वरकों के बारे में पूछें...",botIsTyping:"बॉट टाइप कर रहा है...",quickQuestions:"त्वरित प्रश्न",continueConversation:"बातचीत जारी रखें",relatedTopics:"संबंधित विषय",riceCultivationGuide:"चावल की खेती गाइड",wheatFertilizerSchedule:"गेहूं उर्वरक अनुसूची",soilPhManagement:"मिट्टी pH प्रबंधन",pestControlForCrops:"फसलों के लिए कीट नियंत्रण",irrigationTiming:"सिंचाई समय",yieldPredictionMethods:"उत्पादन पूर्वानुमान विधियां",gettingLocation:"स्थान प्राप्त कर रहे हैं...",locationError:"स्थान त्रुटि",locationActive:"स्थान सक्रिय",noLocationSet:"कोई स्थान सेट नहीं है"}},_t=c.createContext(void 0);function Pa({children:t}){const[s,n]=c.useState(()=>{const l=localStorage.getItem("crop-optima-language");return l&&Ce[l]?l:"en"}),i=l=>{const m=l.split(".");let d=Ce[s];for(const b of m)d=d?.[b];if(!d&&s!=="en"){d=Ce.en;for(const b of m)d=d?.[b]}return d||l},o=l=>{n(l),localStorage.setItem("crop-optima-language",l)};return e.jsx(_t.Provider,{value:{language:s,setLanguage:o,t:i},children:t})}function L(){const t=c.useContext(_t);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t}const ce={NAME:"CropOptima Plus",VERSION:"1.0.0",WEATHER_API_KEY:"demo",WEATHER_API_BASE_URL:"https://api.openweathermap.org/data/2.5",NOMINATIM_BASE_URL:"https://nominatim.openstreetmap.org",USER_AGENT:"CropOptima-Plus/1.0"},ae={CROPS:["Rice","Wheat","Maize","Cotton","Sugarcane","Soybean","Groundnut","Sunflower","Mustard","Barley","Jowar","Bajra"],BASE_YIELDS:{Rice:3500,Wheat:3e3,Maize:4500,Cotton:2e3,Sugarcane:7e4,Soybean:2500,Groundnut:1800,Sunflower:1500,Mustard:1200,Barley:2800,Jowar:2e3,Bajra:1800},OPTIMAL_PH:{Rice:{min:5.5,max:6.5,optimal:6},Wheat:{min:6,max:7.5,optimal:6.5},Maize:{min:5.8,max:7,optimal:6.5},Cotton:{min:5.5,max:8.5,optimal:7},Sugarcane:{min:6,max:7.5,optimal:6.5},Soybean:{min:6,max:7,optimal:6.5},Groundnut:{min:5.5,max:7,optimal:6},Sunflower:{min:6,max:7.5,optimal:6.5},Mustard:{min:5.5,max:7.5,optimal:6.5},Barley:{min:6,max:7.5,optimal:7},Jowar:{min:5.5,max:7.5,optimal:6.5},Bajra:{min:5.5,max:8,optimal:6.5}},OPTIMAL_NPK:{Rice:{N:80,P:40,K:40},Wheat:{N:120,P:60,K:40},Maize:{N:150,P:60,K:80},Cotton:{N:100,P:50,K:50},Sugarcane:{N:150,P:60,K:60},Soybean:{N:20,P:60,K:40},Groundnut:{N:20,P:40,K:50},Sunflower:{N:80,P:50,K:40},Mustard:{N:80,P:40,K:40},Barley:{N:80,P:40,K:30},Jowar:{N:80,P:40,K:40},Bajra:{N:60,P:30,K:30}}},ke=["Clear","Partly Cloudy","Cloudy","Light Rain","Moderate Rain","Heavy Rain","Thunderstorm","Fog"],A={SOIL_PH:{min:0,max:14,warningMin:3,warningMax:10},NPK_MIN:0,AREA_MIN:.1,CONFIDENCE_MIN:60,CONFIDENCE_MAX:95},Kt=c.createContext(void 0);function Ra({children:t}){const[s,n]=c.useState(null),[i,o]=c.useState(!1),[l,m]=c.useState(null),d=c.useCallback(async(j,r)=>{try{const g=await fetch(`${ce.NOMINATIM_BASE_URL}/reverse?format=json&lat=${j}&lon=${r}&zoom=18&addressdetails=1`,{headers:{"User-Agent":ce.USER_AGENT}});if(!g.ok)throw new Error("Reverse geocoding failed");const x=await g.json();return{city:x.address?.city||x.address?.town||x.address?.village,state:x.address?.state,country:x.address?.country,address:x.display_name}}catch{return{}}},[]),b=c.useCallback(()=>{if(!navigator.geolocation){m("Geolocation is not supported by this browser");return}o(!0),m(null),navigator.geolocation.getCurrentPosition(async j=>{const{latitude:r,longitude:g,accuracy:x,altitude:u,altitudeAccuracy:p,heading:N,speed:v,timestamp:I}=j.coords,M=await d(r,g);n({latitude:r,longitude:g,accuracy:x,altitude:u,altitudeAccuracy:p,heading:N,speed:v,timestamp:j.timestamp,...M}),o(!1)},j=>{j.code===j.TIMEOUT||j.code===j.POSITION_UNAVAILABLE?navigator.geolocation.getCurrentPosition(async r=>{const{latitude:g,longitude:x,accuracy:u}=r.coords,p=await d(g,x);n({latitude:g,longitude:x,accuracy:u,timestamp:r.timestamp,...p}),o(!1)},r=>{f(r)},{enableHighAccuracy:!1,timeout:15e3,maximumAge:3e5}):f(j)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4})},[d,f]),f=c.useCallback(j=>{let r="Failed to get location";switch(j.code){case j.PERMISSION_DENIED:r="Location access denied by user";break;case j.POSITION_UNAVAILABLE:r="Location information unavailable";break;case j.TIMEOUT:r="Location request timed out";break}m(r),o(!1)},[]),S=(j,r,g,x)=>{n({latitude:j,longitude:r,accuracy:0,city:g,state:x,country:"India"}),m(null)};return c.useEffect(()=>{if(!navigator.geolocation)return;let j=null;return navigator.geolocation.getCurrentPosition(()=>{b(),j=navigator.geolocation.watchPosition(async r=>{const{latitude:g,longitude:x,accuracy:u,altitude:p,altitudeAccuracy:N,heading:v,speed:I}=r.coords;n(M=>!M||u<M.accuracy||Math.abs(g-M.latitude)>1e-4||Math.abs(x-M.longitude)>1e-4?{latitude:g,longitude:x,accuracy:u,altitude:p,altitudeAccuracy:N,heading:v,speed:I,timestamp:r.timestamp,city:M?.city,state:M?.state,country:M?.country,address:M?.address}:M)},r=>{n(g=>(g||f(r),g))},{enableHighAccuracy:!0,timeout:15e3,maximumAge:6e4})},()=>{},{timeout:1e3}),()=>{j!==null&&navigator.geolocation.clearWatch(j)}},[b,f]),e.jsx(Kt.Provider,{value:{location:s,isLoading:i,error:l,getCurrentLocation:b,setManualLocation:S},children:t})}function xe(){const t=c.useContext(Kt);if(t===void 0)throw new Error("useLocation must be used within a LocationProvider");return t}const Aa=me("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),k=c.forwardRef(({className:t,variant:s,size:n,asChild:i=!1,...o},l)=>{const m=i?js:"button";return e.jsx(m,{className:y(Aa({variant:s,size:n,className:t})),ref:l,...o})});k.displayName="Button";const O=c.forwardRef(({className:t,...s},n)=>e.jsx("div",{ref:n,className:y("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s}));O.displayName="Card";const z=c.forwardRef(({className:t,...s},n)=>e.jsx("div",{ref:n,className:y("flex flex-col space-y-1.5 p-6",t),...s}));z.displayName="CardHeader";const U=c.forwardRef(({className:t,...s},n)=>e.jsx("h3",{ref:n,className:y("text-2xl font-semibold leading-none tracking-tight",t),...s}));U.displayName="CardTitle";const Vt=c.forwardRef(({className:t,...s},n)=>e.jsx("p",{ref:n,className:y("text-sm text-muted-foreground",t),...s}));Vt.displayName="CardDescription";const B=c.forwardRef(({className:t,...s},n)=>e.jsx("div",{ref:n,className:y("p-6 pt-0",t),...s}));B.displayName="CardContent";const Da=c.forwardRef(({className:t,...s},n)=>e.jsx("div",{ref:n,className:y("flex items-center p-6 pt-0",t),...s}));Da.displayName="CardFooter";class Ea extends c.Component{constructor(s){super(s),this.state={hasError:!1}}static getDerivedStateFromError(s){return{hasError:!0,error:s}}componentDidCatch(s,n){}handleReset=()=>{this.setState({hasError:!1,error:void 0})};render(){return this.state.hasError?this.props.fallback?this.props.fallback:e.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",children:e.jsxs(O,{className:"w-full max-w-md",children:[e.jsxs(z,{className:"text-center",children:[e.jsx("div",{className:"mx-auto mb-4 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center",children:e.jsx(pe,{className:"w-6 h-6 text-red-600 dark:text-red-400"})}),e.jsx(U,{className:"text-xl",children:"Something went wrong"})]}),e.jsxs(B,{className:"text-center space-y-4",children:[e.jsx("p",{className:"text-muted-foreground",children:"We're sorry, but something unexpected happened. Please try refreshing the page."}),!1,e.jsxs(k,{onClick:this.handleReset,className:"w-full",children:[e.jsx(At,{className:"w-4 h-4 mr-2"}),"Try Again"]})]})]})}):this.props.children}}const F=c.forwardRef(({className:t,type:s,...n},i)=>e.jsx("input",{type:s,className:y("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:i,...n}));F.displayName="Input";const Yt=c.forwardRef(({className:t,children:s,...n},i)=>e.jsxs(nt,{ref:i,className:y("relative overflow-hidden",t),...n,children:[e.jsx(bs,{className:"h-full w-full rounded-[inherit]",children:s}),e.jsx(qt,{}),e.jsx(vs,{})]}));Yt.displayName=nt.displayName;const qt=c.forwardRef(({className:t,orientation:s="vertical",...n},i)=>e.jsx(it,{ref:i,orientation:s,className:y("flex touch-none select-none transition-colors",s==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",s==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...n,children:e.jsx(ws,{className:"relative flex-1 rounded-full bg-border"})}));qt.displayName=it.displayName;const La=me("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function D({className:t,variant:s,...n}){return e.jsx("div",{className:y(La({variant:s}),t),...n})}const Ha=()=>{const{t,language:s}=L(),[n,i]=c.useState(!1),o=()=>s==="hi"?"नमस्ते! मैं FasalGPT हूं, आपका कृषि सहायक। मैं फसल अनुकूलन, मौसम पूर्वानुमान, उर्वरक सिफारिशें, सिंचाई अनुसूची और उत्पादन पूर्वानुमान के बारे में आपकी मदद कर सकता हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?":"Hello! I'm FasalGPT, your agricultural assistant. I can help you with questions about crop optimization, weather forecasts, fertilizer recommendations, irrigation schedules, and yield predictions. How can I assist you today?",[l,m]=c.useState([{id:"1",text:o(),isUser:!1,timestamp:new Date}]),[d,b]=c.useState(""),[f,S]=c.useState(!1),[j,r]=c.useState({lastTopic:"",currentTopic:"",userPreferences:[],previousQuestions:[],previousResponses:[],followUpQuestions:["Tell me more about crop optimization","How can I improve soil health?","What are the best irrigation practices?"],relatedTopics:[]}),g=c.useRef(null),x=c.useRef(null),p=s==="hi"?["चावल की खेती गाइड","गेहूं उर्वरक अनुसूची","मिट्टी pH प्रबंधन","फसलों के लिए कीट नियंत्रण","सिंचाई समय","उत्पादन पूर्वानुमान विधियां"]:["Rice cultivation guide","Wheat fertilizer schedule","Soil pH management","Pest control for crops","Irrigation timing","Yield prediction methods"],N=()=>{g.current?.scrollIntoView({behavior:"smooth"})};c.useEffect(()=>{N()},[l]);const v=h=>{const a=h.toLowerCase().trim();return a.includes("rice")||a.includes("wheat")||a.includes("maize")||a.includes("cotton")||a.includes("sugarcane")?"crops":a.includes("pest")||a.includes("disease")||a.includes("insect")||a.includes("fungus")||a.includes("bacteria")?"pests":a.includes("fertilizer")||a.includes("nutrient")||a.includes("npk")||a.includes("urea")||a.includes("compost")?"fertilizer":a.includes("irrigation")||a.includes("water")||a.includes("watering")||a.includes("drip")||a.includes("sprinkler")?"irrigation":a.includes("weather")||a.includes("rain")||a.includes("temperature")||a.includes("forecast")||a.includes("climate")?"weather":a.includes("yield")||a.includes("prediction")||a.includes("harvest")||a.includes("output")?"yield":a.includes("soil")||a.includes("ph")||a.includes("organic matter")?"soil":a.includes("market")||a.includes("price")||a.includes("cost")||a.includes("profit")?"market":a.includes("organic")||a.includes("natural")||a.includes("sustainable")?"organic":"general"},I=(h,a)=>{const T=[];switch(h){case"crops":T.push("What's the best planting time for this crop?","How much fertilizer should I use for this crop?","What are common diseases affecting this crop?");break;case"pests":T.push("Are there organic solutions for this pest problem?","How can I prevent this pest in the future?","What crops are resistant to this pest?");break;case"fertilizer":T.push("When is the best time to apply this fertilizer?","Are there organic alternatives to chemical fertilizers?","How can I test my soil before applying fertilizer?");break;case"irrigation":T.push("What's the most water-efficient irrigation method?","How can I tell if my crops are getting enough water?","What are signs of overwatering?");break;case"weather":T.push("How will this weather affect my crops?","What precautions should I take for the upcoming weather?","Which crops are best suited for this climate?");break;case"yield":T.push("How can I improve my crop yield?","What factors most affect yield prediction?","How accurate are yield predictions?");break;case"soil":T.push("How can I improve my soil quality?","What crops grow best in this soil type?","How often should I test my soil?");break;case"market":T.push("When is the best time to sell my crops?","How can I get better prices for my produce?","What value-added products can I create?");break;case"organic":T.push("How do I transition to organic farming?","What are the benefits of organic certification?","Which organic practices give the best results?");break;default:T.push("Would you like to know about crop recommendations?","Do you need help with pest management?","Are you interested in weather forecasts?")}return T},M=h=>{const a=[];switch(h){case"crops":a.push("seeds","planting","harvesting","crop rotation");break;case"pests":a.push("disease management","organic pest control","beneficial insects");break;case"fertilizer":a.push("soil health","organic fertilizers","nutrient deficiency");break;case"irrigation":a.push("water conservation","drip systems","rainwater harvesting");break;case"weather":a.push("climate change","seasonal planning","weather-resistant crops");break;case"yield":a.push("crop productivity","harvest optimization","yield factors");break;case"soil":a.push("soil testing","composting","soil amendments");break;case"market":a.push("pricing strategies","direct marketing","value addition");break;case"organic":a.push("certification","sustainable practices","natural inputs");break;default:a.push("crop management","farm planning","agricultural technology")}return a},H=h=>{const a=h.toLowerCase().trim(),T=v(a);if(r(C=>{const $=C.currentTopic&&(a.includes(C.currentTopic)||C.relatedTopics.some(V=>a.includes(V)))?C.currentTopic:T;return{...C,lastTopic:C.currentTopic,currentTopic:$,previousQuestions:[...C.previousQuestions.slice(-4),h]}}),a.includes("hello")||a.includes("hi")||a.includes("hey")||a.includes("good morning")||a.includes("good afternoon")||a.includes("good evening"))return"Hello! I'm FasalGPT, your agricultural assistant. I'm here to help you with farming questions, crop optimization, weather information, and agricultural best practices. What would you like to know?";if(a.includes("rice")||a.includes("wheat")||a.includes("maize")||a.includes("cotton")||a.includes("sugarcane")){const C=a.includes("rice")?"rice":a.includes("wheat")?"wheat":a.includes("maize")?"maize":a.includes("cotton")?"cotton":"sugarcane";return`Great question about ${C}! Here's specific guidance:

**${C.toUpperCase()} CULTIVATION:**
• Best planting time: ${C==="rice"?"June-July (Kharif)":C==="wheat"?"October-November (Rabi)":C==="maize"?"June-July or January-February":C==="cotton"?"April-May":"February-March"}
• Soil type: ${C==="rice"?"Clay loam, well-drained":C==="wheat"?"Loamy soil, good drainage":C==="maize"?"Well-drained loam":C==="cotton"?"Black cotton soil":"Well-drained fertile soil"}
• Water requirement: ${C==="rice"?"High (flood irrigation)":C==="wheat"?"Moderate":C==="maize"?"Moderate to high":C==="cotton"?"Moderate":"High"}
• Expected yield: ${C==="rice"?"4-6 tons/hectare":C==="wheat"?"3-5 tons/hectare":C==="maize"?"6-8 tons/hectare":C==="cotton"?"2-3 bales/hectare":"80-100 tons/hectare"}

What specific aspect of ${C} farming would you like to know more about?`}return a.includes("pest")||a.includes("disease")||a.includes("insect")||a.includes("fungus")||a.includes("bacteria")?a.includes("rice")&&(a.includes("pest")||a.includes("disease"))?`**RICE PEST & DISEASE MANAGEMENT:**

**Common Pests:**
• Brown Plant Hopper: Use neem oil, avoid excessive nitrogen
• Stem Borer: Remove affected plants, use pheromone traps
• Leaf Folder: Spray with neem-based pesticides

**Common Diseases:**
• Blast: Use resistant varieties, avoid water stress
• Bacterial Leaf Blight: Use copper-based fungicides
• Sheath Blight: Improve drainage, use fungicides

**Prevention:**
• Use certified seeds
• Maintain proper spacing
• Avoid waterlogging
• Regular field monitoring

Describe the specific symptoms you're seeing for targeted advice!`:a.includes("wheat")&&(a.includes("pest")||a.includes("disease"))?`**WHEAT PEST & DISEASE MANAGEMENT:**

**Common Pests:**
• Aphids: Use neem oil or insecticidal soap
• Armyworms: Hand-pick or use Bt-based pesticides
• Termites: Use soil treatment with neem cake

**Common Diseases:**
• Rust: Use resistant varieties, proper spacing
• Powdery Mildew: Improve air circulation, use sulfur
• Head Blight: Avoid excessive nitrogen, crop rotation

**Prevention:**
• Use disease-resistant varieties
• Proper crop rotation
• Avoid excessive nitrogen
• Timely sowing

What specific symptoms are you observing in your wheat crop?`:`I can help with pest and disease management! To give you the most relevant advice, please specify:

• Which crop is affected?
• What symptoms are you seeing?
• When did you first notice the problem?
• What stage is your crop in?

Common symptoms to look for:
• Yellowing or browning leaves
• Holes in leaves
• Stunted growth
• Spots or lesions
• Wilting or drooping

Describe what you're seeing, and I'll provide specific treatment recommendations!`:a.includes("fertilizer")||a.includes("npk")||a.includes("urea")||a.includes("dap")||a.includes("compost")?a.includes("rice")&&a.includes("fertilizer")?`**RICE FERTILIZER RECOMMENDATIONS:**

**NPK Ratio:** 120:60:40 kg/hectare
• **Nitrogen (N):** 120 kg - Apply in 3 splits (basal, tillering, panicle initiation)
• **Phosphorus (P):** 60 kg - Apply as basal dose
• **Potassium (K):** 40 kg - Apply as basal dose

**Application Schedule:**
• Basal: 50% N + 100% P + 100% K at transplanting
• Tillering: 25% N at 25-30 days
• Panicle Initiation: 25% N at 45-50 days

**Organic Options:**
• Farmyard manure: 10-15 tons/hectare
• Green manure: Dhaincha or Sesbania
• Compost: 5-10 tons/hectare

**Tips:**
• Test soil before applying
• Avoid excessive nitrogen
• Use slow-release fertilizers

What's your current soil condition and rice variety?`:a.includes("wheat")&&a.includes("fertilizer")?`**WHEAT FERTILIZER RECOMMENDATIONS:**

**NPK Ratio:** 120:60:40 kg/hectare
• **Nitrogen (N):** 120 kg - Apply in 3 splits
• **Phosphorus (P):** 60 kg - Apply as basal dose
• **Potassium (K):** 40 kg - Apply as basal dose

**Application Schedule:**
• Basal: 50% N + 100% P + 100% K at sowing
• First Top Dressing: 25% N at crown root initiation (21-25 days)
• Second Top Dressing: 25% N at flag leaf stage (45-50 days)

**Organic Options:**
• Farmyard manure: 10-15 tons/hectare
• Vermicompost: 2-3 tons/hectare
• Green manure: Mustard or Dhaincha

**Tips:**
• Test soil pH (ideal: 6.5-7.5)
• Avoid excessive nitrogen
• Use micronutrients if deficient

What's your soil type and wheat variety?`:`I can help with fertilizer recommendations! To give you the best advice, please specify:

• Which crop are you growing?
• What's your soil type?
• Have you done a soil test?
• What stage is your crop in?

**General Fertilizer Guidelines:**
• **NPK Ratio:** Varies by crop (typically 120:60:40)
• **Application:** Split into 2-3 doses
• **Timing:** Basal, vegetative, and reproductive stages
• **Organic Options:** Compost, farmyard manure, green manure

**Soil Testing:**
• Test pH, NPK, and micronutrients
• Adjust based on results
• Consider organic alternatives

Tell me about your specific crop and soil condition!`:a.includes("irrigation")||a.includes("water")||a.includes("watering")||a.includes("drip")||a.includes("sprinkler")?a.includes("rice")&&a.includes("water")?`**RICE IRRIGATION MANAGEMENT:**

**Water Requirements:**
• Total water needed: 1200-1500 mm
• Critical stages: Transplanting, tillering, panicle initiation
• Water depth: 2-5 cm during growth

**Irrigation Schedule:**
• **Transplanting:** 2-3 cm standing water
• **Tillering:** 2-3 cm standing water
• **Panicle Initiation:** 5-7 cm standing water
• **Grain Filling:** 2-3 cm standing water
• **Maturity:** Gradual drainage

**Water-Saving Tips:**
• Use alternate wetting and drying (AWD)
• Laser leveling for uniform water distribution
• SRI (System of Rice Intensification)
• Direct seeding to save water

**Signs of Water Stress:**
• Leaf rolling
• Stunted growth
• Reduced tillering

What's your current water availability and rice variety?`:a.includes("wheat")&&a.includes("water")?`**WHEAT IRRIGATION MANAGEMENT:**

**Water Requirements:**
• Total water needed: 400-500 mm
• Critical stages: Crown root initiation, tillering, flowering
• Water requirement: 25-30 mm per irrigation

**Irrigation Schedule:**
• **Crown Root Initiation:** 21-25 days after sowing
• **Tillering:** 45-50 days after sowing
• **Flowering:** 70-75 days after sowing
• **Grain Filling:** 90-95 days after sowing

**Water-Saving Tips:**
• Use drip irrigation for water efficiency
• Mulching to retain moisture
• Timely irrigation based on soil moisture
• Avoid over-irrigation

**Signs of Water Stress:**
• Wilting leaves
• Stunted growth
• Reduced tillering
• Poor grain filling

What's your irrigation method and water availability?`:`I can help with irrigation management! To provide specific advice, please tell me:

• Which crop are you growing?
• What's your irrigation method (flood, drip, sprinkler)?
• What's your water availability?
• What stage is your crop in?

**General Irrigation Principles:**
• **Critical Stages:** Flowering, grain filling
• **Water Depth:** 2-5 cm for most crops
• **Frequency:** Based on soil type and weather
• **Efficiency:** Drip > Sprinkler > Flood

**Water-Saving Techniques:**
• Mulching
• Timely irrigation
• Soil moisture monitoring
• Drought-resistant varieties

Describe your specific situation for targeted advice!`:a.includes("weather")||a.includes("rain")||a.includes("temperature")||a.includes("forecast")||a.includes("climate")?a.includes("rain")&&a.includes("when")?`**RAINFALL TIMING FOR FARMING:**

**Kharif Season (June-October):**
• **June:** Pre-monsoon showers, good for land preparation
• **July:** Peak monsoon, ideal for rice transplanting
• **August:** Heavy rains, monitor for waterlogging
• **September:** Moderate rains, good for crop growth
• **October:** Post-monsoon, harvest preparation

**Rabi Season (October-March):**
• **October:** Post-monsoon moisture for sowing
• **November-December:** Winter rains for crop establishment
• **January-February:** Light rains for crop development
• **March:** Pre-summer showers for harvest

**Rainfall Tips:**
• Monitor daily forecasts
• Plan activities around rain
• Use rain for irrigation
• Protect crops from excess rain

What crop are you planning to grow and in which season?`:a.includes("temperature")&&a.includes("crop")?`**TEMPERATURE REQUIREMENTS FOR CROPS:**

**Cool Season Crops (15-25°C):**
• Wheat: 15-20°C for growth, 20-25°C for grain filling
• Barley: 15-20°C optimal
• Mustard: 15-25°C
• Peas: 15-20°C

**Warm Season Crops (25-35°C):**
• Rice: 25-30°C for growth, 20-25°C for flowering
• Maize: 25-30°C optimal
• Cotton: 25-35°C
• Sugarcane: 25-30°C

**Temperature Management:**
• Use shade nets for heat protection
• Mulching to regulate soil temperature
• Timely sowing based on temperature
• Monitor for heat stress

**Heat Stress Signs:**
• Wilting leaves
• Reduced growth
• Poor flowering
• Low yield

What crop are you growing and what temperature issues are you facing?`:`Weather is crucial for farming success! I can help you understand:

• Current weather conditions and forecasts
• Best planting times based on weather patterns
• Irrigation scheduling based on rainfall predictions
• Weather-related crop protection strategies

Check the Weather Forecast tab for detailed information, or ask me specific weather questions!`:a.includes("yield")||a.includes("prediction")||a.includes("crop production")||a.includes("harvest")||a.includes("output")?a.includes("rice")&&a.includes("yield")?`**RICE YIELD PREDICTION & OPTIMIZATION:**

**Expected Yields:**
• **High-yielding varieties:** 6-8 tons/hectare
• **Traditional varieties:** 3-4 tons/hectare
• **Hybrid varieties:** 8-10 tons/hectare
• **SRI method:** 8-12 tons/hectare

**Yield Factors:**
• **Soil:** Clay loam, good drainage
• **Water:** 1200-1500 mm total
• **Fertilizer:** 120:60:40 NPK kg/hectare
• **Spacing:** 20x20 cm for SRI
• **Variety:** Choose based on region

**Yield Optimization:**
• Use certified seeds
• Proper water management
• Timely fertilizer application
• Pest and disease control
• Good field preparation

**Yield Prediction:**
• Monitor crop growth stages
• Check weather conditions
• Assess soil health
• Track pest/disease incidence

What's your rice variety and current growth stage?`:a.includes("wheat")&&a.includes("yield")?`**WHEAT YIELD PREDICTION & OPTIMIZATION:**

**Expected Yields:**
• **High-yielding varieties:** 5-6 tons/hectare
• **Traditional varieties:** 2-3 tons/hectare
• **Hybrid varieties:** 6-8 tons/hectare
• **Organic farming:** 3-4 tons/hectare

**Yield Factors:**
• **Soil:** Loamy, well-drained
• **Water:** 400-500 mm total
• **Fertilizer:** 120:60:40 NPK kg/hectare
• **Spacing:** 20-25 cm row spacing
• **Variety:** Choose based on region

**Yield Optimization:**
• Timely sowing (October-November)
• Proper seed rate (100-120 kg/hectare)
• Balanced fertilization
• Weed control
• Pest and disease management

**Yield Prediction:**
• Monitor tillering (target: 400-500 tillers/m²)
• Check flowering stage
• Assess grain filling
• Monitor weather conditions

What's your wheat variety and current growth stage?`:`Yield prediction is one of our key features! I can help with:

• Estimating crop yields based on current conditions
• Factors affecting yield (soil, weather, nutrients)
• Yield optimization strategies
• Historical yield analysis

Visit the Yield Predictor tab for AI-powered forecasts, or ask me about specific crops and their expected yields!`:a.includes("fertilizer")||a.includes("nutrient")||a.includes("soil")||a.includes("npk")||a.includes("compost")||a.includes("manure")?`Fertilizer management is essential for healthy crops! I can assist with:

• Soil nutrient analysis and recommendations
• Organic vs synthetic fertilizer options
• Application timing and methods
• Cost-effective fertilizer strategies
• Soil health improvement techniques

Check the Fertilizer Recommendations section for personalized advice, or ask me about specific nutrient needs!`:a.includes("irrigation")||a.includes("water")||a.includes("watering")||a.includes("drip")||a.includes("sprinkler")||a.includes("moisture")?`Smart irrigation is key to water conservation and crop health! I can help with:

• Optimal watering schedules
• Water-saving irrigation methods
• Soil moisture monitoring
• Drought-resistant farming techniques
• Irrigation system selection

Visit the Irrigation Schedule section for detailed recommendations, or ask me about water management strategies!`:a.includes("plant")||a.includes("crop")||a.includes("seed")||a.includes("sowing")||a.includes("cultivation")?`Crop selection and planting are fundamental to farming success! I can guide you on:

• Best crops for your region and season
• Planting schedules and techniques
• Seed selection and preparation
• Crop rotation strategies
• Intercropping and companion planting

What specific crop or planting question do you have?`:a.includes("pest")||a.includes("disease")||a.includes("insect")||a.includes("fungus")||a.includes("treatment")||a.includes("spray")?`Pest and disease management is crucial for healthy crops! I can help with:

• Identifying common pests and diseases
• Organic and chemical treatment options
• Preventive measures and early detection
• Integrated pest management (IPM) strategies
• Natural pest control methods

Describe the symptoms you're seeing, and I'll help you identify and treat the issue!`:a.includes("soil")||a.includes("ph")||a.includes("organic matter")||a.includes("compost")||a.includes("tillage")?a.includes("ph")&&a.includes("soil")?`**SOIL pH MANAGEMENT:**

**Ideal pH Ranges:**
• **Rice:** 5.5-6.5 (slightly acidic)
• **Wheat:** 6.5-7.5 (neutral)
• **Maize:** 6.0-7.0 (slightly acidic)
• **Cotton:** 6.0-8.0 (neutral to alkaline)
• **Most vegetables:** 6.0-7.0

**pH Testing:**
• Use pH meter or test kit
• Test multiple locations
• Test at different depths
• Test annually

**pH Adjustment:**
• **To increase pH (make less acidic):**
  - Add lime (calcium carbonate)
  - Add wood ash
  - Add dolomite

• **To decrease pH (make less alkaline):**
  - Add sulfur
  - Add organic matter
  - Use acid-forming fertilizers

**Application Rates:**
• **Lime:** 1-2 tons/hectare
• **Sulfur:** 100-200 kg/hectare
• **Wood ash:** 500-1000 kg/hectare

What's your current soil pH and which crop are you growing?`:a.includes("organic matter")||a.includes("compost")?`**ORGANIC MATTER & COMPOST MANAGEMENT:**

**Benefits of Organic Matter:**
• Improves soil structure
• Increases water retention
• Provides nutrients
• Supports beneficial microbes
• Reduces soil erosion

**Sources of Organic Matter:**
• **Farmyard manure:** 10-15 tons/hectare
• **Compost:** 5-10 tons/hectare
• **Green manure:** Dhaincha, Sesbania, Mustard
• **Crop residues:** Rice straw, wheat straw
• **Vermicompost:** 2-3 tons/hectare

**Compost Making:**
• **Materials:** Kitchen waste, crop residues, manure
• **Ratio:** 2:1 (brown:green materials)
• **Time:** 3-6 months
• **Moisture:** 50-60%
• **Temperature:** 50-60°C

**Application:**
• Apply before planting
• Mix well with soil
• Use 2-3 weeks before sowing
• Avoid fresh manure

What type of organic matter are you planning to use?`:`Healthy soil is the foundation of successful farming! I can assist with:

• Soil testing and analysis
• pH adjustment techniques
• Organic matter improvement
• Soil structure enhancement
• Sustainable soil management practices

What specific soil-related question do you have?`:a.includes("location")||a.includes("area")||a.includes("region")||a.includes("state")||a.includes("district")?`Location-specific advice is important for farming success! I can help with:

• Regional crop recommendations
• Local weather patterns and their impact
• Area-specific pest and disease issues
• Regional farming best practices
• Local market information

Please set your location using the location selector for personalized recommendations!`:a.includes("market")||a.includes("price")||a.includes("cost")||a.includes("profit")||a.includes("economics")||a.includes("selling")?`Understanding market dynamics is crucial for profitable farming! I can help with:

• Current market prices and trends
• Cost-benefit analysis for different crops
• Marketing strategies for farmers
• Government schemes and subsidies
• Value-added farming opportunities

What specific market or economic question do you have?`:a.includes("help")||a.includes("how to")||a.includes("guide")||a.includes("tutorial")||a.includes("learn")?`I'm here to help you succeed in farming! Here's how to use CropOptima Plus effectively:

1. **Set your location** - Use the location selector for personalized advice
2. **Check the Dashboard** - Get an overview of your farming data
3. **Use Yield Predictor** - Get AI-powered crop yield forecasts
4. **Monitor Weather** - Stay updated with weather forecasts
5. **Follow Recommendations** - Get personalized fertilizer and irrigation advice

What specific topic would you like to learn more about?`:a.includes("technology")||a.includes("ai")||a.includes("smart")||a.includes("precision")||a.includes("automation")||a.includes("drone")?`Modern technology is revolutionizing agriculture! I can help with:

• AI-powered farming solutions
• Precision agriculture techniques
• Smart irrigation systems
• Drone technology for farming
• IoT sensors for monitoring
• Digital farming tools and apps

What specific technology or modern farming method interests you?`:a.includes("organic")||a.includes("natural")||a.includes("sustainable")||a.includes("eco-friendly")||a.includes("green")?`Organic and sustainable farming is the future! I can guide you on:

• Organic certification processes
• Natural pest control methods
• Composting and organic fertilizers
• Sustainable farming practices
• Environmental conservation techniques
• Organic market opportunities

What aspect of organic farming would you like to explore?`:a.includes("season")||a.includes("winter")||a.includes("summer")||a.includes("monsoon")||a.includes("kharif")||a.includes("rabi")?`Seasonal farming planning is essential for success! I can help with:

• Seasonal crop selection
• Kharif and Rabi season planning
• Weather-appropriate farming techniques
• Seasonal pest and disease management
• Seasonal market opportunities
• Year-round farming strategies

What season or seasonal farming question do you have?`:a.includes("farming")||a.includes("agriculture")||a.includes("farmer")||a.includes("cultivation")||a.includes("growing")?`Farming is both an art and a science! I can help with:

• Modern farming techniques and best practices
• Crop management strategies
• Farm planning and organization
• Agricultural innovations
• Farming challenges and solutions
• Success stories and case studies

What specific farming topic would you like to discuss?`:a.includes("thank")||a.includes("thanks")||a.includes("appreciate")?"You're very welcome! I'm always here to help with your farming questions. Feel free to ask me anything about agriculture, crop management, weather, or any other farming-related topic. Happy farming! 🌱":a.includes("who are you")||a.includes("what are you")||a.includes("your name")||a.includes("about you")?`I'm FasalGPT, your AI agricultural assistant, designed to help farmers like you succeed! I can provide guidance on:

• Crop optimization and yield prediction
• Weather monitoring and forecasting
• Soil health and fertilizer management
• Irrigation scheduling and water management
• Pest and disease control
• Market trends and farming economics

I'm here 24/7 to answer your farming questions and help you make informed decisions!`:a.includes("rice cultivation guide")?`**COMPLETE RICE CULTIVATION GUIDE:**

**Land Preparation:**
• Plow 2-3 times
• Level the field
• Add organic matter
• Prepare nursery beds

**Variety Selection:**
• **High-yielding:** IR64, Swarna, Samba Mahsuri
• **Hybrid:** KRH-2, DRRH-3
• **Aromatic:** Basmati, Jasmine
• **Drought-resistant:** Sahbhagi, CR Dhan 201

**Planting:**
• **Transplanting:** 25-30 days old seedlings
• **Direct seeding:** Pre-germinated seeds
• **SRI method:** 8-12 days old seedlings
• **Spacing:** 20x20 cm (SRI), 15x15 cm (traditional)

**Water Management:**
• **Transplanting:** 2-3 cm standing water
• **Tillering:** 2-3 cm standing water
• **Panicle initiation:** 5-7 cm standing water
• **Grain filling:** 2-3 cm standing water

**Fertilizer:**
• **NPK:** 120:60:40 kg/hectare
• **Basal:** 50% N + 100% P + 100% K
• **Tillering:** 25% N at 25-30 days
• **Panicle initiation:** 25% N at 45-50 days

**Harvesting:**
• **Timing:** 30-35 days after flowering
• **Moisture:** 20-25%
• **Method:** Combine harvester or manual

What specific aspect of rice cultivation do you need help with?`:a.includes("wheat fertilizer schedule")?`**WHEAT FERTILIZER SCHEDULE:**

**NPK Requirements:**
• **Nitrogen (N):** 120 kg/hectare
• **Phosphorus (P):** 60 kg/hectare
• **Potassium (K):** 40 kg/hectare

**Application Schedule:**
• **Basal Application (at sowing):**
  - 50% N + 100% P + 100% K
  - Mix with soil before sowing
  - Use DAP (18:46:0) or SSP

• **First Top Dressing (21-25 days):**
  - 25% N (30 kg/hectare)
  - At crown root initiation stage
  - Use urea or ammonium sulfate

• **Second Top Dressing (45-50 days):**
  - 25% N (30 kg/hectare)
  - At flag leaf stage
  - Use urea or ammonium sulfate

**Micronutrients:**
• **Zinc:** 25 kg zinc sulfate/hectare
• **Boron:** 10 kg borax/hectare
• **Iron:** 50 kg ferrous sulfate/hectare

**Organic Options:**
• **Farmyard manure:** 10-15 tons/hectare
• **Vermicompost:** 2-3 tons/hectare
• **Green manure:** Mustard or Dhaincha

**Tips:**
• Test soil before applying
• Avoid excessive nitrogen
• Use slow-release fertilizers
• Consider foliar application

What's your soil type and wheat variety?`:a.includes("soil ph management")?`**SOIL pH MANAGEMENT GUIDE:**

**Ideal pH Ranges:**
• **Rice:** 5.5-6.5 (slightly acidic)
• **Wheat:** 6.5-7.5 (neutral)
• **Maize:** 6.0-7.0 (slightly acidic)
• **Cotton:** 6.0-8.0 (neutral to alkaline)
• **Vegetables:** 6.0-7.0

**pH Testing:**
• **Method:** pH meter or test kit
• **Frequency:** Annually
• **Depth:** 0-15 cm and 15-30 cm
• **Locations:** Multiple spots in field

**pH Adjustment:**
• **To increase pH (reduce acidity):**
  - Lime: 1-2 tons/hectare
  - Wood ash: 500-1000 kg/hectare
  - Dolomite: 1-2 tons/hectare

• **To decrease pH (reduce alkalinity):**
  - Sulfur: 100-200 kg/hectare
  - Organic matter: 10-15 tons/hectare
  - Acid-forming fertilizers

**Application:**
• Apply 2-3 months before planting
• Mix well with soil
• Test pH after 3-4 months
• Reapply if needed

**Maintenance:**
• Regular soil testing
• Use pH-stable fertilizers
• Add organic matter
• Monitor crop response

What's your current soil pH and which crop are you growing?`:a.includes("pest control for crops")?`**INTEGRATED PEST MANAGEMENT (IPM):**

**Prevention Strategies:**
• **Resistant varieties:** Choose pest-resistant varieties
• **Crop rotation:** Break pest life cycles
• **Field hygiene:** Remove crop residues
• **Healthy seeds:** Use certified, treated seeds
• **Proper spacing:** Avoid overcrowding

**Natural Control Methods:**
• **Beneficial insects:** Ladybugs, spiders, lacewings
• **Botanical pesticides:** Neem oil, garlic extract
• **Companion planting:** Marigold, basil, mint
• **Physical barriers:** Nets, traps, sticky boards
• **Biological control:** Bt, Trichoderma

**Chemical Control:**
• **Last resort:** Use only when necessary
• **Targeted application:** Apply to affected areas
• **Rotation:** Use different pesticides
• **Timing:** Apply at right growth stage
• **Safety:** Follow label instructions

**Monitoring:**
• **Regular inspection:** Check crops weekly
• **Early detection:** Identify problems early
• **Record keeping:** Track pest activity
• **Threshold levels:** Know when to act

**Common Pests by Crop:**
• **Rice:** Brown plant hopper, stem borer
• **Wheat:** Aphids, armyworms
• **Maize:** Fall armyworm, corn borer
• **Cotton:** Bollworm, whitefly

Describe the specific pest problem you're facing!`:a.includes("irrigation timing")?`**IRRIGATION TIMING GUIDE:**

**Critical Irrigation Stages:**
• **Transplanting/Sowing:** Immediate irrigation
• **Crown root initiation:** 21-25 days
• **Tillering:** 45-50 days
• **Flowering:** 70-75 days
• **Grain filling:** 90-95 days

**Crop-Specific Timing:**
• **Rice:**
  - Transplanting: 2-3 cm standing water
  - Tillering: 2-3 cm standing water
  - Panicle initiation: 5-7 cm standing water
  - Grain filling: 2-3 cm standing water

• **Wheat:**
  - Crown root initiation: 21-25 days
  - Tillering: 45-50 days
  - Flowering: 70-75 days
  - Grain filling: 90-95 days

• **Maize:**
  - Germination: 7-10 days
  - Tasseling: 45-50 days
  - Silking: 50-55 days
  - Grain filling: 60-80 days

**Water Requirements:**
• **Rice:** 1200-1500 mm total
• **Wheat:** 400-500 mm total
• **Maize:** 500-600 mm total
• **Cotton:** 600-800 mm total

**Irrigation Methods:**
• **Drip:** Most efficient (90%)
• **Sprinkler:** Good coverage (80%)
• **Flood:** Traditional (60%)

**Timing Tips:**
• Water early morning or evening
• Monitor soil moisture
• Use weather forecasts
• Avoid over-irrigation

What crop are you growing and what's your irrigation method?`:a.includes("yield prediction methods")?`**YIELD PREDICTION METHODS:**

**Field-Based Methods:**
• **Crop growth monitoring:**
  - Tillering count (wheat)
  - Panicle count (rice)
  - Plant height and vigor
  - Leaf area index

• **Yield components:**
  - Number of tillers/panicles
  - Grains per panicle
  - Grain weight
  - Harvest index

**Technology-Based Methods:**
• **Remote sensing:**
  - Satellite imagery
  - NDVI (Normalized Difference Vegetation Index)
  - Crop health assessment
  - Area estimation

• **Weather data:**
  - Rainfall patterns
  - Temperature trends
  - Humidity levels
  - Solar radiation

**Soil-Based Methods:**
• **Soil testing:**
  - Nutrient levels
  - pH and organic matter
  - Water holding capacity
  - Soil health indicators

**Yield Prediction Models:**
• **Empirical models:** Based on historical data
• **Process-based models:** Simulate crop growth
• **Machine learning:** AI-powered predictions
• **Hybrid models:** Combine multiple approaches

**Our AI System:**
• Analyzes multiple factors
• Provides real-time predictions
• Updates based on current conditions
• Gives confidence intervals

**Factors Affecting Yield:**
• **Genetic:** Variety characteristics
• **Environmental:** Weather, soil
• **Management:** Fertilizer, irrigation
• **Biotic:** Pests, diseases

What crop are you growing and what data do you have available?`:`I understand you're asking about "${h}". While I specialize in agricultural topics, I'd be happy to help! 

Here are some areas I can assist with:
• Crop selection and planting advice
• Weather and climate information
• Soil health and fertilizer recommendations
• Irrigation and water management
• Pest and disease control
• Market trends and farming economics
• Modern farming techniques and technology

Could you rephrase your question or ask about a specific agricultural topic? I'm here to help you succeed in farming! 🌾`},Z=async()=>{if(!d.trim()||f)return;const h=d.trim(),a={id:Date.now().toString(),text:h,isUser:!0,timestamp:new Date};m(T=>[...T,a]),b(""),S(!0),setTimeout(()=>{const T=H(h),C={id:(Date.now()+1).toString(),text:T,isUser:!1,timestamp:new Date};m(E=>[...E,C]),r(E=>{const $=E.currentTopic||v(h),V=I($),X=M($);return{...E,previousResponses:[...E.previousResponses.slice(-4),T],followUpQuestions:V,relatedTopics:X}}),S(!1),setTimeout(()=>{x.current?.focus()},100)},1e3+Math.random()*1e3)},P=h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),Z())},R=h=>{const a={id:Date.now().toString(),text:h,isUser:!0,timestamp:new Date};m(T=>[...T,a]),S(!0),setTimeout(()=>{const T=H(h),C={id:(Date.now()+1).toString(),text:T,isUser:!1,timestamp:new Date};m(E=>[...E,C]),r(E=>{const $=E.currentTopic||v(h),V=I($),X=M($);return{...E,previousResponses:[...E.previousResponses.slice(-4),T],followUpQuestions:V,relatedTopics:X}}),S(!1),setTimeout(()=>{x.current?.focus()},100)},1e3+Math.random()*1e3)},w=h=>h.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return e.jsx("div",{className:"fixed bottom-4 right-4 z-50",children:n?e.jsxs(O,{className:"w-80 h-96 shadow-2xl border-2",children:[e.jsx(z,{className:"pb-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary rounded-full flex items-center justify-center",children:e.jsx(Ne,{className:"w-4 h-4 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx(U,{className:"text-sm",children:t("agriAssistant")}),e.jsx(D,{variant:"secondary",className:"text-xs",children:t("online")})]})]}),e.jsx(k,{variant:"ghost",size:"sm",onClick:()=>i(!1),className:"h-6 w-6 p-0",children:e.jsx(ue,{className:"w-4 h-4"})})]})}),e.jsxs(B,{className:"p-0 flex flex-col h-full",children:[e.jsx(Yt,{className:"flex-1 px-4",children:e.jsxs("div",{className:"space-y-4 pb-4",children:[l.map(h=>e.jsx("div",{className:`flex ${h.isUser?"justify-end":"justify-start"}`,children:e.jsx("div",{className:`max-w-[80%] rounded-lg px-3 py-2 ${h.isUser?"bg-primary text-primary-foreground":"bg-muted"}`,children:e.jsxs("div",{className:"flex items-start gap-2",children:[!h.isUser&&e.jsx(Ne,{className:"w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm whitespace-pre-wrap",children:h.text}),e.jsx("p",{className:`text-xs mt-1 ${h.isUser?"text-primary-foreground/70":"text-muted-foreground"}`,children:w(h.timestamp)})]}),h.isUser&&e.jsx(Bs,{className:"w-4 h-4 mt-0.5 text-primary-foreground/70 flex-shrink-0"})]})})},h.id)),f&&e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"bg-muted rounded-lg px-3 py-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ne,{className:"w-4 h-4 text-muted-foreground"}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-muted-foreground rounded-full animate-bounce"}),e.jsx("div",{className:"w-2 h-2 bg-muted-foreground rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),e.jsx("div",{className:"w-2 h-2 bg-muted-foreground rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})]})})}),e.jsx("div",{ref:g}),l.length===0&&!f&&e.jsxs("div",{className:"px-4 pb-4",children:[e.jsxs("p",{className:"text-xs text-muted-foreground mb-2",children:[t("quickQuestions"),":"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:p.map((h,a)=>e.jsx(k,{variant:"outline",size:"sm",className:"text-xs h-auto py-1 px-2 whitespace-normal text-left",onClick:()=>R(h),disabled:f,children:h},a))})]}),l.length>0&&!f&&l[l.length-1]?.isUser===!1&&e.jsxs("div",{className:"px-4 pb-2 space-y-3",children:[j.followUpQuestions.length>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-muted-foreground mb-2",children:[t("continueConversation"),":"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:j.followUpQuestions.map((h,a)=>e.jsx(k,{variant:"outline",size:"sm",className:"text-xs h-auto py-1 px-2 whitespace-normal text-left bg-primary/10 hover:bg-primary/20 border-primary/20",onClick:()=>R(h),disabled:f,children:h},a))})]}),j.relatedTopics.length>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-muted-foreground mb-2",children:[t("relatedTopics"),":"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:j.relatedTopics.map((h,a)=>e.jsx(k,{variant:"outline",size:"sm",className:"text-xs h-auto py-1 px-2 whitespace-normal text-left",onClick:()=>R(`Tell me about ${h}`),disabled:f,children:h},a))})]})]})]})}),e.jsx("div",{className:"p-4 border-t",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(F,{ref:x,value:d,onChange:h=>b(h.target.value),onKeyPress:P,placeholder:t(f?"botIsTyping":"askAboutCrops"),disabled:f,className:"flex-1 text-sm"}),e.jsx(k,{onClick:Z,size:"sm",disabled:!d.trim()||f,className:"px-3",children:e.jsx(Gs,{className:"w-4 h-4"})})]})})]})]}):e.jsx(k,{onClick:()=>i(!0),className:"w-14 h-14 rounded-full shadow-2xl hover:scale-105 transition-transform",size:"lg",children:e.jsx($s,{className:"w-6 h-6"})})})};function Fa(){const{theme:t,setTheme:s}=Ia();return e.jsxs(k,{variant:"outline",size:"icon",onClick:()=>s(t==="light"?"dark":"light"),className:"relative",children:[e.jsx(_s,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),e.jsx(Ks,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}const Qt=ks,Jt=Ss,Wa=c.forwardRef(({className:t,inset:s,children:n,...i},o)=>e.jsxs(rt,{ref:o,className:y("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",t),...i,children:[n,e.jsx(Dt,{className:"ml-auto h-4 w-4"})]}));Wa.displayName=rt.displayName;const Oa=c.forwardRef(({className:t,...s},n)=>e.jsx(ot,{ref:n,className:y("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...s}));Oa.displayName=ot.displayName;const Fe=c.forwardRef(({className:t,sideOffset:s=4,...n},i)=>e.jsx(Cs,{children:e.jsx(lt,{ref:i,sideOffset:s,className:y("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})}));Fe.displayName=lt.displayName;const de=c.forwardRef(({className:t,inset:s,...n},i)=>e.jsx(ct,{ref:i,className:y("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",t),...n}));de.displayName=ct.displayName;const za=c.forwardRef(({className:t,children:s,checked:n,...i},o)=>e.jsxs(dt,{ref:o,className:y("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:n,...i,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(mt,{children:e.jsx(he,{className:"h-4 w-4"})})}),s]}));za.displayName=dt.displayName;const Ua=c.forwardRef(({className:t,children:s,...n},i)=>e.jsxs(ut,{ref:i,className:y("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(mt,{children:e.jsx(Vs,{className:"h-2 w-2 fill-current"})})}),s]}));Ua.displayName=ut.displayName;const Re=c.forwardRef(({className:t,inset:s,...n},i)=>e.jsx(pt,{ref:i,className:y("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",t),...n}));Re.displayName=pt.displayName;const Ae=c.forwardRef(({className:t,...s},n)=>e.jsx(ht,{ref:n,className:y("-mx-1 my-1 h-px bg-muted",t),...s}));Ae.displayName=ht.displayName;const _e=[{code:"en",name:"English",native:"English"},{code:"hi",name:"Hindi",native:"हिंदी"}];function Ba(){const{language:t,setLanguage:s}=L(),n=_e.find(i=>i.code===t);return e.jsxs(Qt,{children:[e.jsx(Jt,{asChild:!0,children:e.jsxs(k,{variant:"outline",size:"sm",className:"gap-2",children:[e.jsx(Ys,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline-block",children:n?.native||"English"})]})}),e.jsx(Fe,{align:"end",className:"w-48",children:_e.map(i=>e.jsxs(de,{onClick:()=>s(i.code),className:t===i.code?"bg-accent":"",children:[e.jsx("span",{className:"font-medium",children:i.native}),e.jsx("span",{className:"ml-auto text-sm text-muted-foreground",children:i.name})]},i.code))})]})}const Ga=[{state:"Punjab",district:"Ludhiana",city:"Ludhiana"},{state:"Punjab",district:"Amritsar",city:"Amritsar"},{state:"Haryana",district:"Karnal",city:"Karnal"},{state:"Haryana",district:"Hisar",city:"Hisar"},{state:"Uttar Pradesh",district:"Meerut",city:"Meerut"},{state:"Uttar Pradesh",district:"Agra",city:"Agra"},{state:"Maharashtra",district:"Pune",city:"Pune"},{state:"Maharashtra",district:"Nashik",city:"Nashik"},{state:"Karnataka",district:"Bangalore Rural",city:"Bangalore"},{state:"Karnataka",district:"Mysore",city:"Mysore"},{state:"Tamil Nadu",district:"Coimbatore",city:"Coimbatore"},{state:"Tamil Nadu",district:"Madurai",city:"Madurai"},{state:"Andhra Pradesh",district:"Krishna",city:"Vijayawada"},{state:"Andhra Pradesh",district:"Guntur",city:"Guntur"},{state:"Telangana",district:"Rangareddy",city:"Hyderabad"},{state:"Telangana",district:"Medak",city:"Medak"},{state:"Gujarat",district:"Ahmedabad",city:"Ahmedabad"},{state:"Gujarat",district:"Rajkot",city:"Rajkot"},{state:"Rajasthan",district:"Jaipur",city:"Jaipur"},{state:"Rajasthan",district:"Jodhpur",city:"Jodhpur"}];function $a(){const{t}=L(),{location:s,isLoading:n,error:i,getCurrentLocation:o,setManualLocation:l}=xe(),[m,d]=c.useState(null),b=r=>{d(r);const x={Ludhiana:{lat:30.901,lng:75.8573},Amritsar:{lat:31.634,lng:74.8723},Karnal:{lat:29.6857,lng:76.9905},Hisar:{lat:29.1667,lng:75.7167},Meerut:{lat:28.9845,lng:77.7064},Agra:{lat:27.1767,lng:78.0081},Pune:{lat:18.5204,lng:73.8567},Nashik:{lat:19.9975,lng:73.7898},Bangalore:{lat:12.9716,lng:77.5946},Mysore:{lat:12.2958,lng:76.6394},Coimbatore:{lat:11.0168,lng:76.9558},Madurai:{lat:9.9252,lng:78.1198},Vijayawada:{lat:16.5062,lng:80.648},Guntur:{lat:16.3067,lng:80.4365},Hyderabad:{lat:17.385,lng:78.4867},Medak:{lat:18.0333,lng:78.2667},Ahmedabad:{lat:23.0225,lng:72.5714},Rajkot:{lat:22.3039,lng:70.8022},Jaipur:{lat:26.9124,lng:75.7873},Jodhpur:{lat:26.2389,lng:73.0243}}[r.city];x&&l(x.lat,x.lng,r.city,r.state)},f=()=>{if(s){if(s.city&&s.state)return`${s.city}, ${s.state}`;if(s.latitude&&s.longitude)return`${s.latitude.toFixed(4)}, ${s.longitude.toFixed(4)}`}return m?`${m.city}, ${m.state}`:t("selectLocation")},j=n?{icon:Ee,text:"Getting location...",color:"text-blue-500"}:i?{icon:pe,text:"Location error",color:"text-red-500"}:s?{icon:Et,text:"Location active",color:"text-green-500"}:{icon:J,text:"No location",color:"text-muted-foreground"};return e.jsx("div",{className:"relative",children:e.jsxs(Qt,{children:[e.jsx(Jt,{asChild:!0,children:e.jsxs(k,{variant:"outline",className:"gap-2 min-w-[180px] max-w-[250px] justify-start",children:[e.jsx(j.icon,{className:`h-4 w-4 ${j.color} ${n?"animate-spin":""}`}),e.jsx("span",{className:"truncate",children:f()}),e.jsx(De,{className:"h-4 w-4 ml-auto text-muted-foreground"})]})}),e.jsxs(Fe,{align:"start",side:"bottom",className:"w-[350px] max-h-[500px] overflow-y-auto",children:[e.jsxs(Re,{className:"flex items-center gap-2",children:[e.jsx(Se,{className:"h-4 w-4"}),"Location Options"]}),e.jsx(Ae,{}),e.jsx(de,{onClick:o,disabled:n,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Se,{className:"h-4 w-4"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-medium",children:"Use Current Location"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Get GPS coordinates"})]})]})}),e.jsx(Ae,{}),e.jsx(Re,{children:"Or select from list:"}),Ga.map((r,g)=>e.jsx(de,{onClick:()=>b(r),className:m===r?"bg-accent":"",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-medium",children:r.city}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[r.district,", ",r.state]})]})},g))]})]})})}function Zt(){return L(),e.jsx("header",{className:"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:e.jsxs("div",{className:"container flex h-16 items-center justify-between",children:[e.jsx("div",{className:"flex items-center gap-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary",children:e.jsx(Lt,{className:"h-5 w-5 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-foreground",children:"AstroCrop"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"AI Farming Assistant"})]})]})}),e.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[e.jsx("div",{className:"relative",children:e.jsx($a,{})}),e.jsxs("div",{className:"flex items-center gap-1 sm:gap-2",children:[e.jsx(Ba,{}),e.jsx(Fa,{})]})]})]})})}class Ke{static API_BASE_URL=ce.WEATHER_API_BASE_URL;static API_KEY=ce.WEATHER_API_KEY;static async fetchWeatherData(s,n){const i=await fetch(`${this.API_BASE_URL}/weather?lat=${s}&lon=${n}&appid=${this.API_KEY}&units=metric`);if(!i.ok)throw new Error(`Weather API error: ${i.status}`);const o=await i.json(),l=this.generateForecast(s,n);return{temperature:Math.round(o.main.temp),humidity:o.main.humidity,rainfall:o.rain?.["1h"]||0,windSpeed:Math.round(o.wind.speed*3.6),condition:o.weather[0].description,lastUpdated:new Date().toLocaleTimeString(),forecast:l}}static generateLocationBasedWeather(s,n){const o=new Date().getMonth(),l=s>0,m=Math.sin(l?(o+9)%12/12*2*Math.PI:(o+3)%12/12*2*Math.PI),d=25+Math.sin(s*Math.PI/180)*10,b=m*8,f=60+Math.cos(s*Math.PI/90)*15,S=this.generateForecast(s,n),j=this.getWeatherConditionWithTrend(S[0].condition),g=j.includes("Rain")||j.includes("Thunderstorm")?1+Math.random()*4:Math.random()*.5;return{temperature:Math.round(d+b+(Math.random()-.5)*3),humidity:Math.round(f+(Math.random()-.5)*10),rainfall:g,windSpeed:Math.round(8+(Math.random()-.5)*8),condition:j,lastUpdated:new Date().toLocaleTimeString(),forecast:S}}static generateForecast(s,n){const i=[],o=new Date,l=25+Math.sin(s*Math.PI/180)*10,m=o.getMonth(),d=s>0,f=Math.sin(d?(m+9)%12/12*2*Math.PI:(m+3)%12/12*2*Math.PI)*8,S=60+Math.cos(s*Math.PI/90)*15;let j=this.getRandomCondition();for(let r=1;r<=7;r++){const g=new Date(o);g.setDate(o.getDate()+r);const x=(Math.random()-.5)*4+(r>1?(i[r-2].temperature-l-f)*.3:0),u=(Math.random()-.5)*15+(r>1?(i[r-2].humidity-S)*.4:0),p=this.getWeatherConditionWithTrend(j);j=p;const v=p.includes("Rain")||p.includes("Thunderstorm")?2+Math.random()*6:Math.random()*.5,I=(Math.random()-.5)*8+(r>1?(i[r-2].windSpeed-8)*.3:0);i.push({date:g.toLocaleDateString(),temperature:Math.round(l+f+x),humidity:Math.round(S+u),rainfall:Math.max(0,v),windSpeed:Math.round(8+I),condition:p})}return i}static getRandomCondition(){return ke[Math.floor(Math.random()*ke.length)]}static getWeatherConditionWithTrend(s){const n=[...ke],i=["Clear","Partly Cloudy"],o=["Partly Cloudy","Cloudy","Fog"],l=["Cloudy","Light Rain","Moderate Rain"],m=["Moderate Rain","Heavy Rain","Thunderstorm"];let d=[];return Math.random()<.6?i.includes(s)?d=i:o.includes(s)?d=o:l.includes(s)?d=l:m.includes(s)&&(d=m):s==="Clear"?d=["Clear","Partly Cloudy","Cloudy"]:s==="Partly Cloudy"?d=["Clear","Cloudy","Light Rain"]:s==="Cloudy"?d=["Partly Cloudy","Light Rain","Fog"]:s==="Light Rain"?d=["Cloudy","Moderate Rain"]:s==="Moderate Rain"?d=["Light Rain","Heavy Rain"]:s==="Heavy Rain"?d=["Moderate Rain","Thunderstorm"]:s==="Thunderstorm"?d=["Heavy Rain","Moderate Rain"]:s==="Fog"&&(d=["Cloudy","Partly Cloudy"]),d.length===0&&(d=n),d[Math.floor(Math.random()*d.length)]}}const Ve=c.memo(function({weatherData:s,showForecast:n=!1}){const{t:i}=L(),{location:o}=xe(),[l,m]=c.useState(null),[d,b]=c.useState(!1),[f,S]=c.useState(null),j={temperature:28,humidity:65,rainfall:2.5,windSpeed:12,condition:i("partlyCloudy"),lastUpdated:new Date().toLocaleTimeString(),forecast:Array.from({length:7},(p,N)=>{const v=new Date;return v.setDate(v.getDate()+N+1),{date:v.toLocaleDateString(),temperature:Math.round(25+(Math.random()-.5)*8),humidity:Math.round(60+(Math.random()-.5)*20),rainfall:Math.max(0,Math.random()*8),windSpeed:Math.round(8+(Math.random()-.5)*10),condition:["Clear","Partly Cloudy","Cloudy","Light Rain"][Math.floor(Math.random()*4)]}})},r=c.useCallback(async(p,N)=>{b(!0),S(null);try{const v=await Ke.fetchWeatherData(p,N);m(v)}catch{const I=Ke.generateLocationBasedWeather(p,N);m(I)}finally{b(!1)}},[]);c.useEffect(()=>{o?.latitude&&o?.longitude?r(o.latitude,o.longitude):m(null)},[o?.latitude,o?.longitude,r]);const g=c.useCallback(()=>{o?.latitude&&o?.longitude&&r(o.latitude,o.longitude)},[o?.latitude,o?.longitude,r]),x=c.useCallback(()=>{if(o){if(o.city&&o.state)return`${o.city}, ${o.state}`;if(o.latitude&&o.longitude)return`${o.latitude.toFixed(4)}, ${o.longitude.toFixed(4)}`}return i("locationNotSet")},[o,i]),u=s||l||j;return e.jsxs(O,{className:"shadow-card h-full",children:[e.jsx(z,{children:e.jsxs(U,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(je,{className:"h-5 w-5 text-primary"}),i("currentWeather"),d&&e.jsx(Ee,{className:"h-4 w-4 animate-spin text-blue-500"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(J,{className:"h-3 w-3"}),e.jsx("span",{className:"truncate max-w-[120px]",title:x(),children:x()})]}),o&&e.jsx(k,{variant:"ghost",size:"sm",onClick:g,disabled:d,className:"h-6 w-6 p-0",children:e.jsx(At,{className:`h-3 w-3 ${d?"animate-spin":""}`})})]})]})}),e.jsxs(B,{className:"flex flex-col flex-grow",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 flex-grow",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-lg bg-muted/50",children:[e.jsx(Te,{className:"h-5 w-5 text-orange-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:i("temperature")}),e.jsxs("p",{className:"text-lg font-semibold",children:[u.temperature,"°C"]})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-lg bg-muted/50",children:[e.jsx(Q,{className:"h-5 w-5 text-blue-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:i("humidity")}),e.jsxs("p",{className:"text-lg font-semibold",children:[u.humidity,"%"]})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-lg bg-muted/50",children:[e.jsx(je,{className:"h-5 w-5 text-gray-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:i("rainfall")}),e.jsxs("p",{className:"text-lg font-semibold",children:[u.rainfall.toFixed(1),"mm"]})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-lg bg-muted/50",children:[e.jsx(ze,{className:"h-5 w-5 text-teal-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:i("windSpeed")}),e.jsxs("p",{className:"text-lg font-semibold",children:[u.windSpeed," ",i("kmh")]})]})]})]}),u.lastUpdated&&e.jsxs("div",{className:"mt-4 text-xs text-muted-foreground text-center",children:[i("lastUpdated"),": ",u.lastUpdated]}),n&&e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(K,{className:"h-4 w-4"}),e.jsx("span",{className:"font-medium",children:i("sevenDayForecast")})]}),u.forecast&&e.jsx("div",{className:"space-y-2",children:u.forecast.map((p,N)=>e.jsxs("div",{className:"p-2 rounded-lg bg-muted/50 text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"font-medium",children:p.date}),e.jsx("div",{className:"text-muted-foreground",children:p.condition})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-1 mt-1",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Te,{className:"h-3 w-3 text-orange-500"}),e.jsxs("span",{children:[p.temperature,"°C"]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Q,{className:"h-3 w-3 text-blue-500"}),e.jsxs("span",{children:[p.humidity,"%"]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(je,{className:"h-3 w-3 text-gray-500"}),e.jsxs("span",{children:[p.rainfall.toFixed(1),"mm"]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ze,{className:"h-3 w-3 text-teal-500"}),e.jsxs("span",{children:[p.windSpeed,i("kmh")]})]})]})]},N))})]})]})]})}),_a=me("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),q=c.forwardRef(({className:t,...s},n)=>e.jsx(gt,{ref:n,className:y(_a(),t),...s}));q.displayName=gt.displayName;const Ka=As,Va=Ds,Xt=c.forwardRef(({className:t,children:s,...n},i)=>e.jsxs(xt,{ref:i,className:y("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...n,children:[s,e.jsx(Ts,{asChild:!0,children:e.jsx(De,{className:"h-4 w-4 opacity-50"})})]}));Xt.displayName=xt.displayName;const es=c.forwardRef(({className:t,...s},n)=>e.jsx(ft,{ref:n,className:y("flex cursor-default items-center justify-center py-1",t),...s,children:e.jsx(qs,{className:"h-4 w-4"})}));es.displayName=ft.displayName;const ts=c.forwardRef(({className:t,...s},n)=>e.jsx(yt,{ref:n,className:y("flex cursor-default items-center justify-center py-1",t),...s,children:e.jsx(De,{className:"h-4 w-4"})}));ts.displayName=yt.displayName;const ss=c.forwardRef(({className:t,children:s,position:n="popper",...i},o)=>e.jsx(Ms,{children:e.jsxs(Nt,{ref:o,className:y("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:n,...i,children:[e.jsx(es,{}),e.jsx(Is,{className:y("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),e.jsx(ts,{})]})}));ss.displayName=Nt.displayName;const Ya=c.forwardRef(({className:t,...s},n)=>e.jsx(jt,{ref:n,className:y("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...s}));Ya.displayName=jt.displayName;const as=c.forwardRef(({className:t,children:s,...n},i)=>e.jsxs(bt,{ref:i,className:y("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(Ps,{children:e.jsx(he,{className:"h-4 w-4"})})}),e.jsx(Rs,{children:s})]}));as.displayName=bt.displayName;const qa=c.forwardRef(({className:t,...s},n)=>e.jsx(vt,{ref:n,className:y("-mx-1 my-1 h-px bg-muted",t),...s}));qa.displayName=vt.displayName;const _=c.forwardRef(({className:t,value:s,...n},i)=>e.jsx(wt,{ref:i,className:y("relative h-4 w-full overflow-hidden rounded-full bg-secondary",t),...n,children:e.jsx(Es,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(s||0)}%)`}})}));_.displayName=wt.displayName;const Ye=c.memo(function(){const{t:s}=L(),{location:n}=xe(),[i,o]=c.useState({cropType:"",soilPH:"",nitrogen:"",phosphorus:"",potassium:"",area:"1"}),[l,m]=c.useState({soilPH:"",nitrogen:"",phosphorus:"",potassium:"",area:""}),[d,b]=c.useState(null),[f,S]=c.useState(!1),j=c.useCallback(()=>{if(n){if(n.city&&n.state)return`${n.city}, ${n.state}`;if(n.latitude&&n.longitude)return`${n.latitude.toFixed(4)}, ${n.longitude.toFixed(4)}`}return"Location not set"},[n]),r=(u,p)=>{let N="";if(p==="")return N;const v=parseFloat(p);switch(u){case"soilPH":v<A.SOIL_PH.min||v>A.SOIL_PH.max?N="pH must be between 0-14":(v<A.SOIL_PH.warningMin||v>A.SOIL_PH.warningMax)&&(N="Warning: Extreme pH value for crop growth");break;case"nitrogen":case"phosphorus":case"potassium":v<A.NPK_MIN&&(N="Value must be positive");break;case"area":v<A.AREA_MIN&&(N="Area must be greater than 0");break}return m(I=>({...I,[u]:N})),N},g=c.useCallback(u=>{const{name:p,value:N}=u.target;o(v=>({...v,[p]:N})),r(p,N)},[]),x=async()=>{if(!i.cropType||!i.soilPH||!i.area)return;const u=parseFloat(i.soilPH),p=parseFloat(i.nitrogen)||0,N=parseFloat(i.phosphorus)||0,v=parseFloat(i.potassium)||0,I=parseFloat(i.area)||1;let M=!1;const H={soilPH:"",nitrogen:"",phosphorus:"",potassium:"",area:""};u<A.SOIL_PH.min||u>A.SOIL_PH.max?(H.soilPH="pH must be between 0-14",M=!0):(u<A.SOIL_PH.warningMin||u>A.SOIL_PH.warningMax)&&(H.soilPH="Warning: Extreme pH value for crop growth"),p<A.NPK_MIN&&(H.nitrogen="Value must be positive",M=!0),N<A.NPK_MIN&&(H.phosphorus="Value must be positive",M=!0),v<A.NPK_MIN&&(H.potassium="Value must be positive",M=!0),I<A.AREA_MIN&&(H.area="Area must be greater than 0",M=!0),m(H),!M&&(S(!0),setTimeout(()=>{const Z=ae.BASE_YIELDS[i.cropType]||3e3,P=ae.OPTIMAL_PH[i.cropType]||{min:6,max:7,optimal:6.5},R=ae.OPTIMAL_NPK[i.cropType]||{N:100,P:50,K:50};let w=!1,h=1;if(u<A.SOIL_PH.warningMin||u>A.SOIL_PH.warningMax)h=0,w=!0;else if(u<P.min){const ye=P.min-u;h=Math.max(0,Math.exp(-.5*ye)-.1)}else if(u>P.max){const ye=u-P.max;h=Math.max(0,Math.exp(-.5*ye)-.1)}else h=1-Math.abs(u-P.optimal)*.05;const a=p<=0?.5:Math.min(1.2,Math.max(.5,.7+p/R.N*.3)),T=N<=0?.5:Math.min(1.2,Math.max(.5,.7+N/R.P*.3)),C=v<=0?.5:Math.min(1.2,Math.max(.5,.7+v/R.K*.3)),E=Math.round(Z*h*a*T*C),$=Math.round(E*I),V=100-Math.abs(u-P.optimal)/7*50,X=p<=0?50:Math.min(100,p/R.N*100),ds=N<=0?50:Math.min(100,N/R.P*100),ms=v<=0?50:Math.min(100,v/R.K*100),us=Math.round((V+X+ds+ms)/4);let Oe="Optimal conditions for good yield.";const Y=[];u<P.min?Y.push(`Consider liming to increase soil pH from ${u} to the optimal range (${P.min}-${P.max}).`):u>P.max&&Y.push(`Consider adding organic matter to lower pH from ${u} to the optimal range (${P.min}-${P.max}).`),p<R.N*.7&&Y.push(`Increase nitrogen application to reach optimal level (${R.N} ppm).`),N<R.P*.7&&Y.push(`Increase phosphorus application to reach optimal level (${R.P} ppm).`),v<R.K*.7&&Y.push(`Increase potassium application to reach optimal level (${R.K} ppm).`),Y.length>0&&(Oe=Y.join(" ")),b(w?{expectedYield:0,totalYield:0,area:I,confidence:0,recommendation:"Crop cannot grow under these extreme conditions. Consider adjusting your inputs to realistic values.",impossibleConditions:!0}:{expectedYield:E,totalYield:$,area:I,confidence:Math.min(A.CONFIDENCE_MAX,Math.max(A.CONFIDENCE_MIN,us)),recommendation:Oe,impossibleConditions:!1}),S(!1)},2e3))};return e.jsxs(O,{className:"shadow-card",children:[e.jsx(z,{className:"pb-4",children:e.jsxs(U,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Me,{className:"h-5 w-5 text-primary"}),s("yieldPrediction")]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(J,{className:"h-3 w-3"}),e.jsx("span",{className:"truncate max-w-[150px]",title:j(),children:j()})]})]})}),e.jsxs(B,{className:"pt-0 space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(q,{htmlFor:"crop",children:s("cropType")}),e.jsxs(Ka,{value:i.cropType,onValueChange:u=>o({...i,cropType:u}),children:[e.jsx(Xt,{children:e.jsx(Va,{placeholder:s("selectCrop")})}),e.jsx(ss,{children:ae.CROPS.map(u=>e.jsx(as,{value:u,children:u},u))})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(q,{htmlFor:"ph",children:s("soilPH")}),e.jsx(F,{id:"ph",name:"soilPH",type:"number",placeholder:"6.5",step:"0.1",min:"0",max:"14",value:i.soilPH,onChange:g,className:l.soilPH?"border-red-500":""}),l.soilPH&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:l.soilPH})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(q,{htmlFor:"nitrogen",children:[s("nitrogen")," (",s("ppm"),")"]}),e.jsx(F,{id:"nitrogen",name:"nitrogen",type:"number",placeholder:"50",value:i.nitrogen,onChange:g,className:l.nitrogen?"border-red-500":""}),l.nitrogen&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:l.nitrogen})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(q,{htmlFor:"phosphorus",children:[s("phosphorus")," (",s("ppm"),")"]}),e.jsx(F,{id:"phosphorus",name:"phosphorus",type:"number",placeholder:"25",value:i.phosphorus,onChange:g,className:l.phosphorus?"border-red-500":""}),l.phosphorus&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:l.phosphorus})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(q,{htmlFor:"potassium",children:[s("potassium")," (",s("ppm"),")"]}),e.jsx(F,{id:"potassium",name:"potassium",type:"number",placeholder:"25",value:i.potassium,onChange:g,className:l.potassium?"border-red-500":""}),l.potassium&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:l.potassium})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(q,{htmlFor:"area",children:[s("area")," (",s("hectare"),")"]}),e.jsx(F,{id:"area",name:"area",type:"number",placeholder:"1",min:"0.1",step:"0.1",value:i.area,onChange:g,className:l.area?"border-red-500":""}),l.area&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:l.area})]})]}),e.jsxs(k,{onClick:x,disabled:!i.cropType||!i.soilPH||!i.area||f,className:"w-full bg-gradient-primary hover:opacity-90",children:[e.jsx(Qs,{className:"h-4 w-4 mr-2"}),s(f?"analyzing":"predict")]}),d&&e.jsxs("div",{className:`mt-6 p-4 rounded-lg ${d.impossibleConditions?"bg-red-50 border border-red-200":"bg-gradient-field/10 border border-primary/20"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(ge,{className:"h-5 w-5 text-primary"}),e.jsx("h4",{className:"font-semibold",children:s("predictedYield")})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-muted-foreground",children:s("predictedYield")}),e.jsxs("span",{className:"font-bold text-primary",children:[d.expectedYield," ",s("kgPerHectare")]})]}),e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:[s("totalYield")," (",d.area," ",s("hectare"),")"]}),e.jsxs("span",{className:"font-bold text-green-600",children:[d.totalYield," kg"]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-muted-foreground",children:s("confidence")}),e.jsxs("span",{className:"font-medium",children:[d.confidence,"%"]})]}),e.jsx(_,{value:d.confidence,className:"h-2"})]}),e.jsx("div",{className:"mt-3 p-3 rounded bg-muted/50",children:e.jsxs("p",{className:"text-sm",children:[e.jsxs("strong",{children:[s("recommendation"),":"]})," ",d.recommendation]})})]})]})]})]})});function qe(){const{t}=L(),s={nitrogen:120,phosphorus:60,potassium:40,totalAmount:220,applicationTiming:[t("basalApplication"),t("firstTopDressing"),t("secondTopDressing")],soilpH:6.8,organicMatter:"2.4%",recommendedProducts:[{name:"Premium NPK Blend",npkRatio:"20-10-10",amountPerHectare:150},{name:"Phosphate Plus",npkRatio:"0-45-0",amountPerHectare:70}],applicationNotes:"Apply in moist soil conditions. Split nitrogen application to reduce leaching.",nextApplicationDate:"June 15, 2023",warningFlags:["Low organic matter","Potential nitrogen leaching risk"]};return e.jsxs(O,{className:"shadow-card",children:[e.jsx(z,{className:"pb-2",children:e.jsxs(U,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ie,{className:"h-5 w-5 text-primary"}),t("fertilizerRecommendation")]}),e.jsxs("div",{className:"flex items-center gap-2",children:[s.warningFlags.length>0&&e.jsx(te,{children:e.jsxs(oe,{children:[e.jsx(le,{children:e.jsx(Le,{className:"h-4 w-4 text-warning"})}),e.jsx(se,{children:e.jsxs("div",{className:"space-y-1 max-w-xs",children:[e.jsxs("p",{className:"font-medium",children:[t("warnings"),":"]}),e.jsx("ul",{className:"list-disc pl-4 text-xs",children:s.warningFlags.map((n,i)=>e.jsx("li",{children:n},i))})]})})]})}),e.jsxs(D,{variant:"outline",className:"flex items-center gap-1 text-xs",children:[e.jsx(K,{className:"h-3 w-3"}),t("next"),": ",s.nextApplicationDate]})]})]})}),e.jsx(B,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium text-sm text-muted-foreground flex items-center gap-1",children:[e.jsx(Js,{className:"h-4 w-4"}),t("npkRequirements")]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center",children:e.jsx("span",{className:"text-xs font-bold text-blue-600 dark:text-blue-400",children:"N"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-center mb-0.5",children:[e.jsx("span",{className:"text-xs",children:t("nitrogen")}),e.jsxs("span",{className:"text-xs font-bold",children:[s.nitrogen," kg"]})]}),e.jsx(_,{value:s.nitrogen/150*100,className:"h-1.5"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center",children:e.jsx("span",{className:"text-xs font-bold text-red-600 dark:text-red-400",children:"P"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-center mb-0.5",children:[e.jsx("span",{className:"text-xs",children:t("phosphorus")}),e.jsxs("span",{className:"text-xs font-bold",children:[s.phosphorus," kg"]})]}),e.jsx(_,{value:s.phosphorus/80*100,className:"h-1.5"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center",children:e.jsx("span",{className:"text-xs font-bold text-yellow-600 dark:text-yellow-400",children:"K"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-center mb-0.5",children:[e.jsx("span",{className:"text-xs",children:t("potassium")}),e.jsxs("span",{className:"text-xs font-bold",children:[s.potassium," kg"]})]}),e.jsx(_,{value:s.potassium/60*100,className:"h-1.5"})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between text-xs p-2 rounded-lg bg-gradient-primary/10 border border-primary/20",children:[e.jsx("span",{className:"text-muted-foreground",children:t("fertilizerAmount")}),e.jsxs("span",{className:"font-bold text-primary",children:[s.totalAmount," kg/ha"]})]}),e.jsxs("div",{className:"flex flex-col gap-1 text-xs",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:t("soilPh")}),e.jsx("span",{className:"font-medium",children:s.soilpH})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:t("organicMatter")}),e.jsx("span",{className:"font-medium",children:s.organicMatter})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium text-sm text-muted-foreground flex items-center gap-1",children:[e.jsx(ge,{className:"h-4 w-4"}),t("recommendedProducts")]}),e.jsx("div",{className:"space-y-2",children:s.recommendedProducts.map((n,i)=>e.jsxs("div",{className:"p-2 rounded bg-muted/50 text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"font-medium",children:n.name}),e.jsx(D,{variant:"secondary",className:"text-[10px]",children:n.npkRatio})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-muted-foreground",children:t("amount")}),e.jsxs("span",{className:"font-medium",children:[n.amountPerHectare," kg/ha"]})]})]},i))}),e.jsx("div",{className:"p-2 rounded bg-muted/30 border border-muted text-xs",children:e.jsxs("div",{className:"flex items-start gap-1 mb-1",children:[e.jsx(re,{className:"h-3 w-3 mt-0.5 flex-shrink-0 text-muted-foreground"}),e.jsx("p",{className:"text-muted-foreground",children:s.applicationNotes})]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium text-sm text-muted-foreground flex items-center gap-1",children:[e.jsx(He,{className:"h-4 w-4"}),t("applicationSchedule")]}),e.jsx("div",{className:"space-y-2",children:s.applicationTiming.map((n,i)=>e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded bg-muted/50",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary",children:i+1}),e.jsx("span",{className:"text-xs",children:n})]},i))}),e.jsx("div",{className:"text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-muted",children:e.jsx("p",{children:"These recommendations are based on soil analysis and crop requirements. Adjust application rates based on soil test results and local agricultural extension advice."})})]})]})})]})}function Qa({irrigationSchedule:t,onAddEvent:s,onEventClick:n,newEventDay:i,isAddEventOpen:o}){L();const[l,m]=c.useState(new Date),d=new Date(l.getFullYear(),l.getMonth()+1,0).getDate(),b=new Date(l.getFullYear(),l.getMonth(),1).getDay(),f=Array.from({length:d},(x,u)=>u+1),S=Array.from({length:b},(x,u)=>u),j=x=>t.find(u=>u.day===x),r=()=>{m(new Date(l.setMonth(l.getMonth()+1)))},g=()=>{m(new Date(l.setMonth(l.getMonth()-1)))};return e.jsxs(O,{className:"shadow-card h-full",children:[e.jsx(z,{className:"pb-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(U,{className:"flex items-center gap-2",children:[e.jsx(K,{className:"h-5 w-5 text-accent"}),"Irrigation Calendar"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{variant:"outline",size:"icon",onClick:g,className:"h-7 w-7",children:e.jsx(Zs,{className:"h-4 w-4"})}),e.jsx("span",{className:"text-sm font-medium min-w-[120px] text-center",children:l.toLocaleString("default",{month:"long",year:"numeric"})}),e.jsx(k,{variant:"outline",size:"icon",onClick:r,className:"h-7 w-7",children:e.jsx(Dt,{className:"h-4 w-4"})})]})]})}),e.jsxs(B,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"grid grid-cols-7 gap-1 text-center text-sm",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>e.jsx("div",{className:"py-2 text-muted-foreground font-medium",children:x},x))}),e.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[S.map((x,u)=>e.jsx("div",{className:"h-16 p-1"},`empty-${u}`)),f.map(x=>{const u=j(x);return e.jsxs("div",{className:y("h-16 p-1 relative rounded-lg border cursor-pointer hover:bg-muted/30 transition-all duration-200",x===i&&o?"bg-primary/20 border-primary ring-2 ring-primary ring-offset-1":"",u?u.completed?"bg-green-100 dark:bg-green-900/30 border-green-500":"bg-accent/10 border-accent":"border-border"),onClick:()=>{n(x),s(x)},children:[e.jsx("span",{className:y("text-sm font-medium",x===i&&o?"font-bold text-primary":""),children:x}),u&&e.jsx("div",{className:"absolute bottom-1 left-1 right-1",children:e.jsxs("div",{className:y("text-xs rounded px-1 py-0.5 truncate text-center",u.completed?"bg-green-200 dark:bg-green-900/50 dark:text-green-100":"bg-accent/20 dark:bg-accent/30"),children:[u.amount,"mm",u.completed&&e.jsx(he,{className:"h-3 w-3 inline ml-1"})]})})]},x)})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs(k,{variant:"outline",size:"sm",onClick:()=>s(1),className:"flex items-center gap-2",children:[e.jsx(Xs,{className:"h-4 w-4"}),"Add Irrigation Event"]})})]})]})}const ns=c.forwardRef(({className:t,...s},n)=>e.jsx(Ct,{ref:n,className:y("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...s,children:e.jsx(Ls,{className:y("flex items-center justify-center text-current"),children:e.jsx(he,{className:"h-4 w-4"})})}));ns.displayName=Ct.displayName;function Ja({irrigationSchedule:t,totalWater:s,onToggleCompletion:n,onRemoveEvent:i}){L();const o=m=>{switch(m){case"high":return"bg-red-500";case"medium":return"bg-yellow-500";case"low":return"bg-green-500";default:return"bg-gray-500"}},l=m=>{switch(m){case"high":return"destructive";case"medium":return"secondary";case"low":return"default";default:return"outline"}};return e.jsxs(O,{className:"shadow-card h-full",children:[e.jsx(z,{className:"pb-3",children:e.jsxs(U,{className:"flex items-center gap-2",children:[e.jsx(Pe,{className:"h-5 w-5 text-primary"}),"Irrigation Timeline"]})}),e.jsxs(B,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20",children:[e.jsx(Q,{className:"h-5 w-5 text-accent"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Total Water Requirement"}),e.jsxs("p",{className:"text-lg font-bold text-accent",children:[s," mm/season"]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-sm text-muted-foreground",children:"Upcoming Events"}),e.jsx("div",{className:"space-y-3 max-h-64 overflow-y-auto",children:t.map((m,d)=>e.jsxs("div",{className:"relative",children:[d<t.length-1&&e.jsx("div",{className:"absolute left-4 top-8 w-0.5 h-8 bg-border"}),e.jsxs("div",{className:y("flex items-start gap-3 p-3 rounded-lg transition-colors",m.completed?"bg-green-50 dark:bg-green-900/20":"bg-muted/30 hover:bg-muted/50 dark:hover:bg-muted/20"),children:[e.jsx("div",{className:"mt-1",children:e.jsx(ns,{checked:m.completed,onCheckedChange:()=>n(d),className:"data-[state=checked]:bg-green-500"})}),e.jsx("div",{className:`w-8 h-8 rounded-full ${o(m.priority)} flex items-center justify-center flex-shrink-0`,children:e.jsx(Pe,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:y("font-medium text-sm",m.completed&&"line-through text-muted-foreground"),children:["Day ",m.day]}),e.jsx(D,{variant:l(m.priority),className:"text-xs",children:m.priority})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"font-bold text-accent",children:[m.amount," mm"]}),e.jsx(k,{variant:"ghost",size:"icon",className:"h-6 w-6 text-muted-foreground hover:text-destructive",onClick:()=>i(d),children:e.jsx(ue,{className:"h-4 w-4"})})]})]}),e.jsx("p",{className:y("text-sm text-muted-foreground mb-1",m.completed&&"line-through"),children:m.stage}),e.jsx("p",{className:"text-xs text-muted-foreground",children:m.method})]})]})]},d))})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800",children:[e.jsxs("h5",{className:"font-medium text-sm text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2",children:[e.jsx(Le,{className:"h-4 w-4"}),"Water Management Tips"]}),e.jsxs("ul",{className:"text-xs text-blue-800 dark:text-blue-300 space-y-1",children:[e.jsx("li",{children:"• Apply water directly to root zone"}),e.jsx("li",{children:"• Use soil moisture sensors"}),e.jsx("li",{children:"• Implement deficit irrigation"}),e.jsx("li",{children:"• Collect rainwater when possible"})]})]})]})]})}const Za=Ws,Xa=Fs,is=c.forwardRef(({className:t,...s},n)=>e.jsx(kt,{ref:n,className:y("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s}));is.displayName=kt.displayName;const rs=c.forwardRef(({className:t,children:s,...n},i)=>e.jsxs(Xa,{children:[e.jsx(is,{}),e.jsxs(St,{ref:i,className:y("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[s,e.jsxs(Hs,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx(ue,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));rs.displayName=St.displayName;const os=({className:t,...s})=>e.jsx("div",{className:y("flex flex-col space-y-1.5 text-center sm:text-left",t),...s});os.displayName="DialogHeader";const ls=({className:t,...s})=>e.jsx("div",{className:y("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s});ls.displayName="DialogFooter";const cs=c.forwardRef(({className:t,...s},n)=>e.jsx(Tt,{ref:n,className:y("text-lg font-semibold leading-none tracking-tight",t),...s}));cs.displayName=Tt.displayName;const en=c.forwardRef(({className:t,...s},n)=>e.jsx(Mt,{ref:n,className:y("text-sm text-muted-foreground",t),...s}));en.displayName=Mt.displayName;function tn(){L();const{toast:t}=Wt(),[s,n]=c.useState(!1),[i,o]=c.useState(!1),[l,m]=c.useState({day:1,stage:"",amount:0,method:"",priority:"medium"}),[d,b]=c.useState([{day:0,stage:"Pre-sowing",amount:50,method:"Flood irrigation",priority:"high",completed:!1},{day:15,stage:"Germination",amount:25,method:"Sprinkler",priority:"high",completed:!1},{day:30,stage:"Vegetative",amount:35,method:"Drip irrigation",priority:"medium",completed:!1},{day:45,stage:"Flowering",amount:40,method:"Drip irrigation",priority:"high",completed:!1},{day:60,stage:"Grain filling",amount:45,method:"Drip irrigation",priority:"high",completed:!1},{day:75,stage:"Maturity",amount:20,method:"Light sprinkler",priority:"low",completed:!1}]),f=d.reduce((p,N)=>p+N.amount,0),S=()=>{const p=!s;n(p),t({title:p?"Notifications Enabled":"Notifications Disabled",description:p?"You will receive alerts for upcoming irrigation events.":"You will no longer receive irrigation alerts.",duration:3e3})},j=p=>{m(N=>({...N,day:p})),o(!0)},r=p=>{},g=()=>{l.stage&&l.method&&l.amount&&l.day!==void 0&&(b([...d,{day:l.day,stage:l.stage,amount:l.amount,method:l.method,priority:l.priority,completed:!1}]),o(!1),m({day:1,stage:"",amount:0,method:"",priority:"medium"}),t({title:"Event Added",description:`New irrigation event added for day ${l.day}`}))},x=p=>{const N=[...d];N.splice(p,1),b(N),t({title:"Event Removed",description:"Irrigation event has been removed from schedule"})},u=p=>{const N=[...d];N[p].completed=!N[p].completed,b(N),N[p].completed&&t({title:"Task Completed",description:`${N[p].stage} irrigation task marked as complete`,duration:3e3})};return c.useEffect(()=>{if(s){const p=setTimeout(()=>{const N=d.find(v=>v.day>0&&!v.completed);N&&t({title:"Upcoming Irrigation Event",description:`${N.stage} stage requires ${N.amount}mm water on Day ${N.day}`,duration:4e3})},1e3);return()=>clearTimeout(p)}},[s,d,t]),e.jsxs("div",{className:"space-y-3 md:space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-foreground",children:"Irrigation Management"}),e.jsxs(k,{variant:s?"secondary":"outline",size:"sm",onClick:S,className:"flex items-center gap-2",children:[e.jsx(ea,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:s?"Notifications On":"Notifications Off"}),e.jsx("span",{className:"sm:hidden",children:s?"On":"Off"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6",children:[e.jsx("div",{className:"h-full min-h-[400px] md:min-h-[500px]",children:e.jsx(Qa,{irrigationSchedule:d,onAddEvent:j,onEventClick:r,newEventDay:l.day,isAddEventOpen:i})}),e.jsx("div",{className:"h-full min-h-[400px] md:min-h-[500px]",children:e.jsx(Ja,{irrigationSchedule:d,totalWater:f,onToggleCompletion:u,onRemoveEvent:x})})]}),e.jsx(Za,{open:i,onOpenChange:o,children:e.jsxs(rs,{children:[e.jsx(os,{children:e.jsx(cs,{children:"Add Irrigation Event"})}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right text-sm",children:"Day"}),e.jsx(F,{type:"number",value:l.day,onChange:p=>m({...l,day:parseInt(p.target.value)}),className:"col-span-3",min:"1",max:"31"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right text-sm",children:"Stage"}),e.jsx(F,{value:l.stage,onChange:p=>m({...l,stage:p.target.value}),className:"col-span-3",placeholder:"e.g. Flowering"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right text-sm",children:"Amount (mm)"}),e.jsx(F,{type:"number",value:l.amount,onChange:p=>m({...l,amount:parseInt(p.target.value)}),className:"col-span-3",min:"1"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right text-sm",children:"Method"}),e.jsx(F,{value:l.method,onChange:p=>m({...l,method:p.target.value}),className:"col-span-3",placeholder:"e.g. Drip irrigation"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right text-sm",children:"Priority"}),e.jsxs("select",{value:l.priority,onChange:p=>m({...l,priority:p.target.value}),className:"col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",children:[e.jsx("option",{value:"high",children:"High"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"low",children:"Low"})]})]})]}),e.jsxs(ls,{children:[e.jsx(k,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),e.jsx(k,{onClick:g,children:"Add Event"})]})]})})]})}function Qe(){const{location:t,isLoading:s,error:n}=xe(),{t:i}=L(),o=()=>s?e.jsx(Ee,{className:"h-4 w-4 animate-spin text-blue-500"}):n?e.jsx(pe,{className:"h-4 w-4 text-red-500"}):t?e.jsx(Et,{className:"h-4 w-4 text-green-500"}):e.jsx(J,{className:"h-4 w-4 text-muted-foreground"}),l=()=>s?i("gettingLocation")||"Getting location...":n?i("locationError")||"Location error":t?i("locationActive")||"Location active":i("noLocationSet")||"No location set",m=()=>t?e.jsxs("div",{className:"space-y-2 text-sm",children:[t.city&&t.state&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(J,{className:"h-3 w-3 text-muted-foreground"}),e.jsxs("span",{children:[t.city,", ",t.state]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Se,{className:"h-3 w-3 text-muted-foreground"}),e.jsxs("span",{children:[t.latitude.toFixed(6),", ",t.longitude.toFixed(6)]})]}),t.accuracy>0&&e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(D,{variant:"outline",className:"text-xs",children:["±",Math.round(t.accuracy),"m accuracy"]})}),t.address&&e.jsx("div",{className:"text-xs text-muted-foreground truncate",title:t.address,children:t.address})]}):null;return e.jsxs(O,{className:"shadow-card",children:[e.jsx(z,{children:e.jsxs(U,{className:"flex items-center gap-2",children:[o(),"Location Status"]})}),e.jsx(B,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-sm font-medium",children:l()})}),m(),n&&e.jsx("div",{className:"text-xs text-red-500 bg-red-50 p-2 rounded border",children:n})]})})]})}const We=Os,fe=c.forwardRef(({className:t,...s},n)=>e.jsx(It,{ref:n,className:y("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...s}));fe.displayName=It.displayName;const W=c.forwardRef(({className:t,...s},n)=>e.jsx(Pt,{ref:n,className:y("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...s}));W.displayName=Pt.displayName;const G=c.forwardRef(({className:t,...s},n)=>e.jsx(Rt,{ref:n,className:y("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...s}));G.displayName=Rt.displayName;const sn="/assets/agricultural-hero-CVq0USzY.jpg",an=()=>{const{t}=L(),s=da(),[n,i]=c.useState("dashboard");return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Zt,{}),e.jsxs("section",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${sn})`},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95"})}),e.jsx("div",{className:"relative container mx-auto px-4 py-8 md:py-12",children:e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("h1",{className:"text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent",children:t("welcomeMessage")}),e.jsx("p",{className:"text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed",children:"Farming just got smarter. With AstroCrop, you can easily predict crop yields, plan irrigation, and use the right fertilizers at the right time. Simple, reliable, and farmer-friendly—helping you grow more while saving time, money, and resources."}),e.jsxs("div",{className:"flex flex-wrap gap-3 md:gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/20",children:[e.jsx(ge,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium",children:"AI-Powered Predictions"})]}),e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-full bg-accent/10 border border-accent/20",children:[e.jsx(Q,{className:"h-4 w-4 text-accent"}),e.jsx("span",{className:"text-sm font-medium",children:"Smart Irrigation"})]}),e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-full bg-warning/10 border border-warning/20",children:[e.jsx(Ie,{className:"h-4 w-4 text-warning"}),e.jsx("span",{className:"text-sm font-medium",children:"Nutrient Optimization"})]})]})]})})]}),e.jsx("section",{className:"container mx-auto px-4 py-4 md:py-6",children:e.jsxs(We,{value:n,className:"w-full",onValueChange:o=>{o==="soil"?s("/soil"):i(o)},children:[e.jsxs(fe,{className:"grid w-full grid-cols-5 mb-4 md:mb-6",children:[e.jsxs(W,{value:"dashboard",className:"gap-2",children:[e.jsx(Ht,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:t("dashboard")})]}),e.jsxs(W,{value:"predictor",className:"gap-2",children:[e.jsx(Me,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:t("yieldPredictor")})]}),e.jsxs(W,{value:"irrigation",className:"gap-2",children:[e.jsx(Q,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:"Irrigation"})]}),e.jsxs(W,{value:"soil",className:"gap-2",children:[e.jsx(He,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:"Soil & Disease"})]}),e.jsxs(W,{value:"weather",className:"gap-2",children:[e.jsx(K,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:t("weatherForecast")})]})]}),e.jsx(G,{value:"dashboard",className:"space-y-4 md:space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6",children:[e.jsxs("div",{className:"xl:col-span-3 space-y-4 md:space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6",children:[e.jsx("div",{className:"h-full",children:e.jsx(Ve,{showForecast:!1})}),e.jsx("div",{className:"h-full",children:e.jsx(Ye,{})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:gap-6",children:[e.jsx("div",{className:"h-full",children:e.jsx(qe,{})}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",children:[e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-1.5 md:p-2 rounded-lg border border-green-200 dark:border-green-800 flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Me,{className:"h-3 w-3 md:h-3.5 md:w-3.5 text-green-600"}),e.jsx("span",{className:"text-xs font-medium text-green-800 dark:text-green-200",children:"Expected Yield"})]}),e.jsxs("div",{className:"flex items-baseline justify-between mt-0.5",children:[e.jsx("p",{className:"text-base md:text-lg font-bold text-green-700 dark:text-green-300",children:"4.2 tons"}),e.jsx("p",{className:"text-xs text-green-600 dark:text-green-400",children:"per hectare"})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-1.5 md:p-2 rounded-lg border border-blue-200 dark:border-blue-800 flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Q,{className:"h-3 w-3 md:h-3.5 md:w-3.5 text-blue-600"}),e.jsx("span",{className:"text-xs font-medium text-blue-800 dark:text-blue-200",children:"Water Usage"})]}),e.jsxs("div",{className:"flex items-baseline justify-between mt-0.5",children:[e.jsx("p",{className:"text-base md:text-lg font-bold text-blue-700 dark:text-blue-300",children:"215mm"}),e.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400",children:"this season"})]})]})]})})]})]}),e.jsxs("div",{className:"space-y-4 md:space-y-6",children:[e.jsx(Qe,{}),e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 p-2 md:p-3 rounded-lg border border-orange-200 dark:border-orange-800",children:[e.jsxs("div",{className:"flex items-center gap-1.5 mb-1.5",children:[e.jsx(Ie,{className:"h-3.5 w-3.5 md:h-4 md:w-4 text-orange-600"}),e.jsx("span",{className:"text-xs font-medium text-orange-800 dark:text-orange-200",children:"Soil Health"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-orange-700 dark:text-orange-300",children:"pH Level"}),e.jsx("span",{className:"font-medium text-orange-800 dark:text-orange-200",children:"6.8"})]}),e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-orange-700 dark:text-orange-300",children:"Organic Matter"}),e.jsx("span",{className:"font-medium text-orange-800 dark:text-orange-200",children:"2.4%"})]}),e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-orange-700 dark:text-orange-300",children:"Moisture"}),e.jsx("span",{className:"font-medium text-orange-800 dark:text-orange-200",children:"Good"})]})]})]})]})]})}),e.jsx(G,{value:"predictor",className:"space-y-4 md:space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6",children:[e.jsx("div",{className:"h-full",children:e.jsx(Ye,{})}),e.jsx("div",{className:"h-full space-y-4 md:space-y-6",children:e.jsx(qe,{})})]})}),e.jsx(G,{value:"irrigation",className:"space-y-4 md:space-y-6",children:e.jsx(tn,{})}),e.jsx(G,{value:"weather",className:"space-y-4 md:space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6",children:[e.jsx("div",{className:"xl:col-span-3 h-full",children:e.jsx(Ve,{showForecast:!0})}),e.jsxs("div",{className:"h-full space-y-4 md:space-y-6",children:[e.jsx(Qe,{}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-2 md:p-3 rounded-lg border border-purple-200 dark:border-purple-800",children:[e.jsxs("div",{className:"flex items-center gap-1.5 mb-1.5",children:[e.jsx(J,{className:"h-3.5 w-3.5 md:h-4 md:w-4 text-purple-600"}),e.jsx("span",{className:"text-xs font-medium text-purple-800 dark:text-purple-200",children:"Field Status"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-purple-700 dark:text-purple-300",children:"Last Irrigation"}),e.jsx("span",{className:"font-medium text-purple-800 dark:text-purple-200",children:"2 days ago"})]}),e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-purple-700 dark:text-purple-300",children:"Next Scheduled"}),e.jsx("span",{className:"font-medium text-purple-800 dark:text-purple-200",children:"Tomorrow"})]}),e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-purple-700 dark:text-purple-300",children:"Soil Moisture"}),e.jsx("span",{className:"font-medium text-purple-800 dark:text-purple-200",children:"Optimal"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 p-2 md:p-3 rounded-lg border border-indigo-200 dark:border-indigo-800",children:[e.jsxs("div",{className:"flex items-center gap-1.5 mb-1.5",children:[e.jsx(K,{className:"h-3.5 w-3.5 md:h-4 md:w-4 text-indigo-600"}),e.jsx("span",{className:"text-xs font-medium text-indigo-800 dark:text-indigo-200",children:"Weather Alerts"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-xs text-indigo-700 dark:text-indigo-300",children:"• Light rain expected tomorrow"}),e.jsx("div",{className:"text-xs text-indigo-700 dark:text-indigo-300",children:"• Temperature will drop 3°C"}),e.jsx("div",{className:"text-xs text-indigo-700 dark:text-indigo-300",children:"• Wind speed increasing"})]})]})]})]})})]})}),e.jsx("footer",{className:"border-t bg-muted/30 mt-8 md:mt-12",children:e.jsx("div",{className:"container mx-auto px-4 py-4 md:py-6",children:e.jsxs("div",{className:"text-center text-sm text-muted-foreground",children:[e.jsx("p",{children:"© 2024 CropPredict - AI-Powered Agricultural Solutions"}),e.jsx("p",{className:"mt-1 md:mt-2",children:"Empowering farmers with data-driven insights for sustainable agriculture"})]})})})]})},nn=()=>{const t=ma();return c.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function rn(){const{t}=L(),[s,n]=c.useState(!1),[i,o]=c.useState("nutrients"),l=c.useRef(null),m={lastUpdated:"May 10, 2023",nextSamplingDate:"November 10, 2023",location:"North Field, Block A",fieldName:"Wheat Field 3",sampleDepth:"0-20 cm",samplingMethod:"Grid sampling (10 points)",labName:"AgriLab Analytics",properties:{nutrients:[{name:"Nitrogen (N)",value:45,unit:"ppm",status:"low",recommendation:"Apply nitrogen-rich fertilizer",description:"Essential for leaf and stem growth",idealRange:"50-100 ppm"},{name:"Phosphorus (P)",value:35,unit:"ppm",status:"optimal",description:"Critical for root development and flowering",idealRange:"30-50 ppm"},{name:"Potassium (K)",value:180,unit:"ppm",status:"optimal",description:"Improves overall plant health and disease resistance",idealRange:"150-250 ppm"},{name:"Calcium (Ca)",value:1200,unit:"ppm",status:"high",recommendation:"Avoid calcium-rich amendments",description:"Strengthens cell walls and improves soil structure",idealRange:"800-1000 ppm"},{name:"Magnesium (Mg)",value:150,unit:"ppm",status:"optimal",description:"Central component of chlorophyll for photosynthesis",idealRange:"120-180 ppm"},{name:"Sulfur (S)",value:12,unit:"ppm",status:"low",recommendation:"Consider sulfur application",description:"Important for protein synthesis and enzyme activity",idealRange:"15-25 ppm"},{name:"Zinc (Zn)",value:2.1,unit:"ppm",status:"optimal",description:"Essential micronutrient for enzyme systems",idealRange:"1.5-3.0 ppm"},{name:"Boron (B)",value:.4,unit:"ppm",status:"low",recommendation:"Apply boron supplement",description:"Important for cell division and plant reproduction",idealRange:"0.5-1.0 ppm"}],physical:[{name:"pH",value:6.8,status:"optimal",description:"Measure of soil acidity/alkalinity",idealRange:"6.5-7.0"},{name:"Organic Matter",value:"2.4%",status:"low",recommendation:"Add compost or organic mulch",description:"Improves soil structure, water retention, and nutrient cycling",idealRange:"3-5%"},{name:"Cation Exchange",value:14,unit:"meq/100g",status:"optimal",description:"Soil's ability to hold and exchange nutrients",idealRange:"12-18 meq/100g"},{name:"Soil Texture",value:"Loam",status:"optimal",description:"Balance of sand, silt, and clay particles"},{name:"Water Holding Capacity",value:"Medium",status:"optimal",description:"Ability to retain moisture for plant use"},{name:"Bulk Density",value:1.3,unit:"g/cm³",status:"optimal",description:"Measure of soil compaction",idealRange:"1.0-1.4 g/cm³"}],biological:[{name:"Microbial Activity",value:"Moderate",status:"low",recommendation:"Apply microbial inoculants",description:"Beneficial microorganisms that support plant health"},{name:"Earthworm Count",value:8,unit:"per sq ft",status:"optimal",description:"Indicator of soil health and organic matter processing",idealRange:"5-10 per sq ft"},{name:"Respiration Rate",value:35,unit:"mg CO₂/kg/day",status:"optimal",description:"Measure of biological activity in soil",idealRange:"30-50 mg CO₂/kg/day"},{name:"Fungi:Bacteria Ratio",value:"0.8:1",status:"low",recommendation:"Add fungal-dominant compost",description:"Balance of fungal and bacterial communities",idealRange:"1:1 - 1.5:1"}]},recommendations:["Apply 120 kg/ha of nitrogen fertilizer split into three applications (pre-planting, early growth, and pre-flowering)","Incorporate 5 tons/ha of well-composted organic matter to improve soil structure and water retention","Add microbial inoculants containing mycorrhizal fungi to enhance nutrient cycling and root development","Apply 15 kg/ha of boron supplement with your next fertilizer application","Consider cover cropping with legumes during off-season to build soil health and fix nitrogen","Implement minimum tillage practices to preserve soil structure and biological activity"],historicalData:[{date:"May 2022",key:"Nitrogen",value:38},{date:"Nov 2021",key:"Nitrogen",value:42},{date:"May 2022",key:"Phosphorus",value:32},{date:"Nov 2021",key:"Phosphorus",value:28},{date:"May 2022",key:"Organic Matter",value:"2.1%"},{date:"Nov 2021",key:"Organic Matter",value:"2.0%"}]},d=r=>{switch(r){case"optimal":return"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";case"low":return"bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";case"high":return"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";case"critical":return"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"}},b=r=>{switch(r){case"optimal":return null;case"low":case"high":case"critical":return e.jsx(Le,{className:"h-3 w-3"});default:return null}},f=r=>{switch(r.status){case"low":return 30;case"optimal":return 70;case"high":return 90;case"critical":return 100;default:return 50}},S=r=>{switch(r){case"optimal":return"bg-green-600";case"low":return"bg-amber-600";case"high":return"bg-blue-600";case"critical":return"bg-red-600";default:return""}},j=async()=>{if(l.current)try{n(!0);const r=await ga(l.current),g=r.toDataURL("image/png"),x=new xa({orientation:"portrait",unit:"mm",format:"a4"}),u=210,p=r.height*u/r.width;x.addImage(g,"PNG",0,0,u,p),x.save("soil-analysis-report.pdf")}catch(r){console.error("Error generating PDF:",r)}finally{n(!1)}};return e.jsxs(O,{className:"shadow-card",ref:l,children:[e.jsxs(z,{className:"pb-2",children:[e.jsxs(U,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(He,{className:"h-5 w-5 text-primary"}),t("soilAnalysis")]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(te,{children:e.jsxs(oe,{children:[e.jsx(le,{asChild:!0,children:e.jsxs(D,{variant:"outline",className:"flex items-center gap-1 text-xs cursor-help",children:[e.jsx(K,{className:"h-3 w-3"}),t("lastUpdated"),": ",m.lastUpdated]})}),e.jsx(se,{children:e.jsxs("p",{className:"text-xs",children:["Analysis performed by ",m.labName]})})]})}),e.jsx(k,{variant:"ghost",size:"icon",className:"h-8 w-8",onClick:j,disabled:s,children:s?e.jsx("span",{className:"h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"}):e.jsx(ta,{className:"h-4 w-4"})})]})]}),e.jsxs(Vt,{className:"flex flex-wrap gap-2 mt-2 text-xs",children:[e.jsxs(D,{variant:"secondary",className:"flex items-center gap-1",children:[e.jsx(J,{className:"h-3 w-3"}),m.location]}),e.jsxs(D,{variant:"secondary",className:"flex items-center gap-1",children:[e.jsx(sa,{className:"h-3 w-3"}),t("sampleDepth"),": ",m.sampleDepth]}),e.jsxs(D,{variant:"secondary",className:"flex items-center gap-1",children:[e.jsx(Pe,{className:"h-3 w-3"}),t("nextSampling"),": ",m.nextSamplingDate]})]})]}),e.jsxs(B,{id:"soil-analysis-content",children:[e.jsxs(We,{value:i,onValueChange:o,className:"w-full",children:[e.jsxs(fe,{className:"grid w-full grid-cols-3 mb-4",children:[e.jsxs(W,{value:"nutrients",className:"text-xs",children:[e.jsx(Lt,{className:"h-3.5 w-3.5 mr-1"}),t("nutrients")]}),e.jsxs(W,{value:"physical",className:"text-xs",children:[e.jsx(Te,{className:"h-3.5 w-3.5 mr-1"}),t("physical")]}),e.jsxs(W,{value:"biological",className:"text-xs",children:[e.jsx(aa,{className:"h-3.5 w-3.5 mr-1"}),t("biological")]})]}),e.jsx(G,{value:"nutrients",className:"space-y-4",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:m.properties.nutrients.map((r,g)=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-xs font-medium",children:r.name}),b(r.status)&&e.jsx("span",{className:"text-warning",children:b(r.status)}),e.jsx(te,{children:e.jsxs(oe,{children:[e.jsx(le,{asChild:!0,children:e.jsx(re,{className:"h-3 w-3 text-muted-foreground cursor-help ml-1"})}),e.jsxs(se,{className:"max-w-[200px]",children:[e.jsx("p",{className:"text-xs",children:r.description}),r.idealRange&&e.jsxs("p",{className:"text-xs mt-1",children:["Ideal range: ",r.idealRange]})]})]})})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("span",{className:"text-xs font-bold",children:[r.value," ",r.unit]}),e.jsx(D,{className:`text-[10px] px-1.5 py-0 ${d(r.status)}`,variant:"outline",children:r.status})]})]}),e.jsx(_,{value:f(r),className:`h-1.5 ${S(r.status)}`}),r.recommendation&&e.jsx("p",{className:"text-[10px] text-muted-foreground italic",children:r.recommendation})]},g))})}),e.jsx(G,{value:"physical",className:"space-y-4",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:m.properties.physical.map((r,g)=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-xs font-medium",children:r.name}),b(r.status)&&e.jsx("span",{className:"text-warning",children:b(r.status)})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("span",{className:"text-xs font-bold",children:[r.value," ",r.unit]}),e.jsx(D,{className:`text-[10px] px-1.5 py-0 ${d(r.status)}`,variant:"outline",children:r.status})]})]}),e.jsx(_,{value:f(r),className:`h-1.5 ${S(r.status)}`}),r.recommendation&&e.jsx("p",{className:"text-[10px] text-muted-foreground italic",children:r.recommendation})]},g))})}),e.jsx(G,{value:"biological",className:"space-y-4",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:m.properties.biological.map((r,g)=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-xs font-medium",children:r.name}),b(r.status)&&e.jsx("span",{className:"text-warning",children:b(r.status)})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("span",{className:"text-xs font-bold",children:[r.value," ",r.unit]}),e.jsx(D,{className:`text-[10px] px-1.5 py-0 ${d(r.status)}`,variant:"outline",children:r.status})]})]}),e.jsx(_,{value:f(r),className:`h-1.5 ${S(r.status)}`}),r.recommendation&&e.jsx("p",{className:"text-[10px] text-muted-foreground italic",children:r.recommendation})]},g))})})]}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Ht,{className:"h-4 w-4 text-primary"}),e.jsx("h4",{className:"text-sm font-medium",children:t("recommendations")})]}),e.jsx("ul",{className:"space-y-1 text-xs text-muted-foreground",children:m.recommendations.map((r,g)=>e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx("span",{className:"text-primary",children:"•"}),e.jsx("span",{children:r})]},g))})]}),i==="nutrients"&&m.historicalData&&m.historicalData.length>0&&e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(K,{className:"h-4 w-4 text-primary"}),e.jsx("h4",{className:"text-sm font-medium",children:t("historicalData")})]}),e.jsx("div",{className:"grid grid-cols-2 gap-2 text-xs",children:m.historicalData.map((r,g)=>e.jsxs("div",{className:"flex justify-between items-center p-1.5 bg-muted/30 rounded",children:[e.jsxs("span",{className:"font-medium",children:[r.key," (",r.date,")"]}),e.jsx("span",{children:r.value})]},g))})]}),e.jsxs("div",{className:"mt-4 text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-muted",children:[e.jsxs("p",{children:[t("samplingMethod"),": ",e.jsx("span",{className:"font-medium",children:m.samplingMethod})]}),e.jsxs("p",{className:"mt-1",children:["Next soil sampling recommended by: ",e.jsx("span",{className:"font-medium",children:m.nextSamplingDate})]})]})]})]})}function on(){const{t}=L(),[s,n]=c.useState("upload"),[i,o]=c.useState(null),[l,m]=c.useState(!1),[d,b]=c.useState(null),[f,S]=c.useState(0),[j,r]=c.useState(!1),g=c.useRef(null),x=c.useRef(null),u=()=>{m(!0),setTimeout(()=>{b([{name:"Late Blight",scientificName:"Phytophthora infestans",probability:.87,symptoms:["Dark brown spots on leaves","White fungal growth on undersides","Rapid wilting of foliage"],treatment:"Apply copper-based fungicide immediately. Remove and destroy infected plants to prevent spread.",preventionTips:["Use resistant varieties","Ensure proper plant spacing for airflow","Apply preventative fungicides during wet periods"],firstDetected:"June 15, 2023",affectedCrops:["Potato","Tomato","Eggplant"],severity:"high",spreadRate:"Rapid",environmentalConditions:["High humidity (>90%)","Moderate temperatures (60-80°F)","Wet foliage for extended periods"]},{name:"Early Blight",scientificName:"Alternaria solani",probability:.12,symptoms:["Concentric rings on lower leaves","Yellow areas surrounding spots","Gradual leaf death"],treatment:"Apply approved fungicide. Prune affected leaves and improve air circulation.",preventionTips:["Rotate crops annually","Mulch around plants","Water at base of plants, not leaves"],firstDetected:"June 15, 2023",affectedCrops:["Tomato","Potato","Pepper"],severity:"moderate",spreadRate:"Moderate",environmentalConditions:["Warm temperatures (75-85°F)","Humid conditions","Periods of leaf wetness"]}]),m(!1)},2e3)},p=w=>{const h=w.target.files?.[0];if(h){const a=new FileReader;a.onload=T=>{o(T.target?.result)},a.readAsDataURL(h)}},N=()=>{i&&u()},v=()=>{b(null),o(null),r(!1),P()},I=w=>w>.7?"destructive":w>.3?"secondary":"default",M=w=>{switch(w){case"critical":return"bg-red-600";case"high":return"bg-orange-600";case"moderate":return"bg-amber-600";case"low":return"bg-green-600";default:return"bg-slate-600"}},H=w=>{switch(w){case"critical":return 100;case"high":return 75;case"moderate":return 50;case"low":return 25;default:return 0}},Z=async()=>{try{const w=await navigator.mediaDevices.getUserMedia({video:!0});g.current&&(g.current.srcObject=w),r(!0)}catch(w){console.error("Error accessing camera:",w)}},P=()=>{g.current&&g.current.srcObject&&(g.current.srcObject.getTracks().forEach(h=>h.stop()),g.current.srcObject=null),r(!1)},R=()=>{if(g.current&&x.current){const w=x.current.getContext("2d");if(w){x.current.width=g.current.videoWidth,x.current.height=g.current.videoHeight,w.drawImage(g.current,0,0,x.current.width,x.current.height);const h=x.current.toDataURL("image/png");o(h),P()}}};return e.jsxs(O,{className:"shadow-card",children:[e.jsx(z,{children:e.jsxs(U,{className:"flex items-center gap-2",children:[e.jsx(ge,{className:"h-5 w-5 text-primary"}),t("cropDiseaseDetection")]})}),e.jsx(B,{children:d?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-medium",children:t("detectionResults")}),e.jsxs(D,{variant:"outline",className:"flex items-center gap-1",children:[e.jsx(K,{className:"h-3 w-3"}),d[0].firstDetected]})]}),e.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2",children:d.map((w,h)=>e.jsxs(k,{variant:f===h?"default":"outline",className:"flex-shrink-0",onClick:()=>S(h),children:[e.jsx("span",{className:"mr-1",children:w.name}),e.jsxs(D,{variant:I(w.probability),className:"ml-1",children:[Math.round(w.probability*100),"%"]})]},h))}),d[f]&&e.jsxs("div",{className:"border rounded-lg p-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-lg",children:d[f].name}),d[f].scientificName&&e.jsx("p",{className:"text-xs italic text-muted-foreground",children:d[f].scientificName})]}),e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsxs(D,{variant:I(d[f].probability),children:[Math.round(d[f].probability*100),"% Match"]}),d[f].severity&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-xs",children:"Severity:"}),e.jsx(_,{value:H(d[f].severity),className:`h-1.5 w-16 ${M(d[f].severity)}`})]})]})]}),d[f].affectedCrops&&e.jsx("div",{className:"flex flex-wrap gap-1 mt-2",children:d[f].affectedCrops.map((w,h)=>e.jsx(D,{variant:"secondary",className:"text-xs",children:w},h))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"text-sm font-medium flex items-center gap-1",children:[e.jsx(pe,{className:"h-3.5 w-3.5 text-warning"}),t("symptoms")]}),e.jsx("ul",{className:"text-sm pl-5 list-disc space-y-1",children:d[f].symptoms.map((w,h)=>e.jsx("li",{children:w},h))})]}),e.jsxs("div",{children:[e.jsxs("h5",{className:"text-sm font-medium flex items-center gap-1",children:[e.jsx(ia,{className:"h-3.5 w-3.5 text-primary"}),t("treatment")]}),e.jsx("p",{className:"text-sm",children:d[f].treatment})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"text-sm font-medium flex items-center gap-1",children:[e.jsx(ra,{className:"h-3.5 w-3.5 text-success"}),t("prevention")]}),e.jsx("ul",{className:"text-sm pl-5 list-disc space-y-1",children:d[f].preventionTips.map((w,h)=>e.jsx("li",{children:w},h))})]}),d[f].environmentalConditions&&e.jsxs("div",{children:[e.jsxs("h5",{className:"text-sm font-medium flex items-center gap-1",children:[e.jsx(Q,{className:"h-3.5 w-3.5 text-blue-500"}),t("favorableConditions")]}),e.jsx("ul",{className:"text-sm pl-5 list-disc space-y-1",children:d[f].environmentalConditions.map((w,h)=>e.jsx("li",{children:w},h))})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2",children:[e.jsx(te,{children:e.jsxs(oe,{children:[e.jsx(le,{asChild:!0,children:e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground cursor-help",children:[e.jsx(re,{className:"h-3 w-3"}),e.jsxs("span",{children:[t("spreadRate"),": ",d[f].spreadRate||"Unknown"]})]})}),e.jsx(se,{children:e.jsx("p",{className:"text-xs",children:"How quickly this disease can spread to other plants"})})]})}),e.jsxs(k,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:[e.jsx(oa,{className:"h-3 w-3 mr-1"}),t("viewDetailedReport")]})]})]}),e.jsx(k,{onClick:v,variant:"outline",className:"w-full",children:t("startNewDetection")})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs(We,{value:s,onValueChange:n,className:"w-full",children:[e.jsxs(fe,{className:"grid w-full grid-cols-2",children:[e.jsxs(W,{value:"upload",className:"flex items-center gap-2",children:[e.jsx(Ue,{className:"h-4 w-4"}),t("uploadImage")]}),e.jsxs(W,{value:"camera",className:"flex items-center gap-2",children:[e.jsx(Be,{className:"h-4 w-4"}),t("takePhoto")]})]}),e.jsx(G,{value:"upload",className:"space-y-4 pt-4",children:e.jsx("div",{className:"flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center",children:i?e.jsxs("div",{className:"space-y-4 w-full",children:[e.jsx("img",{src:i,alt:"Selected crop image",className:"max-h-48 rounded-lg mx-auto object-cover"}),e.jsx(k,{variant:"outline",className:"w-full",onClick:()=>o(null),children:t("removeImage")})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ue,{className:"h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Drag and drop an image or click to browse"}),e.jsx(F,{type:"file",accept:"image/*",className:"hidden",id:"image-upload",onChange:p}),e.jsx("label",{htmlFor:"image-upload",children:e.jsx(k,{variant:"outline",className:"cursor-pointer",asChild:!0,children:e.jsx("span",{children:t("browseFiles")})})})]})})}),e.jsx(G,{value:"camera",className:"space-y-4 pt-4",children:e.jsx("div",{className:"flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center",children:j?e.jsxs("div",{className:"space-y-4 w-full",children:[e.jsxs("div",{className:"relative",children:[e.jsx("video",{ref:g,autoPlay:!0,playsInline:!0,className:"w-full rounded-lg"}),e.jsx("canvas",{ref:x,className:"hidden"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(k,{variant:"outline",className:"flex-1",onClick:P,children:t("cancel")}),e.jsx(k,{className:"flex-1",onClick:R,children:t("capture")})]})]}):i?e.jsxs("div",{className:"space-y-4 w-full",children:[e.jsx("img",{src:i,alt:"Captured crop image",className:"max-h-48 rounded-lg mx-auto object-cover"}),e.jsx(k,{variant:"outline",className:"w-full",onClick:()=>o(null),children:t("removeImage")})]}):e.jsxs(e.Fragment,{children:[e.jsx(Be,{className:"h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Take a photo of your crop"}),e.jsx(k,{variant:"outline",onClick:Z,children:t("openCamera")})]})})})]}),i&&e.jsx(k,{className:"w-full",onClick:N,disabled:l,children:l?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"}),t("analyzing")]}):e.jsxs(e.Fragment,{children:[e.jsx(na,{className:"mr-2 h-4 w-4"}),t("analyze")," Image"]})}),e.jsxs("div",{className:"text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-muted",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(re,{className:"h-3 w-3"}),e.jsxs("span",{className:"font-medium",children:[t("tipsForBetterDetection"),":"]})]}),e.jsxs("ul",{className:"space-y-1 pl-4 list-disc",children:[e.jsx("li",{children:t("ensureGoodLighting")}),e.jsx("li",{children:t("focusOnAffectedParts")}),e.jsx("li",{children:t("includeHealthyAndDiseased")}),e.jsx("li",{children:t("takeMultipleImages")})]})]})]})})]})}function ln(){return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Zt,{}),e.jsxs("main",{className:"container mx-auto px-4 py-6",children:[e.jsx("div",{className:"mb-4",children:e.jsx(ua,{to:"/",children:e.jsx(k,{variant:"outline",children:"Back to Dashboard"})})}),e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Soil & Disease Analysis"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6",children:[e.jsx("div",{className:"h-full",children:e.jsx(rn,{})}),e.jsx("div",{className:"h-full",children:e.jsx(on,{})})]})]})]})}const cn=new ps,dn=()=>e.jsx(Ea,{children:e.jsx(hs,{client:cn,children:e.jsx(Ma,{defaultTheme:"light",storageKey:"croppredict-theme",children:e.jsx(Pa,{children:e.jsx(Ra,{children:e.jsxs(te,{children:[e.jsx(ka,{}),e.jsx(Sa,{}),e.jsx(pa,{children:e.jsxs(ha,{children:[e.jsx(be,{path:"/",element:e.jsx(an,{})}),e.jsx(be,{path:"/soil",element:e.jsx(ln,{})}),e.jsx(be,{path:"*",element:e.jsx(nn,{})})]})}),e.jsx(Ha,{})]})})})})})});Ft(document.getElementById("root")).render(e.jsx(dn,{}));
