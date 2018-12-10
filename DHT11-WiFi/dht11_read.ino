#include "DHT.h"
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const char* ssid = "Snoop-MainWiFi";
const char* password =  "Snaup99123";
const char* mqttServer = "m15.cloudmqtt.com";
const char* mqttUser = "cbkhxqvy";  //obtenido en cloudMQTT
const char* mqttPassword = "pmqbjZGcI2-2";
const int mqttPort=13650;
const int mqttSSLPort=23650;
const int mqttTLSPort=33650;
const int maxConnections=5;

 
WiFiClient espClient;
PubSubClient client(espClient);

DHT dht;

void setup()
{
  Serial.begin(115200);
  delay(10);

  //Conexion WiFi ESP8266
  
  WiFi.begin(ssid, password);
  Serial.println("Conectandose a la red WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("OK - Conectado a la red WiFi");
  
  //Conexion a CloudMQTT
  
  client.setServer(mqttServer, mqttPort);
  client.setCallback(callback);
 
  while (!client.connected()) {
    Serial.println("Connecting to MQTT...");
 
    if (client.connect("ESP8266Client", mqttUser, mqttPassword )) {
 
      Serial.println("connected");  
 
    } else {
 
      Serial.print("failed with state ");
      Serial.print(client.state());
      delay(2000);
 
    }
  }

  //Inicializacion DHT11
  
  Serial.println("Iniciando recoleccion de datos");
  Serial.println();
  dht.setup(D1);   /* D1 is used for data communication */
}

void callback(char* topic, byte* payload, unsigned int length) {
 
  Serial.print("Message arrived in topic: ");
  Serial.println(topic);
 
  Serial.print("Message:");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
 
  Serial.println();
  Serial.println("-----------------------");
 
}

void loop()
{
  delay(dht.getMinimumSamplingPeriod());/*Delay minimo por periodo de muestreo*/
  float humedad = dht.getHumidity();/* Obtiene humedad */
  float temperatura = dht.getTemperature();/* Obtiene temperatura */
  Serial.print("\t");
  Serial.print(humedad, 1);
  Serial.print("\t\t");
  Serial.print(temperatura, 1);
  Serial.println("");

  char tempS[8];
  dtostrf(temperatura, 6, 2, tempS); // Leave room for too large numbers! 
  char humS[8]; // Buffer big enough for 7-character float
  dtostrf(humedad, 6, 2, humS); // Leave room for too large numbers! 
  
  client.publish("nodeMCU-Snoop/temperatura",tempS);
  client.publish("nodeMCU-Snoop/humedad",humS);
  delay(5000);
}
