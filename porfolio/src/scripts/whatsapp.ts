/**
 * WhatsApp Integration
 *
 * Este archivo maneja el envío de notificaciones por WhatsApp cuando se recibe
 * un nuevo mensaje del formulario de contacto.
 *
 * Configuración:
 * 1. Ve a https://www.callmebot.com/blog/free-api-whatsapp-messages/
 * 2. Agrega el número de CallMeBot (+34 644 44 71 87) a tus contactos
 * 3. Envía un mensaje de WhatsApp con el texto: "I allow callmebot to send me messages"
 * 4. Recibirás tu API Key
 * 5. Configura tu número y API Key en whatsappConfig abajo
 */

interface WhatsAppConfig {
  enabled: boolean;
  phoneNumber: string; // Tu número con código de país sin + (ej: 584121234567)
  apiKey: string; // Tu API Key de CallMeBot
}

// IMPORTANTE: Configura tu número y API Key aquí
const whatsappConfig: WhatsAppConfig = {
  enabled: false, // Cambia a true cuando tengas tu API Key
  phoneNumber: 'TU_NUMERO', // Ejemplo: 584121234567
  apiKey: 'TU_API_KEY' // Tu API Key de CallMeBot
};

export interface ContactNotification {
  nombre: string;
  email: string;
  telefono?: string;
  pais?: string;
  presupuesto?: string;
  mensaje: string;
}

/**
 * Envía una notificación de WhatsApp cuando se recibe un nuevo lead
 * @param data - Datos del contacto
 * @returns Promise<boolean> - true si fue exitoso, false si hubo error
 */
export async function sendWhatsAppNotification(data: ContactNotification): Promise<boolean> {
  // Verificar si está habilitado
  if (!whatsappConfig.enabled) {
    console.log('📱 Notificación WhatsApp deshabilitada');
    return false;
  }

  // Validar configuración
  if (whatsappConfig.phoneNumber === 'TU_NUMERO' || whatsappConfig.apiKey === 'TU_API_KEY') {
    console.warn('⚠️ WhatsApp no está configurado correctamente');
    return false;
  }

  try {
    // Construir mensaje
    const notificationText = buildNotificationMessage(data);
    const encodedText = encodeURIComponent(notificationText);

    // URL de la API de CallMeBot
    const whatsappUrl = `https://api.callmebot.com/whatsapp.php?phone=${whatsappConfig.phoneNumber}&text=${encodedText}&apikey=${whatsappConfig.apiKey}`;

    // Enviar notificación
    await fetch(whatsappUrl, {
      method: 'GET',
      mode: 'no-cors'
    });

    console.log('✅ Notificación WhatsApp enviada');
    return true;

  } catch (error) {
    console.error('❌ Error al enviar notificación WhatsApp:', error);
    return false;
  }
}

/**
 * Construye el mensaje de notificación
 * @param data - Datos del contacto
 * @returns string - Mensaje formateado
 */
function buildNotificationMessage(data: ContactNotification): string {
  let message = `🚀 *Nuevo Lead!*\n\n`;
  message += `👤 *Nombre:* ${data.nombre}\n`;
  message += `📧 *Email:* ${data.email}\n`;

  if (data.telefono) {
    message += `📱 *Teléfono:* ${data.telefono}\n`;
  }

  if (data.pais) {
    message += `🌎 *País:* ${data.pais}\n`;
  }

  if (data.presupuesto) {
    message += `💰 *Presupuesto:* ${data.presupuesto}\n`;
  }

  message += `\n💬 *Mensaje:*\n${data.mensaje}`;

  return message;
}

/**
 * Actualiza la configuración de WhatsApp
 * @param config - Nueva configuración
 */
export function updateWhatsAppConfig(config: Partial<WhatsAppConfig>): void {
  Object.assign(whatsappConfig, config);
}

/**
 * Obtiene el estado actual de la configuración
 * @returns WhatsAppConfig - Configuración actual (sin exponer el API Key)
 */
export function getWhatsAppStatus(): Omit<WhatsAppConfig, 'apiKey'> & { apiKeyConfigured: boolean } {
  return {
    enabled: whatsappConfig.enabled,
    phoneNumber: whatsappConfig.phoneNumber,
    apiKeyConfigured: whatsappConfig.apiKey !== 'TU_API_KEY'
  };
}