//declaración de pines de entrada
const int ENTRADA1 = 5;
const int ENTRADA2 = 6;
const int ENTRADA3 = 7;
//declaración de variables
int dato1 = 0;
int dato2 = 0;
int dato3 = 0;
int data = 0;

void setup() {
  //configuración de la comunicación serial
  Serial.begin(9600);
  //esperando conexión al puerto serie
  while(!Serial){}
  //inicio de la comunicación
  Serial.println("Hola mundo desde arduino");
}

void loop() {
  // lectura de los pines
  //dato1 = digitalRead(ENTRADA1);
  //dato2 = digitalRead(ENTRADA2);
  //dato3 = digitalRead(ENTRADA3);
  //recopilación de los datos
  // datos de prueba
  dato1 = 1;
  dato2 = 1;
  dato3 = 1;
  data = dato1+dato2+dato3;
  //envío de la información
  Serial.println(data);
  delay(500);
}
