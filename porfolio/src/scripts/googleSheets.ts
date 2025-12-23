/**
 * Google Sheets Integration
 *
 * Configuración:
 * 1. Crea una hoja de cálculo en Google Sheets
 * 2. Ve a Extensiones > Apps Script
 * 3. Copia el código del archivo public/google-apps-script.gs
 * 4. Despliega como Web App
 * 5. Copia la URL y pégala en la constante GOOGLE_SCRIPT_URL abajo
 */

// URL de Google Apps Script desde variables de entorno
const GOOGLE_SCRIPT_URL = import.meta.env.PUBLIC_GOOGLE_SCRIPT_URL || '';

/**
 * Envía los datos del formulario a Google Sheets
 * @param formData - Datos del formulario
 * @returns Promise<boolean> - true si fue exitoso
 */
export async function sendToGoogleSheets(formData: FormData): Promise<boolean> {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('⚠️ Google Sheets no está configurado. Verifica PUBLIC_GOOGLE_SCRIPT_URL.');
    return false;
  }

  try {
    // Preparar datos del formulario
    const data = {
      nombre: formData.get('nombre') as string,
      email: formData.get('email') as string,
      telefono: (formData.get('telefono') as string) || '',
      pais: (formData.get('pais') as string) || '',
      presupuesto: (formData.get('presupuesto') as string) || '',
      mensaje: formData.get('mensaje') as string,
      fecha: new Date().toLocaleString('es-ES')
    };

    console.log('📤 Enviando datos a Google Sheet:', data);

    // Enviar a Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    // Con no-cors no podemos leer la respuesta, pero si no hay error, asumimos éxito
    console.log('✅ Formulario enviado a Google Sheets:', response);
    return true;

  } catch (error) {
    console.error('❌ Error al enviar a Google Sheets:', error);
    return false;
  }
}