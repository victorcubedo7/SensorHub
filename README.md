# SensorHub

Plataforma IoT Open Source basada en ESP32, MQTT, Python y Raspberry Pi para monitorización de sensores, telemetría, almacenamiento histórico, alertas y gestión de dispositivos.

---

## Descripción

SensorHub es una plataforma IoT diseñada para recopilar datos de sensores conectados a dispositivos ESP32, transmitirlos mediante MQTT, procesarlos en un middleware Python y mostrarlos en una interfaz web responsive.

El proyecto nace como una plataforma modular, escalable y reutilizable orientada al aprendizaje de IoT, redes, desarrollo embebido y arquitecturas distribuidas.

La arquitectura está preparada para evolucionar desde un único dispositivo hasta múltiples nodos con diferentes sensores y configuraciones.

---

## Objetivos

- Recopilar datos desde dispositivos ESP32.
- Transmitir telemetría mediante MQTT.
- Validar y procesar mediciones.
- Almacenar histórico de datos.
- Mostrar información en tiempo real.
- Gestionar dispositivos remotamente.
- Configurar intervalos de medición.
- Generar alertas configurables.
- Realizar copias de seguridad automáticas.
- Servir como plataforma de aprendizaje IoT.

---

## Arquitectura

```text
Sensores
    │
    ▼
ESP32
    │
    ▼
MQTT Broker (Mosquitto)
    │
    ▼
Middleware Python
    ├── Validación
    ├── Procesamiento
    ├── Logs
    ├── API REST
    ├── WebSockets
    ├── Alertas
    └── Persistencia
            │
            ▼
      Base de Datos
            │
            ▼
      Interfaz Web
```

---

## Tecnologías

### Firmware

- ESP32
- PlatformIO
- Arduino Framework

### Backend

- Python
- MQTT
- FastAPI (pendiente de validación)

### Base de datos

- SQLite (primera versión)

### Infraestructura

- Raspberry Pi 3
- Mosquitto MQTT Broker

### Frontend

- HTML
- CSS
- JavaScript

---

## Estructura del proyecto

```text
sensorhub/

├── firmware/
│   └── esp32-node/
│       ├── src/
│       ├── include/
│       ├── test/
│       └── platformio.ini
│
├── middleware/
│   ├── app/
│   ├── tests/
│   ├── requirements.txt
│   └── README.md
│
├── web/
│   ├── css/
│   ├── js/
│   ├── assets/
│   └── index.html
│
├── simulador/
│   ├── simulator.py
│   └── README.md
│
├── hardware/
│   ├── esp32/
│   ├── sensors/
│   ├── schematics/
│   ├── pcb/
│   └── images/
│
├── docs/
│   ├── architecture.md
│   ├── installation.md
│   ├── mqtt-contract.md
│   ├── api.md
│   └── project-status.md
│
├── scripts/
│   ├── backup/
│   └── maintenance/
│
├── config/
│   └── config.example.*
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Hardware

La carpeta `hardware` contendrá:

- Documentación de placas ESP32.
- Pinout y conexiones.
- Datasheets de sensores.
- Esquemas eléctricos.
- Diseños PCB.
- Fotografías de prototipos.
- Información de alimentación y consumo.

---

## Estado del proyecto

🚧 En desarrollo

Fase actual:

- Definición de arquitectura.
- Organización del repositorio.
- Preparación del simulador MQTT.
- Diseño del middleware Python.
- Planificación de la interfaz web.

---

## Roadmap

### Fase 1

- [x] Creación del repositorio
- [x] Diseño inicial de la arquitectura
- [x] Organización de carpetas

### Fase 2

- [ ] Simulador MQTT
- [ ] Múltiples dispositivos simulados
- [ ] Generación de telemetría

### Fase 3

- [ ] Middleware Python
- [ ] Validación de mensajes
- [ ] Sistema de logs

### Fase 4

- [ ] Base de datos
- [ ] API REST
- [ ] Persistencia de datos

### Fase 5

- [ ] WebSockets
- [ ] Dashboard web
- [ ] Visualización histórica

### Fase 6

- [ ] Configuración remota
- [ ] Alertas
- [ ] Gestión de dispositivos

### Fase 7

- [ ] Integración hardware real
- [ ] Optimización energética
- [ ] Deep Sleep

### Fase 8

- [ ] Versión 1.0

---

## Licencia

Distribuido bajo licencia MIT.

Consulta el archivo LICENSE para más información.

---

## Autor

Victor Cubedo

Proyecto desarrollado como plataforma de aprendizaje y experimentación en IoT utilizando ESP32, MQTT, Python y Raspberry Pi.