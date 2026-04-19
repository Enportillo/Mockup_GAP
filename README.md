# Cumpleanos App (Mockup)

Aplicacion de demostracion para un flujo de cumpleanos empresarial.

Este proyecto simula como una empresa puede:

- Felicitar automaticamente a un empleado el dia de su cumpleanos.
- Evaluar si aplica una gift card segun su antiguedad.
- Invitar al resto del equipo a enviar saludos personalizados al cumpleanero.

## Objetivo del mockup

Mostrar de forma visual una experiencia end-to-end de celebracion interna, desde el registro de preferencias hasta los correos de notificacion y la interaccion del equipo.

Nota: es un mockup de front-end, sin integracion real con base de datos, cron jobs ni envio real de correos.

## Flujo principal de la app

1. Onboarding del empleado
- El empleado completa nombre, fecha de nacimiento, fecha de ingreso, hobbies, estilo de felicitacion y descripcion personal.

2. Simulacion del sistema
- Se muestra una vista tipo backend con base de datos + cron.
- Se detecta el cumpleanos y se determina si corresponde gift card (mas de 1 ano en la empresa).

3. Correos automaticos
- Correo privado al cumpleanero con felicitacion.
- Correo general a toda la empresa invitando a participar.

4. Landing de saludos del equipo
- Los companeros dejan un mensaje personalizado.
- Se muestra confirmacion de envio del saludo.

## Vistas incluidas

- Dashboard inicial del proyecto.
- Formulario de perfil del empleado.
- Simulador de logica del sistema.
- Bandeja con correo privado y correo general.
- Landing de felicitaciones con temas visuales (tech, naturaleza, cafe).

## Stack tecnologico

- React 19
- Vite 8
- Tailwind CSS 4
- lucide-react (iconografia)

## Ejecucion local

1. Instalar dependencias:

```bash
npm install
```

2. Levantar entorno de desarrollo:

```bash
npm run dev
```

3. Compilar para produccion:

```bash
npm run build
```

4. Previsualizar build:

```bash
npm run preview
```

## Posibles siguientes pasos

- Conectar con una API real de empleados.
- Programar envios reales de correo (por ejemplo, con un servicio de email transaccional).
- Guardar saludos en una base de datos para historial.
- Agregar autenticacion y roles (RRHH, lideres, empleados).
