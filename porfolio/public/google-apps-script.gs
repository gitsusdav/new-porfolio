/**
 * Google Apps Script para recibir datos del formulario de contacto
 * y almacenarlos en Google Sheets
 *
 * INSTRUCCIONES DE CONFIGURACIÓN:
 *
 * 1. Crea una nueva Google Sheet
 * 2. Ve a Extensiones → Apps Script
 * 3. Copia y pega este código completo
 * 4. Guarda el proyecto (Ctrl + S)
 * 5. Haz clic en "Implementar" → "Nueva implementación"
 * 6. Selecciona tipo: "Aplicación web"
 * 7. Configuración:
 *    - Ejecutar como: Tu cuenta
 *    - Quién tiene acceso: Cualquier persona
 * 8. Haz clic en "Implementar"
 * 9. Autoriza la aplicación cuando te lo pida
 * 10. COPIA LA URL que aparece (ejemplo: https://script.google.com/macros/s/ABC123.../exec)
 * 11. Pega esa URL en el archivo Contact.astro en la variable GOOGLE_SCRIPT_URL
 */

// Función que maneja las solicitudes POST
function doPost(e) {
  try {
    // Obtener la hoja activa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Si es la primera vez, crear los encabezados
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Fecha y Hora',
        'Nombre',
        'Email',
        'Teléfono',
        'País',
        'Presupuesto',
        'Mensaje'
      ];

      sheet.appendRow(headers);

      // Formatear los encabezados
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
      headerRange.setHorizontalAlignment('center');
    }

    // DEBUG: Registrar qué datos estamos recibiendo
    console.log('📥 Datos recibidos en Google Apps Script:');
    console.log('e.postData:', e.postData);
    console.log('e.parameter:', e.parameter);
    
    // Obtener los datos del formulario
    let data = {};
    
    // Método 1: Intentar parsear JSON del body
    if (e.postData && e.postData.contents) {
      console.log('📦 Contenido del POST:', e.postData.contents);
      try {
        data = JSON.parse(e.postData.contents);
        console.log('✅ JSON parseado correctamente:', data);
      } catch (jsonError) {
        console.log('❌ Error parseando JSON:', jsonError);
        data = {};
      }
    }
    
    // Método 2: Si no hay datos del JSON, usar parámetros de URL
    if (Object.keys(data).length === 0) {
      data = e.parameter || {};
      console.log('🔄 Usando parámetros de URL:', data);
    }
    
    // Método 3: Si aún no hay datos, intentar parsear como form data
    if (Object.keys(data).length === 0 && e.postData) {
      console.log('🔄 Intentando parsear como form data...');
      try {
        // Intentar diferentes métodos de parseo
        const contentType = e.postData.type;
        console.log('Content-Type:', contentType);
        
        if (contentType === 'application/x-www-form-urlencoded') {
          // Parsear form data
          const formData = e.postData.contents;
          const params = new URLSearchParams(formData);
          data = Object.fromEntries(params);
          console.log('✅ Form data parseado:', data);
        }
      } catch (formError) {
        console.log('❌ Error parseando form data:', formError);
      }
    }

    // Función helper para obtener valor de múltiples fuentes
    function getValue(key) {
      return data[key] || e.parameter[key] || '';
    }
    
    const nombre = getValue('nombre');
    const email = getValue('email');
    const telefono = getValue('telefono');
    const pais = getValue('pais');
    const presupuesto = getValue('presupuesto');
    const mensaje = getValue('mensaje');

    // DEBUG: Mostrar valores extraídos
    console.log('📋 Valores extraídos:');
    console.log('- Nombre:', nombre);
    console.log('- Email:', email);
    console.log('- Teléfono:', telefono);
    console.log('- País:', pais);
    console.log('- Presupuesto:', presupuesto);
    console.log('- Mensaje:', mensaje);
    console.log('- Fecha del frontend:', data.fecha);

    // Crear el timestamp (usar el del frontend si está disponible, sino crear uno nuevo)
    let formattedDate;
    if (data.fecha) {
      formattedDate = data.fecha;
    } else {
      const timestamp = new Date();
      formattedDate = Utilities.formatDate(timestamp, 'America/Mexico_City', 'dd/MM/yyyy HH:mm:ss');
    }

    // Crear la fila con los datos
    const rowData = [
      formattedDate,
      nombre,
      email,
      telefono,
      pais,
      presupuesto,
      mensaje
    ];

    // DEBUG: Mostrar qué se va a guardar
    console.log('💾 Datos que se van a guardar en la hoja:', rowData);

    // Agregar la fila a la hoja
    sheet.appendRow(rowData);
    
    console.log('✅ Datos guardados exitosamente en la hoja');

    // Auto-ajustar las columnas
    sheet.autoResizeColumns(1, 7);

    // Aplicar formato alternado a las filas (opcional)
    const lastRow = sheet.getLastRow();
    if (lastRow % 2 === 0) {
      const range = sheet.getRange(lastRow, 1, 1, 7);
      range.setBackground('#f3f3f3');
    }

    // Retornar respuesta de éxito
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Datos guardados correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Retornar respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función GET opcional para verificar que el script funciona
function doGet(e) {
  return ContentService
    .createTextOutput('El script está funcionando correctamente. Usa POST para enviar datos.')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * OPCIONAL: Función para enviar notificaciones por email cuando llega un nuevo lead
 * Descomenta y configura si quieres recibir emails
 */
/*
function sendEmailNotification(nombre, email, mensaje) {
  const recipient = 'tu-email@example.com'; // Cambia esto por tu email
  const subject = '🚀 Nuevo Lead en tu Portfolio!';
  const body = `
    Has recibido un nuevo mensaje de contacto:

    Nombre: ${nombre}
    Email: ${email}
    Mensaje: ${mensaje}

    Fecha: ${new Date().toLocaleString()}
  `;

  MailApp.sendEmail(recipient, subject, body);
}
*/
