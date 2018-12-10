[{"id":"94c8cbcc.52bc08","type":"tab","label":"DataLogger","disabled":false,"info":""},{"id":"1f1268d0.228337","type":"mqtt-broker","z":"","name":"CloudMQTT","broker":"m15.cloudmqtt.com","port":"13650","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","closeTopic":"","closeQos":"0","closePayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"7dd5316e.fcba28","type":"ui_tab","z":"","name":"DataLogger - Temperatura y humedad ambiente","icon":"dashboard"},{"id":"587933b1.ae17ac","type":"ui_base","z":"","theme":{"name":"theme-dark","lightTheme":{"default":"#0094CE","baseColor":"#389339","baseFont":"Arial,Arial,Helvetica,sans-serif","edited":true,"reset":false},"darkTheme":{"default":"#097479","baseColor":"#1dcf7b","baseFont":"Arial,Arial,Helvetica,sans-serif","edited":true,"reset":false},"customTheme":{"name":"Untitled Theme 1","default":"#4B7930","baseColor":"#4B7930","baseFont":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"},"themeState":{"base-color":{"default":"#097479","value":"#097479","edited":true},"page-titlebar-backgroundColor":{"value":"#1dcf7b","edited":false},"page-backgroundColor":{"value":"#111111","edited":false},"page-sidebar-backgroundColor":{"value":"#ffffff","edited":false},"group-textColor":{"value":"#52e7a0","edited":false},"group-borderColor":{"value":"#555555","edited":false},"group-backgroundColor":{"value":"#333333","edited":false},"widget-textColor":{"value":"#eeeeee","edited":false},"widget-backgroundColor":{"value":"#1dcf7b","edited":false},"widget-borderColor":{"value":"#333333","edited":false},"base-font":{"value":"Arial,Arial,Helvetica,sans-serif"}},"angularTheme":{"primary":"indigo","accents":"blue","warn":"red","background":"grey"}},"site":{"name":"Clima-Oficina-DataLogger-Dashboard","hideToolbar":"false","allowSwipe":"false","lockMenu":"false","allowTempTheme":"true","dateFormat":"DD/MM/YYYY","sizes":{"sx":48,"sy":48,"gx":6,"gy":6,"cx":6,"cy":6,"px":0,"py":0}}},{"id":"1d08b15c.47d54f","type":"ui_spacer","name":"spacer","group":"874a6b67.7d94e8","order":2,"width":1,"height":1},{"id":"fa5f795c.f7e43","type":"ui_group","z":"","name":"grafico-temperatura","tab":"7dd5316e.fcba28","order":2,"disp":false,"width":"12","collapse":false},{"id":"89a45b60.cc193","type":"ui_group","z":"","name":"grafico-humedad","tab":"7dd5316e.fcba28","order":4,"disp":false,"width":"12","collapse":false},{"id":"f4e34226.9a7078","type":"debug","z":"94c8cbcc.52bc08","name":"payload-temperatura","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":400,"y":160,"wires":[]},{"id":"63b6d33f.75904c","type":"ui_chart","z":"94c8cbcc.52bc08","name":"grafico-temperatura","group":"fa5f795c.f7e43","order":1,"width":"0","height":"0","label":"Temperatura","chartType":"line","legend":"false","xformat":"HH:mm","interpolate":"bezier","nodata":"","dot":false,"ymin":"5","ymax":"50","removeOlder":"12","removeOlderPoints":"","removeOlderUnit":"3600","cutout":0,"useOneColor":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"x":400,"y":120,"wires":[[],[]]},{"id":"51de61a3.c70ca8","type":"debug","z":"94c8cbcc.52bc08","name":"payload-humedad","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":390,"y":300,"wires":[]},{"id":"ff5cf6e0.f5c11","type":"mqtt in","z":"94c8cbcc.52bc08","name":"temperatura","topic":"nodeMCU-Snoop/temperatura","qos":"2","broker":"1f1268d0.228337","x":150,"y":120,"wires":[["63b6d33f.75904c","f4e34226.9a7078","6ad93713.ce0698"]]},{"id":"602c7d70.22b82c","type":"mqtt in","z":"94c8cbcc.52bc08","name":"humedad","topic":"nodeMCU-Snoop/humedad","qos":"2","broker":"1f1268d0.228337","x":140,"y":260,"wires":[["51de61a3.c70ca8","952d7507.2af328","1f80ee81.348741"]]},{"id":"952d7507.2af328","type":"ui_chart","z":"94c8cbcc.52bc08","name":"grafico-humedad","group":"89a45b60.cc193","order":1,"width":0,"height":0,"label":"Humedad","chartType":"line","legend":"false","xformat":"HH:mm","interpolate":"bezier","nodata":"","dot":false,"ymin":"0","ymax":"100","removeOlder":"12","removeOlderPoints":"","removeOlderUnit":"3600","cutout":0,"useOneColor":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"x":390,"y":260,"wires":[[],[]]},{"id":"6ad93713.ce0698","type":"ui_text","z":"94c8cbcc.52bc08","group":"fa5f795c.f7e43","order":2,"width":0,"height":0,"name":"temperatura-txt","label":"Temperatura ","format":"{{msg.payload | uppercase}} &deg;C","layout":"row-center","x":380,"y":80,"wires":[]},{"id":"1f80ee81.348741","type":"ui_text","z":"94c8cbcc.52bc08","group":"89a45b60.cc193","order":2,"width":0,"height":0,"name":"humedad-txt","label":"Humedad","format":"{{msg.payload}}","layout":"row-center","x":370,"y":220,"wires":[]}]
