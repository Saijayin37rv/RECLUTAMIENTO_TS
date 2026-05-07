function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

const SECTION_ORDER = [
  { key: "puesto", label: "PUESTO" },
  { key: "ubicacion", label: "UBICACION" },
  { key: "salarioYPrestaciones", label: "SALARIO_Y_PRESTACIONES" },
  { key: "beneficiosAdicionales", label: "BENEFICIOS_ADICIONALES" },
  { key: "bonosYApoyos", label: "BONOS_Y_APOYOS" },
  { key: "condicionesBonosYApoyos", label: "CONDICIONES" },
  { key: "perfil", label: "PERFIL" },
  { key: "condicionesTrabajo", label: "CONDICIONES_TRABAJO" },
  { key: "rutasTransporte", label: "RUTAS_TRANSPORTE" },
];

const VACANTES = [
  {
    servicio: "STEEL WAREHOUSE",
    puesto: "OFICIAL",
    ubicacion: "Av. Antiguo Camino a Escobedo, Metroparque, El Jaral.",
    salarioYPrestaciones:
      "Salario mensual libre: $13,500. Salario semanal libre: $3,150. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "Bono de permanencia en 4 exhibiciones: $500 (15 y 30 días) y $1,000 (60 y 90 días), sujeto a no contar con faltas ni permisos injustificados. Bono de asistencia aplica al cumplir el año laboral, sin incapacidades, permisos o faltas durante el año. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo; para personal casado/en concubinato también aplica para cónyuge o hijo(a).",
    perfil:
      "Sexo: masculino. Escolaridad: secundaria (mínimo). Experiencia: obligatoria en computación y deseable en seguridad privada. Edad: 20 a 50 años. Estatura: 1.60. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva; no tatuajes visibles y no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas (08:00 a 20:00 y 20:00 a 08:00), 5 días por semana con 2 descansos rotativos. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: consignas, recorridos perimetrales, reportes, revisión de embarques, revisión a operarios y control de accesos. Vestidores: baños. Área de comida: microonda y nevera. Tiempo de comida: 1 hora.",
    rutasTransporte:
      "Traslado OXXO, Navistar Jaral, Mr. Pizza dentro del Jaral, Av. Las Torres Escobedo, OXXO Monclova.",
  },
  {
    servicio: "LJ TUBE",
    puesto: "OFICIAL",
    ubicacion: "Av. Antiguo Camino a Escobedo, Metroparque, El Jaral.",
    salarioYPrestaciones:
      "Salario mensual libre: $13,500. Salario semanal libre: $3,150. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "Bono de permanencia en 4 exhibiciones: $500 (15 y 30 días) y $1,000 (60 y 90 días), sujeto a no contar con faltas ni permisos injustificados. Bono de asistencia aplica al cumplir el año laboral, sin incapacidades, permisos o faltas durante el año. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo; para personal casado/en concubinato también aplica para cónyuge o hijo(a).",
    perfil:
      "Sexo: masculino. Escolaridad: secundaria (mínimo). Experiencia: deseable en seguridad privada. Edad: 20 a 50 años. Estatura: 1.60 m. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva; no tatuajes visibles y no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas (08:00 a 20:00 y 20:00 a 08:00), 5 días por semana con 2 descansos rotativos. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: ejecutar consignas, recorridos perimetrales, elaboración de reportes, revisión a embarques, revisión a operarios y servicio a la intemperie. Área de comida: cuenta con comedor para degustar alimentos y puede calentar comida. Tiempo de comida: 1 hora.",
    rutasTransporte:
      "Traslado OXXO, Navistar Jaral, Mr. Pizza dentro del Jaral, Av. Las Torres Escobedo, OXXO Monclova.",
  },
  {
    servicio: "BOSH",
    puesto: "OFICIAL",
    ubicacion: "Interpuerto, Salinas Victoria.",
    salarioYPrestaciones:
      "Salario semanal libre: $3,383.33. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:  
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de aniversario laboral al cumplir el año laboral. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo; para personal casado/en concubinato también aplica para cónyuge o hijo(a).",
    perfil:
      "Sexo: masculino o femenino (con autorización). Escolaridad: secundaria (mínimo). Experiencia: deseable en seguridad privada. Edad: 20 a 50 años. Estatura: hombres 1.60 m, mujeres 1.55 m. Adicionales: C.",
    condicionesTrabajo:
      "Turno de 12 horas, turnos fijos día o noche (06:00 a 18:00 y 18:00 a 06:00), 5 días a la semana con 2 descansos rotativos (no seguidos), asignados por el servicio. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: ejecutar consignas, recorridos perimetrales, elaboración de reportes, revisión a embarques, revisión a operarios, control de accesos, atención al cliente, registro de herramientas y servicio a la intemperie. Vestidores: no. Área de comida: cuenta con comedor para degustar alimentos y puede calentar alimentos (no venden comidas). Tiempo de comida: 1 hora.",
    rutasTransporte:
      "Ruta diurna y nocturna: 5:00 am/pm Valle de Castilla (Valle del Norte), 5:10 am/pm Valle Norte (Anuncio Toto), 5:20 am/pm Pilares (Merco), 5:40 am/pm Satélite (First Cash), 5:50 am/pm Emiliano Zapata (Av. Francisco Villa), 6:00 am/pm Interpuerto (servicio Bosh).",
  },
  {
    servicio: "HUSSMANN",
    puesto: "OFICIAL",
    ubicacion: "Ciénega de Flores.",
    salarioYPrestaciones:
      "Salario mensual libre: $14,000. Salario semanal libre: $3,266.66. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a). Se les da 3 días con goce de sueldo.",
    perfil:
      "Sexo: hombres y mujeres. Escolaridad: secundaria (mínimo). Experiencia: requiere experiencia obligatoria en seguridad privada. Edad: 20 a 50 años. Estatura: hombres 1.60 m, mujeres 1.55 m. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva; no tatuajes visibles y no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas (08:00 a 20:00 y 20:00 a 08:00), 5 días a la semana con 2 descansos rotativos. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: ejecutar consignas, recorridos perimetrales, elaboración de reportes, revisión a embarques, revisión a operarios, control de accesos, atención al cliente y aplicación de CTPAT. Vestidores: cuenta con vestidores. Área de comida: cuenta con comedor para degustar alimentos; puede calentar alimentos (no venden comidas). Tiempo de comida: 1 hora.",
    rutasTransporte:
      "Ruta de traslado Tactical: Real de Palmas (Carnicería GM y refacciones JOMAR), Villas de Alcalá (Bodega Aurrerá), Valle del Carrizal (Oxxo entrada), Santa Lucía (Oxxo), Aceromex carretera Laredo-Ciénega (Casas ARA), Aeropuerto (frente a campo militar).",
  },
  {
    servicio: "HUSSMANN",
    puesto: "OFICIAL SELLADOR",
    ubicacion: "Ciénega de Flores.",
    salarioYPrestaciones:
      "Salario mensual libre: $14,500. Salario semanal libre: $3,383.33. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a). Se les da 3 días con goce de sueldo.",
    perfil:
      "Sexo: hombres. Escolaridad: secundaria (mínimo). Experiencia: deseable tener experiencia. Edad: 20 a 50 años. Estatura: hombres 1.60 m, mujeres 1.55 m. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva; no tatuajes visibles y no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas (08:00 a 20:00 y 20:00 a 08:00), 5 días a la semana con 2 descansos rotativos. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: ejecutar consignas, recorridos perimetrales, elaboración de reportes, revisión y sello a embarques, revisión a operarios, control de accesos y atención al cliente. Vestidores: cuenta con vestidores. Área de comida: cuenta con comedor para degustar alimentos; puede calentar alimentos (no venden comidas). Tiempo de comida: 1 hora.",
    rutasTransporte:
      "6:00 GM, 6:15 Jomar, 6:35 Puente RSP, 6:45 Aurrera, 7:05 Oxxo Santa Lucía, 7:30 Aeropuerto.",
  },
  {
    servicio: "VIAKEM",
    puesto: "OFICIAL",
    ubicacion: "Av. Manuel L. Barragán 701, San Nicolás de los Garza, N.L.",
    salarioYPrestaciones:
      "Salario mensual libre: $13,500. Salario semanal libre: $3,150. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a).",
    perfil:
      "Sexo: indistinto. Escolaridad: secundaria (mínimo). Experiencia: deseable tener experiencia en seguridad privada. Edad: 20 a 53 años. Estatura: hombres 1.60 m, mujeres 1.55 m. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva; tatuajes visibles solo si no son ofensivos o no están en rostro/cuello; no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas con turnos y descansos rotativos (esquema 7x7). Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: control de accesos, resguardo intramuros, atención a personal interno y externo, revisión de unidades de carga con sistema C-TPAT y OEA, compresión y manejo de áreas de trabajo, revisión con equipos electrónicos de personas y unidades, rondines preventivos de seguridad, detección de actividades sospechosas y peligrosas, registro de visitas/contratistas/proveedores, reporte de incidentes y manejo de documentación. Área de comida: cuenta con comedor para degustar alimentos. Tiempo de comida: 1 hora.",
    rutasTransporte:
      "Ruta 219 Apodaca, 226 Buenavista, 217, 220 Pedregal, 316, 233, 226 Palmiras.",
  },
  {
    servicio: "JAITER",
    puesto: "OFICIAL",
    ubicacion: "Av. Jardines del Canadá 328, Gral. Escobedo, N.L.",
    salarioYPrestaciones:
      "Salario mensual libre: $13,500. Salario semanal libre: $3,150. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a).",
    perfil:
      "Sexo: indistinto. Escolaridad: secundaria (mínimo). Experiencia: deseable tener experiencia en seguridad privada. Edad: 20 a 53 años. Estatura: hombres 1.60 m, mujeres 1.55 m. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva; no tatuajes visibles y no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turnos rotativos de 7 a 7, esquema 5x2 (2 descansos rotativos). Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: control de accesos, resguardo intramuros, atención a personal interno y externo, revisión de unidades de carga con sistema C-TPAT y OEA, compresión y manejo de áreas de trabajo, revisión con equipos electrónicos de personas y unidades, rondines preventivos de seguridad, detección de actividades sospechosas y peligrosas, registro de visitas/contratistas/proveedores, reporte de incidentes y manejo de documentación. Área de comida: cuenta con comedor para degustar alimentos. Tiempo de comida: 1 hora.",
    rutasTransporte:
      "Ruta Miravista, 209 Bosques, 209 Olivos, Sauces Pinos Morado, 217.",
  },
  {
    servicio: "DANFOSS",
    puesto: "JEFE DE TURNO",
    ubicacion: "Av. Miguel Alemán, Apodaca.",
    salarioYPrestaciones:
      "Salario mensual libre: $15,500. Salario semanal libre: $3,616.67. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco rojo; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a).",
    perfil:
      "Sexo: masculino y femenino. Escolaridad: preparatoria. Experiencia: indispensable tener experiencia. Edad: 25 a 50 años. Estatura: 1.65 m. Adicionales: antidoping y examen de sangre, estudio socioeconómico, psicotest, prueba proyectiva, entrevista con el cliente; no tatuajes visibles; no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas (07:00 a 19:00 y 19:00 a 07:00), 5 días a la semana con 2 descansos rotativos. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: validar y revisar temas de inspección de unidades y cumplimiento de funciones asignadas a oficiales, recorridos en instalaciones y validación de visitas. Vestidores: cuenta con vestidores. Área de comida: cuenta con comedor para degustar alimentos; compra de alimentos por $50 únicamente pago con tarjeta; cuenta con Oxxo dentro de la planta. Tiempo de comida: 45 a 50 min.",
    rutasTransporte:
      "104, 105, 109, 219, ruta express.",
  },
  {
    servicio: "DANFOSS",
    puesto: "OFICIAL",
    ubicacion: "Av. Miguel Alemán, Apodaca.",
    salarioYPrestaciones:
      "Salario mensual libre: $15,500. Salario semanal libre: $3,616.67.El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco rojo; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a).",
    perfil:
      "Sexo: masculino y femenino. Escolaridad: secundaria (mínimo). Experiencia: deseable tener experiencia en seguridad privada. Edad: 19 a 50 años. Estatura: hombres 1.60 m, mujeres 1.55 m. Adicionales: antidoping y examen de sangre, estudio socioeconómico, psicotest, prueba proyectiva, entrevista con el cliente; no tatuajes visibles; no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas (07:00 a 19:00 y 19:00 a 07:00), 5 días a la semana con 2 descansos rotativos. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: control de acceso, visita/proveedor/contratistas, protocolos de inspección CTPAT en todas las unidades que ingresan, rotación de puntos, zonas a la intemperie. Vestidores: cuenta con vestidores. Área de comida: cuenta con comedor para degustar alimentos; compra de alimentos por $50 únicamente pago con tarjeta; cuenta con Oxxo dentro de la planta. Tiempo de comida: 45 a 50 min.",
    rutasTransporte:
      "104, 105, 109, 219, ruta express.",
  },
  {
    servicio: "CADECO",
    puesto: "OFICIAL",
    ubicacion: "Av. Miguel Alemán, Apodaca.",
    salarioYPrestaciones:
      "Salario semanal libre: $3,546.67. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a). Se les da 3 días con goce de sueldo.",
    perfil:
      "Sexo: hombres. Escolaridad: secundaria (mínimo). Experiencia: deseable tener experiencia en seguridad privada. Edad: 25 a 50 años. Estatura: 1.60 m. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva; no tatuajes visibles; no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas (07:00 a 19:00 y 19:00 a 07:00), 5 días a la semana con 2 descansos rotativos. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: ejecutar consignas, recorridos en almacén, elaboración de reportes, control de accesos y atención al cliente (área climatizada, casetas y bodega). Área de comida: cuenta con comedor para degustar alimentos y puede calentar alimentos (no venden comidas). Tiempo de comida: 40 min.",
    rutasTransporte:
      "Rutas: 109, 105, 219, Ruta-AY.",
  },
  {
    servicio: "MAHLE",
    puesto: "OFICIAL",
    ubicacion: "Santa Catarina.",
    salarioYPrestaciones:
      "Salario mensual libre: $13,500. Salario semanal libre: $3,150. El primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada). Prestaciones de ley: IMSS, INFONAVIT, aguinaldo (15 días), vacaciones (primer año 12 días).",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a).",
    perfil:
      "Sexo: masculino. Escolaridad: secundaria (mínimo). Experiencia: no se requiere experiencia obligatoria; deseable tener experiencia en seguridad privada. Edad: 19 a 50 años. Estatura: hombre 1.60 m. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva; no tatuajes visibles; no ex policía/ex militar salvo con baja.",
    condicionesTrabajo:
      "Turno de 12 horas (06:00 a 18:00 y 18:00 a 06:00), 5 días a la semana con 2 descansos y turnos rotativos. Habilidades: actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad. Actividades: ejecutar consignas, recorridos perimetrales, elaboración de reportes, revisión a embarques, revisión a operarios, control de accesos y atención al cliente. Área de comida: cuenta con comedor para degustar alimentos; puede calentar y refrigerar alimentos; comida subsidiada con costo aproximado de $50 pesos. Tiempo de comida: 45 minutos.",
    rutasTransporte:
      "En turno de mañana se puede usar transporte de la empresa de Mahle; en turno de noche el punto de reunión es en Smart 5:20 pm. Rutas de transporte: 107, 155, 310, 400, 601 y Ruta Express.",
  },
  {
    servicio: "CATERPILLAR",
    puesto: "OFICIAL BÁSICO",
    ubicacion:
      "SANTA CATARINA\nCIÉNEGA DE FLORES\nRAMOS ARIZPE\nACUÑA\nNUEVO LAREDO",
    salarioYPrestaciones:
      "SALARIO SEMANAL LIBRE POR UBICACIÓN:\n- Santa Catarina: $3,427.67\n- Ciénega de Flores: $3,033.33\n- Ramos Arizpe: $3,427.67\n- Acuña: $2,566.66\n- Nuevo Laredo: $2,871.17\n\nEl primer pago se realiza la siguiente semana (se labora lunes a domingo y se paga el viernes de la segunda semana laborada).\n\nPRESTACIONES DE LEY:\n- IMSS\n- INFONAVIT\n- Aguinaldo (15 días)\n- Vacaciones (primer año 12 días)",
    beneficiosAdicionales:
      "Crédito FONACOT. Uniforme gratuito (2 juegos): camisola, pantalón cargo, zapato industrial y chaleco azul; se renueva cada 6 meses. Fondo de ahorro: colaborador aporta $50 semanales y la empresa agrega $25 semanales; se entrega en mayo al cumplir un año laboral.",
    bonosYApoyos:
      "BONO PERMANENCIA 3,000, BONO ASISTENCIA PERFECTA 1,000, BONO POR RECOMENDACIÓN 1,000, DEFUNCIÓN TOTAL DE MONTO RECAUDADO POR PERSONAL DE TACTICAL SUPPORT.",
    condicionesBonosYApoyos:
      "El pago se realizará en 4 exhibiciones (al cumplir 15 y 30 días se realizará el pago de $500; a los 60 y 90 días el pago será de $1,000), sujeto a NO contar con faltas ni permisos injustificados y NO aplica con reingresos. Bono de asistencia aplica al cumplir el año laboral, siempre y cuando el elemento no cuente con incapacidades, permisos o faltas durante su año laboral. Bono de aniversario laboral al cumplir el año laboral. Bono por recomendado al cumplir 20 días del recomendado dentro del servicio. Defunción: descuento voluntario de $20 por nómina y aplica para familiares del primer círculo consanguíneo (padre, madre y hermano[a]); para personal casado/en concubinato aplica para cónyuge o hijo(a). Se les da 3 días con goce de sueldo.",
    perfil:
      "Sexo: indistinto. Escolaridad: secundaria (mínimo). Experiencia: no se requiere experiencia obligatoria; deseable tener experiencia en seguridad privada. Edad: 18 a 50 años. Estatura: hombre 1.65 m, mujer 1.60 m. Adicionales: antidoping, estudio socioeconómico, psicotest, prueba proyectiva, investigación Reyna Asesores, entrevista con cliente, carta de no antecedentes penales (solo Acuña); no tatuajes visibles; no ex policía/ex militar.",
    condicionesTrabajo:
      "HABILIDADES:\n- Actitud de servicio, tolerancia, excelente comunicación oral y escrita, proactividad.\n\nACTIVIDADES:\n- Recorridos perimetrales, elaboración de reportes, revisión a embarques, revisión a operarios, control de accesos y atención al cliente.\n\nJORNADAS POR UBICACIÓN:\n- Santa Catarina: 6x1 (05:30-14:00, 14:00-22:30, 22:30-06:30)\n- Ciénega de Flores: 6x1 (06:30-14:00, 14:00-22:30, 22:30-06:30)\n- Ramos Arizpe: 6x1 (06:30-14:00, 14:00-22:30, 22:30-06:30)\n- Acuña: 6x1 (05:00-13:00, 13:00-21:00, 21:00-05:00)\n- Nuevo Laredo: 6x1 (07:00-15:00, 15:00-23:00, 23:00-07:00)\n\nVESTIDORES:\n- Santa Catarina: No\n- Ciénega de Flores: Sí\n- Ramos Arizpe: No\n- Acuña: No\n- Nuevo Laredo: No\n\nTIEMPO DE COMIDA GENERAL: 30 min.",
    rutasTransporte:
      "RUTAS POR UBICACIÓN:\n- Santa Catarina: 107, 155, 310, 400, 601, 96 y Ruta Express.\n- Ciénega de Flores: 318 y 685.\n- Ramos Arizpe: Ruta Blanca (Estela Torres Quadras) y chofer recoge/lleva en punto asignado.\n- Acuña: chofer recoge y lleva en puntos asignados.\n- Nuevo Laredo: Laredo TX, Los Kilómetros y Benito Juárez.",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderCards() {
  const cardsGrid = document.getElementById("cardsGrid");
  if (!cardsGrid) return;

  cardsGrid.innerHTML = VACANTES.map((vacante, index) => {
    const sectionsHtml = SECTION_ORDER.map((section) => {
      const content = vacante[section.key] || "Por definir";
      return `
        <section class="copy-section" data-section="${escapeHtml(section.label)}">
          <div class="section-top">
            <h3>${escapeHtml(section.label)}</h3>
            <button class="copy-btn copy-section-btn" type="button">Copiar</button>
          </div>
          <p class="section-content">${escapeHtml(content)}</p>
        </section>
      `;
    }).join("");

    return `
      <article class="job-card" id="vacante-${index + 1}" data-card-id="vacante-${index + 1}">
        <div class="card-header">
          <div>
            <p class="label">Servicio</p>
            <h2 class="service-name">${escapeHtml(vacante.servicio || "SIN SERVICIO")}</h2>
          </div>
          <button class="copy-btn copy-card-btn" type="button">
            Copiar vacante completa
          </button>
        </div>
        <div class="card-body">${sectionsHtml}</div>
      </article>
    `;
  }).join("");
}

function renderServicesPanel() {
  const servicesList = document.getElementById("servicesList");
  if (!servicesList) return;

  servicesList.innerHTML = VACANTES.map((vacante, index) => {
    const id = `vacante-${index + 1}`;
    const title = `${vacante.servicio || "SIN SERVICIO"} - ${vacante.puesto || "SIN PUESTO"}`;
    const subtitle = vacante.ubicacion || "Sin ubicación";
    return `
      <button class="service-item" type="button" data-target-id="${id}">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(subtitle)}</span>
      </button>
    `;
  }).join("");
}

function setActiveCard(cardId) {
  const cards = document.querySelectorAll(".job-card");
  cards.forEach((card) => card.classList.toggle("active-card", card.id === cardId));

  const panelItems = document.querySelectorAll(".service-item");
  panelItems.forEach((item) =>
    item.classList.toggle("active", item.dataset.targetId === cardId)
  );
}

async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    const oldText = button.textContent;
    button.textContent = "Copiado";
    button.classList.add("copied");
    setTimeout(() => {
      button.textContent = oldText;
      button.classList.remove("copied");
    }, 1200);
  } catch (error) {
    alert("No se pudo copiar automaticamente. Revisa permisos del navegador.");
    console.error(error);
  }
}

function buildCardText(card) {
  const title = normalizeText(
    card.querySelector(".service-name")?.textContent || "SIN SERVICIO"
  );
  const lines = [`SERVICIO: ${title}`];

  const sections = card.querySelectorAll(".copy-section");
  sections.forEach((section) => {
    const name = section.dataset.section || "Seccion";
    const content = normalizeText(
      section.querySelector(".section-content")?.textContent || ""
    );
    lines.push(`${name}: ${content}`);
  });

  return lines.join("\n");
}

document.addEventListener("click", (event) => {
  const panelItem = event.target.closest(".service-item");
  if (panelItem) {
    const targetId = panelItem.dataset.targetId;
    const card = document.getElementById(targetId);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCard(targetId);
    }
    return;
  }

  const sectionBtn = event.target.closest(".copy-section-btn");
  if (sectionBtn) {
    const section = sectionBtn.closest(".copy-section");
    const label = section.dataset.section || "Seccion";
    const content = normalizeText(
      section.querySelector(".section-content")?.textContent || ""
    );
    const text = `${label}: ${content}`;
    copyToClipboard(text, sectionBtn);
    return;
  }

  const cardBtn = event.target.closest(".copy-card-btn");
  if (cardBtn) {
    const card = cardBtn.closest(".job-card");
    setActiveCard(card.id);
    const text = buildCardText(card);
    copyToClipboard(text, cardBtn);
  }
});

renderCards();
renderServicesPanel();
setActiveCard("vacante-1");
