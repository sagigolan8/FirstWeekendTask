function getParameters(parameterName){
let parameters =new URLSearchParams(window.location.srearch);
return parameters.get(parameterName);
}